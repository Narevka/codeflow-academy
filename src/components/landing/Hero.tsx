
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`relative py-20 overflow-hidden ${
      theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 xl:col-span-5"
          >
            <div className={`inline-flex items-center px-4 py-2 mb-6 rounded-full text-sm font-medium ${
              theme === 'dark' ? 'bg-gray-800 text-orange' : 'bg-gray-100 text-orange'
            }`}>
              <span className="flex h-2 w-2 rounded-full bg-orange mr-2"></span>
              Kurs online
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Twórz zaawansowane <span className="text-orange">aplikacje AI</span> bez umiejętności programowania
            </h1>
            
            <p className={`text-xl mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Kompleksowy kurs, który nauczy Cię projektować i wdrażać 
              inteligentne aplikacje za pomocą Flowise i LangChain - 
              bez pisania ani jednej linijki kodu.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Praktyczne projekty do natychmiastowego wdrożenia",
                "Nauka przez działanie, bez skomplikowanej teorii",
                "Wsparcie merytoryczne przez 12 miesięcy"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-orange mt-1 mr-3 flex-shrink-0" />
                  <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                to="/offer" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition duration-200 bg-orange hover:bg-orange-dark text-white shadow-lg"
              >
                Rozpocznij kurs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                to="/demo-lesson" 
                className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md border font-medium transition duration-200 ${
                  theme === 'dark'
                    ? 'border-gray-700 hover:bg-gray-800 text-white'
                    : 'border-gray-300 hover:bg-gray-100 text-gray-800'
                }`}
              >
                Zobacz bezpłatną lekcję
              </Link>
            </div>
          </motion.div>
          
          {/* Image column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 xl:col-span-7 relative"
          >
            <div className={`rounded-xl overflow-hidden border ${
              theme === 'dark' ? 'border-gray-800' : 'border-gray-200 shadow-xl'
            }`}>
              <img 
                src="/public/lovable-uploads/47b7ddeb-1880-457f-a354-85dfaae75dc0.png" 
                alt="Flowise AI Interface"
                className="w-full h-auto" 
              />
              <div className={`absolute bottom-0 left-0 right-0 p-4 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-t from-gray-950 to-transparent'
                  : 'bg-gradient-to-t from-gray-50 to-transparent'
              }`}>
                <div className={`text-center py-2 px-4 rounded-lg mx-auto max-w-md ${
                  theme === 'dark'
                    ? 'bg-gray-900/80 text-white'
                    : 'bg-white/90 text-gray-900 shadow-md'
                }`}>
                  <span className="font-medium">Wizualny interfejs. Bez kodowania. <span className="text-orange">100% rezultatów.</span></span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/3 -right-16 w-64 h-64 rounded-full bg-orange/5 filter blur-3xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-16 w-64 h-64 rounded-full bg-purple/5 filter blur-3xl"></div>
          </motion.div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
          <p className={`text-center mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Zaufali nam eksperci z branży:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`h-8 w-28 rounded ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              }`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
