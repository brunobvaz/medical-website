import { useRef } from 'react'
import { ArrowButton } from '../componentes/ACTION/index.js'
import { ClinicalAreaCard } from '../componentes/CARDS/index.js'
import { Section, SectionContainer } from '../componentes/LAYOUT/index.js'
import { getClinicalAreas } from '../data/homepage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './ClinicalAreasSection.css'

export default function ClinicalAreasSection() {
  const { language } = useI18n()
  const content = getClinicalAreas(language)
  const carouselRef = useRef(null)

  const moveCarousel = (direction) => {
    const carousel = carouselRef.current
    const card = carousel?.firstElementChild
    if (!carousel || !card) return

    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0
    const distance = direction * (card.getBoundingClientRect().width + gap)
    const start = carousel.scrollLeft
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = reduceMotion ? 0 : 850
    const startedAt = performance.now()

    const animate = (now) => {
      const progress = duration === 0 ? 1 : Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      carousel.scrollLeft = start + (distance * eased)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  return (
    <Section className="clinical-areas-section" id="areas-clinicas" aria-labelledby="clinical-areas-title">
      <SectionContainer narrow>
        <header className="clinical-areas-section__heading">
          <div className="clinical-areas-section__title">
            <h2 className="type-eyebrow" id="clinical-areas-title">{content.title}</h2>
            <span aria-hidden="true" />
          </div>
          <div className="clinical-areas-section__controls">
            <ArrowButton direction="left" label={content.previousLabel} size="small" variant="dark" onClick={() => moveCarousel(-1)} />
            <ArrowButton direction="right" label={content.nextLabel} size="small" variant="dark" onClick={() => moveCarousel(1)} />
          </div>
        </header>

        <div className="clinical-areas-section__carousel" ref={carouselRef} role="region" aria-label={content.title} tabIndex={0}>
          {content.items.map((area) => (
            <ClinicalAreaCard
              key={area.slug}
              image={area.image}
              imageAlt={area.imageAlt}
              coverImage={area.coverImage}
              coverAlt={area.coverAlt}
              categoryLabel={content.categoryLabel}
              title={area.title}
              description={area.description}
              linkLabel={content.linkLabel}
              to={area.to}
            />
          ))}
        </div>
      </SectionContainer>
    </Section>
  )
}
