
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.5.0";

// Nagłówki CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Konfiguracja klienta Supabase
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

serve(async (req) => {
  // Obsługa zapytań CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
    const { playbackId, segments, language } = await req.json();

    if (!playbackId || !segments) {
      return new Response(
        JSON.stringify({ error: "Brak wymaganych danych (playbackId lub segments)" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    console.log(`Aktualizacja transkrypcji dla playbackId: ${playbackId}`);

    // Sprawdź, czy transkrypcja już istnieje
    const { data: existingData, error: fetchError } = await supabase
      .from("transcripts")
      .select("*")
      .eq("playback_id", playbackId)
      .single();

    let result;
    if (existingData) {
      // Aktualizuj istniejącą transkrypcję
      const { data, error } = await supabase
        .from("transcripts")
        .update({
          segments,
          language: language || existingData.language,
        })
        .eq("playback_id", playbackId)
        .select()
        .single();

      if (error) throw error;
      result = { data, operation: "update" };
    } else {
      // Utwórz nową transkrypcję
      const { data, error } = await supabase
        .from("transcripts")
        .insert({
          playback_id: playbackId,
          segments,
          language: language || "pl",
        })
        .select()
        .single();

      if (error) throw error;
      result = { data, operation: "insert" };
    }

    return new Response(
      JSON.stringify(result),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
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
