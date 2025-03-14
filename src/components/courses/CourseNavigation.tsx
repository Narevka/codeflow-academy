
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

type NavigationItem = {
  moduleId: string;
  lessonId: string;
  title: string;
} | null;

interface CourseNavigationProps {
  prev: NavigationItem;
  next: NavigationItem;
  courseId: string;
}

const CourseNavigation = ({ prev, next, courseId }: CourseNavigationProps) => {
  return (
    <div className="mt-12 flex justify-between">
      {prev ? (
        <Link
          to={`/my-courses/${courseId}/${prev.moduleId}/${prev.lessonId}`}
          className="flex items-center text-white/80 hover:text-white"
        >
          <ChevronLeft size={20} className="mr-2" />
          <div>
            <div className="text-xs text-white/60">Poprzednia lekcja</div>
            <div className="text-sm">{prev.title}</div>
          </div>
        </Link>
      ) : (
        <div></div>
      )}
      
      {next && (
        <Link
          to={`/my-courses/${courseId}/${next.moduleId}/${next.lessonId}`}
          className="flex items-center text-white/80 hover:text-white text-right"
        >
          <div>
            <div className="text-xs text-white/60">Następna lekcja</div>
            <div className="text-sm">{next.title}</div>
          </div>
          <ChevronRight size={20} className="ml-2" />
        </Link>
      )}
    </div>
  );
};

export default CourseNavigation;
