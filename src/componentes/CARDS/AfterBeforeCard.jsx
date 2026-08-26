import { useEffect, useId, useRef, useState } from 'react'
import './cards.css'

export default function AfterBeforeCard({
  beforeImage,
  afterImage,
  beforeLabel = 'Antes',
  afterLabel = 'Depois',
  beforeAlt = '',
  afterAlt = '',
  sliderLabel = 'Comparar resultado antes e depois',
  initialPosition = 50,
  demoOnView = false,
  className = '',
}) {
  const sliderId = useId()
  const [position, setPosition] = useState(initialPosition)
  const cardRef = useRef(null)
  const hasInteracted = useRef(false)

  useEffect(() => {
    if (!demoOnView || !cardRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timers = []
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      if (hasInteracted.current) return
      timers.push(window.setTimeout(() => setPosition(62), 350))
      timers.push(window.setTimeout(() => setPosition(38), 1050))
      timers.push(window.setTimeout(() => setPosition(initialPosition), 1750))
    }, { threshold: .55 })
    observer.observe(cardRef.current)
    return () => {
      observer.disconnect()
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [demoOnView, initialPosition])

  return (
    <figure
      className={`after-before-card ${demoOnView ? 'after-before-card--interactive-hint' : ''} ${className}`.trim()}
      ref={cardRef}
      style={{ '--comparison-position': `${position}%` }}
    >
      <div className="after-before-card__viewport">
        <img className="after-before-card__image" src={beforeImage} alt={beforeAlt} />
        <span className="after-before-card__label after-before-card__label--before type-caption type-uppercase">{beforeLabel}</span>

        <div className="after-before-card__after">
          <img className="after-before-card__image" src={afterImage} alt={afterAlt} />
          <span className="after-before-card__label after-before-card__label--after type-caption type-uppercase">{afterLabel}</span>
        </div>

        <div className="after-before-card__divider" aria-hidden="true">
          <span className="after-before-card__handle">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <label className="after-before-card__slider-label type-sr-only" htmlFor={sliderId}>{sliderLabel}</label>
        <input
          className="after-before-card__slider"
          id={sliderId}
          type="range"
          min="0"
          max="100"
          value={position}
          aria-valuetext={`${100 - position}% ${afterLabel}`}
          onChange={(event) => {
            hasInteracted.current = true
            setPosition(Number(event.target.value))
          }}
        />
      </div>
    </figure>
  )
}
