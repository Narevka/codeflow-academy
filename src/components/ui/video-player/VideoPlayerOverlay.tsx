
import { Play } from "lucide-react";

interface VideoPlayerOverlayProps {
  isPlaying: boolean;
  title?: string;
  onPlayPause: () => void;
}

const VideoPlayerOverlay = ({ isPlaying, title, onPlayPause }: VideoPlayerOverlayProps) => {
  return (
    <>
      {title && (
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/70 to-transparent p-4">
          <h3 className="text-white font-medium">{title}</h3>
        </div>
      )}
      
      {/* Play button overlay (when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            className="bg-magenta/80 hover:bg-magenta transition-colors duration-200 rounded-full p-4 backdrop-blur-sm"
            onClick={onPlayPause}
          >
            <Play size={32} className="text-white" />
          </button>
        </div>
      )}
    </>
  );
};

export default VideoPlayerOverlay;
