
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroEnhanced from "../components/home/HeroEnhanced";
import BeforeAfterSection from "../components/home/BeforeAfterSection";
import CourseProgram from "../components/home/CourseProgram";
import CourseOutcomes from "../components/home/CourseOutcomes";
import EnhancedFaq from "../components/home/EnhancedFaq";
import CallToAction from "../components/home/CallToAction";
import ContactFormSection from "../components/home/ContactFormSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <HeroEnhanced />

      {/* Before/After Comparison Section */}
      <BeforeAfterSection />

      {/* Course Program */}
      <CourseProgram />

      {/* What You Will Achieve */}
      <CourseOutcomes />

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
