export default function SpecialityMedia({ alt, media }) {
  return (
    <div className="speciality-section__media">
      <picture className="speciality-section__image-frame media-frame">
        <source media="(max-width: 767px)" srcSet={media.mobile} />
        <img
          className="speciality-section__image media-cover"
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
