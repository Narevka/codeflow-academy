
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface TokenData {
  tokens: number;
  characters: number;
  encodedTokens: number[];
  approximated?: boolean;
}

const Tokenizer = () => {
  const [text, setText] = useState<string>("");
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("gpt4o-mini");
  const [viewMode, setViewMode] = useState<"text" | "tokenIds">("text");
  const { toast } = useToast();

  const analyzeText = async () => {
    if (!text.trim()) {
      toast({
        title: "No text to analyze",
        description: "Please enter some text to count tokens",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("tokenize", {
        body: { text },
      });

      if (error) {
        throw new Error(error.message || "Error analyzing text");
      }

      if (data.approximated) {
        toast({
          title: "Using approximation",
          description: "OpenAI API key not configured. Using approximate token count.",
          variant: "destructive",
        });
      }

      setTokenData(data);
    } catch (error) {
      console.error("Error analyzing text:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to analyze text",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearText = () => {
    setText("");
    setTokenData(null);
  };

  const showExample = () => {
    const exampleText = "tu fagata sexi pipka spod konina, dupatu fagatka seki seki z pod konina taka duza ze jej szkoda nie wypinac";
    setText(exampleText);
  };

  // Render tokens with color coding
  const renderTokenizedText = () => {
    if (!tokenData || !tokenData.encodedTokens || tokenData.encodedTokens.length === 0) {
      return <p className="text-muted-foreground">No token data available</p>;
    }

    // Create token visualization
    const words = text.split(/(\s+)/);
    let currentIndex = 0;
    
    return (
      <div className="p-4 bg-gray-900 rounded-md overflow-x-auto font-mono text-sm">
        {viewMode === "text" ? (
          <div className="flex flex-wrap gap-1">
            {words.map((word, idx) => {
              const isWhitespace = word.trim() === "";
              
              if (isWhitespace) {
                return <span key={`space-${idx}`} className="whitespace-pre">{word}</span>;
              }
              
              // Get a color for this word (based on a simple hash of the word)
              const colorIndex = Math.abs(word.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 8);
              const colors = [
                "bg-red-900/30", "bg-blue-900/30", "bg-green-900/30", 
                "bg-yellow-900/30", "bg-purple-900/30", "bg-pink-900/30",
                "bg-orange-900/30", "bg-teal-900/30"
              ];
              
              return (
                <span 
                  key={`word-${idx}`} 
                  className={`px-1 py-0.5 rounded ${colors[colorIndex]}`}
                >
                  {word}
                </span>
              );
            })}
          </div>
        ) : (
          <div className="whitespace-pre-wrap">
            {tokenData.encodedTokens.map((token, idx) => (
              <span key={idx} className="inline-block mr-1 mb-1 px-1 py-0.5 bg-gray-800 rounded text-xs">
                {token}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-black/40 p-4 rounded-xl border border-gray-800 mt-4">
      <h3 className="text-xl font-bold text-magenta mb-4">Tokenizer GPT-4o-mini</h3>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4 bg-gray-900">
          <TabsTrigger value="gpt4o-mini">GPT-4o & GPT-4o mini</TabsTrigger>
          <TabsTrigger value="gpt35-gpt4" disabled>GPT-3.5 & GPT-4</TabsTrigger>
          <TabsTrigger value="gpt3-legacy" disabled>GPT-3 (Legacy)</TabsTrigger>
        </TabsList>
        
        <TabsContent value="gpt4o-mini" className="space-y-4">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to analyze..."
            className="min-h-[100px] bg-black border-gray-700 text-white"
          />
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={clearText}
              className="bg-gray-800 hover:bg-gray-700 border-gray-700"
            >
              Clear
            </Button>
            <Button
              variant="outline"
              onClick={showExample}
              className="bg-gray-800 hover:bg-gray-700 border-gray-700"
            >
              Show example
            </Button>
            <div className="ml-auto">
              <Button 
                onClick={analyzeText}
                disabled={isLoading || !text.trim()}
                className="bg-primary hover:bg-primary/90"
              >
                {isLoading ? "Analyzing..." : "Analyze"}
              </Button>
            </div>
          </div>
          
          {tokenData && (
            <div className="space-y-6 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold">{tokenData.tokens}</div>
                  <div className="text-sm text-gray-400">Tokens</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold">{tokenData.characters}</div>
                  <div className="text-sm text-gray-400">Characters</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-sm">Token Visualization</h4>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant={viewMode === "text" ? "default" : "outline"}
                      onClick={() => setViewMode("text")}
                      className="text-xs h-7 px-2"
                    >
                      Text
                    </Button>
                    <Button
                      size="sm"
                      variant={viewMode === "tokenIds" ? "default" : "outline"}
                      onClick={() => setViewMode("tokenIds")}
                      className="text-xs h-7 px-2"
                    >
                      Token IDs
                    </Button>
                  </div>
                </div>
                {renderTokenizedText()}
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tokenizer;
