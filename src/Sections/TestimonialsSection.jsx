import { useEffect, useMemo, useRef, useState } from 'react'
import { IconButton } from '../componentes/ACTION/index.js'
import { TestimonialCard } from '../componentes/CARDS/index.js'
import { Section, SectionContainer } from '../componentes/LAYOUT/index.js'
import { getTestimonials } from '../data/homepage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import testimonialMark from '../assets/optimized/testimonials-mark.webp'
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
  const gesture = useRef(null)
  const originalTestimonials = useMemo(() => getTestimonials(t.testimonials), [t.testimonials])
  const titleLead = t.testimonials.titleLead ?? t.testimonials.title
  const titleAccent = t.testimonials.titleAccent
  const testimonials = useMemo(
    () => originalTestimonials.map((testimonial, index) => ({ ...testimonial, carouselId: `${testimonial.name}-${index}` })),
    [originalTestimonials],
  )
  const pageCount = Math.ceil(testimonials.length / visibleCount)
  const currentPage = Math.min(activePage, Math.max(0, pageCount - 1))
  const firstVisibleIndex = currentPage * visibleCount
  const visibleTestimonials = testimonials.slice(firstVisibleIndex, firstVisibleIndex + visibleCount)
  const pageStatus = t.testimonials.pageStatus
    .replace('{current}', String(currentPage + 1))
    .replace('{total}', String(pageCount))
    .replace('{names}', visibleTestimonials.map(({ name }) => name).join(', '))

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(getVisibleCount())
    }
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const showPrevious = () => setActivePage((currentPage - 1 + pageCount) % pageCount)
  const showNext = () => setActivePage((currentPage + 1) % pageCount)

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
          <img className="testimonials-section__mark" src={testimonialMark} width="640" height="640" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        </div>

        <div
          className="testimonials-section__viewport"
          role="group"
          aria-label={t.testimonials.selectorLabel}
          aria-roledescription="carousel"
          onPointerDown={(event) => {
            if (!event.isPrimary || event.target.closest('button, a, input, textarea, select')) return
            gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY }
            event.currentTarget.setPointerCapture?.(event.pointerId)
          }}
          onPointerCancel={() => { gesture.current = null }}
          onPointerUp={(event) => {
            if (!gesture.current || gesture.current.id !== event.pointerId) return
            const distanceX = event.clientX - gesture.current.x
            const distanceY = event.clientY - gesture.current.y
            gesture.current = null
            event.currentTarget.releasePointerCapture?.(event.pointerId)
            if (Math.abs(distanceX) < 45 || Math.abs(distanceX) <= Math.abs(distanceY) * 1.25) return
            if (distanceX < 0) showNext()
            else showPrevious()
          }}
        >
          <div className="testimonials-section__track" style={{ '--active-page': currentPage, '--visible-count': visibleCount }}>
            {testimonials.map((testimonial, index) => {
              const isVisible = index >= firstVisibleIndex && index < firstVisibleIndex + visibleCount
              return (
                <TestimonialCard
                  className="testimonials-section__card"
                  key={testimonial.carouselId}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  treatment={testimonial.treatment}
                  image={testimonial.image}
                  ratingLabel={t.testimonials.ratingLabel}
                  isVisible={isVisible}
                />
              )
            })}
          </div>
        </div>

        <p className="type-sr-only" aria-live="polite" aria-atomic="true">{pageStatus}</p>

        {pageCount > 1 && <div className="testimonials-section__navigation">
          <div className="testimonials-section__pagination" aria-label={t.testimonials.selectorLabel}>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                aria-label={t.testimonials.pageButtonLabel.replace('{page}', String(index + 1))}
                aria-current={currentPage === index ? 'true' : undefined}
                className={currentPage === index ? 'is-active' : ''}
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
        </div>}

        <footer className="testimonials-section__closing">
          <div className="testimonials-section__rating" aria-label={t.testimonials.ratingLabel}>
            {Array.from({ length: 5 }, (_, index) => <span aria-hidden="true" key={index}>★</span>)}
          </div>
          <p>{t.testimonials.closingTitle}</p>
          <p className="testimonials-section__closing-accent">{t.testimonials.closingAccent}</p>
          <p className="testimonials-section__disclaimer">{t.testimonials.disclaimer}</p>
        </footer>
      </SectionContainer>
    </Section>
  )
}
