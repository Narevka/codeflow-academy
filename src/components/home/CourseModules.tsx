
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Brain, Check, ChevronRight, Cpu, Database, LineChart, RotateCw, Server, Settings, Sparkles, Workflow } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface Module {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  lessons: string[];
}

const CourseModules = () => {
  const { theme } = useTheme();
  const [activeModule, setActiveModule] = useState<number>(1);

  const modules: Module[] = [
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
        "Zrozumiesz różnicę między aktualizacją lokalną a na platformie Render"
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
        "Dowiesz się, jak dodawać i zarządzać komponentami w projektach"
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
        "Nauczysz się tworzyć szablony promptów i zmienne dynamiczne"
      ]
    }
  ];

  const handleModuleClick = (moduleId: number) => {
    setActiveModule(moduleId);
  };

  return (
    <section className={`py-20 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === 'dark'
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-magenta'
                : 'text-gray-900'
            }`}
          >
            Program kursu
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={theme === 'dark' ? 'text-white/70 text-lg' : 'text-gray-600 text-lg'}
          >
            Kompleksowy program nauczania krok po kroku, który przeprowadzi Cię od podstaw do 
            zaawansowanych aplikacji opartych na Flowise AI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:sticky top-24 self-start">
            <div className={`p-5 rounded-xl border ${
              theme === 'dark'
                ? 'bg-black/50 border-gray-800'
                : 'bg-gray-50 border-gray-100'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Moduły kursu</h3>
              
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center ${
                      activeModule === module.id
                        ? theme === 'dark'
                          ? 'bg-magenta/20 border-magenta/50 border'
                          : 'bg-magenta/10 border-magenta/50 border'
                        : theme === 'dark'
                          ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                          : 'bg-white hover:bg-gray-50 border border-gray-200'
                    }`}
                    onClick={() => handleModuleClick(module.id)}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                      activeModule === module.id 
                        ? 'bg-magenta' 
                        : theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                    }`}>
                      <module.icon size={20} className={activeModule === module.id ? 'text-white' : theme === 'dark' ? 'text-white/70' : 'text-gray-600'} />
                    </div>
                    <div>
                      <span className={activeModule === module.id 
                        ? theme === 'dark' ? 'text-white' : 'text-gray-900'
                        : theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                      }>Moduł {module.id}</span>
                      <p className={theme === 'dark' ? 'text-white/70 text-sm' : 'text-gray-500 text-sm'}>{module.title}</p>
                    </div>
                    <ChevronRight size={18} className={`ml-auto transition-transform ${
                      activeModule === module.id 
                        ? 'text-magenta rotate-90' 
                        : theme === 'dark' ? 'text-white/40' : 'text-gray-400'
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
                <motion.div 
                  key={module.id} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`p-6 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-black/50 border-gray-800'
                      : 'bg-white border-gray-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl mr-4 ${
                      theme === 'dark' ? 'bg-magenta/20' : 'bg-magenta/10'
                    }`}>
                      <module.icon size={24} className="text-magenta" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Moduł {module.id}: {module.title}
                      </h3>
                      <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>{module.description}</p>
                    </div>
                  </div>
                  
                  <div className={`rounded-xl p-5 border ${
                    theme === 'dark'
                      ? 'bg-white/5 border-white/10'
                      : 'bg-gray-50 border-gray-100'
                  }`}>
                    <h4 className={`text-lg font-medium mb-5 inline-flex items-center ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      <BookOpen size={18} className="mr-2 text-magenta" />
                      Czego się nauczysz:
                    </h4>
                    <ul className="space-y-4">
                      {module.lessons.map((lesson, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`mr-3 p-1 rounded-full mt-1 ${
                            theme === 'dark' ? 'bg-magenta/20' : 'bg-magenta/10'
                          }`}>
                            <Check size={14} className="text-magenta" />
                          </span>
                          <span className={theme === 'dark' ? 'text-white/80' : 'text-gray-700'}>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseModules;
