
import { Lesson } from "@/types/course";
import { VideoPlayer } from "@/components/ui/video-player";

interface LessonContentProps {
  lesson: Lesson;
}

const LessonContent = ({ lesson }: LessonContentProps) => {
  // Sprawdź, czy URL wideo jest ID Mux 
  const isMuxVideo = lesson.videoUrl?.startsWith('mux:');
  
  // Jeśli to Mux video, usuń prefiks "mux:" aby uzyskać samo ID
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

