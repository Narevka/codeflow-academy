
import MuxPlayer from "@mux/mux-player-react";
import { useState, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

const VideoPlayer = ({ src, poster, title }: VideoPlayerProps) => {
  const [isMuxVideo, setIsMuxVideo] = useState(false);
  const [playbackId, setPlaybackId] = useState<string>("");
  
  // Set up the video source based on the src format
  useEffect(() => {
    if (src?.startsWith('mux:')) {
      setIsMuxVideo(true);
      setPlaybackId(src.replace('mux:', ''));
    } else {
      setIsMuxVideo(false);
    }
  }, [src]);

  return (
    <div className="aspect-video w-full max-w-4xl mx-auto relative">
      {isMuxVideo ? (
        <MuxPlayer
          streamType="on-demand"
          playbackId={playbackId}
          metadata={{
            video_title: title || "Video",
            player_name: "Mux Player",
          }}
          thumbnailTime={0}
          poster={poster}
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
      ) : (
        // Fallback for non-Mux videos
        <video
          src={src}
          controls
          className="w-full h-full rounded-xl"
          poster={poster}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          style={{
            aspectRatio: "16/9",
            backgroundColor: "#000",
          }}
        />
      )}
      
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
  );
};

export default VideoPlayer;
