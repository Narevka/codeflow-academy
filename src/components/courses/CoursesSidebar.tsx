import { Module, Lesson } from "@/types/course";
import { 
  Sidebar, 
  SidebarBody, 
  SidebarLink,
  SidebarProvider
} from "@/components/ui/sidebar";
import { useState, useEffect } from "react";

interface CoursesSidebarProps {
  modules: Module[];
  courseId: string;
  activeModuleId?: string;
  activeLessonId?: string;
}

const CoursesSidebar = ({ 
  modules, 
  courseId, 
  activeModuleId, 
  activeLessonId
}: CoursesSidebarProps) => {
  // Create local state for sidebar open/closed
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Use the first module as default if no active module ID is provided
  const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];
  
  // Count completed modules to help with connecting lines
  const completedModules = modules.filter(m => m.completed).length;
  const hasCompletedModules = completedModules > 0;

  if (!modules || modules.length === 0) {
    return <div className="glass-card p-4 w-full">No modules available</div>;
  }

  return (
    <SidebarProvider open={sidebarOpen} setOpen={setSidebarOpen}>
      <Sidebar className="glass-card p-4 w-full transition-all duration-300">
        <SidebarBody className="sticky top-24">
          <div className="space-y-1 relative">
            <h3 className={`font-semibold text-white text-lg mb-4 ${!sidebarOpen ? 'opacity-0' : ''}`}>Moduły</h3>
            
            {/* Vertical line connecting completed modules */}
            {hasCompletedModules && (
              <div className="absolute left-2.5 top-12 w-0.5 bg-green-500 h-full transform -translate-x-1/2 z-0"></div>
            )}
            
            {modules.map((module, index) => {
              const isActive = module.id === activeModuleId;
              const icon = module.completed ? 
                <div className="w-6 h-6 bg-green-500 rounded-full z-10 flex-shrink-0 border-2 border-dark-purple" /> : 
                <div className="w-6 h-6 border-2 border-neutral-300 dark:border-white/60 rounded-full z-10 flex-shrink-0 bg-dark-purple" />;
              
              // Determine if this module should have a connector line to the next one
              const nextModule = modules[index + 1];
              const showConnector = module.completed && nextModule && nextModule.completed;

              return (
                <div key={module.id} className="relative mb-2">
                  <SidebarLink
                    link={{
                      label: module.title,
                      href: `/my-courses/${courseId}/${module.id}`,
                      icon: icon
                    }}
                    isActive={isActive}
                    completed={module.completed}
                    className={`rounded-md py-3 ${
                      isActive
                        ? "bg-magenta/20 border-l-4 border-magenta -ml-4 pl-4"
                        : "hover:bg-white/10 border-l-4 border-transparent -ml-4 pl-4"
                    }`}
                  />

                  {isActive && activeModule && (
                    <div className="ml-7 mt-2 space-y-1 pl-2 border-l-2 border-magenta/30">
                      <h4 className={`font-semibold text-white text-base mb-2 ${!sidebarOpen ? 'hidden' : ''}`}>Lekcje</h4>
                      {activeModule.lessons.map((lesson, lessonIndex) => {
                        const isLessonActive = lesson.id === activeLessonId;
                        const lessonIcon = lesson.completed ? 
                          <div className="w-5 h-5 bg-green-500 rounded-full z-10 flex-shrink-0 border-2 border-dark-purple" /> : 
                          <div className="w-5 h-5 border-2 border-neutral-300 dark:border-white/60 rounded-full z-10 flex-shrink-0 bg-dark-purple" />;

                        // Connecting line between completed lessons
                        const nextLesson = activeModule.lessons[lessonIndex + 1];
                        const showLessonConnector = lesson.completed && nextLesson && nextLesson.completed;

                        return (
                          <div key={lesson.id} className="relative">
                            <SidebarLink
                              key={lesson.id}
                              link={{
                                label: lesson.title,
                                href: `/my-courses/${courseId}/${activeModule.id}/${lesson.id}`,
                                icon: lessonIcon
                              }}
                              isActive={isLessonActive}
                              completed={lesson.completed}
                              className={`rounded-md py-2 ${
                                isLessonActive
                                  ? "bg-magenta/20 border-l-4 border-magenta -ml-4 pl-4"
                                  : "hover:bg-white/10 border-l-4 border-transparent -ml-4 pl-4"
                              }`}
                            />
                            {/* Vertical connector between lessons */}
                            {showLessonConnector && (
                              <div className="absolute left-2.5 top-7 w-0.5 bg-green-500 h-6 transform -translate-x-1/2 z-0"></div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  {/* Vertical connector between modules */}
                  {showConnector && (
                    <div className="absolute left-3 top-8 w-0.5 bg-green-500 h-12 transform -translate-x-1/2 z-0"></div>
                  )}
                </div>
              );
            })}
          </div>
        </SidebarBody>
      </Sidebar>
    </SidebarProvider>
  );
};

export default CoursesSidebar;
