
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Guarantee = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-24 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-4xl mx-auto p-10 rounded-2xl border ${
            theme === 'dark'
              ? 'bg-gray-900/50 border-gray-800/50'
              : 'bg-white border-gray-100 shadow-lg'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
                theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-50'
              }`}>
                <ShieldCheck size={48} className="text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4`}>
                30-dniowa gwarancja satysfakcji
              </h2>
              
              <p className={`text-lg mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Wierzymy, że nasz kurs dostarczy Ci ogrom wartościowej, praktycznej wiedzy. 
                Jednak jeśli z jakiegoś powodu uznasz, że nie spełnia Twoich oczekiwań, 
                masz 30 dni na rezygnację. Wystarczy, że napiszesz na info@toknowai.pl, 
                a zwrócimy Ci pieniądze — bez zadawania zbędnych pytań i bez ryzyka!
              </p>
              
              <Link 
                to="/offer" 
                className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-transform hover:translate-y-[-2px] ${
                  'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/20'
                }`}
              >
                Rozpocznij swoją przygodę z AI bez ryzyka!
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;
