import HeroSection from './sections/HeroSection';
import ServicesHighlight from './sections/ServicesHighlight';
import TestimonialsPreview from './sections/TestimonialsPreview';
import TeamPreview from './sections/TeamPreview';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesHighlight />
      <TestimonialsPreview />
      <TeamPreview />
    </div>
  );
}
