
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

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-3">Wprowadzenie do Flowise</h2>
      <VideoPlayerWithTranscript
        src={lesson.videoUrl}
        poster={lesson.thumbnailUrl}
        title={lesson.title}
        transcript={lesson.transcript}
      />
    </div>
  );
};

export default LessonVideoSection;
