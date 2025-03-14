
import { Lesson } from "@/types/course";
import { VideoPlayerWithTranscript } from "@/components/ui/video-player";
import { useState, useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TokenChart from "@/components/charts/TokenChart";

interface LessonContentProps {
  lesson: Lesson;
}

const LessonContent = ({ lesson }: LessonContentProps) => {
  const [isMuxVideo, setIsMuxVideo] = useState(false);
  const [playbackId, setPlaybackId] = useState<string>("");
  
  // Set up the video source based on the videoUrl format
  useEffect(() => {
    if (lesson.videoUrl?.startsWith('mux:')) {
      setIsMuxVideo(true);
      setPlaybackId(lesson.videoUrl);
    } else {
      setIsMuxVideo(false);
    }
  }, [lesson.videoUrl]);

  // Updated token data based on the screenshot values
  const tokenChartData = [
    { name: "ChatGPT 3.5", tokens: 16000 },
    { name: "Gemini 1.0", tokens: 32000 },
    { name: "ChatGPT 4.0", tokens: 128000 }
  ];

  // Check if this is the specific section that should show a chart instead of an image
  const renderContent = (section: any, index: number) => {
    // If this is the specific LLM comparison section, render chart instead of image
    if (section.title === "Co to LLM" && section.imageAlt?.includes("Porównanie możliwości przetwarzania tokenów")) {
      return (
        <div key={index} className="space-y-6 mb-8">
          {section.title && (
            <h2 className="text-xl md:text-2xl font-bold">{section.title}</h2>
          )}
          {section.text && (
            <div className="prose prose-invert max-w-none">
              {section.text.split('\n\n').map((paragraph: string, pIndex: number) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          )}
          <div className="pt-4">
            <TokenChart 
              title="Możliwości przetwarzania tokenów" 
              subtitle="Porównanie ilości tokenów obsługiwanych przez popularne modele językowe"
              data={tokenChartData}
            />
          </div>
        </div>
      );
    }
    
    // Otherwise, render the normal section with possible image
    return (
      <div key={index} className="space-y-4">
        {section.title && (
          <h2 className="text-xl md:text-2xl font-bold">{section.title}</h2>
        )}
        {section.text && (
          <div className="prose prose-invert max-w-none">
            {section.text.split('\n\n').map((paragraph: string, pIndex: number) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>
        )}
        {section.imageUrl && (
          <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
            <AspectRatio ratio={16/9} className="bg-gray-900">
              <img 
                src={section.imageUrl} 
                alt={section.imageAlt || `Ilustracja do "${section.title || 'lekcji'}"`} 
                className="object-contain w-full h-full"
              />
            </AspectRatio>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6 w-full">
      <h1 className="text-2xl md:text-3xl font-bold">{lesson.displayTitle || lesson.title}</h1>
      
      {lesson.videoUrl && (
        <div className="w-full">
          <VideoPlayerWithTranscript
            src={lesson.videoUrl}
            poster={lesson.thumbnailUrl}
            title={lesson.title}
            transcript={lesson.transcript}
          />
        </div>
      )}
      
      {lesson.description && (
        <div className="prose prose-invert max-w-none mt-6">
          <p>{lesson.description}</p>
        </div>
      )}

      {lesson.content && lesson.content.length > 0 && (
        <div className="space-y-8 mt-6">
          {lesson.content.map((section, index) => renderContent(section, index))}
        </div>
      )}

      {lesson.additionalVideos && lesson.additionalVideos.length > 0 && (
        <div className="space-y-8 mt-10">
          {lesson.additionalVideos.map((video, index) => (
            <div key={index} className="space-y-4">
              {video.title && (
                <h2 className="text-xl md:text-2xl font-bold">{video.title}</h2>
              )}
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
                  <p>{video.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonContent;
