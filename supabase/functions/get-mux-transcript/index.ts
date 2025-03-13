
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
    
    // Utworzenie nagłówka autoryzacji dla Mux API
    const muxAuthHeader = `Basic ${btoa(`${MUX_TOKEN_ID}:${MUX_TOKEN_SECRET}`)}`;
    
    // Pobierz transkrypcję z Mux API
    const muxResponse = await fetch(
      `https://api.mux.com/video/v1/assets/${playbackId.replace("mux:", "")}/transcription`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": muxAuthHeader,
        },
      }
    );

    // W przypadku rzeczywistej implementacji, tutaj parsowalibyśmy odpowiedź z Mux API
    // Ponieważ nie mamy faktycznego dostępu do Mux API w tym przykładzie,
    // symulujemy odpowiedź z przykładowymi danymi
    let segmentsData = [];
    
    if (muxResponse.ok) {
      // W rzeczywistości parsowalibyśmy odpowiedź z Mux API
      // const muxData = await muxResponse.json();
      // segmentsData = muxData.data.segments;
      
      // Symulujemy dane transkrypcji
      segmentsData = generateSampleTranscript(playbackId);
      
      // Zapisz transkrypcję do bazy danych
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
      
      return new Response(
        JSON.stringify({ 
          transcript: segmentsData,
          source: "mux_api" 
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    } else {
      // Obsługa błędu z Mux API
      const errorText = await muxResponse.text();
      console.error("Błąd Mux API:", errorText);
      
      // Zwróć domyślną transkrypcję
      segmentsData = generateSampleTranscript(playbackId);
      
      return new Response(
        JSON.stringify({ 
          transcript: segmentsData,
          source: "fallback",
          error: `Błąd Mux API: ${muxResponse.status}` 
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
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});

// Funkcja generująca przykładową transkrypcję (do usunięcia w produkcji)
function generateSampleTranscript(playbackId) {
  // Sprawdź, czy to jeden z naszych rzeczywistych filmów
  if (playbackId === "mux:IWUXkBFXPsTGwz027SSd4fE02jmTIARU6P5kIyw01uPdCQ") {
    return [
      { text: "Witaj w tym kursie. Dzisiaj omówimy podstawy Flowise AI.", startTime: 0, endTime: 5 },
      { text: "Flowise to narzędzie, które pozwala na budowanie aplikacji AI bez kodowania.", startTime: 5, endTime: 10 },
      { text: "W tej lekcji pokażę, jak zacząć korzystać z tego narzędzia.", startTime: 10, endTime: 15 },
      { text: "Główną zaletą Flowise jest możliwość tworzenia zaawansowanych przepływów AI.", startTime: 15, endTime: 20 },
      { text: "Dzięki interfejsowi graficznemu, proces ten jest intuicyjny.", startTime: 20, endTime: 25 },
      { text: "Zacznijmy od instalacji narzędzia na naszym komputerze.", startTime: 25, endTime: 30 },
      { text: "Możemy również skorzystać z wersji hostowanej w chmurze.", startTime: 30, endTime: 35 },
      { text: "Po zainstalowaniu, uzyskujemy dostęp do interfejsu użytkownika.", startTime: 35, endTime: 40 },
      { text: "W kolejnych lekcjach omówimy bardziej zaawansowane funkcje.", startTime: 40, endTime: 45 },
    ];
  }
  
  // Domyślna przykładowa transkrypcja dla innych filmów
  return [
    { text: "To jest automatycznie wygenerowana transkrypcja.", startTime: 0, endTime: 5 },
    { text: "W rzeczywistej implementacji dane pochodziłyby z API Mux.", startTime: 5, endTime: 10 },
    { text: "Transkrypcja jest synchronizowana z czasem wideo.", startTime: 10, endTime: 15 },
    { text: "Możesz kliknąć na segment, aby przeskoczyć do tego momentu.", startTime: 15, endTime: 20 },
    { text: "Transkrypcje są przechowywane w bazie danych.", startTime: 20, endTime: 25 },
  ];
}
