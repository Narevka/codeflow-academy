
import { Module } from "@/types/course";

export const documentLoaderModule: Module = {
  id: "module-6",
  title: "Ładowanie dokumentów",
  completed: false,
  lessons: [
    {
      id: "lesson-6-1",
      title: "Document Loaders",
      displayTitle: "Lekcja 11 - Document Loaders: wczytywanie danych z różnych źródeł",
      description: `LangChain oferuje szeroki zakres narzędzi do wczytywania dokumentów z różnych źródeł i formatów. W tej lekcji nauczysz się:

1. Jak działają Document Loaders w LangChain
2. Wczytywanie dokumentów z popularnych formatów (PDF, CSV, JSON, HTML)
3. Pobieranie danych z API i baz danych
4. Łączenie wielu źródeł danych

Poznasz także, jak efektywnie zarządzać dużymi zbiorami dokumentów i przygotowywać je do dalszego przetwarzania przez modele językowe.`,
      videoUrl: "https://example.com/langchain-document-loaders.mp4",
      thumbnailUrl: "/langchain-document-loaders-thumbnail.png",
      completed: false
    },
    {
      id: "lesson-6-2",
      title: "Transformacja dokumentów",
      displayTitle: "Lekcja 12 - Transformacja dokumentów i przygotowanie danych",
      description: `Po wczytaniu dokumentów często konieczne jest ich przekształcenie i przygotowanie do użycia z modelami językowymi. W tej lekcji poznasz:

1. Procesy podziału tekstu (text splitting) i ich znaczenie
2. Różne strategie podziału dokumentów (chunk size, overlap)
3. Transformatory dokumentów w LangChain
4. Przetwarzanie wstępne danych dla różnych zastosowań

Zrozumiesz, jak właściwy podział i transformacja dokumentów wpływają na jakość odpowiedzi modeli językowych oraz nauczysz się optymalizować te procesy dla konkretnych zastosowań.`,
      videoUrl: "https://example.com/langchain-document-transformation.mp4",
      thumbnailUrl: "/langchain-document-transformation-thumbnail.png",
      completed: false,
      isQuest: true
    }
  ]
};
