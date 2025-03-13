
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PricingPlans from "@/components/pricing/PricingPlans";

const Offer = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative">
        <div className="absolute inset-0 bg-network-pattern bg-cover bg-center bg-no-repeat opacity-10" />
        <div className="absolute inset-0 bg-gradient-primary opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <PricingPlans />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offer;
