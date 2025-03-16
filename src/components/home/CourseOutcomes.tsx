
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Brain, 
  ChartBar, 
  Database, 
  FileText, 
  FileType2, 
  Globe, 
  Server, 
  Share2, 
  Workflow 
} from "lucide-react";

const CourseOutcomes = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-dark-purple relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[url('/public/lovable-uploads/38f3e653-b2e9-48bf-8257-d3567c2369a3.png')] bg-center bg-no-repeat bg-cover opacity-5 blur-sm" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-magenta/20 text-magenta rounded-full text-sm font-medium mb-4"
          >
            Efekty kursu
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
          >
            Co osiągniesz dzięki kursowi?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            Praktyczne umiejętności i wiedza, które wyniesiesz z tego kursu.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Build applications section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-card-gradient glass-card p-8 rounded-xl border border-white/10"
          >
            <motion.div variants={item} className="flex items-center mb-6">
              <div className="bg-magenta/20 p-3 rounded-xl mr-4">
                <Workflow size={24} className="text-magenta" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Zbudujesz aplikacje AI w praktyce:</h3>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={item} className="flex">
                <div className="bg-white/10 p-2 rounded-lg mr-4 self-start">
                  <FileText size={20} className="text-magenta" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Chatboty do analizy PDF</h4>
                  <p className="text-white/70">Stworzysz inteligentne chatboty, które potrafią analizować i odpowiadać na pytania dotyczące dokumentów PDF.</p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex">
                <div className="bg-white/10 p-2 rounded-lg mr-4 self-start">
                  <Brain size={20} className="text-magenta" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Autonomiczne aplikacje oparte na agentach AI</h4>
                  <p className="text-white/70">Zbudujesz aplikacje, które samodzielnie podejmują decyzje i realizują złożone zadania dzięki agentom AI.</p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex">
                <div className="bg-white/10 p-2 rounded-lg mr-4 self-start">
                  <Globe size={20} className="text-magenta" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Integracje z zewnętrznymi API</h4>
                  <p className="text-white/70">Nauczysz się łączyć swoje aplikacje z zewnętrznymi serwisami jak Google Sheets czy bazami danych.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Develop skills section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-card-gradient glass-card p-8 rounded-xl border border-white/10"
          >
            <motion.div variants={item} className="flex items-center mb-6">
              <div className="bg-magenta/20 p-3 rounded-xl mr-4">
                <BookOpen size={24} className="text-magenta" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Rozwiniesz swoje umiejętności:</h3>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={item} className="flex">
                <div className="bg-white/10 p-2 rounded-lg mr-4 self-start">
                  <Database size={20} className="text-magenta" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Zrozumiesz podstawy modeli językowych i Flowise AI</h4>
                  <p className="text-white/70">Poznasz fundamenty działania dużych modeli językowych i interfejsu Flowise, co pozwoli Ci tworzyć zaawansowane aplikacje.</p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex">
                <div className="bg-white/10 p-2 rounded-lg mr-4 self-start">
                  <ChartBar size={20} className="text-magenta" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Dowiesz się, jak monitorować wydajność aplikacji</h4>
                  <p className="text-white/70">Nauczysz się analizować i optymalizować działanie swoich aplikacji AI, aby były szybkie i efektywne.</p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex">
                <div className="bg-white/10 p-2 rounded-lg mr-4 self-start">
                  <Server size={20} className="text-magenta" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Nauczysz się optymalizować koszty użycia modeli GPT</h4>
                  <p className="text-white/70">Poznasz techniki redukcji kosztów związanych z wykorzystaniem dużych modeli językowych w swoich projektach.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="/offer" 
            className="inline-block bg-gradient-to-r from-magenta to-purple-600 text-white font-medium px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-magenta/20"
          >
            Chcę się zapisać na kurs
          </a>
          <p className="text-white/50 mt-4">Dołącz do setek zadowolonych uczestników kursu</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseOutcomes;
