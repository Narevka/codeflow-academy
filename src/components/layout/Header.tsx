import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut, Settings, Book } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import NavHeader from "../ui/NavHeader";
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
        scrolled ? "bg-white/80 backdrop-blur-lg py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
          <img 
            src="/lovable-uploads/f64a3252-7933-4dfb-b697-21e384387f01.png" 
            alt="ToKnowAI Logo" 
            className="h-8 md:h-10 mr-2"
          />
          <span className="text-black text-2xl font-bold flex items-center">
            ToKnowAI
          </span>
        </Link>

        {/* Desktop Navigation with Animation */}
        <nav className="hidden md:block">
          <NavHeader 
            links={[
              { path: "/", label: "HOME" },
              { path: "/offer", label: "PRICING" },
              { path: "/blog", label: "ABOUT" },
              { path: "/demo-lesson", label: "SERVICES" },
              { path: "/contact", label: "CONTACT" }
            ]}
          />
        </nav>

        {/* User Profile / Login Button */}
        <div className="hidden md:flex items-center ml-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-blue-500/20 hover:bg-blue-500/30 text-black rounded-full px-4 py-2 font-medium transition-all duration-200 flex items-center">
                <User size={18} className="mr-2" />
                Profil
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-black/10 text-black">
                <DropdownMenuItem className="hover:bg-black/10 cursor-pointer" onClick={() => navigate("/profile")}>
                  <Settings size={16} className="mr-2" />
                  Ustawienia
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-black/10 cursor-pointer" onClick={() => navigate("/my-courses")}>
                  <Book size={16} className="mr-2" />
                  Moje kursy
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-black/10" />
                <DropdownMenuItem className="hover:bg-black/10 cursor-pointer text-red-500" onClick={handleLogout}>
                  <LogOut size={16} className="mr-2" />
                  Wyloguj
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link 
              to="/auth" 
              className="bg-black hover:bg-black/90 text-white rounded-full px-5 py-2 font-medium transition-all duration-200 shadow-lg hover:shadow-black/20 hover:scale-105"
            >
              Dołącz
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none transition-transform duration-300 hover:scale-105"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-6 text-lg">
          <Link
            to="/"
            onClick={closeMenu}
            className={`nav-link text-xl ${isActive("/") ? "text-black font-bold" : "text-black/70"}`}
          >
            Start
          </Link>
          <Link
            to="/blog"
            onClick={closeMenu}
            className={`nav-link text-xl ${isActive("/blog") ? "text-black font-bold" : "text-black/70"}`}
          >
            Blog
          </Link>
          <Link
            to="/offer"
            onClick={closeMenu}
            className={`nav-link text-xl ${isActive("/offer") ? "text-black font-bold" : "text-black/70"}`}
          >
            Oferta
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`nav-link text-xl ${isActive("/contact") ? "text-black font-bold" : "text-black/70"}`}
          >
            Kontakt
          </Link>
          
          {user ? (
            <>
              <Link
                to="/profile"
                onClick={closeMenu}
                className="text-black flex items-center text-xl"
              >
                <Settings size={20} className="mr-2" />
                Ustawienia
              </Link>
              <Link
                to="/my-courses"
                onClick={closeMenu}
                className="text-black flex items-center text-xl"
              >
                <Book size={20} className="mr-2" />
                Moje kursy
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  closeMenu();
                }}
                className="bg-black/10 hover:bg-black/20 text-black rounded-full px-6 py-3 font-medium transition-all duration-200 mt-4 flex items-center"
              >
                <LogOut size={20} className="mr-2" />
                Wyloguj się
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              onClick={closeMenu}
              className="bg-black hover:bg-black/90 text-white rounded-full px-6 py-3 font-medium transition-all duration-200 shadow-lg hover:shadow-black/20 mt-4"
            >
              Dołącz
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};


export default Header;
