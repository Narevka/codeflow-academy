
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, X, Clock, Mail, Phone, Video, Award, Sparkles } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router-dom";

interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: PricingFeature[];
  popularChoice?: boolean;
  ctaText: string;
}

const Offer = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const pricingPlans: PricingPlan[] = [
    {
      id: "basic",
      name: "Basic",
      description: "Idealny do rozpoczęcia przygody z AI",
      price: billingCycle === "monthly" ? 199 : 1990,
      duration: billingCycle === "monthly" ? "/ miesiąc" : "/ rok",
      features: [
        { text: "Dostęp 24/7 (na 1 miesiąc)", included: true },
        { 
          text: "Dostęp do chatu z topowymi modelami AI (GPT, DeepSeek, Gemini, LLaMa)", 
          included: true,
          highlight: true 
        },
        { 
          text: "Równowartość 100PLN - oszczędzaj anulując swoje subskrypcje OpenAI", 
          included: true 
        },
        { text: "Egzamin i certyfikat", included: false },
        { text: "Indywidualne konsultacje", included: false },
        { text: "Wsparcie merytoryczne", included: false },
      ],
      ctaText: "Wybierz Basic"
    },
    {
      id: "standard",
      name: "Standard",
      description: "Najczęściej wybierany przez klientów",
      price: billingCycle === "monthly" ? 249 : 2490,
      duration: billingCycle === "monthly" ? "/ miesiąc" : "/ rok",
      popularChoice: true,
      features: [
        { text: "Dostęp 24/7 (na 3 miesiące)", included: true },
        { 
          text: "Dostęp do chatu z topowymi modelami AI (GPT, DeepSeek, Gemini, LLaMa)", 
          included: true,
          highlight: true 
        },
        { 
          text: "Równowartość 300PLN - oszczędzaj anulując swoje subskrypcje OpenAI", 
          included: true 
        },
        { text: "Egzamin i certyfikat", included: true },
        { text: "Zniżka na kolejne indywidualne konsultacje (-10%)", included: true },
        { text: "Wsparcie merytoryczne: e-mail", included: true },
      ],
      ctaText: "Wybierz Standard"
    },
    {
      id: "premium",
      name: "Premium VIP",
      description: "Full Deployment dla profesjonalistów",
      price: billingCycle === "monthly" ? 895 : 8950,
      duration: billingCycle === "monthly" ? "/ miesiąc" : "/ rok",
      features: [
        { text: "Dostęp 24/7 (na 6 miesięcy)", included: true },
        { 
          text: "Dostęp do chatu z topowymi modelami AI (GPT, DeepSeek, Gemini, LLaMa)", 
          included: true,
          highlight: true 
        },
        { 
          text: "Równowartość 600PLN - oszczędzaj anulując swoje subskrypcje OpenAI", 
          included: true 
        },
        { text: "Egzamin i certyfikat", included: true },
        { 
          text: "3 godziny indywidualnych konsultacji z naszym specjalistą", 
          included: true,
          highlight: true 
        },
        { text: "Zniżka na kolejne indywidualne konsultacje (-30%)", included: true },
        { text: "Wsparcie merytoryczne: e-mail, Teams, telefon", included: true },
        { 
          text: "Dedykowane materiały dostosowane do Twojej branży", 
          included: true,
          highlight: true 
        },
      ],
      ctaText: "Wybierz Premium"
    }
  ];

  const handlePlanSelection = (planId: string) => {
    // Here you would implement your purchase flow
    navigate(`/checkout?plan=${planId}&billing=${billingCycle}`);
  };

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
              Wybierz plan idealny dla siebie
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Każdy plan oferuje unikalne korzyści dopasowane do Twoich potrzeb.
              Zainwestuj w swoją przyszłość z AI już dziś!
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center items-center mb-8 space-x-4">
              <RadioGroup 
                value={billingCycle} 
                onValueChange={(value) => setBillingCycle(value as "monthly" | "yearly")}
                className="flex bg-white/5 p-1 rounded-full"
              >
                <div className="relative">
                  <RadioGroupItem 
                    value="monthly" 
                    id="monthly" 
                    className="sr-only peer" 
                  />
                  <label 
                    htmlFor="monthly"
                    className={`cursor-pointer px-4 py-2 rounded-full text-sm transition-all ${
                      billingCycle === "monthly" 
                        ? "bg-magenta text-white font-medium" 
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    Miesięcznie
                  </label>
                </div>
                
                <div className="relative">
                  <RadioGroupItem 
                    value="yearly" 
                    id="yearly" 
                    className="sr-only peer" 
                  />
                  <label 
                    htmlFor="yearly"
                    className={`cursor-pointer px-4 py-2 rounded-full text-sm transition-all flex items-center ${
                      billingCycle === "yearly" 
                        ? "bg-magenta text-white font-medium" 
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    Rocznie
                    <span className="ml-2 bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">
                      -20%
                    </span>
                  </label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex"
              >
                <Card 
                  className={`w-full overflow-hidden relative transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popularChoice ? "border-magenta" : "border-border"
                  }`}
                >
                  {plan.popularChoice && (
                    <div className="absolute top-0 right-0">
                      <Badge className="bg-magenta text-white rounded-tl-none rounded-br-none rounded-tr-lg rounded-bl-lg">
                        Popularny wybór
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className={`${plan.popularChoice ? "bg-magenta/10" : ""}`}>
                    <CardTitle className="text-2xl font-bold flex items-center">
                      {plan.id === "premium" && <Sparkles className="mr-2 h-5 w-5 text-yellow-400" />}
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-6">
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-white/70 ml-1">PLN + VAT {plan.duration}</span>
                    </div>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`mr-2 mt-0.5 ${feature.included ? "text-green-500" : "text-red-500"}`}>
                            {feature.included ? (
                              <Check className="h-5 w-5" />
                            ) : (
                              <X className="h-5 w-5" />
                            )}
                          </span>
                          <span className={`text-sm ${
                            feature.highlight 
                              ? "text-white font-medium" 
                              : "text-white/80"
                          }`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      onClick={() => handlePlanSelection(plan.id)}
                      className={`w-full ${
                        plan.popularChoice 
                          ? "bg-magenta hover:bg-magenta/90" 
                          : plan.id === "premium" 
                            ? "bg-purple hover:bg-purple/90" 
                            : ""
                      }`}
                      size="lg"
                    >
                      {plan.ctaText}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offer;
