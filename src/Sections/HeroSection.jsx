import { useState } from 'react'
import { ArrowButton, Button } from '../componentes/ACTION/index.js'
import { Section } from '../componentes/LAYOUT/index.js'
import { getHeroContent } from '../data/homepage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './HeroSection.css'

export default function HeroSection({
  language: languageOverride,
  slides,
  onPrevious,
  onNext,
}) {
  const { language: activeLanguage } = useI18n()
  const [currentIndex, setCurrentIndex] = useState(0)
  const language = languageOverride ?? activeLanguage
  const content = getHeroContent(language)
  const safeSlides = slides?.length > 0 ? slides : content.slides
  const currentSlide = safeSlides[currentIndex % safeSlides.length]
  const hasMultipleSlides = safeSlides.length > 1

  const showPrevious = () => {
    const nextIndex = currentIndex === 0 ? safeSlides.length - 1 : currentIndex - 1
    setCurrentIndex(nextIndex)
    onPrevious?.(nextIndex)
  }

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % safeSlides.length
    setCurrentIndex(nextIndex)
    onNext?.(nextIndex)
  }

  const showSlide = (index) => setCurrentIndex(index)
  const backgroundStyle = { backgroundImage: `url(${currentSlide.image})` }

  return (
    <div className="medical-hero-block">
      <Section className="medical-hero" aria-roledescription="carousel" aria-label={content.ariaLabel} style={backgroundStyle}>
      <div className="medical-hero__overlay" aria-hidden="true" />

      {hasMultipleSlides && (
        <ArrowButton
          className="medical-hero__arrow medical-hero__arrow--previous"
          direction="left"
          label={content.previousSlideLabel}
          onClick={showPrevious}
        />
      )}

      <div className="medical-hero__content" key={`${language}-${currentIndex}`} aria-live="polite">
        <p className="type-eyebrow">{currentSlide.eyebrow}</p>
        <h1 className="type-page-title" aria-label={currentSlide.title}>
          {(currentSlide.titleLines ?? [currentSlide.title]).map((line) => (
            <span className="medical-hero__title-line" aria-hidden="true" key={line}>{line}</span>
          ))}
        </h1>
        <span className="medical-hero__rule" aria-hidden="true" />
        <p className="medical-hero__description type-body">{currentSlide.description}</p>
        <Button className="medical-hero__cta" href={currentSlide.buttonHref} to={currentSlide.buttonTo} size="small" variant="primary">
          {currentSlide.buttonLabel}
        </Button>

        {hasMultipleSlides && (
          <div className="medical-hero__indicators" aria-label={content.indicatorsLabel}>
            {safeSlides.map((slide, index) => (
              <button
                className={`medical-hero__indicator ${index === currentIndex ? 'medical-hero__indicator--active' : ''}`}
                type="button"
                aria-label={content.showSlideLabel(index, slide.title)}
                aria-current={index === currentIndex ? 'true' : undefined}
                key={slide.image}
                onClick={() => showSlide(index)}
              />
            ))}
          </div>
        )}
      </div>

      {hasMultipleSlides && (
        <>
          <ArrowButton
            className="medical-hero__arrow medical-hero__arrow--next"
            direction="right"
            label={content.nextSlideLabel}
            onClick={showNext}
          />

        </>
      )}
      </Section>

      <aside className="medical-hero-stats" aria-label={content.statsLabel}>
        <ul className="medical-hero-stats__list">
          {content.stats.map((stat, index) => (
            <li
              className={`medical-hero-stat ${index % 2 === 0 ? 'medical-hero-stat--gold' : 'medical-hero-stat--grey'}`}
              key={stat.label}
            >
              <span className={`medical-hero-stat__value ${stat.accessibleValue ? 'medical-hero-stat__value--stars' : ''}`} aria-label={stat.accessibleValue}>
                {stat.value}
              </span>
              <span className="medical-hero-stat__label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
