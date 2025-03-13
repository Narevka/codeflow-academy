
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-dark-purple relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-primary opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple/20 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-magenta/20 rounded-full filter blur-3xl animate-pulse-slow animate-delay-200" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-panel max-w-4xl mx-auto p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Gotowy, by rozwinąć swoje umiejętności AI?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Dołącz do tysięcy uczniów, którzy już tworzą innowacyjne aplikacje oparte na sztucznej inteligencji. 
            Bez kodowania, bez stresu - z ToKnowAI!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/offer" className="btn-primary w-full sm:w-auto flex items-center justify-center group">
              Zapisz się na kurs
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-white/50 mt-4 sm:mt-0">
              30-dniowa gwarancja zwrotu pieniędzy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
