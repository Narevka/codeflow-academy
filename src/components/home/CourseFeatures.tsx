
import { Brain, Bot, Code, Target, Rocket, Lightbulb } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay: string;
}) => {
  return (
    <div className={`glass-card p-6 animate-fade-in ${delay}`}>
      <div className="feature-icon">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const CourseFeatures = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-network-pattern bg-cover bg-fixed opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Dlaczego warto wybrać ten kurs?
          </h2>
          <p className="text-white/70 text-lg">
            Nasz kurs to kompleksowe podejście do tworzenia aplikacji AI bez kodowania. 
            Zyskaj umiejętności, które zmienią Twoją karierę.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Target} 
            title="Praktyczne podejście" 
            description="Kurs koncentruje się na praktycznych umiejętnościach, które możesz natychmiast zastosować w swoich projektach."
            delay="animate-delay-100"
          />
          <FeatureCard 
            icon={Rocket} 
            title="Szybkie efekty" 
            description="Już po pierwszych lekcjach będziesz w stanie tworzyć proste aplikacje wykorzystujące modele językowe."
            delay="animate-delay-200"
          />
          <FeatureCard 
            icon={Lightbulb} 
            title="Innowacyjne rozwiązania" 
            description="Poznaj najnowsze trendy i możliwości wykorzystania AI w rozwiązywaniu rzeczywistych problemów."
            delay="animate-delay-300"
          />
          <FeatureCard 
            icon={Brain} 
            title="Poznaj potencjał AI" 
            description="Zrozum, jak działają duże modele językowe i jak wykorzystać ich potencjał w swoich projektach."
            delay="animate-delay-100"
          />
          <FeatureCard 
            icon={Bot} 
            title="Automatyzacja procesów" 
            description="Naucz się automatyzować zadania i procesy wykorzystując możliwości sztucznej inteligencji."
            delay="animate-delay-200"
          />
          <FeatureCard 
            icon={Code} 
            title="Bez programowania" 
            description="Twórz zaawansowane rozwiązania bez konieczności pisania kodu - wszystko poprzez intuicyjny interfejs."
            delay="animate-delay-300"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
