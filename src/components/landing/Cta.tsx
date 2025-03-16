
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
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
        <div className="absolute top-0 right-0 w-2/5 h-2/5 bg-orange/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-3/5 h-3/5 bg-purple/5 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-5xl mx-auto p-16 text-center rounded-3xl border ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-gray-800/70 to-gray-900/90 backdrop-blur-lg border-gray-700'
              : 'bg-white/95 backdrop-blur-lg border-gray-100 shadow-2xl'
          }`}
        >
          <div className="inline-flex justify-center items-center p-4 rounded-2xl bg-orange/10 mb-8">
            <CheckCircle2 className="h-9 w-9 text-orange" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight max-w-3xl mx-auto">
            Gotowy, by wykorzystać pełen potencjał sztucznej inteligencji?
          </h2>
          
          <p className={`text-xl mb-12 max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          } leading-relaxed`}>
            Dołącz do społeczności innowatorów, którzy już wykorzystują moc AI w swoich projektach.
            Rozpocznij swoją transformację cyfrową już dziś.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link 
              to="/offer" 
              className="w-full sm:w-auto bg-orange hover:bg-orange-dark text-white font-medium px-10 py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange/30 hover:translate-y-[-2px] flex items-center justify-center group"
            >
              Rozpocznij kurs
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <div className="flex items-center">
              <ShieldCheck size={18} className="text-orange mr-2" />
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} font-medium`}>
                30-dniowa gwarancja zwrotu pieniędzy
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Ponad <span className="font-semibold">500+</span> specjalistów ukończyło już nasz kurs i wdrożyło własne rozwiązania AI
            </p>
            
            <div className="flex justify-center mt-4 space-x-8">
              <div className={`px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">OCENA KURSU</p>
                <p className="text-2xl font-bold">4.9/5</p>
              </div>
              
              <div className={`px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">PROJEKTÓW WDROŻONYCH</p>
                <p className="text-2xl font-bold">1,200+</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
