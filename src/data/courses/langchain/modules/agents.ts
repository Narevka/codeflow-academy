
import { Module } from "@/types/course";

export const agentsModule: Module = {
  id: "agents",
  title: "Agenci LangChain",
  completed: false,
  lessons: [
    {
      id: "agents-basics",
      title: "Podstawy agentów",
      displayTitle: "Wprowadzenie do agentów LangChain",
      description: "Agenci to jedna z najpotężniejszych koncepcji w LangChain, pozwalająca modelom językowym samodzielnie planować i wykonywać złożone zadania. W tej lekcji poznasz podstawy agentów LangChain i ich praktyczne zastosowania.\n\n## Czym są agenci?\n\nAgenci to systemy, które wykorzystują modele językowe do:\n- Analizy problemu\n- Planowania kroków do jego rozwiązania\n- Wyboru i użycia odpowiednich narzędzi\n- Interpretacji wyników i podejmowania dalszych działań\n\n## Architektura agenta\n\n- **Model LLM** - \"mózg\" agenta, podejmujący decyzje\n- **Narzędzia** - funkcje, które agent może wykorzystać\n- **Pamięć** - przechowywanie kontekstu i historii działań\n- **Łańcuch pracy agenta** - organizacja procesu podejmowania decyzji\n\n## Przykładowa implementacja\n\n```python\nfrom langchain.agents import initialize_agent, Tool\nfrom langchain.llms import OpenAI\n\ntools = [\n    Tool(\n        name=\"Wyszukiwarka\",\n        func=search_function,\n        description=\"Wyszukuje informacje w internecie\"\n    )\n]\n\nagent = initialize_agent(tools, OpenAI(), agent=\"zero-shot-react-description\")\nresult = agent.run(\"Jaka była pogoda w Warszawie wczoraj?\")\n```\n\nDowiesz się również o różnych typach agentów, strategiach ich oceny i debugowania.",
      completed: false,
      videoUrl: "https://example.com/langchain-agents-basics.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      transcript: []
    },
    {
      id: "tools-integration",
      title: "Integracja narzędzi",
      displayTitle: "Integracja narzędzi z agentami LangChain",
      description: "Narzędzia są kluczowym elementem agentów LangChain, pozwalającym im na interakcję ze światem zewnętrznym. W tej lekcji nauczysz się, jak integrować różne narzędzia z agentami i tworzyć własne narzędzia dostosowane do specyficznych potrzeb.\n\n## Rodzaje narzędzi\n\n- **Narzędzia wbudowane** - np. wyszukiwarka, kalkulator, bazy wiedzy\n- **API zewnętrzne** - integracja z usługami zewnętrznymi\n- **Narzędzia lokalne** - dostęp do lokalnych zasobów i funkcji\n- **Narzędzia niestandardowe** - własne implementacje\n\n## Implementacja własnego narzędzia\n\n```python\nfrom langchain.agents import Tool\n\ndef get_weather(location):\n    # Kod pobierający dane pogodowe\n    return f\"Pogoda w {location}: słonecznie, 22°C\"\n\nweather_tool = Tool(\n    name=\"PogodaAPI\",\n    func=get_weather,\n    description=\"Sprawdza aktualną pogodę w podanej lokalizacji. Input powinien być nazwą miasta.\"\n)\n```\n\n## Najlepsze praktyki\n\n- Jasne opisy narzędzi\n- Precyzyjne specyfikacje wejścia/wyjścia\n- Obsługa błędów i walidacja\n- Bezpieczeństwo i zarządzanie uprawnieniami\n\nPoznasz również zaawansowane techniki, takie jak narzędzia z pamięcią, narzędzia łańcuchowe i strategie wyboru narzędzi.",
      completed: false,
      videoUrl: "https://example.com/langchain-tools-integration.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      transcript: []
    }
  ]
};
