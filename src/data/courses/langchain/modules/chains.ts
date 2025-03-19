
import { Module } from "@/types/course";

export const chainsModule: Module = {
  id: "module-3",
  title: "Łańcuchy (Chains)",
  completed: false,
  lessons: [
    {
      id: "lesson-3-1",
      title: "Podstawy łańcuchów",
      displayTitle: "Lekcja 5 - Podstawy łańcuchów w LangChain",
      description: `Łańcuchy (chains) są jednym z kluczowych elementów LangChain, umożliwiających łączenie różnych komponentów w sekwencyjne operacje. W tej lekcji nauczysz się:

1. Czym są łańcuchy i do czego służą
2. Jak tworzyć proste łańcuchy
3. Jak łączyć łańcuchy w bardziej złożone sekwencje
4. Rodzaje wbudowanych łańcuchów dostępnych w LangChain

Łańcuchy pozwalają na przekształcanie danych przez sekwencję operacji, gdzie wyjście jednego komponentu staje się wejściem dla kolejnego. To potężna koncepcja, która pozwala budować złożone przepływy pracy z prostszych elementów.`,
      videoUrl: "https://example.com/langchain-chains-basics.mp4",
      thumbnailUrl: "/langchain-chains-basics-thumbnail.png",
      completed: false
    },
    {
      id: "lesson-3-2",
      title: "Zaawansowane łańcuchy",
      displayTitle: "Lekcja 6 - Zaawansowane łańcuchy i ich zastosowania",
      description: `W tej lekcji zgłębimy bardziej zaawansowane typy łańcuchów dostępnych w LangChain i ich praktyczne zastosowania:

1. **SequentialChain** - łączenie wielu łańcuchów, gdzie każdy produkuje własne wyjście
2. **RouterChain** - dynamiczne wybieranie, który łańcuch powinien zostać użyty
3. **ConstitutionalChain** - zapewnianie zgodności odpowiedzi z zdefiniowanymi zasadami
4. **RetrievalQAChain** - łańcuchy do odpowiadania na pytania w oparciu o zewnętrzne dokumenty

Nauczysz się, jak dobierać odpowiedni typ łańcucha do konkretnego zadania oraz jak pisać wydajny i czytelny kod wykorzystujący zaawansowane funkcje LangChain.`,
      videoUrl: "https://example.com/langchain-advanced-chains.mp4",
      thumbnailUrl: "/langchain-advanced-chains-thumbnail.png",
      completed: false,
      isQuest: true
    }
  ]
};
