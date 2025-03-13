
import { useEffect, useState, useRef } from "react";
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
import { ChevronRight } from "lucide-react";

const CourseView = () => {
  const { user, loading } = useAuth();
  const { courseId, moduleId, lessonId } = useParams();
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const collapseTimeoutRef = useRef<number | null>(null);

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

  // Handle sidebar auto-collapse with immediate start but longer animation
  useEffect(() => {
    const handleMouseEnter = () => {
      if (collapseTimeoutRef.current) {
        window.clearTimeout(collapseTimeoutRef.current);
        collapseTimeoutRef.current = null;
      }
      setSidebarCollapsed(false);
    };

    const handleMouseLeave = () => {
      // Start collapsing immediately when mouse leaves
      collapseTimeoutRef.current = window.setTimeout(() => {
        setSidebarCollapsed(true);
      }, 300); // Short delay before starting to collapse
    };

    const sidebarElement = sidebarRef.current;
    if (sidebarElement) {
      sidebarElement.addEventListener('mouseenter', handleMouseEnter);
      sidebarElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (sidebarElement) {
        sidebarElement.removeEventListener('mouseenter', handleMouseEnter);
        sidebarElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      
      if (collapseTimeoutRef.current) {
        window.clearTimeout(collapseTimeoutRef.current);
      }
    };
  }, []);

  const { prev, next } = useCourseNavigation(course, activeModule, activeLesson);

  const toggleSidebar = () => {
    setSidebarCollapsed(prev => !prev);
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
                {/* Sidebar - modules and lessons */}
                <div 
                  ref={sidebarRef}
                  className={`lg:col-span-${sidebarCollapsed ? '1' : '4'} xl:col-span-${sidebarCollapsed ? '1' : '3'} transition-all duration-1000 ease-in-out group relative`}
                >
                  <div 
                    className={`glass-card ${sidebarCollapsed ? 'p-2' : 'p-4'} sticky top-24 transition-all duration-1000 ease-in-out ${
                      sidebarCollapsed ? 'opacity-80 hover:opacity-100' : 'opacity-100'
                    } transform ${
                      sidebarCollapsed ? 'scale-95' : 'scale-100'
                    }`}
                  >
                    {sidebarCollapsed && (
                      <button 
                        onClick={toggleSidebar}
                        className="absolute -right-3 top-1/2 -translate-y-1/2 bg-magenta rounded-full p-1 shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="h-4 w-4 text-white" />
                      </button>
                    )}
                    
                    <ModuleList 
                      modules={course.modules} 
                      courseId={course.id} 
                      activeModuleId={activeModule?.id}
                      collapsed={sidebarCollapsed}
                    />
                    
                    {activeModule && (
                      <LessonList 
                        lessons={activeModule.lessons}
                        courseId={course.id}
                        moduleId={activeModule.id}
                        activeLessonId={activeLesson?.id}
                        collapsed={sidebarCollapsed}
                      />
                    )}
                    
                    {!sidebarCollapsed && (
                      <button 
                        onClick={toggleSidebar}
                        className="mt-4 w-full text-center text-xs text-white/60 hover:text-white transition-colors flex items-center justify-center gap-1"
                      >
                        <span>Minimize sidebar</span>
                        <ChevronRight className="h-3 w-3 rotate-180" />
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Main content - lesson */}
                <div className={`lg:col-span-${sidebarCollapsed ? '11' : '8'} xl:col-span-${sidebarCollapsed ? '11' : '9'} transition-all duration-1000 ease-in-out`}>
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
