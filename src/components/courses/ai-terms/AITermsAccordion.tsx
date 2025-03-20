
import { useState } from "react";
import {
  Accordion,
} from "@/components/ui/accordion";
import AITermItem from "./AITermItem";
import FilterButton from "./FilterButton";
import { termItems } from "./termsData";
import { 
  LLMContent, 
  TokenContent, 
  PromptContent, 
  ConversationContent, 
  ModelPerformanceContent, 
  FalconContent 
} from "./AITermContents";

const AITermsAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>("item-1");
  
  const handleFilterClick = (itemId: string) => {
    setActiveAccordion(itemId);
  };

  const renderContent = (itemId: string) => {
    switch (itemId) {
      case "item-1": return <LLMContent />;
      case "item-2": return <TokenContent />;
      case "item-3": return <PromptContent />;
      case "item-4": return <ConversationContent />;
      case "item-5": return <ModelPerformanceContent />;
      case "item-6": return <FalconContent />;
      default: return null;
    }
  };
  
  return (
    <div className="mt-8 mb-12 max-w-4xl mx-auto">
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {termItems.map((item) => (
          <FilterButton
            key={item.id}
            id={item.id}
            label={item.buttonLabel}
            isActive={activeAccordion === item.id}
            onClick={handleFilterClick}
          />
        ))}
      </div>
      
      <div className="rounded-lg border border-purple/20 overflow-hidden shadow-lg">
        <Accordion
          type="single"
          collapsible
          value={activeAccordion || undefined}
          onValueChange={(value) => setActiveAccordion(value)}
          className="w-full"
        >
          {termItems.map((item) => (
            <AITermItem
              key={item.id}
              id={item.id}
              title={item.title}
              icon={item.icon}
              isActive={activeAccordion === item.id}
            >
              {renderContent(item.id)}
            </AITermItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default AITermsAccordion;
