
import MuxPlayer from "@mux/mux-player-react";
import { forwardRef, useEffect, useState } from "react";

interface MuxVideoPlayerProps {
  playbackId: string;
  title?: string;
  poster?: string;
  onTimeUpdate: (event: any) => void;
  isFullscreen: boolean;
}

const MuxVideoPlayer = forwardRef<any, MuxVideoPlayerProps>(
  ({ playbackId, title, poster, onTimeUpdate, isFullscreen }, ref) => {
    const [normalizedPlaybackId, setNormalizedPlaybackId] = useState<string>("");
    const [playerError, setPlayerError] = useState<string | null>(null);
    
    useEffect(() => {
      // Normalize the playbackId by removing the 'mux:' prefix if present
      const cleaned = playbackId.replace('mux:', '');
      console.log("Normalizing playbackId:", playbackId, "->", cleaned);
      setNormalizedPlaybackId(cleaned);
    }, [playbackId]);
    
    useEffect(() => {
      console.log("MuxVideoPlayer mounted with normalized playbackId:", normalizedPlaybackId);
    }, [normalizedPlaybackId]);
    
    const handleError = (event: any) => {
      console.error("Mux Player error:", event);
      setPlayerError("Video playback error. Please try again later.");
    };
    
    if (!normalizedPlaybackId) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
          Loading video player...
        </div>
      );
    }
    
    if (playerError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white p-4 text-center">
          <div>
            <p className="mb-2">{playerError}</p>
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => setPlayerError(null)}
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }
    
    return (
      <MuxPlayer
        ref={ref}
        streamType="on-demand"
        playbackId={normalizedPlaybackId}
        metadata={{
          video_title: title || "Video",
          player_name: "Mux Player",
        }}
        onTimeUpdate={onTimeUpdate}
        onError={handleError}
        thumbnailTime={0}
        poster={poster}
        className="w-full h-full"
        crossOrigin="anonymous"
        disablePictureInPicture={true}
        nohotkeys={true}
        style={{
          position: "relative",
          aspectRatio: isFullscreen ? "unset" : "16/9",
          backgroundColor: "#000",
          width: "100%",
          height: isFullscreen ? "100%" : "auto",
          borderRadius: isFullscreen ? "0" : "0.75rem",
          overflow: "hidden",
        }}
      />
    );
  }
);

MuxVideoPlayer.displayName = "MuxVideoPlayer";

export default MuxVideoPlayer;
