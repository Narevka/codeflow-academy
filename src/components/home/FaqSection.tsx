
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, MessageCircleQuestion, Search } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

const FaqSection = () => {
  const { theme } = useTheme();
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Wszystkie");

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
      question: "Czy potrzebuję znajomości języka angielskiego?",
      answer: "Nie, cały kurs jest w języku polskim. Jeśli pojawiają się narzędzia lub interfejsy w języku angielskim, są one dokładnie omówione w lekcjach.",
      category: "Wymagania"
    },
    {
      question: "Czy mogę kupić kurs dla zespołu lub kilku osób?",
      answer: "Tak, oferujemy opcję zakupu licencji grupowych. Skontaktuj się z nami na info@toknowai.pl, aby dowiedzieć się więcej.",
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
    <section className={`py-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0">
        {theme === 'dark' && (
          <div className="absolute inset-0 bg-[url('/lovable-uploads/40d3d0c0-d9e2-43e5-9bcf-32769ef968df.png')] bg-cover bg-center opacity-5" />
        )}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'dark'
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-magenta'
              : 'text-gray-900'
          }`}>
            FAQ - Najczęściej zadawane pytania
          </h2>
          <p className={theme === 'dark' ? 'text-white/70 text-lg' : 'text-gray-600 text-lg'}>
            Masz pytania? Znajdziesz tutaj odpowiedzi na najczęściej zadawane pytania!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Search bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className={theme === 'dark' ? 'text-white/50' : 'text-gray-400'} />
            </div>
            <input
              type="text"
              placeholder="Szukaj w FAQ..."
              className={`w-full py-3 pl-12 pr-4 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                theme === 'dark'
                  ? 'bg-white/5 border border-white/10 focus:border-magenta/50 focus:ring-magenta/20 text-white placeholder:text-white/40'
                  : 'bg-white border border-gray-200 focus:border-magenta/50 focus:ring-magenta/20 text-gray-900 placeholder:text-gray-400'
              }`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category tabs */}
          <div className="mb-8 overflow-x-auto pb-2 no-scrollbar">
            <div className="flex space-x-2 min-w-max">
              <button
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeCategory === "Wszystkie"
                    ? theme === 'dark'
                      ? 'bg-magenta text-white'
                      : 'bg-magenta text-white'
                    : theme === 'dark'
                      ? 'bg-white/5 text-white/70 hover:bg-white/10'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                      ? theme === 'dark'
                        ? 'bg-magenta text-white'
                        : 'bg-magenta text-white'
                      : theme === 'dark'
                        ? 'bg-white/5 text-white/70 hover:bg-white/10'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ items */}
          <div className={`rounded-xl border divide-y ${
            theme === 'dark'
              ? 'bg-gray-900/30 backdrop-blur-sm border-gray-800 divide-gray-800'
              : 'bg-white border-gray-200 divide-gray-200 shadow'
          }`}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div key={index} className="overflow-hidden">
                  <button
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none transition-colors"
                    onClick={() => toggleItem(item.question)}
                    aria-expanded={openItem === item.question}
                  >
                    <div className="flex items-start">
                      <MessageCircleQuestion size={20} className="text-magenta flex-shrink-0 mt-1 mr-3" />
                      <span className={`text-xl font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{item.question}</span>
                    </div>
                    <span className="ml-4 flex-shrink-0 text-magenta">
                      {openItem === item.question ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  
                  {openItem === item.question && (
                    <div className={theme === 'dark' ? 'bg-white/5 p-6 pt-0 pl-14' : 'bg-gray-50 p-6 pt-0 pl-14'}>
                      <p className={theme === 'dark' ? 'text-white/80' : 'text-gray-600'}>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-500'}>
                  Nie znaleziono odpowiedzi na Twoje pytanie.
                </p>
                <p className="text-magenta mt-2">
                  Skontaktuj się z nami bezpośrednio na info@toknowai.pl
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
