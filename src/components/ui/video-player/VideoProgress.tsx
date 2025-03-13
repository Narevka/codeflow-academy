
import { Progress } from "@/components/ui/progress";

interface VideoProgressProps {
  currentTime: number;
  duration: number;
}

const VideoProgress = ({ currentTime, duration }: VideoProgressProps) => {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  
  return (
    <div className="w-full mt-4">
      <Progress value={progress} className="h-1" />
      <div className="flex justify-between mt-1 text-xs text-white/70">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

// Format time as MM:SS
const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default VideoProgress;
