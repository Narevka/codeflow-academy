
import { Lesson } from "@/types/course";
import { VideoPlayer } from "@/components/ui/video-player";

interface LessonContentProps {
  lesson: Lesson;
}

const LessonContent = ({ lesson }: LessonContentProps) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">{lesson.title}</h1>
      
      {lesson.videoUrl && (
        <div className="mb-8">
          <VideoPlayer 
            src={lesson.videoUrl} 
            title={lesson.title}
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
