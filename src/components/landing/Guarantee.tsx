
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Guarantee = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-28 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-5xl mx-auto p-14 rounded-3xl ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
              : 'bg-white shadow-2xl border border-gray-100'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className={`w-32 h-32 rounded-full flex items-center justify-center ${
                theme === 'dark' ? 'bg-orange/10' : 'bg-orange/10'
              }`}>
                <ShieldCheck size={64} className="text-orange" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                30-dniowa gwarancja satysfakcji
              </h2>
              
              <p className={`text-lg mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              } leading-relaxed max-w-2xl`}>
                Wierzymy, że nasz kurs dostarczy Ci ogrom wartościowej, praktycznej wiedzy. 
                Jeśli jednak z jakiegokolwiek powodu uznasz, że nie spełnia Twoich oczekiwań, 
                masz 30 dni na rezygnację – bez żadnych pytań, bez zbędnych formalności.
                <span className="block mt-4 font-medium">Po prostu napisz do nas na <span className="text-orange">info@toknowai.pl</span>, a zwrócimy Ci 100% pieniędzy.</span>
              </p>
              
              <Link 
                to="/offer" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:translate-y-[-2px] bg-orange hover:bg-orange-dark text-white shadow-lg hover:shadow-orange/20"
              >
                Rozpocznij bez ryzyka
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;
