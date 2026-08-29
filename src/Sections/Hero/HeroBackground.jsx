export default function HeroBackground({
  slide,
  previous = false,
  animate = false,
  priority = false,
}) {
  return (
    <picture className="medical-hero__background-picture">
      {slide.mobileImage && <source media="(max-width: 767px)" srcSet={slide.mobileImage} />}
      <img
        className={`medical-hero__background medical-hero__background--${previous ? 'previous' : 'current'} ${animate ? 'medical-hero__background--enter' : ''}`.trim()}
        src={slide.image}
        alt=""
        aria-hidden="true"
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        loading={priority ? 'eager' : undefined}
      />
    </picture>
  )
}
