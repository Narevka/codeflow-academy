
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Guarantee = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-20 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-4xl mx-auto p-10 rounded-xl border ${
            theme === 'dark'
              ? 'bg-gray-900/50 border-gray-800'
              : 'bg-orange-soft/10 border-orange/20'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
                theme === 'dark' ? 'bg-orange/20' : 'bg-orange/10'
              }`}>
                <ShieldCheck size={48} className="text-orange" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                30-dniowa gwarancja satysfakcji
              </h2>
              
              <p className={`text-lg mb-6 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                Wierzymy, że nasz kurs dostarczy Ci ogrom wartościowej, praktycznej wiedzy. 
                Jednak jeśli z jakiegoś powodu uznasz, że nie spełnia Twoich oczekiwań, 
                masz 30 dni na rezygnację. Wystarczy, że napiszesz na info@toknowai.pl, 
                a zwrócimy Ci pieniądze — bez zadawania zbędnych pytań i bez ryzyka!
              </p>
              
              <Link 
                to="/offer" 
                className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-transform hover:translate-y-[-2px] ${
                  'bg-orange hover:bg-orange-dark text-white shadow-lg hover:shadow-orange/20'
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
