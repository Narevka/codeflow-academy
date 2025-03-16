
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const CtaSection = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-purple-900/30 to-black' 
        : 'bg-gradient-to-br from-orange-soft to-white'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full filter blur-3xl animate-pulse-slow ${
          theme === 'dark'
            ? 'bg-purple-900/20'
            : 'bg-orange-light/30'
        }`} />
        
        <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full filter blur-3xl animate-pulse-slow animate-delay-200 ${
          theme === 'dark'
            ? 'bg-orange/20'
            : 'bg-orange/10'
        }`} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-4xl mx-auto p-10 md:p-14 text-center rounded-xl border ${
            theme === 'dark'
              ? 'backdrop-blur-xl bg-black/50 border-gray-800'
              : 'bg-white border-gray-200 shadow-xl'
          }`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            theme === 'dark'
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-light to-orange'
              : 'text-gray-900'
          }`}>
            Gotowy, by rozwinąć swoje umiejętności AI?
          </h2>
          
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-600'
          }`}>
            Dołącz do tysięcy uczniów, którzy już tworzą innowacyjne aplikacje oparte na sztucznej inteligencji. 
            Bez kodowania, bez stresu - z ToKnowAI!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/offer" 
              className={`w-full sm:w-auto flex items-center justify-center group px-8 py-4 rounded-xl transition-all transform hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-orange hover:bg-orange-dark text-white'
                  : 'bg-orange hover:bg-orange-dark text-white'
              }`}
            >
              Zapisz się na kurs
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <p className={theme === 'dark' ? 'text-white/50 mt-4 sm:mt-0' : 'text-gray-500 mt-4 sm:mt-0'}>
              30-dniowa gwarancja zwrotu pieniędzy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
