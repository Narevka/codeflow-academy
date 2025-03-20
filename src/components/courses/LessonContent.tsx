
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
  const [showDetailedTerms, setShowDetailedTerms] = useState(false);
  
  // Check if this is the Flowise introduction lesson that contains the detailed terms
  useEffect(() => {
    if (lesson.id === "flowise-introduction" && lesson.description) {
      setShowDetailedTerms(true);
    } else {
      setShowDetailedTerms(false);
    }
  }, [lesson.id, lesson.description]);
  
  // Set up the video source based on the videoUrl format
  useEffect(() => {
    if (lesson.videoUrl?.startsWith('mux:')) {
      setIsMuxVideo(true);
      setPlaybackId(lesson.videoUrl);
    } else {
      setIsMuxVideo(false);
    }
  }, [lesson.videoUrl]);

  // Extract main content (before the detailed terms section)
  const mainContent = showDetailedTerms && lesson.description
    ? lesson.description.split('## Dogłębniejsze objaśnienie terminów:')[0]
    : lesson.description;

  return (
    <div className="space-y-6 w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{lesson.displayTitle || lesson.title}</h1>
      
      {lesson.additionalVideos && lesson.additionalVideos.length > 0 && (
        <AdditionalVideosSection videos={lesson.additionalVideos} />
      )}
      
      {lesson.videoUrl && <LessonVideoSection lesson={lesson} />}
      
      {mainContent && (
        <div className="mt-6 rounded-lg border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-transparent p-6 shadow-sm">
          <div className="prose max-w-none text-gray-700">
            <TextFormatter text={mainContent} />
          </div>
        </div>
      )}
      
      {showDetailedTerms && (
        <>
          <div className="my-8">
            <h2 className="text-xl font-semibold mb-4 text-center gradient-text">
              Dogłębniejsze objaśnienie terminów AI
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Rozwiń sekcje poniżej, aby zapoznać się ze szczegółowymi opisami kluczowych terminów związanych z AI.
            </p>
            <AITermsAccordion />
          </div>
        </>
      )}
    </div>
  );
};

export default LessonContent;
