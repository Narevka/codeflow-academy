"use client";
import React from "react";
import { Link } from "react-router-dom";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const HeroEnhanced = () => {
  const words = [
    {
      text: "Twórz",
    },
    {
      text: "potężne",
    },
    {
      text: "aplikacje",
    },
    {
      text: "oparte",
    },
    {
      text: "na",
    },
    {
      text: "Flowise AI.",
      className: "text-blue-500",
    },
  ];
  
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center justify-center h-[40rem]">
        <p className="text-neutral-600 text-xs sm:text-base">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <Link to="/offer" className="w-40 h-10 rounded-xl bg-black border border-transparent text-white text-sm flex items-center justify-center">
            Rozpocznij teraz
          </Link>
          <Link to="/demo-lesson" className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm flex items-center justify-center">
            Zobacz demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroEnhanced;
