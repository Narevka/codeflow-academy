
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface CourseViewErrorProps {
  error: string | null;
}

const CourseViewError = ({ error }: CourseViewErrorProps) => {
  return (
    <div className="min-h-screen course-theme bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 py-6 px-4">
        <div className="container mx-auto">
          <div className="text-center py-20">
            <p className="text-xl text-red-500">{error || "Course not found"}</p>
            <div className="mt-4">
              <a href="/my-courses" className="text-blue-500 hover:underline">Go back to My Courses</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseViewError;
