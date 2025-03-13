
import { PricingPlan } from "@/types/pricing";

export const getPricingPlans = (billingCycle: "monthly" | "yearly"): PricingPlan[] => [
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
