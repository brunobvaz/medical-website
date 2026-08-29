export default function ClinicalAreasHeader({ content, identityMedia }) {
  return (
    <header className="clinical-areas-section__heading">
      <div className="clinical-areas-section__heading-copy">
        <p className="clinical-areas-section__eyebrow type-eyebrow type-eyebrow--wide">{content.title}</p>
        <span className="clinical-areas-section__rule" aria-hidden="true" />
        <h2 className="type-section-title" id="clinical-areas-title" aria-label={content.headingLabel}>
          <span aria-hidden="true">{content.heading.firstLine}</span>
          <em className="type-accent" aria-hidden="true">{content.heading.secondLine}</em>
        </h2>
        <p className="clinical-areas-section__introduction type-body-lg type-muted">{content.introduction}</p>
      </div>
      <img
        className="clinical-areas-section__identity"
        src={identityMedia.src}
        width={identityMedia.width}
        height={identityMedia.height}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </header>
  )
}
