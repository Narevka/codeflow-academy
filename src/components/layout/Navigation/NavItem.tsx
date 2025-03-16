
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface NavItemProps {
  path: string;
  label: string;
  isActive: boolean;
  setPosition: React.Dispatch<React.SetStateAction<{
    left: number;
    width: number;
    opacity: number;
  }>>;
}

export const NavItem = ({ 
  path, 
  label, 
  setPosition, 
  isActive 
}: NavItemProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (isActive && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setPosition({
        width,
        opacity: 1,
        left: ref.current.offsetLeft,
      });
    }
  }, [isActive, setPosition]);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10"
    >
      <Link
        to={path}
        className={`relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium uppercase ${
          theme === 'dark'
            ? 'text-white mix-blend-difference'
            : isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
        } transition-colors duration-200`}
      >
        {label}
      </Link>
    </li>
  );
};
