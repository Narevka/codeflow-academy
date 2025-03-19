
import { Module } from "@/types/course";

export const agentsModule: Module = {
  id: "module-4",
  title: "Agenty",
  completed: false,
  lessons: [
    {
      id: "lesson-4-1",
      title: "Wprowadzenie do agentów",
      displayTitle: "Lekcja 7 - Wprowadzenie do agentów LangChain",
      description: `Agenty to jedna z najbardziej zaawansowanych funkcjonalności LangChain, umożliwiająca modelom językowym podejmowanie decyzji i wykonywanie działań. W tej lekcji poznasz:

1. Czym są agenty i jak działają
2. Modele rozumowania agentów (ReAct, Plan-and-Execute)
3. Podstawową strukturę agenta w LangChain
4. Przykłady prostych agentów

Agenty pozwalają na stworzenie autonomicznych systemów AI, które mogą planować i wykonywać zadania, korzystając z różnych narzędzi i źródeł informacji.`,
      videoUrl: "https://example.com/langchain-agents-intro.mp4",
      thumbnailUrl: "/langchain-agents-intro-thumbnail.png",
      completed: false
    },
    {
      id: "lesson-4-2",
      title: "Narzędzia i rozumowanie agentów",
      displayTitle: "Lekcja 8 - Narzędzia i rozumowanie agentów",
      description: `W tej lekcji zagłębimy się w praktyczne aspekty tworzenia agentów LangChain:

1. Tworzenie własnych narzędzi dla agentów
2. Kontrolowanie procesu rozumowania agenta
3. Debugowanie agentów
4. Optymalizacja wydajności i kosztów

Nauczysz się, jak definiować narzędzia, które agent może wykorzystywać do realizacji zadań, oraz jak kontrolować proces podejmowania decyzji przez agenta. Zrozumiesz również, jak równoważyć autonomię agenta z zachowaniem kontroli nad jego działaniami.`,
      videoUrl: "https://example.com/langchain-agent-tools.mp4",
      thumbnailUrl: "/langchain-agent-tools-thumbnail.png",
      completed: false,
      isQuest: true
    }
  ]
};
