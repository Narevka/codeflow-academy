
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
    <div className="space-y-2">
      {modules.map((module, index) => (
        <Link
          key={module.id}
          to={`/my-courses/${courseId}/${module.id}`}
          className={`flex items-center transition-colors ${
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
          <div className={`${collapsed ? "" : "mr-3"} text-lg`}>
            {module.completed ? (
              <CheckCircle size={collapsed ? 16 : 20} className="text-green-500" />
            ) : (
              <Circle size={collapsed ? 16 : 20} className="text-white/40" />
            )}
          </div>
          
          {!collapsed && (
            <div className="flex-1">
              <span className={`text-sm ${module.id === activeModuleId ? "text-white font-medium" : "text-white/80"}`}>
                {module.title}
              </span>
            </div>
          )}
          
          {collapsed && index < modules.length - 1 && (
            <div className="w-0.5 h-4 bg-white/20 absolute -bottom-4"></div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default ModuleList;
