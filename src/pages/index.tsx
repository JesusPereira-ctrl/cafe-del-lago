import React, { Suspense } from 'react';

// Lazy loading de componentes
const Navbar = React.lazy(() => import('@/components/Navbar/Navbar'));
const Hero = React.lazy(() => import('@/components/Hero/Hero'));
const About = React.lazy(() => import('@/components/About/About'));
const Services = React.lazy(() => import('@/components/Services/Services'));
const MenuCTA = React.lazy(() => import('@/components/MenuCTA/MenuCTA'));
const Gallery = React.lazy(() => import('@/components/Gallery/Gallery'));
const Location = React.lazy(() => import('@/components/Location/Location'));
const Contact = React.lazy(() => import('@/components/Contact/Contact'));
const Footer = React.lazy(() => import('@/components/Footer/Footer'));

// Skeletons / placeholders
const NavbarSkeleton = () => (
  <div className='h-16 bg-gray-200 animate-pulse'></div>
);
const HeroSkeleton = () => (
  <div className='h-screen bg-gray-300 animate-pulse'></div>
);
const AboutSkeleton = () => (
  <div className='h-64 bg-gray-200 animate-pulse my-8'></div>
);
const ServicesSkeleton = () => (
  <div className='h-64 bg-gray-200 animate-pulse my-8'></div>
);
const MenuCTASkeleton = () => (
  <div className='h-32 bg-gray-200 animate-pulse my-8'></div>
);
const GallerySkeleton = () => (
  <div className='h-96 bg-gray-300 animate-pulse my-8'></div>
);
const LocationSkeleton = () => (
  <div className='h-64 bg-gray-200 animate-pulse my-8'></div>
);
const ContactSkeleton = () => (
  <div className='h-64 bg-gray-200 animate-pulse my-8'></div>
);
const FooterSkeleton = () => (
  <div className='h-24 bg-gray-200 animate-pulse mt-8'></div>
);

export const Index = () => {
  return (
    <div className='min-h-screen'>
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar />
      </Suspense>

      <main>
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<AboutSkeleton />}>
          <About />
        </Suspense>

        <Suspense fallback={<ServicesSkeleton />}>
          <Services />
        </Suspense>

        <Suspense fallback={<MenuCTASkeleton />}>
          <MenuCTA />
        </Suspense>

        <Suspense fallback={<GallerySkeleton />}>
          <Gallery />
        </Suspense>

        <Suspense fallback={<LocationSkeleton />}>
          <Location />
        </Suspense>

        <Suspense fallback={<ContactSkeleton />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
