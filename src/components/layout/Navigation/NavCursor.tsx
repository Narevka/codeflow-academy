
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

interface NavCursorProps {
  position: { 
    left: number; 
    width: number; 
    opacity: number;
  };
}

export const NavCursor = ({ position }: NavCursorProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      animate={position}
      className={`absolute z-0 h-8 rounded-full ${
        theme === 'dark' 
          ? 'bg-white/20 backdrop-blur-md' 
          : 'bg-primary/10'
      }`}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    />
  );
};
