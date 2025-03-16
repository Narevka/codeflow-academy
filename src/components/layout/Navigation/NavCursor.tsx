
import { motion } from "framer-motion";

interface NavCursorProps {
  position: { 
    left: number; 
    width: number; 
    opacity: number;
  };
}

export const NavCursor = ({ position }: NavCursorProps) => {
  return (
    <motion.div
      animate={position}
      className="absolute z-0 h-8 rounded-full bg-white dark:bg-black"
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    />
  );
};
