
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Cta = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-24 relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gray-900' 
        : 'bg-gray-50'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {theme === 'dark' && (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange/5 to-transparent rounded-full filter blur-3xl" />
          </>
        )}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-4xl mx-auto p-8 md:p-12 text-center rounded-xl ${
            theme === 'dark'
              ? 'bg-gray-950 border border-gray-800'
              : 'bg-white border border-gray-200 shadow-xl'
          }`}
        >
          <div className="mb-8 inline-flex justify-center items-center p-3 rounded-full bg-orange/10">
            <ShieldCheck className="h-8 w-8 text-orange" />
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
              className="w-full sm:w-auto bg-orange hover:bg-orange-dark text-white font-medium px-8 py-4 rounded-lg transition duration-200 shadow-lg flex items-center justify-center"
            >
              Rozpocznij kurs
              <ArrowRight size={18} className="ml-2" />
            </Link>
            
            <div className="flex items-center">
              <ShieldCheck size={16} className="text-orange mr-2" />
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
