
import { Course } from "@/types/course";
import { CalendarClock, Play, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  // Count total lessons across all modules
  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  
  // Create a simple time estimate based on lesson count (just for display purposes)
  const estimatedHours = Math.max(Math.round(totalLessons * 0.5), 1);
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold gradient-text mb-3">{course.title}</h2>
            
            <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-4">
              {course.lastActivity && (
                <div className="flex items-center">
                  <CalendarClock size={16} className="mr-1.5" />
                  <span>Ostatnia aktywność: {course.lastActivity}</span>
                </div>
              )}
              <div className="flex items-center">
                <BookOpen size={16} className="mr-1.5" />
                <span>{totalLessons} lekcji</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1.5" />
                <span>~{estimatedHours} godz.</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">{course.description}</p>
            
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium">Postęp</span>
                <span className="font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2 bg-gray-100" />
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 p-4 border-t border-gray-100">
        <Link
          to={`/my-courses/${course.id}`}
          className="btn-primary w-full flex items-center justify-center"
        >
          <Play size={16} className="mr-2" />
          Kontynuuj naukę
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
