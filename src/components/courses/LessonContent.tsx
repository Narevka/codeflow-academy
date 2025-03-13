
import { Lesson } from "@/types/course";
import MuxPlayer from "@mux/mux-player-react";
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
      setPlaybackId(lesson.videoUrl.replace('mux:', ''));
    } else {
      setIsMuxVideo(false);
    }
  }, [lesson.videoUrl]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">{lesson.title}</h1>
      
      {lesson.videoUrl && (
        <div className="mb-8 relative">
          {isMuxVideo ? (
            <div className="aspect-video w-full max-w-4xl mx-auto">
              <MuxPlayer
                streamType="on-demand"
                playbackId={playbackId}
                metadata={{
                  video_title: lesson.title,
                  player_name: "Mux Player",
                }}
                thumbnailTime={0}
                poster={lesson.thumbnailUrl}
                className="w-full h-full"
                crossOrigin="anonymous"
                disablePictureInPicture={true}
                nohotkeys={true}
                style={{
                  position: "relative",
                  aspectRatio: "16/9",
                  backgroundColor: "#000",
                  width: "100%",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                }}
              />
              
              {/* Add protection layer to prevent screen capture */}
              <div 
                className="absolute inset-0 pointer-events-none select-none"
                style={{
                  mixBlendMode: "overlay",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  background: "radial-gradient(circle 100px at var(--x, 50%) var(--y, 50%), transparent 10%, rgba(0, 0, 0, 0.5) 60%)",
                }}
                onMouseMove={(e) => {
                  const target = e.currentTarget;
                  const rect = target.getBoundingClientRect();
                  target.style.setProperty('--x', `${e.clientX - rect.left}px`);
                  target.style.setProperty('--y', `${e.clientY - rect.top}px`);
                }}
              />
            </div>
          ) : (
            // Fallback for non-Mux videos
            <div className="aspect-video w-full max-w-4xl mx-auto">
              <video
                src={lesson.videoUrl}
                controls
                className="w-full h-full rounded-xl"
                poster={lesson.thumbnailUrl}
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "#000",
                }}
              />
            </div>
          )}
        </div>
      )}
      
      {lesson.description && (
        <div className="prose prose-invert max-w-none">
          <p>{lesson.description}</p>
        </div>
      )}
    </div>
  );
};

export default LessonContent;
