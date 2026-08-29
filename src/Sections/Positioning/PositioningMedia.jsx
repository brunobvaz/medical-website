export default function PositioningMedia({ media }) {
  return (
    <div className="positioning-section__media" aria-hidden="true">
      <picture className="media-frame">
        <source media="(max-width: 767px)" srcSet={media.mobile} />
        <img
          className="positioning-section__image media-cover"
          src={media.desktop}
          width={media.width}
          height={media.height}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  )
}
