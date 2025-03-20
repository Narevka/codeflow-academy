
import React from "react";
import { cn } from "@/lib/utils";

const TextFormatter = ({ text, className }: { text: string; className?: string }) => {
  if (!text) return null;
  
  // Split by double line breaks to separate paragraphs
  const paragraphs = text.split('\n\n');
  
  return (
    <div className={cn("lesson-text", className)}>
      {paragraphs.map((paragraph, index) => {
        // Check if the paragraph is a heading (starting with # or ##)
        if (paragraph.startsWith('# ')) {
          return (
            <h1 key={index} className="text-2xl md:text-3xl font-bold mb-6 text-magenta">
              {paragraph.substring(2)}
            </h1>
          );
        }
        
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-xl md:text-2xl font-semibold mt-8 mb-4 gradient-text">
              {paragraph.substring(3)}
            </h2>
          );
        }
        
        // Check if paragraph is a numbered list item (starts with a number followed by a dot)
        if (/^\d+\.\s/.test(paragraph)) {
          return (
            <div key={index} className="mb-6">
              <p className="mb-2 text-base leading-relaxed text-gray-800">{paragraph}</p>
            </div>
          );
        }
        
        // Check if paragraph is a section heading (all caps or short without punctuation)
        else if (
          (paragraph.length < 100 && !paragraph.includes('.')) ||
          paragraph.toUpperCase() === paragraph
        ) {
          return (
            <h3 key={index} className="text-lg font-bold text-magenta mt-8 mb-4">
              {paragraph}
            </h3>
          );
        }
        
        return (
          <p key={index} className="mb-5 text-base leading-relaxed text-gray-700">
            {paragraph}
          </p>
        );
      })}
    </div>
  );
};

export default TextFormatter;
