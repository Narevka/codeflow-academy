
import { Navigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const MyCourses = () => {
  const { user, loading } = useAuth();

  // Przekieruj, jeśli użytkownik nie jest zalogowany
  if (!loading && !user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-1 py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Moje kursy
            </h1>
            <p className="text-white/70 text-lg">
              Tutaj znajdziesz wszystkie swoje zakupione kursy
            </p>
          </div>

          <div className="glass-card p-8">
            {/* Lista kursów użytkownika */}
            <div className="text-center text-white/50 py-10">
              <p>Nie masz jeszcze żadnych kursów.</p>
              <p>Sprawdź naszą ofertę i zacznij naukę już dziś!</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyCourses;
