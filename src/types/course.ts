
export interface Lesson {
  id: string;
  title: string;
  description?: string;
  videoUrl?: string;
  completed: boolean;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  lastActivity?: string;
  progress: number;
  modules: Module[];
}
