
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronUp, BrainCircuit, MessagesSquare, Layers, MessageCircle, Activity } from "lucide-react";

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
  const [activeAccordion, setActiveAccordion] = useState<string | null>("item-5");
  
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

  // Komponent wykresu porównania tokenów - całkowicie przebudowany
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
  
  // AI Terms Accordion Component
  const AITermsAccordion = () => {
    return (
      <div className="mt-8 mb-12">
        <div className="flex justify-center gap-8 mb-6">
          <button
            onClick={() => setActiveAccordion("item-1")}
            className="text-white bg-dark-purple/50 px-3 py-2 rounded hover:bg-dark-purple/80"
          >
            Karty Pojęć
          </button>
          <button
            onClick={() => setActiveAccordion("item-5")}
            className="text-white bg-magenta/30 px-3 py-2 rounded hover:bg-magenta/50"
          >
            Szczegółowe Opisy
          </button>
        </div>
        
        <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden">
          <Accordion
            type="single"
            collapsible
            value={activeAccordion || undefined}
            onValueChange={(value) => setActiveAccordion(value)}
            className="w-full"
          >
            <AccordionItem value="item-1" className="border-b border-white/10">
              <AccordionTrigger className="py-5 px-4 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center">
                  <BrainCircuit className="text-blue-400 mr-3" />
                  <span className="text-xl font-medium">1. Duże Modele Językowe (LLM)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-white/70">
                <p>
                  LLM to rodzaj sztucznej inteligencji, który został wytrenowany na ogromnych zbiorach danych tekstowych. Modele te analizują miliardy zdań i fragmentów tekstu, aby nauczyć się wzorców językowych, które pozwalają im generować spójne i kontekstowo adekwatne odpowiedzi. Przykłady LLM to GPT-3, GPT-4 oraz Gemini od Google. W kontekście Flowise, te modele są wykorzystywane jako podstawowe jednostki do przetwarzania tekstu i generowania odpowiedzi.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-white/10">
              <AccordionTrigger className="py-5 px-4 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center">
                  <Layers className="text-blue-400 mr-3" />
                  <span className="text-xl font-medium">2. Tokeny</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-white/70">
                <p>
                  Tokeny to podstawowe jednostki tekstu wykorzystywane przez modele językowe. Można je zrozumieć jako słowa, znaki lub fragmenty zdań, na które model dzieli wejściowy tekst. Przykładowo, zdanie "ChatGPT to świetne narzędzie" może zostać podzielone na kilka tokenów: "Chat", "GPT", "to", "świetne", "narzędzie". Modele takie jak GPT-3 czy GPT-4 operują właśnie na tych tokenach, analizując je i na tej podstawie generując odpowiedzi.
                </p>
                <p className="mt-2">
                  GPT-4: Obsługuje do 128 tysięcy tokenów (ok. 300 stron tekstu).
                </p>
                <p className="mt-1">
                  GPT-3.5: Obsługuje do 16 tysięcy tokenów (ok. 14 stron tekstu).
                </p>
                <p className="mt-2">
                  Rozumienie liczby tokenów jest ważne przy budowaniu aplikacji, ponieważ wpływa to na długość konwersacji, którą model może „zapamiętać" oraz przetworzyć.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-white/10">
              <AccordionTrigger className="py-5 px-4 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center">
                  <MessageCircle className="text-blue-400 mr-3" />
                  <span className="text-xl font-medium">3. Prompt (Zapytanie)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-white/70">
                <p>
                  Prompt to zapytanie lub wejściowy tekst, który wysyłamy do modelu językowego w celu uzyskania odpowiedzi. 
                  Może to być proste pytanie ("Jaka jest stolica Francji?") lub bardziej skomplikowana instrukcja, 
                  która zawiera historię rozmowy. W Flowise prompty są podstawowym sposobem komunikacji z modelem i sterowania jego działaniem.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-white/10">
              <AccordionTrigger className="py-5 px-4 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center">
                  <MessagesSquare className="text-blue-400 mr-3" />
                  <span className="text-xl font-medium">4. Konwersacja i Kontekst</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-white/70">
                <p>
                  Modele językowe, takie jak GPT, generują odpowiedzi na podstawie przesłanych do nich promptów. 
                  Jednakże nie mają one rzeczywistej "pamięci" – każdy nowy prompt traktowany jest jako oddzielne zapytanie. 
                  Aby kontynuować konwersację w sposób spójny, historia rozmowy jest zwykle zawierana w treści promptu. 
                  Dlatego im dłuższa konwersacja, tym więcej tokenów potrzeba na zachowanie kontekstu.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-b border-white/10">
              <AccordionTrigger className="py-5 px-4 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center">
                  <Activity className="text-blue-400 mr-3" />
                  <span className="text-xl font-medium">5. Wydajność a Skomplikowanie Modelu</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-white/70">
                <p className="mb-3">
                  W kontekście wyboru modelu do aplikacji warto znać różnice między różnymi wersjami:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <span className="font-semibold">GPT-3.5:</span> Szybszy, ale obsługuje mniejszą liczbę tokenów. 
                    Idealny do prostszych zadań.
                  </li>
                  <li>
                    <span className="font-semibold">GPT-4:</span> Wolniejszy, ale bardziej precyzyjny i obsługujący większą ilość tokenów. 
                    Lepszy do zaawansowanych analiz i długich konwersacji.
                  </li>
                </ul>
                <p>
                  Oprócz modeli GPT, istnieją także inne modele, takie jak Falcon 40B, które oferują różne zalety 
                  w zależności od specyfiki aplikacji.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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

      {/* Wykres porównania tokenów */}
      <TokenComparisonChart />
      
      {/* Sekcja z terminami AI w formacie akordeonu */}
      <AITermsAccordion />
    </div>
  );
};

export default LessonContent;
