import { TextLink } from '../ACTION/index.js'
import './cards.css'

const ArrowIcon = () => (
  <svg className="information-card__arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function InformationCard({
  icon,
  iconAlt = '',
  title,
  description,
  linkLabel,
  to,
  href,
  className = '',
}) {
  return (
    <article className={`information-card ${className}`.trim()}>
      <div className="information-card__icon-wrap">
        <img className="information-card__icon" src={icon} alt={iconAlt} loading="lazy" decoding="async" />
      </div>

      <div className="information-card__content">
        <h3 className="information-card__title type-card-title">{title}</h3>
        <p className="information-card__description type-small type-muted">{description}</p>
      </div>

      <footer className="information-card__footer">
        <TextLink
          className="information-card__link"
          href={href}
          to={to}
          variant="accent"
          trailingIcon={<ArrowIcon />}
          aria-label={`${linkLabel}: ${title}`}
        >
          {linkLabel}
        </TextLink>
      </footer>
    </article>
  )
}
