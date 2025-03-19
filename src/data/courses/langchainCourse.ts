
import { Course } from "@/types/course";
import { introductionModule } from "./langchain/modules/introduction";
import { installationModule } from "./langchain/modules/installation";
import { chainsModule } from "./langchain/modules/chains";
import { agentsModule } from "./langchain/modules/agents";
import { memoryModule } from "./langchain/modules/memory";
import { documentLoaderModule } from "./langchain/modules/documentLoader";
import { retrievalModule } from "./langchain/modules/retrieval";
import { debuggingModule } from "./langchain/modules/debugging";
import { outputParsersModule } from "./langchain/modules/outputParsers";
import { cacheModule } from "./langchain/modules/cache";
import { advancedTechniquesModule } from "./langchain/modules/advancedTechniques";

export const langchainCourse: Course = {
  id: "langchain-ai-course",
  title: "KURS LANGCHAIN – BUDOWANIE ZAAWANSOWANYCH APLIKACJI AI",
  description: "Witaj w kursie \"LangChain - kurs podstawowy\"! Poznaj możliwości LangChain do tworzenia zaawansowanych aplikacji AI z wykorzystaniem dużych modeli językowych. Zdobądź praktyczne umiejętności budowania chatbotów, agentów AI i systemów RAG.",
  lastActivity: "15-07-2023",
  progress: 25,
  modules: [
    introductionModule,
    installationModule,
    chainsModule,
    agentsModule,
    memoryModule,
    documentLoaderModule,
    retrievalModule,
    debuggingModule,
    outputParsersModule,
    cacheModule,
    advancedTechniquesModule
  ]
};
