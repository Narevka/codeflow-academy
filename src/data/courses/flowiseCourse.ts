import { Course } from "@/types/course";

export const flowiseCourse: Course = {
  id: "flowise-ai-course",
  title: "KURS FLOWISE AI – TWORZENIE APLIKACJI AI BEZ KODOWANIA",
  description: "Witaj w kursie \"Flowise AI - kurs podstawowy\"! Tutaj znajdziesz wszystkie lekcje oraz materiały dodatkowe, które pomogą Ci w opanowaniu Flowise AI. Zacznij od pierwszego kroku i odkrywaj możliwości Flowise w swoim tempie.",
  lastActivity: "11-02-2023",
  progress: 36,
  modules: [
    {
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
    },
    {
      id: "module-2",
      title: "Instalacja",
      completed: true,
      lessons: [
        {
          id: "lesson-2-1",
          title: "Instalacja",
          displayTitle: "Lekcja 2 - Instalacja Flowise na Windows: Lokalnie i w Chmurze",
          description: "W tej lekcji nauczysz się instalować Flowise zarówno lokalnie na systemie Windows, jak i w środowisku chmurowym. Poznasz różnice między obydwoma podejściami i dowiesz się, które z nich wybrać w zależności od Twoich potrzeb.",
          videoUrl: "mux:Tvjg623oMCLmqZqruGnWlnuFPABieZfiZ3pbX6HIoxg",
          additionalVideos: [
            {
              title: "Dodatkowo o instalacji",
              videoUrl: "mux:ti1ULAh6YUlpwAPWh3FWEyYWN6QIMWInsoA6WCpmdd4",
              description: `Instalacja Flowise na Windows – Lokalnie i w Chmurze

W tej instrukcji omówimy dwa podejścia do instalacji Flowise – instalację lokalną oraz instalację w chmurze. Zanim przejdziemy do szczegółowej konfiguracji, warto zrozumieć, czym różnią się te dwa sposoby instalacji, jakie są ich zalety i wady, oraz dla jakich zastosowań każdy z nich jest optymalny.`
            }
          ],
          completed: true
        }
      ]
    },
    {
      id: "module-3",
      title: "Aktualizowanie",
      completed: false,
      lessons: [
        {
          id: "lesson-3-1",
          title: "Aktualizowanie",
          displayTitle: "Lekcja 3 - Jak Zaktualizować Flowise: Przegląd Metod",
          description: "Ta lekcja przedstawia różne metody aktualizacji Flowise do najnowszej wersji. Dowiesz się jak bezpiecznie przeprowadzić update i uniknąć potencjalnych problemów.",
          videoUrl: "https://example.com/video3.mp4",
          completed: false
        }
      ]
    },
    {
      id: "module-4",
      title: "Podstawy",
      completed: false,
      lessons: [
        {
          id: "lesson-4-1",
          title: "Podstawy",
          displayTitle: "Lekcja 4 - Przewodnik po podstawach Flowise",
          description: "W tej lekcji poznasz podstawowe funkcje i interfejs Flowise. Nauczysz się nawigować po aplikacji i zrozumiesz kluczowe koncepcje.",
          videoUrl: "https://example.com/video4.mp4",
          completed: false
        }
      ]
    },
    {
      id: "module-5",
      title: "Pierwszy flow",
      completed: false,
      lessons: [
        {
          id: "lesson-5-1",
          title: "Pierwszy flow",
          displayTitle: "Lekcja 5 - Jak Zbudować Pierwszy Przepływ",
          description: "W tej lekcji stworzysz swój pierwszy przepływ w Flowise. Krok po kroku przejdziesz przez proces tworzenia prostej aplikacji AI.",
          videoUrl: "https://example.com/video5.mp4",
          completed: false
        }
      ]
    },
    {
      id: "module-6",
      title: "Monitorowanie",
      completed: false,
      lessons: [
        {
          id: "lesson-6-1",
          title: "Monitorowanie",
          displayTitle: "Lekcja 6 - Jak Monitorować Aplikacje z Modelami AI",
          description: "Ta lekcja pokaże Ci, jak skutecznie monitorować działanie Twoich aplikacji AI stworzonych w Flowise i analizować ich wydajność.",
          videoUrl: "https://example.com/video6.mp4",
          completed: false
        }
      ]
    },
    {
      id: "module-7",
      title: "Prompt Chain",
      completed: false,
      lessons: [
        {
          id: "lesson-7-1",
          title: "Prompt Chain",
          displayTitle: "Lekcja 7 - Weryfikacja informacji i łączenie źródeł",
          description: "W tej lekcji nauczysz się, jak weryfikować informacje zwracane przez modele AI i łączyć różne źródła danych.",
          videoUrl: "https://example.com/video7.mp4",
          completed: false
        }
      ]
    },
    {
      id: "module-8",
      title: "Zewnętrzne API",
      completed: false,
      lessons: [
        {
          id: "lesson-8-1",
          title: "Zewnętrzne API",
          displayTitle: "Lekcja 8 - Integracja Flowise z zewnętrznymi API",
          description: "Ta lekcja pokaże Ci, jak integrować Flowise z zewnętrznymi API i systemami, aby rozszerzyć funkcjonalność Twoich aplikacji AI.",
          videoUrl: "https://example.com/video8.mp4",
          completed: false
        }
      ]
    },
    {
      id: "module-9",
      title: "Baza wektorowa",
      completed: false,
      lessons: [
        {
          id: "lesson-9-1",
          title: "Baza wektorowa",
          displayTitle: "Lekcja 9 - Praktyczne przykłady: Wdrażanie w biznesie",
          description: "W tej lekcji przeanalizujesz praktyczne przykłady wykorzystania Flowise w różnych branżach i zastosowaniach biznesowych.",
          videoUrl: "https://example.com/video9.mp4",
          completed: false
        }
      ]
    },
    {
      id: "module-10",
      title: "Agenci",
      completed: false,
      lessons: [
        {
          id: "lesson-10-1",
          title: "Agenci",
          displayTitle: "Lekcja 10 - Moderacja Tekstu i Zaawansowane przepływy",
          description: "Ta lekcja pokaże Ci zaawansowane techniki moderacji tekstu i tworzenia złożonych przepływów w Flowise.",
          videoUrl: "https://example.com/video10.mp4",
          completed: false
        }
      ]
    },
    {
      id: "module-11",
      title: "Webhooki",
      completed: false,
      lessons: [
        {
          id: "lesson-11-1",
          title: "Webhooki",
          displayTitle: "Lekcja 11 - Aplikacja Facebook",
          description: "W tej lekcji nauczysz się, jak zintegrować Flowise z Facebookiem i tworzyć aplikacje AI dla tej platformy.",
          videoUrl: "https://example.com/video11.mp4",
          completed: false
        }
      ]
    }
  ]
};

