
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

  console.log("Auth state:", { user, authLoading });

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
              
              <SidebarProvider>
                <div className="grid grid-cols-12 gap-6 relative">
                  <div 
                    ref={sidebarRef}
                    className="col-span-12 lg:col-span-4 xl:col-span-3 transition-all duration-300"
                  >
                    <CoursesSidebar
                      modules={course.modules}
                      courseId={course.id}
                      activeModuleId={activeModule?.id}
                      activeLessonId={activeLesson?.id}
                    />
                  </div>
                  
                  <div className="col-span-12 lg:col-span-8 xl:col-span-9 transition-all duration-300">
                    <CourseContent 
                      course={course}
                      activeModule={activeModule}
                      activeLesson={activeLesson}
                      prev={prev}
                      next={next}
                    />
                  </div>
                </div>
              </SidebarProvider>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseView;
