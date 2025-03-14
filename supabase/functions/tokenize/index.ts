
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { EncoderType, encoding_for_model } from "https://esm.sh/tiktoken-node";

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

// CORS headers for browser compatibility
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { text } = await req.json();
    
    if (!text || typeof text !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Text parameter is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // If we have OpenAI API key, use it to get accurate tokenization
    if (OPENAI_API_KEY) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: text }],
            max_tokens: 1
          })
        });

        const data = await response.json();
        
        if (data.error) {
          console.error('OpenAI API error:', data.error);
          throw new Error(data.error.message || 'OpenAI API error');
        }

        // Extract token usage from OpenAI response
        const { prompt_tokens } = data.usage;
        
        // Calculate characters
        const characters = text.length;
        
        // For tokens per word visualization, we'll use the tiktoken library
        let encodedTokens: number[] = [];
        try {
          const enc = await encoding_for_model('gpt-4o-mini');
          encodedTokens = enc.encode(text);
        } catch (err) {
          console.error('Error encoding text for visualization:', err);
        }
        
        return new Response(
          JSON.stringify({ 
            tokens: prompt_tokens || 0, 
            characters,
            encodedTokens
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } catch (error) {
        console.error('Error getting tokenization from OpenAI:', error);
        throw error;
      }
    } else {
      // Fallback approximation if no API key
      // This is a rough approximation and not as accurate as the API
      const words = text.trim().split(/\s+/).length;
      const tokens = Math.ceil(words * 1.4); // Rough approximation
      
      return new Response(
        JSON.stringify({ 
          tokens, 
          characters: text.length,
          encodedTokens: [],
          approximated: true
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error in tokenize function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
