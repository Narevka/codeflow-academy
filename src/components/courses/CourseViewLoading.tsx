
import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CourseViewLoading = () => {
  return (
    <div className="min-h-screen course-theme bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 py-6 px-4">
        <div className="container mx-auto">
          <div className="text-center py-20">
            <p className="text-xl">Loading course...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseViewLoading;
