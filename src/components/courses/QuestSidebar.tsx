import { Module, Lesson } from "@/types/course";
import { 
  Sidebar, 
  SidebarBody, 
  SidebarLink,
  SidebarProvider
} from "@/components/ui/sidebar";
import { useState } from "react";
import { BookOpen, Award, ChevronDown, ChevronRight } from "lucide-react";

interface QuestItem {
  id: string;
  title: string;
  moduleId: string;
  afterLessonIndex: number; // Po której lekcji pojawia się quest
  completed: boolean;
}

interface QuestSidebarProps {
  modules: Module[];
  courseId: string;
  activeModuleId?: string;
  activeLessonId?: string;
  noProvider?: boolean;
}

const QuestSidebar = ({ 
  modules, 
  courseId, 
  activeModuleId, 
  activeLessonId,
  noProvider = false
}: QuestSidebarProps) => {
  // Stan dla zwijania/rozwijania sidebara
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Stan dla zwijania/rozwijania poszczególnych modułów
  const [expandedModules, setExpandedModules] = useState<{[key: string]: boolean}>({});

  // Domyślnie rozwiń pierwszy moduł
  useState(() => {
    if (modules && modules.length > 0) {
      setExpandedModules(prev => ({
        ...prev,
        [modules[0].id]: true
      }));
    }
  });

  // Generowanie questów co 2 lekcje
  const generateQuests = (): QuestItem[] => {
    let quests: QuestItem[] = [];
    let lessonCounter = 0;
    
    modules.forEach((module, moduleIndex) => {
      module.lessons.forEach((lesson, lessonIndex) => {
        lessonCounter++;
        // Dodaj quest po każdych 2 lekcjach
        if (lessonCounter % 2 === 0) {
          quests.push({
            id: `quest-after-${lesson.id}`,
            title: `Quest ${Math.floor(lessonCounter / 2)}: Praktyczne zadanie`,
            moduleId: module.id,
            afterLessonIndex: lessonIndex,
            completed: false // Możemy to później powiązać ze stanem ukończenia
          });
        }
      });
    });
    
    return quests;
  };

  const quests = generateQuests();
  
  // Funkcja przełączająca zwinięcie/rozwinięcie modułu
  const toggleModuleExpansion = (moduleId: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  if (!modules || modules.length === 0) {
    return <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 w-full">No lessons available</div>;
  }

  // Zawartość sidebar
  const sidebarContent = (
    <Sidebar className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 w-full transition-all duration-300">
      <SidebarBody className="sticky top-24">
        <div className="space-y-1 relative">
          <h3 className={`font-semibold text-gray-800 text-lg mb-4 ${!sidebarOpen ? 'opacity-0' : ''}`}>
            Zawartość kursu
          </h3>
          
          {modules.map((module, moduleIndex) => {
            const isModuleExpanded = expandedModules[module.id] || false;
            const moduleQuests = quests.filter(quest => quest.moduleId === module.id);
            
            return (
              <div key={module.id} className="mb-4">
                {/* Nagłówek modułu */}
                <div 
                  className="flex items-center cursor-pointer py-2 px-2 hover:bg-gray-100 rounded-md"
                  onClick={() => toggleModuleExpansion(module.id)}
                >
                  {isModuleExpanded ? 
                    <ChevronDown className="h-4 w-4 mr-2 text-gray-500" /> : 
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                  }
                  <h4 className="font-medium text-gray-700">{module.title}</h4>
                </div>
                
                {/* Zawartość modułu */}
                {isModuleExpanded && (
                  <div className="ml-4 border-l-2 border-gray-200 pl-2 mt-2">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const isActive = lesson.id === activeLessonId;
                      const lessonNumber = lessonIndex + 1;
                      
                      // Ikona bazująca na statusie ukończenia
                      const icon = lesson.completed ? 
                        <div className="w-6 h-6 bg-green-500 rounded-full z-10 flex-shrink-0 border-2 border-white flex items-center justify-center text-xs font-bold text-white">{lessonNumber}</div> : 
                        <div className="w-6 h-6 border-2 border-gray-300 rounded-full z-10 flex-shrink-0 bg-white flex items-center justify-center text-xs font-bold text-gray-700">{lessonNumber}</div>;

                      // Czy po tej lekcji jest quest
                      const questAfterThisLesson = moduleQuests.find(q => q.afterLessonIndex === lessonIndex);
                      
                      return (
                        <div key={lesson.id}>
                          <SidebarLink
                            link={{
                              label: `${lesson.title}`,
                              href: `/my-courses/${courseId}/${module.id}/${lesson.id}`,
                              icon: icon
                            }}
                            isActive={isActive}
                            completed={lesson.completed}
                            className={`rounded-md py-3 pl-10 relative ${
                              isActive
                                ? "bg-magenta/10 text-magenta font-medium active-lesson"
                                : "hover:bg-gray-100 text-gray-700 inactive-lesson"
                            }`}
                          />
                          
                          {/* Quest po lekcji */}
                          {questAfterThisLesson && (
                            <div className="ml-2 my-2 border-l-2 border-amber-400 pl-2">
                              <SidebarLink
                                link={{
                                  label: questAfterThisLesson.title,
                                  href: `/my-courses/${courseId}/${module.id}/${lesson.id}?quest=true`,
                                  icon: <Award className="h-5 w-5 text-amber-500" />
                                }}
                                isActive={false}
                                completed={questAfterThisLesson.completed}
                                className="rounded-md py-2 px-2 text-amber-700 hover:bg-amber-50 text-sm font-medium"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SidebarBody>
    </Sidebar>
  );

  // Warunkowe zawijanie w SidebarProvider
  return noProvider ? (
    sidebarContent
  ) : (
    <SidebarProvider open={sidebarOpen} setOpen={setSidebarOpen}>
      {sidebarContent}
    </SidebarProvider>
  );
};

export default QuestSidebar;
