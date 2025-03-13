
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-white text-2xl font-bold flex items-center">
                <span className="bg-magenta text-white p-1 rounded mr-2">AI</span>
                ToKnowAI
              </span>
            </Link>
            <p className="text-gray-400 mt-4">
              Twórz potężne aplikacje oparte na Flowise AI - szybko i intuicyjnie. Zostań ekspertem AI bez pisania kodu!
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-magenta transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-magenta transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-magenta transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-magenta transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Szybki dostęp</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-magenta transition-colors duration-200">
                  Start
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-magenta transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/offer" className="text-gray-400 hover:text-magenta transition-colors duration-200">
                  Oferta
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-magenta transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/my-courses" className="text-gray-400 hover:text-magenta transition-colors duration-200">
                  Moje kursy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Informacje</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-magenta transition-colors duration-200">
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link to="/terms-of-services" className="text-gray-400 hover:text-magenta transition-colors duration-200">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-magenta transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2 text-magenta" />
                <a href="mailto:info@toknowai.pl" className="hover:text-magenta transition-colors duration-200">
                  info@toknowai.pl
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2 text-magenta" />
                <a href="tel:+48123456789" className="hover:text-magenta transition-colors duration-200">
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin size={16} className="mr-2 text-magenta mt-1" />
                <span>ul. Przykładowa 123, 00-000 Warszawa, Polska</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ToKnowAI. Wszystkie prawa zastrzeżone.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Stworzone z <span className="text-magenta">♥</span> w Polsce
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
