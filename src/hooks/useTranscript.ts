
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
      return transcriptData.segments as TranscriptSegment[];
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

    return data.transcript as TranscriptSegment[];
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
