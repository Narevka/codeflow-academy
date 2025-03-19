
import { Module } from "@/types/course";

export const retrievalModule: Module = {
  id: "module-7",
  title: "Wyszukiwanie (Retrieval)",
  completed: false,
  lessons: [
    {
      id: "lesson-7-1",
      title: "Podstawy wektoryzacji",
      displayTitle: "Lekcja 13 - Podstawy wektoryzacji i embeddings",
      description: `Embeddingi (osadzenia wektorowe) to kluczowy element systemów wyszukiwania semantycznego. W tej lekcji poznasz:

1. Czym są embeddingi i jak działają
2. Dostępne modele embeddingów (OpenAI, HuggingFace, itd.)
3. Proces generowania embeddingów dla dokumentów
4. Miary podobieństwa wektorów i ich zastosowania

Zrozumiesz, jak tekst jest przekształcany w reprezentacje numeryczne, które pozwalają modelom "rozumieć" znaczenie i kontekst dokumentów.`,
      videoUrl: "https://example.com/langchain-embeddings.mp4",
      thumbnailUrl: "/langchain-embeddings-thumbnail.png",
      completed: false
    },
    {
      id: "lesson-7-2",
      title: "Wektorowe bazy danych",
      displayTitle: "Lekcja 14 - Wektorowe bazy danych i wyszukiwanie semantyczne",
      description: `Wektorowe bazy danych są fundamentem systemów RAG (Retrieval Augmented Generation). W tej lekcji nauczysz się:

1. Jak działają wektorowe bazy danych
2. Integracja LangChain z popularnymi rozwiązaniami (Pinecone, Chroma, Faiss)
3. Implementacja wyszukiwania semantycznego
4. Optymalizacja zapytań i wydajności wyszukiwania

Poznasz różne strategie wyszukiwania, takie jak MMR (Maximum Marginal Relevance), które pomagają w uzyskaniu bardziej zróżnicowanych i trafnych wyników.`,
      videoUrl: "https://example.com/langchain-vector-db.mp4",
      thumbnailUrl: "/langchain-vector-db-thumbnail.png",
      completed: false,
      isQuest: true
    }
  ]
};
