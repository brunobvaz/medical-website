import { ArrowDownLink } from '../ACTION/index.js'
import './InteractiveClinicalAreaCard.css'

function AreaCover({ area, active }) {
  if (!active) return null

  return (
    <picture className="interactive-clinical-area-card__cover-media" aria-hidden="true">
      <source media="(max-width: 600px)" srcSet={area.cover.mobile} />
      <img
        className="interactive-clinical-area-card__cover"
        src={area.cover.desktop}
        width={area.cover.width}
        height={area.cover.height}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </picture>
  )
}

export default function InteractiveClinicalAreaCard({
  area,
  collapseLabel,
  expandLabel,
  isActive,
  linkLabel,
  number,
  onActivate,
  onToggle,
}) {
  const descriptionId = `clinical-area-description-${area.slug}`

  return (
    <article
      className={`interactive-clinical-area-card${isActive ? ' is-active' : ''}`}
      onFocusCapture={onActivate}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') onActivate()
      }}
    >
      <AreaCover area={area} active={isActive} />
      <span className="interactive-clinical-area-card__shade" aria-hidden="true" />
      <span className="interactive-clinical-area-card__number" aria-hidden="true">
        {String(number).padStart(2, '0')}
      </span>
      <img
        className="interactive-clinical-area-card__icon"
        src={area.icon.src}
        width={area.icon.width}
        height={area.icon.height}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className="interactive-clinical-area-card__copy">
        <h3>
          <button
            className="interactive-clinical-area-card__toggle"
            type="button"
            aria-expanded={isActive}
            aria-controls={descriptionId}
            aria-label={`${isActive ? collapseLabel : expandLabel}: ${area.title}`}
            onClick={onToggle}
          >
            <span>{area.title}</span>
            <span className="interactive-clinical-area-card__indicator" aria-hidden="true">
              {isActive ? '−' : '+'}
            </span>
          </button>
        </h3>
        <p id={descriptionId} aria-hidden={!isActive}>{area.description}</p>
      </div>
      <ArrowDownLink
        aria-label={`${linkLabel}: ${area.title}`}
        className="interactive-clinical-area-card__link"
        to={area.to}
      >
        {linkLabel}
      </ArrowDownLink>
    </article>
  )
}
