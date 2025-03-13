
export interface TranscriptSegment {
  text: string;
  startTime: number;
  endTime: number;
}

export interface Lesson {
  id: string;
  title: string;
  description?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  completed: boolean;
  transcript?: TranscriptSegment[];
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
