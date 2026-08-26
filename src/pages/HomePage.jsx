import { useEffect } from 'react'
import CTASection from '../Sections/CTASection.jsx'
import ClinicIntroduction from '../Sections/ClinicIntroduction.jsx'
import SpecialitySection from '../Sections/SpecialitySection.jsx'
import PositioningSection from '../Sections/PositioningSection.jsx'
import ClinicalAreasSection from '../Sections/ClinicalAreasSection.jsx'
import FAQSection from '../Sections/FAQSection.jsx'
import FeedSection from '../Sections/FeedSection.jsx'
import HeroSection from '../Sections/HeroSection.jsx'
import TestimonialsSection from '../Sections/TestimonialsSection.jsx'
import './HomePage.css'

export default function HomePage() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const sections = [...document.querySelectorAll('#inicio > .site-section')]
    const images = [...document.querySelectorAll('.clinic-introduction__portrait, .speciality-section__image')]
    const cards = [...document.querySelectorAll('.clinical-areas-section__card, .feed-section__comparison, .testimonials-section__card')]

    if (reduceMotion || !('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-revealed'))
      images.forEach((image) => image.classList.add('is-revealed'))
      cards.forEach((card) => card.classList.add('is-revealed'))
      return undefined
    }

    sections.forEach((section) => section.classList.add('home-reveal-section'))
    images.forEach((image) => image.classList.add('home-image-reveal'))
    cards.forEach((card, index) => {
      card.classList.add('home-stagger-card')
      card.style.setProperty('--stagger-order', index % 3)
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-revealed', entry.isIntersecting)
      })
    }, { threshold: .12, rootMargin: '0px 0px -8% 0px' })

    sections.forEach((section) => observer.observe(section))
    images.forEach((image) => observer.observe(image))
    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

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
