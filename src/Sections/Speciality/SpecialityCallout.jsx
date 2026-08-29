export default function SpecialityCallout({ media, text }) {
  return (
    <div className="speciality-section__callout">
      <img
        src={media.src}
        width={media.width}
        height={media.height}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <span aria-hidden="true" />
      <p className="type-small type-muted">{text}</p>
    </div>
  )
}
