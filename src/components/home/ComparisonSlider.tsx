
"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Slider } from "../ui/slider";

interface ComparisonSliderProps {
  beforeContent: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const ComparisonSlider = ({
  beforeContent,
  afterImage,
  beforeLabel = "Tradycyjne kodowanie",
  afterLabel = "Z Flowise AI"
}: ComparisonSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle slider movement
  const handleSliderChange = useCallback((value: number[]) => {
    setSliderPosition(value[0]);
  }, []);

  // Track mouse position for direct slider control
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const newPosition = (x / rect.width) * 100;
    setSliderPosition(newPosition);
  }, [isDragging]);

  // Similar handler for touch events
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const newPosition = (x / rect.width) * 100;
    setSliderPosition(newPosition);
  }, [isDragging]);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseMove, handleTouchMove, handleMouseUp]);

  return (
    <div 
      className="relative h-full w-full overflow-hidden rounded-xl border border-black/10 shadow-xl cursor-pointer" 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Code editor (VSCode style) - always fully visible as the background */}
      <div className="absolute inset-0 bg-[#1e1e1e] text-white font-mono overflow-y-auto">
        <div className="p-4 text-sm">
          <pre className="whitespace-pre-wrap">
            <div className="flex">
              <span className="text-gray-500 mr-4">1</span>
              <span className="text-[#569cd6]">import</span>
              <span className="text-white"> OpenAI </span>
              <span className="text-[#569cd6]">from</span>
              <span className="text-white"> </span>
              <span className="text-[#ce9178]">'openai'</span>
              <span className="text-white">;</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">2</span>
              <span className="text-white"></span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">3</span>
              <span className="text-[#569cd6]">const</span>
              <span className="text-white"> openai = </span>
              <span className="text-[#569cd6]">new</span>
              <span className="text-white"> OpenAI({</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">4</span>
              <span className="text-white">  apiKey: process.env.</span>
              <span className="text-[#9cdcfe]">OPENAI_API_KEY</span>
              <span className="text-white">,</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">5</span>
              <span className="text-white">});</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">6</span>
              <span className="text-white"></span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">7</span>
              <span className="text-[#569cd6]">async function</span>
              <span className="text-[#dcdcaa]"> generateResponse</span>
              <span className="text-white">(prompt) {</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">8</span>
              <span className="text-white">  </span>
              <span className="text-[#c586c0]">try</span>
              <span className="text-white"> {</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">9</span>
              <span className="text-white">    </span>
              <span className="text-[#569cd6]">const</span>
              <span className="text-white"> response = </span>
              <span className="text-[#569cd6]">await</span>
              <span className="text-white"> openai.chat.completions.create({</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">10</span>
              <span className="text-white">      model: </span>
              <span className="text-[#ce9178]">"gpt-4"</span>
              <span className="text-white">,</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">11</span>
              <span className="text-white">      messages: [</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">12</span>
              <span className="text-white">        {</span>
              <span className="text-[#9cdcfe]">role</span>
              <span className="text-white">: </span>
              <span className="text-[#ce9178]">"system"</span>
              <span className="text-white">, </span>
              <span className="text-[#9cdcfe]">content</span>
              <span className="text-white">: </span>
              <span className="text-[#ce9178]">"You are a helpful assistant."</span>
              <span className="text-white">},</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">13</span>
              <span className="text-white">        {</span>
              <span className="text-[#9cdcfe]">role</span>
              <span className="text-white">: </span>
              <span className="text-[#ce9178]">"user"</span>
              <span className="text-white">, </span>
              <span className="text-[#9cdcfe]">content</span>
              <span className="text-white">: prompt},</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">14</span>
              <span className="text-white">      ],</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 mr-4">15</span>
              <span className="text-white">    });</span>
            </div>
          </pre>
        </div>
      </div>

      {/* After image - only visible based on slider position */}
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={afterImage} 
          alt={afterLabel} 
          className="h-full w-full object-cover"
          style={{ position: 'absolute', right: 0, width: `${100 / (sliderPosition / 100)}%` }}
        />
      </div>

      {/* Slider divider line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Slider handle */}
        <div 
          className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="absolute top-1/2 left-0 h-6 w-1 -translate-y-1/2 bg-black/20"></div>
          <div className="absolute top-1/2 right-0 h-6 w-1 -translate-y-1/2 bg-black/20"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-sm text-white">
        {beforeLabel}
      </div>
      <div className="absolute bottom-4 right-4 rounded-full bg-white/70 px-3 py-1 text-sm text-black">
        {afterLabel}
      </div>

      {/* Hidden slider for accessibility and mobile */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <Slider
          value={[sliderPosition]}
          onValueChange={handleSliderChange}
          min={0}
          max={100}
          step={0.1}
          className="z-10"
        />
      </div>
    </div>
  );
};

export default ComparisonSlider;
