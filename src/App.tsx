import { NewHeroSection } from './components/NewHeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { WorkflowDiagram } from './components/WorkflowDiagram';
import { DashboardPreview } from './components/DashboardPreview';
import { ImpactSection } from './components/ImpactSection';
import { FutureScope } from './components/FutureScope';
import { NewCallToAction } from './components/NewCallToAction';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Toaster for notifications */}
      <Toaster position="top-right" />

      {/* Main sections */}
      <NewHeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGrid />
      <WorkflowDiagram />
      <DashboardPreview />
      <ImpactSection />
      <FutureScope />
      <NewCallToAction />
      <Footer />
    </div>
  );
}