import CTASection from '../Sections/CTASection.jsx'
import ClinicIntroduction from '../Sections/ClinicIntroduction.jsx'
import SpecialitySection from '../Sections/SpecialitySection.jsx'
import PositioningSection from '../Sections/PositioningSection.jsx'
import ClinicalAreasSection from '../Sections/ClinicalAreasSection.jsx'
import FAQSection from '../Sections/FAQSection.jsx'
import FeedSection from '../Sections/FeedSection.jsx'
import HeroSection from '../Sections/HeroSection.jsx'
import TestimonialsSection from '../Sections/TestimonialsSection.jsx'

export default function HomePage() {
  return (
    <main id="inicio">
      <HeroSection />
       <ClinicIntroduction />
        <PositioningSection />
        <SpecialitySection />
      <ClinicalAreasSection />
      <FeedSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
