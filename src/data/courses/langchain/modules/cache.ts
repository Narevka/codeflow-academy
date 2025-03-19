
import { Module } from "@/types/course";

export const cacheModule: Module = {
  id: "module-10",
  title: "Cachowanie",
  completed: false,
  lessons: [
    {
      id: "lesson-10-1",
      title: "Podstawy cachowania",
      displayTitle: "Lekcja 19 - Podstawy cachowania w LangChain",
      description: `Cachowanie jest kluczową techniką optymalizacji kosztów i wydajności aplikacji opartych na LLM. W tej lekcji poznasz:

1. Znaczenie cachowania w kontekście modeli językowych
2. Wbudowane mechanizmy cachowania w LangChain
3. Strategie invalidacji cache
4. Monitorowanie efektywności cachowania

Zrozumiesz, jak cachowanie może znacząco zmniejszyć koszty operacyjne oraz poprawić czas odpowiedzi aplikacji opartych na LLM.`,
      videoUrl: "https://example.com/langchain-caching-basics.mp4",
      thumbnailUrl: "/langchain-caching-basics-thumbnail.png",
      completed: false
    },
    {
      id: "lesson-10-2",
      title: "Zaawansowane strategie cachowania",
      displayTitle: "Lekcja 20 - Zaawansowane strategie cachowania",
      description: `W tej lekcji zgłębimy bardziej zaawansowane aspekty cachowania w LangChain:

1. Integracja z zewnętrznymi systemami cache (Redis, Momento)
2. Semantyczne cachowanie oparte na embeddingach
3. Dostosowywanie strategii cachowania do konkretnych przypadków użycia
4. Cache rozproszone dla aplikacji wielowęzłowych

Nauczysz się implementować zaawansowane strategie cachowania, które pozwalają zrównoważyć aktualność danych, koszty i wydajność.`,
      videoUrl: "https://example.com/langchain-advanced-caching.mp4",
      thumbnailUrl: "/langchain-advanced-caching-thumbnail.png",
      completed: false,
      isQuest: true
    }
  ]
};
