import { useEffect, useId, useRef, useState } from 'react'
import './cards.css'

export default function AfterBeforeCard({
  beforeImage,
  beforeMobileImage,
  afterImage,
  afterMobileImage,
  imageWidth,
  imageHeight,
  title,
  beforeLabel = 'Antes',
  afterLabel = 'Depois',
  beforeAlt = '',
  afterAlt = '',
  sliderLabel = 'Comparar resultado antes e depois',
  sliderValueText = '{percentage}% {label}',
  initialPosition = 50,
  demoOnView = false,
  demoDelay = 0,
  className = '',
}) {
  const sliderId = useId()
  const [position, setPosition] = useState(initialPosition)
  const cardRef = useRef(null)
  const hasInteracted = useRef(false)
  const hasDemoed = useRef(false)
  const timersRef = useRef([])

  const stopDemo = () => {
    hasInteracted.current = true
    timersRef.current.forEach((timer) => window.clearTimeout(timer))
    timersRef.current = []
  }

  useEffect(() => {
    if (!demoOnView || !cardRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const clearDemo = () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer))
      timersRef.current = []
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        clearDemo()
        return
      }
      if (hasInteracted.current || hasDemoed.current) return
      hasDemoed.current = true
      setPosition(initialPosition)
      timersRef.current.push(window.setTimeout(() => setPosition(62), demoDelay + 350))
      timersRef.current.push(window.setTimeout(() => setPosition(38), demoDelay + 1050))
      timersRef.current.push(window.setTimeout(() => setPosition(initialPosition), demoDelay + 1750))
    }, { threshold: .55 })
    observer.observe(cardRef.current)
    return () => {
      observer.disconnect()
      clearDemo()
    }
  }, [demoDelay, demoOnView, initialPosition])

  const valueText = sliderValueText
    .replace('{percentage}', String(100 - position))
    .replace('{label}', afterLabel)

  return (
    <figure
      className={`after-before-card ${demoOnView ? 'after-before-card--interactive-hint' : ''} ${className}`.trim()}
      ref={cardRef}
      style={{ '--comparison-position': `${position}%` }}
    >
      <div className="after-before-card__viewport">
        <picture className="after-before-card__picture">
          {beforeMobileImage && <source media="(max-width: 700px)" srcSet={`${beforeMobileImage} 640w`} sizes="calc(100vw - 2rem)" />}
          <img className="after-before-card__image" src={beforeImage} width={imageWidth} height={imageHeight} alt={beforeAlt} loading="lazy" decoding="async" />
        </picture>
        <span className="after-before-card__label after-before-card__label--before type-caption type-uppercase">{beforeLabel}</span>

        <div className="after-before-card__after">
          <picture className="after-before-card__picture">
            {afterMobileImage && <source media="(max-width: 700px)" srcSet={`${afterMobileImage} 640w`} sizes="calc(100vw - 2rem)" />}
            <img className="after-before-card__image" src={afterImage} width={imageWidth} height={imageHeight} alt={afterAlt} loading="lazy" decoding="async" />
          </picture>
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
          aria-valuetext={valueText}
          onPointerDown={stopDemo}
          onKeyDown={stopDemo}
          onChange={(event) => {
            stopDemo()
            setPosition(Number(event.target.value))
          }}
        />
      </div>
      {title && <figcaption className="after-before-card__caption">{title}</figcaption>}
    </figure>
  )
}
