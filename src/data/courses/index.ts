
import { Course } from "@/types/course";
import { flowiseCourse } from "./flowiseCourse";

// Export all courses
export const userCourses: Course[] = [flowiseCourse];

// Export individual courses for direct access
export { flowiseCourse };
