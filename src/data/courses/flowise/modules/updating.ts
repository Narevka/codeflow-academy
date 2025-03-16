
import { Module } from "@/types/course";

export const updatingModule: Module = {
  id: "module-3",
  title: "Aktualizowanie",
  completed: false,
  lessons: [
    {
      id: "lesson-3-1",
      title: "Aktualizowanie",
      displayTitle: "Lekcja 3 - Jak Zaktualizować Flowise: Przegląd Metod",
      description: "Ta lekcja przedstawia różne metody aktualizacji Flowise do najnowszej wersji. Dowiesz się jak bezpiecznie przeprowadzić update i uniknąć potencjalnych problemów.",
      videoUrl: "https://example.com/video3.mp4",
      completed: false
    }
  ]
};
