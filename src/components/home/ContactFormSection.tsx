
import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactFormSection = () => {
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
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/public/lovable-uploads/afb57166-3152-43ef-9f3f-a8f4d8351ea6.png')] bg-cover bg-center opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-4"
          >
            <Mail size={24} className="text-magenta mr-2" />
            <span className="text-magenta font-medium">Skontaktuj się z nami</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Masz pytania? Napisz do nas!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg"
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
            className="bg-card-gradient glass-card p-8 rounded-xl border border-white/10"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
                  <Send size={24} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Dziękujemy za wiadomość!</h3>
                <p className="text-white/70">Odpowiemy tak szybko, jak to możliwe.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="topic" className="block text-white font-medium mb-2 flex items-center">
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
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-magenta/50 focus:outline-none focus:ring-2 focus:ring-magenta/20 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2 flex items-center">
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
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-magenta/50 focus:outline-none focus:ring-2 focus:ring-magenta/20 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2 flex items-center">
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
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-magenta/50 focus:outline-none focus:ring-2 focus:ring-magenta/20 text-white resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-medium flex items-center justify-center transition-all ${
                    isSubmitting
                      ? "bg-magenta/50 cursor-not-allowed"
                      : "bg-magenta hover:bg-magenta/90"
                  }`}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold text-white mb-4">Kontakt</h4>
              <p className="text-white/70 mb-2">Karol Sapiołko ToKnowAI</p>
              <p className="text-white/70 mb-2">email: <a href="mailto:info@toknowai.pl" className="text-magenta hover:underline">info@toknowai.pl</a></p>
              <p className="text-white/70">tel: <a href="tel:+48887600255" className="text-magenta hover:underline">+48 887 600 255</a></p>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold text-white mb-4">Centrum pomocy</h4>
              <ul className="space-y-2">
                <li><a href="/regulamin" className="text-white/70 hover:text-magenta transition-colors">Regulamin</a></li>
                <li><a href="/polityka-prywatnosci" className="text-white/70 hover:text-magenta transition-colors">Polityka prywatności i pliki cookies</a></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
