
import { useState } from "react";
import { Check, Star } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CourseCard from "../components/ui/CourseCard";

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  studentsCount: number;
  features: string[];
  category: string;
  level: string;
}

const courses: Course[] = [
  {
    id: "flowise-ai-basics",
    title: "Flowise AI - Podstawy tworzenia aplikacji bez kodu",
    description: "Wprowadzenie do platformy Flowise AI i tworzenia pierwszych aplikacji opartych na sztucznej inteligencji.",
    price: 349,
    originalPrice: 499,
    image: "/public/lovable-uploads/af41dcbe-22e6-4e86-a8f3-d5878acd2e55.png",
    rating: 4.8,
    studentsCount: 1245,
    features: [
      "Instalacja i konfiguracja środowiska",
      "Tworzenie pierwszego chatbota",
      "Integracja z zewnętrznymi źródłami",
      "Publikacja aplikacji"
    ],
    category: "Flowise AI",
    level: "Początkujący"
  },
  {
    id: "flowise-ai-advanced",
    title: "Flowise AI - Zaawansowane techniki i integracje",
    description: "Kurs dla osób, które znają już podstawy Flowise AI i chcą rozwinąć swoje umiejętności o zaawansowane funkcje.",
    price: 449,
    originalPrice: 599,
    image: "/public/lovable-uploads/2fd49611-13df-49b8-a6fe-2b83183c4e83.png",
    rating: 4.7,
    studentsCount: 835,
    features: [
      "Function Calling i narzędzia",
      "Zaawansowane łańcuchy LangChain",
      "Pamięć długoterminowa w chatbotach",
      "Integracja z bazami danych"
    ],
    category: "Flowise AI",
    level: "Zaawansowany"
  },
  {
    id: "langchain-basics",
    title: "LangChain - Fundamenty frameworka dla aplikacji AI",
    description: "Poznaj podstawy LangChain, frameworka umożliwiającego budowę aplikacji opartych na dużych modelach językowych.",
    price: 399,
    originalPrice: 549,
    image: "/public/lovable-uploads/1d7bf1cd-3c85-48bc-9805-e81d55d79db5.png",
    rating: 4.6,
    studentsCount: 943,
    features: [
      "Modele językowe i ich zastosowania",
      "Promptowanie i inżynieria promptów",
      "Łańcuchy i agenci w LangChain",
      "Wektorowe bazy danych"
    ],
    category: "LangChain",
    level: "Początkujący"
  },
  {
    id: "ai-chatbots-creation",
    title: "Tworzenie profesjonalnych chatbotów AI",
    description: "Specjalistyczny kurs skupiający się na projektowaniu i implementacji zaawansowanych chatbotów.",
    price: 399,
    originalPrice: 549,
    image: "/public/lovable-uploads/abedc481-fffb-44d7-b01d-f810315d5fba.png",
    rating: 4.9,
    studentsCount: 1087,
    features: [
      "Projektowanie doświadczeń konwersacyjnych",
      "Obsługa kontekstu i pamięci",
      "Integracja z witrynami i aplikacjami",
      "Analiza i optymalizacja chatbotów"
    ],
    category: "Chatboty",
    level: "Średniozaawansowany"
  },
  {
    id: "flowise-ai-complete",
    title: "Flowise AI - Kompletny kurs od podstaw do eksperta",
    description: "Pełny kurs obejmujący wszystkie aspekty tworzenia aplikacji w Flowise AI - od podstaw po zaawansowane techniki.",
    price: 649,
    originalPrice: 899,
    image: "/public/lovable-uploads/47b7ddeb-1880-457f-a354-85dfaae75dc0.png",
    rating: 4.9,
    studentsCount: 2156,
    features: [
      "15+ godzin materiału wideo",
      "Projekty praktyczne i studia przypadków",
      "Konsultacje z instruktorem",
      "Certyfikat ukończenia kursu"
    ],
    category: "Flowise AI",
    level: "Wszystkie poziomy"
  }
];

const categories = ["Wszystkie", "Flowise AI", "LangChain", "Chatboty"];
const levels = ["Wszystkie poziomy", "Początkujący", "Średniozaawansowany", "Zaawansowany"];

const Offer = () => {
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");
  const [selectedLevel, setSelectedLevel] = useState("Wszystkie poziomy");

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "Wszystkie" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "Wszystkie poziomy" || course.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative">
        <div className="absolute inset-0 bg-network-pattern bg-cover bg-center bg-no-repeat opacity-10" />
        <div className="absolute inset-0 bg-gradient-primary opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Nasze kursy
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Wybierz idealny kurs dopasowany do Twoich potrzeb i poziomu zaawansowania.
              Wszystkie nasze szkolenia są oparte na praktycznym podejściu i rzeczywistych przykładach.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <div>
              <h3 className="text-white mb-2 font-medium">Kategoria:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                      selectedCategory === category
                        ? "bg-magenta text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white mb-2 font-medium">Poziom:</h3>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                      selectedLevel === level
                        ? "bg-purple text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                    onClick={() => setSelectedLevel(level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                price={course.price}
                originalPrice={course.originalPrice}
                image={course.image}
                rating={course.rating}
                studentsCount={course.studentsCount}
                features={course.features}
              />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-white mb-2">Brak kursów</h3>
              <p className="text-white/70">
                Nie znaleziono kursów pasujących do podanych kryteriów.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-network-pattern bg-cover bg-fixed opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="glass-panel max-w-4xl mx-auto p-10 text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Nie możesz się zdecydować?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami, a pomożemy Ci wybrać kurs najlepiej dopasowany do Twoich potrzeb i celów.
              Oferujemy również szkolenia indywidualne i korporacyjne.
            </p>
            <a 
              href="/contact" 
              className="btn-primary inline-flex items-center justify-center"
            >
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offer;
