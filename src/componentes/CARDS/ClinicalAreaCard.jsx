import './cards.css'
import { Link } from 'react-router-dom'

export default function ClinicalAreaCard({ image, imageWidth, imageHeight, imageAlt, coverImage, coverMobileImage, coverWidth, coverHeight, coverAlt, categoryLabel, title, description, linkLabel, to }) {
  return (
    <article className="clinical-area-card clinical-area-card--feature">
      <Link className="clinical-area-card__media" to={to} aria-label={`${linkLabel}: ${title}`}>
        <picture>
          {coverMobileImage && <source media="(max-width: 600px)" srcSet={coverMobileImage} />}
          <img className="clinical-area-card__cover" src={coverImage} width={coverWidth} height={coverHeight} alt={coverAlt} loading="lazy" decoding="async" />
        </picture>
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
        <img className="clinical-area-card__icon" src={image} width={imageWidth} height={imageHeight} alt={imageAlt} loading="lazy" decoding="async" />
      </div>
    </article>
  )
}
