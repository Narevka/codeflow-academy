
import { MouseEvent } from "react";

const VideoOverlay = () => {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--x', `${e.clientX - rect.left}px`);
    target.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <div 
      className="absolute inset-0 pointer-events-none select-none"
      style={{
        mixBlendMode: "overlay",
        userSelect: "none",
        WebkitUserSelect: "none",
        background: "radial-gradient(circle 100px at var(--x, 50%) var(--y, 50%), transparent 10%, rgba(0, 0, 0, 0.5) 60%)",
      }}
      onMouseMove={handleMouseMove}
    />
  );
};

export default VideoOverlay;
