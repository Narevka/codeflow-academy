import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// CORS headers for browser requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// A basic tokenization algorithm for demonstration
function tokenizeText(text: string, model: string): { tokens: number, characters: number, tokenizedText: string[] } {
  if (!text) {
    return { tokens: 0, characters: 0, tokenizedText: [] };
  }

  let tokens: string[] = [];
  
  // Different tokenization strategies based on model
  if (model === "gpt-4o" || model === "gpt-4o-mini") {
    // Simpler tokenization for o200k_base encoding (used by GPT-4o models)
    // This is a simplified approximation and not as accurate as tiktoken
    
    // Split by spaces first
    const words = text.split(/(\s+)/);
    
    // Process each word or space
    for (const word of words) {
      if (word.trim() === '') {
        // Keep spaces as separate tokens
        if (word) tokens.push(word);
        continue;
      }
      
      // Split long words
      if (word.length > 5) {
        // Split longer words into roughly 3-4 character chunks
        let i = 0;
        while (i < word.length) {
          const chunk = word.slice(i, i + 3 + (Math.random() > 0.5 ? 1 : 0));
          tokens.push(chunk);
          i += chunk.length;
        }
      } else {
        // Keep short words as single tokens
        tokens.push(word);
      }
    }
  } else {
    // For cl100k_base encoding (used by GPT-3.5 and GPT-4)
    // Simpler tokenization rule set
    
    // Split by common token boundaries
    const parts = text.split(/([^\w]|\d+|[A-Z][a-z]*)/g).filter(Boolean);
    
    for (const part of parts) {
      if (part.length <= 4) {
        tokens.push(part);
      } else {
        // Split longer parts
        let i = 0;
        while (i < part.length) {
          const chunk = part.slice(i, i + 4);
          tokens.push(chunk);
          i += 4;
        }
      }
    }
  }
  
  // Remove empty tokens
  tokens = tokens.filter(t => t);
  
  return {
    tokens: tokens.length,
    characters: text.length,
    tokenizedText: tokens
  };
}

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

    const result = tokenizeText(text, model);
    
    return new Response(
      JSON.stringify(result),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error in tokenize function:", error.message);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
