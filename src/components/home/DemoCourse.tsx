
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { VideoPlayer } from "../ui/video-player";

const DemoCourse = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-network-pattern bg-cover bg-fixed opacity-5" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Zobacz przykładową lekcję
          </h2>
          <p className="text-white/70 text-lg">
            Zanim zdecydujesz się na zakup, sprawdź jakość naszych materiałów. 
            Poniżej znajdziesz fragment lekcji z kursu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <VideoPlayer 
              src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
              poster="/public/lovable-uploads/2fd49611-13df-49b8-a6fe-2b83183c4e83.png"
              title="Lekcja 1: Wprowadzenie do Flowise"
            />
          </div>
          <div className="space-y-6">
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
              <Link to="/offer" className="btn-primary flex items-center justify-center md:inline-flex md:justify-start">
                Odkryj pełny kurs
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoCourse;
