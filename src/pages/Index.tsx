
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroEnhanced from "../components/home/HeroEnhanced";
import BeforeAfterSection from "../components/home/BeforeAfterSection";
import CourseProgram from "../components/home/CourseProgram";
import EnhancedFaq from "../components/home/EnhancedFaq";

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

      {/* FAQ Section */}
      <EnhancedFaq />

      <Footer />
    </div>
  );
};

export default Index;
