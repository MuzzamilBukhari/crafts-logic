import HeroSection from "./sections/HeroSection";
import ServicesHighlight from "./sections/ServicesHighlight";
import TeamPreview from "./sections/TeamPreview";
import TestimonialsPreview from "./sections/TestimonialsPreview";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ServicesHighlight />
      <TestimonialsPreview />
      <TeamPreview />
    </main>
  )
}
