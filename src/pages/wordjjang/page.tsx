import WordjjangNav from './components/WordjjangNav';
import HeroSection from './components/HeroSection';
import PainPoints from './components/PainPoints';
import SolutionTabs from './components/SolutionTabs';
import TeacherMode from './components/TeacherMode';
import StartSteps from './components/StartSteps';
import ReadyBanner from './components/ReadyBanner';
import SpecialMembership from './components/SpecialMembership';
import ApplySection from './components/ApplySection';
import WordjjangFooter from './components/WordjjangFooter';

export default function WordjjangPage() {
  return (
    <div className="min-h-screen bg-background-50 font-body text-foreground-900 antialiased">
      <WordjjangNav />
      <main>
        <HeroSection />
        <PainPoints />
        <SolutionTabs />
        <TeacherMode />
        <StartSteps />
        <ReadyBanner />
        <SpecialMembership />
        <ApplySection />
      </main>
      <WordjjangFooter />
    </div>
  );
}