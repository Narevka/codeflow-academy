
import React from "react";
import { Clock, Database, DollarSign, Lock, ServerCrash, Scale } from "lucide-react";

const CloudInstallationDiagram = () => {
  return (
    <div className="my-10 px-6 py-10 rounded-xl border border-white/10 bg-gradient-to-br from-[#1E2130] to-[#2A2E3F] max-w-4xl mx-auto shadow-lg">
      <h3 className="text-xl font-bold text-center mb-10 text-white">Plus i minusy instalacji w chmurze</h3>
      
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 min-h-[250px]">
        {/* Central boxes */}
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-16 relative z-10">
          {/* PLUSY box */}
          <div className="flex flex-col items-center">
            <div className="h-16 w-28 flex items-center justify-center bg-[#9b87f5] text-white font-bold rounded-lg shadow-md transform transition-transform hover:scale-105">
              <span>PLUSY</span>
            </div>
            
            {/* PLUSY items */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 bg-[#1d1d3a]/70 py-3 px-5 rounded-full backdrop-blur-sm border border-white/10 shadow-sm transform transition-all hover:translate-x-1">
                <Clock className="h-5 w-5 text-[#9b87f5]" />
                <span className="text-sm font-medium">Dostępność 24/7</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-[#1d1d3a]/70 py-3 px-5 rounded-full backdrop-blur-sm border border-white/10 shadow-sm transform transition-all hover:translate-x-1">
                <Scale className="h-5 w-5 text-[#9b87f5]" />
                <span className="text-sm font-medium">Skalowalność</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-[#1d1d3a]/70 py-3 px-5 rounded-full backdrop-blur-sm border border-white/10 shadow-sm transform transition-all hover:translate-x-1">
                <ServerCrash className="h-5 w-5 text-[#9b87f5]" />
                <span className="text-sm font-medium">Brak konieczności zarządzania infrastrukturą</span>
              </div>
            </div>
          </div>
          
          {/* MINUSY box */}
          <div className="flex flex-col items-center">
            <div className="h-16 w-28 flex items-center justify-center bg-[#E5DDD6] text-gray-800 font-bold rounded-lg shadow-md transform transition-transform hover:scale-105">
              <span>MINUSY</span>
            </div>
            
            {/* MINUSY items */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 bg-[#1d1d3a]/70 py-3 px-5 rounded-full backdrop-blur-sm border border-white/10 shadow-sm transform transition-all hover:translate-x-1">
                <Clock className="h-5 w-5 text-[#E5DDD6]" />
                <span className="text-sm font-medium">Zależność od połączenia internetowego</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-[#1d1d3a]/70 py-3 px-5 rounded-full backdrop-blur-sm border border-white/10 shadow-sm transform transition-all hover:translate-x-1">
                <Lock className="h-5 w-5 text-[#E5DDD6]" />
                <span className="text-sm font-medium">Prywatność i bezpieczeństwo</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-[#1d1d3a]/70 py-3 px-5 rounded-full backdrop-blur-sm border border-white/10 shadow-sm transform transition-all hover:translate-x-1">
                <DollarSign className="h-5 w-5 text-[#E5DDD6]" />
                <span className="text-sm font-medium">Koszty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudInstallationDiagram;
