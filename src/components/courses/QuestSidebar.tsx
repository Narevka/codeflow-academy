import React, { useState } from 'react';
import { Course } from '@/types/course';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, CheckCircle, Circle, Sparkles, BookOpen } from 'lucide-react';
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
    <div className="sidebar-simple w-full max-w-xs h-full overflow-hidden">
      <div className="sidebar-content">
        <h2 className="text-xl font-bold mb-5 heading-primary">{course.title}</h2>
        
        <div className="space-y-3">
          {course.modules.map((module, moduleIndex) => (
            <Collapsible 
              key={module.id} 
              open={openModules[module.id]} 
              onOpenChange={() => toggleModule(module.id)}
              className="course-module"
            >
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="w-full flex items-center justify-between p-3 text-foreground/90 hover:bg-muted"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary font-medium text-sm">
                      {moduleIndex + 1}
                    </div>
                    <span className="font-medium">
                      {module.title}
                    </span>
                  </div>
                  {openModules[module.id] ? 
                    <ChevronUp size={16} className="text-primary/70" /> : 
                    <ChevronDown size={16} className="text-foreground/50" />
                  }
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="animate-slide-down">
                <div className="p-2 space-y-1">
                  {module.lessons.map((lesson, lessonIndex) => {
                    const isQuest = isQuestLesson(lessonIndex);
                    const isSelected = currentLessonId === lesson.id;
                    
                    return (
                      <div key={lesson.id}>
                        <Button
                          variant="ghost"
                          className={`w-full text-left justify-start py-2 px-3 mb-1 rounded-md transition-all duration-200
                            ${isSelected ? 'bg-primary/5 border-l-2 border-primary' : 'border-l-2 border-transparent hover:bg-muted'}`}
                          onClick={() => onLessonSelect(lesson.id)}
                        >
                          <div className="flex items-center gap-2">
                            {lesson.completed ? (
                              <CheckCircle size={14} className="text-primary" />
                            ) : (
                              <Circle size={14} className="text-muted-foreground" />
                            )}
                            <span className="text-sm">
                              {moduleIndex + 1}.{lessonIndex + 1} {lesson.title}
                            </span>
                          </div>
                        </Button>
                        
                        {isQuest && (
                          <div className="quest-item">
                            <div className="flex items-center gap-2">
                              <Sparkles size={14} className="text-primary" />
                              <div className="text-sm font-medium text-primary/80">Quest</div>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
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
    </div>
  );
};

export default QuestSidebar;
