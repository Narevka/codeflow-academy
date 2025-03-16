
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-zinc-900/50 p-8 rounded-xl border border-white/10"
        >
          <h1 className="text-3xl font-bold mb-8 gradient-text">Polityka Prywatności i Plików Cookies ToKnowAI</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Postanowienia ogólne</h2>
            
            <p className="mb-4">1.1. Niniejsza Polityka Prywatności i Plików Cookies określa zasady przetwarzania i ochrony danych osobowych użytkowników strony internetowej prowadzonej przez firmę Karol Sapiołko Narevka, z siedzibą w Narewce, ul. Hajnowska 1A, 17-220 Narewka, NIP: 6030083353, zwanej dalej "Administratorem".</p>
            
            <p className="mb-4">1.2. Administrator przetwarza dane osobowe użytkowników zgodnie z obowiązującymi przepisami prawa, w szczególności z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).</p>
            
            <p className="mb-4">1.3. Polityka ma na celu zapewnienie transparentności w zakresie przetwarzania danych osobowych oraz wykorzystywania plików cookies na stronie internetowej.</p>
            
            <p className="mb-4">1.4. Administrator stosuje odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych przed nieuprawnionym dostępem, zmianą, utratą lub zniszczeniem.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Zakres przetwarzanych danych osobowych</h2>
            
            <p className="mb-4">2.1. Administrator przetwarza dane osobowe niezbędne do realizacji usług oferowanych na stronie internetowej, takich jak: Imię i nazwisko, Adres e-mail, Numer telefonu, Adres zamieszkania lub korespondencyjny, Adres IP, Dane dotyczące płatności.</p>
            
            <p className="mb-4">2.2. Administrator może zbierać inne dane dobrowolnie udostępnione przez użytkownika, np. w formularzach kontaktowych lub ankietach.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Cele przetwarzania danych</h2>
            
            <p className="mb-4">3.1. Dane osobowe są przetwarzane w następujących celach: Świadczenie usług (np. realizacja umów, przetwarzanie płatności, obsługa reklamacji), Marketing (np. wysyłka newsletterów za zgodą użytkownika), Analiza i statystyka (np. optymalizacja strony i oferta kursów online), Spełnienie obowiązków prawnych (np. prowadzenie ksiąg rachunkowych).</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Podstawy prawne przetwarzania danych</h2>
            
            <p className="mb-4">4.1. Administrator przetwarza dane osobowe na podstawie: Zgody użytkownika (art. 6 ust. 1 lit. a RODO), Realizacji umowy (art. 6 ust. 1 lit. b RODO), Obowiązku prawnego (art. 6 ust. 1 lit. c RODO), Prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO).</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Przekazywanie danych osobowych</h2>
            
            <p className="mb-4">5.1. Dane osobowe mogą być przekazywane podmiotom trzecim, m.in.: Firmom obsługującym płatności elektroniczne, Dostawcom usług hostingowych i IT, Firmom kurierskim.</p>
            
            <p className="mb-4">5.2. Administrator nie przekazuje danych do państw spoza Europejskiego Obszaru Gospodarczego bez zapewnienia odpowiedniego poziomu ochrony.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Prawa użytkowników</h2>
            
            <p className="mb-4">6.1. Użytkownicy mają prawo do: Dostępu do swoich danych, Sprostowania danych, Usunięcia danych, Ograniczenia przetwarzania, Przenoszenia danych, Sprzeciwu wobec przetwarzania, Wycofania zgody.</p>
            
            <p className="mb-4">6.2. Aby skorzystać z tych praw, należy skontaktować się z Administratorem poprzez e-mail: info@toknowai.pl.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Pliki cookies</h2>
            
            <p className="mb-4">7.1. Strona internetowa wykorzystuje pliki cookies w następujących celach: Zapewnienie funkcjonalności strony, Analiza ruchu na stronie, Personalizacja treści marketingowych.</p>
            
            <p className="mb-4">7.2. Użytkownik może zarządzać plikami cookies za pomocą ustawień swojej przeglądarki.</p>
            
            <p className="mb-4">7.3. Ograniczenie stosowania plików cookies może wpłynąć na funkcjonalność strony internetowej.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Okres przechowywania danych</h2>
            
            <p className="mb-4">8.1. Dane osobowe są przechowywane przez okres: Niezbędny do realizacji celów przetwarzania, Wymagany przepisami prawa.</p>
            
            <p className="mb-4">8.2. Dane przetwarzane na podstawie zgody przechowywane są do momentu jej wycofania.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Bezpieczeństwo danych</h2>
            
            <p className="mb-4">9.1. Administrator stosuje szyfrowanie danych, regularne aktualizacje systemów oraz kontrole dostępu w celu ochrony danych osobowych.</p>
            
            <p className="mb-4">9.2. Użytkownicy są zobowiązani do zabezpieczenia swoich danych dostępowych.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Zmiany w Polityce</h2>
            
            <p className="mb-4">10.1. Administrator zastrzega sobie prawo do zmian w niniejszej Polityce w przypadku zmiany przepisów prawa lub technologii.</p>
            
            <p className="mb-4">10.2. Aktualna wersja Polityki będzie dostępna na stronie internetowej.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
            
            <p className="mb-4">11.1. W przypadku pytań dotyczących Polityki lub przetwarzania danych, prosimy o kontakt na adres e-mail: info@toknowai.pl lub pisemnie na adres: Karol Sapiołko Narevka, ul. Hajnowska 1A, 17-220 Narewka.</p>
          </section>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
