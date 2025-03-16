
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Cta = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 to-gray-950' 
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-500/5 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-4xl mx-auto p-10 md:p-16 text-center rounded-2xl border ${
            theme === 'dark'
              ? 'bg-gray-900/50 backdrop-blur-md border-gray-800/50'
              : 'bg-white/90 backdrop-blur-md border-gray-100 shadow-xl'
          }`}
        >
          <div className="inline-flex justify-center items-center p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-8">
            <ShieldCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowy, by rozwinąć swoje umiejętności w obszarze AI?
          </h2>
          
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Dołącz do społeczności profesjonalistów, którzy już wykorzystują moc AI w swoich projektach.
            Rozpocznij swoją przygodę z Flowise już dziś.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/offer" 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition duration-200 shadow-lg hover:shadow-blue-500/20 flex items-center justify-center"
            >
              Rozpocznij kurs
              <ArrowRight size={18} className="ml-2" />
            </Link>
            
            <div className="flex items-center">
              <ShieldCheck size={16} className="text-blue-500 mr-2" />
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                30-dniowa gwarancja zwrotu pieniędzy
              </p>
            </div>
          </div>
          
          <p className={`mt-8 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Ponad <span className="font-medium">500+</span> specjalistów ukończyło już nasz kurs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
