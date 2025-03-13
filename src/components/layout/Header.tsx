
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
          <span className="text-white text-2xl font-bold flex items-center">
            <span className="bg-magenta text-white p-1 rounded mr-2">AI</span>
            ToKnowAI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${isActive("/") ? "text-white after:scale-x-100" : ""}`}>
            Start
          </Link>
          <Link to="/blog" className={`nav-link ${isActive("/blog") ? "text-white after:scale-x-100" : ""}`}>
            Blog
          </Link>
          <Link to="/offer" className={`nav-link ${isActive("/offer") ? "text-white after:scale-x-100" : ""}`}>
            Oferta
          </Link>
          <Link to="/contact" className={`nav-link ${isActive("/contact") ? "text-white after:scale-x-100" : ""}`}>
            Kontakt
          </Link>
          <Link 
            to="/register" 
            className="bg-magenta hover:bg-magenta/90 text-white rounded-full px-5 py-2 font-medium transition-all duration-200 shadow-lg hover:shadow-magenta/20 hover:scale-105"
          >
            Dołącz
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none transition-transform duration-300 hover:scale-105"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-6 text-lg">
          <Link
            to="/"
            onClick={closeMenu}
            className={`nav-link text-xl ${isActive("/") ? "text-white after:scale-x-100" : ""}`}
          >
            Start
          </Link>
          <Link
            to="/blog"
            onClick={closeMenu}
            className={`nav-link text-xl ${isActive("/blog") ? "text-white after:scale-x-100" : ""}`}
          >
            Blog
          </Link>
          <Link
            to="/offer"
            onClick={closeMenu}
            className={`nav-link text-xl ${isActive("/offer") ? "text-white after:scale-x-100" : ""}`}
          >
            Oferta
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`nav-link text-xl ${isActive("/contact") ? "text-white after:scale-x-100" : ""}`}
          >
            Kontakt
          </Link>
          <Link
            to="/register"
            onClick={closeMenu}
            className="bg-magenta hover:bg-magenta/90 text-white rounded-full px-6 py-3 font-medium transition-all duration-200 shadow-lg hover:shadow-magenta/20 mt-4"
          >
            Dołącz
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
