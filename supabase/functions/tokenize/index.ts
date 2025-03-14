
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import * as tiktoken from "npm:tiktoken@1.0.5";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Function to tokenize text using the specified model
function tokenizeText(text: string, model: string): { tokens: string[], count: number } {
  try {
    // Select the appropriate encoding based on the model
    let encodingType: string;
    
    if (model === "gpt-4o" || model === "gpt-4o-mini") {
      encodingType = "o200k_base";
    } else if (model === "gpt-4" || model === "gpt-3.5-turbo") {
      encodingType = "cl100k_base";
    } else {
      encodingType = "p50k_base"; // For older models
    }
    
    // Get the encoder
    const encoding = tiktoken.getEncoding(encodingType);
    
    // Tokenize the text
    const tokenIds = encoding.encode(text);
    
    // Convert tokens back to text to see how they were divided
    const tokens: string[] = [];
    for (const tokenId of tokenIds) {
      const tokenBytes = encoding.decode([tokenId]);
      const decoder = new TextDecoder();
      tokens.push(decoder.decode(tokenBytes));
    }
    
    return {
      tokens: tokens,
      count: tokenIds.length
    };
  } catch (error) {
    console.error("Tokenization error:", error);
    return {
      tokens: [],
      count: 0
    };
  }
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const { text, model } = await req.json();
    
    if (!text) {
      return new Response(
        JSON.stringify({ error: "No text to tokenize" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    const result = tokenizeText(text, model || "gpt-4o");
    
    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in tokenize function:", error);
    
    return new Response(
      JSON.stringify({ error: "An error occurred while processing the request" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
