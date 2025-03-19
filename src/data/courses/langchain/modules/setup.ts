
import { Module } from "@/types/course";

export const setupModule: Module = {
  id: "setup",
  title: "Konfiguracja środowiska",
  completed: false,
  lessons: [
    {
      id: "installation",
      title: "Instalacja i konfiguracja",
      displayTitle: "Instalacja LangChain",
      description: "W tej lekcji dowiesz się, jak skonfigurować środowisko deweloperskie do pracy z LangChain. Przeprowadzimy Cię przez proces instalacji i konfiguracji wszystkich niezbędnych narzędzi.\n\n## Wymagania wstępne\n\n- Python 3.8+\n- Podstawowa znajomość programowania w Python\n- Zapoznanie się z koncepcjami AI i LLM\n\n## Instalacja LangChain\n\n```bash\npip install langchain\n```\n\nZależnie od tego, z jakimi modelami i narzędziami chcesz pracować, możesz potrzebować dodatkowych pakietów:\n\n```bash\npip install openai faiss-cpu tiktoken\n```\n\n## Konfiguracja klucza API\n\nWiększość aplikacji LangChain korzysta z zewnętrznych modeli LLM. Pokażemy, jak skonfigurować klucze API dla popularnych usług OpenAI, Anthropic i Hugging Face.",
      completed: true,
      videoUrl: "https://example.com/langchain-setup.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      transcript: []
    },
    {
      id: "quest-setup",
      title: "QUEST: Stwórz pierwsze środowisko LangChain",
      displayTitle: "QUEST: Skonfiguruj swoje pierwsze środowisko LangChain",
      description: "W tym zadaniu wykorzystasz wiedzę z poprzedniej lekcji, aby samodzielnie skonfigurować środowisko deweloperskie dla LangChain.\n\n## Zadanie\n\n1. Utwórz nowe wirtualne środowisko Python\n2. Zainstaluj wymagane pakiety LangChain\n3. Skonfiguruj klucze API dla wybranego dostawcy LLM\n4. Napisz i uruchom prosty skrypt testujący połączenie\n\n## Wymagania\n\n- Skrypt powinien pomyślnie połączyć się z API modelu językowego\n- Skrypt powinien wyświetlić prostą odpowiedź na zapytanie tekstowe\n\n## Wskazówki\n\n- Możesz skorzystać z darmowego kredytu testowego OpenAI\n- Sprawdź, czy zmienne środowiskowe są poprawnie skonfigurowane\n- Używaj funkcji pomocniczych LangChain do debugowania połączeń\n\nPo wykonaniu zadania będziesz gotowy do tworzenia bardziej zaawansowanych aplikacji LangChain w kolejnych lekcjach.",
      completed: false,
      videoUrl: "https://example.com/langchain-quest-setup.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      transcript: []
    }
  ]
};
