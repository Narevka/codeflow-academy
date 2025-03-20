
import { Lesson } from "@/types/course";
import { useState, useEffect } from "react";
import { LessonVideoSection, AdditionalVideosSection, TextFormatter } from "./lesson";

interface LessonContentProps {
  lesson: Lesson;
}

const LessonContent = ({ lesson }: LessonContentProps) => {
  const [isMuxVideo, setIsMuxVideo] = useState(false);
  const [playbackId, setPlaybackId] = useState<string>("");
  
  // Set up the video source based on the videoUrl format
  useEffect(() => {
    if (lesson.videoUrl?.startsWith('mux:')) {
      setIsMuxVideo(true);
      setPlaybackId(lesson.videoUrl);
    } else {
      setIsMuxVideo(false);
    }
  }, [lesson.videoUrl]);

  return (
    <div className="space-y-6 w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{lesson.displayTitle || lesson.title}</h1>
      
      {lesson.additionalVideos && lesson.additionalVideos.length > 0 && (
        <AdditionalVideosSection videos={lesson.additionalVideos} />
      )}
      
      {lesson.videoUrl && <LessonVideoSection lesson={lesson} />}
      
      {lesson.description && (
        <div className="prose max-w-none mt-6 text-gray-700">
          <TextFormatter text={lesson.description} />
        </div>
      )}
    </div>
  );
};

export default LessonContent;
