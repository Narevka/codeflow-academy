
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import CourseContent from "../components/landing/CourseContent";
import Instructors from "../components/landing/Instructors";
import Testimonials from "../components/landing/Testimonials";
import Pricing from "../components/landing/Pricing";
import Faq from "../components/landing/Faq";
import Cta from "../components/landing/Cta";
import Guarantee from "../components/landing/Guarantee";

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
          ? 'bg-gray-950 text-white' 
          : 'bg-white text-gray-900'
      }`}
    >
      <Header />
      
      <main>
        <Hero />
        <Features />
        <CourseContent />
        <Instructors />
        <Testimonials />
        <Pricing />
        <Guarantee />
        <Faq />
        <Cta />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
