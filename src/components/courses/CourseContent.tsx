
import { Link } from "react-router-dom";
import { Course, Lesson, Module } from "@/types/course";
import LessonContent from "./LessonContent";
import CourseNavigation from "./CourseNavigation";
import { motion } from "framer-motion";
import { useSidebar } from "@/components/ui/sidebar/sidebar-context";

type NavigationItem = {
  moduleId: string;
  lessonId: string;
  title: string;
} | null;

interface CourseContentProps {
  course: Course;
  activeModule: Module | null;
  activeLesson: Lesson | null;
  prev: NavigationItem;
  next: NavigationItem;
  sidebarOpen: boolean; // Add this prop to directly control content width based on sidebar state
}

const CourseContent = ({ course, activeModule, activeLesson, prev, next, sidebarOpen }: CourseContentProps) => {
  const { animate } = useSidebar(); // We'll still use animate from the context
  
  // Define animation constants for better visual effect
  const contentStyle = {
    expanded: {
      width: "calc(100% + 220px)",
      marginLeft: "0",
      paddingLeft: "24px",
    },
    normal: {
      width: "100%",
      marginLeft: "0",
      paddingLeft: "24px",
    }
  };
  
  // If no lesson is active, show a message to select a lesson
  if (!activeLesson) {
    return (
      <motion.div 
        className="bg-white shadow-sm border border-gray-200 rounded-lg min-h-[600px] h-full flex flex-col overflow-hidden"
        animate={animate ? (sidebarOpen ? contentStyle.normal : contentStyle.expanded) : contentStyle.normal}
        transition={{ 
          duration: 0.25, 
          ease: [0.25, 0.1, 0.25, 1] 
        }}
        style={{ willChange: "width" }}
      >
        <div className="text-center py-20 flex-1">
          <p className="text-xl text-gray-700">Wybierz lekcję z menu, aby rozpocząć naukę.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-white shadow-sm border border-gray-200 rounded-lg min-h-[600px] h-full flex flex-col overflow-hidden"
      animate={animate ? (sidebarOpen ? contentStyle.normal : contentStyle.expanded) : contentStyle.normal}
      transition={{ 
        duration: 0.25, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      style={{ willChange: "width" }}
    >
      <div className="flex-1 p-6">
        <LessonContent lesson={activeLesson} />
      </div>
      <div className="p-6 pt-0">
        <CourseNavigation prev={prev} next={next} courseId={course.id} />
      </div>
    </motion.div>
  );
};

export default CourseContent;
