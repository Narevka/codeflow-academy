
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { DesktopNav } from "./Navigation/DesktopNav";
import { MobileNav } from "./Navigation/MobileNav";
import { UserMenu } from "./Navigation/UserMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
        ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg py-3 shadow-lg" 
        : "bg-transparent dark:bg-transparent py-5"
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
          <img 
            src="/lovable-uploads/f64a3252-7933-4dfb-b697-21e384387f01.png" 
            alt="ToKnowAI Logo" 
            className="h-8 md:h-10 mr-2"
          />
          <span className="text-black dark:text-white text-2xl font-bold flex items-center">
            ToKnowAI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* User Profile / Login Button and Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          
          {user ? (
            <UserMenu />
          ) : (
            <Link 
              to="/auth" 
              className="bg-magenta hover:bg-magenta/90 text-white rounded-full px-5 py-2 font-medium transition-all duration-200 shadow-lg hover:shadow-magenta/20 hover:scale-105"
            >
              Dołącz
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
