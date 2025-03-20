
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
  const [directTranscript, setDirectTranscript] = useState<any[]>([]);
  
  if (!lesson.videoUrl) {
    console.log("No video URL provided for lesson:", lesson.title);
    return null;
  }
  
  // Debug log to see what videos we're working with
  useEffect(() => {
    console.log("Video URL for lesson:", lesson.videoUrl);
    setIsVideoReady(true);
  }, [lesson.videoUrl]);
  
  // Directly provide the Flowise transcript for this specific video ID
  useEffect(() => {
    const playbackId = lesson.videoUrl?.startsWith('mux:') 
        ? lesson.videoUrl.replace('mux:', '') 
        : lesson.videoUrl;
        
    // For Flowise intro video, directly use hardcoded transcript
    if (playbackId === "V2H6uhyDvaXZ02dgOYeNSZkULeWye00q3rTzkQ2YZbJIw") {
      console.log("Directly providing hardcoded transcript for Flowise intro video");
      setDirectTranscript([
        { text: "Witaj w kursie Flowise AI. Dzisiaj omówimy podstawy tego narzędzia.", startTime: 0, endTime: 7 },
        { text: "Flowise to narzędzie open-source pozwalające na tworzenie aplikacji AI bez kodowania.", startTime: 7, endTime: 15 },
        { text: "W tej lekcji pokażę, jak rozpocząć pracę z tym narzędziem.", startTime: 15, endTime: 22 },
        { text: "Flowise umożliwia tworzenie zaawansowanych przepływów AI poprzez graficzny interfejs.", startTime: 22, endTime: 30 },
        { text: "Dzięki temu możemy szybko budować aplikacje wykorzystujące AI bez rozbudowanego kodowania.", startTime: 30, endTime: 37 },
        { text: "W kolejnych lekcjach omówimy instalację i konfigurację narzędzia.", startTime: 37, endTime: 45 }
      ]);
    }
  }, [lesson.videoUrl]);
  
  // Always use 1.json for Flowise videos
  let transcriptSourceFile = "1.json";
  
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
          
          // Skip processing if we have a direct transcript
          if (directTranscript.length > 0) {
            console.log("Using direct transcript, skipping processing");
            setIsProcessingTranscript(false);
            return;
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
    
    if (isVideoReady && directTranscript.length === 0) {
      processTranscript();
    }
  }, [lesson.videoUrl, transcriptSourceFile, isVideoReady, directTranscript]);

  return (
    <div className="w-full mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{lesson.displayTitle || lesson.title}</h2>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <VideoPlayerWithTranscript
          src={lesson.videoUrl}
          poster={lesson.thumbnailUrl}
          title={lesson.title}
          transcript={directTranscript.length > 0 ? directTranscript : undefined}
          transcriptSourceFile={transcriptSourceFile}
        />
      </div>
    </div>
  );
};

export default LessonVideoSection;
