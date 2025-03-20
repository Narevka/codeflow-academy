
import { useState, useEffect } from "react";
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Check if this is the Flowise intro video
  const isFlowiseIntro = src?.includes("V2H6uhyDvaXZ02dgOYeNSZkULeWye00q3rTzkQ2YZbJIw");
  
  useEffect(() => {
    console.log("VideoPlayerWithTranscript mounted with:", { 
      src, 
      transcriptLength: providedTranscript?.length || 0,
      showTranscript, 
      transcriptSourceFile,
      isFlowiseIntro
    });
    
    // Log the actual transcript content to debug
    if (providedTranscript && providedTranscript.length > 0) {
      console.log("Provided transcript segments:", providedTranscript.length);
      console.log("First segment:", providedTranscript[0]);
    }
  }, [src, providedTranscript, showTranscript, transcriptSourceFile, isFlowiseIntro]);
  
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

  // Log what transcript is being used by the component
  useEffect(() => {
    console.log("Current active transcript has segments:", transcript.length);
    if (transcript.length > 0) {
      console.log("First segment text:", transcript[0].text);
    }
  }, [transcript]);

  const toggleTranscript = () => {
    setTranscriptVisible(prev => !prev);
  };
  
  // Handle video errors
  const handleVideoError = (error: any) => {
    console.error("Video playback error:", error);
    setErrorMessage("Nie udało się załadować wideo. Sprawdź połączenie internetowe lub spróbuj ponownie później.");
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
        {errorMessage ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white p-4 text-center">
            <div>
              <p className="mb-2">{errorMessage}</p>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setErrorMessage(null)}
              >
                Spróbuj ponownie
              </button>
            </div>
          </div>
        ) : isMuxVideo ? (
          <MuxVideoPlayer
            ref={muxPlayerRef}
            playbackId={playbackId}
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
            onError={handleVideoError}
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
