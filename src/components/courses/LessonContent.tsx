
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

  return (
    <div className="space-y-6 w-full">
      <h1 className="text-2xl md:text-3xl font-bold">{lesson.displayTitle || lesson.title}</h1>
      
      {lesson.videoUrl && (
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-3">Wprowadzenie do Flowise</h2>
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
          <p>{lesson.description}</p>
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
                  transcriptSourceFile="2.json"
                />
              )}
              {video.description && (
                <div className="prose prose-invert max-w-none mt-4">
                  {video.description.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.includes(':')) {
                      const [heading, ...content] = paragraph.split('\n\n');
                      return (
                        <div key={idx} className="mb-4">
                          <h3 className="text-lg font-semibold mb-2">{heading}</h3>
                          <p>{content.join('\n\n')}</p>
                        </div>
                      );
                    }
                    return <p key={idx} className="mb-4">{paragraph}</p>;
                  })}
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
