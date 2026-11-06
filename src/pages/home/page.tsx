import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedPrograms from './components/FeaturedPrograms';
import CourseCatalog from './components/CourseCatalog';
import Testimonials from './components/Testimonials';
import ResourcesHub from './components/ResourcesHub';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedPrograms />
      <CourseCatalog />
      <Testimonials />
      <ResourcesHub />
      <CTA />
      <Footer />
    </div>
  );
}
