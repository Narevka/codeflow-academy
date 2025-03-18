
import { Navigate } from "react-router-dom";
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
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <Header />
      
      <main className="flex-1 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-600 hover:text-magenta flex items-center">
                  <Home size={16} className="mr-1" />
                  <span>Start</span>
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
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tutaj znajdziesz wszystkie swoje zakupione kursy
            </p>
          </div>

          <div className="grid gap-6">
            {userCourses.length > 0 ? (
              userCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <div className="text-center p-10 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/a45b3d74-6d23-4db5-91bf-d7a93f35d996.png" 
                    alt="Brak kursów" 
                    className="w-32 h-32 mx-auto opacity-60"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Nie masz jeszcze żadnych kursów</h3>
                <p className="text-gray-500 mb-6">Sprawdź naszą ofertę i zacznij naukę już dziś!</p>
                <a 
                  href="/offer" 
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Przeglądaj kursy
                </a>
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
