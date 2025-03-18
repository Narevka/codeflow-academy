
import { useState } from "react";
import { BookOpen, Check, ChevronRight, Cpu, Database, LineChart, RotateCw, Server, Settings, Sparkles, Workflow } from "lucide-react";

interface CourseModuleItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  lessons: string[];
}

const modules: CourseModuleItem[] = [
  {
    id: 1,
    title: "Wprowadzenie do Flowise",
    description: "Poznaj podstawy platformy i pierwsze kroki w tworzeniu aplikacji AI.",
    icon: BookOpen,
    lessons: [
      "Dowiesz się, czym są duże modele językowe (LLM) i jak działają",
      "Poznasz podstawy pracy z Flowise, od instalacji po pierwsze kroki w aplikacji",
      "Odkryjesz różnice między GPT-3.5 a GPT-4 oraz ich zastosowania",
      "Nauczysz się efektywnie wybierać modele do różnych projektów"
    ]
  },
  {
    id: 2,
    title: "Instalacja Flowise",
    description: "Naucz się instalować Flowise w różnych środowiskach.",
    icon: Server,
    lessons: [
      "Nauczysz się instalować Flowise lokalnie i w chmurze",
      "Poznasz zalety i wady obu metod instalacji",
      "Zdobędziesz wiedzę na temat konfiguracji środowiska pracy"
    ]
  },
  {
    id: 3,
    title: "Aktualizacja Flowise",
    description: "Poznaj metody bezpiecznej aktualizacji oprogramowania.",
    icon: RotateCw,
    lessons: [
      "Dowiesz się, jak szybko i bezpiecznie zaktualizować Flowise lokalnie oraz w chmurze",
      "Poznasz narzędzia, takie jak NPM i GitHub, używane w procesie aktualizacji",
      "Zrozumiesz różnicę między aktualizacją lokalną a na platformie Render",
      "Nauczysz się unikać typowych błędów podczas aktualizacji"
    ]
  },
  {
    id: 4,
    title: "Podstawy FlowiseAI",
    description: "Opanuj praktyczne aspekty korzystania z interfejsu Flowise.",
    icon: Settings,
    lessons: [
      "Nauczysz się korzystać z Panelu Chatflow do zarządzania projektami",
      "Poznasz narzędzia, takie jak Agenci, Marketplace i Klucze API",
      "Dowiesz się, jak dodawać i zarządzać komponentami w projektach",
      "Odkryjesz, jak eksportować i importować projekty dla większej elastyczności"
    ]
  },
  {
    id: 5,
    title: "Budowa pierwszego przepływu",
    description: "Stwórz swoją pierwszą aplikację AI krok po kroku.",
    icon: Workflow,
    lessons: [
      "Stworzysz swój pierwszy przepływ oparty na modelach OpenAI",
      "Dodasz komponenty, takie jak Łańcuchy Konwersacyjne i Pamięć",
      "Nauczysz się tworzyć szablony promptów i zmienne dynamiczne",
      "Przetestujesz swoje rozwiązania w praktycznym środowisku Flowise"
    ]
  },
  {
    id: 6,
    title: "Monitorowanie aplikacji",
    description: "Śledź wydajność swoich aplikacji AI i optymalizuj koszty.",
    icon: LineChart,
    lessons: [
      "Nauczysz się monitorować zużycie tokenów i optymalizować koszty użycia modeli",
      "Poznasz narzędzie LangSmith i jego zastosowania w śledzeniu statystyk",
      "Dowiesz się, jak analizować wydajność aplikacji i wykrywać błędy",
      "Zrozumiesz, jak interpretować metryki, takie jak latencja czy użycie zasobów"
    ]
  },
  {
    id: 7,
    title: "Weryfikacja i łączenie modeli",
    description: "Zwiększ możliwości swoich aplikacji poprzez łączenie różnych modeli.",
    icon: Cpu,
    lessons: [
      "Dowiesz się, jak łączyć modele i weryfikować treści za pomocą szablonów promptów",
      "Stworzysz złożone interakcje między modelami AI",
      "Nauczysz się optymalizować ustawienia modeli dla lepszych wyników",
      "Odkryjesz techniki oceny treści generowanych przez modele"
    ]
  },
  {
    id: 8,
    title: "Praktyczne przykłady",
    description: "Zapoznaj się z rzeczywistymi przykładami zastosowań Flowise AI.",
    icon: Database,
    lessons: [
      "Poznasz konkretne przypadki zastosowania Flowise, takie jak chatboty obsługujące PDF-y",
      "Dowiesz się, jak efektywnie wdrożyć te techniki w swoich projektach",
      "Odkryjesz, jak zarządzać dużymi zbiorami danych w aplikacjach AI",
      "Nauczysz się projektować przepływy zoptymalizowane pod kątem użytkownika końcowego"
    ]
  },
  {
    id: 9,
    title: "Zaawansowane techniki",
    description: "Opanuj zaawansowane funkcje i integracje w Flowise AI.",
    icon: Sparkles,
    lessons: [
      "Opanujesz moderację treści i integrację z Redis w celu utrzymania długotrwałej pamięci",
      "Nauczysz się korzystać z Function Calling i Agentów do realizacji złożonych zadań",
      "Poznasz techniki skalowania aplikacji AI dla większej liczby użytkowników",
      "Dowiesz się, jak integrować zaawansowane API i narzędzia analityczne w swoich projektach"
    ]
  }
];

const CourseProgram = () => {
  const [activeModule, setActiveModule] = useState<number>(1);

  const handleModuleClick = (moduleId: number) => {
    setActiveModule(moduleId);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/public/lovable-uploads/afb57166-3152-43ef-9f3f-a8f4d8351ea6.png')] bg-cover bg-center opacity-5" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Program kursu
          </h2>
          <p className="text-gray-600 text-lg">
            Kompleksowy program nauczania krok po kroku, który przeprowadzi Cię od podstaw do 
            zaawansowanych aplikacji opartych na Flowise AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          <div className="col-span-1 sticky top-24 self-start h-fit">
            <div className="bg-white shadow-lg p-5 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Moduły kursu</h3>
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center ${
                      activeModule === module.id
                        ? "bg-magenta/10 border-magenta/50 border"
                        : "bg-gray-50 hover:bg-gray-100 border border-gray-100"
                    }`}
                    onClick={() => handleModuleClick(module.id)}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                      activeModule === module.id ? "bg-magenta" : "bg-gray-200"
                    }`}>
                      <module.icon size={20} className={activeModule === module.id ? "text-white" : "text-gray-600"} />
                    </div>
                    <div>
                      <span className={`${activeModule === module.id ? "text-magenta" : "text-gray-800"} font-medium`}>Moduł {module.id}</span>
                      <p className="text-gray-600 text-sm">{module.title}</p>
                    </div>
                    <ChevronRight size={18} className={`ml-auto transition-transform ${
                      activeModule === module.id ? "text-magenta rotate-90" : "text-gray-400"
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            {modules
              .filter((module) => module.id === activeModule)
              .map((module) => (
                <div key={module.id} className="bg-white shadow-lg p-6 rounded-xl border border-gray-100 animate-fade-in">
                  <div className="flex items-center mb-6">
                    <div className="bg-magenta/10 p-3 rounded-xl mr-4">
                      <module.icon size={24} className="text-magenta" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Moduł {module.id}: {module.title}
                      </h3>
                      <p className="text-gray-600">{module.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <h4 className="text-lg font-medium mb-5 text-gray-800 inline-flex items-center">
                      <BookOpen size={18} className="mr-2 text-magenta" />
                      Czego się nauczysz:
                    </h4>
                    <ul className="space-y-4">
                      {module.lessons.map((lesson, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 bg-magenta/20 p-1 rounded-full mt-1">
                            <Check size={14} className="text-magenta" />
                          </span>
                          <span className="text-gray-700">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseProgram;
