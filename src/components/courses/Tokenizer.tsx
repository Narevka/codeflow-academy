
import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Sample token color assignments
const TOKEN_COLORS = [
  "bg-purple-500", "bg-blue-400", "bg-green-400", 
  "bg-yellow-400", "bg-orange-400", "bg-pink-400",
  "bg-red-400", "bg-indigo-400", "bg-cyan-400"
];

// Mock tokenization function (since we can't use tiktoken directly in browser)
function mockTokenize(text: string, model: string): string[] {
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

  // Sample examples that demonstrate tokenization differences
  const examples = [
    "test123 mowie costam",
    "Hello world! How are you doing today?",
    "antidisestablishmentarianism",
    "2 + 2 = 4",
  ];

  useEffect(() => {
    setTokens(mockTokenize(text, modelType));
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
            <TabsTrigger value="gpt-4o">GPT-4o & GPT-4o mini</TabsTrigger>
            <TabsTrigger value="gpt-4">GPT-3.5 & GPT-4</TabsTrigger>
            <TabsTrigger value="gpt-3">GPT-3 (Legacy)</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="border border-white/20 rounded-md p-4 mb-4 bg-black/20">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Wpisz tekst do tokenizacji..."
            className="bg-transparent border border-white/30 text-white mb-4"
          />
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleClear}
              className="bg-white/10 hover:bg-white/20 border-white/20"
            >
              Clear
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleShowExample}
              className="bg-white/10 hover:bg-white/20 border-white/20"
            >
              Show example
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-sm font-semibold mb-1">Tokens</span>
            <span className="text-3xl font-bold">{tokens.length}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold mb-1">Characters</span>
            <span className="text-3xl font-bold">{text.length}</span>
          </div>
        </div>
        
        <Card className="bg-gray-100/10 p-4 rounded-md border border-white/20">
          <div className="flex flex-wrap">
            {tokens.map((token, index) => (
              <span 
                key={index} 
                className={`${getTokenColor(token)} m-0.5 px-2 py-1 text-white rounded`}
              >
                {token}
              </span>
            ))}
          </div>
        </Card>
        
        <div className="mt-4 flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white/10 hover:bg-white/20 border-white/20"
          >
            Text
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white/5 hover:bg-white/10 border-white/10 opacity-60"
          >
            Token IDs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tokenizer;
