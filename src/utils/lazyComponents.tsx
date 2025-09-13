import { lazy } from 'react';

// Lazy load components for better performance
export const LazyHome = lazy(() => import('../pages/home/home'));
export const LazyAbout = lazy(() => import('../pages/about/about'));
export const LazyServices = lazy(() => import('../pages/services/services'));
export const LazyService = lazy(() => import('../pages/Service'));
export const LazyTestimonialsPage = lazy(() => import('../pages/Testimonials/testimonials'));
export const LazyContact = lazy(() => import('../pages/contact/Contact'));
export const LazyPortfolio = lazy(() => import('../pages/portfolio/portfolio'));

// Loading component for Suspense fallback
export const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

// Enhanced loading component with branding
export const BrandedPageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white">
    <div className="text-center space-y-6 p-8">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-blue-200 rounded-full mx-auto animate-pulse"></div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">SkillLogic</h3>
        <p className="text-sm text-gray-600">Loading your experience...</p>
      </div>
    </div>
  </div>
);
