
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroEnhanced = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Abstract background with gradients */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-br from-purple/20 via-magenta/10 to-black" />
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-magenta/20 via-purple/10 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple/10 rounded-full filter blur-2xl animate-pulse-slow" />
      </div>
      
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
              Dowiedz się więcej
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 relative max-w-4xl mx-auto"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-magenta/50 to-purple-500/50 rounded-2xl blur-sm"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col items-center text-center">
                <div className="bg-magenta/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Szybka nauka</h3>
                <p className="text-white/60 text-sm">Opanuj Flowise AI w kilka godzin zamiast tygodni</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col items-center text-center">
                <div className="bg-magenta/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Praktyczne projekty</h3>
                <p className="text-white/60 text-sm">Zbuduj prawdziwe aplikacje AI podczas kursu</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col items-center text-center">
                <div className="bg-magenta/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Bez kodowania</h3>
                <p className="text-white/60 text-sm">Wszystko poprzez intuicyjny interfejs graficzny</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-white/60 mb-6">Zaufali nam:</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="w-24 h-8 bg-white/10 rounded-md animate-pulse"></div>
            <div className="w-24 h-8 bg-white/10 rounded-md animate-pulse"></div>
            <div className="w-24 h-8 bg-white/10 rounded-md animate-pulse"></div>
            <div className="w-24 h-8 bg-white/10 rounded-md animate-pulse"></div>
            <div className="w-24 h-8 bg-white/10 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEnhanced;
