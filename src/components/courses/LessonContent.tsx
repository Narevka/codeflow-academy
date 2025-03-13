
import { Lesson } from "@/types/course";
import { VideoPlayerWithTranscript } from "@/components/ui/video-player";
import { useState, useEffect } from "react";

interface LessonContentProps {
  lesson: Lesson;
}

// Example transcript data - in a real app, this would come from the lesson data
const sampleTranscript = [
  { text: "Witaj w tym kursie. Dzisiaj omówimy podstawy Flowise AI.", startTime: 0, endTime: 5 },
  { text: "Następnie jak wejdziecie sobie do Gmaila,", startTime: 5, endTime: 10 },
  { text: "tak jak u mnie w tej chwili to widzicie na ekranie,", startTime: 10, endTime: 15 },
  { text: "możecie z automatu pofiltrować sobie przychodzącą pocztę.", startTime: 15, endTime: 20 },
  { text: "Tak jak tutaj widzicie, automatycznie 4 wiadomości, które mi przyszły", startTime: 20, endTime: 25 },
  { text: "mają przypisaną kategorię filtr moda.", startTime: 25, endTime: 30 },
  { text: "Wejdźmy do jednej z takich wiadomości i zobaczycie", startTime: 30, endTime: 35 },
  { text: "taka wiadomość przyszła na adres e-mail leszczynskimichal+moda@gmail.com.", startTime: 35, endTime: 40 },
  { text: "Teraz omówimy jak skonfigurować takie filtry w Gmailu.", startTime: 40, endTime: 45 },
  { text: "To narzędzie jest bardzo przydatne, gdy otrzymujemy dużo wiadomości.", startTime: 45, endTime: 50 },
];

const LessonContent = ({ lesson }: LessonContentProps) => {
  const [isMuxVideo, setIsMuxVideo] = useState(false);
  const [playbackId, setPlaybackId] = useState<string>("");
  
  // Set up the video source based on the videoUrl format
  useEffect(() => {
    if (lesson.videoUrl?.startsWith('mux:')) {
      setIsMuxVideo(true);
      setPlaybackId(lesson.videoUrl.replace('mux:', ''));
    } else {
      setIsMuxVideo(false);
    }
  }, [lesson.videoUrl]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">{lesson.title}</h1>
      
      {lesson.videoUrl && (
        <div className="mb-8">
          <VideoPlayerWithTranscript
            src={lesson.videoUrl}
            poster={lesson.thumbnailUrl}
            title={lesson.title}
            transcript={lesson.transcript || sampleTranscript}
          />
        </div>
      )}
      
      {lesson.description && (
        <div className="prose prose-invert max-w-none mt-6">
          <p>{lesson.description}</p>
        </div>
      )}
    </div>
  );
};

export default LessonContent;
