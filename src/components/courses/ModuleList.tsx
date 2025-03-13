
import { Module } from "@/types/course";
import { CheckCircle, Circle } from "lucide-react";
import { Link } from "react-router-dom";

interface ModuleListProps {
  modules: Module[];
  courseId: string;
  activeModuleId?: string;
}

const ModuleList = ({ modules, courseId, activeModuleId }: ModuleListProps) => {
  return (
    <div className="space-y-2">
      {modules.map((module) => (
        <Link
          key={module.id}
          to={`/my-courses/${courseId}/${module.id}`}
          className={`flex items-center p-3 rounded-md transition-colors ${
            module.id === activeModuleId
              ? "bg-magenta/20 border-l-4 border-magenta"
              : "hover:bg-white/5 border-l-4 border-transparent"
          }`}
        >
          <div className="mr-3 text-lg">
            {module.completed ? (
              <CheckCircle size={20} className="text-green-500" />
            ) : (
              <Circle size={20} className="text-white/40" />
            )}
          </div>
          <div className="flex-1">
            <span className={`text-sm ${module.id === activeModuleId ? "text-white font-medium" : "text-white/80"}`}>
              {module.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ModuleList;
