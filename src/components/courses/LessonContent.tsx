
import { Lesson } from "@/types/course";
import { VideoPlayerWithTranscript } from "@/components/ui/video-player";
import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";

interface LessonContentProps {
  lesson: Lesson;
}

const LessonContent = ({ lesson }: LessonContentProps) => {
  const [isMuxVideo, setIsMuxVideo] = useState(false);
  const [playbackId, setPlaybackId] = useState<string>("");
  const [videoError, setVideoError] = useState<string | null>(null);
  
  // Set up the video source based on the videoUrl format
  useEffect(() => {
    if (lesson.videoUrl?.startsWith('mux:')) {
      setIsMuxVideo(true);
      // Remove the 'mux:' prefix to get the actual playback ID
      setPlaybackId(lesson.videoUrl.replace('mux:', ''));
      setVideoError(null);
    } else if (lesson.videoUrl) {
      setIsMuxVideo(false);
      setVideoError(null);
    } else {
      setVideoError("Brak materiału wideo dla tej lekcji");
    }
  }, [lesson.videoUrl]);

  const handleVideoError = (error: string) => {
    setVideoError(error);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">{lesson.title}</h1>
      
      {lesson.videoUrl ? (
        videoError ? (
          <div className="bg-red-900/20 border border-red-700 rounded-xl p-6 text-center my-8">
            <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-3" />
            <h3 className="text-lg font-medium text-red-400 mb-2">Problem z odtwarzaniem wideo</h3>
            <p className="text-gray-300">{videoError}</p>
          </div>
        ) : (
          <div className="mb-8">
            <VideoPlayerWithTranscript
              src={isMuxVideo ? playbackId : lesson.videoUrl}
              poster={lesson.thumbnailUrl}
              title={lesson.title}
              transcript={lesson.transcript || []}
              showTranscript={true}
              onError={handleVideoError}
              isMuxVideo={isMuxVideo}
            />
          </div>
        )
      ) : (
        <div className="bg-amber-900/20 border border-amber-700 rounded-xl p-6 text-center my-8">
          <AlertCircle className="mx-auto h-12 w-12 text-amber-500 mb-3" />
          <h3 className="text-lg font-medium text-amber-400 mb-2">Brak materiału wideo</h3>
          <p className="text-gray-300">Dla tej lekcji nie udostępniono materiału wideo.</p>
        </div>
      )}
      
      {lesson.description && (
        <div className="prose prose-invert max-w-none mt-6">
          <p>{lesson.description}</p>
        </div>
      )}
    </div>
  );
};

export default LessonContent;
