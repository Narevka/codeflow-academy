
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Course } from "@/types/course";
import { Progress } from "@/components/ui/progress";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface CourseHeaderProps {
  course: Course;
  moduleId?: string;
  activeModule?: { title?: string; id?: string };
}

const CourseHeader = ({ course, moduleId, activeModule }: CourseHeaderProps) => {
  return (
    <>
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Start</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/my-courses">Moje kursy</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/my-courses/${course.id}`}>{course.title}</BreadcrumbLink>
            </BreadcrumbItem>
            {moduleId && activeModule && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/my-courses/${course.id}/${moduleId}`}>
                    {activeModule.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div className="mb-6">
        <Link to="/my-courses" className="flex items-center text-white/80 hover:text-white">
          <ArrowLeft size={16} className="mr-2" />
          <span>Powrót do Twoich kursów</span>
        </Link>
      </div>
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold gradient-text">{course.title}</h1>
        <div className="flex items-center mt-3">
          <div className="w-full mr-4">
            <Progress value={course.progress} className="h-2 bg-white/10" />
          </div>
          <div className="text-sm whitespace-nowrap">{course.progress}% ukończono</div>
        </div>
      </div>
    </>
  );
};

export default CourseHeader;
