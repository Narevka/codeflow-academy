
import { Lesson } from "@/types/course";
import { useState, useEffect } from "react";
import { LessonVideoSection, AdditionalVideosSection, TextFormatter } from "./lesson";
import { AITermsAccordion } from "./ai-terms";
import { Trophy } from "lucide-react";

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
      <div className="flex items-center gap-3">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{lesson.displayTitle || lesson.title}</h1>
        {lesson.isQuest && (
          <div className="flex items-center bg-amber-100 rounded-full px-3 py-1 text-amber-600">
            <Trophy size={16} className="mr-1" />
            <span className="text-sm font-medium">Quest</span>
          </div>
        )}
      </div>
      
      {lesson.videoUrl && <LessonVideoSection lesson={lesson} />}
      
      {lesson.description && (
        <div className="prose max-w-none mt-6 text-gray-700">
          <TextFormatter text={lesson.description} />
        </div>
      )}

      {lesson.additionalVideos && lesson.additionalVideos.length > 0 && (
        <AdditionalVideosSection videos={lesson.additionalVideos} />
      )}
      
      {/* AI Terms accordion section */}
      <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Related AI Concepts</h2>
        <AITermsAccordion />
      </div>
    </div>
  );
};

export default LessonContent;
