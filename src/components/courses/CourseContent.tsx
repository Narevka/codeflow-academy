
import { Link } from "react-router-dom";
import { Course, Lesson, Module } from "@/types/course";
import LessonContent from "./LessonContent";
import CourseNavigation from "./CourseNavigation";
import { useSidebar } from "@/components/ui/sidebar";

type NavigationItem = {
  moduleId: string;
  lessonId: string;
  title: string;
} | null;

interface CourseContentProps {
  course: Course;
  activeModule: Module | null;
  activeLesson: Lesson | null;
  prev: NavigationItem;
  next: NavigationItem;
}

const CourseContent = ({ course, activeModule, activeLesson, prev, next }: CourseContentProps) => {
  const { open } = useSidebar();
  
  // If no lesson is active, show a message to select a lesson
  if (!activeLesson) {
    return (
      <div className={`glass-card p-6 min-h-[600px] h-full flex flex-col transition-all duration-300 ${open ? 'w-full' : 'w-full ml-0'}`}>
        <div className="text-center py-20 flex-1">
          <p className="text-xl">Wybierz lekcję z menu, aby rozpocząć naukę.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`glass-card p-6 min-h-[600px] h-full flex flex-col transition-all duration-300 ${open ? 'w-full' : 'w-full ml-0'}`}>
      <div className="flex-1">
        <LessonContent lesson={activeLesson} />
      </div>
      <CourseNavigation prev={prev} next={next} courseId={course.id} />
    </div>
  );
};

export default CourseContent;
