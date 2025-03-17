
"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Slider } from "../ui/slider";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const ComparisonSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
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
      {/* Before image (full width, fixed position) */}
      <div className="absolute inset-0 h-full w-full">
        <img 
          src={beforeImage} 
          alt={beforeLabel} 
          className="h-full w-full object-cover"
        />
      </div>

      {/* After image (clipped by the slider position) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden" 
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={afterImage} 
          alt={afterLabel} 
          className="h-full w-full object-cover"
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
