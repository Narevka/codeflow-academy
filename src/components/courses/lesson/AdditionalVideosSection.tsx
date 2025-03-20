
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
      {videos.map((video, index) => {
        // Filter out the explanatory paragraphs we want to remove
        const cleanedDescription = video.description ? 
          video.description.replace(
            /Dogłębniejsze objaśnienie terminów:[\s\S]*?Rozumienie liczby tokenów jest ważne przy budowaniu aplikacji, ponieważ wpływa to na długość konwersacji, którą model może „zapamiętać" oraz przetworzyć\./g, 
            ''
          ).trim() : '';
          
        // Determine the transcript source file based on the video URL
        let transcriptSourceFile = "2.json"; // Default for most additional videos
        
        // Check the video URL to determine the correct transcript file
        if (video.videoUrl.includes("ti1ULAh6YUlpwAPWh3FWEyYWN6QIMWInsoA6WCpmdd4")) {
          transcriptSourceFile = "4.json";
        } else if (video.videoUrl.includes("DvS00xCCQJzWvBSQKKdHNl8sszgX7hXlVjFjAA8AJtA")) {
          transcriptSourceFile = "2.json";
        } else if (video.videoUrl.includes("flowise-intro-1.mp4") || 
                 video.videoUrl.includes("flowise-intro-2.mp4")) {
          transcriptSourceFile = "2.json";
        }
        
        console.log(`Additional video ${index} URL:`, video.videoUrl);
        console.log(`Additional video ${index} transcript file:`, transcriptSourceFile);
        
        return (
          <div key={index} className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {video.title || `Dodatkowe wideo ${index + 1}`}
            </h2>
            {video.videoUrl && (
              <VideoPlayerWithTranscript
                src={video.videoUrl}
                poster={video.thumbnailUrl}
                title={video.title || `Dodatkowe wideo ${index + 1}`}
                transcript={video.transcript}
                transcriptSourceFile={transcriptSourceFile}
                showTranscript={true}
              />
            )}
            {cleanedDescription && (
              <div className="prose max-w-none text-gray-700">
                <TextFormatter text={cleanedDescription} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AdditionalVideosSection;
