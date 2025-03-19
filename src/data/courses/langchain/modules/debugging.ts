
import { Module } from "@/types/course";

export const debuggingModule: Module = {
  id: "module-8",
  title: "Debugowanie",
  completed: false,
  lessons: [
    {
      id: "lesson-8-1",
      title: "Narzędzia debugowania",
      displayTitle: "Lekcja 15 - Narzędzia debugowania w LangChain",
      description: `Debugowanie aplikacji opartych na LLM to wyzwanie ze względu na ich probabilistyczną naturę. W tej lekcji poznasz:

1. Wykorzystanie Logger i Callbacks w LangChain
2. Śledzenie łańcuchów i agentów w czasie wykonania
3. Monitorowanie zużycia tokenów i kosztów
4. Strategie identyfikacji i rozwiązywania problemów

Zrozumiesz, jak skutecznie debugować złożone łańcuchy i agenty LangChain, aby tworzyć niezawodne aplikacje AI.`,
      videoUrl: "https://example.com/langchain-debugging.mp4",
      thumbnailUrl: "/langchain-debugging-thumbnail.png",
      completed: false
    },
    {
      id: "lesson-8-2",
      title: "Testowanie i ewaluacja",
      displayTitle: "Lekcja 16 - Testowanie i ewaluacja rozwiązań LangChain",
      description: `Testowanie aplikacji opartych na LLM wymaga specjalnych podejść. W tej lekcji nauczysz się:

1. Strategie testowania deterministycznego i probabilistycznego
2. Implementacja testów jednostkowych i integracyjnych
3. Ewaluacja jakości odpowiedzi modeli
4. Narzędzia do automatycznej ewaluacji w LangChain

Poznasz metody oceny skuteczności systemów AI i techniki poprawy ich jakości na podstawie zebranych danych.`,
      videoUrl: "https://example.com/langchain-testing.mp4",
      thumbnailUrl: "/langchain-testing-thumbnail.png",
      completed: false,
      isQuest: true
    }
  ]
};
