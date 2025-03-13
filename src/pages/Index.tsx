
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import CourseTrailer from "../components/home/CourseTrailer";
import CourseFeatures from "../components/home/CourseFeatures";
import DemoCourse from "../components/home/DemoCourse";
import CourseAchievements from "../components/home/CourseAchievements";
import CourseProgram from "../components/home/CourseProgram";
import Guarantee from "../components/home/Guarantee";
import Faq from "../components/home/Faq";
import CallToAction from "../components/home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Course Trailer Section */}
      <CourseTrailer />

      {/* Why Choose This Course */}
      <CourseFeatures />

      {/* Course Program */}
      <CourseProgram />

      {/* Demo Course Section */}
      <DemoCourse />

      {/* What You Will Achieve */}
      <CourseAchievements />

      {/* Guarantee Section */}
      <Guarantee />

      {/* FAQ Section */}
      <Faq />

      {/* Call to Action */}
      <CallToAction />

      <Footer />
    </div>
  );
};

export default Index;
