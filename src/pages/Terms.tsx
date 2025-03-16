
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

const Terms = () => {
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
          <h1 className="text-3xl font-bold mb-8 gradient-text">Regulamin sklepu internetowego ToKnowAI</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Postanowienia ogólne</h2>
            
            <p className="mb-4">1.1. Niniejszy Regulamin określa zasady sprzedaży kursów online z zakresu sztucznej inteligencji, prowadzonej przez firmę Karol Sapiołko Narevka, z siedzibą w Narewce, ul. Hajnowska 1A, 17-220 Narewka, NIP: 6030083353, za pośrednictwem strony internetowej https://toknowai.pl, zwanej dalej "Sklepem".</p>
            
            <p className="mb-4">1.2. Sklep internetowy ToKnowAI prowadzony jest przez firmę Karol Sapiołko Narevka, zwaną dalej "Sprzedawcą".</p>
            
            <p className="mb-4">1.3. Kontakt ze Sprzedawcą możliwy jest poprzez e-mail: info@toknowai.pl lub pisemnie na adres siedziby firmy.</p>
            
            <p className="mb-4">1.4. Regulamin stanowi integralną część umowy sprzedaży zawieranej pomiędzy Kupującym a Sprzedawcą. Akceptacja Regulaminu jest warunkiem koniecznym do złożenia zamówienia w Sklepie.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Definicje</h2>
            
            <p className="mb-4">2.1. Kupujący - osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, dokonująca zakupów w Sklepie.</p>
            
            <p className="mb-4">2.2. Sprzedawca - Karol Sapiołko Narevka, z siedzibą w Narewce, ul. Hajnowska 1A, 17-220 Narewka, NIP: 6030083353.</p>
            
            <p className="mb-4">2.3. Kurs online - produkt cyfrowy dostępny w formie dostępu do materiałów edukacyjnych oferowany przez Sprzedawcę w Sklepie.</p>
            
            <p className="mb-4">2.4. Umowa sprzedaży - umowa zawarta pomiędzy Kupującym a Sprzedawcą na odległość, za pośrednictwem Sklepu, dotycząca sprzedaży Kursów online.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Składanie zamówień</h2>
            
            <p className="mb-4">3.1. Zamówienia na Kursy online można składać za pośrednictwem strony internetowej Sklepu, dostępnej pod adresem https://toknowai.pl.</p>
            
            <p className="mb-4">3.2. Kupujący zobowiązany jest do podania prawidłowych danych osobowych, niezbędnych do realizacji zamówienia. Sprzedawca nie ponosi odpowiedzialności za błędy w danych podanych przez Kupującego.</p>
            
            <p className="mb-4">3.3. Po złożeniu zamówienia, Kupujący otrzymuje e-mail potwierdzający przyjęcie zamówienia do realizacji. Umowa sprzedaży zostaje zawarta w momencie otrzymania przez Kupującego potwierdzenia zamówienia.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Płatności</h2>
            
            <p className="mb-4">4.1. Ceny Kursów online podane w Sklepie są cenami brutto. Sprzedawca nie jest płatnikiem VAT, w związku z czym na fakturach widnieje adnotacja "faktura bez VAT".</p>
            
            <p className="mb-4">4.2. Kupujący może dokonać płatności za zamówione Kursy online za pośrednictwem dostępnych w Sklepie metod płatności, takich jak: przelew bankowy, płatność kartą płatniczą, płatności elektroniczne (np. Przelewy24).</p>
            
            <p className="mb-4">4.3. Realizacja zamówienia rozpoczyna się po zaksięgowaniu płatności na koncie Sprzedawcy.</p>
            
            <p className="mb-4">4.4. Sprzedawca zastrzega sobie prawo do zmiany cen Kursów online, oferowania promocji i rabatów. Zmiany cen nie dotyczą zamówień już złożonych przez Kupujących.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Realizacja zamówień</h2>
            
            <p className="mb-4">5.1. Po dokonaniu płatności i zawarciu umowy sprzedaży, Kupujący otrzymuje dostęp do zakupionego Kursu online za pośrednictwem konta użytkownika w Sklepie lub poprzez bezpośredni link wysłany na podany adres e-mail.</p>
            
            <p className="mb-4">5.2. Dostęp do Kursu online jest udzielany na czas określony lub nieokreślony, w zależności od specyfikacji kursu podanej w opisie produktu na stronie Sklepu.</p>
            
            <p className="mb-4">5.3. Sprzedawca zastrzega sobie prawo do czasowego wstrzymania dostępu do Kursów online w celu przeprowadzenia prac konserwacyjnych lub aktualizacji, informując o tym Kupującego z odpowiednim wyprzedzeniem.</p>
            
            <p className="mb-4">6.1. Kupującemu, będącemu konsumentem, przysługuje prawo do odstąpienia od umowy zawartej na odległość bez podania przyczyny, w terminie 14 dni od dnia zawarcia umowy, zgodnie z przepisami ustawy o prawach konsumenta.</p>
            
            <p className="mb-4">6.2. Prawo odstąpienia od umowy nie przysługuje w przypadku dostarczenia treści cyfrowych, które nie są zapisane na nośniku materialnym, jeżeli spełnianie świadczenia rozpoczęło się za wyraźną zgodą konsumenta przed upływem terminu do odstąpienia od umowy i po poinformowaniu go przez Sprzedawcę o utracie prawa odstąpienia od umowy.</p>
            
            <p className="mb-4">6.3. Aby skorzystać z prawa odstąpienia od umowy, Kupujący powinien złożyć jednoznaczne oświadczenie o odstąpieniu od umowy, wysyłając je na adres e-mail: info@toknowai.pl. Sprzedawca niezwłocznie potwierdzi otrzymanie takiego oświadczenia.</p>
            
            <p className="mb-4">6.4. W przypadku skutecznego odstąpienia od umowy, Sprzedawca zwróci Kupującemu wszystkie otrzymane od niego płatności, w tym koszty dostarczenia treści cyfrowych (jeśli takie były), nie później niż w terminie 14 dni od dnia otrzymania oświadczenia o odstąpieniu od umowy.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Reklamacje</h2>
            
            <p className="mb-4">7.1. Sprzedawca zobowiązuje się dostarczać Kupującemu Kursy online zgodne z opisem zawartym na stronie Sklepu.</p>
            
            <p className="mb-4">7.2. W przypadku niezgodności Kursu online z umową, Kupujący ma prawo do złożenia reklamacji.</p>
            
            <p className="mb-4">7.3. Reklamacje należy składać drogą elektroniczną na adres e-mail: info@toknowai.pl, opisując niezgodność oraz przedstawiając dowód zakupu.</p>
            
            <p className="mb-4">7.4. Sprzedawca rozpatrzy reklamację w terminie 14 dni od jej otrzymania i poinformuje Kupującego o wyniku rozpatrzenia reklamacji drogą elektroniczną.</p>
            
            <p className="mb-4">7.5. W przypadku uznania reklamacji za zasadną, Sprzedawca niezwłocznie podejmie działania mające na celu naprawienie stwierdzonej niezgodności, np. poprzez dostarczenie poprawnego Kursu online lub zwrot ceny zakupu.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Polityka zwrotów</h2>
            
            <p className="mb-4">8.1. Kupujący, będący konsumentem, ma prawo do zwrotu Kursu online w przypadkach przewidzianych przez prawo oraz na zasadach określonych w niniejszym Regulaminie.</p>
            
            <p className="mb-4">8.2. Zwrot środków następuje w terminie do 14 dni od dnia otrzymania przez Sprzedawcę oświadczenia o odstąpieniu od umowy lub uznania reklamacji.</p>
            
            <p className="mb-4">8.3. Środki zostaną zwrócone Kupującemu przy użyciu takiej samej metody płatności, jakiej użył Kupujący do zapłaty za Kurs online, chyba że Kupujący wyraźnie zgodzi się na inne rozwiązanie.</p>
            
            <p className="mb-4">8.4. W przypadku zwrotu środków, Sprzedawca nie ponosi kosztów dodatkowych opłat bankowych lub prowizyjnych, które mogą być naliczone przez bank Kupującego.</p>
            
            <p className="mb-4">9.1. Sprzedawca nie ponosi odpowiedzialności za przerwy w dostępności Sklepu wynikające z przyczyn niezależnych od niego, takich jak awarie techniczne, działania siły wyższej, przerwy w dostawie usług internetowych.</p>
            
            <p className="mb-4">9.2. Sprzedawca nie odpowiada za problemy techniczne lub ograniczenia techniczne w urządzeniach, z których korzysta Kupujący, a które uniemożliwiają mu prawidłowe korzystanie z Kursów online.</p>
            
            <p className="mb-4">9.3. Sprzedawca nie ponosi odpowiedzialności za skutki wynikające z niewłaściwego korzystania z Kursów online przez Kupującego.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Postanowienia końcowe</h2>
            
            <p className="mb-4">10.1. Niniejszy Regulamin jest dostępny na stronie internetowej https://toknowai.pl i wchodzi w życie z dniem jego publikacji.</p>
            
            <p className="mb-4">10.2. Sprzedawca zastrzega sobie prawo do wprowadzenia zmian w Regulaminie w każdym czasie, z zastrzeżeniem, że do umów zawartych przed zmianą Regulaminu stosuje się wersję Regulaminu obowiązującą w chwili zawarcia umowy.</p>
            
            <p className="mb-4">10.3. Wszelkie spory wynikłe z realizacji umów sprzedaży pomiędzy Sprzedawcą a Kupującym będą rozstrzygane w pierwszej kolejności na drodze negocjacji, z intencją polubownego zakończenia sporu. W przypadku braku porozumienia spór rozstrzygany będzie przez właściwy sąd powszechny.</p>
            
            <p className="mb-4">10.4. W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie przepisy prawa polskiego, w szczególności Kodeksu cywilnego oraz ustawy o prawach konsumenta.</p>
          </section>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
