
import { Navigate, useParams } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { userCourses } from "@/data/coursesData";
import CourseCard from "@/components/courses/CourseCard";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const MyCourses = () => {
  const { user, loading } = useAuth();

  // Przekieruj, jeśli użytkownik nie jest zalogowany
  if (!loading && !user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Header />
      
      <main className="flex-1 py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-600 hover:text-magenta">
                  <Home size={16} className="mr-1" />
                  Start
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/my-courses" className="text-gray-600 hover:text-magenta">Moje kursy</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Moje kursy
            </h1>
            <p className="text-gray-600 text-lg">
              Tutaj znajdziesz wszystkie swoje zakupione kursy
            </p>
          </div>

          <div className="space-y-6">
            {userCourses.length > 0 ? (
              userCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <div className="text-center text-gray-500 py-10 bg-white rounded-lg shadow-sm border border-gray-100">
                <p>Nie masz jeszcze żadnych kursów.</p>
                <p>Sprawdź naszą ofertę i zacznij naukę już dziś!</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyCourses;

