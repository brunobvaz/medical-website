import { useEffect } from 'react'
import CTASection from '../Sections/CTA/index.js'
import ClinicIntroduction from '../Sections/ClinicIntroduction/index.js'
import SpecialitySection from '../Sections/Speciality/index.js'
import PositioningSection from '../Sections/Positioning/index.js'
import ClinicalAreasSection from '../Sections/ClinicalAreas/index.js'
import FAQSection from '../Sections/FAQ/index.js'
import FeedSection from '../Sections/Feed/index.js'
import HeroSection from '../Sections/Hero/index.js'
import TestimonialsSection from '../Sections/Testimonials/index.js'
import './HomePage.css'

export default function HomePage() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const sections = [...document.querySelectorAll('#inicio > .site-section')]
    const images = [...document.querySelectorAll('.clinic-introduction__portrait')]
    const cards = [...document.querySelectorAll('.interactive-clinical-area-card, .feed-section__comparison, .testimonials-section__card')]

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
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
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
