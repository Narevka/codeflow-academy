
import MuxPlayer from "@mux/mux-player-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { TranscriptSegment } from "@/types/course";
import { useTranscript } from "@/hooks/useTranscript";
import TranscriptPanel from "./TranscriptPanel";
import { toast } from "sonner";

interface VideoPlayerWithTranscriptProps {
  src: string;
  poster?: string;
  title?: string;
  transcript?: TranscriptSegment[];
  showTranscript?: boolean;
  onError?: (error: string) => void;
  isMuxVideo?: boolean;
}

const VideoPlayerWithTranscript = ({
  src,
  poster,
  title,
  transcript: providedTranscript = [],
  showTranscript = true,
  onError,
  isMuxVideo = false,
}: VideoPlayerWithTranscriptProps) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState<number>(-1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [transcriptVisible, setTranscriptVisible] = useState(showTranscript);
  const [transcript, setTranscript] = useState<TranscriptSegment[]>(providedTranscript);
  const [transcriptError, setTranscriptError] = useState<string | undefined>(undefined);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const muxPlayerRef = useRef<any>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Only fetch transcript from API if none is provided
  const shouldFetchTranscript = isMuxVideo && providedTranscript.length === 0;
  
  const { 
    data: transcriptData, 
    isLoading: isLoadingTranscript,
    error: transcriptFetchError
  } = useTranscript(shouldFetchTranscript ? src : undefined);
  
  useEffect(() => {
    if (providedTranscript && providedTranscript.length > 0) {
      setTranscript(providedTranscript);
      setTranscriptError(undefined);
    } else if (transcriptData) {
      if (transcriptData.segments.length > 0) {
        setTranscript(transcriptData.segments);
        setTranscriptError(undefined);
      } else {
        setTranscript([]);
        setTranscriptError(transcriptData.message || "Brak dostępnej transkrypcji dla tego wideo");
      }
    }
  }, [providedTranscript, transcriptData]);

  useEffect(() => {
    if (transcriptFetchError) {
      console.error("Error fetching transcript:", transcriptFetchError);
      setTranscriptError("Błąd podczas pobierania transkrypcji");
      toast.error("Nie udało się pobrać transkrypcji", {
        description: "Spróbuj odświeżyć stronę lub skontaktuj się z administratorem"
      });
    }
  }, [transcriptFetchError]);

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
    
    if (transcript.length > 0) {
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

  const handleMuxError = (event: any) => {
    const errorDetail = event.detail;
    console.error("Mux player error:", errorDetail);
    
    if (errorDetail?.message?.includes("not exist") || errorDetail?.code === 404) {
      const errorMsg = "Nie znaleziono materiału wideo. Sprawdź, czy identyfikator wideo jest prawidłowy.";
      onError?.(errorMsg);
      toast.error("Problem z odtwarzaniem wideo", {
        description: errorMsg
      });
    } else {
      const errorMsg = "Wystąpił błąd podczas ładowania wideo. Spróbuj ponownie później.";
      onError?.(errorMsg);
      toast.error("Problem z odtwarzaniem wideo", {
        description: errorMsg
      });
    }
  };

  const handleVideoError = (event: any) => {
    console.error("Video error:", event);
    const errorMsg = "Nie można załadować wideo. Sprawdź połączenie z internetem lub spróbuj ponownie później.";
    onError?.(errorMsg);
    toast.error("Problem z odtwarzaniem wideo", {
      description: errorMsg
    });
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
        transcriptVisible ? "lg:col-span-8" : "lg:col-span-12"
      )}>
        {isMuxVideo ? (
          <MuxPlayer
            ref={muxPlayerRef}
            streamType="on-demand"
            playbackId={src}
            metadata={{
              video_title: title || "Video",
              player_name: "Mux Player",
            }}
            onTimeUpdate={handleTimeUpdate}
            onError={handleMuxError}
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
            onError={handleVideoError}
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
            "lg:col-span-4 glass-card p-4",
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
            errorMessage={transcriptError}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayerWithTranscript;
