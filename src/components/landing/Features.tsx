
import { motion } from "framer-motion";
import { Brain, Code, Database, Layers, Lightbulb, Target, UserPlus, Zap } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Feature = ({ icon, title, description, index }: FeatureProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-xl border transition-all duration-300 hover:border-orange/50 ${
        theme === 'dark'
          ? 'bg-gray-900/50 border-gray-800'
          : 'bg-white border-gray-200 shadow-sm hover:shadow'
      }`}
    >
      <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${
        theme === 'dark' ? 'bg-orange/20' : 'bg-orange-soft'
      }`}>
        {icon}
      </div>
      <h3 className={`text-xl font-semibold mb-3 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>{title}</h3>
      <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
        {description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const { theme } = useTheme();
  
  const features = [
    {
      icon: <Target className="w-6 h-6 text-orange" />,
      title: "Praktyczne podejście",
      description: "Kurs koncentruje się na praktycznych umiejętnościach, które możesz natychmiast zastosować w swoich projektach."
    },
    {
      icon: <Zap className="w-6 h-6 text-orange" />,
      title: "Szybkie efekty",
      description: "Już po pierwszych lekcjach będziesz w stanie tworzyć proste aplikacje wykorzystujące modele językowe."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-orange" />,
      title: "Innowacyjne rozwiązania",
      description: "Poznaj najnowsze trendy i możliwości wykorzystania AI w rozwiązywaniu rzeczywistych problemów."
    },
    {
      icon: <Brain className="w-6 h-6 text-orange" />,
      title: "Poznaj potencjał AI",
      description: "Zrozum, jak działają duże modele językowe i jak wykorzystać ich potencjał w swoich projektach."
    },
    {
      icon: <Layers className="w-6 h-6 text-orange" />,
      title: "Automatyzacja procesów",
      description: "Naucz się automatyzować zadania i procesy wykorzystując możliwości sztucznej inteligencji."
    },
    {
      icon: <Code className="w-6 h-6 text-orange" />,
      title: "Bez programowania",
      description: "Twórz zaawansowane rozwiązania bez konieczności pisania kodu - wszystko poprzez intuicyjny interfejs."
    },
    {
      icon: <Database className="w-6 h-6 text-orange" />,
      title: "Integracja z danymi",
      description: "Dowiesz się, jak łączyć swoje aplikacje AI z zewnętrznymi bazami danych i źródłami informacji."
    },
    {
      icon: <UserPlus className="w-6 h-6 text-orange" />,
      title: "Dla każdego poziomu",
      description: "Kurs został zaprojektowany tak, aby był przystępny dla początkujących, ale wartościowy dla profesjonalistów."
    }
  ];

  return (
    <section className={`py-20 ${
      theme === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
              theme === 'dark'
                ? 'bg-orange/20 text-orange'
                : 'bg-orange-soft text-orange-dark'
            }`}
          >
            Dlaczego warto?
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === 'dark'
                ? 'text-white'
                : 'text-gray-900'
            }`}
          >
            Dlaczego warto wybrać ten kurs?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}
          >
            Nasz kurs to kompleksowe podejście do tworzenia aplikacji AI bez kodowania. 
            Zyskaj umiejętności, które zmienią Twoją karierę.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
