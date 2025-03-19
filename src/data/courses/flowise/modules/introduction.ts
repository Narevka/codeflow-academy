
import { Module } from "@/types/course";

export const introductionModule: Module = {
  id: "module-1",
  title: "Wprowadzenie",
  completed: true,
  lessons: [
    {
      id: "lesson-1-1",
      title: "Wprowadzenie",
      displayTitle: "Lekcja 1 - Wprowadzenie do Flowise: Tworzenie Aplikacji z Dużymi Modelami Językowymi",
      description: "",
      videoUrl: "mux:V2H6uhyDvaXZ02dgOYeNSZkULeWye00q3rTzkQ2YZbJIw",
      additionalVideos: [
        {
          title: "Co to LLM",
          videoUrl: "mux:sVnpYWjzZqmn6FOYBdymJ9htg2AcomJqIOBKF3nHlH00",
          description: `Wprowadzenie do Flowise

Flowise to narzędzie, które rewolucjonizuje tworzenie aplikacji opartych na sztucznej inteligencji, szczególnie tych korzystających z dużych modeli językowych (LLM). Dzięki niemu, osoby bez zaawansowanej wiedzy programistycznej mogą budować interaktywne chatboty, systemy analizy tekstu i aplikacje oparte na konwersacjach AI. Flowise pozwala na projektowanie interfejsów graficznych, integrację z różnymi modelami oraz efektywne zarządzanie danymi wejściowymi i wyjściowymi.

Wprowadzenie do Dużych Modeli Językowych (LLM)

Duże modele językowe, takie jak GPT-3, GPT-4 czy Gemini od Google, są rdzeniem współczesnych technologii przetwarzania języka naturalnego (NLP). Te modele są trenowane na ogromnych zbiorach danych językowych, co pozwala im generować odpowiedzi na pytania, analizować teksty, a nawet prowadzić rozbudowane konwersacje, zbliżone do interakcji z człowiekiem.

Jednym z kluczowych aspektów działania LLM są tokeny. Tokeny to jednostki tekstu – mogą to być słowa, znaki lub fragmenty zdań – które są analizowane przez model. Kiedy wpisujemy zdanie, jest ono rozbijane na tokeny, które model przetwarza, aby odpowiedzieć w sposób spójny i zrozumiały.

Aby lepiej zrozumieć, czym są tokeny i jak działają, warto odwiedzić narzędzia takie jak strona OpenAI, gdzie można zobaczyć, jak GPT przetwarza tekst na tokeny i w jaki sposób analizuje je, aby wygenerować odpowiedzi.

Przetwarzanie Kontekstu przez Modele Językowe

Ważne jest zrozumienie, że modele językowe, mimo zaawansowania, nie "pamiętają" poprzednich rozmów w taki sposób, jak moglibyśmy to sobie wyobrażać. Każda nowa odpowiedź jest generowana na podstawie nowego zapytania (promptu), który może zawierać skrótową historię wcześniejszej konwersacji.

Na przykład, w modelach takich jak GPT-4, istnieje ograniczenie liczby tokenów, które można przetworzyć jednocześnie. GPT-4 może obsłużyć do 128 tysięcy tokenów (około 300 stron tekstu), podczas gdy GPT-3.5 – jedynie 16 tysięcy tokenów (około 14 stron). Choć nowszy model GPT-4 oferuje większe możliwości, nie zawsze jest konieczne jego użycie. GPT-3.5, mimo mniejszej liczby tokenów, działa szybciej i jest wystarczający do prostszych zadań.

Wybór Modelu do Twojej Aplikacji

Wybór odpowiedniego modelu zależy od specyfiki zadania. Do zadań prostszych, gdzie kluczowa jest szybkość odpowiedzi, GPT-3.5 jest często lepszym wyborem. Z kolei przy bardziej skomplikowanych zagadnieniach, wymagających dogłębnej analizy czy szczegółowej wiedzy, warto sięgnąć po GPT-4. Warto też pamiętać, że istnieją inne modele, takie jak Falcon 40B, które oferują jeszcze większe możliwości przetwarzania języka.`
        }
      ],
      completed: true
    }
  ]
};
