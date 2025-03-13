
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState<any>(null);

  // Get query parameters
  const searchParams = new URLSearchParams(location.search);
  const planId = searchParams.get("plan");
  const billingCycle = searchParams.get("billing") || "monthly";
  
  useEffect(() => {
    // Check if there's a success or canceled parameter from Stripe redirect
    const checkoutStatus = searchParams.get("status");
    const sessionId = searchParams.get("session_id");
    
    if (checkoutStatus === "success" && sessionId) {
      setSuccess(true);
      setLoading(false);
      // You can verify the payment status with the backend if needed
    } else if (checkoutStatus === "canceled") {
      setError("Płatność została anulowana.");
      setLoading(false);
    } else if (planId) {
      // If no status but has planId, this is a new checkout
      createCheckoutSession();
    } else {
      setError("Nieprawidłowe parametry zamówienia.");
      setLoading(false);
    }
  }, [location.search]);

  const createCheckoutSession = async () => {
    if (!planId) {
      setError("Nie wybrano planu.");
      setLoading(false);
      return;
    }

    try {
      // First check if user is logged in
      if (!user) {
        toast({
          title: "Wymagane logowanie",
          description: "Aby dokonać zakupu, musisz być zalogowany.",
          variant: "destructive"
        });
        // Redirect to auth page with a return url
        navigate(`/auth?returnUrl=${encodeURIComponent(`/checkout?plan=${planId}&billing=${billingCycle}`)}`);
        return;
      }

      // Call the Stripe checkout edge function
      const { data, error } = await supabase.functions.invoke("create-checkout-session", {
        body: {
          planId,
          billingCycle,
          userId: user.id,
          customerEmail: user.email,
          successUrl: `${window.location.origin}/checkout?status=success&session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/checkout?status=canceled`
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data?.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error("Nie udało się utworzyć sesji płatności.");
      }
    } catch (error: any) {
      console.error("Error creating checkout session:", error);
      setError(error.message || "Wystąpił błąd podczas tworzenia sesji płatności.");
      setLoading(false);
    }
  };

  const handleBackToPlans = () => {
    navigate("/offer");
  };

  // Display loading state
  if (loading && !error) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle>Przygotowywanie płatności</CardTitle>
              <CardDescription>Proszę czekać, trwa inicjalizacja systemu płatności...</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center py-8">
              <Loader2 className="h-12 w-12 text-magenta animate-spin mb-4" />
              <p className="text-white/70 text-center">Za chwilę zostaniesz przekierowany do bezpiecznego systemu płatności Stripe.</p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  // Display success state
  if (success) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Header />
        <div className="container mx-auto px-4 py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="w-full max-w-md mx-auto">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <CardTitle>Płatność zakończona pomyślnie!</CardTitle>
                <CardDescription>Dziękujemy za zakup kursu!</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center py-4">
                <p className="text-white/70 text-center mb-6">
                  Otrzymasz wkrótce e-mail z potwierdzeniem zakupu i dalszymi instrukcjami dotyczącymi dostępu do kursu.
                </p>
                <div className="flex flex-col md:flex-row gap-4 mt-4 w-full">
                  <Button 
                    onClick={() => navigate("/")}
                    variant="outline"
                    className="w-full"
                  >
                    Wróć do strony głównej
                  </Button>
                  <Button 
                    onClick={() => navigate("/my-courses")}
                    className="w-full bg-magenta hover:bg-magenta/90"
                  >
                    Przejdź do moich kursów
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  // Display error state
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <AlertTriangle className="h-16 w-16 text-amber-500" />
              </div>
              <CardTitle>Wystąpił problem</CardTitle>
              <CardDescription>Nie udało się przetworzyć płatności</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center py-4">
              <p className="text-white/70 text-center mb-6">
                {error || "Przepraszamy, wystąpił problem z płatnością. Spróbuj ponownie później lub skontaktuj się z obsługą klienta."}
              </p>
              <Button 
                onClick={handleBackToPlans}
                className="gap-2"
              >
                <ArrowLeft size={16} />
                Wróć do wyboru planu
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
