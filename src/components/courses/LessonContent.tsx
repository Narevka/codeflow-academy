
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  
  // Wprowadzenie do tematów tokenów i LLM
  const BasicLLMIntroduction = () => {
    return (
      <div className="prose prose-invert max-w-none mt-6 mb-8">
        <h3 className="text-xl font-bold text-magenta mb-4">Podstawowe informacje o modelach LLM</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-bold text-primary mb-2">1. Czym są duże modele językowe (LLM)</h4>
          <p className="mb-4 text-base leading-relaxed">
            Duże modele językowe (LLM) to zaawansowane systemy AI, które zostały wytrenowane na ogromnych zbiorach 
            danych tekstowych. Potrafią zrozumieć kontekst, generować odpowiedzi i wykonywać złożone zadania językowe. 
            W kontekście Flowise, są one fundamentem aplikacji, które będziesz budować.
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-bold text-primary mb-2">2. Tokeny - podstawowa jednostka przetwarzania</h4>
          <p className="mb-4 text-base leading-relaxed">
            Tokeny to podstawowe jednostki tekstu, na które modele językowe dzielą otrzymane dane. Mogą to być słowa, części słów, 
            znaki interpunkcyjne lub inne symbole. Ilość tokenów, jaką model może przetworzyć jednocześnie, określa jego 
            "okno kontekstowe" (context window) i jest kluczowym parametrem przy wyborze modelu do konkretnego zastosowania.
          </p>
        </div>
      </div>
    );
  };

  // Pogłębione wyjaśnienia w formie akordeonu
  const DetailedExplanations = () => {
    return (
      <div className="mt-10 mb-16">
        <h3 className="text-xl font-bold text-magenta mb-6">Dogłębna analiza działania modeli LLM</h3>
        
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="tokenization-process" className="border-white/10 mb-4">
            <AccordionTrigger className="text-white hover:text-blue-400 py-4 px-6 bg-white/5 rounded-lg hover:no-underline hover:bg-white/10">
              <span className="text-lg font-medium">Proces tokenizacji tekstu</span>
            </AccordionTrigger>
            <AccordionContent className="bg-white/5 px-6 pt-0 pb-6 rounded-b-lg text-white/80">
              <div className="mt-4 space-y-3">
                <p>
                  Tokenizacja to fundamentalny proces w działaniu modeli językowych, który polega na podziale tekstu na mniejsze jednostki zwane tokenami. 
                  Warto zrozumieć, że tokeny <strong>nie są</strong> po prostu pojedynczymi słowami:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Częste słowa jak "the", "a", "an" często stanowią pojedyncze tokeny</li>
                  <li>Rzadsze słowa mogą być dzielone na kilka tokenów (np. "tokenization" → "token" + "ization")</li>
                  <li>Znaki przestankowe, duże litery, spacje - wszystko to ma znaczenie w procesie tokenizacji</li>
                  <li>W językach innych niż angielski, tokenizacja jest jeszcze bardziej złożona i mniej efektywna</li>
                </ul>
                
                <p className="pt-2">
                  Modele używają różnych algorytmów tokenizacji. GPT-4 używa tokenizera o nazwie "cl100k_base", który został specjalnie zaprojektowany, 
                  aby być wydajnym dla wielu języków i typów danych, w tym kodu i tekstu technicznego.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="context-window" className="border-white/10 mb-4">
            <AccordionTrigger className="text-white hover:text-blue-400 py-4 px-6 bg-white/5 rounded-lg hover:no-underline hover:bg-white/10">
              <span className="text-lg font-medium">Okno kontekstowe i jego znaczenie</span>
            </AccordionTrigger>
            <AccordionContent className="bg-white/5 px-6 pt-0 pb-6 rounded-b-lg text-white/80">
              <div className="mt-4 space-y-3">
                <p>
                  Okno kontekstowe (context window) określa, ile tokenów model może przetworzyć w jednym zapytaniu. 
                  To kluczowe ograniczenie, które ma ogromny wpływ na możliwości aplikacji:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-300 mb-2">GPT-3.5 (16K tokenów)</h5>
                    <p>Odpowiada to około:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>12 stronom maszynopisu</li>
                      <li>~6000 słów tekstu</li>
                      <li>1-2 rozdziałom książki</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-300 mb-2">GPT-4 (128K tokenów)</h5>
                    <p>Odpowiada to około:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>95 stronom maszynopisu</li>
                      <li>~50,000 słów tekstu</li>
                      <li>całej krótkiej książce</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  Jednak ważne jest zrozumienie, że wielkość okna kontekstowego to <strong>nie tylko</strong> ilość tekstu, 
                  który możesz "wrzucić" do modelu, ale również zdolność modelu do utrzymania spójności w długich konwersacjach 
                  i analizowania złożonych dokumentów w całości, bez potrzeby ich fragmentacji.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="model-capabilities" className="border-white/10 mb-4">
            <AccordionTrigger className="text-white hover:text-blue-400 py-4 px-6 bg-white/5 rounded-lg hover:no-underline hover:bg-white/10">
              <span className="text-lg font-medium">Różnice w zdolnościach poszczególnych modeli</span>
            </AccordionTrigger>
            <AccordionContent className="bg-white/5 px-6 pt-0 pb-6 rounded-b-lg text-white/80">
              <div className="mt-4 space-y-3">
                <p>
                  Modele językowe różnią się nie tylko ilością tokenów, które mogą przetworzyć, ale również jakością generowanych odpowiedzi:
                </p>
                
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-blue-900/30 text-white">
                      <tr>
                        <th className="px-4 py-3 rounded-tl-lg">Model</th>
                        <th className="px-4 py-3">Rozumienie kontekstu</th>
                        <th className="px-4 py-3">Odpowiedzi twórcze</th>
                        <th className="px-4 py-3">Wiedza specjalistyczna</th>
                        <th className="px-4 py-3 rounded-tr-lg">Analiza kodu</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-blue-900/10 border-b border-white/10">
                        <td className="px-4 py-3 font-medium">GPT-3.5</td>
                        <td className="px-4 py-3">Dobry</td>
                        <td className="px-4 py-3">Dobry</td>
                        <td className="px-4 py-3">Podstawowy</td>
                        <td className="px-4 py-3">Podstawowy</td>
                      </tr>
                      <tr className="bg-blue-900/20 border-b border-white/10">
                        <td className="px-4 py-3 font-medium">Gemini 1.0</td>
                        <td className="px-4 py-3">Bardzo dobry</td>
                        <td className="px-4 py-3">Bardzo dobry</td>
                        <td className="px-4 py-3">Dobry</td>
                        <td className="px-4 py-3">Dobry</td>
                      </tr>
                      <tr className="bg-blue-900/10 border-b border-white/10">
                        <td className="px-4 py-3 font-medium">GPT-4</td>
                        <td className="px-4 py-3">Doskonały</td>
                        <td className="px-4 py-3">Doskonały</td>
                        <td className="px-4 py-3">Bardzo dobry</td>
                        <td className="px-4 py-3">Bardzo dobry</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p>
                  <strong>GPT-4</strong> nie tylko obsługuje więcej tokenów, ale również znacznie lepiej rozumie złożone instrukcje, 
                  kontekst kulturowy i specjalistyczne pojęcia. W praktyce oznacza to, że może generować bardziej precyzyjne i 
                  użyteczne odpowiedzi w zaawansowanych zastosowaniach, takich jak:
                </p>
                
                <ul className="list-disc pl-6 space-y-1">
                  <li>Analiza skomplikowanych dokumentów prawnych</li>
                  <li>Tłumaczenie i streszczanie badań naukowych</li>
                  <li>Tworzenie zaawansowanego kodu wraz z wyjaśnieniami</li>
                  <li>Generowanie spójnych i logicznych długich tekstów</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="praktyczne-zastosowania" className="border-white/10 mb-4">
            <AccordionTrigger className="text-white hover:text-blue-400 py-4 px-6 bg-white/5 rounded-lg hover:no-underline hover:bg-white/10">
              <span className="text-lg font-medium">Praktyczne zastosowania w Flowise</span>
            </AccordionTrigger>
            <AccordionContent className="bg-white/5 px-6 pt-0 pb-6 rounded-b-lg text-white/80">
              <div className="mt-4 space-y-3">
                <p>
                  W kontekście aplikacji budowanych w Flowise, zrozumienie tokenów i ich ograniczeń pozwala na projektowanie 
                  efektywnych przepływów, które optymalizują interakcje z modelami:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-5 rounded-lg border border-white/10">
                    <h5 className="font-semibold text-blue-300 mb-3">Techniki optymalizacji tokenów</h5>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Wstępne przetwarzanie danych (chunking)</li>
                      <li>Streszczanie długich tekstów przed ich analizą</li>
                      <li>Selektywne przechowywanie kluczowych elementów konwersacji</li>
                      <li>Efektywne instrukcje systemowe (mniej tokenów, więcej precyzji)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-5 rounded-lg border border-white/10">
                    <h5 className="font-semibold text-blue-300 mb-3">Wybór modelu w zależności od zastosowania</h5>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>GPT-3.5</strong>: Chatboty o krótkim kontekście, proste analizy tekstu, podstawowe asystenty</li>
                      <li><strong>Gemini 1.0</strong>: Aplikacje multimodalne, przetwarzanie średnio złożonych danych</li>
                      <li><strong>GPT-4</strong>: Zaawansowane asystenty badawcze, analiza dokumentów prawnych, synteza wiedzy z wielu źródeł</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  Praktyczny przykład: Budując w Flowise chatbota obsługującego bazę wiedzy, możesz zastosować 
                  podejście hybrydowe - używać GPT-3.5 do prostych zapytań o fakty, a GPT-4 uruchamiać tylko wtedy, 
                  gdy wymagana jest głębsza analiza dokumentów lub kontekstu historycznego rozmowy.
                </p>
                
                <div className="p-4 bg-green-900/20 rounded-lg mt-4 border border-green-500/30">
                  <h5 className="font-semibold text-green-300 mb-2">Wskazówka dla projektantów Flowise:</h5>
                  <p>
                    Optymalne wykorzystanie LLM wymaga zbalansowania kosztów, wydajności i jakości. Projektując przepływy, 
                    zawsze bierz pod uwagę ograniczenia tokenów oraz stosuj techniki takie jak filtrowanie zbędnych danych, 
                    zarządzanie pamięcią konwersacji i selektywne wyzwalanie droższych modeli tylko wtedy, gdy są naprawdę potrzebne.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="prompts-conversations" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-blue-400 py-4 px-6 bg-white/5 rounded-lg hover:no-underline hover:bg-white/10">
              <span className="text-lg font-medium">Struktura promptów i zarządzanie konwersacją</span>
            </AccordionTrigger>
            <AccordionContent className="bg-white/5 px-6 pt-0 pb-6 rounded-b-lg text-white/80">
              <div className="mt-4 space-y-3">
                <p>
                  Prompt to zapytanie lub wejściowy tekst, który wysyłamy do modelu językowego w celu uzyskania odpowiedzi. 
                  W Flowise prompty są podstawowym sposobem komunikacji z modelem i sterowania jego działaniem:
                </p>
                
                <div className="bg-black/20 p-4 rounded-lg my-4">
                  <h5 className="font-semibold text-blue-300 mb-2">Anatomia dobrego promptu:</h5>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Kontekst</strong> – informacje o celu zadania i ograniczeniach</li>
                    <li><strong>Instrukcje</strong> – precyzyjne wytyczne co model ma zrobić</li>
                    <li><strong>Dane wejściowe</strong> – konkretne informacje do przetworzenia</li>
                    <li><strong>Format wyjścia</strong> – oczekiwany format odpowiedzi</li>
                  </ul>
                </div>
                
                <p>
                  Modele językowe, takie jak GPT, generują odpowiedzi na podstawie przesłanych do nich promptów. 
                  Jednakże nie mają one rzeczywistej "pamięci" – każdy nowy prompt traktowany jest jako oddzielne zapytanie.
                  Aby kontynuować konwersację w sposób spójny, historia rozmowy jest zwykle zawierana w treści promptu. 
                  Dlatego im dłuższa konwersacja, tym więcej tokenów potrzeba na zachowanie kontekstu.
                </p>
                
                <div className="bg-gradient-to-br from-magenta/20 to-blue-900/20 p-5 rounded-lg border border-white/10 my-4">
                  <h5 className="font-semibold text-blue-300 mb-3">Strategie zarządzania konwersacjami w Flowise:</h5>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li><strong>Summarization Chain</strong> – okresowe streszczanie historii konwersacji</li>
                    <li><strong>Okno przesuwne</strong> – zachowywanie tylko N ostatnich wiadomości</li>
                    <li><strong>Kontekst selektywny</strong> – przechowywanie tylko kluczowych informacji</li>
                    <li><strong>Hybrydowe podejście</strong> – łączenie pamięci krótkotrwałej z długotrwałą (np. vector store)</li>
                  </ol>
                </div>
                
                <p>
                  W praktyce, przy budowie aplikacji w Flowise, musisz znaleźć równowagę między zachowaniem wystarczającego 
                  kontekstu dla sensownych odpowiedzi a optymalizacją zużycia tokenów. Dobre zrozumienie struktury promptów 
                  i strategii zarządzania konwersacjami jest kluczowe dla tworzenia wydajnych i naturalnych interakcji z użytkownikiem.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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

      {/* Wprowadzenie do podstawowych pojęć */}
      <BasicLLMIntroduction />

      {/* Wykres porównania tokenów */}
      <TokenComparisonChart />
      
      {/* Sekcja z pogłębionymi wyjaśnieniami */}
      <DetailedExplanations />
    </div>
  );
};

export default LessonContent;
