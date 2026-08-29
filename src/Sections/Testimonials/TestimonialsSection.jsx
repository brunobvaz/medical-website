import { Section, SectionContainer } from '../../componentes/LAYOUT/index.js'
import { getTestimonialsContent } from '../../data/homepage.js'
import { useI18n } from '../../i18n/I18nContext.jsx'
import TestimonialsCarousel from './TestimonialsCarousel.jsx'
import TestimonialsClosing from './TestimonialsClosing.jsx'
import TestimonialsHeader from './TestimonialsHeader.jsx'
import TestimonialsNavigation from './TestimonialsNavigation.jsx'
import useTestimonialsCarousel from './useTestimonialsCarousel.js'
import './TestimonialsSection.css'

export default function TestimonialsSection() {
  const { language } = useI18n()
  const content = getTestimonialsContent(language)
  const carousel = useTestimonialsCarousel(content.items)
  const pageStatus = content.pageStatus({
    current: carousel.currentPage + 1,
    names: carousel.visibleTestimonials.map(({ name }) => name).join(', '),
    total: carousel.pageCount,
  })

  return (
    <Section className="testimonials-section" id="testemunhos" aria-labelledby="testimonials-title">
      <SectionContainer>
        <TestimonialsHeader content={content} />
        <TestimonialsCarousel carousel={carousel} content={content} />
        <p className="type-sr-only" aria-live="polite" aria-atomic="true">{pageStatus}</p>
        <TestimonialsNavigation carousel={carousel} content={content} />
        <TestimonialsClosing content={content} />
      </SectionContainer>
    </Section>
  )
}
