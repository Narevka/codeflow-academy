
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import * as tiktoken from "npm:tiktoken@1.0.5";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Funkcja do tokenizacji tekstu za pomocą określonego modelu
function tokenizeText(text: string, model: string): { tokens: string[], count: number } {
  try {
    // Wybierz odpowiednie kodowanie w zależności od modelu
    let encodingType: string;
    
    if (model === "gpt-4o" || model === "gpt-4o-mini") {
      encodingType = "o200k_base";
    } else if (model === "gpt-4" || model === "gpt-3.5-turbo") {
      encodingType = "cl100k_base";
    } else {
      encodingType = "p50k_base"; // Dla starszych modeli
    }
    
    // Uzyskaj enkoder
    const encoding = tiktoken.getEncoding(encodingType);
    
    // Tokenizuj tekst
    const tokenIds = encoding.encode(text);
    
    // Konwertuj tokeny z powrotem na tekst, aby zobaczyć, jak zostały podzielone
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
    console.error("Błąd podczas tokenizacji:", error);
    return {
      tokens: [],
      count: 0
    };
  }
}

serve(async (req) => {
  // Obsługa CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const { text, model } = await req.json();
    
    if (!text) {
      return new Response(
        JSON.stringify({ error: "Brak tekstu do tokenizacji" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    const result = tokenizeText(text, model || "gpt-4o");
    
    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Błąd w funkcji tokenize:", error);
    
    return new Response(
      JSON.stringify({ error: "Wystąpił błąd podczas przetwarzania żądania" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
