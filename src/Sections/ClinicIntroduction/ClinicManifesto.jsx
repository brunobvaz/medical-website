export default function ClinicManifesto({ content, media }) {
  return (
    <aside className="clinic-introduction__manifesto" aria-label={content.approachLabel}>
      <img
        className="clinic-introduction__identity-mark"
        src={media.identityMark.src}
        width={media.identityMark.width}
        height={media.identityMark.height}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <span className="clinic-introduction__manifesto-rule" aria-hidden="true" />
      <blockquote className="type-quote">{content.quote}</blockquote>
      <img
        className="clinic-introduction__signature-image"
        src={media.signature.src}
        width={media.signature.width}
        height={media.signature.height}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <strong className="clinic-introduction__doctor-name type-card-title">{content.doctorName}</strong>
      <span className="clinic-introduction__doctor-role type-caption">{content.doctorRole}</span>
    </aside>
  )
}
