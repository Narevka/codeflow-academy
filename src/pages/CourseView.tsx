
import { useEffect, useState } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { userCourses } from "@/data/coursesData";
import { Lesson, Module } from "@/types/course";
import ModuleList from "@/components/courses/ModuleList";
import LessonList from "@/components/courses/LessonList";
import LessonContent from "@/components/courses/LessonContent";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const CourseView = () => {
  const { user, loading } = useAuth();
  const { courseId, moduleId, lessonId } = useParams();
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

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

  // Find next and previous lessons for navigation
  const getNavigation = () => {
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

  const { prev, next } = getNavigation();

  return (
    <div className="min-h-screen bg-dark-purple text-white flex flex-col">
      <Header />
      
      <main className="flex-1 py-10 px-4">
        <div className="container mx-auto">
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Start</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/my-courses">Moje kursy</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/my-courses/${courseId}`}>{course?.title}</BreadcrumbLink>
                </BreadcrumbItem>
                {moduleId && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href={`/my-courses/${courseId}/${moduleId}`}>
                        {activeModule?.title}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          
          <div className="mb-6">
            <Link to="/my-courses" className="flex items-center text-white/80 hover:text-white">
              <ArrowLeft size={16} className="mr-2" />
              <span>Powrót do Twoich kursów</span>
            </Link>
          </div>
          
          {course && (
            <>
              <div className="mb-6">
                <h1 className="text-3xl font-bold gradient-text">{course.title}</h1>
                <div className="flex items-center mt-3">
                  <div className="w-full mr-4">
                    <Progress value={course.progress} className="h-2 bg-white/10" />
                  </div>
                  <div className="text-sm whitespace-nowrap">{course.progress}% ukończono</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Sidebar - modules and lessons */}
                <div className="lg:col-span-4 xl:col-span-3">
                  <div className="glass-card p-4 sticky top-24">
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
                </div>
                
                {/* Main content - lesson */}
                <div className="lg:col-span-8 xl:col-span-9">
                  <div className="glass-card p-6">
                    {activeLesson ? (
                      <>
                        <LessonContent lesson={activeLesson} />
                        
                        {/* Navigation buttons */}
                        <div className="mt-12 flex justify-between">
                          {prev ? (
                            <Link
                              to={`/my-courses/${courseId}/${prev.moduleId}/${prev.lessonId}`}
                              className="flex items-center text-white/80 hover:text-white"
                            >
                              <ChevronLeft size={20} className="mr-2" />
                              <div>
                                <div className="text-xs text-white/60">Poprzednia lekcja</div>
                                <div className="text-sm">{prev.title}</div>
                              </div>
                            </Link>
                          ) : (
                            <div></div>
                          )}
                          
                          {next && (
                            <Link
                              to={`/my-courses/${courseId}/${next.moduleId}/${next.lessonId}`}
                              className="flex items-center text-white/80 hover:text-white text-right"
                            >
                              <div>
                                <div className="text-xs text-white/60">Następna lekcja</div>
                                <div className="text-sm">{next.title}</div>
                              </div>
                              <ChevronRight size={20} className="ml-2" />
                            </Link>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-20">
                        <p>Wybierz lekcję z menu, aby rozpocząć naukę.</p>
                      </div>
                    )}
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
