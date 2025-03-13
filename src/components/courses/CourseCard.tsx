
import { Course } from "@/types/course";
import { CalendarClock, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg border border-white/10">
      <div className="p-6">
        <h2 className="text-2xl font-bold gradient-text mb-3">{course.title}</h2>
        
        <div className="flex items-center text-white/70 text-sm mb-4">
          {course.lastActivity && (
            <>
              <CalendarClock size={16} className="mr-1.5" />
              <span>Ostatnia aktywność: {course.lastActivity}</span>
            </>
          )}
        </div>
        
        <p className="text-white/80 mb-4">{course.description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1.5">
            <span>Postęp</span>
            <span>{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2 bg-white/10" />
        </div>
        
        <Link
          to={`/my-courses/${course.id}`}
          className="btn-primary flex items-center justify-center mt-4"
        >
          <Play size={16} className="mr-2" />
          Wybierz
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
