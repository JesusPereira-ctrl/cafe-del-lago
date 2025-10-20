import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import MenuCTA from '@/components/MenuCTA/MenuCTA';
import Gallery from '@/components/Gallery/Gallery';
import Location from '@/components/Location/Location';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export const Index = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <MenuCTA />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
