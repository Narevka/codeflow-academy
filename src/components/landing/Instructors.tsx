
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

interface InstructorProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  delay: number;
}

const Instructor = ({ name, role, bio, image, delay }: InstructorProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      className={`flex flex-col items-center text-center p-8 rounded-xl border ${
        theme === 'dark' 
          ? 'bg-gray-900/50 border-gray-800/50 hover:border-blue-900/50' 
          : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100'
      } transition-all duration-300`}
    >
      <div className={`w-24 h-24 rounded-full mb-6 overflow-hidden border-2 ${
        theme === 'dark' ? 'border-blue-600/20' : 'border-blue-100'
      }`}>
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full ${theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-50'}`}></div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className={`text-sm mb-4 text-blue-600 dark:text-blue-400`}>{role}</p>
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
      bio: "Jan ma ponad 8 lat doświadczenia w projektowaniu rozwiązań opartych na sztucznej inteligencji. Prowadził wdrożenia AI dla wielu firm z listy Fortune 500.",
      image: ""
    },
    {
      name: "Anna Nowak",
      role: "LangChain Expert",
      bio: "Anna specjalizuje się w tworzeniu efektywnych łańcuchów promptów i zaawansowanych aplikacji konwersacyjnych. Autorka bestselleru o AI bez kodowania.",
      image: ""
    },
    {
      name: "Piotr Wiśniewski",
      role: "Flowise Developer",
      bio: "Piotr jest aktywnym kontrybutorem projektu Flowise i ekspertem w zakresie wdrażania aplikacji AI w środowiskach produkcyjnych.",
      image: ""
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
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full text-sm font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50">
            Zespół ekspertów
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Poznaj <span className="text-blue-600 dark:text-blue-400">specjalistów</span>, którzy poprowadzą Cię przez kurs
          </h2>
          
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Nasi instruktorzy to praktycy z wieloletnim doświadczeniem w tworzeniu i wdrażaniu rozwiązań AI.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Instructor
              key={index}
              name={instructor.name}
              role={instructor.role}
              bio={instructor.bio}
              image={instructor.image}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
