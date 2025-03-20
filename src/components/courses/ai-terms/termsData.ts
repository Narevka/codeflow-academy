
import { BrainCircuit, MessagesSquare, Layers, MessageCircle, Activity, Cpu } from "lucide-react";

export interface TermItem {
  id: string;
  title: string;
  icon: any;
  buttonLabel: string;
}

export const termItems: TermItem[] = [
  {
    id: "item-1",
    title: "1. Duże Modele Językowe (LLM)",
    icon: BrainCircuit,
    buttonLabel: "LLM"
  },
  {
    id: "item-2",
    title: "2. Tokeny",
    icon: Layers,
    buttonLabel: "Tokeny"
  },
  {
    id: "item-3",
    title: "3. Prompt (Zapytanie)",
    icon: MessageCircle,
    buttonLabel: "Prompt"
  },
  {
    id: "item-4",
    title: "4. Konwersacja i Kontekst",
    icon: MessagesSquare,
    buttonLabel: "Konwersacja"
  },
  {
    id: "item-5",
    title: "5. Wydajność a Skomplikowanie Modelu",
    icon: Activity,
    buttonLabel: "Modele AI"
  },
  {
    id: "item-6",
    title: "6. Model Falcon 40B",
    icon: Cpu,
    buttonLabel: "Falcon 40B"
  }
];
