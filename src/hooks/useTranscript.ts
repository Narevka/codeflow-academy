
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { TranscriptSegment } from "@/types/course";

// Funkcja do pobierania transkrypcji
const fetchTranscript = async (playbackId: string | undefined): Promise<TranscriptSegment[]> => {
  if (!playbackId) {
    return [];
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
      // Explicit type casting with type safety
      const segments = transcriptData.segments as unknown;
      // Verify that segments is an array before returning
      if (Array.isArray(segments)) {
        return segments as TranscriptSegment[];
      }
      return [];
    }

    // Jeśli nie ma w bazie, pobierz z edge function
    console.log("Pobieranie transkrypcji z edge function");
    const { data, error: fnError } = await supabase.functions.invoke("get-mux-transcript", {
      body: { playbackId },
    });

    if (fnError) {
      console.error("Błąd podczas pobierania transkrypcji:", fnError);
      throw fnError;
    }

    // Verify and safely cast the transcript data
    if (data && data.transcript && Array.isArray(data.transcript)) {
      return data.transcript as TranscriptSegment[];
    }
    
    return [];
  } catch (error) {
    console.error("Błąd useTranscript:", error);
    return [];
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
