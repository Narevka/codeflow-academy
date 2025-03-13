
import { useVideoPlayer } from "./useVideoPlayer";
import VideoPlayerControls from "./VideoPlayerControls";
import VideoPlayerOverlay from "./VideoPlayerOverlay";
import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  isMuxVideo?: boolean;
}

const VideoPlayer = ({ src, poster, title, isMuxVideo = false }: VideoPlayerProps) => {
  const {
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
  } = useVideoPlayer();

  // Dla filmów Mux, używamy HLS.js do obsługi odtwarzania
  const hlsRef = useRef<any>(null);
  
  // Referencja do div'a ochronnego
  const protectionLayerRef = useRef<HTMLDivElement>(null);

  // Efekt do śledzenia kursora dla warstwy ochronnej
  useEffect(() => {
    const protectionLayer = protectionLayerRef.current;
    const container = protectionLayer?.parentElement;
    
    if (!protectionLayer || !container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Oblicz pozycję kursora wewnątrz kontenera
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Przesuń warstwę ochronną aby jej centrum podążało za kursorem
      // Wykorzystujemy nieprzezroczystą warstwę wokół kursora
      protectionLayer.style.background = `
        radial-gradient(
          circle 100px at ${x}px ${y}px, 
          transparent 10%, 
          rgba(0, 0, 0, 0.5) 60%
        )
      `;
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isPlaying]);

  // Efekt do blokowania skrótów klawiszowych przechwytywania ekranu
  useEffect(() => {
    const preventScreenCapture = (e: KeyboardEvent) => {
      // Blokowanie typowych kombinacji do przechwytywania ekranu
      if (
        (e.key === 'PrintScreen') || 
        (e.ctrlKey && e.key === 'p') ||
        (e.ctrlKey && e.shiftKey && e.key === 'p') ||
        (e.ctrlKey && e.key === 's') ||
        (e.metaKey && e.key === 's')
      ) {
        e.preventDefault();
        return false;
      }
    };
    
    document.addEventListener('keydown', preventScreenCapture);
    
    return () => {
      document.removeEventListener('keydown', preventScreenCapture);
    };
  }, []);

  useEffect(() => {
    // Funkcja do inicjalizacji HLS dla filmów z Mux
    const setupHls = async () => {
      if (isMuxVideo && src) {
        try {
          // Dynamicznie importujemy hls.js tylko gdy jest potrzebny
          const Hls = (await import('hls.js')).default;
          
          // Sprawdzamy czy HLS jest wspierany przez przeglądarkę
          if (Hls.isSupported() && videoRef.current) {
            // Tworzymy nową instancję HLS
            hlsRef.current = new Hls({
              enableWorker: true,
              lowLatencyMode: true,
            });
            
            // Ładujemy źródło wideo
            const videoSrc = `https://stream.mux.com/${src}.m3u8`;
            hlsRef.current.loadSource(videoSrc);
            hlsRef.current.attachMedia(videoRef.current);
            
            // Obsługa zdarzeń HLS
            hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
              console.log('HLS manifest loaded successfully');
            });
            
            hlsRef.current.on(Hls.Events.ERROR, (event: any, data: any) => {
              console.error('HLS error:', data);
              // Próba naprawy błędu
              if (data.fatal) {
                switch (data.type) {
                  case Hls.ErrorTypes.NETWORK_ERROR:
                    console.log('HLS network error, trying to recover...');
                    hlsRef.current.startLoad();
                    break;
                  case Hls.ErrorTypes.MEDIA_ERROR:
                    console.log('HLS media error, trying to recover...');
                    hlsRef.current.recoverMediaError();
                    break;
                  default:
                    console.error('Fatal HLS error, cannot recover');
                    break;
                }
              }
            });
          } else if (videoRef.current && videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
            // Dla przeglądarek z natywnym wsparciem HLS (Safari)
            videoRef.current.src = `https://stream.mux.com/${src}.m3u8`;
          } else {
            console.error('HLS is not supported in this browser and no fallback available');
          }
        } catch (error) {
          console.error('Error loading HLS library:', error);
        }
      }
    };
    
    setupHls();
    
    // Cleanup
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [isMuxVideo, src]);

  return (
    <div 
      className="relative rounded-xl overflow-hidden bg-black/80 w-full aspect-video max-w-4xl mx-auto group"
      onMouseMove={showControls}
      onMouseLeave={() => isPlaying && setIsControlsVisible(false)}
      onContextMenu={(e) => e.preventDefault()} // Blokowanie menu kontekstowego
    >
      {/* Warstwa ochronna przed zrzutami ekranu */}
      <div 
        ref={protectionLayerRef}
        className="absolute inset-0 z-10 pointer-events-none select-none"
        style={{ 
          mixBlendMode: 'overlay',
          userSelect: 'none',
          WebkitUserSelect: 'none'
        }}
      />
      
      <VideoPlayerOverlay 
        isPlaying={isPlaying} 
        title={title} 
        onPlayPause={togglePlay} 
      />
      
      <video
        ref={videoRef}
        className="w-full h-full object-contain select-none"
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        playsInline
        poster={poster}
        style={{ 
          pointerEvents: 'auto',
          userSelect: 'none',
          WebkitUserSelect: 'none'
        }}
      />
      
      {/* Video controls */}
      <div className={`${isControlsVisible || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
        <VideoPlayerControls
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          volume={volume}
          isMuted={isMuted}
          progress={progress}
          onPlayPause={togglePlay}
          onProgressClick={handleProgressClick}
          onVolumeChange={handleVolumeChange}
          onToggleMute={toggleMute}
          onToggleFullScreen={toggleFullScreen}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
