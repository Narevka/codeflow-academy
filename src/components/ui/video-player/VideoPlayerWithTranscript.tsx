
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
}

const VideoPlayerWithTranscript = ({
  src,
  poster,
  title,
  transcript: providedTranscript = [],
  showTranscript = true,
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
  } = useVideoPlayer(src, providedTranscript);

  const toggleTranscript = () => {
    setTranscriptVisible(prev => !prev);
  };

  return (
    <div 
      className={cn(
        "relative",
        isFullscreen ? "fixed inset-0 z-50 bg-black flex" : "grid grid-cols-1 lg:grid-cols-12 gap-4 w-full max-w-6xl mx-auto"
      )}
    >
      <div className={cn(
        "aspect-video relative",
        isFullscreen ? "w-full h-full flex items-center" : 
        transcriptVisible ? "lg:col-span-7" : "lg:col-span-12"
      )}>
        {isMuxVideo ? (
          <MuxVideoPlayer
            ref={muxPlayerRef}
            playbackId={playbackId}
            title={title}
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
            "lg:col-span-5 glass-card p-4 aspect-video h-full",
            isFullscreen ? "" : ""
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
