
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    topic: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          topic: "",
          email: "",
          message: ""
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section className={`py-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0">
        {theme === 'dark' && (
          <div className="absolute inset-0 bg-[url('/lovable-uploads/afb57166-3152-43ef-9f3f-a8f4d8351ea6.png')] bg-cover bg-center opacity-5" />
        )}
        
        <div className={`absolute top-0 left-0 w-full h-full ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-black to-transparent'
            : 'bg-gradient-to-b from-gray-50 to-transparent'
        }`} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-4"
          >
            <Mail size={24} className="text-magenta mr-2" />
            <span className={theme === 'dark' ? 'text-magenta font-medium' : 'text-magenta-600 font-medium'}>
              Skontaktuj się z nami
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Masz pytania? Napisz do nas!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={theme === 'dark' ? 'text-white/70 text-lg' : 'text-gray-600 text-lg'}
          >
            Wypełnij formularz poniżej, a my skontaktujemy się z Tobą najszybciej jak to możliwe.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`p-8 rounded-xl border ${
              theme === 'dark'
                ? 'bg-black/50 backdrop-blur-sm border-gray-800'
                : 'bg-white shadow-md border-gray-200'
            }`}
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                  theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
                }`}>
                  <Send size={24} className="text-green-400" />
                </div>
                <h3 className={`text-2xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Dziękujemy za wiadomość!</h3>
                <p className={theme === 'dark' ? 'text-white/70' : 'text-gray-600'}>
                  Odpowiemy tak szybko, jak to możliwe.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="topic" className={`block font-medium mb-2 flex items-center ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    <MessageSquare size={16} className="text-magenta mr-2" /> Temat
                  </label>
                  <input
                    type="text"
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    placeholder="Podaj temat"
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                      theme === 'dark'
                        ? 'bg-white/5 border border-white/10 focus:border-magenta/50 focus:ring-magenta/20 text-white placeholder:text-white/40'
                        : 'bg-gray-50 border border-gray-200 focus:border-magenta/50 focus:ring-magenta/20 text-gray-900 placeholder:text-gray-400'
                    }`}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={`block font-medium mb-2 flex items-center ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    <Mail size={16} className="text-magenta mr-2" /> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Twój adres email"
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                      theme === 'dark'
                        ? 'bg-white/5 border border-white/10 focus:border-magenta/50 focus:ring-magenta/20 text-white placeholder:text-white/40'
                        : 'bg-gray-50 border border-gray-200 focus:border-magenta/50 focus:ring-magenta/20 text-gray-900 placeholder:text-gray-400'
                    }`}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className={`block font-medium mb-2 flex items-center ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    <MessageSquare size={16} className="text-magenta mr-2" /> Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Wpisz wiadomość"
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 resize-none ${
                      theme === 'dark'
                        ? 'bg-white/5 border border-white/10 focus:border-magenta/50 focus:ring-magenta/20 text-white placeholder:text-white/40'
                        : 'bg-gray-50 border border-gray-200 focus:border-magenta/50 focus:ring-magenta/20 text-gray-900 placeholder:text-gray-400'
                    }`}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-medium flex items-center justify-center transition-all ${
                    isSubmitting
                      ? 'bg-magenta/50 cursor-not-allowed'
                      : 'bg-magenta hover:bg-magenta/90'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" /> Wyślij
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
