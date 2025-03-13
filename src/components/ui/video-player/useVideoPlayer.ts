
import { useState, useRef, useEffect } from "react";

export const useVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle play/pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      // Dodaj obsługę błędów odtwarzania
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Odtwarzanie rozpoczęte pomyślnie
          })
          .catch(error => {
            console.error("Błąd odtwarzania:", error);
            // Możesz tutaj dodać obsługę błędów, np. powiadomienie dla użytkownika
          });
      }
    }
    setIsPlaying(!isPlaying);
  };

  // Handle video progress
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    
    // Sprawdź, czy duration to poprawna liczba (nie NaN)
    if (!isNaN(duration) && duration > 0) {
      const progressPercent = (current / duration) * 100;
      setProgress(progressPercent);
    }
    
    setCurrentTime(current);
  };

  // Handle video loading metadata
  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    const videoDuration = videoRef.current.duration;
    
    // Sprawdź, czy duration to poprawna liczba (nie NaN lub Infinity)
    if (!isNaN(videoDuration) && isFinite(videoDuration)) {
      setDuration(videoDuration);
    }
  };

  // Handle progress bar click
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || isNaN(videoRef.current.duration)) return;
    
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const clickPercent = clickPosition / rect.width;
    
    videoRef.current.currentTime = clickPercent * videoRef.current.duration;
  };

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    
    setIsMuted(newVolume === 0);
  };

  // Handle mute toggle
  const toggleMute = () => {
    if (!videoRef.current) return;
    
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

  // Handle fullscreen
  const toggleFullScreen = () => {
    if (!videoRef.current) return;
    
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => {
        console.error("Błąd podczas wychodzenia z trybu pełnoekranowego:", err);
      });
    } else {
      videoRef.current.requestFullscreen().catch(err => {
        console.error("Błąd podczas wchodzenia w tryb pełnoekranowy:", err);
      });
    }
  };

  // Controls visibility timer
  const showControls = () => {
    setIsControlsVisible(true);
    
    if (controlsTimerRef.current) {
      clearTimeout(controlsTimerRef.current);
    }
    
    if (isPlaying) {
      controlsTimerRef.current = setTimeout(() => {
        setIsControlsVisible(false);
      }, 3000);
    }
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (controlsTimerRef.current) {
        clearTimeout(controlsTimerRef.current);
      }
    };
  }, []);

  // Dodaj efekt do nasłuchiwania zdarzeń błędów
  useEffect(() => {
    const videoElement = videoRef.current;
    
    const handleError = (e: Event) => {
      console.error("Błąd odtwarzania wideo:", (e as any).error || e);
      setIsPlaying(false);
    };
    
    if (videoElement) {
      videoElement.addEventListener('error', handleError);
    }
    
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('error', handleError);
      }
    };
  }, []);

  return {
    videoRef,
    isPlaying,
    progress,
    currentTime,
    duration,
    volume,
    isMuted,
    isControlsVisible,
    setIsControlsVisible,
    togglePlay,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleProgressClick,
    handleVolumeChange,
    toggleMute,
    toggleFullScreen,
    showControls,
    setIsPlaying
  };
};

