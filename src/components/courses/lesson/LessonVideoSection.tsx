
import React, { useEffect, useState } from "react";
import { Lesson } from "@/types/course";
import { VideoPlayerWithTranscript } from "@/components/ui/video-player";
import { processAndStoreTranscript } from "@/hooks/useTranscript";
import { toast } from "sonner";

interface LessonVideoSectionProps {
  lesson: Lesson;
}

const LessonVideoSection = ({ lesson }: LessonVideoSectionProps) => {
  const [isProcessingTranscript, setIsProcessingTranscript] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  
  if (!lesson.videoUrl) {
    console.log("No video URL provided for lesson:", lesson.title);
    return null;
  }
  
  // Debug log to see what videos we're working with
  useEffect(() => {
    console.log("Video URL for lesson:", lesson.videoUrl);
    setIsVideoReady(true);
  }, [lesson.videoUrl]);
  
  // Force 1.json for Flowise videos, only use other files for specific non-Flowise videos
  let transcriptSourceFile = "1.json"; // Default for all Flowise-related videos
  
  // Only use other transcripts for specific non-Flowise videos
  if (lesson.videoUrl.includes("Tvjg623oMCLmqZqruGnWlnuFPABieZfiZ3pbX6HIoxg")) {
    transcriptSourceFile = "3.json";
  }

  useEffect(() => {
    console.log("Selected transcript source file:", transcriptSourceFile);
  }, [transcriptSourceFile]);

  // Process and store transcript if a source file is available
  useEffect(() => {
    const processTranscript = async () => {
      if (lesson.videoUrl && transcriptSourceFile && !isProcessingTranscript) {
        try {
          setIsProcessingTranscript(true);
          console.log("Starting transcript processing");
          
          const playbackId = lesson.videoUrl.startsWith('mux:') 
            ? lesson.videoUrl.replace('mux:', '') 
            : lesson.videoUrl;
            
          console.log("Using playback ID for transcript processing:", playbackId);
          
          // For Flowise videos, ensure we use 1.json
          if (playbackId === "V2H6uhyDvaXZ02dgOYeNSZkULeWye00q3rTzkQ2YZbJIw") {
            console.log("Flowise video detected, forcing use of 1.json transcript");
          }
          
          const segments = await processAndStoreTranscript(playbackId, transcriptSourceFile);
          console.log("Transcript processing complete, segments:", segments.length);
          
          if (segments.length === 0) {
            console.warn("No transcript segments were generated");
          }
        } catch (error) {
          console.error("Error processing transcript:", error);
          // Don't show toast error to user for better UX
        } finally {
          setIsProcessingTranscript(false);
        }
      }
    };
    
    if (isVideoReady) {
      processTranscript();
    }
  }, [lesson.videoUrl, transcriptSourceFile, isVideoReady]);

  return (
    <div className="w-full mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{lesson.displayTitle || lesson.title}</h2>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <VideoPlayerWithTranscript
          src={lesson.videoUrl}
          poster={lesson.thumbnailUrl}
          title={lesson.title}
          transcript={lesson.transcript}
          transcriptSourceFile={transcriptSourceFile}
        />
      </div>
    </div>
  );
};

export default LessonVideoSection;
