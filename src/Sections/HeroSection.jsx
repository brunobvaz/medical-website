import { useEffect, useRef, useState } from 'react'
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
  const heroRef = useRef(null)
  const swipeStartRef = useRef(null)
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
  const handleKeyDown = (event) => {
    if (!hasMultipleSlides || event.currentTarget !== event.target) return
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrevious()
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNext()
    }
  }
  const handlePointerDown = (event) => {
    if (!event.isPrimary) return
    swipeStartRef.current = { x: event.clientX, y: event.clientY }
  }
  const handlePointerUp = (event) => {
    const start = swipeStartRef.current
    swipeStartRef.current = null
    if (!start || !event.isPrimary || !hasMultipleSlides) return

    const deltaX = event.clientX - start.x
    const deltaY = event.clientY - start.y
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY) * 1.25) return
    if (deltaX > 0) showPrevious()
    else showNext()
  }
  const backgroundStyle = {
    backgroundImage: `url(${currentSlide.image})`,
    '--hero-mobile-x': currentSlide.mobileImagePosition ?? '62%',
  }

  useEffect(() => {
    const hero = heroRef.current
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let frameId = null
    const updateParallax = () => {
      frameId = null
      const bounds = hero.getBoundingClientRect()
      const progress = Math.max(-1, Math.min(1, -bounds.top / Math.max(bounds.height, 1)))
      hero.style.setProperty('--hero-parallax-y', `${progress * 34}px`)
    }
    const requestUpdate = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateParallax)
    }

    updateParallax()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frameId !== null) window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div className="medical-hero-block">
      <Section
        className={`medical-hero ${currentSlide.buttonTo === '/booking' ? 'medical-hero--compact-mobile' : ''}`}
        ref={heroRef}
        aria-roledescription="carousel"
        aria-label={content.ariaLabel}
        style={backgroundStyle}
        tabIndex={hasMultipleSlides ? 0 : undefined}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => { swipeStartRef.current = null }}
      >
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
        <div className="medical-hero__actions">
          <Button className="medical-hero__cta medical-hero__cta--booking" to="/booking" size="small" variant="primary">
            {language === 'en' ? 'Book an appointment' : 'Marcar consulta'}
          </Button>
          <Button
            className={`medical-hero__cta medical-hero__cta--slide ${currentSlide.buttonTo === '/booking' ? 'medical-hero__cta--duplicate' : ''}`}
            href={currentSlide.buttonHref}
            to={currentSlide.buttonTo}
            size="small"
            variant="primary"
          >
            {currentSlide.buttonLabel}
          </Button>
        </div>

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
              <span className="medical-hero-stat__label">
                <span className="medical-hero-stat__label-full">{stat.label}</span>
                {stat.shortLabel && <span className="medical-hero-stat__label-short">{stat.shortLabel}</span>}
              </span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
