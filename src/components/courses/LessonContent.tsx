
import { Lesson } from "@/types/course";
import { VideoPlayerWithTranscript } from "@/components/ui/video-player";
import { useState, useEffect } from "react";

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

  const formatDescription = (text: string) => {
    if (!text) return null;
    
    return text.split('\n\n').map((paragraph, idx) => {
      // Check if paragraph is a heading (starts with a number followed by dot and space)
      if (/^\d+\.\s/.test(paragraph)) {
        return (
          <div key={idx} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{paragraph}</h3>
          </div>
        );
      }
      
      // Check if it's a heading without numbers (typically section titles)
      else if (paragraph && !paragraph.includes(' ') && paragraph.length < 50) {
        return <h2 key={idx} className="text-xl font-bold mt-6 mb-3">{paragraph}</h2>;
      }
      
      // Regular paragraph
      return <p key={idx} className="mb-4">{paragraph}</p>;
    });
  };

  return (
    <div className="space-y-6 w-full">
      <h1 className="text-2xl md:text-3xl font-bold">{lesson.displayTitle || lesson.title}</h1>
      
      {lesson.videoUrl && (
        <div className="w-full">
          <VideoPlayerWithTranscript
            src={lesson.videoUrl}
            poster={lesson.thumbnailUrl}
            title={lesson.title}
            transcript={lesson.transcript}
          />
        </div>
      )}
      
      {lesson.description && (
        <div className="prose prose-invert max-w-none mt-6">
          {formatDescription(lesson.description)}
        </div>
      )}

      {lesson.additionalVideos && lesson.additionalVideos.length > 0 && (
        <div className="space-y-8 mt-10">
          {lesson.additionalVideos.map((video, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-semibold">
                {video.title || `Dodatkowe wideo ${index + 1}`}
              </h2>
              {video.videoUrl && (
                <VideoPlayerWithTranscript
                  src={video.videoUrl}
                  poster={video.thumbnailUrl}
                  title={video.title || `Dodatkowe wideo ${index + 1}`}
                  transcript={video.transcript}
                />
              )}
              {video.description && (
                <div className="prose prose-invert max-w-none mt-4">
                  {formatDescription(video.description)}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonContent;
