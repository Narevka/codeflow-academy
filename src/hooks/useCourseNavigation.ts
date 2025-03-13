
import { Course, Lesson, Module } from "@/types/course";

type NavigationItem = {
  moduleId: string;
  lessonId: string;
  title: string;
} | null;

interface CourseNavigationResult {
  prev: NavigationItem;
  next: NavigationItem;
}

export const useCourseNavigation = (
  course: Course | undefined, 
  activeModule: Module | null, 
  activeLesson: Lesson | null
): CourseNavigationResult => {
  if (!course || !activeModule || !activeLesson) return { prev: null, next: null };
  
  // Find current module index
  const currentModuleIndex = course.modules.findIndex(m => m.id === activeModule.id);
  // Find current lesson index
  const currentLessonIndex = activeModule.lessons.findIndex(l => l.id === activeLesson.id);
  
  // Previous lesson
  let prev = null;
  if (currentLessonIndex > 0) {
    // Previous lesson in same module
    const prevLesson = activeModule.lessons[currentLessonIndex - 1];
    prev = {
      moduleId: activeModule.id,
      lessonId: prevLesson.id,
      title: prevLesson.title
    };
  } else if (currentModuleIndex > 0) {
    // Last lesson of previous module
    const prevModule = course.modules[currentModuleIndex - 1];
    const prevLesson = prevModule.lessons[prevModule.lessons.length - 1];
    prev = {
      moduleId: prevModule.id,
      lessonId: prevLesson.id,
      title: prevLesson.title
    };
  }
  
  // Next lesson
  let next = null;
  if (currentLessonIndex < activeModule.lessons.length - 1) {
    // Next lesson in same module
    const nextLesson = activeModule.lessons[currentLessonIndex + 1];
    next = {
      moduleId: activeModule.id,
      lessonId: nextLesson.id,
      title: nextLesson.title
    };
  } else if (currentModuleIndex < course.modules.length - 1) {
    // First lesson of next module
    const nextModule = course.modules[currentModuleIndex + 1];
    const nextLesson = nextModule.lessons[0];
    next = {
      moduleId: nextModule.id,
      lessonId: nextLesson.id,
      title: nextLesson.title
    };
  }
  
  return { prev, next };
};
