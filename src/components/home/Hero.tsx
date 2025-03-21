
"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import DemoSignupSheet from "./DemoSignupSheet";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Twórz",
    },
    {
      text: "potężne",
    },
    {
      text: "aplikacje",
    },
    {
      text: "oparte na",
    },
    {
      text: "Flowise AI",
      className: "gradient-text",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-neutral-200 text-xs sm:text-base">
        Zostań ekspertem AI bez pisania kodu!
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link to="/offer" className="btn-primary w-full sm:w-auto flex items-center justify-center">
          Rozpocznij teraz
          <ArrowRight size={18} className="ml-2" />
        </Link>
        <DemoSignupSheet 
          trigger={
            <button className="btn-secondary w-full sm:w-auto flex items-center justify-center">
              Zobacz przykładową lekcję
            </button>
          }
        />
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-dark-purple">
      {/* Animated light effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple/20 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-magenta/20 rounded-full filter blur-3xl animate-pulse-slow animate-delay-200" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <TypewriterEffectSmoothDemo />
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in animate-delay-200">
            Nasz kurs pomoże Ci zbudować zaawansowane aplikacje oparte na sztucznej inteligencji bez konieczności posiadania wiedzy programistycznej. Nauczysz się wykorzystywać platformę Flowise AI do tworzenia chatbotów, asystentów AI i innych narzędzi.
          </p>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 80C672 80 768 70 864 70C960 70 1056 80 1152 80C1248 80 1344 70 1392 65L1440 60V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z" fill="#1A1F2C"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
