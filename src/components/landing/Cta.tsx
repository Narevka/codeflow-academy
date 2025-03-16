
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Cta = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-20 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gray-900' 
        : 'bg-orange-soft/30'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {theme === 'dark' && (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange/10 to-transparent rounded-full filter blur-3xl" />
          </>
        )}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-4xl mx-auto p-8 md:p-12 text-center rounded-xl border ${
            theme === 'dark'
              ? 'bg-black/50 backdrop-blur-sm border-gray-800'
              : 'bg-white border-gray-200 shadow-xl'
          }`}
        >
          <div className="mb-8 flex justify-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Star key={index} className="h-6 w-6 fill-orange text-orange" />
              ))}
            </div>
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            theme === 'dark'
              ? 'text-white'
              : 'text-gray-900'
          }`}>
            Gotowy, by rozwinąć swoje umiejętności AI?
          </h2>
          
          <p className={`text-lg mb-10 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-600'
          }`}>
            Dołącz do tysięcy uczniów, którzy już tworzą innowacyjne aplikacje oparte na sztucznej inteligencji. 
            Bez kodowania, bez stresu - z ToKnowAI!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/offer" 
              className="w-full sm:w-auto bg-orange hover:bg-orange-dark text-white font-medium px-8 py-4 rounded-lg transition-all transform hover:translate-y-[-2px] flex items-center justify-center shadow-lg hover:shadow-orange/20"
            >
              Zapisz się na kurs
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <p className={theme === 'dark' ? 'text-white/50' : 'text-gray-500'}>
              30-dniowa gwarancja zwrotu pieniędzy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
