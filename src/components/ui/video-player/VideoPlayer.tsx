
import { useVideoPlayer } from "./useVideoPlayer";
import VideoPlayerControls from "./VideoPlayerControls";
import VideoPlayerOverlay from "./VideoPlayerOverlay";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

const VideoPlayer = ({ src, poster, title }: VideoPlayerProps) => {
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
        src={src}
        poster={poster}
        className="w-full h-full object-contain"
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
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
