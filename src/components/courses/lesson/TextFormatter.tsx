
import React from "react";

const TextFormatter = ({ text }: { text: string }) => {
  if (!text) return null;
  
  // Split by double line breaks to separate paragraphs
  const paragraphs = text.split('\n\n');
  
  return (
    <>
      {paragraphs.map((paragraph, index) => {
        // Check if paragraph is a numbered list item (starts with a number followed by a dot)
        if (/^\d+\.\s/.test(paragraph)) {
          return (
            <div key={index} className="mb-6">
              <p className="mb-2 text-base leading-relaxed">{paragraph}</p>
            </div>
          );
        }
        // Check if paragraph is a section heading (all caps or short without punctuation)
        else if (
          (paragraph.length < 100 && !paragraph.includes('.')) ||
          paragraph.toUpperCase() === paragraph
        ) {
          return (
            <h3 key={index} className="text-xl font-bold text-primary mt-8 mb-4">
              {paragraph}
            </h3>
          );
        }
        return <p key={index} className="mb-4 text-base leading-relaxed">{paragraph}</p>;
      })}
    </>
  );
};

export default TextFormatter;
