
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Czy potrzebuję doświadczenia programistycznego?",
    answer: "Nie, kurs został zaprojektowany tak, aby był dostępny nawet dla osób bez doświadczenia programistycznego. Flowise AI pozwala tworzyć aplikacje bez pisania kodu, poprzez intuicyjny interfejs graficzny."
  },
  {
    question: "Jak długo mam dostęp do kursu?",
    answer: "Po zakupie otrzymujesz dożywotni dostęp do materiałów kursu. Oznacza to, że możesz wracać do lekcji w dowolnym momencie i uczyć się we własnym tempie."
  },
  {
    question: "Czy otrzymam certyfikat ukończenia kursu?",
    answer: "Tak, po ukończeniu wszystkich modułów kursu otrzymasz certyfikat potwierdzający zdobyte umiejętności, który możesz dodać do swojego portfolio i profilu na LinkedIn."
  },
  {
    question: "Czy kurs jest na bieżąco aktualizowany?",
    answer: "Tak, regularnie aktualizujemy materiały kursu, aby odzwierciedlały najnowsze funkcje i możliwości Flowise AI oraz ekosystemu LangChain. Jako uczestnik kursu, otrzymasz dostęp do wszystkich przyszłych aktualizacji."
  },
  {
    question: "Czy będę mógł zadawać pytania podczas kursu?",
    answer: "Oczywiście! Oferujemy dostęp do grupy wsparcia, gdzie możesz zadawać pytania, dzielić się swoimi projektami i uzyskać pomoc od instruktorów oraz innych uczestników kursu."
  },
  {
    question: "Czy potrzebuję specjalnego sprzętu do kursu?",
    answer: "Nie, do kursu wystarczy komputer z dostępem do internetu. Wszystkie narzędzia, których będziesz używać są dostępne online lub można je zainstalować na większości nowoczesnych komputerów."
  }
];

const FaqItem = ({ item, isOpen, toggleOpen }: { 
  item: FaqItem; 
  isOpen: boolean; 
  toggleOpen: () => void;
}) => {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="w-full text-left py-5 flex justify-between items-center focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="text-xl font-medium text-white">{item.question}</span>
        <span className="ml-4 flex-shrink-0 text-magenta">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/70">{item.answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-network-pattern bg-cover bg-fixed opacity-5" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Często zadawane pytania
          </h2>
          <p className="text-white/70 text-lg">
            Masz pytania? Sprawdź, czy nie znaleźliśmy już na nie odpowiedzi.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card-gradient glass-card p-6">
            {faqItems.map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                isOpen={openItem === index}
                toggleOpen={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
