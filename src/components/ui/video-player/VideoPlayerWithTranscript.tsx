
import MuxPlayer from "@mux/mux-player-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { TranscriptSegment } from "@/types/course";
import { useTranscript } from "@/hooks/useTranscript";
import TranscriptPanel from "./TranscriptPanel";

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
  const [isMuxVideo, setIsMuxVideo] = useState(false);
  const [playbackId, setPlaybackId] = useState<string>("");
  const [currentTime, setCurrentTime] = useState(0);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState<number>(-1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [transcriptVisible, setTranscriptVisible] = useState(showTranscript);
  const [transcript, setTranscript] = useState<TranscriptSegment[]>(providedTranscript);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const muxPlayerRef = useRef<any>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { 
    data: autoTranscript, 
    isLoading: isLoadingTranscript 
  } = useTranscript(
    isMuxVideo ? playbackId : undefined
  );
  
  useEffect(() => {
    if (src?.startsWith('mux:')) {
      setIsMuxVideo(true);
      setPlaybackId(src);
    } else {
      setIsMuxVideo(false);
    }
  }, [src]);

  useEffect(() => {
    if (providedTranscript && providedTranscript.length > 0) {
      console.log("Using provided transcript with length:", providedTranscript.length);
      setTranscript(providedTranscript);
    } else if (autoTranscript && autoTranscript.length > 0) {
      console.log("Using auto transcript with length:", autoTranscript.length);
      setTranscript(autoTranscript);
    }
  }, [providedTranscript, autoTranscript]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleTimeUpdate = (event: any) => {
    const time = isMuxVideo 
      ? muxPlayerRef.current?.currentTime || 0
      : event.target.currentTime || 0;
    
    setCurrentTime(time);
    
    const index = transcript.findIndex(
      segment => time >= segment.startTime && time <= segment.endTime
    );
    
    if (index !== activeSegmentIndex) {
      setActiveSegmentIndex(index);
      
      if (index >= 0 && transcriptRef.current) {
        const segmentElements = transcriptRef.current.querySelectorAll('.transcript-segment');
        if (segmentElements[index]) {
          segmentElements[index].scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }
    }
  };

  const handleTranscriptClick = (startTime: number) => {
    if (isMuxVideo && muxPlayerRef.current) {
      muxPlayerRef.current.currentTime = startTime;
    } else if (videoRef.current) {
      videoRef.current.currentTime = startTime;
    }
  };

  const toggleTranscript = () => {
    setTranscriptVisible(prev => !prev);
  };

  return (
    <div 
      className={cn(
        "relative",
        isFullscreen ? "fixed inset-0 z-50 bg-black flex" : "grid grid-cols-1 lg:grid-cols-12 gap-4 w-full max-w-6xl mx-auto"
      )}
      ref={containerRef}
    >
      <div className={cn(
        "aspect-video relative",
        isFullscreen ? "w-full h-full flex items-center" : 
        transcriptVisible ? "lg:col-span-7" : "lg:col-span-12"
      )}>
        {isMuxVideo ? (
          <MuxPlayer
            ref={muxPlayerRef}
            streamType="on-demand"
            playbackId={playbackId.replace('mux:', '')}
            metadata={{
              video_title: title || "Video",
              player_name: "Mux Player",
            }}
            onTimeUpdate={handleTimeUpdate}
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
        ) : (
          <video
            ref={videoRef}
            src={src}
            controls
            className={cn(
              "w-full rounded-xl",
              isFullscreen ? "h-full object-contain" : "h-full"
            )}
            poster={poster}
            onTimeUpdate={handleTimeUpdate}
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            style={{
              aspectRatio: isFullscreen ? "unset" : "16/9",
              backgroundColor: "#000",
            }}
          />
        )}
        
        <div 
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            mixBlendMode: "overlay",
            userSelect: "none",
            WebkitUserSelect: "none",
            background: "radial-gradient(circle 100px at var(--x, 50%) var(--y, 50%), transparent 10%, rgba(0, 0, 0, 0.5) 60%)",
          }}
          onMouseMove={(e) => {
            const target = e.currentTarget;
            const rect = target.getBoundingClientRect();
            target.style.setProperty('--x', `${e.clientX - rect.left}px`);
            target.style.setProperty('--y', `${e.clientY - rect.top}px`);
          }}
        />

        <button
          className={cn(
            "absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
            transcriptVisible ? "bg-blue-600 text-white" : "bg-gray-800/70 text-white hover:bg-gray-700/80"
          )}
          onClick={toggleTranscript}
        >
          {transcriptVisible ? "Ukryj transkrypcję" : "Pokaż transkrypcję"}
        </button>
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
