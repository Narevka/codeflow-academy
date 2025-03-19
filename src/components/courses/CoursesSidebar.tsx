
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

  // Style dla aktywnej lekcji w różnych stanach
  const activeLessonStyleExpanded = {
    backgroundColor: 'rgba(207, 14, 129, 0.1)',
    borderLeft: '4px solid #cf0e81',
    borderTopLeftRadius: '6px',
    borderBottomLeftRadius: '6px',
    paddingLeft: '4px',
    marginLeft: '-3px'
  };

  // Style dla zwiniętego menu - różowy pasek po prawej stronie
  const activeLessonStyleCollapsed = {
    backgroundColor: 'rgba(207, 14, 129, 0.1)',
    borderRight: '4px solid #cf0e81',
    borderTopRightRadius: '6px',
    borderBottomRightRadius: '6px',
    marginRight: '-3px',
    paddingRight: '3px'
  };

  // Określenie stylu na podstawie stanu zwinięcia sidebar
  const getActiveLessonStyle = () => {
    return sidebarOpen ? activeLessonStyleExpanded : activeLessonStyleCollapsed;
  };

  // Create the sidebar content
  const sidebarContent = (
    <Sidebar className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 w-full transition-all duration-300">
      <style>
        {`
          /* Odsunięcie numeru lekcji od lewej krawędzi */
          .lesson-number {
            margin-left: ${sidebarOpen ? '12px' : '4px'};
            transition: margin-left 0.25s ease;
          }
          
          /* Dodatkowy odstęp między numerem a tekstem */
          .active-lesson .sidebar-link-text {
            margin-left: 16px !important;
            padding-left: 4px;
          }
          
          /* Style dla zaokrąglonych rogów */
          .active-lesson-container {
            border-radius: 6px;
            overflow: hidden;
            margin: 4px 0;
          }
        `}
      </style>
      <SidebarBody className="sticky top-24">
        <div className="space-y-1 relative">
          <h3 className={`font-semibold text-gray-800 text-lg mb-4 ${!sidebarOpen ? 'opacity-0' : ''}`}>
            Lekcje
          </h3>
          
          {allLessons.map((lesson, index) => {
            const isActive = lesson.id === activeLessonId;
            const lessonNumber = index + 1;
            
            // Icon based on lesson completion status
            const icon = lesson.completed ? 
              <div className="w-6 h-6 bg-green-500 rounded-full z-10 flex-shrink-0 border-2 border-white flex items-center justify-center text-xs font-bold text-white absolute left-0">{lessonNumber}</div> : 
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full z-10 flex-shrink-0 bg-white flex items-center justify-center text-xs font-bold text-gray-700 absolute left-0">{lessonNumber}</div>;

            return (
              <div 
                key={lesson.id} 
                className="relative active-lesson-container"
                style={isActive ? getActiveLessonStyle() : {}}
              >
                <SidebarLink
                  link={{
                    label: `${lesson.title}`,
                    href: `/my-courses/${courseId}/${lesson.moduleId}/${lesson.id}`,
                    icon: <div className="lesson-number">{icon}</div>
                  }}
                  isActive={isActive}
                  completed={lesson.completed}
                  className={`rounded-md py-3 pl-10 ${
                    isActive
                      ? "text-magenta font-medium active-lesson"
                      : "hover:bg-gray-100 text-gray-700 inactive-lesson"
                  }`}
                />
              </div>
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
