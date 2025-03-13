
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

  const toggleSidebar = () => {
    setSidebarCollapsed(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-dark-purple text-white flex flex-col">
      <Header />
      
      <main className="flex-1 py-6 px-4">
        <div className="container mx-auto">
          {course && (
            <>
              <CourseHeader 
                course={course} 
                moduleId={moduleId} 
                activeModule={activeModule || undefined} 
              />
              
              <div className="grid grid-cols-12 gap-6">
                {/* Sidebar - modules and lessons */}
                <div 
                  ref={sidebarRef}
                  className={`col-span-12 lg:col-span-4 xl:col-span-3`}
                >
                  <div className="glass-card p-4 sticky top-24">
                    <ModuleList 
                      modules={course.modules} 
                      courseId={course.id} 
                      activeModuleId={activeModule?.id}
                      collapsed={false}
                    />
                    
                    {activeModule && (
                      <LessonList 
                        lessons={activeModule.lessons}
                        courseId={course.id}
                        moduleId={activeModule.id}
                        activeLessonId={activeLesson?.id}
                        collapsed={false}
                      />
                    )}
                  </div>
                </div>
                
                {/* Main content - lesson */}
                <div className="col-span-12 lg:col-span-8 xl:col-span-9">
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
