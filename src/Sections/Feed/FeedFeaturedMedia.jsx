export default function FeedFeaturedMedia({ alt, media }) {
  return (
    <div className="feed-section__featured">
      <picture className="media-frame">
        <source media="(max-width: 639px)" srcSet={media.mobile} />
        <img
          className="media-cover"
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
