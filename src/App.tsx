import React, { lazy, Suspense, useEffect } from 'react';
import { RouterProvider, useLocation } from './router';
import { StationSignNav } from './components/StationSignNav';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const RoutesPage = lazy(() => import('./pages/Routes').then(module => ({ default: module.Routes })));
const StationTowns = lazy(() => import('./pages/StationTowns').then(module => ({ default: module.StationTowns })));
const Itineraries = lazy(() => import('./pages/Itineraries').then(module => ({ default: module.Itineraries })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const Terms = lazy(() => import('./pages/Terms').then(module => ({ default: module.Terms })));

const routeElements: Record<string, React.ReactNode> = {
  '/': <Home />,
  '/about': <About />,
  '/routes': <RoutesPage />,
  '/station-towns': <StationTowns />,
  '/itineraries': <Itineraries />,
  '/contact': <Contact />,
  '/privacy-policy': <PrivacyPolicy />,
  '/terms': <Terms />,
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes: React.FC = () => {
  const { pathname } = useLocation();
  return routeElements[pathname] ?? <Home />;
};

const App: React.FC = () => {
  return (
    <RouterProvider>
      <ScrollToTop />
      <StationSignNav />
      <Suspense fallback={<div className="page-wrapper" aria-busy="true" />}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </RouterProvider>
  );
};

export default App;
