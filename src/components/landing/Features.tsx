
import { motion } from "framer-motion";
import { Brain, Code, Database, Lock, Pen, Users, Workflow } from "lucide-react";
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
      className={`p-8 rounded-2xl ${
        theme === 'dark'
          ? 'bg-gray-800/40 border border-gray-700/50 hover:border-orange/30'
          : 'bg-white shadow-lg hover:shadow-xl border border-gray-100 hover:border-orange/20'
      } transition-all duration-300 hover:translate-y-[-5px]`}
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
        theme === 'dark' ? 'bg-orange/10' : 'bg-orange/10'
      }`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
        {description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const { theme } = useTheme();
  
  const features = [
    {
      icon: <Workflow className="w-8 h-8 text-orange" />,
      title: "Intuicyjny interfejs",
      description: "Flowise oferuje prosty i przyjazny interfejs typu \"przeciągnij i upuść\", który pozwala szybko tworzyć złożone aplikacje AI bez znajomości programowania."
    },
    {
      icon: <Brain className="w-8 h-8 text-orange" />,
      title: "Moc LLM bez kodowania",
      description: "Wykorzystaj potencjał najnowocześniejszych dużych modeli językowych bez konieczności pisania skomplikowanego kodu czy znajomości API."
    },
    {
      icon: <Database className="w-8 h-8 text-orange" />,
      title: "Bazy wiedzy i pamięć",
      description: "Twórz zaawansowane aplikacje z pamięcią kontekstową i integracją z zewnętrznymi bazami danych, dokumentami i systemami."
    },
    {
      icon: <Pen className="w-8 h-8 text-orange" />,
      title: "Zaawansowane prompty",
      description: "Opanuj sztukę tworzenia efektywnych promptów, które pozwalają uzyskać najlepsze rezultaty z modeli AI dla konkretnych zastosowań biznesowych."
    },
    {
      icon: <Lock className="w-8 h-8 text-orange" />,
      title: "Bezpieczeństwo danych",
      description: "Naucz się wdrażać aplikacje AI z zachowaniem najwyższych standardów bezpieczeństwa, prywatności i zgodności z przepisami."
    },
    {
      icon: <Users className="w-8 h-8 text-orange" />,
      title: "Społeczność i wsparcie",
      description: "Dołącz do społeczności praktyków Flowise, gdzie możesz wymieniać się doświadczeniami, rozwiązaniami i otrzymać wsparcie od ekspertów."
    }
  ];

  return (
    <section className={`py-24 ${
      theme === 'dark' ? 'bg-gray-950' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full text-sm font-medium bg-orange/10 text-orange border border-orange/20">
            Co zyskasz w kursie
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kompleksowe podejście do tworzenia <span className="text-orange">aplikacji AI</span>
          </h2>
          
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed max-w-2xl mx-auto`}>
            Nasz kurs przeprowadzi Cię przez cały proces projektowania i wdrażania 
            zaawansowanych rozwiązań AI, które dotychczas wymagały 
            specjalistycznej wiedzy programistycznej.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
