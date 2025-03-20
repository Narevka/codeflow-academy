
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
    return null;
  }
  
  // Determine the transcript source file based on the lesson video URL
  let transcriptSourceFile;
  if (lesson.videoUrl.includes("V2H6uhyDvaXZ02dgOYeNSZkULeWye00q3rTzkQ2YZbJIw")) {
    transcriptSourceFile = "1.json";
  } else if (lesson.videoUrl.includes("Tvjg623oMCLmqZqruGnWlnuFPABieZfiZ3pbX6HIoxg")) {
    transcriptSourceFile = "3.json";
  }

  // Process and store transcript if a source file is available
  useEffect(() => {
    const processTranscript = async () => {
      if (lesson.videoUrl && transcriptSourceFile && !isProcessingTranscript) {
        try {
          setIsProcessingTranscript(true);
          const playbackId = lesson.videoUrl.startsWith('mux:') 
            ? lesson.videoUrl.replace('mux:', '') 
            : lesson.videoUrl;
            
          await processAndStoreTranscript(playbackId, transcriptSourceFile);
          console.log("Transcript processing complete");
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
