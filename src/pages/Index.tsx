
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Program from "../components/landing/Program";
import Benefits from "../components/landing/Benefits";
import Guarantee from "../components/landing/Guarantee";
import Faq from "../components/landing/Faq";
import ContactSection from "../components/landing/ContactSection";
import Cta from "../components/landing/Cta";
import Testimonials from "../components/landing/Testimonials";

const Index = () => {
  const { theme } = useTheme();
  
  // Apply theme class to body for global styling
  useEffect(() => {
    document.body.className = theme;
    return () => {
      document.body.className = '';
    };
  }, [theme]);
  
  return (
    <div 
      className={`min-h-screen ${
        theme === 'dark' 
          ? 'bg-black text-white' 
          : 'bg-white text-gray-900'
      }`}
    >
      <Header />
      
      <main>
        <Hero />
        <Features />
        <Program />
        <Benefits />
        <Testimonials />
        <Guarantee />
        <Faq />
        <ContactSection />
        <Cta />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
