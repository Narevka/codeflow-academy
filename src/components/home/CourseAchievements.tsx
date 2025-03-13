
const CourseAchievements = () => {
  return (
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
  );
};

export default CourseAchievements;
