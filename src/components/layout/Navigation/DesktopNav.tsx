
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavItem } from "./NavItem";
import { NavCursor } from "./NavCursor";
import { useTheme } from "@/contexts/ThemeContext";

export const DesktopNav = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const [navPosition, setNavPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="hidden md:block">
      <ul 
        className={`relative flex items-center mx-auto w-fit rounded-full border ${
          theme === 'dark'
            ? 'border-white/20 bg-black/5 backdrop-blur-md'
            : 'border-gray-200 bg-white/80 shadow-sm backdrop-blur-md'
        } p-1`}
        onMouseLeave={() => setNavPosition((prev) => ({ ...prev, opacity: 0 }))}
      >
        <NavItem path="/" label="Start" setPosition={setNavPosition} isActive={isActive("/")} />
        <NavItem path="/blog" label="Blog" setPosition={setNavPosition} isActive={isActive("/blog")} />
        <NavItem path="/offer" label="Oferta" setPosition={setNavPosition} isActive={isActive("/offer")} />
        <NavItem path="/contact" label="Kontakt" setPosition={setNavPosition} isActive={isActive("/contact")} />
        
        <NavCursor position={navPosition} />
      </ul>
    </nav>
  );
};
