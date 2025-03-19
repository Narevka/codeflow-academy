import React, { useState } from 'react';
import { Course } from '@/types/course';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, CheckCircle, Circle } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface QuestSidebarProps {
  course: Course;
  currentLessonId?: string;
  onLessonSelect: (lessonId: string) => void;
}

const QuestSidebar: React.FC<QuestSidebarProps> = ({ 
  course, 
  currentLessonId,
  onLessonSelect
}) => {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const isQuestLesson = (lessonIndex: number) => {
    // Display a quest every 2 lessons (0-indexed: lesson 1, 3, 5, etc.)
    return lessonIndex % 2 === 1;
  };

  return (
    <div className="w-full max-w-xs p-4 h-full overflow-y-auto bg-background border-r">
      <h2 className="text-2xl font-bold mb-6">{course.title}</h2>
      
      <div className="space-y-4">
        {course.modules.map((module, moduleIndex) => (
          <Collapsible 
            key={module.id} 
            open={openModules[module.id]} 
            onOpenChange={() => toggleModule(module.id)}
            className="border rounded-md overflow-hidden"
          >
            <CollapsibleTrigger asChild>
              <Button 
                variant="ghost" 
                className="w-full flex items-center justify-between p-3 rounded-none"
              >
                <div className="flex items-center">
                  <span>{moduleIndex + 1}. {module.title}</span>
                </div>
                {openModules[module.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent>
              <div className="p-2 space-y-1">
                {module.lessons.map((lesson, lessonIndex) => {
                  const isQuest = isQuestLesson(lessonIndex);
                  const isSelected = currentLessonId === lesson.id;
                  
                  return (
                    <div key={lesson.id}>
                      <Button
                        variant={isSelected ? "secondary" : "ghost"}
                        className={`w-full text-left justify-start py-2 px-3 ${isSelected ? 'bg-secondary/50' : ''}`}
                        onClick={() => onLessonSelect(lesson.id)}
                      >
                        <div className="flex items-center gap-2">
                          {lesson.completed ? (
                            <CheckCircle size={16} className="text-green-500" />
                          ) : (
                            <Circle size={16} />
                          )}
                          <span>
                            {moduleIndex + 1}.{lessonIndex + 1} {lesson.title}
                          </span>
                        </div>
                      </Button>
                      
                      {isQuest && (
                        <div className="ml-6 mt-1 mb-3 border-l-2 border-primary pl-3 py-1">
                          <div className="text-sm font-medium text-primary">Quest</div>
                          <div className="text-xs text-muted-foreground">
                            Zastosuj wiedzę w praktyce
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default QuestSidebar;
