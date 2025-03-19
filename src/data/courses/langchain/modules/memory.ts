
import { Module } from "@/types/course";

export const memoryModule: Module = {
  id: "memory",
  title: "Zarządzanie pamięcią",
  completed: false,
  lessons: [
    {
      id: "memory-basics",
      title: "Podstawy pamięci w LangChain",
      displayTitle: "Mechanizmy pamięci w LangChain",
      description: "Modele językowe są z natury bezstanowe, co oznacza, że nie pamiętają wcześniejszych interakcji. W tej lekcji poznasz mechanizmy pamięci w LangChain, które umożliwiają tworzenie aplikacji ze świadomością kontekstu.\n\n## Typy pamięci w LangChain\n\n- **ConversationBufferMemory** - prosta pamięć przechowująca całą historię konwersacji\n- **ConversationBufferWindowMemory** - pamięć z ograniczonym oknem historii\n- **ConversationSummaryMemory** - pamięć wykorzystująca podsumowania do kompresji długich konwersacji\n- **VectorStoreMemory** - pamięć wykorzystująca bazy wektorowe do przechowywania i wyszukiwania informacji\n\n## Implementacja pamięci\n\n```python\nfrom langchain.memory import ConversationBufferMemory\n\nmemory = ConversationBufferMemory()\nmemory.chat_memory.add_user_message(\"Cześć! Jestem Anna.\")\nmemory.chat_memory.add_ai_message(\"Cześć Anna! Jak mogę Ci pomóc?\")\n\nprint(memory.load_memory_variables({}))\n```\n\nDowiesz się również o zaawansowanych technikach, takich jak zarządzanie długimi konwersacjami, selektywne zapominanie i łączenie różnych typów pamięci.",
      completed: false,
      videoUrl: "https://example.com/langchain-memory-basics.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      transcript: []
    },
    {
      id: "memory-applications",
      title: "Zastosowania pamięci",
      displayTitle: "Praktyczne zastosowania pamięci w aplikacjach LangChain",
      description: "W tej lekcji przyjrzymy się praktycznym zastosowaniom różnych mechanizmów pamięci w rzeczywistych aplikacjach LangChain. Nauczysz się, jak wybrać i skonfigurować odpowiedni typ pamięci dla konkretnych przypadków użycia.\n\n## Studium przypadku: Asystent konwersacyjny\n\nPrzeanalizujemy implementację asystenta konwersacyjnego z pamięcią długoterminową, który może:\n- Pamiętać preferencje użytkownika\n- Odwoływać się do wcześniejszych rozmów\n- Adaptować styl komunikacji\n\n## Studium przypadku: System dokumentacji technicznej\n\nImplementacja systemu dokumentacji technicznej, który wykorzystuje pamięć do:\n- Śledzenia, które sekcje zostały już wyjaśnione\n- Dostosowywania poziomu szczegółowości na podstawie wcześniejszych pytań\n- Utrzymywania spójności terminologicznej\n\n## Najlepsze praktyki\n\n- Obsługa długich konwersacji\n- Optymalizacja użycia tokenów\n- Zapewnienie prywatności i bezpieczeństwa danych\n- Debugowanie i testowanie systemów z pamięcią",
      completed: false,
      videoUrl: "https://example.com/langchain-memory-applications.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      transcript: []
    },
    {
      id: "quest-memory",
      title: "QUEST: Zbuduj asystenta z pamięcią",
      displayTitle: "QUEST: Implementacja asystenta z zaawansowaną pamięcią",
      description: "W tym praktycznym zadaniu zbudujesz asystenta konwersacyjnego z zaawansowanymi mechanizmami pamięci, który będzie w stanie prowadzić naturalne, kontekstowe rozmowy.\n\n## Zadanie\n\n1. Zaprojektuj i zaimplementuj asystenta konwersacyjnego, który:\n   - Zapamiętuje fakty o użytkowniku (imię, preferencje, poprzednie pytania)\n   - Wykorzystuje informacje historyczne do personalizacji odpowiedzi\n   - Efektywnie zarządza długimi konwersacjami\n\n2. Twój asystent powinien używać co najmniej dwóch różnych typów pamięci:\n   - Pamięć krótkoterminowa (ostatnie wypowiedzi)\n   - Pamięć długoterminowa (kluczowe fakty, preferencje)\n\n3. Zaimplementuj mechanizm selektywnego przywoływania istotnych informacji\n\n4. Przetestuj asystenta w scenariuszach konwersacyjnych\n\n## Kryteria oceny\n\n- Naturalność i płynność konwersacji\n- Efektywność wykorzystania zapamiętanych informacji\n- Wydajność (optymalizacja użycia tokenów)\n- Implementacja mechanizmów zarządzania pamięcią\n\nUkończenie tego zadania da Ci praktyczne umiejętności tworzenia zaawansowanych systemów konwersacyjnych, które są kluczowym zastosowaniem LangChain.",
      completed: false,
      videoUrl: "https://example.com/langchain-quest-memory.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      transcript: []
    }
  ]
};
