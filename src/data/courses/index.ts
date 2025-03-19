
import { Course } from "@/types/course";
import { langchainCourse } from "./langchainCourse";

// Export all courses
export const userCourses: Course[] = [langchainCourse];

// Export individual courses for direct access
export { langchainCourse };
