
import { Course } from "@/types/course";

// Import modules
import { introductionModule } from "./modules/introduction";
import { setupModule } from "./modules/setup";
import { modelsModule } from "./modules/models";
import { memoryModule } from "./modules/memory";
import { agentsModule } from "./modules/agents";
import { chainsModule } from "./modules/chains";

// Create the course object
export const langChainCourse: Course = {
  id: "langchain-course",
  title: "LangChain AI - Tworzenie zaawansowanych aplikacji AI",
  description: "Kurs, który prowadzi przez kompleksowe zastosowanie LangChain do budowy zaawansowanych aplikacji wykorzystujących modele językowe.",
  lastActivity: "15-04-2023",
  progress: 32,
  modules: [
    introductionModule,
    setupModule,
    modelsModule,
    memoryModule,
    agentsModule,
    chainsModule
  ]
};
