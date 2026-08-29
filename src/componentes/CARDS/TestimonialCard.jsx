import './TestimonialCard.css'

const Stars = ({ rating, label }) => (
  <div className="testimonial-card__stars" aria-label={label}>
    {Array.from({ length: rating }, (_, star) => (
      <svg key={star} aria-hidden="true" viewBox="0 0 20 20">
        <path d="m10 1.7 2.45 4.97 5.49.8-3.97 3.87.94 5.47L10 14.23l-4.91 2.58.94-5.47-3.97-3.87 5.49-.8L10 1.7Z" />
      </svg>
    ))}
  </div>
)

export default function TestimonialCard({
  testimonial,
  rating = 5,
  ratingLabel,
  isVisible = true,
  variant = 'default',
  className = '',
}) {
  const { quote, name, treatment, initials, image } = testimonial
  const classes = [
    'testimonial-card',
    variant !== 'default' && `testimonial-card--${variant}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <article className={classes} aria-hidden={!isVisible} inert={isVisible ? undefined : true}>
      <div className="testimonial-card__top">
        <Stars rating={rating} label={ratingLabel} />
        <svg className="testimonial-card__quote" aria-hidden="true" viewBox="0 0 40 32">
          <path d="M2 19.1C2 9.8 6.1 4.3 14.3 2l1.4 3.3c-4.7 1.8-7.1 4.9-7.3 9.2H14V30H2V19.1Zm22 0C24 9.8 28.1 4.3 36.3 2l1.4 3.3c-4.7 1.8-7.1 4.9-7.3 9.2H36V30H24V19.1Z" />
        </svg>
      </div>

      <blockquote className="type-quote">“{quote}”</blockquote>

      <footer className="testimonial-card__author">
        {image
          ? <img className="testimonial-card__avatar" src={image} width="128" height="128" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          : <span className="testimonial-card__avatar" aria-hidden="true">{initials}</span>}
        <div>
          <cite className="type-small">{name}</cite>
          <p className="type-caption">{treatment}</p>
        </div>
      </footer>
    </article>
  )
}
