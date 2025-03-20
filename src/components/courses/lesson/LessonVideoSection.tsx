
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
  
  if (!lesson.videoUrl) {
    console.log("No video URL provided for lesson:", lesson.title);
    return null;
  }
  
  // Debug log to see what videos we're working with
  console.log("Video URL for lesson:", lesson.videoUrl);
  
  // Determine the transcript source file based on the lesson video URL
  let transcriptSourceFile;
  if (lesson.videoUrl.includes("V2H6uhyDvaXZ02dgOYeNSZkULeWye00q3rTzkQ2YZbJIw")) {
    transcriptSourceFile = "1.json";
  } else if (lesson.videoUrl.includes("Tvjg623oMCLmqZqruGnWlnuFPABieZfiZ3pbX6HIoxg")) {
    transcriptSourceFile = "3.json";
  } else if (lesson.videoUrl.includes("DvS00xCCQJzWvBSQKKdHNl8sszgX7hXlVjFjAA8AJtA")) {
    // For Flowise AI videos
    transcriptSourceFile = "2.json";
  } else {
    // Default transcript file for other videos
    transcriptSourceFile = "2.json";
  }

  console.log("Selected transcript source file:", transcriptSourceFile);

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
          
          const segments = await processAndStoreTranscript(playbackId, transcriptSourceFile);
          console.log("Transcript processing complete, segments:", segments.length);
          
          if (segments.length === 0) {
            console.warn("No transcript segments were generated");
          }
        } catch (error) {
          console.error("Error processing transcript:", error);
          toast.error("Nie udało się przetworzyć transkrypcji");
        } finally {
          setIsProcessingTranscript(false);
        }
      }
    };
    
    processTranscript();
  }, [lesson.videoUrl, transcriptSourceFile]);

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
