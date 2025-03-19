
import { Module } from "@/types/course";

export const chainsModule: Module = {
  id: "chains",
  title: "Łańcuchy",
  completed: false,
  lessons: [
    {
      id: "chains-basics",
      title: "Podstawy łańcuchów",
      displayTitle: "Łańcuchy w LangChain: Wprowadzenie",
      description: "Łańcuchy (Chains) są jednym z fundamentalnych konceptów w LangChain, umożliwiającym łączenie komponentów w sekwencyjne przepływy pracy. W tej lekcji poznasz podstawy łańcuchów i ich praktyczne zastosowania.\n\n## Czym są łańcuchy?\n\nŁańcuchy w LangChain to sekwencje komponentów (np. modeli, promptów, narzędzi), połączonych w logiczny przepływ pracy. Umożliwiają:\n- Przetwarzanie danych przez wiele etapów\n- Kombinowanie różnych funkcjonalności\n- Tworzenie złożonych aplikacji LLM\n\n## Podstawowe typy łańcuchów\n\n- **LLMChain** - najprostszy łańcuch, łączący prompt z modelem LLM\n- **SequentialChain** - sekwencja łańcuchów, gdzie wyjście jednego jest wejściem do następnego\n- **RouterChain** - dynamicznie wybiera, który łańcuch uruchomić na podstawie wejścia\n- **TransformationChain** - transformuje dane bez użycia LLM\n\n## Przykład implementacji łańcucha\n\n```python\nfrom langchain.chains import LLMChain\nfrom langchain.prompts import PromptTemplate\nfrom langchain.llms import OpenAI\n\nprompt = PromptTemplate(\n    input_variables=[\"product\"],\n    template=\"Napisz krótki opis produktu: {product}\"\n)\n\nchain = LLMChain(llm=OpenAI(), prompt=prompt)\nresult = chain.run(\"smartfon składany\")\n```\n\nPoznasz również najlepsze praktyki projektowania, debugowania i optymalizacji łańcuchów.",
      completed: false,
      videoUrl: "https://example.com/langchain-chains-basics.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      transcript: []
    },
    {
      id: "quest-agent-chains",
      title: "QUEST: Zbuduj agenta z łańcuchami",
      displayTitle: "QUEST: Zaawansowany agent LangChain z wieloma łańcuchami",
      description: "W tym praktycznym zadaniu zbudujesz zaawansowanego agenta LangChain, który będzie wykorzystywał wiele narzędzi i łańcuchów do rozwiązywania złożonych problemów.\n\n## Zadanie\n\n1. Zaprojektuj i zaimplementuj agenta, który pomoże użytkownikowi w planowaniu podróży. Agent powinien:\n   - Zbierać preferencje użytkownika (budżet, czas, zainteresowania)\n   - Wyszukiwać informacje o destynacjach, atrakcjach i cenach\n   - Generować spersonalizowany plan podróży\n   - Odpowiadać na pytania dotyczące planu\n\n2. Twój agent powinien wykorzystywać co najmniej:\n   - 3 różne narzędzia (np. wyszukiwarka, analizator pogody, kalkulator budżetu)\n   - 2 różne łańcuchy (np. łańcuch zbierania preferencji, łańcuch generowania planu)\n   - Pamięć do przechowywania kontekstu konwersacji\n\n3. Zaimplementuj mechanizm wyjaśniania decyzji agenta\n\n4. Przetestuj agenta w różnych scenariuszach podróży\n\n## Kryteria oceny\n\n- Jakość i użyteczność wygenerowanych planów\n- Integracja narzędzi i łańcuchów\n- Naturalna interakcja konwersacyjna\n- Obsługa różnych preferencji i scenariuszy\n\nUkończenie tego zadania da Ci praktyczne umiejętności tworzenia zaawansowanych systemów AI z wieloma komponentami, które są kluczowym zastosowaniem LangChain w rzeczywistych projektach.",
      completed: false,
      videoUrl: "https://example.com/langchain-quest-agent-chains.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      transcript: []
    }
  ]
};
