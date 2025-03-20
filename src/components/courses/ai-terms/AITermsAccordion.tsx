
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BrainCircuit, MessagesSquare, Layers, MessageCircle, Activity, Cpu } from "lucide-react";
import TokenComparisonChart from "./TokenComparisonChart";

const AITermsAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>("item-1");
  
  return (
    <div className="mt-8 mb-12 max-w-4xl mx-auto">
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        <button
          onClick={() => setActiveAccordion("item-1")}
          className={`px-3 py-2 rounded-md transition-colors font-medium ${activeAccordion === "item-1" 
            ? "bg-magenta text-white" 
            : "bg-magenta/10 text-magenta hover:bg-magenta/20"}`}
        >
          LLM
        </button>
        <button
          onClick={() => setActiveAccordion("item-2")}
          className={`px-3 py-2 rounded-md transition-colors font-medium ${activeAccordion === "item-2" 
            ? "bg-magenta text-white" 
            : "bg-magenta/10 text-magenta hover:bg-magenta/20"}`}
        >
          Tokeny
        </button>
        <button
          onClick={() => setActiveAccordion("item-3")}
          className={`px-3 py-2 rounded-md transition-colors font-medium ${activeAccordion === "item-3" 
            ? "bg-magenta text-white" 
            : "bg-magenta/10 text-magenta hover:bg-magenta/20"}`}
        >
          Prompt
        </button>
        <button
          onClick={() => setActiveAccordion("item-4")}
          className={`px-3 py-2 rounded-md transition-colors font-medium ${activeAccordion === "item-4" 
            ? "bg-magenta text-white" 
            : "bg-magenta/10 text-magenta hover:bg-magenta/20"}`}
        >
          Konwersacja
        </button>
        <button
          onClick={() => setActiveAccordion("item-5")}
          className={`px-3 py-2 rounded-md transition-colors font-medium ${activeAccordion === "item-5" 
            ? "bg-magenta text-white" 
            : "bg-magenta/10 text-magenta hover:bg-magenta/20"}`}
        >
          Modele AI
        </button>
        <button
          onClick={() => setActiveAccordion("item-6")}
          className={`px-3 py-2 rounded-md transition-colors font-medium ${activeAccordion === "item-6" 
            ? "bg-magenta text-white" 
            : "bg-magenta/10 text-magenta hover:bg-magenta/20"}`}
        >
          Falcon 40B
        </button>
      </div>
      
      <div className="rounded-lg border border-purple/20 overflow-hidden shadow-lg">
        <Accordion
          type="single"
          collapsible
          value={activeAccordion || undefined}
          onValueChange={(value) => setActiveAccordion(value)}
          className="w-full"
        >
          <AccordionItem value="item-1" className="border-b border-purple/10">
            <AccordionTrigger className="py-5 px-6 hover:bg-gradient-to-r hover:from-magenta/5 hover:to-purple/5 transition-colors">
              <div className="flex items-center">
                <BrainCircuit className="text-magenta mr-3 flex-shrink-0" />
                <span className="text-xl font-medium">1. Duże Modele Językowe (LLM)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-5 bg-gradient-to-br from-white to-purple/5">
              <p className="leading-relaxed text-gray-700">
                LLM to rodzaj sztucznej inteligencji, który został wytrenowany na ogromnych zbiorach danych tekstowych. Modele te analizują miliardy zdań i fragmentów tekstu, aby nauczyć się wzorców językowych, które pozwalają im generować spójne i kontekstowo adekwatne odpowiedzi. Przykłady LLM to GPT-3, GPT-4 oraz Gemini od Google. W kontekście Flowise, te modele są wykorzystywane jako podstawowe jednostki do przetwarzania tekstu i generowania odpowiedzi.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-b border-purple/10">
            <AccordionTrigger className="py-5 px-6 hover:bg-gradient-to-r hover:from-magenta/5 hover:to-purple/5 transition-colors">
              <div className="flex items-center">
                <Layers className="text-magenta mr-3 flex-shrink-0" />
                <span className="text-xl font-medium">2. Tokeny</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-5 bg-gradient-to-br from-white to-purple/5">
              <p className="leading-relaxed mb-4 text-gray-700">
                Tokeny to podstawowe jednostki tekstu wykorzystywane przez modele językowe. Można je zrozumieć jako słowa, znaki lub fragmenty zdań, na które model dzieli wejściowy tekst. Przykładowo, zdanie "ChatGPT to świetne narzędzie" może zostać podzielone na kilka tokenów: "Chat", "GPT", "to", "świetne", "narzędzie". Modele takie jak GPT-3 czy GPT-4 operują właśnie na tych tokenach, analizując je i na tej podstawie generując odpowiedzi.
              </p>
              
              <div className="bg-gradient-to-br from-magenta/5 to-purple/10 p-4 rounded-lg my-4 border border-magenta/20">
                <p className="font-medium text-magenta mb-2">Limity tokenów:</p>
                <p className="mb-2 flex items-center">
                  <span className="inline-block w-3 h-3 bg-magenta rounded-full mr-2"></span> 
                  <strong>GPT-4:</strong> Obsługuje do 128 tysięcy tokenów (ok. 300 stron tekstu)
                </p>
                <p className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-purple rounded-full mr-2"></span>
                  <strong>GPT-3.5:</strong> Obsługuje do 16 tysięcy tokenów (ok. 14 stron tekstu)
                </p>
              </div>
              
              <p className="leading-relaxed mt-4 text-gray-700">
                Rozumienie liczby tokenów jest ważne przy budowaniu aplikacji, ponieważ wpływa to na długość konwersacji, którą model może „zapamiętać" oraz przetworzyć.
              </p>
              
              <TokenComparisonChart />
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-b border-purple/10">
            <AccordionTrigger className="py-5 px-6 hover:bg-gradient-to-r hover:from-magenta/5 hover:to-purple/5 transition-colors">
              <div className="flex items-center">
                <MessageCircle className="text-magenta mr-3 flex-shrink-0" />
                <span className="text-xl font-medium">3. Prompt (Zapytanie)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-5 bg-gradient-to-br from-white to-purple/5">
              <p className="leading-relaxed text-gray-700">
                Prompt to zapytanie lub wejściowy tekst, który wysyłamy do modelu językowego w celu uzyskania odpowiedzi. 
                Może to być proste pytanie ("Jaka jest stolica Francji?") lub bardziej skomplikowana instrukcja, 
                która zawiera historię rozmowy. W Flowise prompty są podstawowym sposobem komunikacji z modelem i sterowania jego działaniem.
              </p>
              
              <div className="bg-gradient-to-br from-magenta/5 to-purple/10 p-4 rounded-lg my-4 border border-magenta/20">
                <p className="font-medium text-magenta mb-2">Przykłady promptów:</p>
                <p className="mb-2">
                  <strong>Prosty:</strong> "Jaka jest stolica Francji?"
                </p>
                <p>
                  <strong>Złożony:</strong> "Jesteś asystentem AI specjalizującym się w historii sztuki. Opisz styl malarski impresjonizmu i podaj trzech głównych przedstawicieli tego nurtu."
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-b border-purple/10">
            <AccordionTrigger className="py-5 px-6 hover:bg-gradient-to-r hover:from-magenta/5 hover:to-purple/5 transition-colors">
              <div className="flex items-center">
                <MessagesSquare className="text-magenta mr-3 flex-shrink-0" />
                <span className="text-xl font-medium">4. Konwersacja i Kontekst</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-5 bg-gradient-to-br from-white to-purple/5">
              <p className="leading-relaxed text-gray-700">
                Modele językowe, takie jak GPT, generują odpowiedzi na podstawie przesłanych do nich promptów. 
                Jednakże nie mają one rzeczywistej "pamięci" – każdy nowy prompt traktowany jest jako oddzielne zapytanie. 
                Aby kontynuować konwersację w sposób spójny, historia rozmowy jest zwykle zawierana w treści promptu. 
                Dlatego im dłuższa konwersacja, tym więcej tokenów potrzeba na zachowanie kontekstu.
              </p>
              
              <div className="bg-gradient-to-br from-purple/5 to-purple/10 p-4 rounded-lg my-4 border border-purple/20">
                <p className="italic text-gray-700">
                  W praktyce oznacza to, że podczas projektowania aplikacji konwersacyjnych w Flowise, 
                  należy starannie zarządzać kontekstem rozmowy i być świadomym ograniczeń związanych z liczbą tokenów.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border-b border-purple/10">
            <AccordionTrigger className="py-5 px-6 hover:bg-gradient-to-r hover:from-magenta/5 hover:to-purple/5 transition-colors">
              <div className="flex items-center">
                <Activity className="text-magenta mr-3 flex-shrink-0" />
                <span className="text-xl font-medium">5. Wydajność a Skomplikowanie Modelu</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-5 bg-gradient-to-br from-white to-purple/5">
              <p className="mb-4 leading-relaxed text-gray-700">
                W kontekście wyboru modelu do aplikacji warto znać różnice między różnymi wersjami:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-white to-purple/10 p-4 rounded-lg border border-purple/20">
                  <h4 className="font-semibold text-purple mb-2">GPT-3.5</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">Szybszy, ale obsługuje mniejszą liczbę tokenów</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">Idealny do prostszych zadań</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">Niższy koszt użytkowania</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white to-magenta/10 p-4 rounded-lg border border-magenta/20">
                  <h4 className="font-semibold text-magenta mb-2">GPT-4</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-magenta rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">Wolniejszy, ale bardziej precyzyjny</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-magenta rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">Obsługuje większą ilość tokenów</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-magenta rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">Lepszy do zaawansowanych analiz i długich konwersacji</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="leading-relaxed text-gray-700">
                Oprócz modeli GPT, istnieją także inne modele, takie jak Falcon 40B, które oferują różne zalety 
                w zależności od specyfiki aplikacji.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="border-b border-purple/10">
            <AccordionTrigger className="py-5 px-6 hover:bg-gradient-to-r hover:from-magenta/5 hover:to-purple/5 transition-colors">
              <div className="flex items-center">
                <Cpu className="text-magenta mr-3 flex-shrink-0" />
                <span className="text-xl font-medium">6. Model Falcon 40B</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-5 bg-gradient-to-br from-white to-purple/5">
              <p className="leading-relaxed text-gray-700">
                Falcon 40B to jeden z zaawansowanych modeli językowych o dużych możliwościach. Został zaprojektowany do przetwarzania jeszcze większej liczby tokenów niż GPT-4, co pozwala na generowanie bardziej rozbudowanych i kontekstowo bogatych odpowiedzi. Tego typu modele są szczególnie przydatne w aplikacjach wymagających dużej precyzji oraz złożonych analiz tekstu.
              </p>
              
              <div className="bg-gradient-to-r from-magenta/10 to-purple/10 p-4 rounded-lg my-4 border border-purple/20">
                <p className="font-medium text-magenta mb-2">Zalety Falcon 40B:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-700">Obsługa bardzo dużej liczby tokenów</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-700">Zaawansowane możliwości rozumowania kontekstowego</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-purple rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-700">Wysoka precyzja w analizie złożonych tekstów</span>
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default AITermsAccordion;
