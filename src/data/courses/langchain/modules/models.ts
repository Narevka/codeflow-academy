
import { Module } from "@/types/course";

export const modelsModule: Module = {
  id: "models",
  title: "Praca z modelami językowymi",
  completed: false,
  lessons: [
    {
      id: "llm-basics",
      title: "Podstawy modeli LLM",
      displayTitle: "Zrozumienie modeli języka w LangChain",
      description: "Ta lekcja przedstawia podstawowe koncepcje związane z modelami językowymi w kontekście LangChain. Poznasz różne rodzaje modeli, ich zastosowania i jak efektywnie z nimi pracować.\n\n## Rodzaje modeli w LangChain\n\n- **LLMs** - tradycyjne modele językowe, które pobierają tekst i zwracają tekst\n- **Chat Models** - modele zoptymalizowane pod kątem konwersacji\n- **Text Embedding Models** - modele, które konwertują tekst na wektory liczbowe\n\n## Integracje z popularnymi modelami\n\nLangChain oferuje gotowe integracje z wiodącymi dostawcami modeli językowych:\n\n- OpenAI (GPT-3.5, GPT-4)\n- Anthropic (Claude)\n- Hugging Face (różne open-source modele)\n- Wiele innych\n\nNauczysz się, jak wybrać odpowiedni model do konkretnego przypadku użycia oraz jak efektywnie zarządzać kosztami i wydajnością.",
      completed: false,
      videoUrl: "https://example.com/langchain-llm-basics.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      transcript: []
    },
    {
      id: "prompts",
      title: "Inżynieria promptów",
      displayTitle: "Inżynieria promptów w LangChain",
      description: "Inżynieria promptów to sztuka formułowania zapytań do modeli językowych w sposób, który maksymalizuje jakość otrzymywanych odpowiedzi. W tej lekcji nauczysz się, jak konstruować efektywne prompty przy użyciu narzędzi dostępnych w LangChain.\n\n## Podstawowe koncepcje\n\n- **Prompty statyczne vs dynamiczne**\n- **Szablony promptów (PromptTemplates)**\n- **Zmienne w promptach**\n- **Przykłady typu few-shot**\n\n## Przykładowy szablon promptu\n\n```python\nfrom langchain.prompts import PromptTemplate\n\ntemplate = \"\"\"Odpowiedz na następujące pytanie o {temat}.\nPytanie: {pytanie}\n\"\"\"\n\nprompt = PromptTemplate(\n    input_variables=[\"temat\", \"pytanie\"],\n    template=template\n)\n```\n\nPonadto poznasz zaawansowane techniki, takie jak łańcuchy promptów, automatyczne generowanie przykładów i optymalizacja promptów pod kątem konkretnych zadań.",
      completed: false,
      videoUrl: "https://example.com/langchain-prompts.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      transcript: []
    },
    {
      id: "quest-prompts",
      title: "QUEST: Stwórz zaawansowany prompt",
      displayTitle: "QUEST: Projektowanie zaawansowanych promptów",
      description: "W tym praktycznym zadaniu wykorzystasz wiedzę o inżynierii promptów, aby stworzyć i przetestować zaawansowane szablony promptów dla różnych zastosowań.\n\n## Zadanie\n\n1. Zaprojektuj szablon promptu do jednego z następujących zastosowań:\n   - Automatyczne generowanie treści marketingowych\n   - System wspierający decyzje biznesowe\n   - Asystent programisty do refaktoryzacji kodu\n\n2. Twój prompt powinien uwzględniać:\n   - Co najmniej 3 zmienne wejściowe\n   - Przykłady few-shot (minimum 2)\n   - Jasne instrukcje dla modelu\n   - Określony format wyjścia\n\n3. Zaimplementuj szablon przy użyciu LangChain\n\n4. Przetestuj prompt z różnymi wartościami wejściowymi\n\n## Kryteria oceny\n\n- Jakość i spójność wygenerowanych odpowiedzi\n- Elastyczność szablonu\n- Efektywność instrukcji\n- Prawidłowe zastosowanie koncepcji z lekcji\n\nPomyślne ukończenie tego zadania da Ci praktyczne umiejętności projektowania promptów, które są kluczowe dla tworzenia efektywnych aplikacji LLM.",
      completed: false,
      videoUrl: "https://example.com/langchain-quest-prompts.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      transcript: []
    }
  ]
};
