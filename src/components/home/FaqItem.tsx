
import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircleQuestion } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItemProps {
  question: string;
  answer: string;
  category?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => {
  return (
    <div className="overflow-hidden">
      <button
        className="w-full text-left p-6 flex justify-between items-center focus:outline-none transition-colors hover:bg-gray-50"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-start">
          <MessageCircleQuestion size={20} className="text-magenta flex-shrink-0 mt-1 mr-3" />
          <span className="text-xl font-medium text-gray-800">{question}</span>
        </div>
        <span className="ml-4 flex-shrink-0 text-magenta">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-gray-50"
          >
            <div className="p-6 pt-0 pl-14">
              <p className="text-gray-600">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
