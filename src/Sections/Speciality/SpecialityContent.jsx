import SpecialityCallout from './SpecialityCallout.jsx'

export default function SpecialityContent({ calloutMedia, content }) {
  return (
    <div className="speciality-section__content">
      <p className="speciality-section__eyebrow type-eyebrow type-eyebrow--wide">{content.eyebrow}</p>
      <span className="speciality-section__heading-rule" aria-hidden="true" />

      <h2 className="type-section-title" id="speciality-title" aria-label={content.titleLabel}>
        <span aria-hidden="true">{content.title.firstLine}</span>
        <span aria-hidden="true">
          {content.title.secondLine} <em className="type-accent">{content.title.accent}</em>
        </span>
      </h2>

      <p className="speciality-section__description type-body-lg type-muted">{content.description}</p>
      <SpecialityCallout text={content.callout} media={calloutMedia} />
    </div>
  )
}
