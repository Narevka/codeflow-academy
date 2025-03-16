
import React from "react";
import { AdditionalVideo } from "@/types/course";
import { VideoPlayerWithTranscript } from "@/components/ui/video-player";
import TextFormatter from "./TextFormatter";

interface AdditionalVideosSectionProps {
  videos: AdditionalVideo[];
}

const AdditionalVideosSection = ({ videos }: AdditionalVideosSectionProps) => {
  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8 mt-10">
      {videos.map((video, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-xl font-semibold">
            {video.title || `Dodatkowe wideo ${index + 1}`}
          </h2>
          {video.videoUrl && (
            <VideoPlayerWithTranscript
              src={video.videoUrl}
              poster={video.thumbnailUrl}
              title={video.title || `Dodatkowe wideo ${index + 1}`}
              transcript={video.transcript}
              transcriptSourceFile="2.json"
            />
          )}
          {video.description && (
            <div className="prose prose-invert max-w-none">
              <TextFormatter text={video.description} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdditionalVideosSection;
