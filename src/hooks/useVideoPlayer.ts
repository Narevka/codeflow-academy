
import { useState, useEffect, useRef } from "react";
import { TranscriptSegment } from "@/types/course";
import { useTranscript } from "@/hooks/useTranscript";

export function useVideoPlayer(src: string, providedTranscript: TranscriptSegment[] = [], transcriptSourceFile?: string) {
  const [isMuxVideo, setIsMuxVideo] = useState(false);
  const [playbackId, setPlaybackId] = useState<string>("");
  const [currentTime, setCurrentTime] = useState(0);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState<number>(-1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptSegment[]>(providedTranscript);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const muxPlayerRef = useRef<any>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  
  // Log initial props
  console.log("useVideoPlayer initial props:", {
    src,
    providedTranscriptLength: providedTranscript?.length || 0,
    transcriptSourceFile
  });
  
  const normalizedPlaybackId = src?.startsWith('mux:') 
    ? src.replace('mux:', '') 
    : src;
  
  // Parse and use the transcript from the API
  const { 
    data: autoTranscript, 
    isLoading: isLoadingTranscript 
  } = useTranscript(
    isMuxVideo ? normalizedPlaybackId : undefined,
    transcriptSourceFile
  );
  
  // Determine if this is a Mux video
  useEffect(() => {
    if (src?.startsWith('mux:')) {
      console.log("Detected Mux video:", src);
      setIsMuxVideo(true);
      setPlaybackId(src);
    } else {
      console.log("Using standard video player for:", src);
      setIsMuxVideo(false);
    }
  }, [src]);

  // Set the transcript from provided or auto-loaded transcript
  useEffect(() => {
    if (providedTranscript && providedTranscript.length > 0) {
      console.log("Using provided transcript with length:", providedTranscript.length);
      setTranscript(providedTranscript);
    } else if (autoTranscript && autoTranscript.length > 0) {
      console.log("Using auto transcript with length:", autoTranscript.length);
      setTranscript(autoTranscript);
    } else {
      console.log("No transcript available yet");
    }
  }, [providedTranscript, autoTranscript]);

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle time update from the video player
  const handleTimeUpdate = (event: any) => {
    const time = isMuxVideo 
      ? muxPlayerRef.current?.currentTime || 0
      : event.target.currentTime || 0;
    
    setCurrentTime(time);
    
    if (transcript.length === 0) {
      return; // No transcript available
    }
    
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

  // Handle click on transcript segment
  const handleTranscriptClick = (startTime: number) => {
    console.log("Transcript segment clicked, seeking to:", startTime);
    if (isMuxVideo && muxPlayerRef.current) {
      muxPlayerRef.current.currentTime = startTime;
    } else if (videoRef.current) {
      videoRef.current.currentTime = startTime;
    }
  };

  return {
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
  };
}
