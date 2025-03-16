
import { LogOut, Settings, Book, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserMenuProps {
  onClose?: () => void;
  isMobile?: boolean;
}

export const UserMenu = ({ onClose, isMobile = false }: UserMenuProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Wylogowano",
        description: "Zostałeś pomyślnie wylogowany.",
      });
      navigate("/");
      if (onClose) onClose();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Błąd",
        description: "Nie udało się wylogować. Spróbuj ponownie.",
      });
    }
  };

  if (isMobile) {
    return (
      <>
        <Link
          to="/profile"
          onClick={onClose}
          className="text-black dark:text-white flex items-center text-xl"
        >
          <Settings size={20} className="mr-2" />
          Ustawienia
        </Link>
        <Link
          to="/my-courses"
          onClick={onClose}
          className="text-black dark:text-white flex items-center text-xl"
        >
          <Book size={20} className="mr-2" />
          Moje kursy
        </Link>
        <button
          onClick={() => {
            handleLogout();
            if (onClose) onClose();
          }}
          className="bg-magenta/20 hover:bg-magenta/30 text-black dark:text-white rounded-full px-6 py-3 font-medium transition-all duration-200 mt-4 flex items-center"
        >
          <LogOut size={20} className="mr-2" />
          Wyloguj się
        </button>
      </>
    );
  }

  return (
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
  );
};
