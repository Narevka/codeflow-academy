
import { useVideoPlayer } from "./useVideoPlayer";
import VideoPlayerControls from "./VideoPlayerControls";
import VideoPlayerOverlay from "./VideoPlayerOverlay";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  isMuxVideo?: boolean; // Nowy prop do rozpoznania filmów z Mux
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

  // Określ źródło wideo - lokalne, zdalne URL lub Mux
  let videoSrc = src;
  
  // Jeśli to film z Mux, dodaj odpowiedni format
  if (isMuxVideo && src) {
    videoSrc = `https://stream.mux.com/${src}.m3u8`;
  }

  return (
    <div 
      className="relative rounded-xl overflow-hidden bg-black/80 w-full aspect-video max-w-4xl mx-auto group"
      onMouseMove={showControls}
      onMouseLeave={() => isPlaying && setIsControlsVisible(false)}
    >
      <VideoPlayerOverlay 
        isPlaying={isPlaying} 
        title={title} 
        onPlayPause={togglePlay} 
      />
      
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        className="w-full h-full object-contain"
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        controlsList="nodownload"
        playsInline
      >
        {isMuxVideo && (
          <>
            <source src={videoSrc} type="application/x-mpegURL" />
            <p>Twoja przeglądarka nie obsługuje odtwarzania wideo HLS.</p>
          </>
        )}
      </video>
      
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

