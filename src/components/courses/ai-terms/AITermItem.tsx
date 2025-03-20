
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LucideIcon } from "lucide-react";

interface AITermItemProps {
  id: string;
  title: string;
  icon: LucideIcon;
  isActive: boolean;
  children: React.ReactNode;
}

const AITermItem = ({ id, title, icon: Icon, isActive, children }: AITermItemProps) => {
  return (
    <AccordionItem value={id} className="border-b border-purple/10">
      <AccordionTrigger className="py-5 px-6 hover:bg-gradient-to-r hover:from-magenta/5 hover:to-purple/5 transition-colors">
        <div className="flex items-center">
          <Icon className="text-magenta mr-3 flex-shrink-0" />
          <span className="text-xl font-medium">{title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 py-5 bg-gradient-to-br from-white to-purple/5">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};

export default AITermItem;
