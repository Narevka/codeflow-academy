
"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { SparklesCore } from "../ui/sparkles";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { IconDotsVertical } from "@tabler/icons-react";

interface ComparisonSliderProps {
  firstImage?: string;
  secondImage?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
  beforeLabel?: string;
  afterLabel?: string;
}

export const ComparisonSlider = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
  beforeLabel = "Tradycyjne kodowanie",
  afterLabel = "Z Flowise AI"
}: ComparisonSliderProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const [isMouseOver, setIsMouseOver] = useState(false);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress =
        (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;

      setSliderXPercent(percentage);
      autoplayRef.current = setTimeout(animate, 16); // ~60fps
    };

    animate();
  }, [autoplay, autoplayDuration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  function mouseEnterHandler() {
    setIsMouseOver(true);
    stopAutoplay();
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    if (slideMode === "hover") {
      setSliderXPercent(initialSliderPercentage);
    }
    if (slideMode === "drag") {
      setIsDragging(false);
    }
    startAutoplay();
  }

  const handleStart = useCallback(
    (clientX: number) => {
      if (slideMode === "drag") {
        setIsDragging(true);
      }
    },
    [slideMode]
  );

  const handleEnd = useCallback(() => {
    if (slideMode === "drag") {
      setIsDragging(false);
    }
  }, [slideMode]);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return;
      if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = (x / rect.width) * 100;
        requestAnimationFrame(() => {
          setSliderXPercent(Math.max(0, Math.min(100, percent)));
        });
      }
    },
    [slideMode, isDragging]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => handleStart(e.clientX),
    [handleStart]
  );
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => handleMove(e.clientX),
    [handleMove]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!autoplay) {
        handleStart(e.touches[0].clientX);
      }
    },
    [handleStart, autoplay]
  );

  const handleTouchEnd = useCallback(() => {
    if (!autoplay) {
      handleEnd();
    }
  }, [handleEnd, autoplay]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!autoplay) {
        handleMove(e.touches[0].clientX);
      }
    },
    [handleMove, autoplay]
  );

  return (
    <div
      ref={sliderRef}
      className={cn("w-full h-full overflow-hidden rounded-xl", className)}
      style={{
        position: "relative",
        cursor: slideMode === "drag" ? "grab" : "col-resize",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <AnimatePresence initial={false}>
        <motion.div
          className="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-indigo-500 to-transparent"
          style={{
            left: `${sliderXPercent}%`,
            top: "0",
            zIndex: 40,
          }}
          transition={{ duration: 0 }}
        >
          <div className="w-36 h-full [mask-image:radial-gradient(100px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-indigo-400 via-transparent to-transparent z-20 opacity-50" />
          <div className="w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-cyan-400 via-transparent to-transparent z-10 opacity-100" />
          <div className="w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-10 [mask-image:radial-gradient(100px_at_left,white,transparent)]">
            <MemoizedSparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          {showHandlebar && (
            <div className="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40]">
              <IconDotsVertical className="h-4 w-4 text-black" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
        <AnimatePresence initial={false}>
          {firstImage ? (
            <motion.div
              className={cn(
                "absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none overflow-hidden",
                firstImageClassName
              )}
              style={{
                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
              }}
              transition={{ duration: 0 }}
            >
              <img
                alt={beforeLabel}
                src={firstImage}
                className={cn(
                  "absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none",
                  firstImageClassName
                )}
                draggable={false}
              />
            </motion.div>
          ) : (
            <motion.div
              className={cn(
                "absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none overflow-hidden",
                firstImageClassName
              )}
              style={{
                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
              }}
              transition={{ duration: 0 }}
            >
              {/* Code editor content for the left side */}
              <div className="absolute inset-0 bg-[#1e1e1e] text-white font-mono overflow-y-auto">
                <div className="p-4 text-sm">
                  <pre className="whitespace-pre-wrap">
                    <div className="flex">
                      <span className="text-gray-500 mr-4">1</span>
                      <span className="text-[#569cd6]">import</span>
                      <span className="text-white"> OpenAI </span>
                      <span className="text-[#569cd6]">from</span>
                      <span className="text-white"> </span>
                      <span className="text-[#ce9178]">&apos;openai&apos;</span>
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
                      <span className="text-white"> OpenAI(&#123;</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-4">4</span>
                      <span className="text-white">  apiKey: process.env.</span>
                      <span className="text-[#9cdcfe]">OPENAI_API_KEY</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-4">5</span>
                      <span className="text-white">&#125;);</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-4">6</span>
                      <span className="text-white"></span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-4">7</span>
                      <span className="text-[#569cd6]">async function</span>
                      <span className="text-[#dcdcaa]"> generateResponse</span>
                      <span className="text-white">(prompt) &#123;</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-4">8</span>
                      <span className="text-white">  </span>
                      <span className="text-[#c586c0]">try</span>
                      <span className="text-white"> &#123;</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-4">9</span>
                      <span className="text-white">    </span>
                      <span className="text-[#569cd6]">const</span>
                      <span className="text-white"> response = </span>
                      <span className="text-[#569cd6]">await</span>
                      <span className="text-white"> openai.chat.completions.create(&#123;</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-4">10</span>
                      <span className="text-white">      model: </span>
                      <span className="text-[#ce9178]">&quot;gpt-4&quot;</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-4">11</span>
                      <span className="text-white">      messages: [</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-4">12</span>
                      <span className="text-white">        &#123;</span>
                      <span className="text-[#9cdcfe]">role</span>
                      <span className="text-white">: </span>
                      <span className="text-[#ce9178]">&quot;system&quot;</span>
                      <span className="text-white">, </span>
                      <span className="text-[#9cdcfe]">content</span>
                      <span className="text-white">: </span>
                      <span className="text-[#ce9178]">&quot;You are a helpful assistant.&quot;</span>
                      <span className="text-white">&#125;,</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-4">13</span>
                      <span className="text-white">        &#123;</span>
                      <span className="text-[#9cdcfe]">role</span>
                      <span className="text-white">: </span>
                      <span className="text-[#ce9178]">&quot;user&quot;</span>
                      <span className="text-white">, </span>
                      <span className="text-[#9cdcfe]">content</span>
                      <span className="text-white">: prompt&#125;,</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-4">14</span>
                      <span className="text-white">      ],</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-4">15</span>
                      <span className="text-white">    &#125;);</span>
                    </div>
                  </pre>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence initial={false}>
        {secondImage ? (
          <motion.img
            className={cn(
              "absolute top-0 left-0 z-[19] rounded-2xl w-full h-full select-none",
              secondImageClassname
            )}
            alt={afterLabel}
            src={secondImage}
            draggable={false}
          />
        ) : (
          <div className="absolute top-0 left-0 z-[19] rounded-2xl w-full h-full select-none">
            <img 
              src="/lovable-uploads/f64a3252-7933-4dfb-b697-21e384387f01.png" 
              alt={afterLabel} 
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </AnimatePresence>
      
      {/* Labels */}
      <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-sm text-white">
        {beforeLabel}
      </div>
      <div className="absolute bottom-4 right-4 rounded-full bg-white/70 px-3 py-1 text-sm text-black">
        {afterLabel}
      </div>
    </div>
  );
};

const MemoizedSparklesCore = React.memo(SparklesCore);

export default ComparisonSlider;
