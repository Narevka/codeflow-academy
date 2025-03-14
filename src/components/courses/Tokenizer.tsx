
import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

// Sample token color assignments
const TOKEN_COLORS = [
  "bg-cyan-400", "bg-pink-400", "bg-orange-400", 
  "bg-blue-400", "bg-green-400", "bg-yellow-400", 
  "bg-red-400", "bg-indigo-400", "bg-purple-500"
];

// Fallback tokenization function in case the edge function fails
function fallbackTokenize(text: string, model: string): string[] {
  if (!text) return [];
  
  // Very simplified tokenization - this is just a visual approximation
  // In reality, tokenization is much more complex and model-specific
  let tokens: string[] = [];
  
  // First, try to find common patterns
  const words = text.split(/(\s+|[.,!?;:()])/g).filter(Boolean);
  
  words.forEach(word => {
    if (word.length > 5 && model !== "gpt-3") {
      // Break longer words in smaller chunks for newer models
      const chunks = [];
      for (let i = 0; i < word.length; i += 3) {
        chunks.push(word.slice(i, Math.min(i + 3, word.length)));
      }
      tokens = [...tokens, ...chunks];
    } else if (/^\d+$/.test(word) && model === "gpt-4o") {
      // Handle numbers differently for GPT-4o
      tokens.push(word);
    } else if (/\s+/.test(word)) {
      // Handle space (often combined with next token)
      tokens.push(word);
    } else {
      // Regular words
      tokens.push(word);
    }
  });
  
  return tokens;
}

// Get a consistent color for a token
function getTokenColor(token: string): string {
  // Simple hash function to assign colors consistently
  let hash = 0;
  for (let i = 0; i < token.length; i++) {
    hash = ((hash << 5) - hash) + token.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return TOKEN_COLORS[Math.abs(hash) % TOKEN_COLORS.length];
}

interface TokenizerProps {
  initialText?: string;
}

const Tokenizer: React.FC<TokenizerProps> = ({ initialText = "test123 mowie costam" }) => {
  const [text, setText] = useState(initialText);
  const [modelType, setModelType] = useState("gpt-4o");
  const [tokens, setTokens] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("text"); // For the Text/Token IDs tabs
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sample examples that demonstrate tokenization differences
  const examples = [
    "test123 mowie costam",
    "Hello world! How are you doing today?",
    "antidisestablishmentarianism",
    "2 + 2 = 4",
    "czy to naprawę działa?"
  ];

  const fetchTokens = async (inputText: string, model: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase.functions.invoke('tokenize', {
        body: { text: inputText, model },
      });
      
      if (error) {
        console.error("Edge function error:", error);
        setError("Nie udało się tokenizować tekstu. Używam metody fallbackowej.");
        setTokens(fallbackTokenize(inputText, model));
      } else if (data && data.tokens) {
        setTokens(data.tokens);
        console.log("Tokenization success:", data);
      } else {
        setError("Otrzymano nieprawidłowe dane z API. Używam metody fallbackowej.");
        setTokens(fallbackTokenize(inputText, model));
      }
    } catch (err) {
      console.error("Fetch tokens error:", err);
      setError("Błąd podczas tokenizacji. Używam metody fallbackowej.");
      setTokens(fallbackTokenize(inputText, model));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (text.trim() !== '') {
      fetchTokens(text, modelType);
    } else {
      setTokens([]);
    }
  }, [text, modelType]);

  const handleClear = () => {
    setText("");
  };

  const handleShowExample = () => {
    // Cycle through examples
    const currentIndex = examples.indexOf(text);
    const nextIndex = currentIndex === -1 || currentIndex === examples.length - 1 ? 0 : currentIndex + 1;
    setText(examples[nextIndex]);
  };

  return (
    <div className="my-8 rounded-xl border border-white/20 overflow-hidden">
      <div className="p-4 bg-gradient-to-br from-[#1E2130] to-[#2A2E3F]">
        <h3 className="text-xl font-bold text-magenta mb-4">
          Tokenizer - Zobrazowanie tokenów
        </h3>
        
        <Tabs 
          defaultValue="gpt-4o" 
          value={modelType}
          onValueChange={setModelType}
          className="mb-4"
        >
          <TabsList className="bg-background/10 border border-white/10">
            <TabsTrigger value="gpt-4o" className="data-[state=active]:bg-black data-[state=active]:text-white">GPT-4o & GPT-4o mini</TabsTrigger>
            <TabsTrigger value="gpt-4" className="data-[state=active]:bg-black data-[state=active]:text-white">GPT-3.5 & GPT-4</TabsTrigger>
            <TabsTrigger value="gpt-3" className="data-[state=active]:bg-black data-[state=active]:text-white">GPT-3 (Legacy)</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="border border-white/20 rounded-md p-4 mb-6 bg-black/30">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Wpisz tekst do tokenizacji..."
            className="bg-transparent border border-white/30 text-white mb-4 min-h-[100px] resize-none"
          />
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleClear}
              className="bg-white/10 hover:bg-white/20 border-white/20"
              disabled={loading}
            >
              Clear
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleShowExample}
              className="bg-white/10 hover:bg-white/20 border-white/20"
              disabled={loading}
            >
              Show example
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white/70 mb-1">Tokens</span>
            <span className="text-3xl font-bold">{tokens.length}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white/70 mb-1">Characters</span>
            <span className="text-3xl font-bold">{text.length}</span>
          </div>
        </div>
        
        <Card className="bg-gray-800/40 p-4 rounded-md border border-white/20 mb-4">
          {loading ? (
            <div className="flex justify-center items-center h-20">
              <Loader2 className="h-8 w-8 animate-spin text-white" />
              <span className="ml-2 text-white">Tokenizowanie...</span>
            </div>
          ) : (
            <div className="flex flex-wrap gap-1">
              {tokens.map((token, index) => (
                <span 
                  key={index} 
                  className={`${getTokenColor(token)} m-0.5 px-2 py-1 text-white rounded`}
                >
                  {token}
                </span>
              ))}
            </div>
          )}
        </Card>
        
        <div className="mb-2">
          <Tabs 
            defaultValue="text" 
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="bg-background/10 border border-white/10">
              <TabsTrigger 
                value="text" 
                className="data-[state=active]:bg-black data-[state=active]:text-white"
              >
                Text
              </TabsTrigger>
              <TabsTrigger 
                value="ids" 
                className="bg-white/5 hover:bg-white/10 border-white/10 opacity-60"
              >
                Token IDs
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {error && (
          <div className="text-yellow-300 text-sm mb-4">
            {error}
          </div>
        )}
        
        <div className="text-sm text-white/60 mt-4">
          <p>
            Powyższe narzędzie pomaga zrozumieć, jak tekst jest tokenizowany przez modele języka
            oraz całkowitą liczbę tokenów w danym fragmencie tekstu. Tokenizacja realizowana jest
            przy użyciu algorytmów zgodnych z OpenAI tiktoken.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenizer;
