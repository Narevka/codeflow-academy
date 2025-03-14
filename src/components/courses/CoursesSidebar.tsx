
import { Module, Lesson } from "@/types/course";
import { 
  Sidebar, 
  SidebarBody, 
  SidebarLink,
  SidebarProvider
} from "@/components/ui/sidebar";
import { useState } from "react";
import { BookOpen } from "lucide-react";

interface CoursesSidebarProps {
  modules: Module[];
  courseId: string;
  activeModuleId?: string;
  activeLessonId?: string;
  noProvider?: boolean; // Flag to avoid nested SidebarProvider
}

const CoursesSidebar = ({ 
  modules, 
  courseId, 
  activeModuleId, 
  activeLessonId,
  noProvider = false
}: CoursesSidebarProps) => {
  // Create local state for sidebar open/closed
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Flatten all lessons from all modules into a single array
  const allLessons = modules.flatMap((module) => 
    module.lessons.map(lesson => ({
      ...lesson,
      moduleId: module.id,
      moduleTitle: module.title
    }))
  );
  
  if (!modules || modules.length === 0) {
    return <div className="glass-card p-4 w-full">No lessons available</div>;
  }

  // Create the sidebar content
  const sidebarContent = (
    <Sidebar className="glass-card p-4 w-full transition-all duration-300">
      <SidebarBody className="sticky top-24">
        <div className="space-y-1 relative">
          <h3 className={`font-semibold text-white text-lg mb-4 ${!sidebarOpen ? 'opacity-0' : ''}`}>
            Lekcje
          </h3>
          
          {allLessons.map((lesson, index) => {
            const isActive = lesson.id === activeLessonId;
            const lessonNumber = index + 1;
            
            // Icon based on lesson completion status
            const icon = lesson.completed ? 
              <div className="w-6 h-6 bg-green-500 rounded-full z-10 flex-shrink-0 border-2 border-dark-purple flex items-center justify-center text-xs font-bold text-dark-purple">{lessonNumber}</div> : 
              <div className="w-6 h-6 border-2 border-neutral-300 dark:border-white/60 rounded-full z-10 flex-shrink-0 bg-dark-purple flex items-center justify-center text-xs font-bold text-white/80">{lessonNumber}</div>;

            return (
              <SidebarLink
                key={lesson.id}
                link={{
                  label: `${lesson.title}`,
                  href: `/my-courses/${courseId}/${lesson.moduleId}/${lesson.id}`,
                  icon: icon
                }}
                isActive={isActive}
                completed={lesson.completed}
                className={`rounded-md py-3 ${
                  isActive
                    ? "bg-magenta/20 border-l-4 border-magenta -ml-4 pl-4"
                    : "hover:bg-white/10 border-l-4 border-transparent -ml-4 pl-4"
                }`}
              />
            );
          })}
        </div>
      </SidebarBody>
    </Sidebar>
  );

  // Conditionally wrap with SidebarProvider based on noProvider flag
  return noProvider ? (
    sidebarContent
  ) : (
    <SidebarProvider open={sidebarOpen} setOpen={setSidebarOpen}>
      {sidebarContent}
    </SidebarProvider>
  );
};

export default CoursesSidebar;
