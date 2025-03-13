
import { Lesson } from "@/types/course";
import { VideoPlayer } from "@/components/ui/video-player";

interface LessonContentProps {
  lesson: Lesson;
}

const LessonContent = ({ lesson }: LessonContentProps) => {
  // Check if the video URL is a Mux ID
  const isMuxVideo = lesson.videoUrl?.startsWith('mux:');
  
  // If it's a Mux video, remove the "mux:" prefix to get just the ID
  const videoSrc = isMuxVideo 
    ? lesson.videoUrl.replace('mux:', '') 
    : lesson.videoUrl;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">{lesson.title}</h1>
      
      {lesson.videoUrl && (
        <div className="mb-8">
          <VideoPlayer 
            src={videoSrc || ''} 
            title={lesson.title}
            isMuxVideo={isMuxVideo}
            poster={lesson.thumbnailUrl}
          />
        </div>
      )}
      
      {lesson.description && (
        <div className="prose prose-invert max-w-none">
          <p>{lesson.description}</p>
        </div>
      )}
    </div>
  );
};

export default LessonContent;
