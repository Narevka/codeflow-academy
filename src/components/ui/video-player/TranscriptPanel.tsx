
import { cn } from "@/lib/utils";
import { TranscriptSegment } from "@/types/course";
import { FC } from "react";

interface TranscriptPanelProps {
  transcript: TranscriptSegment[];
  activeSegmentIndex: number;
  isLoadingTranscript: boolean;
  onSegmentClick: (startTime: number) => void;
  isFullscreen?: boolean;
}

// Format time as MM:SS
const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const TranscriptPanel: FC<TranscriptPanelProps> = ({
  transcript,
  activeSegmentIndex,
  isLoadingTranscript,
  onSegmentClick,
  isFullscreen = false
}) => {
  return (
    <div className={cn(
      "h-full flex flex-col",
      isFullscreen 
        ? "fixed right-0 top-0 w-1/4 bg-white/95 p-4 overflow-y-auto z-50 shadow-lg" 
        : "overflow-y-auto"
    )}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-800">Transkrypcja</h3>
        <div className="text-xs text-gray-500">
          {transcript.length} segmentów
        </div>
      </div>
      
      {isLoadingTranscript ? (
        <div className="flex flex-col items-center justify-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Pobieranie transkrypcji...</p>
        </div>
      ) : transcript.length > 0 ? (
        <div className="space-y-2 flex-grow overflow-y-auto h-[calc(100%-40px)]">
          {transcript.map((segment, index) => (
            <div 
              key={index}
              className={cn(
                "transcript-segment p-2 rounded cursor-pointer transition-colors",
                activeSegmentIndex === index 
                  ? "bg-blue-100 border-l-4 border-blue-600" 
                  : "hover:bg-gray-100"
              )}
              onClick={() => onSegmentClick(segment.startTime)}
            >
              <div className="text-xs text-gray-500 mb-1">
                {formatTime(segment.startTime)}
              </div>
              <p className="text-sm text-gray-800">
                {segment.text}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-40">
          <p className="text-gray-600">Brak dostępnej transkrypcji dla tego wideo.</p>
        </div>
      )}
    </div>
  );
};

export default TranscriptPanel;
