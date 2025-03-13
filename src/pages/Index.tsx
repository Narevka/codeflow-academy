
import Hero from "../components/home/Hero";
import CourseFeatures from "../components/home/CourseFeatures";
import CourseProgram from "../components/home/CourseProgram";
import Faq from "../components/home/Faq";
import CallToAction from "../components/home/CallToAction";
import VideoPlayer from "../components/ui/VideoPlayer";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Course Trailer Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-network-pattern bg-cover bg-center bg-no-repeat opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Dołącz do świata LangChain i Flowise AI
            </h2>
            <p className="text-white/70 text-lg">
              Zobacz, jak łatwo można tworzyć zaawansowane aplikacje AI bez pisania kodu.
              Poniższy film wprowadzi Cię w świat możliwości, które oferuje nasz kurs.
            </p>
          </div>

          <VideoPlayer 
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
            poster="/public/lovable-uploads/af41dcbe-22e6-4e86-a8f3-d5878acd2e55.png"
            title="Wprowadzenie do kursu Flowise AI"
          />
        </div>
      </section>

      {/* Why Choose This Course */}
      <CourseFeatures />

      {/* Course Program */}
      <CourseProgram />

      {/* Demo Course Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-network-pattern bg-cover bg-fixed opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Zobacz przykładową lekcję
            </h2>
            <p className="text-white/70 text-lg">
              Zanim zdecydujesz się na zakup, sprawdź jakość naszych materiałów. 
              Poniżej znajdziesz fragment lekcji z kursu.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <VideoPlayer 
                src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
                poster="/public/lovable-uploads/2fd49611-13df-49b8-a6fe-2b83183c4e83.png"
                title="Lekcja 1: Wprowadzenie do Flowise"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Co zyskasz z tej lekcji:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 bg-magenta/20 p-1 rounded-full">
                    <Check size={20} className="text-magenta" />
                  </span>
                  <span className="text-white/80">
                    Zrozumiesz podstawowe założenia platformy Flowise AI i jej możliwości
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 bg-magenta/20 p-1 rounded-full">
                    <Check size={20} className="text-magenta" />
                  </span>
                  <span className="text-white/80">
                    Poznasz interfejs użytkownika i nauczysz się poruszać po platformie
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 bg-magenta/20 p-1 rounded-full">
                    <Check size={20} className="text-magenta" />
                  </span>
                  <span className="text-white/80">
                    Zobaczysz, jak stworzyć prosty przepływ pracy (workflow) w Flowise
                  </span>
                </li>
              </ul>
              <div className="pt-4">
                <Link to="/offer" className="btn-primary flex items-center justify-center md:inline-flex md:justify-start">
                  Odkryj pełny kurs
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Achieve */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-network-pattern bg-cover bg-fixed opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Co osiągniesz dzięki kursowi
            </h2>
            <p className="text-white/70 text-lg">
              Po ukończeniu kursu będziesz posiadać umiejętności, które pozwolą Ci tworzyć
              zaawansowane aplikacje AI bez pisania kodu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 animate-fade-in animate-delay-100">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Tworzenie chatbotów AI
              </h3>
              <p className="text-white/70">
                Nauczysz się budować inteligentne chatboty, które mogą odpowiadać na pytania,
                udzielać pomocy i prowadzić naturalne rozmowy z użytkownikami.
              </p>
            </div>
            <div className="glass-card p-6 animate-fade-in animate-delay-200">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Przetwarzanie dokumentów
              </h3>
              <p className="text-white/70">
                Stworzysz aplikacje, które potrafią analizować, podsumowywać i wydobywać
                informacje z dokumentów tekstowych, PDF i innych źródeł danych.
              </p>
            </div>
            <div className="glass-card p-6 animate-fade-in animate-delay-300">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Integracja z API
              </h3>
              <p className="text-white/70">
                Poznasz sposoby łączenia swoich aplikacji AI z zewnętrznymi serwisami
                i bazami danych, rozszerzając ich możliwości.
              </p>
            </div>
            <div className="glass-card p-6 animate-fade-in animate-delay-100">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Automatyzacja procesów
              </h3>
              <p className="text-white/70">
                Będziesz potrafił automatyzować powtarzalne zadania wykorzystując
                sztuczną inteligencję i przepływy pracy.
              </p>
            </div>
            <div className="glass-card p-6 animate-fade-in animate-delay-200">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Asystenci personalni
              </h3>
              <p className="text-white/70">
                Stworzysz własnych asystentów AI, którzy mogą pomagać w zarządzaniu
                zadaniami, przypomnieniami i innymi codziennymi aktywnościami.
              </p>
            </div>
            <div className="glass-card p-6 animate-fade-in animate-delay-300">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Publikacja i wdrażanie
              </h3>
              <p className="text-white/70">
                Nauczysz się, jak publikować swoje aplikacje AI, aby były dostępne
                dla innych użytkowników poprzez API lub interfejsy webowe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-network-pattern bg-cover bg-fixed opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="glass-panel max-w-3xl mx-auto p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-magenta/20 flex items-center justify-center">
              <Check size={32} className="text-magenta" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              30-dniowa gwarancja satysfakcji
            </h2>
            <p className="text-white/70 text-lg mb-6">
              Wierzymy, że nasz kurs dostarczy Ci ogrom wartościowej, praktycznej wiedzy. Jednak jeśli z jakiegoś powodu uznasz, że nie spełnia Twoich oczekiwań, masz 30 dni na rezygnację. Wystarczy, że napiszesz na info@toknowai.pl, a zwrócimy Ci pieniądze — bez zadawania zbędnych pytań i bez ryzyka!
            </p>
            <Link 
              to="/offer" 
              className="btn-primary inline-flex items-center justify-center"
            >
              Rozpocznij swoją przygodę z AI już dziś!
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq />

      {/* Call to Action */}
      <CallToAction />

      <Footer />
    </div>
  );
};

export default Index;
