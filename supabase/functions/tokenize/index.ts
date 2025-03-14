
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

// CORS headers for browser requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Get the OpenAI API key from environment variables
const openaiApiKey = Deno.env.get('OPENAI_API_KEY');

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const { text, model = "gpt-4o" } = await req.json();
    
    if (!text) {
      return new Response(
        JSON.stringify({ error: "No text provided" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    console.log(`Tokenizing text: "${text}" with model: ${model}`);
    
    // Check if we have the OpenAI API key
    if (!openaiApiKey) {
      // Fallback to approximation if no API key
      return new Response(
        JSON.stringify({ 
          error: "OpenAI API key not set. Using approximate tokenization.",
          tokens: Math.ceil(text.length / 4), // rough approximation
          characters: text.length,
          tokenizedText: text.split(/\b|\s+/).filter(Boolean)
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }
    
    // Map model parameter to OpenAI model string
    let openaiModel;
    if (model === "gpt-4o" || model === "gpt-4o-mini") {
      openaiModel = "gpt-4o";
    } else if (model === "gpt-3.5") {
      openaiModel = "gpt-3.5-turbo";
    } else if (model === "gpt-3") {
      openaiModel = "gpt-3.5-turbo"; // Fallback for legacy model
    } else {
      openaiModel = "gpt-4o"; // Default
    }
    
    // Call OpenAI API to tokenize the text
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${openaiApiKey}`
      },
      body: JSON.stringify({
        model: openaiModel,
        messages: [
          {
            role: "system",
            content: "You are a helpful tokenization tool. You'll receive text and must return a JSON object with tokenization details."
          },
          {
            role: "user",
            content: `Tokenize the following text: "${text}". Return a JSON object with tokens array (showing individual tokens), token count, and character count. Example format: {"tokens": ["Hello", " world"], "count": 2, "characters": 11}`
          }
        ],
        response_format: { type: "json_object" }
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI API error:", errorData);
      throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
    }
    
    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Invalid response from OpenAI API");
    }
    
    // Extract the JSON from the response
    let tokenData;
    try {
      const content = data.choices[0].message.content;
      tokenData = JSON.parse(content);
    } catch (error) {
      console.error("Error parsing JSON from OpenAI:", error);
      throw new Error("Failed to parse tokenization data from OpenAI");
    }

    // Calculate tokens used for this request (from OpenAI response)
    const tokensUsed = data.usage?.total_tokens || 0;
    console.log(`OpenAI tokens used: ${tokensUsed}`);
    
    // Return the tokenization results
    return new Response(
      JSON.stringify({
        tokens: tokenData.count,
        characters: tokenData.characters,
        tokenizedText: tokenData.tokens,
        tokensUsed: tokensUsed
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error in tokenize function:", error.message);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        tokenizedText: [],
        tokens: 0,
        characters: 0
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
