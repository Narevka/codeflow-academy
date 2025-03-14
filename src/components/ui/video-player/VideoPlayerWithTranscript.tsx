
import { useState } from "react";
import { cn } from "@/lib/utils";
import { TranscriptSegment } from "@/types/course";
import TranscriptPanel from "./TranscriptPanel";
import MuxVideoPlayer from "./MuxVideoPlayer";
import StandardVideoPlayer from "./StandardVideoPlayer";
import VideoOverlay from "./VideoOverlay";
import TranscriptToggleButton from "./TranscriptToggleButton";
import { useVideoPlayer } from "@/hooks/useVideoPlayer";

interface VideoPlayerWithTranscriptProps {
  src: string;
  poster?: string;
  title?: string;
  transcript?: TranscriptSegment[];
  showTranscript?: boolean;
  transcriptSourceFile?: string;
}

const VideoPlayerWithTranscript = ({
  src,
  poster,
  title,
  transcript: providedTranscript = [],
  showTranscript = true,
  transcriptSourceFile,
}: VideoPlayerWithTranscriptProps) => {
  const [transcriptVisible, setTranscriptVisible] = useState(showTranscript);
  
  const {
    isMuxVideo,
    playbackId,
    activeSegmentIndex,
    isFullscreen,
    transcript,
    videoRef,
    muxPlayerRef,
    transcriptRef,
    isLoadingTranscript,
    handleTimeUpdate,
    handleTranscriptClick
  } = useVideoPlayer(src, providedTranscript, transcriptSourceFile);

  const toggleTranscript = () => {
    setTranscriptVisible(prev => !prev);
  };

  return (
    <div 
      className={cn(
        "relative w-full",
        isFullscreen ? "fixed inset-0 z-50 bg-black flex" : "flex flex-col lg:flex-row gap-4"
      )}
    >
      <div className={cn(
        "aspect-video relative",
        isFullscreen ? "w-full h-full flex items-center" : 
        transcriptVisible ? "w-full lg:w-3/5" : "w-full"
      )}>
        {isMuxVideo ? (
          <MuxVideoPlayer
            ref={muxPlayerRef}
            playbackId={playbackId.replace('mux:', '')}
            title={title || "Video"}
            poster={poster}
            onTimeUpdate={handleTimeUpdate}
            isFullscreen={isFullscreen}
          />
        ) : (
          <StandardVideoPlayer
            ref={videoRef}
            src={src}
            poster={poster}
            onTimeUpdate={handleTimeUpdate}
            isFullscreen={isFullscreen}
          />
        )}
        
        <VideoOverlay />
        <TranscriptToggleButton 
          transcriptVisible={transcriptVisible} 
          onClick={toggleTranscript} 
        />
      </div>
      
      {transcriptVisible && (
        <div 
          className={cn(
            "glass-card p-4 w-full lg:w-2/5",
            isFullscreen 
              ? "fixed right-0 top-0 w-1/4 h-full overflow-y-auto z-50" 
              : "max-h-[400px] lg:max-h-[unset] lg:aspect-video"
          )}
          ref={transcriptRef}
        >
          <TranscriptPanel 
            transcript={transcript}
            activeSegmentIndex={activeSegmentIndex}
            isLoadingTranscript={isLoadingTranscript}
            onSegmentClick={handleTranscriptClick}
            isFullscreen={isFullscreen}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayerWithTranscript;
