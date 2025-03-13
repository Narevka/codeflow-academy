
import MuxPlayer from "@mux/mux-player-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TranscriptSegment {
  text: string;
  startTime: number; // in seconds
  endTime: number; // in seconds
}

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
  transcript = [],
  showTranscript = true,
}: VideoPlayerWithTranscriptProps) => {
  const [isMuxVideo, setIsMuxVideo] = useState(false);
  const [playbackId, setPlaybackId] = useState<string>("");
  const [currentTime, setCurrentTime] = useState(0);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState<number>(-1);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const muxPlayerRef = useRef<any>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  
  // Set up the video source based on the src format
  useEffect(() => {
    if (src?.startsWith('mux:')) {
      setIsMuxVideo(true);
      setPlaybackId(src.replace('mux:', ''));
    } else {
      setIsMuxVideo(false);
    }
  }, [src]);

  // Handle time updates
  const handleTimeUpdate = (event: any) => {
    const time = isMuxVideo 
      ? muxPlayerRef.current?.currentTime || 0
      : event.target.currentTime || 0;
    
    setCurrentTime(time);
    
    // Find the current segment
    const index = transcript.findIndex(
      segment => time >= segment.startTime && time <= segment.endTime
    );
    
    if (index !== activeSegmentIndex) {
      setActiveSegmentIndex(index);
      
      // Scroll to the active segment
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

  // Jump to specific time when clicking on transcript
  const handleTranscriptClick = (startTime: number) => {
    if (isMuxVideo && muxPlayerRef.current) {
      muxPlayerRef.current.currentTime = startTime;
    } else if (videoRef.current) {
      videoRef.current.currentTime = startTime;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full max-w-6xl mx-auto">
      <div className={cn(
        "aspect-video relative",
        showTranscript ? "lg:col-span-8" : "lg:col-span-12"
      )}>
        {isMuxVideo ? (
          <MuxPlayer
            ref={muxPlayerRef}
            streamType="on-demand"
            playbackId={playbackId}
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
              aspectRatio: "16/9",
              backgroundColor: "#000",
              width: "100%",
              borderRadius: "0.75rem",
              overflow: "hidden",
            }}
          />
        ) : (
          // Fallback for non-Mux videos
          <video
            ref={videoRef}
            src={src}
            controls
            className="w-full h-full rounded-xl"
            poster={poster}
            onTimeUpdate={handleTimeUpdate}
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            style={{
              aspectRatio: "16/9",
              backgroundColor: "#000",
            }}
          />
        )}
        
        {/* Add protection layer to prevent screen capture */}
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
      </div>
      
      {showTranscript && transcript.length > 0 && (
        <div className="lg:col-span-4 glass-card p-4 h-[calc(9/16*100%)] overflow-y-auto" ref={transcriptRef}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-white">Transkrypcja</h3>
            <div className="relative inline-block w-12 h-6">
              <input type="checkbox" className="sr-only" checked />
              <span className="block rounded-full bg-blue-600 w-12 h-6"></span>
              <span className="absolute left-6 top-1 bg-white rounded-full w-4 h-4 transition-transform"></span>
            </div>
          </div>
          
          <div className="space-y-2">
            {transcript.map((segment, index) => (
              <div 
                key={index}
                className={cn(
                  "transcript-segment p-2 rounded cursor-pointer transition-colors",
                  activeSegmentIndex === index 
                    ? "bg-blue-600/30 border-l-4 border-blue-600" 
                    : "hover:bg-gray-700/30"
                )}
                onClick={() => handleTranscriptClick(segment.startTime)}
              >
                <div className="text-xs text-gray-400 mb-1">
                  {formatTime(segment.startTime)}
                </div>
                <p className="text-sm text-white">
                  {segment.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to format time in MM:SS format
const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default VideoPlayerWithTranscript;
