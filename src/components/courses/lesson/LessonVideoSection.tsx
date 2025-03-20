
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
  if (lesson.videoUrl.includes("V2H6uhyDvaXZ02dgOYeNSZkULeWye00q3rTzkQ2YZbJIw")) {
    transcriptSourceFile = "1.json";
  } else if (lesson.videoUrl.includes("Tvjg623oMCLmqZqruGnWlnuFPABieZfiZ3pbX6HIoxg")) {
    transcriptSourceFile = "3.json";
  }

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
