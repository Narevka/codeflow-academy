
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import useAuth from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type ProfileData = {
  first_name: string;
  last_name: string;
};

const Profile = () => {
  const { user, loading } = useAuth();
  const [profile, setProfile] = useState<ProfileData>({
    first_name: "",
    last_name: "",
  });
  const [updating, setUpdating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("first_name, last_name")
          .eq("id", user.id)
          .single();

        if (error) throw error;

        if (data) {
          setProfile({
            first_name: data.first_name || "",
            last_name: data.last_name || "",
          });
        }
      } catch (error: any) {
        console.error("Błąd podczas pobierania profilu:", error.message);
      }
    };

    fetchProfile();
  }, [user]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;
    
    setUpdating(true);
    
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          first_name: profile.first_name,
          last_name: profile.last_name,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      if (error) throw error;

      toast({
        title: "Sukces!",
        description: "Twój profil został zaktualizowany.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Błąd",
        description: error.message || "Nie udało się zaktualizować profilu.",
      });
    } finally {
      setUpdating(false);
    }
  };

  // Przekieruj, jeśli użytkownik nie jest zalogowany
  if (!loading && !user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      <main className="flex-1 py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Twój profil
            </h1>
            <p className="text-white/70 text-lg">
              Zarządzaj swoimi danymi osobowymi i ustawieniami
            </p>
          </div>

          <div className="glass-card p-8">
            <form onSubmit={handleUpdateProfile} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/90">
                  Adres email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={user?.email || ""}
                  className="bg-black/50 border-white/20 text-white"
                  disabled
                />
                <p className="text-xs text-white/50">
                  Email nie może być zmieniony.
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-white/90">
                  Imię
                </label>
                <Input
                  id="firstName"
                  type="text"
                  value={profile.first_name}
                  onChange={(e) => setProfile({ ...profile, first_name: e.target.value })}
                  className="bg-black/50 border-white/20 text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-white/90">
                  Nazwisko
                </label>
                <Input
                  id="lastName"
                  type="text"
                  value={profile.last_name}
                  onChange={(e) => setProfile({ ...profile, last_name: e.target.value })}
                  className="bg-black/50 border-white/20 text-white"
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="bg-magenta hover:bg-magenta/90 text-white transition-all duration-200"
                  disabled={updating}
                >
                  {updating ? "Aktualizowanie..." : "Zapisz zmiany"}
                </Button>
              </div>
            </form>

            <div className="mt-12 pt-6 border-t border-white/10">
              <h3 className="text-xl font-semibold mb-4">Inne ustawienia</h3>
              
              <Button 
                variant="outline" 
                className="text-red-500 border-red-500 hover:bg-red-500/10 hover:text-red-400"
                onClick={async () => {
                  try {
                    await supabase.auth.signOut();
                    toast({
                      title: "Wylogowano",
                      description: "Zostałeś pomyślnie wylogowany.",
                    });
                  } catch (error: any) {
                    toast({
                      variant: "destructive",
                      title: "Błąd",
                      description: "Nie udało się wylogować. Spróbuj ponownie.",
                    });
                  }
                }}
              >
                Wyloguj się
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
