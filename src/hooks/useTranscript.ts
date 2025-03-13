
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { TranscriptSegment } from "@/types/course";

// Helper function to convert Mux transcript format to our app format
const convertMuxTranscriptToSegments = (muxTranscript: any): TranscriptSegment[] => {
  if (!muxTranscript || !muxTranscript.words) {
    return [];
  }

  const segments: TranscriptSegment[] = [];
  let currentSegment: TranscriptSegment = {
    text: "",
    startTime: 0,
    endTime: 0
  };
  
  let lastWordEnd = 0;
  
  // Process only word type entries (skip spacing)
  muxTranscript.words.forEach((item: any, index: number) => {
    if (item.type === "word") {
      // If this is a new sentence (more than 4 seconds from last word)
      // or if this is the first word
      if (index === 0 || item.start - lastWordEnd > 4) {
        // If we already have text in the current segment, save it
        if (currentSegment.text.length > 0) {
          currentSegment.endTime = lastWordEnd;
          segments.push(currentSegment);
        }
        
        // Start a new segment
        currentSegment = {
          text: item.text,
          startTime: item.start,
          endTime: item.end
        };
      } else {
        // Add to the current segment
        currentSegment.text += (currentSegment.text.length > 0 ? " " : "") + item.text;
      }
      
      lastWordEnd = item.end;
    }
  });
  
  // Add the last segment if it has content
  if (currentSegment.text.length > 0) {
    currentSegment.endTime = lastWordEnd;
    segments.push(currentSegment);
  }
  
  return segments;
};

// Function to fetch transcript
const fetchTranscript = async (playbackId: string | undefined): Promise<TranscriptSegment[]> => {
  if (!playbackId) {
    return [];
  }

  try {
    // First try to get from database
    const { data: transcriptData, error } = await supabase
      .from("transcripts")
      .select("segments, raw_data")
      .eq("playback_id", playbackId)
      .single();

    if (transcriptData) {
      console.log("Transcript fetched from database");
      
      // If we have segments already processed, use them
      if (transcriptData.segments && transcriptData.segments.length > 0) {
        return transcriptData.segments as TranscriptSegment[];
      }
      
      // If we have raw data but no segments, convert it
      if (transcriptData.raw_data) {
        console.log("Converting raw transcript data to segments");
        return convertMuxTranscriptToSegments(transcriptData.raw_data);
      }
    }

    // If not in database, fetch from edge function
    console.log("Fetching transcript from edge function");
    const { data, error: fnError } = await supabase.functions.invoke("get-mux-transcript", {
      body: { playbackId },
    });

    if (fnError) {
      console.error("Error fetching transcript:", fnError);
      throw fnError;
    }

    if (data && data.transcript) {
      // If the data is in our expected format, return it directly
      if (Array.isArray(data.transcript)) {
        return data.transcript as TranscriptSegment[];
      }
      
      // If it's in Mux format, convert it
      return convertMuxTranscriptToSegments(data.transcript);
    }
    
    return [];
  } catch (error) {
    console.error("useTranscript error:", error);
    return [];
  }
};

// Hook to fetch transcript
export function useTranscript(playbackId: string | undefined) {
  return useQuery({
    queryKey: ["transcript", playbackId],
    queryFn: () => fetchTranscript(playbackId),
    enabled: !!playbackId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// Function to update transcript
export async function updateTranscript(
  playbackId: string,
  segments: TranscriptSegment[] | null,
  rawData: any = null,
  language: string = "pl"
) {
  try {
    const { data, error } = await supabase.functions.invoke("update-transcript", {
      body: { 
        playbackId, 
        segments, 
        rawData,
        language 
      },
    });

    if (error) {
      console.error("Error updating transcript:", error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error("updateTranscript error:", error);
    throw error;
  }
}
