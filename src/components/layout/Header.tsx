
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut, Settings, Book } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navPosition, setNavPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const location = useLocation();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Wylogowano",
        description: "Zostałeś pomyślnie wylogowany.",
      });
      navigate("/");
      closeMenu();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Błąd",
        description: "Nie udało się wylogować. Spróbuj ponownie.",
      });
    }
  };

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

        {/* Desktop Navigation - Updated Style */}
        <nav 
          className="hidden md:block"
        >
          <ul 
            className="relative flex items-center mx-auto w-fit rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 backdrop-blur-md p-1"
            onMouseLeave={() => setNavPosition((prev) => ({ ...prev, opacity: 0 }))}
          >
            <NavItem path="/" label="Start" setPosition={setNavPosition} isActive={isActive("/")} />
            <NavItem path="/blog" label="Blog" setPosition={setNavPosition} isActive={isActive("/blog")} />
            <NavItem path="/offer" label="Oferta" setPosition={setNavPosition} isActive={isActive("/offer")} />
            <NavItem path="/contact" label="Kontakt" setPosition={setNavPosition} isActive={isActive("/contact")} />
            
            <NavCursor position={navPosition} />
          </ul>
        </nav>

        {/* User Profile / Login Button and Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-magenta/20 hover:bg-magenta/30 text-black dark:text-white rounded-full px-4 py-2 font-medium transition-all duration-200 flex items-center">
                <User size={18} className="mr-2" />
                Profil
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-black/90 border-black/10 dark:border-white/10 text-black dark:text-white">
                <DropdownMenuItem className="hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer" onClick={() => navigate("/profile")}>
                  <Settings size={16} className="mr-2" />
                  Ustawienia
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer" onClick={() => navigate("/my-courses")}>
                  <Book size={16} className="mr-2" />
                  Moje kursy
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-black/10 dark:bg-white/10" />
                <DropdownMenuItem className="hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer text-red-500" onClick={handleLogout}>
                  <LogOut size={16} className="mr-2" />
                  Wyloguj
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link 
              to="/auth" 
              className="bg-magenta hover:bg-magenta/90 text-white rounded-full px-5 py-2 font-medium transition-all duration-200 shadow-lg hover:shadow-magenta/20 hover:scale-105"
            >
              Dołącz
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-black dark:text-white focus:outline-none transition-transform duration-300 hover:scale-105"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
            <>
              <Link
                to="/profile"
                onClick={closeMenu}
                className="text-black dark:text-white flex items-center text-xl"
              >
                <Settings size={20} className="mr-2" />
                Ustawienia
              </Link>
              <Link
                to="/my-courses"
                onClick={closeMenu}
                className="text-black dark:text-white flex items-center text-xl"
              >
                <Book size={20} className="mr-2" />
                Moje kursy
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  closeMenu();
                }}
                className="bg-magenta/20 hover:bg-magenta/30 text-black dark:text-white rounded-full px-6 py-3 font-medium transition-all duration-200 mt-4 flex items-center"
              >
                <LogOut size={20} className="mr-2" />
                Wyloguj się
              </button>
            </>
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
    </header>
  );
};

// NavItem component - Updated for mix-blend-difference effect
const NavItem = ({ 
  path, 
  label, 
  setPosition, 
  isActive 
}: { 
  path: string; 
  label: string; 
  setPosition: React.Dispatch<React.SetStateAction<{left: number; width: number; opacity: number}>>;
  isActive: boolean;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  
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
        className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium uppercase text-black dark:text-white mix-blend-difference"
      >
        {label}
      </Link>
    </li>
  );
};

// NavCursor component - Changed to white/black background
const NavCursor = ({ position }: { position: { left: number; width: number; opacity: number } }) => {
  return (
    <motion.div
      animate={position}
      className="absolute z-0 h-8 rounded-full bg-white dark:bg-black"
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    />
  );
};

export default Header;
