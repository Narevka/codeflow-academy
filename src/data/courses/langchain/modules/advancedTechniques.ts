
import { Module } from "@/types/course";

export const advancedTechniquesModule: Module = {
  id: "module-11",
  title: "Zaawansowane techniki",
  completed: false,
  lessons: [
    {
      id: "lesson-11-1",
      title: "Najlepsze praktyki",
      displayTitle: "Lekcja 21 - Najlepsze praktyki i wzorce projektowe",
      description: `W tej lekcji poznasz najlepsze praktyki i wzorce projektowe do tworzenia zaawansowanych aplikacji z LangChain:

1. Architektury skalujących się aplikacji LangChain
2. Strategie organizacji kodu i struktury projektu
3. Zarządzanie środowiskami (dev, staging, produkcja)
4. Równoważenie wydajności, kosztów i jakości odpowiedzi

Zrozumiesz, jak projektować i implementować produkcyjne aplikacje LangChain, które są skalowalne, utrzymywalne i efektywne kosztowo.`,
      videoUrl: "https://example.com/langchain-best-practices.mp4",
      thumbnailUrl: "/langchain-best-practices-thumbnail.png",
      completed: false,
      isQuest: true
    }
  ]
};
