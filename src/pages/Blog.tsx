
import { useState } from "react";
import { Search } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Jak zbudować asystenta AI z pamięcią długoterminową",
    excerpt: "Poznaj techniki implementacji pamięci długoterminowej w asystentach AI wykorzystując Flowise i LangChain.",
    date: "2023-11-15",
    author: "Anna Kowalska",
    image: "/public/lovable-uploads/abedc481-fffb-44d7-b01d-f810315d5fba.png",
    category: "Poradniki",
    slug: "asystent-ai-z-pamiecia-dlugoterminowa"
  },
  {
    id: "2",
    title: "5 najczęstszych błędów podczas tworzenia chatbotów w Flowise",
    excerpt: "Dowiedz się, jakich błędów unikać przy tworzeniu chatbotów i jak budować bardziej efektywne rozwiązania.",
    date: "2023-10-28",
    author: "Marcin Nowak",
    image: "/public/lovable-uploads/47b7ddeb-1880-457f-a354-85dfaae75dc0.png",
    category: "Najlepsze praktyki",
    slug: "5-najczestszych-bledow-chatboty-flowise"
  },
  {
    id: "3",
    title: "Integracja Flowise AI z zewnętrznymi bazami danych",
    excerpt: "Krok po kroku, jak połączyć swojego chatbota z różnymi źródłami danych i zwiększyć jego możliwości.",
    date: "2023-10-12",
    author: "Paweł Wiśniewski",
    image: "/public/lovable-uploads/2fd49611-13df-49b8-a6fe-2b83183c4e83.png",
    category: "Poradniki",
    slug: "integracja-flowise-ai-bazy-danych"
  },
  {
    id: "4",
    title: "Przyszłość no-code AI - trendy na 2024 rok",
    excerpt: "Analiza najważniejszych trendów w rozwoju narzędzi no-code do tworzenia aplikacji AI w nadchodzącym roku.",
    date: "2023-09-30",
    author: "Karolina Malinowska",
    image: "/public/lovable-uploads/1d7bf1cd-3c85-48bc-9805-e81d55d79db5.png",
    category: "Trendy",
    slug: "przyszlosc-no-code-ai-trendy-2024"
  },
  {
    id: "5",
    title: "Studium przypadku: Jak firma XYZ zwiększyła konwersje o 40% dzięki chatbotowi",
    excerpt: "Rzeczywisty przykład wdrożenia chatbota zbudowanego na Flowise AI i jego wpływ na wyniki biznesowe.",
    date: "2023-09-15",
    author: "Tomasz Kowalczyk",
    image: "/public/lovable-uploads/af41dcbe-22e6-4e86-a8f3-d5878acd2e55.png",
    category: "Studia przypadków",
    slug: "studium-przypadku-xyz-chatbot"
  }
];

const categories = ["Wszystkie", "Poradniki", "Najlepsze praktyki", "Trendy", "Studia przypadków"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("pl-PL", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Wszystkie" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
              Blog ToKnowAI
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Najnowsze artykuły, poradniki i studia przypadków na temat Flowise AI, LangChain i tworzenia aplikacji AI bez kodowania.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="text-magenta" size={20} />
              </div>
              <input
                type="text"
                placeholder="Szukaj artykułów..."
                className="bg-white/10 w-full pl-12 pr-4 py-3 rounded-full border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-magenta/50 focus:ring-1 focus:ring-magenta/30 transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full transition-colors duration-200 ${
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

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="glass-card overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
                <a href={`/blog/${post.slug}`} className="block">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-magenta text-white text-sm font-medium px-3 py-1 m-3 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-white/60 text-sm mb-3">
                      <span>{formatDate(post.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 text-white line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-white/70 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="text-magenta font-medium hover:text-magenta/80 transition-colors">
                      Czytaj więcej
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-white mb-2">Brak artykułów</h3>
              <p className="text-white/70">
                Nie znaleziono artykułów pasujących do podanych kryteriów.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
