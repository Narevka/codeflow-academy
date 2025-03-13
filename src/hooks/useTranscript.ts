
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { TranscriptSegment } from "@/types/course";

// Funkcja do walidacji struktury segmentu transkrypcji
const isValidTranscriptSegment = (segment: any): segment is TranscriptSegment => {
  return (
    segment &&
    typeof segment === 'object' &&
    typeof segment.text === 'string' &&
    typeof segment.startTime === 'number' &&
    typeof segment.endTime === 'number'
  );
};

// Funkcja do walidacji tablicy segmentów
const validateTranscriptSegments = (data: any): TranscriptSegment[] => {
  if (!Array.isArray(data)) {
    console.warn('Otrzymano nieprawidłowe dane transkrypcji (nie jest tablicą)');
    return [];
  }

  // Sprawdź, czy wszystkie elementy mają poprawną strukturę
  const validSegments = data.filter(isValidTranscriptSegment);
  
  if (validSegments.length !== data.length) {
    console.warn(`Niektóre segmenty transkrypcji (${data.length - validSegments.length}) miały nieprawidłową strukturę i zostały pominięte`);
  }
  
  return validSegments;
};

// Typ odpowiedzi z funkcji edge
interface TranscriptResponse {
  transcript: any[];
  source: string;
  error?: string;
  message?: string;
}

// Funkcja do pobierania transkrypcji
const fetchTranscript = async (playbackId: string | undefined): Promise<{ 
  segments: TranscriptSegment[]; 
  error?: string;
  message?: string;
}> => {
  if (!playbackId) {
    return { segments: [] };
  }

  try {
    // Najpierw spróbuj pobrać z bazy danych
    const { data: transcriptData, error } = await supabase
      .from("transcripts")
      .select("segments")
      .eq("playback_id", playbackId)
      .single();

    if (transcriptData) {
      console.log("Transkrypcja pobrana z bazy danych");
      return { 
        segments: validateTranscriptSegments(transcriptData.segments) 
      };
    }

    // Jeśli nie ma w bazie, pobierz z edge function
    console.log("Pobieranie transkrypcji z edge function");
    const { data, error: fnError } = await supabase.functions.invoke<TranscriptResponse>("get-mux-transcript", {
      body: { playbackId },
    });

    if (fnError) {
      console.error("Błąd podczas pobierania transkrypcji:", fnError);
      return { 
        segments: [],
        error: fnError.message,
        message: "Nie udało się pobrać transkrypcji"
      };
    }

    // Sprawdź i bezpiecznie zwróć dane transkrypcji
    if (data) {
      // Jeśli mamy error typu "not_found", oznacza to, że Mux nie ma transkrypcji dla tego wideo
      if (data.error && data.error.includes("not_found")) {
        console.log("Mux nie ma transkrypcji dla tego wideo");
        return {
          segments: [],
          error: data.error,
          message: "Transkrypcja niedostępna dla tego wideo"
        };
      }
      
      return { 
        segments: validateTranscriptSegments(data.transcript),
        error: data.error,
        message: data.message
      };
    }
    
    return { segments: [] };
  } catch (error) {
    console.error("Błąd useTranscript:", error);
    return { 
      segments: [],
      error: error instanceof Error ? error.message : String(error),
      message: "Wystąpił błąd podczas pobierania transkrypcji"
    };
  }
};

// Hook do pobierania transkrypcji
export function useTranscript(playbackId: string | undefined) {
  return useQuery({
    queryKey: ["transcript", playbackId],
    queryFn: () => fetchTranscript(playbackId),
    enabled: !!playbackId,
    staleTime: 1000 * 60 * 5, // 5 minut
  });
}

// Funkcja do aktualizacji transkrypcji
export async function updateTranscript(
  playbackId: string,
  segments: TranscriptSegment[],
  language: string = "pl"
) {
  try {
    const { data, error } = await supabase.functions.invoke("update-transcript", {
      body: { playbackId, segments, language },
    });

    if (error) {
      console.error("Błąd podczas aktualizacji transkrypcji:", error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Błąd updateTranscript:", error);
    throw error;
  }
}
