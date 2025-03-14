
import { Lesson } from "@/types/course";
import { VideoPlayerWithTranscript } from "@/components/ui/video-player";
import { useState, useEffect } from "react";
import { 
  Bar, 
  BarChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Label
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Cpu, 
  MessageCircle, 
  Search, 
  Layers, 
  BarChart2,
  Lightbulb
} from "lucide-react";

interface LessonContentProps {
  lesson: Lesson;
}

// Dane dla wykresu tokenów
const tokenComparisonData = [
  { name: "ChatGPT 3.5", tokens: 16000, fill: "#0066cc" },
  { name: "Gemini 1.0", tokens: 32000, fill: "#0066cc" },
  { name: "ChatGPT 4.0", tokens: 128000, fill: "#0066cc" },
];

const LessonContent = ({ lesson }: LessonContentProps) => {
  const [isMuxVideo, setIsMuxVideo] = useState(false);
  const [playbackId, setPlaybackId] = useState<string>("");
  
  // Set up the video source based on the videoUrl format
  useEffect(() => {
    if (lesson.videoUrl?.startsWith('mux:')) {
      setIsMuxVideo(true);
      setPlaybackId(lesson.videoUrl);
    } else {
      setIsMuxVideo(false);
    }
  }, [lesson.videoUrl]);

  // Helper function to format description text with proper line breaks and styling
  const formatDescription = (text: string) => {
    if (!text) return null;
    
    // Split by double line breaks to separate paragraphs
    const paragraphs = text.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      // Check if paragraph is a numbered list item (starts with a number followed by a dot)
      if (/^\d+\.\s/.test(paragraph)) {
        return (
          <div key={index} className="mb-6">
            <h4 className="text-lg font-bold text-primary mb-2">{paragraph.split('\n')[0]}</h4>
            <div className="pl-4">
              {paragraph.split('\n').slice(1).map((p, i) => (
                <p key={i} className="mb-2 text-base leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        );
      }
      // Check if paragraph is a section heading (all caps or short without punctuation)
      else if (
        (paragraph.length < 100 && !paragraph.includes('.')) ||
        paragraph.toUpperCase() === paragraph
      ) {
        return (
          <h3 key={index} className="text-xl font-bold text-primary mt-8 mb-4">
            {paragraph}
          </h3>
        );
      }
      return <p key={index} className="mb-4 text-base leading-relaxed">{paragraph}</p>;
    });
  };

  // AI Terms Cards - nowy komponent dla prezentacji terminów AI
  const AITermsCards = () => {
    return (
      <div className="space-y-8 my-10">
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-400 to-magenta bg-clip-text text-transparent mb-6">
          Kluczowe Terminy Sztucznej Inteligencji
        </h2>
        
        <Tabs defaultValue="cards" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="cards" className="flex items-center gap-2">
              <BarChart2 size={18} />
              <span>Karty Pojęć</span>
            </TabsTrigger>
            <TabsTrigger value="details" className="flex items-center gap-2">
              <Lightbulb size={18} />
              <span>Szczegółowe Opisy</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="cards" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Karta: Duże Modele Językowe */}
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:shadow-lg transition-all overflow-hidden group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Cpu className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <span className="text-xs text-slate-400 font-mono px-2 py-1 bg-slate-800 rounded-full">01</span>
                  </div>
                  <CardTitle className="text-xl text-white mt-2">Duże Modele Językowe (LLM)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Modele AI wytrenowane na ogromnych zbiorach danych tekstowych, umożliwiające rozumienie i generowanie ludzkiego języka.
                  </p>
                  <div className="mt-3 text-slate-400 text-sm">
                    <p>Przykłady: GPT-4, GPT-3.5, Gemini</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Karta: Tokeny */}
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:shadow-lg transition-all overflow-hidden group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Layers className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <span className="text-xs text-slate-400 font-mono px-2 py-1 bg-slate-800 rounded-full">02</span>
                  </div>
                  <CardTitle className="text-xl text-white mt-2">Tokeny</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Podstawowe jednostki tekstu wykorzystywane przez modele językowe - fragmenty słów, znaki lub całe słowa.
                  </p>
                  <div className="mt-3 text-slate-400 text-sm">
                    <p>GPT-4: do 128K tokenów</p>
                    <p>GPT-3.5: do 16K tokenów</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Karta: Prompt */}
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:shadow-lg transition-all overflow-hidden group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Search className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <span className="text-xs text-slate-400 font-mono px-2 py-1 bg-slate-800 rounded-full">03</span>
                  </div>
                  <CardTitle className="text-xl text-white mt-2">Prompt (Zapytanie)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Tekst wejściowy wysyłany do modelu językowego w celu uzyskania odpowiedzi.
                  </p>
                  <div className="mt-3 text-slate-400 text-sm">
                    <p>Od prostych pytań po złożone instrukcje</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Karta: Konwersacja i Kontekst */}
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:shadow-lg transition-all overflow-hidden group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <MessageCircle className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <span className="text-xs text-slate-400 font-mono px-2 py-1 bg-slate-800 rounded-full">04</span>
                  </div>
                  <CardTitle className="text-xl text-white mt-2">Konwersacja i Kontekst</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Modele pamiętają wcześniejszą część rozmowy dzięki przechowywaniu kontekstu w promptach.
                  </p>
                  <div className="mt-3 text-slate-400 text-sm">
                    <p>Im dłuższa konwersacja, tym więcej tokenów potrzeba</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Karta: Wydajność a Skomplikowanie */}
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:shadow-lg transition-all overflow-hidden group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <BarChart className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <span className="text-xs text-slate-400 font-mono px-2 py-1 bg-slate-800 rounded-full">05</span>
                  </div>
                  <CardTitle className="text-xl text-white mt-2">Wydajność a Skomplikowanie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Różne modele oferują różny balans między wydajnością a możliwościami.
                  </p>
                  <div className="mt-3 text-slate-400 text-sm">
                    <p>GPT-3.5: Szybszy, mniejsza pojemność</p>
                    <p>GPT-4: Wolniejszy, większa pojemność i precyzja</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="details">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="llm" className="border-slate-700">
                  <AccordionTrigger className="text-lg text-white hover:text-blue-400 transition-colors">
                    <div className="flex items-center gap-2">
                      <Cpu size={20} className="text-blue-400" />
                      <span>1. Duże Modele Językowe (LLM)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    <p className="mb-3">
                      LLM to rodzaj sztucznej inteligencji, który został wytrenowany na ogromnych zbiorach danych tekstowych. 
                      Modele te analizują miliardy zdań i fragmentów tekstu, aby nauczyć się wzorców językowych, które 
                      pozwalają im generować spójne i kontekstowo adekwatne odpowiedzi.
                    </p>
                    <p>
                      Przykłady LLM to GPT-3, GPT-4 oraz Gemini od Google. W kontekście Flowise, te modele są wykorzystywane 
                      jako podstawowe jednostki do przetwarzania tekstu i generowania odpowiedzi.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tokens" className="border-slate-700">
                  <AccordionTrigger className="text-lg text-white hover:text-blue-400 transition-colors">
                    <div className="flex items-center gap-2">
                      <Layers size={20} className="text-blue-400" />
                      <span>2. Tokeny</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    <p className="mb-3">
                      Tokeny to podstawowe jednostki tekstu wykorzystywane przez modele językowe. Można je zrozumieć jako 
                      słowa, znaki lub fragmenty zdań, na które model dzieli wejściowy tekst.
                    </p>
                    <p className="mb-3">
                      Przykładowo, zdanie "ChatGPT to świetne narzędzie" może zostać podzielone na kilka tokenów: 
                      "Chat", "GPT", "to", "świetne", "narzędzie". Modele takie jak GPT-3 czy GPT-4 operują właśnie 
                      na tych tokenach, analizując je i na tej podstawie generując odpowiedzi.
                    </p>
                    <div className="pl-4 border-l-2 border-blue-500 my-3">
                      <p className="mb-1">GPT-4: Obsługuje do 128 tysięcy tokenów (ok. 300 stron tekstu).</p>
                      <p>GPT-3.5: Obsługuje do 16 tysięcy tokenów (ok. 14 stron tekstu).</p>
                    </div>
                    <p>
                      Rozumienie liczby tokenów jest ważne przy budowaniu aplikacji, ponieważ wpływa to na długość 
                      konwersacji, którą model może „zapamiętać" oraz przetworzyć.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="prompt" className="border-slate-700">
                  <AccordionTrigger className="text-lg text-white hover:text-blue-400 transition-colors">
                    <div className="flex items-center gap-2">
                      <Search size={20} className="text-blue-400" />
                      <span>3. Prompt (Zapytanie)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    <p className="mb-3">
                      Prompt to zapytanie lub wejściowy tekst, który wysyłamy do modelu językowego w celu uzyskania odpowiedzi. 
                      Może to być proste pytanie ("Jaka jest stolica Francji?") lub bardziej skomplikowana instrukcja, 
                      która zawiera historię rozmowy.
                    </p>
                    <p>
                      W Flowise prompty są podstawowym sposobem komunikacji z modelem i sterowania jego działaniem.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="context" className="border-slate-700">
                  <AccordionTrigger className="text-lg text-white hover:text-blue-400 transition-colors">
                    <div className="flex items-center gap-2">
                      <MessageCircle size={20} className="text-blue-400" />
                      <span>4. Konwersacja i Kontekst</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    <p className="mb-3">
                      Modele językowe, takie jak GPT, generują odpowiedzi na podstawie przesłanych do nich promptów. 
                      Jednakże nie mają one rzeczywistej "pamięci" – każdy nowy prompt traktowany jest jako oddzielne zapytanie. 
                    </p>
                    <p>
                      Aby kontynuować konwersację w sposób spójny, historia rozmowy jest zwykle zawierana w treści promptu. 
                      Dlatego im dłuższa konwersacja, tym więcej tokenów potrzeba na zachowanie kontekstu.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="performance" className="border-slate-700">
                  <AccordionTrigger className="text-lg text-white hover:text-blue-400 transition-colors">
                    <div className="flex items-center gap-2">
                      <BarChart size={20} className="text-blue-400" />
                      <span>5. Wydajność a Skomplikowanie Modelu</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    <p className="mb-3">
                      W kontekście wyboru modelu do aplikacji warto znać różnice między różnymi wersjami:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li className="text-base">
                        <span className="font-semibold">GPT-3.5:</span> Szybszy, ale obsługuje mniejszą liczbę tokenów. 
                        Idealny do prostszych zadań.
                      </li>
                      <li className="text-base">
                        <span className="font-semibold">GPT-4:</span> Wolniejszy, ale bardziej precyzyjny i obsługujący większą ilość tokenów. 
                        Lepszy do zaawansowanych analiz i długich konwersacji.
                      </li>
                    </ul>
                    <p className="mb-3">
                      Oprócz modeli GPT, istnieją także inne modele, takie jak Falcon 40B, które oferują różne zalety 
                      w zależności od specyfiki aplikacji.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  };

  // Komponent wykresu porównania tokenów
  const TokenComparisonChart = () => {
    return (
      <div className="mt-12 mb-10">
        <h3 className="text-xl font-bold text-magenta mb-6 text-center">Możliwości przetwarzania tokenów</h3>
        <div className="w-full max-w-3xl mx-auto h-[300px] rounded-xl border border-white/20 overflow-hidden bg-gradient-to-br from-[#1E2130] to-[#2A2E3F]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={tokenComparisonData}
              margin={{ top: 20, right: 30, left: 60, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fill: 'white', fontSize: 12 }}
                tickLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
                axisLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
              />
              <YAxis 
                tick={{ fill: 'white', fontSize: 12 }}
                tickLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
                axisLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
              >
                <Label 
                  value="Ilość tokenów" 
                  position="insideLeft" 
                  angle={-90} 
                  style={{ textAnchor: 'middle', fill: 'white', fontSize: 12 }} 
                  offset={-45}
                />
              </YAxis>
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'rgba(20, 22, 34, 0.9)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                }}
                formatter={(value: number) => [`${value.toLocaleString()} tokenów`, 'Ilość']}
                labelStyle={{ color: '#cf0e81', fontWeight: 'bold' }}
              />
              <Bar 
                dataKey="tokens" 
                radius={[4, 4, 0, 0]}
                fill="#0075ff"
                animationDuration={1500}
                barSize={60}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 w-full">
      <h1 className="text-2xl md:text-3xl font-bold">{lesson.displayTitle || lesson.title}</h1>
      
      {lesson.videoUrl && (
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-3">Wprowadzenie do Flowise</h2>
          <VideoPlayerWithTranscript
            src={lesson.videoUrl}
            poster={lesson.thumbnailUrl}
            title={lesson.title}
            transcript={lesson.transcript}
          />
        </div>
      )}
      
      {lesson.description && (
        <div className="prose prose-invert max-w-none mt-6">
          {formatDescription(lesson.description)}
        </div>
      )}

      {/* Nowa sekcja z kartami pojęć AI */}
      <AITermsCards />
      
      {/* Wykres porównania tokenów */}
      <TokenComparisonChart />

      {lesson.additionalVideos && lesson.additionalVideos.length > 0 && (
        <div className="space-y-8 mt-10">
          {lesson.additionalVideos.map((video, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-semibold">
                {video.title || `Dodatkowe wideo ${index + 1}`}
              </h2>
              {video.videoUrl && (
                <VideoPlayerWithTranscript
                  src={video.videoUrl}
                  poster={video.thumbnailUrl}
                  title={video.title || `Dodatkowe wideo ${index + 1}`}
                  transcript={video.transcript}
                  transcriptSourceFile="2.json"
                />
              )}
              {video.description && (
                <div className="prose prose-invert max-w-none">
                  {formatDescription(video.description)}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonContent;
