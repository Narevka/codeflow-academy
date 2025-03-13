
import { VideoPlayer } from "../ui/video-player";

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

        <VideoPlayer 
          src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
          poster="/public/lovable-uploads/af41dcbe-22e6-4e86-a8f3-d5878acd2e55.png"
          title="Wprowadzenie do kursu Flowise AI"
        />
      </div>
    </section>
  );
};

export default CourseTrailer;
