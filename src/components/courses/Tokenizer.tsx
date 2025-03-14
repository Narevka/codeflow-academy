import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const models = [
  { label: "GPT-4o & GPT-4o mini", value: "gpt-4o" },
  { label: "GPT-3.5 & GPT-4", value: "gpt-3.5" },
  { label: "GPT-3 (Legacy)", value: "gpt-3" }
];

const examples = {
  "gpt-4o": "tu fagata sexi pipka spod konina",
  "gpt-3.5": "Dzień dobry! Co u Ciebie?",
  "gpt-3": "Hello world! This is a test."
};

const Tokenizer = () => {
  const [text, setText] = useState("");
  const [tokens, setTokens] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [tokenizedText, setTokenizedText] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeModel, setActiveModel] = useState("gpt-4o");
  const [viewMode, setViewMode] = useState<"text" | "tokenIds">("text");
  const [isApiKeyMissing, setIsApiKeyMissing] = useState(false);

  const tokenizeText = async (inputText: string, model: string) => {
    if (!inputText.trim()) {
      setTokens(0);
      setCharacters(0);
      setTokenizedText([]);
      return;
    }
    
    setIsLoading(true);
    setError("");
    
    try {
      const { data, error } = await supabase.functions.invoke("tokenize", {
        body: { text: inputText, model },
      });
      
      if (error) throw error;
      
      if (data.error && data.error.includes("OpenAI API key not set")) {
        setIsApiKeyMissing(true);
        toast.error("OpenAI API key is not configured. Using approximate tokenization.");
      } else {
        setIsApiKeyMissing(false);
      }
      
      setTokens(data.tokens);
      setCharacters(data.characters);
      setTokenizedText(data.tokenizedText || []);
    } catch (err: any) {
      console.error("Error tokenizing text:", err);
      setError("Failed to tokenize text. Please try again.");
      
      // Don't reset values if there's an error - keep the last successful results
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (text) {
        tokenizeText(text, activeModel);
      } else {
        setTokens(0);
        setCharacters(0);
        setTokenizedText([]);
      }
    }, 300); // 300ms debounce delay
    
    return () => clearTimeout(delayDebounceFn);
  }, [text, activeModel]);

  const handleClear = () => {
    setText("");
  };

  const handleShowExample = () => {
    setText(examples[activeModel as keyof typeof examples] || examples["gpt-4o"]);
  };

  const getTokenColor = (token: string, index: number) => {
    if (/^\s+$/.test(token)) return "bg-gray-200 text-gray-800"; // Whitespace
    
    const colors = [
      "bg-blue-200 text-blue-800",   // Light blue
      "bg-green-200 text-green-800", // Light green
      "bg-red-200 text-red-800",     // Light red
      "bg-yellow-200 text-yellow-800", // Light yellow
      "bg-purple-200 text-purple-800", // Light purple
      "bg-pink-200 text-pink-800",   // Light pink
    ];
    
    return colors[index % colors.length];
  };

  return (
    <div className="mt-16 mb-12 border border-white/10 rounded-xl overflow-hidden bg-gradient-to-br from-[#1E2130] to-[#2A2E3F]">
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Tokenizer</h3>
        
        <Tabs defaultValue="gpt-4o" onValueChange={setActiveModel} className="w-full">
          <TabsList className="w-full justify-start mb-4 bg-black/20">
            {models.map(model => (
              <TabsTrigger 
                key={model.value} 
                value={model.value}
                className="data-[state=active]:bg-primary/40 data-[state=active]:text-white"
              >
                {model.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {models.map(model => (
            <TabsContent key={model.value} value={model.value} className="mt-0">
              <div className="w-full">
                <Textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type or paste text here to count tokens..."
                  className="w-full p-4 h-32 bg-black/20 border-white/10 text-white resize-none"
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="flex justify-between mt-4">
          <div className="space-x-2">
            <Button 
              onClick={handleClear} 
              variant="outline" 
              size="sm"
              className="text-white/80 border-white/10 hover:bg-white/10"
            >
              Clear
            </Button>
            <Button 
              onClick={handleShowExample} 
              variant="outline" 
              size="sm"
              className="text-white/80 border-white/10 hover:bg-white/10"
            >
              Show example
            </Button>
          </div>
          {isApiKeyMissing && (
            <div className="text-yellow-400 text-sm flex items-center">
              Using approximation (OpenAI API key not configured)
            </div>
          )}
        </div>
        
        <div className="flex mt-6 gap-12">
          <div>
            <h4 className="text-gray-400 text-sm">Tokens</h4>
            <p className="text-4xl font-bold">{isLoading ? "..." : tokens}</p>
          </div>
          <div>
            <h4 className="text-gray-400 text-sm">Characters</h4>
            <p className="text-4xl font-bold">{isLoading ? "..." : characters}</p>
          </div>
        </div>
        
        {tokenizedText.length > 0 && (
          <div className="mt-6 p-4 bg-[#f5f5f5]/10 rounded-lg">
            <div className="flex mb-2">
              <Button 
                variant={viewMode === "text" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("text")}
                className="rounded-r-none"
              >
                Text
              </Button>
              <Button 
                variant={viewMode === "tokenIds" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("tokenIds")}
                className="rounded-l-none"
              >
                Token IDs
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {tokenizedText.map((token, index) => (
                <span 
                  key={index} 
                  className={`${getTokenColor(token, index)} px-2 py-1 rounded text-sm font-mono`}
                >
                  {viewMode === "text" ? token : index + 1}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {error && (
          <div className="mt-4 text-red-400 text-sm">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tokenizer;
