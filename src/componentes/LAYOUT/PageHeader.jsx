import Section from './Section.jsx'
import './page-header.css'

export default function PageHeader({
  eyebrow,
  title,
  description,
  image,
  mobileImage,
  imageAlt = '',
  titleId,
  className = '',
}) {
  return (
    <Section className={`page-header ${className}`.trim()} aria-labelledby={titleId}>
      <picture className="page-header__media" aria-hidden={imageAlt ? undefined : 'true'}>
        {mobileImage && <source media="(max-width: 767px)" srcSet={mobileImage} />}
        <img
          className="page-header__image"
          src={image}
          alt={imageAlt}
          width="1536"
          height="1024"
          fetchPriority="high"
        />
      </picture>
      <span className="page-header__overlay" aria-hidden="true" />

      <div className="page-header__content">
        <p className="type-eyebrow type-eyebrow--wide">{eyebrow}</p>
        <span className="page-header__rule" aria-hidden="true" />
        <h1 className="type-page-title" id={titleId}>{title}</h1>
        {description && <p className="type-body type-muted">{description}</p>}
      </div>
    </Section>
  )
}
