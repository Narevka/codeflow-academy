
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface StandardVideoPlayerProps {
  src: string;
  poster?: string;
  onTimeUpdate: (event: any) => void;
  isFullscreen: boolean;
  onError?: (error: any) => void;
}

const StandardVideoPlayer = forwardRef<HTMLVideoElement, StandardVideoPlayerProps>(
  ({ src, poster, onTimeUpdate, isFullscreen, onError }, ref) => {
    return (
      <video
        ref={ref}
        src={src}
        controls
        className={cn(
          "w-full rounded-xl",
          isFullscreen ? "h-full object-contain" : "h-full"
        )}
        poster={poster}
        onTimeUpdate={onTimeUpdate}
        onError={onError}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        style={{
          aspectRatio: isFullscreen ? "unset" : "16/9",
          backgroundColor: "#000",
        }}
      />
    );
  }
);

StandardVideoPlayer.displayName = "StandardVideoPlayer";

export default StandardVideoPlayer;
