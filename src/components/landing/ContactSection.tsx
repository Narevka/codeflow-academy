
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ContactSection = () => {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: "",
        email: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className={`py-20 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column: Text content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
                theme === 'dark'
                  ? 'bg-orange/20 text-orange'
                  : 'bg-orange-soft text-orange-dark'
              }`}>
                Skontaktuj się z nami
              </span>
              
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Masz pytania? Napisz do nas
              </h2>
              
              <p className={`text-lg mb-8 ${
                theme === 'dark' ? 'text-white/70' : 'text-gray-600'
              }`}>
                Jesteśmy tu, aby pomóc Ci ruszyć z miejsca dzięki sztucznej inteligencji. 
                Niezależnie od tego, czy masz pytania dotyczące kursu, potrzebujesz pomocy
                czy masz sugestie - chętnie wysłuchamy.
              </p>
              
              <div className={`p-6 rounded-xl border mb-8 ${
                theme === 'dark'
                  ? 'bg-gray-900/50 border-gray-800'
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-start">
                  <Mail className={`h-6 w-6 mt-1 mr-3 ${
                    theme === 'dark' ? 'text-orange' : 'text-orange'
                  }`} />
                  <div>
                    <h3 className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Email bezpośredni
                    </h3>
                    <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                      Wolisz przesłać wiadomość bezpośrednio? Napisz do nas na adres:
                    </p>
                    <a 
                      href="mailto:info@toknowai.pl"
                      className="text-orange font-medium hover:underline"
                    >
                      info@toknowai.pl
                    </a>
                  </div>
                </div>
              </div>
              
              <p className={theme === 'dark' ? 'text-white/60' : 'text-gray-500'}>
                Zazwyczaj odpowiadamy w ciągu 24 godzin w dni robocze.
              </p>
            </motion.div>
            
            {/* Right column: Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`rounded-xl border p-8 ${
                theme === 'dark'
                  ? 'bg-gray-900/50 border-gray-800'
                  : 'bg-white border-gray-200 shadow-sm'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Formularz kontaktowy
              </h3>
              
              {isSuccess ? (
                <div className={`p-4 rounded-lg ${
                  theme === 'dark'
                    ? 'bg-green-900/30 border border-green-800 text-green-200'
                    : 'bg-green-50 border border-green-200 text-green-700'
                }`}>
                  <p className="font-medium">Wiadomość została wysłana!</p>
                  <p className={theme === 'dark' ? 'text-green-300/80' : 'text-green-600'}>
                    Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label 
                        htmlFor="name"
                        className={`block mb-2 text-sm font-medium ${
                          theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                        }`}
                      >
                        Imię i nazwisko
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 rounded-lg border ${
                          theme === 'dark'
                            ? 'bg-black/50 border-gray-700 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-orange/50`}
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="email"
                        className={`block mb-2 text-sm font-medium ${
                          theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                        }`}
                      >
                        Adres email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 rounded-lg border ${
                          theme === 'dark'
                            ? 'bg-black/50 border-gray-700 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-orange/50`}
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="message"
                        className={`block mb-2 text-sm font-medium ${
                          theme === 'dark' ? 'text-white/80' : 'text-gray-700'
                        }`}
                      >
                        Wiadomość
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          theme === 'dark'
                            ? 'bg-black/50 border-gray-700 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-orange/50`}
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-all ${
                        isSubmitting
                          ? 'bg-orange/70 cursor-not-allowed'
                          : 'bg-orange hover:bg-orange-dark text-white'
                      }`}
                    >
                      {isSubmitting ? (
                        <span>Wysyłanie...</span>
                      ) : (
                        <>
                          <span>Wyślij wiadomość</span>
                          <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
