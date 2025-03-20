
import React from "react";
import TokenComparisonChart from "./TokenComparisonChart";

export const LLMContent = () => (
  <p className="leading-relaxed text-gray-700">
    LLM to rodzaj sztucznej inteligencji, który został wytrenowany na ogromnych zbiorach danych tekstowych. Modele te analizują miliardy zdań i fragmentów tekstu, aby nauczyć się wzorców językowych, które pozwalają im generować spójne i kontekstowo adekwatne odpowiedzi. Przykłady LLM to GPT-3, GPT-4 oraz Gemini od Google. W kontekście Flowise, te modele są wykorzystywane jako podstawowe jednostki do przetwarzania tekstu i generowania odpowiedzi.
  </p>
);

export const TokenContent = () => (
  <>
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
  </>
);

export const PromptContent = () => (
  <>
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
  </>
);

export const ConversationContent = () => (
  <>
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
  </>
);

export const ModelPerformanceContent = () => (
  <>
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
  </>
);

export const FalconContent = () => (
  <>
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
  </>
);
