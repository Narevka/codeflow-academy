
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import HeroSection from "../components/home/HeroSection";
import ValueProposition from "../components/home/ValueProposition";
import CourseModules from "../components/home/CourseModules";
import Outcomes from "../components/home/Outcomes";
import GuaranteeSection from "../components/home/GuaranteeSection";
import FaqSection from "../components/home/FaqSection";
import Contact from "../components/home/Contact";
import CtaSection from "../components/home/CtaSection";

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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen ${
        theme === 'dark' 
          ? 'bg-black text-white' 
          : 'bg-white text-gray-900'
      }`}
    >
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Why Choose This Course */}
        <ValueProposition />
        
        {/* Course Program */}
        <CourseModules />
        
        {/* What You Will Achieve */}
        <Outcomes />
        
        {/* Guarantee Section */}
        <GuaranteeSection />
        
        {/* FAQ Section */}
        <FaqSection />
        
        {/* Contact Form */}
        <Contact />
        
        {/* Call to Action */}
        <CtaSection />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Index;
