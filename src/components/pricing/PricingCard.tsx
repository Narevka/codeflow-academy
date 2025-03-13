
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PricingFeatureItem from "./PricingFeatureItem";
import { PricingPlan } from "@/types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
  onSelectPlan: (planId: string) => void;
}

const PricingCard = ({ plan, index, onSelectPlan }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex"
    >
      <Card 
        className={`w-full overflow-hidden relative transition-all duration-300 hover:transform hover:scale-105 ${
          plan.popularChoice ? "border-magenta" : "border-border"
        }`}
      >
        {plan.popularChoice && (
          <div className="absolute top-0 right-0">
            <Badge className="bg-magenta text-white rounded-tl-none rounded-br-none rounded-tr-lg rounded-bl-lg">
              Popularny wybór
            </Badge>
          </div>
        )}
        
        <CardHeader className={`${plan.popularChoice ? "bg-magenta/10" : ""}`}>
          <CardTitle className="text-2xl font-bold flex items-center">
            {plan.id === "premium" && <Sparkles className="mr-2 h-5 w-5 text-yellow-400" />}
            {plan.name}
          </CardTitle>
          <CardDescription className="text-white/70">
            {plan.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="mb-6">
            <span className="text-4xl font-bold">{plan.price}</span>
            <span className="text-white/70 ml-1">PLN + VAT {plan.duration}</span>
          </div>
          
          <ul className="space-y-3">
            {plan.features.map((feature, i) => (
              <PricingFeatureItem key={i} feature={feature} />
            ))}
          </ul>
        </CardContent>
        
        <CardFooter>
          <Button 
            onClick={() => onSelectPlan(plan.id)}
            className={`w-full ${
              plan.popularChoice 
                ? "bg-magenta hover:bg-magenta/90" 
                : plan.id === "premium" 
                  ? "bg-purple hover:bg-purple/90" 
                  : ""
            }`}
            size="lg"
          >
            {plan.ctaText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
