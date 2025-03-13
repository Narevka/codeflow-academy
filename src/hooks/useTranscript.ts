
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { TranscriptSegment } from "@/types/course";
import transcriptData from "../trans/1.json";

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
      // If this is a new sentence (more than 2 seconds from last word)
      // or if this is the first word
      if (index === 0 || item.start - lastWordEnd > 2) {
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

// Function to get local transcript from src/trans/1.json
const getLocalTranscript = (playbackId: string | undefined): TranscriptSegment[] => {
  // Convert the transcript data to segments
  return convertMuxTranscriptToSegments(transcriptData);
};

// Function to fetch transcript
const fetchTranscript = async (playbackId: string | undefined): Promise<TranscriptSegment[]> => {
  if (!playbackId) {
    return [];
  }

  try {
    // First try to get from local JSON file
    const localTranscript = getLocalTranscript(playbackId);
    if (localTranscript && localTranscript.length > 0) {
      console.log("Using local transcript file");
      return localTranscript;
    }

    // Otherwise try database or other fallback methods
    console.log("No local transcript available, checking database...");
    
    const { data: dbData, error } = await supabase
      .from("transcripts")
      .select("*")
      .eq("playback_id", playbackId)
      .single();

    if (error) {
      console.log("Error or no data in database:", error);
      return [];
    }

    if (dbData && dbData.segments) {
      // Type check and conversion - fix for the TypeScript error
      const segments = dbData.segments;
      
      // Make sure segments is an array
      if (Array.isArray(segments) && segments.length > 0) {
        console.log("Using transcript from database");
        // Ensure the data matches our TranscriptSegment type
        return segments.map((segment: any) => ({
          text: segment.text || "",
          startTime: Number(segment.startTime) || 0,
          endTime: Number(segment.endTime) || 0
        }));
      }
    }

    console.log("No transcript found anywhere");
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
