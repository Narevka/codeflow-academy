
import MuxPlayer from "@mux/mux-player-react";
import { forwardRef, useEffect } from "react";

interface MuxVideoPlayerProps {
  playbackId: string;
  title?: string;
  poster?: string;
  onTimeUpdate: (event: any) => void;
  isFullscreen: boolean;
}

const MuxVideoPlayer = forwardRef<any, MuxVideoPlayerProps>(
  ({ playbackId, title, poster, onTimeUpdate, isFullscreen }, ref) => {
    // Normalize the playbackId
    const normalizedPlaybackId = playbackId.replace('mux:', '');
    
    useEffect(() => {
      console.log("MuxVideoPlayer mounted with playbackId:", normalizedPlaybackId);
    }, [normalizedPlaybackId]);
    
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
