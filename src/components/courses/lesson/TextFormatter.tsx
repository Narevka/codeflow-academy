
import React, { Fragment } from "react";
import { CloudInstallationDiagram } from "../ai-terms";

interface TextFormatterProps {
  text: string;
  isInstallationLesson?: boolean;
}

const TextFormatter = ({ text, isInstallationLesson = false }: TextFormatterProps) => {
  if (!text) return null;
  
  // Split by double line breaks to separate paragraphs
  const paragraphs = text.split('\n\n');
  
  // For the installation lesson, we need to insert the diagram at a specific point
  const prototypingTextMarker = "Szybkie Testowanie i Prototypowanie: Działając lokalnie, masz szybki dostęp do środowiska testowego. Każda zmiana może być natychmiast sprawdzona bez potrzeby synchronizowania z zewnętrznymi serwerami.";
  
  return (
    <>
      {paragraphs.map((paragraph, index) => {
        // Check if paragraph is a numbered list item (starts with a number followed by a dot)
        if (/^\d+\.\s/.test(paragraph)) {
          return (
            <Fragment key={index}>
              <div className="mb-6">
                <p className="mb-2 text-base leading-relaxed text-white">{paragraph}</p>
              </div>
              {/* Insert diagram after the prototyping paragraph if this is the installation lesson */}
              {isInstallationLesson && paragraph.includes(prototypingTextMarker) && (
                <CloudInstallationDiagram />
              )}
            </Fragment>
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
        return <p key={index} className="mb-4 text-base leading-relaxed text-white">{paragraph}</p>;
      })}
    </>
  );
};

export default TextFormatter;
