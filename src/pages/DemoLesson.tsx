
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { VideoPlayerWithTranscript } from "../components/ui/video-player";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import DemoSignupSheet from "../components/home/DemoSignupSheet";

// Sample transcript for the demo lesson
const demoTranscript = [
  { text: "W tej lekcji omówimy podstawy Flowise AI.", startTime: 0, endTime: 4 },
  { text: "Flowise to narzędzie, które umożliwia tworzenie aplikacji AI bez konieczności pisania kodu.", startTime: 4, endTime: 9 },
  { text: "Interfejs Flowise jest intuicyjny i łatwy w użyciu.", startTime: 9, endTime: 14 },
  { text: "Możemy łączyć różne komponenty, tworząc zaawansowane przepływy pracy.", startTime: 14, endTime: 19 },
  { text: "Najważniejszą zaletą jest możliwość szybkiego prototypowania i testowania pomysłów.", startTime: 19, endTime: 24 },
];

const DemoLesson = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-network-pattern bg-cover bg-fixed opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Przykładowa lekcja
            </h2>
            <p className="text-white/70 text-lg">
              Poniżej znajdziesz fragment lekcji z kursu. Zapoznaj się z jakością naszych materiałów.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <VideoPlayerWithTranscript 
                src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
                poster="/public/lovable-uploads/2fd49611-13df-49b8-a6fe-2b83183c4e83.png"
                title="Lekcja 1: Wprowadzenie do Flowise"
                transcript={demoTranscript}
              />
            </div>
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Co zyskasz z tej lekcji:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 bg-magenta/20 p-1 rounded-full">
                    <Check size={20} className="text-magenta" />
                  </span>
                  <span className="text-white/80">
                    Zrozumiesz podstawowe założenia platformy Flowise AI i jej możliwości
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 bg-magenta/20 p-1 rounded-full">
                    <Check size={20} className="text-magenta" />
                  </span>
                  <span className="text-white/80">
                    Poznasz interfejs użytkownika i nauczysz się poruszać po platformie
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 bg-magenta/20 p-1 rounded-full">
                    <Check size={20} className="text-magenta" />
                  </span>
                  <span className="text-white/80">
                    Zobaczysz, jak stworzyć prosty przepływ pracy (workflow) w Flowise
                  </span>
                </li>
              </ul>
              <div className="pt-4">
                <DemoSignupSheet 
                  trigger={
                    <button className="btn-primary flex items-center justify-center md:inline-flex md:justify-start">
                      Zapisz się na powiadomienia
                      <ArrowRight size={18} className="ml-2" />
                    </button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DemoLesson;
