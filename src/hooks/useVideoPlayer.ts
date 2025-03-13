
import { useState, useEffect, useRef } from "react";
import { TranscriptSegment } from "@/types/course";
import { useTranscript } from "@/hooks/useTranscript";

export function useVideoPlayer(src: string, providedTranscript: TranscriptSegment[] = []) {
  const [isMuxVideo, setIsMuxVideo] = useState(false);
  const [playbackId, setPlaybackId] = useState<string>("");
  const [currentTime, setCurrentTime] = useState(0);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState<number>(-1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptSegment[]>(providedTranscript);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const muxPlayerRef = useRef<any>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  
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
