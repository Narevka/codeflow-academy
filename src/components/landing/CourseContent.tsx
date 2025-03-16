
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ChevronDown, ChevronUp, Play } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface ModuleProps {
  number: number;
  title: string;
  lessons: string[];
  isOpen: boolean;
  toggleOpen: () => void;
}

const Module = ({ number, title, lessons, isOpen, toggleOpen }: ModuleProps) => {
  const { theme } = useTheme();
  
  return (
    <div className={`mb-4 rounded-lg overflow-hidden border ${
      theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
    }`}>
      <button 
        onClick={toggleOpen}
        className={`w-full flex items-center justify-between p-4 text-left font-medium transition ${
          isOpen 
            ? theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100' 
            : theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <div className="flex items-center">
          <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full mr-3 ${
            theme === 'dark' ? 'bg-gray-700 text-orange' : 'bg-orange/10 text-orange'
          }`}>
            {number}
          </span>
          <span>{title}</span>
        </div>
        {isOpen ? 
          <ChevronUp size={20} className="text-gray-400" /> : 
          <ChevronDown size={20} className="text-gray-400" />
        }
      </button>
      
      {isOpen && (
        <div className={`p-4 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-white'}`}>
          <ul className="space-y-3">
            {lessons.map((lesson, idx) => (
              <li key={idx} className="flex items-start">
                <Play size={16} className="mt-1 mr-2 text-orange flex-shrink-0" />
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  {lesson}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const CourseContent = () => {
  const { theme } = useTheme();
  const [openModule, setOpenModule] = useState<number | null>(1);
  
  const modules = [
    {
      number: 1,
      title: "Fundamenty Flowise AI i modeli językowych",
      lessons: [
        "Wprowadzenie do AI i interfejsu Flowise",
        "Konfiguracja środowiska pracy",
        "Tworzenie pierwszego prostego flow",
        "Podstawy modeli językowych i ich parametrów"
      ]
    },
    {
      number: 2,
      title: "Budowanie inteligentnych chatbotów",
      lessons: [
        "Projektowanie konwersacyjnych przepływów",
        "Implementacja pamięci długoterminowej",
        "Integracja z zewnętrznymi źródłami wiedzy",
        "Testowanie i debugowanie chatbotów"
      ]
    },
    {
      number: 3,
      title: "Zaawansowane techniki promptów",
      lessons: [
        "Sztuka efektywnego promptowania",
        "Łańcuchy promptów i rozumowanie krok po kroku",
        "Techniki redukcji halucynacji AI",
        "Optymalizacja kosztów poprzez lepsze prompty"
      ]
    },
    {
      number: 4,
      title: "Integracje i wdrażanie rozwiązań",
      lessons: [
        "Łączenie Flowise z zewnętrznymi API",
        "Tworzenie webhooków",
        "Techniki hostingu i deployment",
        "Monitorowanie wydajności i optymalizacja"
      ]
    }
  ];

  return (
    <section className={`py-20 ${
      theme === 'dark' ? 'bg-gray-950' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12"
          >
            <h2 className="text-3xl font-bold mb-6">
              Program kursu <span className="text-orange">zaprojektowany</span> przez ekspertów
            </h2>
            
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Nasz kurs zawiera 8 modułów, obejmujących wszystkie aspekty tworzenia aplikacji AI z Flowise - od podstaw do zaawansowanych wdrożeń.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "4 główne moduły, 24 szczegółowe lekcje",
                "8+ godzin materiału wideo wysokiej jakości",
                "Praktyczne projekty do samodzielnej realizacji",
                "Dodatkowe materiały i zasoby do pobrania",
                "Certyfikat ukończenia kursu"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={18} className="mt-1 mr-3 text-orange flex-shrink-0" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            <div className={`p-4 rounded-lg ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
            }`}>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                    theme === 'dark' ? 'bg-gray-800 text-orange' : 'bg-orange/10 text-orange'
                  }`}>
                    <Play size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Regularne aktualizacje</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Dożywotni dostęp do kursu i wszystkich przyszłych aktualizacji
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-7/12"
          >
            {modules.map((module) => (
              <Module
                key={module.number}
                number={module.number}
                title={module.title}
                lessons={module.lessons}
                isOpen={openModule === module.number}
                toggleOpen={() => setOpenModule(openModule === module.number ? null : module.number)}
              />
            ))}
            
            <div className={`p-4 mt-6 rounded-lg text-center ${
              theme === 'dark' ? 'bg-gray-900/50 border border-gray-800' : 'bg-gray-50 border border-gray-200'
            }`}>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                To tylko fragment pełnego programu. Kurs zawiera łącznie <span className="font-medium">8 modułów i ponad 40 lekcji</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
