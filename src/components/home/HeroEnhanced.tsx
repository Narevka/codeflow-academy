
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

const HeroEnhanced = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`relative min-h-screen flex items-center py-20 overflow-hidden ${
      theme === 'dark' 
        ? 'bg-black' 
        : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      {/* Abstract background with gradients */}
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-black'
          : 'bg-white'
      }`}>
        <div className={`absolute top-0 left-0 right-0 h-full ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-purple/20 via-magenta/10 to-black'
            : 'bg-gradient-to-br from-magenta/5 via-purple/5 to-transparent'
        }`} />
        <div className={`absolute bottom-0 right-0 w-2/3 h-2/3 rounded-full filter blur-3xl ${
          theme === 'dark'
            ? 'bg-gradient-to-tl from-magenta/20 via-purple/10 to-transparent'
            : 'bg-gradient-to-tl from-magenta/10 via-purple/5 to-transparent'
        }`} />
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full filter blur-2xl animate-pulse-slow ${
          theme === 'dark'
            ? 'bg-purple/10'
            : 'bg-purple/5'
        }`} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              theme === 'dark'
                ? 'bg-magenta/20 text-magenta'
                : 'bg-magenta/10 text-magenta'
            }`}>
              Zostań ekspertem AI bez pisania kodu!
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 ${
              theme === 'dark'
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-magenta'
                : 'bg-clip-text text-transparent bg-gradient-to-r from-black via-purple-800 to-magenta'
            }`}
          >
            Twórz potężne aplikacje oparte na Flowise AI - szybko i intuicyjnie
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-xl mb-12 max-w-3xl mx-auto ${
              theme === 'dark' 
                ? 'text-white/80' 
                : 'text-gray-700'
            }`}
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
              className={`w-full sm:w-auto font-medium px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 border ${
                theme === 'dark'
                  ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-200'
              }`}
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
          <div className={`absolute -inset-0.5 rounded-2xl blur-sm ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-magenta/50 to-purple-500/50'
              : 'bg-gradient-to-r from-magenta/30 to-purple-500/30'
          }`}></div>
          <div className={`relative rounded-2xl overflow-hidden p-6 border ${
            theme === 'dark'
              ? 'border-white/10 bg-black/50 backdrop-blur-sm'
              : 'border-gray-200 bg-white shadow-lg'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: <svg className="w-8 h-8 text-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>,
                  title: "Szybka nauka",
                  description: "Opanuj Flowise AI w kilka godzin zamiast tygodni"
                },
                {
                  icon: <svg className="w-8 h-8 text-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>,
                  title: "Praktyczne projekty",
                  description: "Zbuduj prawdziwe aplikacje AI podczas kursu"
                },
                {
                  icon: <svg className="w-8 h-8 text-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>,
                  title: "Bez kodowania",
                  description: "Wszystko poprzez intuicyjny interfejs graficzny"
                }
              ].map((feature, index) => (
                <div key={index} className={`p-4 rounded-xl border flex flex-col items-center text-center ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/5'
                    : 'bg-gray-50 border-gray-100'
                }`}>
                  <div className={`p-3 rounded-full w-14 h-14 flex items-center justify-center mb-3 ${
                    theme === 'dark'
                      ? 'bg-magenta/20'
                      : 'bg-magenta/10'
                  }`}>
                    {feature.icon}
                  </div>
                  <h3 className={`font-medium mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{feature.title}</h3>
                  <p className={
                    theme === 'dark' ? 'text-white/60 text-sm' : 'text-gray-600 text-sm'
                  }>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <p className={theme === 'dark' ? 'text-white/60 mb-6' : 'text-gray-500 mb-6'}>
            Zaufali nam:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`w-24 h-8 rounded-md animate-pulse ${
                theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'
              }`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEnhanced;
