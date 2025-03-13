
import { Award, Video, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PricingFeatures = () => {
  const navigate = useNavigate();
  
  return (
    <div className="mt-16 glass-panel p-8 rounded-xl">
      <h3 className="text-2xl font-bold mb-4 gradient-text">Dlaczego warto wybrać nasze plany?</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-12 h-12 rounded-full bg-magenta/20 flex items-center justify-center mb-4">
            <Award className="h-6 w-6 text-magenta" />
          </div>
          <h4 className="text-lg font-medium mb-2">Certyfikacja</h4>
          <p className="text-white/70">Potwierdź swoje umiejętności oficjalnym certyfikatem uznawanym w branży.</p>
        </div>
        
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center mb-4">
            <Video className="h-6 w-6 text-purple" />
          </div>
          <h4 className="text-lg font-medium mb-2">Konsultacje 1:1</h4>
          <p className="text-white/70">Indywidualne konsultacje są świetnym sposobem na zagwarantowanie wdrożenia Twoich projektów.</p>
        </div>
        
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
            <Mail className="h-6 w-6 text-blue-500" />
          </div>
          <h4 className="text-lg font-medium mb-2">Dedykowane materiały</h4>
          <p className="text-white/70">W przeciągu tygodnia dla Twojej niszy przygotujemy listę narzędzi i rozwiązań dopasowanych do Twoich celów.</p>
        </div>
      </div>
      
      <div className="bg-white/5 p-6 rounded-lg">
        <p className="text-white/80 text-center">
          Nie możesz się zdecydować? Skontaktuj się z nami, a pomożemy Ci wybrać plan najlepiej dopasowany do Twoich potrzeb!
        </p>
        <div className="flex justify-center mt-4">
          <Button 
            onClick={() => navigate("/contact")}
            variant="outline" 
            className="border-magenta/50 hover:bg-magenta/10 text-white"
          >
            Skontaktuj się z nami
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingFeatures;
