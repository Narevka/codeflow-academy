import React from 'react';
import { Course } from '@/types/course';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle, Sparkles } from 'lucide-react';

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

  const isQuestLesson = (lessonIndex: number) => {
    // Display quests after specific lessons (0-indexed: lessons 2, 5, 7, 9)
    // This corresponds to lessons 3, 6, 8, 10 in 1-indexed numbering
    return [2, 5, 7, 9].includes(lessonIndex);
  };

  return (
    <div className="sidebar-simple w-full max-w-xs h-full overflow-hidden">
      <div className="sidebar-content">
        <h2 className="text-xl font-bold mb-5 heading-primary">{course.title}</h2>
        
        <div className="space-y-3">
          {course.modules.map((module, moduleIndex) => (
            <div key={module.id} className="course-module">
              <div className="w-full flex items-center p-3 text-foreground/90 bg-primary/5 rounded-t-md">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary font-medium text-sm">
                    ★
                  </div>
                  <span className="font-medium">
                    {module.title}
                  </span>
                </div>
              </div>
              
              <div className="border-l border-r border-b rounded-b-md">
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
                              {lessonIndex + 1} {lesson.title}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestSidebar;
