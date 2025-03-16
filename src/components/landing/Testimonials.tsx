
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  delay: number;
}

const Testimonial = ({ quote, author, role, company, delay }: TestimonialProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className={`p-6 rounded-lg border h-full flex flex-col ${
        theme === 'dark'
          ? 'bg-gray-900 border-gray-800'
          : 'bg-white border-gray-200 shadow-sm'
      }`}
    >
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Star key={index} size={16} className="fill-orange text-orange mr-1" />
        ))}
      </div>
      
      <Quote className="h-6 w-6 mb-4 text-orange/60" />
      
      <p className={`mb-6 flex-grow ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        "{quote}"
      </p>
      
      <div>
        <p className="font-semibold">{author}</p>
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          {role}{company && `, ${company}`}
        </p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const { theme } = useTheme();
  
  const testimonials = [
    {
      quote: "Ten kurs całkowicie zmienił moje podejście do projektowania aplikacji AI. Nigdy nie sądziłem, że bez umiejętności programowania będę w stanie tworzyć tak zaawansowane rozwiązania.",
      author: "Mateusz K.",
      role: "Product Manager",
      company: "FinTech Solutions"
    },
    {
      quote: "Jako osoba bez doświadczenia technicznego, byłam w stanie stworzyć chatbota dla mojej firmy w zaledwie kilka dni. Materiały są doskonale przygotowane i zrozumiałe.",
      author: "Aleksandra W.",
      role: "Marketing Director",
      company: "Brand Innovators"
    },
    {
      quote: "Mając doświadczenie programistyczne, byłem sceptyczny wobec narzędzi no-code. Ten kurs udowodnił mi, że Flowise to niezwykle potężne narzędzie, które znacząco przyspiesza proces developmentu.",
      author: "Kamil R.",
      role: "Senior Developer",
      company: "Tech Solutions"
    }
  ];

  return (
    <section className={`py-20 ${
      theme === 'dark' ? 'bg-gray-950' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Co mówią <span className="text-orange">uczestnicy</span> naszego kursu
          </h2>
          
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Dołącz do setek zadowolonych absolwentów, którzy już wykorzystują zdobyte 
            umiejętności w praktyce.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
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
                ? 'bg-gray-900 text-gray-300'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <p className="font-medium">98% uczestników ocenia kurs na 4.8/5 lub lepiej</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
