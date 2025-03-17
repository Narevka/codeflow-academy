
import React from "react";
import { motion } from "framer-motion";
import ComparisonSlider from "./ComparisonSlider";

const BeforeAfterSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
          >
            Transformacja
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
          >
            Zobacz różnicę z naszym kursem
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Przekonaj się, jak nasz kurs zmienia sposób budowania aplikacji AI - od skomplikowanego kodowania do prostych interfejsów graficznych.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Od skomplikowanego kodu do prostych interfejsów</h3>
              <p className="text-gray-600 mb-6">
                Tradycyjne podejście do tworzenia aplikacji AI wymaga rozległej wiedzy o programowaniu, frameworkach i API. 
                Nasz kurs eliminuje tę barierę, umożliwiając tworzenie zaawansowanych aplikacji AI poprzez intuicyjne interfejsy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Eliminacja potrzeby pisania kodu</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Interfejs typu "przeciągnij i upuść"</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Szybsza implementacja projektów</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-[16/9] w-full h-auto shadow-2xl rounded-xl overflow-hidden"
            >
              <ComparisonSlider
                beforeContent="// This is code"
                afterImage="/lovable-uploads/d938f15f-d924-4207-97b6-4e33a01db497.png"
                beforeLabel="Tradycyjne kodowanie"
                afterLabel="Z Flowise AI"
              />
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/offer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-200 transition-all transform hover:scale-105"
          >
            Dowiedz się więcej
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
