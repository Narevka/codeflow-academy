
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { userCourses } from "@/data/coursesData";
import { Lesson, Module } from "@/types/course";
import ModuleList from "@/components/courses/ModuleList";
import LessonList from "@/components/courses/LessonList";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseContent from "@/components/courses/CourseContent";
import { useCourseNavigation } from "@/hooks/useCourseNavigation";
import { cn } from "@/lib/utils";
import { ArrowRightFromLine, ArrowLeftFromLine } from "lucide-react";

const CourseView = () => {
  const { user, loading } = useAuth();
  const { courseId, moduleId, lessonId } = useParams();
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

  // Find the current course
  const course = userCourses.find(c => c.id === courseId);

  // Redirect if user is not logged in
  if (!loading && !user) {
    return <Navigate to="/auth" replace />;
  }

  // Redirect if course not found
  if (!loading && !course) {
    return <Navigate to="/my-courses" replace />;
  }

  // Find active module and lesson based on URL params
  useEffect(() => {
    if (course) {
      const module = moduleId 
        ? course.modules.find(m => m.id === moduleId) 
        : course.modules[0];
      
      if (module) {
        setActiveModule(module);
        
        const lesson = lessonId
          ? module.lessons.find(l => l.id === lessonId)
          : module.lessons[0];
        
        if (lesson) {
          setActiveLesson(lesson);
        }
      }
    }
  }, [course, moduleId, lessonId]);

  const { prev, next } = useCourseNavigation(course, activeModule, activeLesson);

  // Functions to handle the collapsible sidebar
  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setSidebarExpanded(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setSidebarExpanded(false);
    }, 300); // Small delay before collapsing for better UX
    setHoverTimeout(timeout);
  };

  return (
    <div className="min-h-screen bg-dark-purple text-white flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="mx-auto w-full max-w-[2000px]">
          {course && (
            <>
              <div className="px-4 lg:px-6 mb-4">
                <CourseHeader 
                  course={course} 
                  moduleId={moduleId} 
                  activeModule={activeModule || undefined} 
                />
              </div>
              
              <div className="flex w-full">
                {/* Collapsible Sidebar - modules and lessons */}
                <div
                  className={cn(
                    "transition-all duration-300 ease-in-out",
                    sidebarExpanded ? "w-[300px] lg:w-[320px]" : "w-10 lg:w-12"
                  )}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={cn(
                    "glass-card sticky top-24 h-[calc(100vh-12rem)] overflow-hidden transition-all duration-300 rounded-r-lg rounded-l-none border-l-0",
                    sidebarExpanded ? "w-full" : "w-10 lg:w-12"
                  )}>
                    {sidebarExpanded ? (
                      <div className="p-4">
                        <ModuleList 
                          modules={course.modules} 
                          courseId={course.id} 
                          activeModuleId={activeModule?.id}
                        />
                        
                        {activeModule && (
                          <LessonList 
                            lessons={activeModule.lessons}
                            courseId={course.id}
                            moduleId={activeModule.id}
                            activeLessonId={activeLesson?.id}
                          />
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="rotate-90 text-white/70 text-xs lg:text-sm font-medium whitespace-nowrap">
                          Nawigacja kursu
                        </div>
                        <ArrowRightFromLine className="mt-4 text-white/70" size={isMobile ? 16 : 20} />
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Main content - lesson */}
                <div className="transition-all duration-300 flex-1">
                  <div className="glass-card rounded-l-lg rounded-r-none border-r-0 h-[calc(100vh-12rem)] overflow-auto">
                    <CourseContent 
                      course={course}
                      activeModule={activeModule}
                      activeLesson={activeLesson}
                      prev={prev}
                      next={next}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseView;
