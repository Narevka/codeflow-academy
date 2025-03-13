
import { useEffect, useRef, useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import VideoPlayerControls from "./VideoPlayerControls";
import VideoPlayerOverlay from "./VideoPlayerOverlay";
import { useVideoPlayer } from "./useVideoPlayer";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  isMuxVideo?: boolean;
}

const VideoPlayer = ({ src, poster, title, isMuxVideo = false }: VideoPlayerProps) => {
  const [showMuxPlayer, setShowMuxPlayer] = useState(isMuxVideo);
  
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

  // For Mux videos, we use the official MuxPlayer component
  if (showMuxPlayer) {
    return (
      <div className="relative rounded-xl overflow-hidden bg-black/80 w-full aspect-video max-w-4xl mx-auto video-protected">
        <MuxPlayer
          streamType="on-demand"
          playbackId={src} // src is the Mux playback ID
          metadata={{
            video_title: title || "Video",
            player_name: "Eduplatform Player",
          }}
          thumbnailTime={0}
          poster={poster}
          className="w-full h-full object-contain"
          crossOrigin="anonymous"
          disablePictureInPicture={true}
          nohotkeys={true}
          style={{
            '--controls': 'true',
            '--media-object-fit': 'contain',
            '--media-object-position': 'center',
            '--container-max-width': '100%',
          } as React.CSSProperties}
          // Advanced security features
          preload="auto"
          disableCookies={true}
          // FairPlay DRM configuration
          drm={{
            fairplay: {
              certificateUrl: '/fairplay-license/certificate',
              licenseUrl: '/fairplay-license/license'
            }
          }}
        />
      </div>
    );
  }

  // Enhanced protection for standard video player
  useEffect(() => {
    const handleCapture = (e: KeyboardEvent) => {
      // Block screenshot keyboard shortcuts
      if (
        (e.key === 'PrintScreen') || 
        (e.ctrlKey && (e.key === 'p' || e.key === 'P')) ||
        (e.metaKey && (e.key === 'p' || e.key === 'P')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) ||
        (e.metaKey && e.altKey && (e.key === 'i' || e.key === 'I'))
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners for capture protection
    window.addEventListener('keydown', handleCapture);
    
    return () => {
      window.removeEventListener('keydown', handleCapture);
    };
  }, []);

  // For standard videos, we use our custom player with enhanced protection
  return (
    <div 
      className="relative rounded-xl overflow-hidden bg-black/80 w-full aspect-video max-w-4xl mx-auto group video-protected"
      onMouseMove={showControls}
      onMouseLeave={() => isPlaying && setIsControlsVisible(false)}
      onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu
    >
      <VideoPlayerOverlay 
        isPlaying={isPlaying} 
        title={title} 
        onPlayPause={togglePlay} 
      />
      
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        controlsList="nodownload nofullscreen noremoteplayback"
        playsInline
        poster={poster}
        // Additional security attributes
        onContextMenu={(e) => e.preventDefault()}
        disablePictureInPicture
        // @ts-ignore - This is a valid attribute but TypeScript doesn't recognize it
        disableRemotePlayback="true"
        // @ts-ignore - Not standard but helps in some browsers
        x-webkit-airplay="deny"
      >
        {!isMuxVideo && src && <source src={src} type="video/mp4" />}
      </video>
      
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
