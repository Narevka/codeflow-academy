
import { Module } from "@/types/course";

export const installationModule: Module = {
  id: "module-2",
  title: "Instalacja i konfiguracja",
  completed: true,
  lessons: [
    {
      id: "lesson-2-1",
      title: "Instalacja LangChain",
      displayTitle: "Lekcja 3 - Instalacja LangChain i konfiguracja środowiska",
      description: `W tej lekcji nauczysz się, jak zainstalować LangChain i skonfigurować środowisko programistyczne. Przejdziemy przez proces instalacji zarówno dla JavaScript/TypeScript, jak i dla Pythona, dając ci wybór platformy rozwojowej.

**Instalacja dla JavaScript/TypeScript:**
\`\`\`bash
npm install langchain
# lub
yarn add langchain
\`\`\`

**Instalacja dla Python:**
\`\`\`bash
pip install langchain
\`\`\`

Poznasz również, jak skonfigurować klucze API dla różnych modeli języowych, takich jak OpenAI, Anthropic i HuggingFace, oraz jak korzystać z zmiennych środowiskowych do bezpiecznego przechowywania tych kluczy.`,
      videoUrl: "https://example.com/langchain-install.mp4",
      thumbnailUrl: "/langchain-install-thumbnail.png",
      completed: true
    },
    {
      id: "lesson-2-2",
      title: "Pierwsze kroki z LangChain",
      displayTitle: "Lekcja 4 - Pierwsze kroki z LangChain: prosty chatbot",
      description: `W tej lekcji utworzymy nasz pierwszy prosty projekt z LangChain - podstawowy chatbot. Nauczysz się:

1. Inicjalizować model językowy (LLM)
2. Tworzyć proste łańcuchy (chains)
3. Zarządzać historią konwersacji
4. Testować chatbota w środowisku deweloperskim

Przykładowy kod JavaScript:
\`\`\`javascript
import { ChatOpenAI } from "langchain/chat_models/openai";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";

// Inicjalizacja modelu
const chat = new ChatOpenAI({ temperature: 0.7 });

// Utwórz łańcuch konwersacji z pamięcią
const chain = new ConversationChain({
  llm: chat,
  memory: new BufferMemory(),
});

// Interakcja z chatem
const response = await chain.call({ input: "Powiedz mi coś o LangChain" });
console.log(response.response);
\`\`\`

Ta lekcja stanowi podstawę dla bardziej zaawansowanych koncepcji, które będziemy zgłębiać w kolejnych modułach.`,
      videoUrl: "https://example.com/langchain-first-steps.mp4",
      thumbnailUrl: "/langchain-first-steps-thumbnail.png",
      completed: true,
      isQuest: true
    }
  ]
};
