
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const GuaranteeSection = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-20 relative ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        {theme === 'dark' && <div className="absolute inset-0 bg-network-pattern bg-cover bg-fixed" />}
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-3xl mx-auto p-8 text-center rounded-xl border ${
            theme === 'dark'
              ? 'bg-black/30 backdrop-blur-sm border-gray-800'
              : 'bg-gray-50 border-gray-100 shadow-md'
          }`}
        >
          <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
            theme === 'dark' ? 'bg-orange/20' : 'bg-orange/10'
          }`}>
            <Check size={32} className="text-orange" />
          </div>
          
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            30-dniowa gwarancja satysfakcji
          </h2>
          
          <p className={`text-lg mb-6 ${
            theme === 'dark' ? 'text-white/70' : 'text-gray-600'
          }`}>
            Wierzymy, że nasz kurs dostarczy Ci ogrom wartościowej, praktycznej wiedzy. Jednak jeśli z jakiegoś powodu uznasz, że nie spełnia Twoich oczekiwań, masz 30 dni na rezygnację. Wystarczy, że napiszesz na info@toknowai.pl, a zwrócimy Ci pieniądze — bez zadawania zbędnych pytań i bez ryzyka!
          </p>
          
          <Link 
            to="/offer" 
            className={`inline-flex items-center justify-center px-6 py-3 rounded-xl transition-all transform hover:scale-105 ${
              theme === 'dark'
                ? 'bg-orange hover:bg-orange-dark text-white'
                : 'bg-orange hover:bg-orange-dark text-white'
            }`}
          >
            Rozpocznij swoją przygodę z AI już dziś!
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
