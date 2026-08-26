import { useEffect, useMemo, useState } from 'react'
import { IconButton } from '../componentes/ACTION/index.js'
import { TestimonialCard } from '../componentes/CARDS/index.js'
import { Section, SectionContainer } from '../componentes/LAYOUT/index.js'
import { getTestimonials } from '../data/homepage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import testimonialMark from '../assets/icons/idsite_gold.png'
import './TestimonialsSection.css'

const PreviousIcon = (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

const NextIcon = (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="m10 6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

const getVisibleCount = () => {
  if (typeof window === 'undefined') return 3
  if (window.matchMedia('(max-width: 639px)').matches) return 1
  if (window.matchMedia('(max-width: 959px)').matches) return 2
  return 3
}

export default function TestimonialsSection() {
  const { t } = useI18n()
  const [activePage, setActivePage] = useState(0)
  const [visibleCount, setVisibleCount] = useState(getVisibleCount)
  const originalTestimonials = getTestimonials(t.testimonials)
  const [titleLead, titleAccent] = t.testimonials.title.split(', ')
  const testimonials = useMemo(
    () => [...originalTestimonials, ...originalTestimonials].map((testimonial, index) => ({ ...testimonial, carouselId: `${testimonial.name}-${index}` })),
    [originalTestimonials],
  )
  const pageCount = Math.ceil(testimonials.length / visibleCount)

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(getVisibleCount())
      setActivePage(0)
    }
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const showPrevious = () => setActivePage((current) => (current - 1 + pageCount) % pageCount)
  const showNext = () => setActivePage((current) => (current + 1) % pageCount)

  return (
    <Section className="testimonials-section" id="testemunhos" aria-labelledby="testimonials-title">
      <SectionContainer>
        <div className="testimonials-section__header-row">
          <header className="testimonials-section__heading">
            <p className="testimonials-section__eyebrow type-eyebrow">{t.testimonials.eyebrow}</p>
            <h2 className="type-section-title" id="testimonials-title">
              <span>{titleLead},</span>
              <em>{titleAccent}</em>
            </h2>
            <p className="testimonials-section__description type-body type-muted">{t.testimonials.introduction}</p>
          </header>
          <img className="testimonials-section__mark" src={testimonialMark} alt="" aria-hidden="true" />
        </div>

        <div className="testimonials-section__viewport" aria-live="polite">
          <div className="testimonials-section__track" style={{ '--active-page': activePage, '--visible-count': visibleCount }}>
            {testimonials.map((testimonial) => (
              <TestimonialCard
                className="testimonials-section__card"
                key={testimonial.carouselId}
                quote={testimonial.quote}
                name={testimonial.name}
                treatment={testimonial.treatment}
                image={testimonial.image}
                ratingLabel={t.testimonials.ratingLabel}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-section__navigation">
          <div className="testimonials-section__pagination" aria-label={t.testimonials.selectorLabel}>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                aria-label={`${t.testimonials.selectorLabel} ${index + 1}`}
                aria-current={activePage === index ? 'true' : undefined}
                className={activePage === index ? 'is-active' : ''}
                key={index}
                onClick={() => setActivePage(index)}
                type="button"
              />
            ))}
          </div>
          <div className="testimonials-section__controls">
            <IconButton icon={PreviousIcon} label={t.components.previous} variant="ghost" onClick={showPrevious} />
            <IconButton icon={NextIcon} label={t.components.next} variant="ghost" onClick={showNext} />
          </div>
        </div>

        <footer className="testimonials-section__closing">
          <div className="testimonials-section__rating" aria-label={t.testimonials.ratingLabel}>
            {Array.from({ length: 5 }, (_, index) => <span aria-hidden="true" key={index}>★</span>)}
          </div>
          <p>{t.testimonials.closingTitle}</p>
          <p>{t.testimonials.closingAccent}</p>
        </footer>
      </SectionContainer>
    </Section>
  )
}
