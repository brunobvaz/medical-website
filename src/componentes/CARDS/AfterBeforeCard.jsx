import { useId, useState } from 'react'
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
  className = '',
}) {
  const sliderId = useId()
  const [position, setPosition] = useState(initialPosition)

  return (
    <figure
      className={`after-before-card ${className}`.trim()}
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
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>
    </figure>
  )
}
