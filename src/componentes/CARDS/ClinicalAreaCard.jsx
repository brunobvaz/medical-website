import './cards.css'
import { Link } from 'react-router-dom'

export default function ClinicalAreaCard({ area, categoryLabel, linkLabel }) {
  return (
    <article className="clinical-area-card clinical-area-card--feature">
      <Link className="clinical-area-card__media" to={area.to} aria-label={`${linkLabel}: ${area.title}`}>
        <picture>
          {area.cover.mobile && <source media="(max-width: 600px)" srcSet={area.cover.mobile} />}
          <img className="clinical-area-card__cover" src={area.cover.desktop} width={area.cover.width} height={area.cover.height} alt={area.coverAlt} loading="lazy" decoding="async" />
        </picture>
        <span className="clinical-area-card__media-shade" aria-hidden="true" />
        <p className="clinical-area-card__image-description type-small">{area.description}</p>
        <span className="clinical-area-card__frame" aria-hidden="true" />
        <span className="clinical-area-card__more">{linkLabel}</span>
      </Link>

      <div className="clinical-area-card__body">
        <div className="clinical-area-card__copy">
          {categoryLabel && <p className="clinical-area-card__eyebrow type-caption type-uppercase">{categoryLabel}</p>}
          <h3>{area.title}</h3>
        </div>
        <img className="clinical-area-card__icon" src={area.icon.src} width={area.icon.width} height={area.icon.height} alt={area.imageAlt} loading="lazy" decoding="async" />
      </div>
    </article>
  )
}
