
import { motion } from "framer-motion";
import { Brain, Code, Rocket, Target, Users, Zap } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ValueCard = ({ icon, title, description, index }: ValueCardProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-xl border h-full ${
        theme === 'dark' 
          ? 'bg-gray-900/50 border-gray-800 hover:border-magenta/30' 
          : 'bg-white border-gray-100 hover:border-magenta/30 shadow-sm hover:shadow'
      } transition-all duration-300`}
    >
      <div className={`p-3 rounded-xl w-fit mb-4 ${
        theme === 'dark' ? 'bg-magenta/20' : 'bg-magenta/10'
      }`}>
        {icon}
      </div>
      <h3 className={`text-xl font-semibold mb-3 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>{title}</h3>
      <p className={
        theme === 'dark' ? 'text-white/70' : 'text-gray-600'
      }>{description}</p>
    </motion.div>
  );
};

const ValueProposition = () => {
  const { theme } = useTheme();
  
  const values = [
    {
      icon: <Target className="text-magenta h-6 w-6" />,
      title: "Unikalny program edukacyjny",
      description: "Nauczysz się, jak budować chatboty, aplikacje SaaS i systemy rekomendacyjne krok po kroku."
    },
    {
      icon: <Zap className="text-magenta h-6 w-6" />,
      title: "Prosto i intuicyjnie",
      description: "Bez kodowania, bez stresu - wszystko dzięki graficznym narzędziom drag & drop."
    },
    {
      icon: <Users className="text-magenta h-6 w-6" />,
      title: "Dla każdego",
      description: "Początkujący: zero doświadczenia w programowaniu? Żaden problem! Zaawansowani: pogłębisz wiedzę."
    },
    {
      icon: <Brain className="text-magenta h-6 w-6" />,
      title: "Praktyczna wiedza o AI",
      description: "Zrozumiesz, jak działają duże modele językowe i jak wykorzystać ich potencjał w swoich projektach."
    },
    {
      icon: <Rocket className="text-magenta h-6 w-6" />,
      title: "Szybkie efekty",
      description: "Już po pierwszych lekcjach będziesz w stanie tworzyć proste aplikacje wykorzystujące modele językowe."
    },
    {
      icon: <Code className="text-magenta h-6 w-6" />,
      title: "Bez programowania",
      description: "Twórz zaawansowane rozwiązania bez konieczności pisania kodu - wszystko poprzez intuicyjny interfejs."
    }
  ];
  
  return (
    <section className={`py-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-full h-full ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-purple-900/10 to-transparent'
            : 'bg-gradient-to-br from-purple-100/20 to-transparent'
        }`} />
        
        <div className={`absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full filter blur-3xl ${
          theme === 'dark'
            ? 'bg-gradient-to-tl from-magenta/10 to-transparent'
            : 'bg-gradient-to-tl from-magenta/5 to-transparent'
        }`} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
              theme === 'dark'
                ? 'bg-magenta/20 text-magenta' 
                : 'bg-magenta/10 text-magenta-600'
            }`}
          >
            Dlaczego warto?
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === 'dark'
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-magenta'
                : 'text-gray-900'
            }`}
          >
            Dlaczego warto wybrać ten kurs?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={theme === 'dark' ? 'text-white/70 text-lg' : 'text-gray-600 text-lg'}
          >
            Poznaj kluczowe powody, dla których ten kurs zmieni Twoje życie.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/offer"
            className={`inline-block px-8 py-3 rounded-xl transition-all transform hover:scale-105 ${
              theme === 'dark'
                ? 'bg-magenta hover:bg-magenta/90 text-white'
                : 'bg-magenta hover:bg-magenta/90 text-white'
            }`}
          >
            Zobacz szczegóły kursu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
