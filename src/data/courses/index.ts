
import { Course } from "@/types/course";
import { flowiseCourse } from "./flowiseCourse";
import { langChainCourse } from "./langChainCourse";

// Export all courses
export const userCourses: Course[] = [flowiseCourse, langChainCourse];

// Export individual courses for direct access
export { flowiseCourse, langChainCourse };
