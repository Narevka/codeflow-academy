
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

interface VideoPlayerControlsProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  progress: number;
  onPlayPause: () => void;
  onProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleMute: () => void;
  onToggleFullScreen: () => void;
}

const VideoPlayerControls = ({
  isPlaying,
  currentTime,
  duration,
  volume,
  isMuted,
  progress,
  onPlayPause,
  onProgressClick,
  onVolumeChange,
  onToggleMute,
  onToggleFullScreen,
}: VideoPlayerControlsProps) => {
  // Format time in MM:SS
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300">
      {/* Progress bar */}
      <div 
        className="relative h-1 bg-white/20 rounded-full mb-4 cursor-pointer"
        onClick={onProgressClick}
      >
        <div 
          className="absolute top-0 left-0 h-full bg-magenta rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            className="text-white hover:text-magenta transition-colors"
            onClick={onPlayPause}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <div className="text-white/80 text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button 
              className="text-white hover:text-magenta transition-colors"
              onClick={onToggleMute}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={onVolumeChange}
              className="w-16 md:w-24 appearance-none h-1 bg-white/20 rounded-full"
            />
          </div>
          
          <button 
            className="text-white hover:text-magenta transition-colors"
            onClick={onToggleFullScreen}
          >
            <Maximize size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerControls;
