
export interface TranscriptSegment {
  text: string;
  startTime: number;
  endTime: number;
}

export interface AdditionalVideo {
  title?: string;
  videoUrl: string;
  thumbnailUrl?: string;
  description?: string;
  transcript?: TranscriptSegment[];
}

export interface Lesson {
  id: string;
  title: string;
  displayTitle?: string;
  description?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  completed: boolean;
  transcript?: TranscriptSegment[];
  additionalVideos?: AdditionalVideo[];
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
