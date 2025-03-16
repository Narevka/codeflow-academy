
import { motion } from "framer-motion";
import { BookOpen, Brain, ChartBar, Database, FileText, Globe, Server, Workflow } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Outcomes = () => {
  const { theme } = useTheme();

  // Animation variants
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
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className={`py-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0">
        {theme === 'dark' && (
          <div className="absolute inset-0 bg-[url('/lovable-uploads/38f3e653-b2e9-48bf-8257-d3567c2369a3.png')] bg-center bg-no-repeat bg-cover opacity-5 blur-sm" />
        )}
        
        <div className={`absolute top-0 left-0 w-full h-full ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-purple-900/10 to-transparent'
            : 'bg-gradient-to-b from-purple-100/20 to-transparent'
        }`} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
              theme === 'dark'
                ? 'bg-magenta/20 text-magenta' 
                : 'bg-magenta/10 text-magenta-600'
            }`}
          >
            Efekty kursu
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === 'dark'
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-magenta'
                : 'text-gray-900'
            }`}
          >
            Co osiągniesz dzięki kursowi?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={theme === 'dark' ? 'text-white/70 text-lg' : 'text-gray-600 text-lg'}
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
            className={`p-8 rounded-xl border ${
              theme === 'dark'
                ? 'bg-gray-900/50 border-gray-800'
                : 'bg-white border-gray-100 shadow'
            }`}
          >
            <motion.div variants={item} className="flex items-center mb-6">
              <div className={`p-3 rounded-xl mr-4 ${
                theme === 'dark' ? 'bg-magenta/20' : 'bg-magenta/10'
              }`}>
                <Workflow size={24} className="text-magenta" />
              </div>
              <h3 className={`text-2xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Zbudujesz aplikacje AI w praktyce:</h3>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={item} className="flex">
                <div className={`p-2 rounded-lg mr-4 self-start ${
                  theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                }`}>
                  <FileText size={20} className="text-magenta" />
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Chatboty do analizy PDF</h4>
                  <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                    Stworzysz inteligentne chatboty, które potrafią analizować i odpowiadać na pytania dotyczące dokumentów PDF.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex">
                <div className={`p-2 rounded-lg mr-4 self-start ${
                  theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                }`}>
                  <Brain size={20} className="text-magenta" />
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Autonomiczne aplikacje oparte na agentach AI</h4>
                  <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                    Zbudujesz aplikacje, które samodzielnie podejmują decyzje i realizują złożone zadania dzięki agentom AI.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex">
                <div className={`p-2 rounded-lg mr-4 self-start ${
                  theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                }`}>
                  <Globe size={20} className="text-magenta" />
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Integracje z zewnętrznymi API</h4>
                  <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                    Nauczysz się łączyć swoje aplikacje z zewnętrznymi serwisami jak Google Sheets czy bazami danych.
                  </p>
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
            className={`p-8 rounded-xl border ${
              theme === 'dark'
                ? 'bg-gray-900/50 border-gray-800'
                : 'bg-white border-gray-100 shadow'
            }`}
          >
            <motion.div variants={item} className="flex items-center mb-6">
              <div className={`p-3 rounded-xl mr-4 ${
                theme === 'dark' ? 'bg-magenta/20' : 'bg-magenta/10'
              }`}>
                <BookOpen size={24} className="text-magenta" />
              </div>
              <h3 className={`text-2xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Rozwiniesz swoje umiejętności:</h3>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={item} className="flex">
                <div className={`p-2 rounded-lg mr-4 self-start ${
                  theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                }`}>
                  <Database size={20} className="text-magenta" />
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Zrozumiesz podstawy modeli językowych i Flowise AI</h4>
                  <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                    Poznasz fundamenty działania dużych modeli językowych i interfejsu Flowise, co pozwoli Ci tworzyć zaawansowane aplikacje.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex">
                <div className={`p-2 rounded-lg mr-4 self-start ${
                  theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                }`}>
                  <ChartBar size={20} className="text-magenta" />
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Dowiesz się, jak monitorować wydajność aplikacji</h4>
                  <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                    Nauczysz się analizować i optymalizować działanie swoich aplikacji AI, aby były szybkie i efektywne.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex">
                <div className={`p-2 rounded-lg mr-4 self-start ${
                  theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'
                }`}>
                  <Server size={20} className="text-magenta" />
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Nauczysz się optymalizować koszty użycia modeli GPT</h4>
                  <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                    Poznasz techniki redukcji kosztów związanych z wykorzystaniem dużych modeli językowych w swoich projektach.
                  </p>
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
            className={`inline-block px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-magenta to-purple-600 text-white hover:shadow-magenta/20'
                : 'bg-gradient-to-r from-magenta to-purple-600 text-white hover:shadow-magenta/20'
            }`}
          >
            Chcę się zapisać na kurs
          </a>
          <p className={theme === 'dark' ? 'text-white/50 mt-4' : 'text-gray-500 mt-4'}>
            Dołącz do setek zadowolonych uczestników kursu
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Outcomes;
