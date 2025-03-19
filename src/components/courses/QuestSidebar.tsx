
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
    <div className="sidebar-background w-full max-w-xs h-full overflow-hidden border-r border-border">
      <div className="sidebar-content p-4 h-full overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 gradient-heading">{course.title}</h2>
        
        <div className="space-y-4">
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
                  className="w-full flex items-center justify-between p-3 group hover:bg-magenta/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-magenta/20 text-magenta font-medium group-hover:scale-110 transition-transform">
                      {moduleIndex + 1}
                    </div>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">
                      {module.title}
                    </span>
                  </div>
                  <div className="transform transition-transform duration-300">
                    {openModules[module.id] ? 
                      <ChevronUp size={18} className="text-magenta animate-pulse-slow" /> : 
                      <ChevronDown size={18} className="text-foreground/70" />
                    }
                  </div>
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
                          className={`lesson-item ${isSelected ? 'lesson-item-active' : ''}`}
                          onClick={() => onLessonSelect(lesson.id)}
                        >
                          <div className="flex items-center gap-2">
                            {lesson.completed ? (
                              <CheckCircle size={16} className="text-magenta transition-transform" />
                            ) : (
                              <Circle size={16} className="text-foreground/70 group-hover:text-magenta transition-colors" />
                            )}
                            <span className="group-hover:translate-x-1 transition-transform">
                              {moduleIndex + 1}.{lessonIndex + 1} {lesson.title}
                            </span>
                          </div>
                        </Button>
                        
                        {isQuest && (
                          <div className="quest-item">
                            <div className="relative pl-3 py-2">
                              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-magenta via-purple to-purple"></div>
                              <div className="flex items-center gap-2">
                                <Sparkles size={16} className="text-magenta animate-pulse" />
                                <div className="text-sm font-medium text-magenta">Quest</div>
                              </div>
                              <div className="text-xs text-foreground/70 mt-1">
                                Zastosuj wiedzę w praktyce
                              </div>
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
