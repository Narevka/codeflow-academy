
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  delay: number;
}

const Testimonial = ({ quote, author, role, delay }: TestimonialProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className={`p-6 rounded-xl border h-full flex flex-col ${
        theme === 'dark'
          ? 'bg-gray-900/50 border-gray-800'
          : 'bg-white border-gray-200 shadow-sm'
      }`}
    >
      <Quote className={`h-8 w-8 mb-3 ${
        theme === 'dark' ? 'text-orange/80' : 'text-orange'
      }`} />
      <p className={`mb-6 flex-grow text-lg italic ${
        theme === 'dark' ? 'text-white/80' : 'text-gray-600'
      }`}>
        "{quote}"
      </p>
      <div>
        <p className={`font-semibold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>{author}</p>
        <p className={theme === 'dark' ? 'text-white/60' : 'text-gray-500'}>
          {role}
        </p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const { theme } = useTheme();
  
  const testimonials = [
    {
      quote: "Ten kurs całkowicie zmienił moje podejście do AI. Teraz tworzę aplikacje, o których wcześniej mogłem tylko marzyć - wszystko bez pisania ani jednej linijki kodu!",
      author: "Mateusz K.",
      role: "Przedsiębiorca"
    },
    {
      quote: "Jestem humanistką bez doświadczenia w programowaniu, ale dzięki temu kursowi stworzyłam chatbota dla mojej firmy w jeden weekend. Rewelacyjne materiały!",
      author: "Aleksandra W.",
      role: "Specjalistka marketingu"
    },
    {
      quote: "Jako programista byłem sceptyczny, czy wizualne narzędzia mogą zastąpić kod. Ten kurs udowodnił mi, że Flowise to potężne narzędzie, które przyspiesza proces developmentu kilkukrotnie.",
      author: "Kamil R.",
      role: "Senior Developer"
    }
  ];

  return (
    <section className={`py-20 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
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
                : 'bg-orange-soft text-orange-dark'
            }`}
          >
            Opinie uczestników
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
            Co mówią nasi kursanci?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}
          >
            Dołącz do setek zadowolonych uczestników, którzy zmienili
            swoją karierę dzięki naszemu kursowi.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              delay={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`inline-block py-3 px-6 rounded-lg ${
              theme === 'dark'
                ? 'bg-orange/10 text-orange'
                : 'bg-orange-soft text-orange-dark'
            }`}
          >
            <p className="font-medium">Ponad 98% uczestników poleciłoby ten kurs</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
