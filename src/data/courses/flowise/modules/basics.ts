
import { Module } from "@/types/course";

export const basicsModule: Module = {
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
};
