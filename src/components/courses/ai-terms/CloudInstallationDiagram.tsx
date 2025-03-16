
import React from "react";
import { Clock, Database, DollarSign, Lock, ServerCrash, Scale, Cloud, Laptop, Shield } from "lucide-react";

const CloudInstallationDiagram = () => {
  return (
    <div className="my-12 px-6 py-10 rounded-xl border border-white/20 bg-gradient-to-br from-[#1E2130]/80 to-[#2A2E3F]/90 max-w-4xl mx-auto shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-white/30">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white font-bold py-2 px-6 rounded-full shadow-lg">
          <Cloud className="inline-block mr-2 h-5 w-5" />
          <span>Instalacja w chmurze</span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-center mb-12 text-white/90 mt-4">Plusy i minusy instalacji w chmurze</h3>
      
      <div className="relative flex flex-col md:flex-row justify-center items-stretch gap-10 z-10">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/5 to-[#E5DDD6]/5 rounded-lg -z-10"></div>
        
        {/* Connection line between boxes */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#9b87f5]/50 to-[#E5DDD6]/50 transform -translate-y-1/2 -z-5"></div>
        
        {/* Central boxes */}
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-16 relative z-10">
          {/* PLUSY box */}
          <div className="flex flex-col items-center flex-1">
            <div className="group h-16 w-36 flex items-center justify-center bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white font-bold rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-[#9b87f5]/20 hover:shadow-xl">
              <span className="group-hover:scale-110 transition-transform duration-300">PLUSY</span>
            </div>
            
            {/* PLUSY items */}
            <div className="mt-10 space-y-5">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-[#1d1d3a]/70 to-[#2a2a4a]/70 py-3 px-5 rounded-full backdrop-blur-sm border border-[#9b87f5]/30 shadow-lg shadow-[#9b87f5]/5 transform transition-all duration-300 hover:translate-x-1 hover:bg-[#9b87f5]/10">
                <div className="bg-[#9b87f5]/20 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-[#9b87f5]" />
                </div>
                <span className="text-sm font-medium text-white">Dostępność 24/7</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-gradient-to-r from-[#1d1d3a]/70 to-[#2a2a4a]/70 py-3 px-5 rounded-full backdrop-blur-sm border border-[#9b87f5]/30 shadow-lg shadow-[#9b87f5]/5 transform transition-all duration-300 hover:translate-x-1 hover:bg-[#9b87f5]/10">
                <div className="bg-[#9b87f5]/20 p-2 rounded-full">
                  <Scale className="h-5 w-5 text-[#9b87f5]" />
                </div>
                <span className="text-sm font-medium text-white">Skalowalność</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-gradient-to-r from-[#1d1d3a]/70 to-[#2a2a4a]/70 py-3 px-5 rounded-full backdrop-blur-sm border border-[#9b87f5]/30 shadow-lg shadow-[#9b87f5]/5 transform transition-all duration-300 hover:translate-x-1 hover:bg-[#9b87f5]/10">
                <div className="bg-[#9b87f5]/20 p-2 rounded-full">
                  <ServerCrash className="h-5 w-5 text-[#9b87f5]" />
                </div>
                <span className="text-sm font-medium text-white">Brak konieczności zarządzania infrastrukturą</span>
              </div>
            </div>
          </div>
          
          {/* Central divider with laptop/cloud icon */}
          <div className="hidden md:flex flex-col items-center justify-center">
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
                <div className="bg-gradient-to-b from-[#9b87f5]/30 to-transparent w-1 h-16"></div>
              </div>
              <div className="bg-gradient-to-r from-[#1d1d3a] to-[#2a2a4a] p-5 rounded-full border border-white/20 shadow-xl">
                <div className="relative">
                  <Laptop className="h-10 w-10 text-white/70" />
                  <div className="absolute -top-1 -right-1">
                    <Cloud className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                <div className="bg-gradient-to-t from-[#E5DDD6]/30 to-transparent w-1 h-16"></div>
              </div>
            </div>
          </div>
          
          {/* MINUSY box */}
          <div className="flex flex-col items-center flex-1">
            <div className="group h-16 w-36 flex items-center justify-center bg-gradient-to-r from-[#E5DDD6] to-[#D6C6B9] text-gray-800 font-bold rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-[#E5DDD6]/20 hover:shadow-xl">
              <span className="group-hover:scale-110 transition-transform duration-300">MINUSY</span>
            </div>
            
            {/* MINUSY items */}
            <div className="mt-10 space-y-5">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-[#1d1d3a]/70 to-[#2a2a4a]/70 py-3 px-5 rounded-full backdrop-blur-sm border border-[#E5DDD6]/30 shadow-lg shadow-[#E5DDD6]/5 transform transition-all duration-300 hover:translate-x-1 hover:bg-[#E5DDD6]/10">
                <div className="bg-[#E5DDD6]/20 p-2 rounded-full">
                  <Cloud className="h-5 w-5 text-[#E5DDD6]" />
                </div>
                <span className="text-sm font-medium text-white">Zależność od połączenia internetowego</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-gradient-to-r from-[#1d1d3a]/70 to-[#2a2a4a]/70 py-3 px-5 rounded-full backdrop-blur-sm border border-[#E5DDD6]/30 shadow-lg shadow-[#E5DDD6]/5 transform transition-all duration-300 hover:translate-x-1 hover:bg-[#E5DDD6]/10">
                <div className="bg-[#E5DDD6]/20 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-[#E5DDD6]" />
                </div>
                <span className="text-sm font-medium text-white">Prywatność i bezpieczeństwo</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-gradient-to-r from-[#1d1d3a]/70 to-[#2a2a4a]/70 py-3 px-5 rounded-full backdrop-blur-sm border border-[#E5DDD6]/30 shadow-lg shadow-[#E5DDD6]/5 transform transition-all duration-300 hover:translate-x-1 hover:bg-[#E5DDD6]/10">
                <div className="bg-[#E5DDD6]/20 p-2 rounded-full">
                  <DollarSign className="h-5 w-5 text-[#E5DDD6]" />
                </div>
                <span className="text-sm font-medium text-white">Koszty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudInstallationDiagram;
