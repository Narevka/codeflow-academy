
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

interface InstructorProps {
  name: string;
  role: string;
  bio: string;
  delay: number;
}

const Instructor = ({ name, role, bio, delay }: InstructorProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      className={`flex flex-col items-center text-center p-6 rounded-lg ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white shadow-sm'
      }`}
    >
      <div className={`w-24 h-24 rounded-full mb-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-orange' : 'text-orange-dark'}`}>{role}</p>
      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{bio}</p>
    </motion.div>
  );
};

const Instructors = () => {
  const { theme } = useTheme();
  
  const instructors = [
    {
      name: "Jan Kowalski",
      role: "Główny instruktor, AI Specialist",
      bio: "Jan ma ponad 8 lat doświadczenia w projektowaniu rozwiązań opartych na sztucznej inteligencji. Prowadził wdrożenia AI dla wielu firm z listy Fortune 500."
    },
    {
      name: "Anna Nowak",
      role: "LangChain Expert",
      bio: "Anna specjalizuje się w tworzeniu efektywnych łańcuchów promptów i zaawansowanych aplikacji konwersacyjnych. Autorka bestselleru o AI bez kodowania."
    },
    {
      name: "Piotr Wiśniewski",
      role: "Flowise Developer",
      bio: "Piotr jest aktywnym kontrybutorem projektu Flowise i ekspertem w zakresie wdrażania aplikacji AI w środowiskach produkcyjnych."
    }
  ];

  return (
    <section className={`py-20 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Poznaj <span className="text-orange">ekspertów</span>, którzy poprowadzą Cię przez kurs
          </h2>
          
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Nasi instruktorzy to praktycy z wieloletnim doświadczeniem w tworzeniu i wdrażaniu rozwiązań AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Instructor
              key={index}
              name={instructor.name}
              role={instructor.role}
              bio={instructor.bio}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
