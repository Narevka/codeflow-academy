import { Course } from "@/types/course";
import { webDevCourse } from "./webdev/index";
import { newCourse } from "./new-course/index";

// Export all courses
export const userCourses: Course[] = [
  webDevCourse,
  newCourse
];

// Export individual courses for direct access
export { webDevCourse, newCourse };
