
import { motion } from "framer-motion";
import { Award, BarChart, Bot, FileText, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Benefits = () => {
  const { theme } = useTheme();
  
  const benefits = [
    {
      icon: <Bot className="h-6 w-6 text-orange" />,
      title: "Chatboty do analizy PDF",
      description: "Stworzysz inteligentne chatboty, które potrafią analizować i odpowiadać na pytania dotyczące dokumentów PDF."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-orange" />,
      title: "Autonomiczne aplikacje",
      description: "Zbudujesz aplikacje oparte na agentach AI, które samodzielnie podejmują decyzje i realizują złożone zadania."
    },
    {
      icon: <Zap className="h-6 w-6 text-orange" />,
      title: "Integracje z zewnętrznymi API",
      description: "Nauczysz się łączyć swoje aplikacje z zewnętrznymi serwisami jak Google Sheets czy bazami danych."
    },
    {
      icon: <Award className="h-6 w-6 text-orange" />,
      title: "Podstawy modeli językowych",
      description: "Poznasz fundamenty działania dużych modeli językowych i interfejsu Flowise, co pozwoli Ci tworzyć zaawansowane aplikacje."
    },
    {
      icon: <BarChart className="h-6 w-6 text-orange" />,
      title: "Monitorowanie wydajności",
      description: "Nauczysz się analizować i optymalizować działanie swoich aplikacji AI, aby były szybkie i efektywne."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-orange" />,
      title: "Optymalizacja kosztów",
      description: "Poznasz techniki redukcji kosztów związanych z wykorzystaniem dużych modeli językowych w swoich projektach."
    }
  ];

  return (
    <section className={`py-20 ${
      theme === 'dark' ? 'bg-black' : 'bg-orange-soft/10'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
              theme === 'dark'
                ? 'bg-orange/20 text-orange'
                : 'bg-orange/20 text-orange-dark'
            }`}
          >
            Efekty nauki
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === 'dark'
                ? 'text-white'
                : 'text-gray-900'
            }`}
          >
            Co osiągniesz dzięki kursowi?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}
          >
            Praktyczne umiejętności i wiedza, które wyniesiesz z tego kursu.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-xl border ${
                theme === 'dark'
                  ? 'bg-gray-900/50 border-gray-800'
                  : 'bg-white border-gray-200 shadow-sm'
              }`}
            >
              <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 ${
                theme === 'dark' ? 'bg-orange/20' : 'bg-orange-soft'
              }`}>
                {benefit.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {benefit.title}
              </h3>
              <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <FileText className={`w-8 h-8 mx-auto mb-4 ${
            theme === 'dark' ? 'text-orange/80' : 'text-orange'
          }`} />
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-white/80' : 'text-gray-700'
          }`}>
            <span className="font-medium">Otrzymasz też certyfikat ukończenia kursu,</span> który 
            możesz dołączyć do swojego CV lub profilu LinkedIn, zwiększając swoją atrakcyjność 
            na rynku pracy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
