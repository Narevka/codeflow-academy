
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface BillingToggleProps {
  billingCycle: "monthly" | "yearly";
  setBillingCycle: (value: "monthly" | "yearly") => void;
}

const BillingToggle = ({ billingCycle, setBillingCycle }: BillingToggleProps) => {
  return (
    <div className="flex justify-center items-center mb-8 space-x-4">
      <RadioGroup 
        value={billingCycle} 
        onValueChange={(value) => setBillingCycle(value as "monthly" | "yearly")}
        className="flex bg-white/5 p-1 rounded-full"
      >
        <div className="relative">
          <RadioGroupItem 
            value="monthly" 
            id="monthly" 
            className="sr-only peer" 
          />
          <label 
            htmlFor="monthly"
            className={`cursor-pointer px-4 py-2 rounded-full text-sm transition-all ${
              billingCycle === "monthly" 
                ? "bg-magenta text-white font-medium" 
                : "text-white/70 hover:text-white"
            }`}
          >
            Miesięcznie
          </label>
        </div>
        
        <div className="relative">
          <RadioGroupItem 
            value="yearly" 
            id="yearly" 
            className="sr-only peer" 
          />
          <label 
            htmlFor="yearly"
            className={`cursor-pointer px-4 py-2 rounded-full text-sm transition-all flex items-center ${
              billingCycle === "yearly" 
                ? "bg-magenta text-white font-medium" 
                : "text-white/70 hover:text-white"
            }`}
          >
            Rocznie
            <span className="ml-2 bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">
              -20%
            </span>
          </label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default BillingToggle;
