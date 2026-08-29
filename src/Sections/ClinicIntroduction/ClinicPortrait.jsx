export default function ClinicPortrait({ alt, media }) {
  return (
    <div className="clinic-introduction__portrait">
      <picture className="media-frame">
        <source media="(max-width: 959px)" srcSet={media.mobile} />
        <img
          className="clinic-introduction__portrait-image media-cover"
          src={media.desktop}
          width={media.width}
          height={media.height}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  )
}
