
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.5.0";

// CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Supabase client configuration
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
    const { playbackId, segments, rawData, language } = await req.json();

    if (!playbackId) {
      return new Response(
        JSON.stringify({ error: "Missing required data (playbackId)" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    console.log(`Updating transcript for playbackId: ${playbackId}`);

    // Check if transcript already exists
    const { data: existingData, error: fetchError } = await supabase
      .from("transcripts")
      .select("*")
      .eq("playback_id", playbackId)
      .single();

    let result;
    if (existingData) {
      // Update existing transcript
      const updateData: any = {};
      if (segments) updateData.segments = segments;
      if (rawData) updateData.raw_data = rawData;
      if (language) updateData.language = language;
      
      const { data, error } = await supabase
        .from("transcripts")
        .update(updateData)
        .eq("playback_id", playbackId)
        .select()
        .single();

      if (error) throw error;
      result = { data, operation: "update" };
    } else {
      // Create new transcript
      const insertData: any = { playback_id: playbackId };
      if (segments) insertData.segments = segments;
      if (rawData) insertData.raw_data = rawData;
      if (language) insertData.language = language || "pl";
      
      const { data, error } = await supabase
        .from("transcripts")
        .insert(insertData)
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
    console.error("Error:", error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
