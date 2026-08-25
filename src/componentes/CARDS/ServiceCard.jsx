import { Button } from '../ACTION/index.js'
import { Link } from 'react-router-dom'
import './cards.css'

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ServiceCard({
  image,
  imageAlt = '',
  eyebrow,
  title,
  description,
  buttonLabel,
  href,
  to,
  className = '',
}) {
  return (
    <article className={`service-card ${className}`.trim()}>
      {to ? <Link className="service-card__image-link" to={to} tabIndex={-1} aria-hidden="true">
        <img className="service-card__image" src={image} alt="" />
      </Link> : <a className="service-card__image-link" href={href} tabIndex={-1} aria-hidden="true">
        <img className="service-card__image" src={image} alt="" />
      </a>}

      <div className="service-card__content">
        {eyebrow && <p className="service-card__eyebrow type-eyebrow">{eyebrow}</p>}
        <h3 className="type-card-title">{title}</h3>
        <p className="service-card__description type-small type-muted">{description}</p>
        <Button
          className="service-card__button"
          href={href}
          to={to}
          variant="secondary"
          size="small"
          trailingIcon={<ArrowIcon />}
          aria-label={`${buttonLabel}: ${title}`}
        >
          {buttonLabel}
        </Button>
      </div>

      <span className="service-card__accessible-image-description">{imageAlt}</span>
    </article>
  )
}
