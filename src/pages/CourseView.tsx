import { useEffect, useState, useRef } from "react";
import { Navigate, useParams } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { userCourses } from "@/data/coursesData";
import { Course, Lesson, Module } from "@/types/course";
import { CoursesSidebar, QuestSidebar } from "@/components/courses";
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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("CourseView mounted, courseId:", courseId);
    
    setLoading(true);
    setError(null);
    
    if (courseId) {
      const foundCourse = userCourses.find(c => c.id === courseId);
      console.log("Found course:", foundCourse ? foundCourse.title : "No course found");
      
      if (foundCourse) {
        setCourse(foundCourse);
        
        let activeModuleFound = null;
        let activeLessonFound = null;

        if (moduleId && lessonId) {
          activeModuleFound = foundCourse.modules.find(m => m.id === moduleId) || null;
          
          if (activeModuleFound) {
            activeLessonFound = activeModuleFound.lessons.find(l => l.id === lessonId) || null;
          }
        }
        
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

  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.setAttribute('data-sidebar-collapsed', (!sidebarOpen).toString());
    }
    
    if (sidebarRef.current) {
      sidebarRef.current.setAttribute('data-sidebar-collapsed', (!sidebarOpen).toString());
    }
  }, [sidebarOpen]);

  console.log("Auth state:", { user, authLoading });

  if (loading) {
  return (
    <div className="min-h-screen course-theme bg-background text-foreground flex flex-col">
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

  if (error || !course) {
    return (
      <div className="min-h-screen course-theme bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-1 py-6 px-4">
          <div className="container mx-auto">
            <div className="text-center py-20">
              <p className="text-xl text-red-500">{error || "Course not found"}</p>
              <div className="mt-4">
                <a href="/my-courses" className="text-blue-500 hover:underline">Go back to My Courses</a>
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
    <div className="min-h-screen course-theme bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-1 py-6 px-4" data-sidebar-collapsed={(!sidebarOpen).toString()}>
        <div className="container mx-auto">
          {course && (
            <>
              <CourseHeader 
                course={course} 
                moduleId={moduleId} 
                activeModule={activeModule || undefined} 
              />
              
              <div className="w-full">
                <SidebarProvider open={sidebarOpen} setOpen={setSidebarOpen}>
                  <div className="flex flex-col lg:flex-row relative">
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
