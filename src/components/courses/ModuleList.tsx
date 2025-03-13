
import { Module } from "@/types/course";
import { CheckCircle, Circle } from "lucide-react";
import { Link } from "react-router-dom";

interface ModuleListProps {
  modules: Module[];
  courseId: string;
  activeModuleId?: string;
  collapsed?: boolean;
}

const ModuleList = ({ modules, courseId, activeModuleId, collapsed = false }: ModuleListProps) => {
  return (
    <div className="space-y-2 relative">
      {modules.map((module, index) => (
        <div key={module.id} className="relative">
          <Link
            to={`/my-courses/${courseId}/${module.id}`}
            className={`flex items-center transition-all duration-1000 ease-in-out ${
              collapsed 
                ? "p-2 justify-center" 
                : "p-3"
            } rounded-md ${
              module.id === activeModuleId
                ? collapsed 
                  ? "bg-magenta/20" 
                  : "bg-magenta/20 border-l-4 border-magenta"
                : collapsed 
                  ? "hover:bg-white/5" 
                  : "hover:bg-white/5 border-l-4 border-transparent"
            }`}
          >
            <div className={`${collapsed ? "" : "mr-3"} text-lg relative z-10 transition-transform duration-1000 ease-in-out ${
              collapsed ? "scale-90 hover:scale-110" : ""
            }`}>
              {module.completed ? (
                <CheckCircle size={collapsed ? 16 : 20} className="text-green-500" />
              ) : (
                <Circle size={collapsed ? 16 : 20} className="text-white/40" />
              )}
            </div>
            
            <div className={`flex-1 transition-opacity duration-1000 ease-in-out ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
              <span className={`text-sm ${module.id === activeModuleId ? "text-white font-medium" : "text-white/80"}`}>
                {module.title}
              </span>
            </div>
          </Link>
          
          {/* Connection line between modules when collapsed */}
          {collapsed && index < modules.length - 1 && (
            <div className={`absolute left-1/2 top-[calc(100%_-_8px)] h-10 w-0.5 ${
              module.completed ? "bg-green-500/70" : "bg-white/20"
            } transform -translate-x-1/2 transition-all duration-1000 ease-in-out animate-pulse-slow`}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ModuleList;
