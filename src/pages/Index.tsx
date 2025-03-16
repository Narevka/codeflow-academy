
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroEnhanced from "../components/home/HeroEnhanced";
import CourseTrailer from "../components/home/CourseTrailer";
import CourseValueProposition from "../components/home/CourseValueProposition";
import CourseProgram from "../components/home/CourseProgram";
import DemoCourse from "../components/home/DemoCourse";
import CourseOutcomes from "../components/home/CourseOutcomes";
import Guarantee from "../components/home/Guarantee";
import EnhancedFaq from "../components/home/EnhancedFaq";
import CallToAction from "../components/home/CallToAction";
import ContactFormSection from "../components/home/ContactFormSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <HeroEnhanced />

      {/* Course Trailer Section */}
      <CourseTrailer />

      {/* Why Choose This Course */}
      <CourseValueProposition />

      {/* Course Program */}
      <CourseProgram />

      {/* Demo Course Section */}
      <DemoCourse />

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
