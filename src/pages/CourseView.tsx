
import { useEffect, useState, useRef } from "react";
import { Navigate, useParams } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { userCourses } from "@/data/coursesData";
import { Course, Lesson, Module } from "@/types/course";
import CoursesSidebar from "@/components/courses/CoursesSidebar";
import CourseHeader from "@/components/courses/CourseHeader";
import CourseContent from "@/components/courses/CourseContent";
import { useCourseNavigation } from "@/hooks/useCourseNavigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { motion } from "framer-motion";

const CourseView = () => {
  const { user, loading: authLoading } = useAuth();
  const { courseId, moduleId, lessonId } = useParams();
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Move sidebar state to component top level
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Load course data 
  useEffect(() => {
    console.log("CourseView mounted, courseId:", courseId);
    
    // Reset state on navigation
    setLoading(true);
    setError(null);
    
    if (courseId) {
      const foundCourse = userCourses.find(c => c.id === courseId);
      console.log("Found course:", foundCourse ? foundCourse.title : "No course found");
      
      if (foundCourse) {
        setCourse(foundCourse);
        
        // Find active module and lesson based on URL params
        let activeModuleFound = null;
        let activeLessonFound = null;

        // First look for the exact module and lesson in URL
        if (moduleId && lessonId) {
          activeModuleFound = foundCourse.modules.find(m => m.id === moduleId) || null;
          
          if (activeModuleFound) {
            activeLessonFound = activeModuleFound.lessons.find(l => l.id === lessonId) || null;
          }
        }
        
        // If no specific module/lesson in URL, use the first available
        if (!activeModuleFound && foundCourse.modules.length > 0) {
          activeModuleFound = foundCourse.modules[0];
        }
        
        if (!activeLessonFound && activeModuleFound && activeModuleFound.lessons.length > 0) {
          activeLessonFound = activeModuleFound.lessons[0];
        }
        
        setActiveModule(activeModuleFound);
        setActiveLesson(activeLessonFound);
        
        console.log("Active module:", activeModuleFound ? activeModuleFound.title : "No module found");
        console.log("Active lesson:", activeLessonFound ? activeLessonFound.title : "No lesson found");
      } else {
        setError(`Course with ID "${courseId}" not found`);
      }
    }
    
    setLoading(false);
  }, [courseId, moduleId, lessonId]);

  // Auth state logging for debugging
  console.log("Auth state:", { user, authLoading });

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-dark-purple text-white flex flex-col">
        <Header />
        <main className="flex-1 py-6 px-4">
          <div className="container mx-auto">
            <div className="text-center py-20">
              <p className="text-xl">Loading course...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Show error state  
  if (error || !course) {
    return (
      <div className="min-h-screen bg-dark-purple text-white flex flex-col">
        <Header />
        <main className="flex-1 py-6 px-4">
          <div className="container mx-auto">
            <div className="text-center py-20">
              <p className="text-xl text-red-400">{error || "Course not found"}</p>
              <div className="mt-4">
                <a href="/my-courses" className="text-blue-400 hover:underline">Go back to My Courses</a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { prev, next } = useCourseNavigation(course, activeModule, activeLesson);

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
              
              {/* Use a flex layout instead of grid for more fluid responsive behavior */}
              <div className="w-full">
                {/* Use the top-level sidebar state */}
                <SidebarProvider open={sidebarOpen} setOpen={setSidebarOpen}>
                  <div className="flex flex-col lg:flex-row relative">
                    {/* Sidebar - direct lesson list */}
                    <motion.div 
                      ref={sidebarRef}
                      className="flex-shrink-0 w-full lg:w-1/4 xl:w-1/5"
                      animate={{
                        width: sidebarOpen ? "auto" : "60px"
                      }}
                      style={{
                        maxWidth: sidebarOpen ? "100%" : "60px",
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <CoursesSidebar
                        modules={course.modules}
                        courseId={course.id}
                        activeModuleId={activeModule?.id}
                        activeLessonId={activeLesson?.id}
                        noProvider={true} // Flag to avoid nested SidebarProvider
                      />
                    </motion.div>
                    
                    {/* Main content - lesson */}
                    <div 
                      className="flex-grow transition-all duration-300"
                    >
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
