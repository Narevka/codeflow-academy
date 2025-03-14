
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
import { Info, Book } from "lucide-react";

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
  
  // Nowa sekcja - kluczowe pojęcia AI wyświetlane w formie karty z informacjami
  const KeyAITermsGlossary = () => {
    return (
      <div className="mt-12 mb-16">
        <div className="flex items-center justify-center mb-8">
          <Book className="text-magenta mr-3" size={24} />
          <h3 className="text-2xl font-bold text-white">Kluczowe pojęcia AI w Flowise</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Karta 1: LLM */}
          <div className="bg-gradient-to-br from-[#1E2130]/80 to-[#2A2E3F] p-6 rounded-xl border border-white/10 hover:border-magenta/30 transition-all shadow-lg">
            <div className="flex items-center mb-3">
              <div className="bg-magenta/20 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                <span className="text-magenta font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold text-white">Duże Modele Językowe (LLM)</h4>
            </div>
            <p className="text-white/80 leading-relaxed mb-3">
              Zaawansowane systemy AI trenowane na ogromnych zbiorach danych tekstowych, 
              które umożliwiają generowanie tekstu ludzkiej jakości, rozumienie kontekstu i rozwiązywanie złożonych problemów.
            </p>
            <p className="text-white/80 leading-relaxed">
              W Flowise, LLM stanowią rdzeń aplikacji konwersacyjnych, umożliwiając interakcje zbliżone do ludzkich 
              oraz przetwarzanie wiedzy z różnych źródeł danych.
            </p>
          </div>

          {/* Karta 2: Tokeny */}
          <div className="bg-gradient-to-br from-[#1E2130]/80 to-[#2A2E3F] p-6 rounded-xl border border-white/10 hover:border-magenta/30 transition-all shadow-lg">
            <div className="flex items-center mb-3">
              <div className="bg-magenta/20 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                <span className="text-magenta font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold text-white">Tokeny</h4>
            </div>
            <p className="text-white/80 leading-relaxed mb-3">
              Podstawowe jednostki przetwarzania tekstu w modelach AI - fragmenty słów, znaki lub całe słowa, 
              na które dzielony jest tekst podczas analizy przez LLM.
            </p>
            <p className="text-white/80 leading-relaxed">
              Limit tokenów określa maksymalną długość kontekstu, jaką model może przetworzyć jednocześnie:
              <span className="block mt-2 text-sm bg-black/30 p-2 rounded border border-white/10">
                GPT-3.5: 16k tokenów (~14 stron) | GPT-4: 128k tokenów (~300 stron)
              </span>
            </p>
          </div>

          {/* Karta 3: Prompty */}
          <div className="bg-gradient-to-br from-[#1E2130]/80 to-[#2A2E3F] p-6 rounded-xl border border-white/10 hover:border-magenta/30 transition-all shadow-lg">
            <div className="flex items-center mb-3">
              <div className="bg-magenta/20 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                <span className="text-magenta font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold text-white">Prompt (Zapytanie)</h4>
            </div>
            <p className="text-white/80 leading-relaxed mb-3">
              Instrukcja lub pytanie wysyłane do modelu AI, które określa zadanie do wykonania.
              Od jakości i precyzji promptu zależy trafność odpowiedzi modelu.
            </p>
            <p className="text-white/80 leading-relaxed">
              W Flowise, projektowanie promptów jest kluczowym elementem tworzenia efektywnych aplikacji AI - 
              umożliwia sterowanie zachowaniem modelu i uzyskanie pożądanych wyników bez programowania.
            </p>
          </div>

          {/* Karta 4: Kontekst */}
          <div className="bg-gradient-to-br from-[#1E2130]/80 to-[#2A2E3F] p-6 rounded-xl border border-white/10 hover:border-magenta/30 transition-all shadow-lg">
            <div className="flex items-center mb-3">
              <div className="bg-magenta/20 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                <span className="text-magenta font-bold">4</span>
              </div>
              <h4 className="text-xl font-bold text-white">Konwersacja i Kontekst</h4>
            </div>
            <p className="text-white/80 leading-relaxed mb-3">
              Mechanizm "pamięci" modeli językowych, pozwalający na prowadzenie spójnych rozmów poprzez 
              uwzględnianie wcześniejszych wypowiedzi w bieżącej analizie.
            </p>
            <p className="text-white/80 leading-relaxed">
              W aplikacjach Flowise, zarządzanie kontekstem pozwala tworzyć naturalnie płynące dialogi, 
              gdzie model "pamięta" wcześniejsze pytania i odpowiedzi użytkownika.
            </p>
          </div>

          {/* Karta 5: Wybór modelu */}
          <div className="bg-gradient-to-br from-[#1E2130]/80 to-[#2A2E3F] p-6 rounded-xl border border-white/10 hover:border-magenta/30 transition-all shadow-lg md:col-span-2">
            <div className="flex items-center mb-3">
              <div className="bg-magenta/20 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                <span className="text-magenta font-bold">5</span>
              </div>
              <h4 className="text-xl font-bold text-white">Wydajność a Skomplikowanie Modelu</h4>
            </div>
            <div className="md:flex md:gap-8">
              <div className="md:w-1/2">
                <p className="text-white/80 leading-relaxed mb-3">
                  Kluczowe aspekty wyboru odpowiedniego modelu AI dla konkretnych zastosowań, uwzględniając 
                  kompromis między szybkością działania a jakością wyników.
                </p>
                <p className="text-white/80 leading-relaxed">
                  W Flowise możesz wybierać między różnymi modelami w zależności od potrzeb aplikacji:
                </p>
              </div>
              <div className="md:w-1/2 mt-3 md:mt-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 p-3 rounded border border-white/10">
                    <h5 className="font-semibold text-white mb-1">Szybsze modele (GPT-3.5)</h5>
                    <ul className="list-disc pl-4 text-sm text-white/70">
                      <li>Niższy koszt użytkowania</li>
                      <li>Krótszy czas odpowiedzi</li>
                      <li>Idealne do prostszych zastosowań</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-3 rounded border border-white/10">
                    <h5 className="font-semibold text-white mb-1">Zaawansowane modele (GPT-4)</h5>
                    <ul className="list-disc pl-4 text-sm text-white/70">
                      <li>Lepsza analiza złożonych danych</li>
                      <li>Większy kontekst (do 128k tokenów)</li>
                      <li>Dokładniejsze odpowiedzi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center mt-8 p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
          <Info className="text-blue-400 mr-3 flex-shrink-0" size={24} />
          <p className="text-white/90 text-sm">
            Głębsze zrozumienie tych pojęć pozwoli Ci efektywniej projektować aplikacje w Flowise, 
            wybierając odpowiednie modele i optymalizując przepływy pracy w zależności od konkretnych potrzeb.
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
      
      {/* Nowa sekcja z kartami kluczowych pojęć */}
      <KeyAITermsGlossary />
    </div>
  );
};

export default LessonContent;
