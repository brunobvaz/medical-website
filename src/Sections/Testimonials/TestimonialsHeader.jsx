export default function TestimonialsHeader({ content }) {
  return (
    <div className="testimonials-section__header-row">
      <header className="testimonials-section__heading">
        <p className="testimonials-section__eyebrow type-eyebrow type-eyebrow--ruled">{content.eyebrow}</p>
        <h2 className="type-section-title" id="testimonials-title" aria-label={content.titleLabel}>
          <span>{content.title.lead},</span>
          <em className="type-accent">{content.title.accent}</em>
        </h2>
        <p className="testimonials-section__description type-body-lg type-muted">{content.introduction}</p>
      </header>
      <img
        className="testimonials-section__mark"
        src={content.identityMark.src}
        width={content.identityMark.width}
        height={content.identityMark.height}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
