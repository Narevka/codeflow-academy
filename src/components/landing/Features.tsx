
import { motion } from "framer-motion";
import { Brain, Code, Database, Lock, Pen, Workflow } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={`p-6 rounded-xl border ${
        theme === 'dark'
          ? 'bg-gray-900/50 border-gray-800/50 hover:border-blue-900/50'
          : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100'
      } transition-all duration-300`}
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
        theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-50'
      }`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
        {description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const { theme } = useTheme();
  
  const features = [
    {
      icon: <Workflow className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Intuicyjny interfejs",
      description: "Flowise wykorzystuje prosty interfejs typu 'przeciagnij i upusc', który ulatwia tworzenie złożonych aplikacji AI."
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Moc LLM bez kodowania",
      description: "Uzyskaj dostęp do najnowocześniejszych dużych modeli językowych bez konieczności pisania kodu."
    },
    {
      icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Bazy wiedzy i pamięć",
      description: "Twórz aplikacje z pamięcią kontekstową i integracją z zewnętrznymi bazami danych i dokumentami."
    },
    {
      icon: <Pen className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Zaawansowane prompty",
      description: "Opanuj sztukę tworzenia efektywnych promptów, które uzyskują najlepsze rezultaty z modeli AI."
    },
    {
      icon: <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Bezpieczeństwo danych",
      description: "Naucz się wdrażać aplikacje AI z zachowaniem najwyższych standardów bezpieczeństwa i prywatności."
    },
    {
      icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "API i integracje",
      description: "Łącz swoje rozwiązania AI z istniejącymi systemami i platformami za pomocą API i webhooków."
    }
  ];

  return (
    <section className={`py-24 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full text-sm font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50">
            Funkcjonalności
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Innowacyjne podejście do tworzenia <span className="text-blue-600 dark:text-blue-400">aplikacji AI</span>
          </h2>
          
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Nasz kurs wprowadza technologię Flowise jako narzędzie no-code do tworzenia zaawansowanych
            rozwiązań AI, które dotychczas wymagały specjalistycznej wiedzy programistycznej.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
