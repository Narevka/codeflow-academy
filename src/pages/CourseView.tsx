
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
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
      
      <main className="flex-1 py-10 px-4">
        <div className="container mx-auto">
          {course && (
            <>
              <CourseHeader 
                course={course} 
                moduleId={moduleId} 
                activeModule={activeModule || undefined} 
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Collapsible Sidebar - modules and lessons */}
                <div
                  className={cn(
                    "lg:col-span-1 xl:col-span-1 transition-all duration-300 ease-in-out",
                    sidebarExpanded ? "lg:col-span-4 xl:col-span-3" : "lg:col-span-1 xl:col-span-1"
                  )}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={cn(
                    "glass-card p-4 sticky top-24 h-[calc(100vh-12rem)] overflow-hidden transition-all duration-300",
                    sidebarExpanded ? "w-full" : "w-12"
                  )}>
                    {sidebarExpanded ? (
                      <>
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
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="rotate-90 text-white/70 text-sm font-medium whitespace-nowrap">
                          Nawigacja kursu
                        </div>
                        <ArrowRightFromLine className="mt-4 text-white/70" size={20} />
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Main content - lesson */}
                <div className={cn(
                  "transition-all duration-300",
                  sidebarExpanded 
                    ? "lg:col-span-8 xl:col-span-9" 
                    : "lg:col-span-11 xl:col-span-11"
                )}>
                  <CourseContent 
                    course={course}
                    activeModule={activeModule}
                    activeLesson={activeLesson}
                    prev={prev}
                    next={next}
                  />
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
