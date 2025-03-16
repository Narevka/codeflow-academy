
import { Course } from "@/types/course";
import { introductionModule } from "./modules/introduction";
import { installationModule } from "./modules/installation";
import { updatingModule } from "./modules/updating";
import { basicsModule } from "./modules/basics";
import { firstFlowModule } from "./modules/firstFlow";
import { monitoringModule } from "./modules/monitoring";
import { promptChainModule } from "./modules/promptChain";
import { externalApiModule } from "./modules/externalApi";
import { vectorDbModule } from "./modules/vectorDb";
import { agentsModule } from "./modules/agents";
import { webhooksModule } from "./modules/webhooks";

export const flowiseCourse: Course = {
  id: "flowise-ai-course",
  title: "KURS FLOWISE AI – TWORZENIE APLIKACJI AI BEZ KODOWANIA",
  description: "Witaj w kursie \"Flowise AI - kurs podstawowy\"! Tutaj znajdziesz wszystkie lekcje oraz materiały dodatkowe, które pomogą Ci w opanowaniu Flowise AI. Zacznij od pierwszego kroku i odkrywaj możliwości Flowise w swoim tempie.",
  lastActivity: "11-02-2023",
  progress: 36,
  modules: [
    introductionModule,
    installationModule,
    updatingModule,
    basicsModule,
    firstFlowModule,
    monitoringModule,
    promptChainModule,
    externalApiModule,
    vectorDbModule,
    agentsModule,
    webhooksModule
  ]
};
