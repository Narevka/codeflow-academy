
"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface DemoSignupSheetProps {
  trigger: React.ReactNode;
}

const DemoSignupSheet = ({ trigger }: DemoSignupSheetProps) => {
  const [email, setEmail] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Wprowadź adres email",
        description: "Proszę wprowadzić adres email, aby zapisać się na powiadomienia.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      toast({
        title: "Zapisano!",
        description: "Dziękujemy za zapisanie się. Wkrótce otrzymasz email z darmowymi lekcjami.",
      });
      setIsSubmitting(false);
      setEmail("");
      setAcceptTerms(false);
      
      // Close the sheet after successful submission
      const closeButton = document.querySelector('[data-sheet-close]') as HTMLButtonElement;
      if (closeButton) {
        closeButton.click();
      }
    }, 1000);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent className="sm:max-w-md md:max-w-lg overflow-y-auto">
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="w-full md:w-1/3">
            <img 
              src="/lovable-uploads/6e30cc63-f5d8-4bea-a2ca-b258fdbda9e1.png" 
              alt="Grzegorz"
              className="w-full rounded-xl aspect-[3/4] object-cover object-center"
            />
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              ZAPISZ SIĘ NA POWIADOMIENIE I LEKCJE
            </h2>
            
            <p className="mb-6 text-gray-700">
              Zapisz się na listę, aby otrzymać 5 bezpłatnych lekcji o AI z Grzegorzem 
              Rożem. <span className="font-medium">Damy Ci też znać przed końcem sprzedaży kursu.</span>
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  Akceptuję regulamin newslettera i wyrażam zgodę na otrzymywanie informacji o kursie.
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-6 py-2.5 bg-black text-white font-medium rounded-full 
                hover:bg-black/90 transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Zapisywanie..." : "Dołączam"}
                {!isSubmitting && <span className="text-yellow-400">🔥</span>}
              </button>
            </form>
          </div>
        </div>
        
        <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default DemoSignupSheet;
