
import { VideoPlayerWithTranscript } from "../ui/video-player";
import DemoSignupSheet from "./DemoSignupSheet";
import { ArrowRight } from "lucide-react";

// Sample transcript for the trailer
const trailerTranscript = [
  { text: "Witaj w świecie Flowise AI i LangChain!", startTime: 0, endTime: 3 },
  { text: "W tym kursie nauczysz się, jak tworzyć zaawansowane aplikacje AI bez konieczności pisania kodu.", startTime: 3, endTime: 8 },
  { text: "Flowise pozwala na łatwe projektowanie interfejsów graficznych i integrację z różnymi modelami.", startTime: 8, endTime: 13 },
  { text: "Dzięki wizualnemu interfejsowi można szybko prototypować i budować aplikacje oparte na AI.", startTime: 13, endTime: 18 },
  { text: "W tym kursie znajdziesz wszystko, czego potrzebujesz, by zacząć swoją przygodę z Flowise.", startTime: 18, endTime: 23 },
  { text: "Dołącz do nas i odkryj nowe możliwości tworzenia aplikacji AI!", startTime: 23, endTime: 28 },
];

const CourseTrailer = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-network-pattern bg-cover bg-center bg-no-repeat opacity-10" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Dołącz do świata LangChain i Flowise AI
          </h2>
          <p className="text-white/70 text-lg">
            Zobacz, jak łatwo można tworzyć zaawansowane aplikacje AI bez pisania kodu.
            Poniższy film wprowadzi Cię w świat możliwości, które oferuje nasz kurs.
          </p>
        </div>

        <div className="mb-10">
          <VideoPlayerWithTranscript 
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
            poster="/public/lovable-uploads/af41dcbe-22e6-4e86-a8f3-d5878acd2e55.png"
            title="Wprowadzenie do kursu Flowise AI"
            transcript={trailerTranscript}
          />
        </div>

        <div className="flex justify-center mt-8">
          <DemoSignupSheet 
            trigger={
              <button className="btn-primary flex items-center justify-center px-8 py-3 text-lg">
                Zobacz pełne demo kursu
                <ArrowRight size={20} className="ml-2" />
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default CourseTrailer;
