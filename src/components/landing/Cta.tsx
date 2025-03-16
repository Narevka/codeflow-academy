
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Cta = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-32 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 to-gray-950' 
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-2/5 h-2/5 bg-indigo-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-3/5 h-3/5 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-5xl mx-auto p-12 md:p-16 text-center rounded-3xl border ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/70 backdrop-blur-md border-gray-700/50'
              : 'bg-white/95 backdrop-blur-md border-gray-100/60 shadow-2xl'
          }`}
        >
          <div className="inline-flex justify-center items-center p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 mb-8">
            <ShieldCheck className="h-9 w-9 text-indigo-600 dark:text-indigo-400" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Gotowy, by rozwinąć swoje umiejętności w obszarze AI?
          </h2>
          
          <p className={`text-xl mb-10 max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          } leading-relaxed`}>
            Dołącz do społeczności profesjonalistów, którzy już wykorzystują moc AI w swoich projektach.
            Rozpocznij swoją przygodę z Flowise już dziś.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link 
              to="/offer" 
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-10 py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center group"
            >
              Rozpocznij kurs
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <div className="flex items-center">
              <ShieldCheck size={18} className="text-indigo-500 mr-2" />
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} font-medium`}>
                30-dniowa gwarancja zwrotu pieniędzy
              </p>
            </div>
          </div>
          
          <p className={`mt-10 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Ponad <span className="font-semibold">500+</span> specjalistów ukończyło już nasz kurs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
