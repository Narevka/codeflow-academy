
import React from "react";
import { Lesson } from "@/types/course";
import { VideoPlayerWithTranscript } from "@/components/ui/video-player";

interface LessonVideoSectionProps {
  lesson: Lesson;
}

const LessonVideoSection = ({ lesson }: LessonVideoSectionProps) => {
  if (!lesson.videoUrl) {
    return null;
  }
  
  // Determine the transcript source file based on the lesson video URL
  let transcriptSourceFile;
  if (lesson.videoUrl.includes("Tvjg623oMCLmqZqruGnWlnuFPABieZfiZ3pbX6HIoxg")) {
    transcriptSourceFile = "3.json";
  }

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-3">{lesson.displayTitle || lesson.title}</h2>
      <VideoPlayerWithTranscript
        src={lesson.videoUrl}
        poster={lesson.thumbnailUrl}
        title={lesson.title}
        transcript={lesson.transcript}
        transcriptSourceFile={transcriptSourceFile}
      />
    </div>
  );
};

export default LessonVideoSection;
