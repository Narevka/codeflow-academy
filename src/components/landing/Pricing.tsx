
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const Pricing = () => {
  const { theme } = useTheme();
  
  const features = [
    "Pełny dostęp do wszystkich 8 modułów kursu",
    "Ponad 40 lekcji wideo z praktycznymi przykładami",
    "Pliki źródłowe i materiały dodatkowe",
    "Dostęp do grupy wsparcia i forum kursantów",
    "Certyfikat ukończenia kursu",
    "Dożywotni dostęp do aktualizacji",
    "30-dniowa gwarancja zwrotu pieniędzy"
  ];

  return (
    <section className={`py-20 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Prosta i przejrzysta <span className="text-orange">oferta</span>
          </h2>
          
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Jedno kompletne rozwiązanie, bez dodatkowych opłat i niespodzianek.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className={`rounded-xl overflow-hidden border ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className={`p-8 ${
              theme === 'dark' ? 'bg-gray-900/80' : 'bg-white'
            }`}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                <div>
                  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${
                    theme === 'dark' ? 'bg-orange/20 text-orange' : 'bg-orange/20 text-orange-dark'
                  }`}>
                    Polecany
                  </span>
                  <h3 className="text-2xl font-bold mb-2">Kompletny Kurs Flowise AI</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Pełen dostęp do wszystkich materiałów kursu
                  </p>
                </div>
                
                <div className="mt-6 md:mt-0 text-center md:text-right">
                  <div className="flex items-center justify-end">
                    <span className={`text-sm line-through mr-2 ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      1999 zł
                    </span>
                    <span className="text-3xl font-bold">999 zł</span>
                  </div>
                  <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Jednorazowa płatność, dożywotni dostęp
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-orange mt-0.5 mr-3 flex-shrink-0" />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Link 
                  to="/offer" 
                  className="inline-block w-full md:w-auto px-8 py-3 rounded-md bg-orange hover:bg-orange-dark text-white font-medium transition duration-200 shadow-lg"
                >
                  Rozpocznij kurs teraz
                </Link>
                
                <p className={`mt-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Bezpieczne płatności przez <span className="font-medium">PayU</span> lub <span className="font-medium">PayPal</span>
                </p>
              </div>
            </div>
            
            <div className={`p-4 text-center text-sm ${
              theme === 'dark' ? 'bg-gray-950 border-t border-gray-800 text-gray-400' : 'bg-gray-50 border-t border-gray-200 text-gray-500'
            }`}>
              Potrzebujesz więcej informacji? Skontaktuj się z nami: <span className="text-orange">info@toknowai.pl</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
