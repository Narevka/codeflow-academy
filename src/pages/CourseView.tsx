
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { userCourses } from "@/data/coursesData";
import { Course, Lesson, Module } from "@/types/course";
import CourseHeader from "@/components/courses/CourseHeader";
import { CourseViewContent, CourseViewLoading, CourseViewError } from "@/components/courses";

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
    return <CourseViewLoading />;
  }

  if (error || !course) {
    return <CourseViewError error={error} />;
  }

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
                <CourseViewContent
                  course={course}
                  activeModule={activeModule}
                  activeLesson={activeLesson}
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
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
