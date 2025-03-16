
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`relative py-28 overflow-hidden ${
      theme === 'dark' ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      {/* Background gradient elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-orange/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple/5 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 z-10"
          >
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full text-sm font-medium bg-orange/10 text-orange border border-orange/20">
              <span className="flex h-2 w-2 rounded-full bg-orange mr-2"></span>
              Kurs Online
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Twórz zaawansowane <span className="text-orange">aplikacje AI</span> bez umiejętności programowania
            </h1>
            
            <p className={`text-xl mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Odkryj jak projektować i wdrażać inteligentne systemy 
              AI za pomocą Flowise i LangChain - bez pisania 
              ani jednej linijki kodu.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Gotowe projekty do natychmiastowego wdrożenia",
                "Nauka przez praktykę z konkretnymi rezultatami",
                "Wsparcie ekspertów przez 12 miesięcy po zakupie"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-orange mt-1 mr-3 flex-shrink-0" />
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link 
                to="/offer" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-300 bg-orange hover:bg-orange-dark text-white shadow-lg hover:shadow-orange/20 hover:translate-y-[-2px]"
              >
                Rozpocznij kurs teraz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                to="/demo-lesson" 
                className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 font-medium transition-all duration-300 hover:translate-y-[-2px] ${
                  theme === 'dark'
                    ? 'border-gray-700 hover:bg-gray-800 text-white'
                    : 'border-gray-200 hover:border-orange/30 hover:bg-orange/5 text-gray-700'
                }`}
              >
                <Play size={18} className="mr-2 text-orange" />
                Obejrzyj demo
              </Link>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden">
                    <div className={`w-full h-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                  </div>
                ))}
              </div>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Dołącz do <span className="font-semibold">500+</span> profesjonalistów, którzy już tworzą z AI
              </p>
            </div>
          </motion.div>
          
          {/* Image column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className={`rounded-xl overflow-hidden border-2 ${
              theme === 'dark' ? 'border-gray-800 shadow-xl shadow-orange/5' : 'border-gray-100 shadow-xl shadow-gray-200/70'
            }`}>
              <img 
                src="/lovable-uploads/47b7ddeb-1880-457f-a354-85dfaae75dc0.png" 
                alt="Flowise AI Interface"
                className="w-full h-auto" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-30"></div>
            </div>
            
            {/* Floating element */}
            <div className={`absolute -bottom-5 -right-5 md:bottom-10 md:right-10 p-4 rounded-lg ${
              theme === 'dark' 
                ? 'bg-gray-800/90 border border-gray-700 shadow-lg backdrop-blur-sm' 
                : 'bg-white/90 border border-gray-200 shadow-lg backdrop-blur-sm'
            }`}>
              <div className="flex items-center">
                <div className="mr-3 w-10 h-10 rounded-full flex items-center justify-center bg-orange/10">
                  <CheckCircle2 className="h-5 w-5 text-orange" />
                </div>
                <div>
                  <p className="text-sm font-medium">Bez kodowania</p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Poziom początkujący do zaawansowanego
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Trust logos */}
        <div className="mt-24 pt-10 border-t border-gray-200 dark:border-gray-800">
          <p className={`text-center mb-8 text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            ZAUFALI NAM EKSPERCI Z BRANŻY:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`h-8 w-28 rounded ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
