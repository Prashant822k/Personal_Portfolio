import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy-load sections for code splitting
const About = lazy(() => import('./components/sections/About'));
const Works = lazy(() => import('./components/sections/Works'));
const Testimonial = lazy(() => import('./components/sections/Testimonial'));
const CP = lazy(() => import('./components/sections/CP'));
const BeyondCode = lazy(() => import('./components/sections/BeyondCode'));
const Certifications = lazy(() => import('./components/sections/Certifications'));
const Contact = lazy(() => import('./components/sections/Contact'));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Works />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonial />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CP />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <BeyondCode />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
