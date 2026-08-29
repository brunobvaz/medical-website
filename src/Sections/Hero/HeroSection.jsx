import { useEffect, useMemo, useRef } from 'react'
import { ArrowButton, Button } from '../../componentes/ACTION/index.js'
import { Section } from '../../componentes/LAYOUT/index.js'
import { getHeroContent } from '../../data/homepage.js'
import { useI18n } from '../../i18n/I18nContext.jsx'
import HeroBackground from './HeroBackground.jsx'
import HeroStats from './HeroStats.jsx'
import useHeroCarousel from './useHeroCarousel.js'
import './HeroSection.css'

export default function HeroSection({
  language: languageOverride,
  slides,
  onPrevious,
  onNext,
}) {
  const { language: activeLanguage } = useI18n()
  const heroRef = useRef(null)
  const language = languageOverride ?? activeLanguage
  const content = useMemo(() => getHeroContent(language), [language])
  const safeSlides = useMemo(() => (slides?.length > 0 ? slides : content.slides), [content.slides, slides])
  const {
    currentIndex,
    currentSlide,
    previousSlide,
    hasMultipleSlides,
    showPrevious,
    showNext,
    showSlide,
    interactionProps,
  } = useHeroCarousel(safeSlides, { onPrevious, onNext })

  useEffect(() => {
    const useMobileImages = window.matchMedia('(max-width: 767px)').matches
    const preloadSlides = () => {
      safeSlides.slice(1).forEach((slide) => {
        const image = new Image()
        image.src = useMobileImages ? slide.mobileImage ?? slide.image : slide.image
      })
    }
    const preloadId = window.requestIdleCallback?.(() => {
      preloadSlides()
    }) ?? window.setTimeout(() => {
      preloadSlides()
    }, 700)

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(preloadId)
      else window.clearTimeout(preloadId)
    }
  }, [safeSlides])

  useEffect(() => {
    const hero = heroRef.current
    const disableParallax = window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches
    if (!hero || disableParallax) return undefined

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
        className={`medical-hero medical-hero--slide-${currentIndex} ${currentSlide.buttonTo === '/booking' ? 'medical-hero--compact-mobile' : ''}`}
        ref={heroRef}
        aria-roledescription={language === 'en' ? 'carousel' : 'carrossel'}
        aria-label={content.ariaLabel}
        tabIndex={hasMultipleSlides ? 0 : undefined}
        {...interactionProps}
      >
      {previousSlide && (
        <HeroBackground slide={previousSlide} previous />
      )}
      <HeroBackground
        slide={currentSlide}
        animate={Boolean(previousSlide)}
        priority={currentIndex === 0}
        key={`background-${currentIndex}`}
      />
      <div className="medical-hero__overlay" aria-hidden="true" />
      <p className="type-sr-only">{language === 'en' ? 'Use the left and right arrow keys or swipe to change highlight.' : 'Use as setas esquerda e direita ou deslize para mudar de destaque.'}</p>
      <p className="type-sr-only" role="status" aria-live="polite" aria-atomic="true">
        {language === 'en' ? `Slide ${currentIndex + 1} of ${safeSlides.length}: ${currentSlide.title}` : `Slide ${currentIndex + 1} de ${safeSlides.length}: ${currentSlide.title}`}
      </p>

      {hasMultipleSlides && (
        <ArrowButton
          className="medical-hero__arrow medical-hero__arrow--previous"
          direction="left"
          label={content.previousSlideLabel}
          onClick={showPrevious}
        />
      )}

      <div className="medical-hero__content" key={`${language}-${currentIndex}`}>
        <p className="type-eyebrow">{currentSlide.eyebrow}</p>
        <h1 className="type-display" aria-label={currentSlide.title}>
          {(currentSlide.titleLines ?? [currentSlide.title]).map((line) => (
            <span className="medical-hero__title-line" aria-hidden="true" key={line}>{line}</span>
          ))}
        </h1>
        <span className="medical-hero__rule" aria-hidden="true" />
        <p className="medical-hero__description type-body">{currentSlide.description}</p>
        <div className="medical-hero__actions">
          <Button className="medical-hero__cta medical-hero__cta--booking" to="/booking" size="small" variant="light">
            {language === 'en' ? 'Book an appointment' : 'Marcar consulta'}
          </Button>
          <Button
            className={`medical-hero__cta medical-hero__cta--slide ${currentSlide.buttonTo === '/booking' ? 'medical-hero__cta--duplicate' : ''}`}
            href={currentSlide.buttonHref}
            to={currentSlide.buttonTo}
            size="small"
            variant="light"
          >
            {currentSlide.buttonLabel}
          </Button>
        </div>

        {hasMultipleSlides && (
          <div className="medical-hero__progress" role="group" aria-label={content.indicatorsLabel}>
            <span className="medical-hero__progress-number" aria-hidden="true">{String(currentIndex + 1).padStart(2, '0')}</span>
            <div className="medical-hero__indicators">
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
            <span className="medical-hero__progress-number" aria-hidden="true">{String(safeSlides.length).padStart(2, '0')}</span>
          </div>
        )}
      </div>

      {hasMultipleSlides && (
        <ArrowButton
          className="medical-hero__arrow medical-hero__arrow--next"
          direction="right"
          label={content.nextSlideLabel}
          onClick={showNext}
        />
      )}
      </Section>

      <HeroStats stats={content.stats} ariaLabel={content.statsLabel} />
    </div>
  )
}
