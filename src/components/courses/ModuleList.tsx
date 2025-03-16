
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
    <div className="space-y-1">
      <h3 className="font-semibold text-white dark:text-white mb-3">Moduły</h3>
      {modules.map((module) => (
        <div key={module.id} className="relative">
          <Link
            to={`/my-courses/${courseId}/${module.id}`}
            className={`flex items-center p-3 rounded-md ${
              module.id === activeModuleId
                ? "bg-magenta/20 border-l-4 border-magenta"
                : "hover:bg-black/5 dark:hover:bg-white/5 border-l-4 border-transparent"
            }`}
          >
            <div className="mr-3 text-lg">
              {module.completed ? (
                <CheckCircle size={20} className="text-green-500" />
              ) : (
                <Circle size={20} className="text-black/40 dark:text-white/40" />
              )}
            </div>
            
            <div className="flex-1">
              <span className={`text-sm ${module.id === activeModuleId ? "text-black dark:text-white font-medium" : "text-black/80 dark:text-white/80"}`}>
                {module.title}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ModuleList;
