
import { Check } from "lucide-react";
import { useState } from "react";

interface Module {
  id: number;
  title: string;
  description: string;
  lessons: string[];
}

const modules: Module[] = [
  {
    id: 1,
    title: "Wprowadzenie do Flowise AI",
    description: "Poznaj podstawy platformy i pierwsze kroki w tworzeniu aplikacji AI.",
    lessons: [
      "Czym jest Flowise AI i LangChain",
      "Instalacja i konfiguracja środowiska",
      "Interfejs użytkownika - przegląd"
    ]
  },
  {
    id: 2,
    title: "Tworzenie pierwszego chatbota",
    description: "Zbuduj swojego pierwszego asystenta konwersacyjnego.",
    lessons: [
      "Wybór i konfiguracja modelu językowego",
      "Projektowanie przepływu konwersacji",
      "Testowanie i optymalizacja chatbota"
    ]
  },
  {
    id: 3,
    title: "Integracja z bazami wiedzy",
    description: "Naucz swojego bota korzystać z zewnętrznych źródeł informacji.",
    lessons: [
      "Dodawanie dokumentów i innych źródeł wiedzy",
      "Konfiguracja wektorowej bazy danych",
      "Pytania i odpowiedzi w oparciu o dokumenty"
    ]
  },
  {
    id: 4,
    title: "Zaawansowane funkcje i integracje",
    description: "Rozszerz możliwości swoich aplikacji AI.",
    lessons: [
      "Function Calling i narzędzia zewnętrzne",
      "Integracja z API i serwisami zewnętrznymi",
      "Łączenie modeli i łańcuchów"
    ]
  },
  {
    id: 5,
    title: "Publikacja i wdrażanie",
    description: "Udostępnij swoje rozwiązania użytkownikom.",
    lessons: [
      "Konfiguracja API dla aplikacji",
      "Wdrażanie na serwerze produkcyjnym",
      "Monitorowanie i analityka"
    ]
  }
];

const CourseProgram = () => {
  const [activeModule, setActiveModule] = useState<number>(1);

  return (
    <section className="py-20 bg-dark-purple relative">
      <div className="absolute inset-0 opacity-5" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Program kursu
          </h2>
          <p className="text-white/70 text-lg">
            Kurs składa się z 5 modułów tematycznych, które przeprowadzą Cię od podstaw do zaawansowanych 
            aplikacji opartych na Flowise AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="bg-card-gradient glass-card p-5">
              <h3 className="text-xl font-semibold mb-6 text-white">Moduły kursu</h3>
              <div className="space-y-3">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center ${
                      activeModule === module.id
                        ? "bg-magenta/20 border-magenta/50 border"
                        : "bg-white/5 hover:bg-white/10 border border-white/10"
                    }`}
                    onClick={() => setActiveModule(module.id)}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      activeModule === module.id ? "bg-magenta" : "bg-white/10"
                    }`}>
                      {module.id}
                    </div>
                    <span className="text-white">{module.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            {modules
              .filter((module) => module.id === activeModule)
              .map((module) => (
                <div key={module.id} className="bg-card-gradient glass-card p-6 animate-fade-in">
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    Moduł {module.id}: {module.title}
                  </h3>
                  <p className="text-white/70 mb-6 text-lg">{module.description}</p>
                  
                  <h4 className="text-lg font-medium mb-4 text-white">Czego się nauczysz:</h4>
                  <ul className="space-y-3">
                    {module.lessons.map((lesson, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3 bg-magenta/20 p-1 rounded-full">
                          <Check size={16} className="text-magenta" />
                        </span>
                        <span className="text-white/80">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseProgram;
