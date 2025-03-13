
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Sukces",
        description: "Zalogowano pomyślnie!",
      });
      
      navigate("/my-courses");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Błąd logowania",
        description: error.message || "Wystąpił problem podczas logowania. Spróbuj ponownie.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          },
        },
      });

      if (error) throw error;

      toast({
        title: "Rejestracja udana",
        description: "Sprawdź swoją skrzynkę email, aby potwierdzić konto.",
      });
      
      // Po rejestracji możemy albo przenieść na główną, albo pozostać na stronie logowania
      setIsLogin(true);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Błąd rejestracji",
        description: error.message || "Wystąpił problem podczas rejestracji. Spróbuj ponownie.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold gradient-text mb-2">
              {isLogin ? "Zaloguj się" : "Dołącz do nas"}
            </h1>
            <p className="text-white/70">
              {isLogin 
                ? "Zaloguj się, aby kontynuować swoją podróż z AI" 
                : "Utwórz konto i zacznij swoją przygodę z AI już dziś"}
            </p>
          </div>

          <div className="glass-card p-8">
            <form onSubmit={isLogin ? handleLogin : handleSignUp} className="space-y-6">
              {!isLogin && (
                <>
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-white/90">
                      Imię
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-white/50" />
                      </div>
                      <Input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Twoje imię"
                        className="pl-10 bg-black/50 border-white/20 text-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-white/90">
                      Nazwisko
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-white/50" />
                      </div>
                      <Input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Twoje nazwisko"
                        className="pl-10 bg-black/50 border-white/20 text-white"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/90">
                  Adres email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-white/50" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="twoj@email.com"
                    className="pl-10 bg-black/50 border-white/20 text-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-white/90">
                    Hasło
                  </label>
                  {isLogin && (
                    <a href="#" className="text-sm text-magenta hover:underline">
                      Zapomniałeś hasła?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-white/50" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={isLogin ? "Twoje hasło" : "Min. 6 znaków"}
                    className="pl-10 bg-black/50 border-white/20 text-white"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-magenta hover:bg-magenta/90 text-white py-2 rounded-md transition-all duration-200"
                disabled={loading}
              >
                {loading ? (
                  "Przetwarzanie..."
                ) : isLogin ? (
                  "Zaloguj się"
                ) : (
                  "Utwórz konto"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/70">
                {isLogin ? "Nie masz jeszcze konta?" : "Masz już konto?"}{" "}
                <button 
                  onClick={() => setIsLogin(!isLogin)} 
                  className="text-magenta hover:underline font-medium"
                >
                  {isLogin ? "Zarejestruj się" : "Zaloguj się"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Auth;
