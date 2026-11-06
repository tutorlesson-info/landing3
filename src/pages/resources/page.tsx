import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import ResourceLibrary from './components/ResourceLibrary';
import CareerServices from './components/CareerServices';
import AcademicSupport from './components/AcademicSupport';
import StudentTools from './components/StudentTools';
import FAQ from './components/FAQ';
import ResourcesCTA from './components/ResourcesCTA';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar forceScrolled />
      <main className="pt-20">
        <ResourceLibrary />
        <CareerServices />
        <AcademicSupport />
        <StudentTools />
        <FAQ />
        <ResourcesCTA />
      </main>
      <Footer />
    </div>
  );
}
