
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroEnhanced from "../components/home/HeroEnhanced";
import BeforeAfterSection from "../components/home/BeforeAfterSection";
import CourseProgram from "../components/home/CourseProgram";
import CourseOutcomes from "../components/home/CourseOutcomes";
import Guarantee from "../components/home/Guarantee";
import EnhancedFaq from "../components/home/EnhancedFaq";
import CallToAction from "../components/home/CallToAction";
import ContactFormSection from "../components/home/ContactFormSection";
import CourseTrailer from "../components/home/CourseTrailer";
import DemoCourse from "../components/home/DemoCourse";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <HeroEnhanced />

      {/* Before/After Comparison Section */}
      <BeforeAfterSection />

      {/* Course Trailer */}
      <CourseTrailer />

      {/* Demo Course Section */}
      <DemoCourse />

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
