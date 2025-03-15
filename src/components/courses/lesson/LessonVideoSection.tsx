
import { AdditionalVideo, Lesson } from "@/types/course";
import { VideoPlayerWithTranscript } from "@/components/ui/video-player";

interface LessonVideoSectionProps {
  lesson: Lesson;
}

const LessonVideoSection = ({ lesson }: LessonVideoSectionProps) => {
  if (!lesson.videoUrl) {
    return null;
  }

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-3">Wprowadzenie do Flowise</h2>
      <VideoPlayerWithTranscript
        src={lesson.videoUrl}
        poster={lesson.thumbnailUrl}
        title={lesson.title}
        transcript={lesson.transcript}
      />
    </div>
  );
};

export const AdditionalVideosSection = ({ videos }: { videos: AdditionalVideo[] }) => {
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

const TextFormatter = ({ text }: { text: string }) => {
  if (!text) return null;
  
  // Split by double line breaks to separate paragraphs
  const paragraphs = text.split('\n\n');
  
  return (
    <>
      {paragraphs.map((paragraph, index) => {
        // Check if paragraph is a numbered list item (starts with a number followed by a dot)
        if (/^\d+\.\s/.test(paragraph)) {
          return (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-bold text-primary mb-2">{paragraph.split('\n')[0]}</h4>
              <div className="pl-4">
                {paragraph.split('\n').slice(1).map((p, i) => (
                  <p key={i} className="mb-2 text-base leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          );
        }
        // Check if paragraph is a section heading (all caps or short without punctuation)
        else if (
          (paragraph.length < 100 && !paragraph.includes('.')) ||
          paragraph.toUpperCase() === paragraph
        ) {
          return (
            <h3 key={index} className="text-xl font-bold text-primary mt-8 mb-4">
              {paragraph}
            </h3>
          );
        }
        return <p key={index} className="mb-4 text-base leading-relaxed">{paragraph}</p>;
      })}
    </>
  );
};

export { TextFormatter };
export default LessonVideoSection;
