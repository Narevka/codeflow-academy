
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  delay: number;
}

const FaqItem = ({ question, answer, isOpen, toggleOpen, delay }: FaqItemProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={`mb-4 overflow-hidden rounded-lg border ${
        theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
      }`}
    >
      <button
        onClick={toggleOpen}
        className={`w-full flex items-center justify-between p-4 text-left font-medium transition ${
          isOpen 
            ? theme === 'dark' ? 'bg-gray-900' : 'bg-white' 
            : theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <span>{question}</span>
        {isOpen ? 
          <ChevronUp size={20} className="flex-shrink-0 text-orange" /> : 
          <ChevronDown size={20} className="flex-shrink-0 text-gray-400" />
        }
      </button>
      
      {isOpen && (
        <div className={`p-4 ${theme === 'dark' ? 'bg-gray-900/50 border-t border-gray-800' : 'bg-white border-t border-gray-100'}`}>
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
            {answer}
          </p>
        </div>
      )}
    </motion.div>
  );
};

const Faq = () => {
  const { theme } = useTheme();
  const [openItem, setOpenItem] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: "Czy potrzebuję umiejętności programowania, aby skorzystać z kursu?",
      answer: "Nie, kurs jest zaprojektowany tak, aby osoby bez doświadczenia w programowaniu mogły go z powodzeniem ukończyć. Wykorzystujemy narzędzia no-code, które pozwalają tworzyć zaawansowane aplikacje AI bez pisania kodu."
    },
    {
      question: "Jak długo mam dostęp do materiałów kursu?",
      answer: "Po zakupie kursu otrzymujesz dożywotni dostęp do wszystkich materiałów oraz przyszłych aktualizacji. Możesz uczyć się we własnym tempie i wracać do treści w dowolnym momencie."
    },
    {
      question: "Czy otrzymam certyfikat po ukończeniu kursu?",
      answer: "Tak, po ukończeniu wszystkich modułów kursu otrzymasz certyfikat ukończenia, który możesz dodać do swojego CV lub profilu LinkedIn, aby potwierdzić zdobyte umiejętności."
    },
    {
      question: "Czy kurs jest aktualizowany wraz z rozwojem technologii?",
      answer: "Tak, regularnie aktualizujemy materiały kursu, aby uwzględnić najnowsze funkcje Flowise i LangChain oraz zmiany w ekosystemie AI. Wszystkie aktualizacje są dostępne dla kursantów bez dodatkowych opłat."
    },
    {
      question: "Czy oferujecie wsparcie w trakcie nauki?",
      answer: "Tak, wszyscy kursanci mają dostęp do dedykowanego forum, gdzie mogą zadawać pytania i otrzymywać wsparcie od instruktorów oraz społeczności. Dodatkowo organizujemy okresowe sesje Q&A online."
    },
    {
      question: "Co jeśli kurs nie spełni moich oczekiwań?",
      answer: "Oferujemy 30-dniową gwarancję satysfakcji. Jeśli z jakiegokolwiek powodu uznasz, że kurs nie spełnia Twoich oczekiwań, możesz otrzymać pełen zwrot pieniędzy w ciągu 30 dni od zakupu."
    }
  ];

  return (
    <section className={`py-20 ${
      theme === 'dark' ? 'bg-gray-950' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Najczęściej zadawane <span className="text-orange">pytania</span>
          </h2>
          
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Odpowiedzi na najczęstsze pytania dotyczące naszego kursu
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === index}
              toggleOpen={() => setOpenItem(openItem === index ? null : index)}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
