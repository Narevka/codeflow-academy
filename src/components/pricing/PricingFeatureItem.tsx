
import { Check, X } from "lucide-react";
import { PricingFeature } from "@/types/pricing";

interface PricingFeatureItemProps {
  feature: PricingFeature;
}

const PricingFeatureItem = ({ feature }: PricingFeatureItemProps) => {
  return (
    <li className="flex items-start">
      <span className={`mr-2 mt-0.5 ${feature.included ? "text-green-500" : "text-red-500"}`}>
        {feature.included ? (
          <Check className="h-5 w-5" />
        ) : (
          <X className="h-5 w-5" />
        )}
      </span>
      <span className={`text-sm ${
        feature.highlight 
          ? "text-black dark:text-white font-medium" 
          : "text-black/80 dark:text-white/80"
      }`}>
        {feature.text}
      </span>
    </li>
  );
};

export default PricingFeatureItem;
