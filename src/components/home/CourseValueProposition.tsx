
import React from "react";
import { Brain, Code, Rocket, Target, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface ValuePropositionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ValueProposition = ({ icon, title, description, delay }: ValuePropositionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-card-gradient glass-card p-6 rounded-xl border border-white/10 h-full"
    >
      <div className="bg-magenta/20 p-3 rounded-xl w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

const CourseValueProposition = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Abstract background design */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-magenta/10 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple/5 rounded-full filter blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-magenta/20 text-magenta rounded-full text-sm font-medium mb-4"
          >
            Dlaczego warto?
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
          >
            Dlaczego warto wybrać ten kurs?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            Poznaj kluczowe powody, dla których ten kurs zmieni Twoje życie.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueProposition
            icon={<Target size={24} className="text-magenta" />}
            title="Unikalny program edukacyjny"
            description="Nauczysz się, jak budować chatboty, aplikacje SaaS i systemy rekomendacyjne krok po kroku. Wykorzystasz najnowsze technologie, takie jak Flowise, LangChain i GPT-4."
            delay={1}
          />
          
          <ValueProposition
            icon={<Zap size={24} className="text-magenta" />}
            title="Prosto i intuicyjnie"
            description="Bez kodowania, bez stresu - wszystko dzięki graficznym narzędziom drag & drop. Tworzenie aplikacji AI nigdy nie było tak proste i dostępne."
            delay={2}
          />
          
          <ValueProposition
            icon={<Users size={24} className="text-magenta" />}
            title="Dla każdego"
            description="Początkujący: zero doświadczenia w programowaniu? Żaden problem! Zaawansowani: pogłębisz wiedzę dzięki zaawansowanym funkcjom, jak Function Calling i długotrwała pamięć."
            delay={3}
          />
          
          <ValueProposition
            icon={<Brain size={24} className="text-magenta" />}
            title="Praktyczna wiedza o AI"
            description="Zrozumiesz, jak działają duże modele językowe i jak wykorzystać ich potencjał w swoich projektach, nawet bez znajomości skomplikowanych algorytmów."
            delay={4}
          />
          
          <ValueProposition
            icon={<Rocket size={24} className="text-magenta" />}
            title="Szybkie efekty"
            description="Już po pierwszych lekcjach będziesz w stanie tworzyć proste aplikacje wykorzystujące modele językowe. Natychmiastowe rezultaty motywują do dalszej nauki."
            delay={5}
          />
          
          <ValueProposition
            icon={<Code size={24} className="text-magenta" />}
            title="Bez programowania"
            description="Twórz zaawansowane rozwiązania bez konieczności pisania kodu - wszystko poprzez intuicyjny interfejs graficzny Flowise AI i jego komponenty."
            delay={6}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="/offer"
            className="inline-block bg-magenta hover:bg-magenta/90 text-white font-medium px-8 py-3 rounded-xl transition-all transform hover:scale-105"
          >
            Zobacz szczegóły kursu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseValueProposition;
