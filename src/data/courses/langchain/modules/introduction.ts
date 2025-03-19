
import { Module } from "@/types/course";

export const introductionModule: Module = {
  id: "introduction",
  title: "Wprowadzenie do LangChain",
  completed: true,
  lessons: [
    {
      id: "what-is-langchain",
      title: "Czym jest LangChain?",
      displayTitle: "Wprowadzenie do LangChain",
      description: "LangChain to framework, który upraszcza budowanie aplikacji opartych na dużych modelach językowych (LLM). W tej lekcji zapoznasz się z podstawowymi koncepcjami LangChain i zrozumiesz, dlaczego warto używać tego narzędzia w swoich projektach AI.\n\nLangChain został zaprojektowany, aby ułatwić tworzenie aplikacji LLM poprzez połączenie różnych komponentów w sposób modułowy. Framework obsługuje typowe wzorce integracji LLM, takie jak:\n\n- **Połączenie z zewnętrznymi źródłami danych** - LangChain umożliwia modelom dostęp do informacji niedostępnych podczas treningu\n- **Interakcja z otoczeniem** - modele mogą wykonywać działania i obserwować wyniki\n- **Łączenie w łańcuchy** - bardziej złożone przepływy pracy można tworzyć łącząc kompetenty w sekwencyjne lub równoległe łańcuchy\n\nW kolejnych lekcjach przyjrzymy się praktycznym implementacjom tych koncepcji w rzeczywistych aplikacjach.",
      videoUrl: "https://example.com/langchain-intro.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      completed: true,
      transcript: []
    },
    {
      id: "langchain-vs-others",
      title: "LangChain a inne frameworki",
      displayTitle: "Porównanie frameworków AI",
      description: "W tej lekcji porównamy LangChain z innymi frameworkami do tworzenia aplikacji opartych na AI, takimi jak LlamaIndex, Haystack i Semantic Kernel. Zrozumiesz, kiedy warto wybrać LangChain, a kiedy lepiej sprawdzą się inne narzędzia.\n\nPorównanie koncentruje się na następujących aspektach:\n\n1. **Elastyczność** - jak łatwo można dostosować framework do różnych przypadków użycia\n2. **Dojrzałość ekosystemu** - społeczność, dokumentacja, gotowe komponenty\n3. **Integracje** - dostępne połączenia z zewnętrznymi narzędziami i usługami\n4. **Wydajność** - wymagania dotyczące zasobów i szybkość działania\n5. **Krzywa uczenia** - jak szybko można stać się produktywnym\n\nDzięki tej analizie będziesz mógł podejmować świadome decyzje projektowe przy tworzeniu własnych aplikacji LLM.",
      completed: true,
      videoUrl: "https://example.com/langchain-comparison.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      transcript: []
    }
  ]
};
