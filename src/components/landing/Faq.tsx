
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FaqItem = ({ question, answer, isOpen, onToggle, index }: FaqItemProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`border rounded-lg overflow-hidden ${
        theme === 'dark'
          ? 'border-gray-800'
          : 'border-gray-200'
      }`}
    >
      <button
        className={`w-full text-left py-4 px-6 flex items-center justify-between ${
          theme === 'dark'
            ? isOpen ? 'bg-gray-900' : 'bg-black'
            : isOpen ? 'bg-orange-soft/20' : 'bg-white'
        }`}
        onClick={onToggle}
      >
        <span className={`font-medium text-lg ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            isOpen ? 'transform rotate-180 text-orange' : theme === 'dark' ? 'text-white/60' : 'text-gray-500'
          }`}
        />
      </button>
      
      {isOpen && (
        <div className={`py-4 px-6 ${
          theme === 'dark'
            ? 'bg-gray-900/50'
            : 'bg-white'
        }`}>
          <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-700'}>
            {answer}
          </p>
        </div>
      )}
    </motion.div>
  );
};

const Faq = () => {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: "Czy potrzebuję umiejętności programowania?",
      answer: "Absolutnie nie! Kurs został zaprojektowany tak, aby był dostępny dla osób bez jakiegokolwiek doświadczenia w programowaniu. Używamy wizualnego interfejsu Flowise AI, który pozwala tworzyć aplikacje metodą przeciągnij i upuść."
    },
    {
      question: "Jak długo mam dostęp do kursu?",
      answer: "Po zakupie kursu otrzymujesz dożywotni dostęp do wszystkich materiałów, włączając w to przyszłe aktualizacje. Możesz uczyć się w swoim własnym tempie, bez żadnych ograniczeń czasowych."
    },
    {
      question: "Czy będę potrzebować płatnego konta OpenAI?",
      answer: "Do ukończenia kursu przyda Ci się konto API OpenAI. Jednakże dla większości projektów wystarczy darmowy kredyt początkowy lub minimalne opłaty rzędu kilku dolarów. W kursie uczymy również, jak optymalizować koszty użycia API."
    },
    {
      question: "Czy kurs zawiera wsparcie techniczne?",
      answer: "Tak! Oferujemy wsparcie techniczne poprzez dedykowaną grupę społecznościową, gdzie możesz zadawać pytania, dzielić się swoimi projektami i otrzymywać pomoc zarówno od instruktorów, jak i innych uczestników kursu."
    },
    {
      question: "Jak szybko zobaczę rezultaty?",
      answer: "Większość uczestników jest w stanie stworzyć swoją pierwszą działającą aplikację AI już po kilku godzinach nauki. Kurs kładzie nacisk na szybkie osiąganie praktycznych wyników, które możesz natychmiast implementować."
    },
    {
      question: "Czy materiały są aktualizowane?",
      answer: "Zdecydowanie tak! Regularnie aktualizujemy kurs o najnowsze funkcje Flowise AI, LangChain i innych technologii. Jako uczestnik kursu otrzymujesz dostęp do wszystkich przyszłych aktualizacji bez dodatkowych opłat."
    }
  ];
  
  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className={`py-20 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
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
            Często zadawane pytania
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
            Masz pytania? Mamy odpowiedzi
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}
          >
            Oto odpowiedzi na najczęściej zadawane pytania dotyczące naszego kursu.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className={`mt-12 p-6 rounded-xl border mx-auto max-w-3xl text-center ${
            theme === 'dark'
              ? 'bg-black/50 border-gray-800'
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-center justify-center">
            <HelpCircle className={`h-6 w-6 mr-2 ${
              theme === 'dark' ? 'text-orange' : 'text-orange'
            }`} />
            <p className={`font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Masz inne pytanie?
            </p>
          </div>
          <p className={`mt-2 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
            Jeśli nie znalazłeś odpowiedzi na swoje pytanie, skontaktuj się z nami
            pod adresem <a href="mailto:info@toknowai.pl" className="text-orange font-medium hover:underline">
              info@toknowai.pl
            </a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
