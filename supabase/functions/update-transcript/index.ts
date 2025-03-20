
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
    
    const requestBody = await req.json();
    const { playbackId, segments, rawData, language } = requestBody;

    console.log(`Updating transcript for playbackId: ${playbackId}`);
    console.log(`Segments: ${segments ? segments.length : 'null'}`);
    console.log(`Raw data present: ${rawData ? 'yes' : 'no'}`);
    console.log(`Language: ${language || 'pl'}`);

    if (!playbackId) {
      return new Response(
        JSON.stringify({ error: "Missing required data (playbackId)" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    // Check if transcript already exists
    const { data: existingData, error: fetchError } = await supabase
      .from("transcripts")
      .select("*")
      .eq("playback_id", playbackId)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      console.error("Error fetching existing transcript:", fetchError);
    }

    let result;
    if (existingData) {
      // Update existing transcript
      const updateData: any = {};
      if (segments !== undefined && segments !== null) updateData.segments = segments;
      if (rawData !== undefined && rawData !== null) updateData.raw_data = rawData;
      if (language) updateData.language = language;
      
      console.log("Updating existing transcript record");
      
      const { data, error } = await supabase
        .from("transcripts")
        .update(updateData)
        .eq("playback_id", playbackId)
        .select()
        .single();

      if (error) {
        console.error("Error updating transcript:", error);
        throw error;
      }
      result = { data, operation: "update" };
    } else {
      // Create new transcript
      const insertData: any = { playback_id: playbackId };
      if (segments !== undefined && segments !== null) insertData.segments = segments;
      if (rawData !== undefined && rawData !== null) insertData.raw_data = rawData;
      insertData.language = language || "pl";
      
      console.log("Creating new transcript record");
      
      const { data, error } = await supabase
        .from("transcripts")
        .insert(insertData)
        .select()
        .single();

      if (error) {
        console.error("Error inserting transcript:", error);
        throw error;
      }
      result = { data, operation: "insert" };
    }

    console.log(`Operation successful: ${result.operation}`);
    
    return new Response(
      JSON.stringify(result),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in update-transcript function:", error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
