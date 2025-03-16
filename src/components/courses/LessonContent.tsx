
import { Lesson } from "@/types/course";
import { useState, useEffect } from "react";
import { LessonVideoSection, AdditionalVideosSection, TextFormatter } from "./lesson";
import { AITermsAccordion, CloudInstallationDiagram } from "./ai-terms";

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

  // Check if this is the installation lesson
  const isInstallationLesson = lesson.id === "lesson-2-1";

  return (
    <div className="space-y-6 w-full">
      <h1 className="text-2xl md:text-3xl font-bold">{lesson.displayTitle || lesson.title}</h1>
      
      {lesson.videoUrl && <LessonVideoSection lesson={lesson} />}
      
      {lesson.description && (
        <div className="prose prose-invert max-w-none mt-6">
          <TextFormatter text={lesson.description} />
          
          {/* Add the cloud installation diagram right after the text description for installation lesson */}
          {isInstallationLesson && <CloudInstallationDiagram />}
        </div>
      )}

      {lesson.additionalVideos && lesson.additionalVideos.length > 0 && (
        <AdditionalVideosSection videos={lesson.additionalVideos} />
      )}
      
      {/* AI Terms Accordion */}
      <AITermsAccordion />
    </div>
  );
};

export default LessonContent;
