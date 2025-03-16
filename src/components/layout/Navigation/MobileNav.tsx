
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { UserMenu } from "./UserMenu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="md:hidden">
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          onClick={toggleMenu}
          className="text-black dark:text-white focus:outline-none transition-transform duration-300 hover:scale-105"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-md z-40 flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-6 text-lg">
          <Link
            to="/"
            onClick={closeMenu}
            className={`nav-link text-xl text-black dark:text-white ${isActive("/") ? "after:scale-x-100" : ""}`}
          >
            Start
          </Link>
          <Link
            to="/blog"
            onClick={closeMenu}
            className={`nav-link text-xl text-black dark:text-white ${isActive("/blog") ? "after:scale-x-100" : ""}`}
          >
            Blog
          </Link>
          <Link
            to="/offer"
            onClick={closeMenu}
            className={`nav-link text-xl text-black dark:text-white ${isActive("/offer") ? "after:scale-x-100" : ""}`}
          >
            Oferta
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`nav-link text-xl text-black dark:text-white ${isActive("/contact") ? "after:scale-x-100" : ""}`}
          >
            Kontakt
          </Link>
          
          {user ? (
            <UserMenu onClose={closeMenu} isMobile={true} />
          ) : (
            <Link
              to="/auth"
              onClick={closeMenu}
              className="bg-magenta hover:bg-magenta/90 text-white rounded-full px-6 py-3 font-medium transition-all duration-200 shadow-lg hover:shadow-magenta/20 mt-4"
            >
              Dołącz
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};
