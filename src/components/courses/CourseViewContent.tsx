
import { motion } from "framer-motion";
import { Course, Lesson, Module } from "@/types/course";
import { CourseContent, QuestSidebar, CoursesSidebar } from "@/components/courses";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useCourseNavigation } from "@/hooks/useCourseNavigation";

interface CourseViewContentProps {
  course: Course;
  activeModule: Module | null;
  activeLesson: Lesson | null;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CourseViewContent = ({ 
  course, 
  activeModule, 
  activeLesson, 
  sidebarOpen, 
  setSidebarOpen 
}: CourseViewContentProps) => {
  const { prev, next } = useCourseNavigation(course, activeModule, activeLesson);
  
  return (
    <SidebarProvider open={sidebarOpen} setOpen={setSidebarOpen}>
      <div className="flex flex-col lg:flex-row relative">
        <motion.div 
          className="flex-shrink-0 w-full lg:w-1/4 xl:w-1/5"
          animate={{
            width: sidebarOpen ? "auto" : "60px"
          }}
          style={{
            maxWidth: sidebarOpen ? "100%" : "60px",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          data-sidebar-collapsed={(!sidebarOpen).toString()}
        >
          {course.id === "webdev-fundamentals" ? (
            <QuestSidebar
              course={course}
              currentLessonId={activeLesson?.id}
              onLessonSelect={(lessonId) => {
                // Find the module containing this lesson
                const module = course.modules.find(m => 
                  m.lessons.some(l => l.id === lessonId)
                );
                if (module && lessonId) {
                  window.location.href = `/courses/${course.id}/${module.id}/${lessonId}`;
                }
              }}
            />
          ) : (
            <CoursesSidebar
              modules={course.modules}
              courseId={course.id}
              activeModuleId={activeModule?.id}
              activeLessonId={activeLesson?.id}
              noProvider={true}
            />
          )}
        </motion.div>
        
        <div className="flex-grow transition-all duration-300">
          <CourseContent 
            course={course}
            activeModule={activeModule}
            activeLesson={activeLesson}
            prev={prev}
            next={next}
            sidebarOpen={sidebarOpen}
          />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CourseViewContent;
