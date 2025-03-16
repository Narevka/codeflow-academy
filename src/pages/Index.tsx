
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroEnhanced from "../components/home/HeroEnhanced";
import CourseValueProposition from "../components/home/CourseValueProposition";
import CourseProgram from "../components/home/CourseProgram";
import CourseOutcomes from "../components/home/CourseOutcomes";
import Guarantee from "../components/home/Guarantee";
import EnhancedFaq from "../components/home/EnhancedFaq";
import CallToAction from "../components/home/CallToAction";
import ContactFormSection from "../components/home/ContactFormSection";
import { useTheme } from "@/contexts/ThemeContext";

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${
      theme === 'dark' 
        ? 'bg-black text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <Header />

      {/* Hero Section */}
      <HeroEnhanced />

      {/* Why Choose This Course */}
      <CourseValueProposition />

      {/* Course Program */}
      <CourseProgram />

      {/* What You Will Achieve */}
      <CourseOutcomes />

      {/* Guarantee Section */}
      <Guarantee />

      {/* FAQ Section */}
      <EnhancedFaq />

      {/* Contact Form */}
      <ContactFormSection />

      {/* Call to Action */}
      <CallToAction />

      <Footer />
    </div>
  );
};

export default Index;
