
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
import Tokenizer from "@/components/ui/Tokenizer";

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
  
  // Dodatkowa zawartość opisująca prompty, kontekst i modele
  const AdditionalTokenContent = () => {
    return (
      <div className="prose prose-invert max-w-none mt-4 mb-12">
        <div className="mb-6">
          <h4 className="text-lg font-bold text-primary mb-2">3. Prompt (Zapytanie)</h4>
          <p className="mb-4 text-base leading-relaxed">
            Prompt to zapytanie lub wejściowy tekst, który wysyłamy do modelu językowego w celu uzyskania odpowiedzi. 
            Może to być proste pytanie ("Jaka jest stolica Francji?") lub bardziej skomplikowana instrukcja, 
            która zawiera historię rozmowy. W Flowise prompty są podstawowym sposobem komunikacji z modelem i sterowania jego działaniem.
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-bold text-primary mb-2">4. Konwersacja i Kontekst</h4>
          <p className="mb-4 text-base leading-relaxed">
            Modele językowe, takie jak GPT, generują odpowiedzi na podstawie przesłanych do nich promptów. 
            Jednakże nie mają one rzeczywistej "pamięci" – każdy nowy prompt traktowany jest jako oddzielne zapytanie. 
            Aby kontynuować konwersację w sposób spójny, historia rozmowy jest zwykle zawierana w treści promptu. 
            Dlatego im dłuższa konwersacja, tym więcej tokenów potrzeba na zachowanie kontekstu.
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-bold text-primary mb-2">5. Wydajność a Skomplikowanie Modelu</h4>
          <p className="mb-4 text-base leading-relaxed">
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
          <p className="mb-4 text-base leading-relaxed">
            Oprócz modeli GPT, istnieją także inne modele, takie jak Falcon 40B, które oferują różne zalety 
            w zależności od specyfiki aplikacji.
          </p>
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
      
      {/* Tokenizer component */}
      <Tokenizer />
      
      {/* Nowa sekcja z treścią o promptach i modelach */}
      <AdditionalTokenContent />
    </div>
  );
};

export default LessonContent;
