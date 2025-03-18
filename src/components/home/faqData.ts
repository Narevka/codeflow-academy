
export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Czym jest kurs Flowise AI?",
    answer: "To kompleksowy kurs wprowadzający do tworzenia aplikacji AI za pomocą intuicyjnej, graficznej platformy Flowise AI. Nie wymaga znajomości programowania!",
    category: "Informacje ogólne"
  },
  {
    question: "Czy kurs jest odpowiedni dla początkujących?",
    answer: "Tak! Kurs został zaprojektowany z myślą o osobach bez doświadczenia technicznego, które chcą nauczyć się korzystać z AI w praktyce.",
    category: "Dla kogo"
  },
  {
    question: "Jak długo trwa kurs?",
    answer: "Łączny czas materiałów wideo to około 2,5 godziny. Kurs zawiera również dodatkowe materiały w formie grafik i tekstów, a powtarzanie przykładów przedstawionych w kursie może zająć dodatkowy czas.",
    category: "Informacje ogólne"
  },
  {
    question: "Na ile czasu otrzymuję dostęp do kursu?",
    answer: "Dostęp jest bezterminowy — możesz wracać do materiałów w dowolnym momencie.",
    category: "Dostęp"
  },
  {
    question: "Czy muszę posiadać specjalistyczny sprzęt lub oprogramowanie?",
    answer: "Nie, do kursu wystarczy komputer z dostępem do internetu. Wszystkie narzędzia używane w kursie są bezpłatne lub posiadają darmowe wersje próbne.",
    category: "Wymagania"
  },
  {
    question: "Czy kurs jest dostępny na urządzeniach mobilnych?",
    answer: "Tak, materiały kursu możesz oglądać na komputerze, tablecie lub smartfonie.",
    category: "Dostęp"
  },
  {
    question: "Czy mogę wracać do materiałów po ukończeniu kursu?",
    answer: "Tak, dostęp do kursu jest bezterminowy. Możesz wracać do materiałów w dowolnym momencie.",
    category: "Dostęp"
  },
  {
    question: "Czy potrzebuję znajomości języka angielskiego?",
    answer: "Nie, cały kurs jest w języku polskim. Jeśli pojawiają się narzędzia lub interfejsy w języku angielskim, są one dokładnie omówione w lekcjach.",
    category: "Wymagania"
  },
  {
    question: "Czy mogę kupić kurs dla zespołu lub kilku osób?",
    answer: "Tak, oferujemy opcję zakupu licencji grupowych. Skontaktuj się z nami na info@toknowai.pl, aby dowiedzieć się więcej.",
    category: "Zakup"
  },
  {
    question: "Co zrobić, jeśli napotkam problemy techniczne podczas kursu?",
    answer: "Jeśli napotkasz jakiekolwiek problemy techniczne, skontaktuj się z naszym zespołem wsparcia na info@toknowai.pl.",
    category: "Wsparcie"
  },
  {
    question: "Czy kurs obejmuje aktualizacje, jeśli Flowise AI wprowadzi nowe funkcje?",
    answer: "Tak, kurs będzie aktualizowany, aby uwzględnić nowe funkcje i zmiany w Flowise AI. Masz do nich dostęp bez dodatkowych opłat.",
    category: "Aktualizacje"
  },
  {
    question: "Co wyróżnia ten kurs na tle innych?",
    answer: "Nasz kurs koncentruje się na praktycznym wykorzystaniu Flowise AI i tworzeniu aplikacji krok po kroku. Dzięki temu szybko nauczysz się używać narzędzia w rzeczywistych projektach.",
    category: "Informacje ogólne"
  },
  {
    question: "Czy mogę przetestować fragment kursu przed zakupem?",
    answer: "Tak, na stronie kursu znajdziesz darmową lekcję demonstracyjną, aby zapoznać się z jakością materiałów.",
    category: "Zakup"
  }
];

// Group FAQ items by category
export const groupFaqItemsByCategory = (items: FaqItem[]) => {
  return items.reduce((acc, item) => {
    const category = item.category || "Inne";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, FaqItem[]>);
};

// Get all unique categories
export const getCategories = (groupedItems: Record<string, FaqItem[]>) => {
  return Object.keys(groupedItems);
};
