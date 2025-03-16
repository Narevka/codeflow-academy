
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BrainCircuit, MessagesSquare, Layers, MessageCircle, Activity } from "lucide-react";
import TokenComparisonChart from "./TokenComparisonChart";
import { useTheme } from "@/contexts/ThemeContext";

const AITermsAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>("item-5");
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="mt-8 mb-12">
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveAccordion("item-5")}
          className={`px-3 py-2 rounded transition-colors ${
            isDark 
              ? "text-white bg-magenta/30 hover:bg-magenta/50" 
              : "text-white bg-magenta hover:bg-magenta/90"
          }`}
        >
          Szczegółowe Opisy
        </button>
      </div>
      
      <div className={`rounded-lg border overflow-hidden ${
        isDark 
          ? "bg-slate-900/50 border-slate-800/50" 
          : "bg-white border-slate-200/50 shadow-md"
      }`}>
        <Accordion
          type="single"
          collapsible
          value={activeAccordion || undefined}
          onValueChange={(value) => setActiveAccordion(value)}
          className="w-full"
        >
          <AccordionItem value="item-1" className={`border-b ${isDark ? "border-white/10" : "border-slate-200"}`}>
            <AccordionTrigger className={`py-5 px-4 transition-colors ${
              isDark 
                ? "hover:bg-slate-800/30" 
                : "hover:bg-slate-50"
            }`}>
              <div className="flex items-center">
                <BrainCircuit className={`mr-3 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                <span className={`text-xl font-medium ${isDark ? "text-white" : "text-slate-800"}`}>
                  1. Duże Modele Językowe (LLM)
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className={`px-4 py-3 ${isDark ? "text-white/70" : "text-slate-700"}`}>
              <p>
                LLM to rodzaj sztucznej inteligencji, który został wytrenowany na ogromnych zbiorach danych tekstowych. Modele te analizują miliardy zdań i fragmentów tekstu, aby nauczyć się wzorców językowych, które pozwalają im generować spójne i kontekstowo adekwatne odpowiedzi. Przykłady LLM to GPT-3, GPT-4 oraz Gemini od Google. W kontekście Flowise, te modele są wykorzystywane jako podstawowe jednostki do przetwarzania tekstu i generowania odpowiedzi.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className={`border-b ${isDark ? "border-white/10" : "border-slate-200"}`}>
            <AccordionTrigger className={`py-5 px-4 transition-colors ${
              isDark 
                ? "hover:bg-slate-800/30" 
                : "hover:bg-slate-50"
            }`}>
              <div className="flex items-center">
                <Layers className={`mr-3 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                <span className={`text-xl font-medium ${isDark ? "text-white" : "text-slate-800"}`}>
                  2. Tokeny
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className={`px-4 py-3 ${isDark ? "text-white/70" : "text-slate-700"}`}>
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
              
              <TokenComparisonChart />
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className={`border-b ${isDark ? "border-white/10" : "border-slate-200"}`}>
            <AccordionTrigger className={`py-5 px-4 transition-colors ${
              isDark 
                ? "hover:bg-slate-800/30" 
                : "hover:bg-slate-50"
            }`}>
              <div className="flex items-center">
                <MessageCircle className={`mr-3 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                <span className={`text-xl font-medium ${isDark ? "text-white" : "text-slate-800"}`}>
                  3. Prompt (Zapytanie)
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className={`px-4 py-3 ${isDark ? "text-white/70" : "text-slate-700"}`}>
              <p>
                Prompt to zapytanie lub wejściowy tekst, który wysyłamy do modelu językowego w celu uzyskania odpowiedzi. 
                Może to być proste pytanie ("Jaka jest stolica Francji?") lub bardziej skomplikowana instrukcja, 
                która zawiera historię rozmowy. W Flowise prompty są podstawowym sposobem komunikacji z modelem i sterowania jego działaniem.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className={`border-b ${isDark ? "border-white/10" : "border-slate-200"}`}>
            <AccordionTrigger className={`py-5 px-4 transition-colors ${
              isDark 
                ? "hover:bg-slate-800/30" 
                : "hover:bg-slate-50"
            }`}>
              <div className="flex items-center">
                <MessagesSquare className={`mr-3 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                <span className={`text-xl font-medium ${isDark ? "text-white" : "text-slate-800"}`}>
                  4. Konwersacja i Kontekst
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className={`px-4 py-3 ${isDark ? "text-white/70" : "text-slate-700"}`}>
              <p>
                Modele językowe, takie jak GPT, generują odpowiedzi na podstawie przesłanych do nich promptów. 
                Jednakże nie mają one rzeczywistej "pamięci" – każdy nowy prompt traktowany jest jako oddzielne zapytanie. 
                Aby kontynuować konwersację w sposób spójny, historia rozmowy jest zwykle zawierana w treści promptu. 
                Dlatego im dłuższa konwersacja, tym więcej tokenów potrzeba na zachowanie kontekstu.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className={`border-b ${isDark ? "border-white/10" : "border-slate-200"}`}>
            <AccordionTrigger className={`py-5 px-4 transition-colors ${
              isDark 
                ? "hover:bg-slate-800/30" 
                : "hover:bg-slate-50"
            }`}>
              <div className="flex items-center">
                <Activity className={`mr-3 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                <span className={`text-xl font-medium ${isDark ? "text-white" : "text-slate-800"}`}>
                  5. Wydajność a Skomplikowanie Modelu
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className={`px-4 py-3 ${isDark ? "text-white/70" : "text-slate-700"}`}>
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

export default AITermsAccordion;
