import './cards.css'
import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ClinicalAreaCard({ image, imageAlt, coverImage, coverAlt, categoryLabel, title, description, linkLabel, to, variant = 'grid' }) {
  if (variant === 'grid' && coverImage) {
    return (
      <article className="clinical-area-card clinical-area-card--feature">
        <Link className="clinical-area-card__media" to={to} aria-label={`${linkLabel}: ${title}`}>
          <img className="clinical-area-card__cover" src={coverImage} alt={coverAlt} />
          <span className="clinical-area-card__media-shade" aria-hidden="true" />
          <p className="clinical-area-card__image-description type-small">{description}</p>
          <span className="clinical-area-card__frame" aria-hidden="true" />
          <span className="clinical-area-card__more">{linkLabel}</span>
        </Link>

        <div className="clinical-area-card__body">
          <div className="clinical-area-card__copy">
            <p className="clinical-area-card__eyebrow type-caption type-uppercase">{categoryLabel}</p>
            <h3>{title}</h3>
          </div>
          <img className="clinical-area-card__icon" src={image} alt={imageAlt} />
        </div>
      </article>
    )
  }

  return (
    <article className={`clinical-area-card clinical-area-card--${variant}`}>
      <img className="clinical-area-card__image" src={image} alt={imageAlt} />
      <h3 className="type-small type-uppercase">{title}</h3>
      <p className="clinical-area-card__description type-small type-muted">{description}</p>
      <Link className="clinical-area-card__link type-caption type-uppercase" to={to} aria-label={`${linkLabel}: ${title}`}>
        <span>{linkLabel}</span>
        <ArrowIcon />
      </Link>
    </article>
  )
}
