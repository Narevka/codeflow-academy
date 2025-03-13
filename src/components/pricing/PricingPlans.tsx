
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/useAuth";
import BillingToggle from "./BillingToggle";
import PricingCard from "./PricingCard";
import PricingFeatures from "./PricingFeatures";
import { getPricingPlans } from "@/data/pricingPlans";

const PricingPlans = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const pricingPlans = getPricingPlans(billingCycle);

  const handlePlanSelection = (planId: string) => {
    // Navigate to checkout page with plan information
    navigate(`/checkout?plan=${planId}&billing=${billingCycle}`);
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Wybierz plan idealny dla siebie
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Każdy plan oferuje unikalne korzyści dopasowane do Twoich potrzeb.
            Zainwestuj w swoją przyszłość z AI już dziś!
          </p>
          
          <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={plan.id}
              plan={plan}
              index={index}
              onSelectPlan={handlePlanSelection}
            />
          ))}
        </div>

        <PricingFeatures />
      </div>
    </section>
  );
};

export default PricingPlans;
