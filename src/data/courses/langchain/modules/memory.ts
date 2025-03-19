
import { Module } from "@/types/course";

export const memoryModule: Module = {
  id: "module-5",
  title: "Pamięć konwersacji",
  completed: false,
  lessons: [
    {
      id: "lesson-5-1",
      title: "Podstawy pamięci",
      displayTitle: "Lekcja 9 - Podstawy pamięci w LangChain",
      description: `Pamięć jest kluczowym elementem aplikacji konwersacyjnych, umożliwiającym modelom "pamiętanie" wcześniejszych interakcji. W tej lekcji nauczysz się:

1. Jak działają różne typy pamięci w LangChain
2. Implementacja BufferMemory dla prostych zastosowań
3. Zarządzanie kontekstem rozmowy
4. Ograniczenia pamięci i jak sobie z nimi radzić

Poznasz również, jak efektywnie zarządzać długością kontekstu i zapobiegać przekraczaniu limitów tokenów modeli języowych.`,
      videoUrl: "https://example.com/langchain-memory-basics.mp4",
      thumbnailUrl: "/langchain-memory-basics-thumbnail.png",
      completed: false
    },
    {
      id: "lesson-5-2",
      title: "Zaawansowane typy pamięci",
      displayTitle: "Lekcja 10 - Zaawansowane typy pamięci i ich zastosowania",
      description: `W tej lekcji omówimy bardziej zaawansowane typy pamięci dostępne w LangChain:

1. **ConversationSummaryMemory** - kompresowanie długich rozmów poprzez ich streszczanie
2. **ConversationEntityMemory** - śledzenie jednostek (osób, miejsc, rzeczy) wspomnianych w rozmowie
3. **VectorStoreRetrieverMemory** - wykorzystanie wektorowych baz danych do przechowywania informacji
4. **Pamięć hierarchiczna** - łączenie różnych typów pamięci

Nauczysz się, jak wybierać odpowiedni typ pamięci dla konkretnych zastosowań oraz jak implementować własne rozwiązania pamięci dla specjalistycznych przypadków użycia.`,
      videoUrl: "https://example.com/langchain-advanced-memory.mp4",
      thumbnailUrl: "/langchain-advanced-memory-thumbnail.png",
      completed: false,
      isQuest: true
    }
  ]
};
