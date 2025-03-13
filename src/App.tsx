
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import MyCourses from "./pages/MyCourses";
import CourseView from "./pages/CourseView";
import NotFound from "./pages/NotFound";
import Offer from "./pages/Offer";
import Checkout from "./pages/Checkout";

// Enhanced style to prevent screen capture
const screenCaptureProtection = `
  .video-protected {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  @media screen and (min-width: 0px) {
    #screen-capture-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
      display: none;
    }
  }
  
  /* FairPlay DRM specific styles */
  .fairplay-protected-content {
    position: relative;
  }
  
  /* Add cursor noise for screenshot prevention */
  .fairplay-protected-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect width="1" height="1" fill="transparent" /></svg>');
    pointer-events: none;
    z-index: 1;
  }
  
  /* Prevent text selection in protected areas */
  .no-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

const queryClient = new QueryClient();

// FairPlay DRM detection
const detectFairPlaySupport = () => {
  const videoElement = document.createElement('video');
  if (videoElement.webkitSetMediaKeys) {
    try {
      return window.WebKitMediaKeys.isTypeSupported('com.apple.fps.1_0', 'video/mp4');
    } catch (e) {
      return false;
    }
  }
  return false;
};

const App = () => {
  // Check FairPlay support on mount
  useEffect(() => {
    const fairPlaySupported = detectFairPlaySupport();
    console.log('FairPlay DRM support:', fairPlaySupported);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <style>{screenCaptureProtection}</style>
          <div id="screen-capture-overlay"></div>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/my-courses" element={<MyCourses />} />
              <Route path="/my-courses/:courseId" element={<CourseView />} />
              <Route path="/my-courses/:courseId/:moduleId" element={<CourseView />} />
              <Route path="/my-courses/:courseId/:moduleId/:lessonId" element={<CourseView />} />
              <Route path="/offer" element={<Offer />} />
              <Route path="/checkout" element={<Checkout />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
