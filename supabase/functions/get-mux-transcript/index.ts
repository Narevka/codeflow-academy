
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.5.0";

// Nagłówki CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Konfiguracja klienta Supabase
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

// Konfiguracja Mux API
const MUX_TOKEN_ID = Deno.env.get("MUX_TOKEN_ID") || "";
const MUX_TOKEN_SECRET = Deno.env.get("MUX_TOKEN_SECRET") || "";

// Walidacja struktury segmentu transkrypcji
const isValidTranscriptSegment = (segment: any): boolean => {
  return (
    segment &&
    typeof segment === 'object' &&
    typeof segment.text === 'string' &&
    typeof segment.startTime === 'number' &&
    typeof segment.endTime === 'number'
  );
};

serve(async (req) => {
  // Obsługa zapytań CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Inicjalizacja klienta Supabase
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Parsuj JSON z zapytania
    const { playbackId } = await req.json();

    if (!playbackId) {
      return new Response(
        JSON.stringify({ error: "Brak playbackId w zapytaniu" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    console.log(`Pobieranie transkrypcji dla playbackId: ${playbackId}`);

    // Sprawdź, czy transkrypcja już istnieje w bazie
    const { data: existingTranscript, error: fetchError } = await supabase
      .from("transcripts")
      .select("*")
      .eq("playback_id", playbackId)
      .single();

    if (existingTranscript) {
      console.log("Znaleziono istniejącą transkrypcję w bazie");
      return new Response(
        JSON.stringify({ 
          transcript: existingTranscript.segments,
          source: "database"
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }

    // Jeśli nie ma w bazie, pobierz z Mux API
    console.log("Brak transkrypcji w bazie, pobieranie z Mux API");
    
    if (!MUX_TOKEN_ID || !MUX_TOKEN_SECRET) {
      console.error("Brak konfiguracji Mux API (MUX_TOKEN_ID lub MUX_TOKEN_SECRET)");
      return new Response(
        JSON.stringify({ 
          transcript: [],
          source: "error", 
          error: "Brak konfiguracji Mux API",
          message: "Transkrypcja niedostępna - brak konfiguracji API"
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }
    
    // Utworzenie nagłówka autoryzacji dla Mux API
    const muxAuthHeader = `Basic ${btoa(`${MUX_TOKEN_ID}:${MUX_TOKEN_SECRET}`)}`;
    
    // Pobierz transkrypcję z Mux API
    // Wyciągamy faktyczne asset_id z playback_id (usuwając 'mux:' prefix jeśli istnieje)
    const cleanPlaybackId = playbackId.replace("mux:", "");
    
    console.log(`Pobieranie transkrypcji dla Mux Asset ID: ${cleanPlaybackId}`);
    
    // Najpierw pobieramy informacje o assecie, aby uzyskać asset_id
    const assetResponse = await fetch(
      `https://api.mux.com/video/v1/assets?playback_ids=${cleanPlaybackId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": muxAuthHeader,
        },
      }
    );
    
    if (!assetResponse.ok) {
      const errorText = await assetResponse.text();
      console.error(`Błąd podczas pobierania informacji o assecie: ${errorText}`);
      return new Response(
        JSON.stringify({ 
          transcript: [],
          source: "error",
          error: `Błąd Mux API: ${errorText}`,
          message: "Brak dostępnej transkrypcji dla tego wideo"
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }
    
    const assetData = await assetResponse.json();
    
    if (!assetData || !assetData.data || assetData.data.length === 0) {
      console.error("Nie znaleziono assetu dla podanego playback_id");
      return new Response(
        JSON.stringify({ 
          transcript: [],
          source: "error",
          error: "Asset nie znaleziony",
          message: "Brak dostępnej transkrypcji dla tego wideo"
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }
    
    const assetId = assetData.data[0].id;
    console.log(`Znaleziono Asset ID: ${assetId} dla Playback ID: ${cleanPlaybackId}`);
    
    // Teraz możemy pobrać transkrypcję używając asset_id
    const muxResponse = await fetch(
      `https://api.mux.com/video/v1/assets/${assetId}/transcription`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": muxAuthHeader,
        },
      }
    );

    let segmentsData = [];
    
    if (muxResponse.ok) {
      try {
        // Parsowanie odpowiedzi z Mux API
        const muxData = await muxResponse.json();
        console.log("Otrzymano odpowiedź z Mux API:", JSON.stringify(muxData).substring(0, 200) + "...");
        
        // Przetwarzanie danych z Mux API
        if (muxData && muxData.data && Array.isArray(muxData.data.segments)) {
          segmentsData = muxData.data.segments.map(segment => ({
            text: segment.text || "",
            startTime: parseFloat(segment.start_time) || 0,
            endTime: parseFloat(segment.end_time) || 0
          }));
        } else {
          console.log("Dane z Mux API mają nieoczekiwaną strukturę");
          segmentsData = [];
        }
      } catch (parseError) {
        console.error("Błąd podczas parsowania odpowiedzi z Mux API:", parseError);
        segmentsData = [];
      }
      
      // Walidacja segmentów
      segmentsData = segmentsData.filter(isValidTranscriptSegment);
      
      if (segmentsData.length > 0) {
        // Zapisz transkrypcję do bazy danych tylko jeśli mamy prawidłowe dane
        const { data: insertData, error: insertError } = await supabase
          .from("transcripts")
          .insert({
            playback_id: playbackId,
            segments: segmentsData,
          })
          .select()
          .single();

        if (insertError) {
          console.error("Błąd podczas zapisywania transkrypcji:", insertError);
        } else {
          console.log("Transkrypcja zapisana do bazy danych");
        }
      }
      
      return new Response(
        JSON.stringify({ 
          transcript: segmentsData,
          source: "mux_api",
          message: segmentsData.length === 0 ? "Brak dostępnej transkrypcji dla tego wideo" : null
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    } else {
      // Obsługa błędu z Mux API
      let errorText;
      try {
        const errorData = await muxResponse.json();
        errorText = JSON.stringify(errorData);
      } catch (e) {
        errorText = await muxResponse.text();
      }
      
      console.error("Błąd Mux API:", errorText);
      
      return new Response(
        JSON.stringify({ 
          transcript: [],
          source: "error",
          error: `Błąd Mux API: ${errorText}`,
          message: "Brak dostępnej transkrypcji dla tego wideo"
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }
  } catch (error) {
    console.error("Błąd:", error.message);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        transcript: [],
        message: "Wystąpił błąd podczas pobierania transkrypcji"
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});

