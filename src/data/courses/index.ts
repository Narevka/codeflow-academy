import { Course } from "@/types/course";
import { webDevCourse } from "./webdev/index";

// Export all courses
export const userCourses: Course[] = [
  webDevCourse
];

// Export individual courses for direct access
export { webDevCourse };
