import { Module } from "@/types/course";

export const introductionModule: Module = {
  id: "module-1",
  title: "Wprowadzenie",
  completed: true,
  lessons: [
    {
      id: "lesson-1-1",
      title: "Wprowadzenie",
      displayTitle: "Lekcja 1 - Wprowadzenie do Flowise AI: Budowanie nowoczesnych aplikacji AI",
      description: "W tej lekcji wprowadzającej poznasz podstawy Flowise AI oraz możliwości, jakie daje to narzędzie w tworzeniu aplikacji opartych na sztucznej inteligencji bez konieczności programowania.",
      videoUrl: "mux:V2H6uhyDvaXZ02dgOYeNSZkULeWye00q3rTzkQ2YZbJIw",
      additionalVideos: [
        {
          title: "Czym jest Flowise AI",
          videoUrl: "mux:sVnpYWjzZqmn6FOYBdymJ9htg2AcomJqIOBKF3nHlH00",
          description: `Wprowadzenie do Flowise AI

Flowise AI to nowoczesne narzędzie no-code, które pozwala na tworzenie zaawansowanych aplikacji wykorzystujących sztuczną inteligencję, bez konieczności pisania kodu. Dzięki intuicyjnemu interfejsowi graficznemu, każdy może projektować i wdrażać rozwiązania oparte na dużych modelach językowych (LLM) takich jak GPT-4, Claude czy Gemini.

Główne zalety Flowise AI:

1. Intuicyjny interfejs wizualny
   * Projektowanie aplikacji poprzez łączenie bloków funkcjonalnych
   * Widoczne przepływy danych i procesy przetwarzania
   * Natychmiastowy podgląd i testowanie aplikacji

2. Szerokie możliwości integracji
   * Gotowe połączenia z popularnymi modelami AI
   * Integracja z zewnętrznymi API i bazami danych
   * Możliwość dodawania własnych komponentów

3. Optymalizacja kosztów
   * Kontrola nad zużyciem tokenów
   * Możliwość wyboru modeli o różnych parametrach cenowych
   * Efektywne zarządzanie zasobami

Zastosowania Flowise AI:

* Tworzenie chatbotów i asystentów AI
* Automatyzacja procesów biznesowych
* Analiza i przetwarzanie dokumentów
* Generowanie treści i raportów
* Budowanie aplikacji opartych na wiedzy z baz danych
* Personalizacja doświadczeń użytkowników

W ramach tego kursu nauczysz się wykorzystywać pełen potencjał Flowise AI, począwszy od podstaw instalacji, poprzez tworzenie pierwszych aplikacji, aż po zaawansowane zastosowania i wdrażanie rozwiązań produkcyjnych.`
        }
      ],
      completed: true
    }
  ]
};
