
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Check, ChevronRight, MessageSquare, PenTool, Workflow } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Program = () => {
  const { theme } = useTheme();
  const [activeModule, setActiveModule] = useState(1);
  
  const modules = [
    {
      id: 1,
      title: "Wprowadzenie do AI i Flowise",
      icon: BookOpen,
      description: "Poznaj podstawy sztucznej inteligencji i platformy Flowise.",
      lessons: [
        "Czym są duże modele językowe (LLM) i jak działają",
        "Podstawy pracy z Flowise, od instalacji po pierwsze kroki",
        "Różnice między GPT-3.5 a GPT-4 oraz ich zastosowania",
        "Jak efektywnie wybierać modele do różnych projektów"
      ]
    },
    {
      id: 2,
      title: "Budowa pierwszej aplikacji",
      icon: Workflow,
      description: "Stwórz swoją pierwszą aplikację AI krok po kroku.",
      lessons: [
        "Tworzenie pierwszego przepływu opartego na modelach OpenAI",
        "Dodawanie komponentów: Łańcuchy Konwersacyjne i Pamięć",
        "Tworzenie szablonów promptów i zmiennych dynamicznych",
        "Testowanie rozwiązań w praktycznym środowisku"
      ]
    },
    {
      id: 3,
      title: "Zaawansowane techniki",
      icon: PenTool,
      description: "Opanuj zaawansowane funkcje i integracje.",
      lessons: [
        "Moderacja treści i integracja z Redis",
        "Function Calling i Agenci do realizacji złożonych zadań",
        "Techniki skalowania aplikacji AI dla większej liczby użytkowników",
        "Integracja zaawansowanych API i narzędzi analitycznych"
      ]
    }
  ];

  return (
    <section className={`py-20 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
              theme === 'dark'
                ? 'bg-orange/20 text-orange'
                : 'bg-orange-soft text-orange-dark'
            }`}
          >
            Program kursu
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === 'dark'
                ? 'text-white'
                : 'text-gray-900'
            }`}
          >
            Kompleksowy program nauczania
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}
          >
            Krok po kroku przeprowadzimy Cię od podstaw do zaawansowanych 
            aplikacji opartych na sztucznej inteligencji.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Module selector */}
          <div className="lg:col-span-4">
            <div className={`rounded-xl border ${
              theme === 'dark'
                ? 'bg-black/50 border-gray-800'
                : 'bg-white border-gray-200 shadow-sm'
            }`}>
              <h3 className={`p-5 border-b ${
                theme === 'dark' ? 'text-white border-gray-800' : 'text-gray-900 border-gray-200'
              } font-semibold`}>
                Wybierz moduł
              </h3>
              
              <div className="p-3">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`w-full text-left p-4 mb-2 rounded-lg transition-all flex items-center ${
                      activeModule === module.id
                        ? theme === 'dark'
                          ? 'bg-orange/20 text-white'
                          : 'bg-orange-soft text-orange-dark'
                        : theme === 'dark'
                          ? 'bg-gray-900 text-white/80 hover:bg-gray-800'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                      activeModule === module.id
                        ? theme === 'dark' ? 'bg-orange/30' : 'bg-orange/30'
                        : theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    }`}>
                      <module.icon size={20} className={`${
                        activeModule === module.id ? 'text-orange' : theme === 'dark' ? 'text-white/70' : 'text-gray-500'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium">Moduł {module.id}</p>
                      <p className={`text-sm ${
                        activeModule === module.id
                          ? theme === 'dark' ? 'text-white/80' : 'text-orange-dark/80'
                          : theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                      }`}>
                        {module.title}
                      </p>
                    </div>
                    <ChevronRight size={18} className={`ml-auto transition-transform ${
                      activeModule === module.id ? 'text-orange rotate-90' : 'text-gray-400'
                    }`} />
                  </button>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`mt-6 p-5 rounded-xl border ${
                theme === 'dark'
                  ? 'bg-black/50 border-gray-800'
                  : 'bg-orange-soft/30 border-orange/20'
              }`}
            >
              <div className="flex items-start">
                <MessageSquare className={`mr-3 flex-shrink-0 mt-1 ${
                  theme === 'dark' ? 'text-orange' : 'text-orange-dark'
                }`} />
                <p className={theme === 'dark' ? 'text-white/80' : 'text-gray-700'}>
                  <span className="font-medium">Wiesz, że...</span> program kursu jest regularnie aktualizowany o najnowsze funkcje Flowise i LangChain!
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Module content */}
          <div className="lg:col-span-8">
            {modules
              .filter((module) => module.id === activeModule)
              .map((module) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-black/50 border-gray-800'
                      : 'bg-white border-gray-200 shadow'
                  }`}
                >
                  <div className="p-6 border-b border-gray-800">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-xl mr-4 ${
                        theme === 'dark' ? 'bg-orange/20' : 'bg-orange-soft'
                      }`}>
                        <module.icon size={24} className="text-orange" />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          Moduł {module.id}: {module.title}
                        </h3>
                        <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className={`text-lg font-medium mb-5 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Czego się nauczysz:
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {module.lessons.map((lesson, index) => (
                        <div 
                          key={index}
                          className={`p-4 rounded-lg border ${
                            theme === 'dark'
                              ? 'bg-gray-900/70 border-gray-800'
                              : 'bg-gray-50 border-gray-200'
                          }`}
                        >
                          <div className="flex items-start">
                            <div className={`p-1 rounded-full mr-3 mt-1 ${
                              theme === 'dark' ? 'bg-orange/20' : 'bg-orange/20'
                            }`}>
                              <Check size={14} className="text-orange" />
                            </div>
                            <p className={theme === 'dark' ? 'text-white/80' : 'text-gray-700'}>
                              {lesson}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Banner at the bottom */}
                    <div className={`mt-8 p-4 rounded-lg ${
                      theme === 'dark'
                        ? 'bg-orange/10 border border-orange/30'
                        : 'bg-orange-soft/50 border border-orange/20'
                    }`}>
                      <p className={`flex items-center ${
                        theme === 'dark' ? 'text-white/90' : 'text-gray-800'
                      }`}>
                        <span className="font-medium">9 kompletnych modułów</span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span>60+ praktycznych lekcji</span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span>Pełny dostęp na zawsze</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
