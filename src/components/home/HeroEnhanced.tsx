
import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroEnhanced = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/public/lovable-uploads/eece7ee2-1743-42a8-892a-a52a7667fbf3.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block bg-magenta/20 text-magenta px-4 py-2 rounded-full text-sm font-medium mb-4">
              Zostań ekspertem AI bez pisania kodu!
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-magenta"
          >
            Twórz potężne aplikacje oparte na Flowise AI - szybko i intuicyjnie
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/80 mb-12 max-w-3xl mx-auto"
          >
            Twój pierwszy krok do tworzenia aplikacji AI bez kodowania! Naucz się podstaw LangChain, 
            odkryj potężne możliwości Flowise AI i twórz innowacyjne aplikacje bez kodowania.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/offer" 
              className="w-full sm:w-auto bg-magenta hover:bg-magenta/90 text-white font-medium px-8 py-4 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Rozpocznij teraz
            </Link>
            <Link 
              to="/demo-lesson" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Play size={18} fill="white" /> 
              Zobacz przykładową lekcję
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-magenta/50 to-purple-500/50 rounded-2xl blur-sm"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm">
            <img 
              src="/public/lovable-uploads/38f3e653-b2e9-48bf-8257-d3567c2369a3.png" 
              alt="Flowise AI Interface" 
              className="w-full rounded-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-magenta rounded-full flex items-center justify-center transform transition-transform hover:scale-110">
                <Play size={30} fill="white" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-white/60 mb-6">Zaufali nam:</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="https://via.placeholder.com/120x40" alt="Company Logo" className="opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://via.placeholder.com/120x40" alt="Company Logo" className="opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://via.placeholder.com/120x40" alt="Company Logo" className="opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://via.placeholder.com/120x40" alt="Company Logo" className="opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://via.placeholder.com/120x40" alt="Company Logo" className="opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEnhanced;
