
import React from "react";
import { Clock, Database, DollarSign, Lock, ServerCrash, Scale } from "lucide-react";

const CloudInstallationDiagram = () => {
  return (
    <div className="my-10 px-4 py-8 rounded-xl border border-white/10 bg-gradient-to-br from-[#1E2130] to-[#2A2E3F] max-w-4xl mx-auto">
      <h3 className="text-xl font-bold text-center mb-10">Plus i minusy instalacji w chmurze</h3>
      
      <div className="relative flex justify-center items-center">
        {/* Central hexagons */}
        <div className="flex space-x-16 relative z-10">
          {/* PLUSY hexagon */}
          <div className="flex flex-col items-center">
            <div className="h-16 w-28 flex items-center justify-center bg-[#C9A883] text-black font-bold rounded-lg">
              <span>PLUSY</span>
            </div>
          </div>
          
          {/* MINUSY hexagon */}
          <div className="flex flex-col items-center">
            <div className="h-16 w-28 flex items-center justify-center bg-[#E5DDD6] text-black font-bold rounded-lg">
              <span>MINUSY</span>
            </div>
          </div>
        </div>
        
        {/* Lines connecting pros and cons to their items */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          {/* Lines for PLUSY */}
          <line x1="28%" y1="50%" x2="15%" y2="25%" stroke="#555" strokeWidth="1" />
          <line x1="28%" y1="50%" x2="15%" y2="50%" stroke="#555" strokeWidth="1" />
          <line x1="28%" y1="50%" x2="15%" y2="75%" stroke="#555" strokeWidth="1" />
          
          {/* Lines for MINUSY */}
          <line x1="72%" y1="50%" x2="85%" y2="25%" stroke="#555" strokeWidth="1" />
          <line x1="72%" y1="50%" x2="85%" y2="50%" stroke="#555" strokeWidth="1" />
          <line x1="72%" y1="50%" x2="85%" y2="75%" stroke="#555" strokeWidth="1" />
        </svg>
        
        {/* PLUSY items */}
        <div className="absolute left-0 top-0 w-2/5 h-full flex flex-col justify-between py-6">
          {/* Accessibility 24/7 */}
          <div className="flex items-center space-x-2 bg-gray-200/20 py-2 px-4 rounded-full backdrop-blur-sm border border-white/10 max-w-[200px]">
            <Clock className="h-4 w-4" />
            <span className="text-xs">Dostępność 24/7</span>
          </div>
          
          {/* Scalability */}
          <div className="flex items-center space-x-2 bg-gray-200/20 py-2 px-4 rounded-full backdrop-blur-sm border border-white/10 max-w-[200px]">
            <Scale className="h-4 w-4" />
            <span className="text-xs">Skalowalność</span>
          </div>
          
          {/* No infrastructure management needed */}
          <div className="flex items-center space-x-2 bg-gray-200/20 py-2 px-4 rounded-full backdrop-blur-sm border border-white/10 max-w-[250px]">
            <ServerCrash className="h-4 w-4" />
            <span className="text-xs">Brak konieczności zarządzania infrastrukturą</span>
          </div>
        </div>
        
        {/* MINUSY items */}
        <div className="absolute right-0 top-0 w-2/5 h-full flex flex-col justify-between py-6">
          {/* Internet connection dependence */}
          <div className="flex items-center space-x-2 bg-gray-200/20 py-2 px-4 rounded-full backdrop-blur-sm border border-white/10 max-w-[250px] ml-auto">
            <Clock className="h-4 w-4" />
            <span className="text-xs">Zależność od połączenia internetowego</span>
          </div>
          
          {/* Privacy and security */}
          <div className="flex items-center space-x-2 bg-gray-200/20 py-2 px-4 rounded-full backdrop-blur-sm border border-white/10 max-w-[250px] ml-auto">
            <Lock className="h-4 w-4" />
            <span className="text-xs">Prywatność i bezpieczeństwo</span>
          </div>
          
          {/* Costs */}
          <div className="flex items-center space-x-2 bg-gray-200/20 py-2 px-4 rounded-full backdrop-blur-sm border border-white/10 max-w-[200px] ml-auto">
            <DollarSign className="h-4 w-4" />
            <span className="text-xs">Koszty</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudInstallationDiagram;
