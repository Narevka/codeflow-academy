
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Guarantee = () => {
  return (
    <section className="py-20 bg-black relative">
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
  );
};

export default Guarantee;
