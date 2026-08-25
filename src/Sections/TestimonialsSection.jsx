import { useState } from 'react'
import { IconButton } from '../componentes/ACTION/index.js'
import { Section, SectionContainer, SectionHeader } from '../componentes/LAYOUT/index.js'
import { getTestimonials, testimonialsBackground } from '../data/homepage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './TestimonialsSection.css'

export default function TestimonialsSection() {
  const { t } = useI18n()
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonials = getTestimonials(t.testimonials)
  const activeTestimonial = testimonials[activeIndex]
  const showPrevious = () => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  const showNext = () => setActiveIndex((current) => (current + 1) % testimonials.length)

  const PreviousIcon = (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  )
  const NextIcon = (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="m10 6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  )

  return (
    <Section className="testimonials-section" id="testemunhos" aria-labelledby="testimonials-title">
      <SectionHeader className="testimonials-section__heading section-container" eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} description={t.testimonials.introduction} titleId="testimonials-title" layout="split" />

      <SectionContainer className="testimonials-section__inner">
        <figure className="testimonials-section__image">
          <img src={testimonialsBackground} alt={t.testimonials.backgroundAlt} />
        </figure>

        <article className="testimonials-section__testimonial" aria-live="polite" key={activeTestimonial.name}>
          <span className="testimonials-section__quote-mark" aria-hidden="true">“</span>
          <blockquote className="type-quote">{activeTestimonial.quote}</blockquote>
          <footer>
            <img src={activeTestimonial.image} alt="" aria-hidden="true" />
            <div>
              <cite className="type-small">{activeTestimonial.name}</cite>
              <p className="type-caption">{activeTestimonial.treatment}</p>
            </div>
          </footer>

          <div className="testimonials-section__navigation">
            <div className="testimonials-section__progress" aria-hidden="true">
              {testimonials.map((testimonial, index) => (
                <span className={activeIndex === index ? 'is-active' : ''} key={testimonial.name} />
              ))}
            </div>
            <div className="testimonials-section__controls">
              <IconButton icon={PreviousIcon} label={t.components.previous} variant="ghost" onClick={showPrevious} />
              <IconButton icon={NextIcon} label={t.components.next} variant="ghost" onClick={showNext} />
            </div>
          </div>
        </article>
      </SectionContainer>

    </Section>
  )
}
