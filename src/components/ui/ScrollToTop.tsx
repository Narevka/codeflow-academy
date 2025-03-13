
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollToTopProps {
  showAfter?: number; // Amount of pixels to scroll before showing the button
  className?: string;
}

const ScrollToTop = ({ 
  showAfter = 300, 
  className 
}: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > showAfter);
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Initial check
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300',
        'bg-magenta hover:bg-magenta/90 text-white',
        'flex items-center justify-center',
        'opacity-0 translate-y-8 pointer-events-none',
        isVisible && 'opacity-100 translate-y-0 pointer-events-auto',
        className
      )}
      aria-label="Przewiń do góry"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;
