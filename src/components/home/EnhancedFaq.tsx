
import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircleQuestion, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Czym jest kurs Flowise AI?",
    answer: "To kompleksowy kurs wprowadzający do tworzenia aplikacji AI za pomocą intuicyjnej, graficznej platformy Flowise AI. Nie wymaga znajomości programowania!",
    category: "Informacje ogólne"
  },
  {
    question: "Czy kurs jest odpowiedni dla początkujących?",
    answer: "Tak! Kurs został zaprojektowany z myślą o osobach bez doświadczenia technicznego, które chcą nauczyć się korzystać z AI w praktyce.",
    category: "Dla kogo"
  },
  {
    question: "Jak długo trwa kurs?",
    answer: "Łączny czas materiałów wideo to około 2,5 godziny. Kurs zawiera również dodatkowe materiały w formie grafik i tekstów, a powtarzanie przykładów przedstawionych w kursie może zająć dodatkowy czas.",
    category: "Informacje ogólne"
  },
  {
    question: "Na ile czasu otrzymuję dostęp do kursu?",
    answer: "Dostęp jest bezterminowy — możesz wracać do materiałów w dowolnym momencie.",
    category: "Dostęp"
  },
  {
    question: "Czy muszę posiadać specjalistyczny sprzęt lub oprogramowanie?",
    answer: "Nie, do kursu wystarczy komputer z dostępem do internetu. Wszystkie narzędzia używane w kursie są bezpłatne lub posiadają darmowe wersje próbne.",
    category: "Wymagania"
  },
  {
    question: "Czy kurs jest dostępny na urządzeniach mobilnych?",
    answer: "Tak, materiały kursu możesz oglądać na komputerze, tablecie lub smartfonie.",
    category: "Dostęp"
  },
  {
    question: "Czy mogę wracać do materiałów po ukończeniu kursu?",
    answer: "Tak, dostęp do kursu jest bezterminowy. Możesz wracać do materiałów w dowolnym momencie.",
    category: "Dostęp"
  },
  {
    question: "Czy potrzebuję znajomości języka angielskiego?",
    answer: "Nie, cały kurs jest w języku polskim. Jeśli pojawiają się narzędzia lub interfejsy w języku angielskim, są one dokładnie omówione w lekcjach.",
    category: "Wymagania"
  },
  {
    question: "Czy mogę kupić kurs dla zespołu lub kilku osób?",
    answer: "Tak, oferujemy opcję zakupu licencji grupowych. Skontaktuj się z nami na info@toknowai.pl, aby dowiedzieć się więcej.",
    category: "Zakup"
  },
  {
    question: "Co zrobić, jeśli napotkam problemy techniczne podczas kursu?",
    answer: "Jeśli napotkasz jakiekolwiek problemy techniczne, skontaktuj się z naszym zespołem wsparcia na info@toknowai.pl.",
    category: "Wsparcie"
  },
  {
    question: "Czy kurs obejmuje aktualizacje, jeśli Flowise AI wprowadzi nowe funkcje?",
    answer: "Tak, kurs będzie aktualizowany, aby uwzględnić nowe funkcje i zmiany w Flowise AI. Masz do nich dostęp bez dodatkowych opłat.",
    category: "Aktualizacje"
  },
  {
    question: "Co wyróżnia ten kurs na tle innych?",
    answer: "Nasz kurs koncentruje się na praktycznym wykorzystaniu Flowise AI i tworzeniu aplikacji krok po kroku. Dzięki temu szybko nauczysz się używać narzędzia w rzeczywistych projektach.",
    category: "Informacje ogólne"
  },
  {
    question: "Czy mogę przetestować fragment kursu przed zakupem?",
    answer: "Tak, na stronie kursu znajdziesz darmową lekcję demonstracyjną, aby zapoznać się z jakością materiałów.",
    category: "Zakup"
  }
];

// Group FAQ items by category
const groupedFaqItems = faqItems.reduce((acc, item) => {
  const category = item.category || "Inne";
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(item);
  return acc;
}, {} as Record<string, FaqItem[]>);

// Get all unique categories
const categories = Object.keys(groupedFaqItems);

const EnhancedFaq = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Wszystkie");

  const toggleItem = (question: string) => {
    setOpenItem(openItem === question ? null : question);
  };

  const filteredItems = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "Wszystkie" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/public/lovable-uploads/40d3d0c0-d9e2-43e5-9bcf-32769ef968df.png')] bg-cover bg-center opacity-5" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            FAQ - Najczęściej zadawane pytania
          </h2>
          <p className="text-gray-600 text-lg">
            Masz pytania? Znajdziesz tutaj odpowiedzi na najczęściej zadawane pytania!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Szukaj w FAQ..."
              className="w-full py-3 pl-12 pr-4 rounded-xl bg-gray-100 border border-gray-200 focus:border-magenta/50 focus:outline-none focus:ring-2 focus:ring-magenta/20 text-gray-800 placeholder:text-gray-400 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category tabs */}
          <div className="mb-8 overflow-x-auto scrollbar-none pb-2">
            <div className="flex space-x-2 min-w-max">
              <button
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeCategory === "Wszystkie"
                    ? "bg-magenta text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory("Wszystkie")}
              >
                Wszystkie
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeCategory === category
                      ? "bg-magenta text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ items */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 shadow-sm divide-y divide-gray-200 overflow-hidden">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div key={index} className="overflow-hidden">
                  <button
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none transition-colors hover:bg-gray-50"
                    onClick={() => toggleItem(item.question)}
                    aria-expanded={openItem === item.question}
                  >
                    <div className="flex items-start">
                      <MessageCircleQuestion size={20} className="text-magenta flex-shrink-0 mt-1 mr-3" />
                      <span className="text-xl font-medium text-gray-800">{item.question}</span>
                    </div>
                    <span className="ml-4 flex-shrink-0 text-magenta">
                      {openItem === item.question ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {openItem === item.question && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-gray-50"
                      >
                        <div className="p-6 pt-0 pl-14">
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">Nie znaleziono odpowiedzi na Twoje pytanie.</p>
                <p className="text-magenta mt-2">Skontaktuj się z nami bezpośrednio na info@toknowai.pl</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFaq;
