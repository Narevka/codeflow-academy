
import { Link } from "react-router-dom";
import { Course, Lesson, Module } from "@/types/course";
import LessonContent from "./LessonContent";
import CourseNavigation from "./CourseNavigation";

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
  return (
    <div className="glass-card p-6">
      {activeLesson ? (
        <>
          <LessonContent lesson={activeLesson} />
          <CourseNavigation prev={prev} next={next} courseId={course.id} />
        </>
      ) : (
        <div className="text-center py-20">
          <p>Wybierz lekcję z menu, aby rozpocząć naukę.</p>
        </div>
      )}
    </div>
  );
};

export default CourseContent;
