
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`relative min-h-[90vh] flex items-center pt-16 pb-24 overflow-hidden ${
      theme === 'dark' ? 'bg-black' : 'bg-gradient-to-b from-orange-soft/30 to-white'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {theme === 'dark' && (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange/10 to-transparent rounded-full filter blur-3xl" />
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple/5 rounded-full filter blur-2xl animate-pulse-slow" />
          </>
        )}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Hero text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              theme === 'dark'
                ? 'bg-orange/20 text-orange'
                : 'bg-orange-soft text-orange-dark'
            }`}>
              Zmień swoją karierę dzięki AI
            </span>
            
            <h1 className={`text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight ${
              theme === 'dark'
                ? 'text-white'
                : 'text-gray-900'
            }`}>
              Twórz <span className="text-orange">zaawansowane aplikacje AI</span> bez kodowania
            </h1>
            
            <p className={`text-xl mb-8 ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-700'
            }`}>
              Opanuj Flowise AI i LangChain w ciągu kilku godzin. 
              Buduj inteligentne chatboty, asystentów i automatyzacje 
              z łatwością, nawet bez doświadczenia technicznego.
            </p>
            
            <div className="mb-10">
              {[
                "Praktyczne projekty, które możesz wdrożyć natychmiast",
                "Nauka przez działanie, bez skomplikowanej teorii",
                "Zdobądź umiejętności przyszłości w przystępny sposób"
              ].map((item, index) => (
                <div key={index} className="flex items-start mb-3">
                  <CheckCircle2 className="w-5 h-5 text-orange mt-0.5 mr-2 flex-shrink-0" />
                  <p className={theme === 'dark' ? 'text-white/90' : 'text-gray-700'}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                to="/offer" 
                className={`w-full sm:w-auto px-8 py-4 rounded-lg transition-all transform hover:translate-y-[-2px] flex items-center justify-center font-semibold ${
                  'bg-orange hover:bg-orange-dark text-white shadow-lg hover:shadow-orange/20'
                }`}
              >
                Rozpocznij kurs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                to="/demo-lesson" 
                className={`w-full sm:w-auto px-8 py-4 rounded-lg transition-all flex items-center justify-center font-medium border ${
                  theme === 'dark'
                    ? 'bg-white/10 hover:bg-white/15 text-white border-white/20'
                    : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200'
                }`}
              >
                Zobacz bezpłatną lekcję
              </Link>
            </div>
          </motion.div>
          
          {/* Right column: Image or video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className={`absolute -inset-0.5 rounded-2xl blur-sm ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-orange/50 to-purple/50'
                : 'bg-gradient-to-r from-orange/30 to-purple/30'
            }`}></div>
            <div className={`relative rounded-2xl overflow-hidden ${
              theme === 'dark'
                ? 'bg-gray-900 border border-gray-800'
                : 'bg-white border border-gray-200 shadow-xl'
            }`}>
              <img 
                src="/public/lovable-uploads/47b7ddeb-1880-457f-a354-85dfaae75dc0.png" 
                alt="AI aplikacja interfejs"
                className="w-full h-auto rounded-xl" 
              />
              <div className={`absolute bottom-0 left-0 right-0 p-4 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-t from-black to-transparent'
                  : 'bg-gradient-to-t from-white to-transparent'
              }`}>
                <div className={`text-center py-3 px-4 rounded-lg ${
                  theme === 'dark'
                    ? 'bg-black/80 text-white'
                    : 'bg-white/80 text-gray-900'
                }`}>
                  <span className="font-medium">Bez kodowania. Bez stresu. <span className="text-orange">Z Flowise AI.</span></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Trust badges */}
        <div className="mt-20 text-center">
          <p className={`mb-6 ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
            Zaufali nam:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`h-12 w-24 rounded-md animate-pulse ${
                theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'
              }`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
