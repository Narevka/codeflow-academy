
import { Module, Lesson } from "@/types/course";
import { 
  Sidebar, 
  SidebarBody, 
  SidebarLink,
  SidebarProvider
} from "@/components/ui/sidebar";
import { useState } from "react";
import { BookOpen, Trophy } from "lucide-react";

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
  const allLessons = modules.flatMap((module, moduleIndex) => 
    module.lessons.map(lesson => ({
      ...lesson,
      moduleId: module.id,
      lessonNumber: moduleIndex + 1 // Add lesson number for display
    }))
  );
  
  if (!modules || modules.length === 0) {
    return <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 w-full">No lessons available</div>;
  }

  // Create the sidebar content
  const sidebarContent = (
    <Sidebar className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 w-full transition-all duration-300">
      <SidebarBody className="sticky top-24">
        <div className="space-y-1 relative">
          <h3 className={`font-semibold text-gray-800 text-lg mb-4 ${!sidebarOpen ? 'opacity-0' : ''}`}>
            Lekcje
          </h3>
          
          {allLessons.map((lesson, index) => {
            const isActive = lesson.id === activeLessonId;
            const lessonNumber = index + 1;
            
            // Icon based on lesson completion status and quest status
            let icon;
            
            if (lesson.isQuest) {
              // Quest lesson with trophy icon
              icon = lesson.completed ? 
                <div className="w-6 h-6 bg-amber-500 rounded-full z-10 flex-shrink-0 border-2 border-white flex items-center justify-center text-xs font-bold text-white absolute left-0">
                  <Trophy size={14} />
                </div> : 
                <div className="w-6 h-6 border-2 border-amber-300 rounded-full z-10 flex-shrink-0 bg-white flex items-center justify-center text-xs font-bold text-amber-500 absolute left-0">
                  <Trophy size={14} />
                </div>;
            } else {
              // Regular lesson with number
              icon = lesson.completed ? 
                <div className="w-6 h-6 bg-green-500 rounded-full z-10 flex-shrink-0 border-2 border-white flex items-center justify-center text-xs font-bold text-white absolute left-0">{lessonNumber}</div> : 
                <div className="w-6 h-6 border-2 border-gray-300 rounded-full z-10 flex-shrink-0 bg-white flex items-center justify-center text-xs font-bold text-gray-700 absolute left-0">{lessonNumber}</div>;
            }

            return (
              <SidebarLink
                key={lesson.id}
                link={{
                  label: `${lesson.title}${lesson.isQuest ? ' (Quest)' : ''}`,
                  href: `/my-courses/${courseId}/${lesson.moduleId}/${lesson.id}`,
                  icon: icon
                }}
                isActive={isActive}
                completed={lesson.completed}
                className={`rounded-md py-3 pl-12 ${
                  isActive
                    ? "bg-magenta/10 text-magenta font-medium active-lesson"
                    : "hover:bg-gray-100 text-gray-700 inactive-lesson"
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
