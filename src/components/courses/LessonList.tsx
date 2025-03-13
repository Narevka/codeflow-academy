
import { Lesson } from "@/types/course";
import { CheckCircle, Circle, Play } from "lucide-react";
import { Link } from "react-router-dom";

interface LessonListProps {
  lessons: Lesson[];
  courseId: string;
  moduleId: string;
  activeLessonId?: string;
  collapsed?: boolean;
}

const LessonList = ({ lessons, courseId, moduleId, activeLessonId, collapsed = false }: LessonListProps) => {
  if (collapsed) {
    return null; // Don't render when sidebar is collapsed
  }
  
  return (
    <div className={`space-y-2 mt-4 transition-all duration-1000 ${
      collapsed 
        ? 'opacity-0 max-h-0 overflow-hidden' 
        : 'opacity-100 max-h-[2000px]'
    }`}>
      {lessons.map((lesson) => (
        <Link
          key={lesson.id}
          to={`/my-courses/${courseId}/${moduleId}/${lesson.id}`}
          className={`flex items-center p-3 rounded-md transition-all duration-500 ${
            lesson.id === activeLessonId
              ? "bg-magenta/20 transform translate-x-1"
              : "hover:bg-white/5 hover:translate-x-1"
          }`}
        >
          <div className="mr-3 transition-transform duration-300">
            {lesson.completed ? (
              <CheckCircle size={18} className="text-green-500" />
            ) : (
              <Circle size={18} className="text-white/40" />
            )}
          </div>
          <div className="flex-1">
            <span className={`text-sm ${lesson.id === activeLessonId ? "text-white font-medium" : "text-white/80"}`}>
              {lesson.title}
            </span>
          </div>
          {lesson.videoUrl && (
            <Play size={16} className="text-magenta ml-2" />
          )}
        </Link>
      ))}
    </div>
  );
};

export default LessonList;
