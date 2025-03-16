
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
  return (
    <div className="space-y-1 mt-4">
      <h3 className="font-semibold text-white/80 text-sm mb-2">Lekcje</h3>
      {lessons.map((lesson) => (
        <Link
          key={lesson.id}
          to={`/my-courses/${courseId}/${moduleId}/${lesson.id}`}
          className={`flex items-center p-3 rounded-md ${
            lesson.id === activeLessonId
              ? "bg-magenta/20 border-l-4 border-magenta"
              : "hover:bg-white/5 border-l-4 border-transparent"
          }`}
        >
          <div className="mr-3">
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
