import './cards.css'
import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ClinicalAreaCard({ image, imageAlt, title, description, linkLabel, to, variant = 'grid' }) {
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
