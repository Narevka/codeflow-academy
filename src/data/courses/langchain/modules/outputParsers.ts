
import { Module } from "@/types/course";

export const outputParsersModule: Module = {
  id: "module-9",
  title: "Parsery wyjścia",
  completed: false,
  lessons: [
    {
      id: "lesson-9-1",
      title: "Formatowanie wyjścia",
      displayTitle: "Lekcja 17 - Formatowanie wyjścia z modeli językowych",
      description: `Modele językowe zazwyczaj generują tekst, który wymaga dalszego przetwarzania. W tej lekcji poznasz:

1. Wyzwania związane z parsowaniem wyjścia z LLM
2. Strategie formatowania promptów dla ustrukturyzowanych odpowiedzi
3. Podstawowe techniki parsowania tekstu
4. Obsługa błędów i przypadków granicznych

Zrozumiesz, jak projektować prompty, które zachęcają modele do generowania odpowiedzi w pożądanym formacie, co ułatwia ich dalsze przetwarzanie.`,
      videoUrl: "https://example.com/langchain-output-formatting.mp4",
      thumbnailUrl: "/langchain-output-formatting-thumbnail.png",
      completed: false
    },
    {
      id: "lesson-9-2",
      title: "Zaawansowane parsery",
      displayTitle: "Lekcja 18 - Zaawansowane parsery wyjścia w LangChain",
      description: `LangChain oferuje zaawansowane parsery, które upraszczają przetwarzanie odpowiedzi modeli. W tej lekcji nauczysz się:

1. Wykorzystywanie wbudowanych parserów (StructuredOutputParser, JsonOutputParser)
2. Definiowanie własnych schematów wyjściowych
3. Integracja z bibliotekami walidacji (Zod, Pydantic)
4. Tworzenie złożonych parserów dla specyficznych potrzeb

Poznasz techniki, które pozwalają konsekwentnie otrzymywać ustrukturyzowane dane z modeli języklowych, gotowe do użycia w aplikacjach.`,
      videoUrl: "https://example.com/langchain-advanced-parsers.mp4",
      thumbnailUrl: "/langchain-advanced-parsers-thumbnail.png",
      completed: false,
      isQuest: true
    }
  ]
};
