
import { Lesson } from "@/types/course";
import { useState, useEffect } from "react";
import { LessonVideoSection, AdditionalVideosSection, TextFormatter } from "./lesson";
import { AITermsAccordion } from "./ai-terms";

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
      <h1 className="text-2xl md:text-3xl font-bold">{lesson.displayTitle || lesson.title}</h1>
      
      {lesson.videoUrl && <LessonVideoSection lesson={lesson} />}
      
      {lesson.description && (
        <div className="prose prose-invert max-w-none mt-6">
          <TextFormatter text={lesson.description} />
        </div>
      )}

      {lesson.additionalVideos && lesson.additionalVideos.length > 0 && (
        <AdditionalVideosSection videos={lesson.additionalVideos} />
      )}
      
      {/* Sekcja z terminami AI w formacie akordeonu */}
      <AITermsAccordion />
    </div>
  );
};

export default LessonContent;
