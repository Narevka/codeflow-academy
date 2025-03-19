
import { Module } from "@/types/course";

export const introductionModule: Module = {
  id: "module-1",
  title: "Wprowadzenie do LangChain",
  completed: true,
  lessons: [
    {
      id: "lesson-1-1",
      title: "Czym jest LangChain",
      displayTitle: "Lekcja 1 - Wprowadzenie do LangChain i podstawowych koncepcji",
      description: `LangChain to framework, który umożliwia tworzenie aplikacji wykorzystujących duże modele językowe (LLM). W tej lekcji poznasz podstawowe koncepcje LangChain i jego możliwości.

Framework ten upraszcza pracę z modelami językowymi, umożliwiając:
- Łączenie modeli z zewnętrznymi źródłami danych
- Budowanie interaktywnych agentów AI
- Tworzenie pamięci dla konwersacji
- Implementację systemów RAG (Retrieval Augmented Generation)

Zrozumiesz również, dlaczego LangChain stał się jednym z najpopularniejszych narzędzi w ekosystemie AI oraz jak komponenty LangChain współpracują ze sobą, tworząc potężne aplikacje.`,
      videoUrl: "https://example.com/langchain-intro.mp4",
      thumbnailUrl: "/langchain-thumbnail.png",
      completed: true
    },
    {
      id: "lesson-1-2",
      title: "Architektura LangChain",
      displayTitle: "Lekcja 2 - Architektura LangChain i komponenty",
      description: `W tej lekcji zagłębimy się w architekturę LangChain i poznamy jego główne komponenty:

1. **Models**: Interfejs do pracy z różnymi modelami językowymi (OpenAI, Anthropic, lokalne modele)
2. **Prompts**: Narzędzia do zarządzania i optymalizacji promptów
3. **Chains**: Sekwencyjne łączenie komponentów do bardziej złożonych przepływów
4. **Memory**: Mechanizmy przechowywania informacji pomiędzy zapytaniami
5. **Indexes**: Struktury danych do efektywnego przechowywania i wyszukiwania informacji
6. **Agents**: Autonomiczne systemy zdolne do planowania i wykonywania zadań

Ta lekcja stanowi fundament dla zrozumienia, jak LangChain organizuje komponenty do budowy aplikacji AI.`,
      videoUrl: "https://example.com/langchain-architecture.mp4",
      thumbnailUrl: "/langchain-arch-thumbnail.png",
      completed: true,
      isQuest: true
    }
  ]
};
