
import { Module } from "@/types/course";

export const installationModule: Module = {
  id: "module-2",
  title: "Instalacja",
  completed: true,
  lessons: [
    {
      id: "lesson-2-1",
      title: "Instalacja",
      displayTitle: "Lekcja 2 - Instalacja Flowise na Windows: Lokalnie i w Chmurze",
      description: "W tej lekcji nauczysz się instalować Flowise zarówno lokalnie na systemie Windows, jak i w środowisku chmurowym. Poznasz różnice między obydwoma podejściami i dowiesz się, które z nich wybrać w zależności od Twoich potrzeb.",
      videoUrl: "mux:Tvjg623oMCLmqZqruGnWlnuFPABieZfiZ3pbX6HIoxg",
      additionalVideos: [
        {
          title: "Dodatkowo o instalacji",
          videoUrl: "mux:ti1ULAh6YUlpwAPWh3FWEyYWN6QIMWInsoA6WCpmdd4",
          description: `Instalacja Flowise na Windows – Lokalnie i w Chmurze

W tej instrukcji omówimy dwa podejścia do instalacji Flowise – instalację lokalną oraz instalację w chmurze. Zanim przejdziemy do szczegółowej konfiguracji, warto zrozumieć, czym różnią się te dwa sposoby instalacji, jakie są ich zalety i wady, oraz dla jakich zastosowań każdy z nich jest optymalny.`
        }
      ],
      completed: true
    }
  ]
};
