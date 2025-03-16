
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Guarantee = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-24 ${
      theme === 'dark' ? 'bg-gray-900/80' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-4xl mx-auto p-12 rounded-2xl ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/70 border border-gray-700/50'
              : 'bg-white shadow-xl border border-gray-100/60'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <div className={`w-28 h-28 rounded-2xl flex items-center justify-center ${
                theme === 'dark' ? 'bg-indigo-900/20' : 'bg-indigo-50'
              }`}>
                <ShieldCheck size={56} className="text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-5">
                30-dniowa gwarancja satysfakcji
              </h2>
              
              <p className={`text-lg mb-7 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              } leading-relaxed`}>
                Wierzymy, że nasz kurs dostarczy Ci ogrom wartościowej, praktycznej wiedzy. 
                Jednak jeśli z jakiegoś powodu uznasz, że nie spełnia Twoich oczekiwań, 
                masz 30 dni na rezygnację. Wystarczy, że napiszesz na info@toknowai.pl, 
                a zwrócimy Ci pieniądze — bez zadawania zbędnych pytań i bez ryzyka!
              </p>
              
              <Link 
                to="/offer" 
                className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:translate-y-[-2px] ${
                  'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-indigo-500/20'
                }`}
              >
                Rozpocznij swoją przygodę z AI bez ryzyka
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;
