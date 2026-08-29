import { TestimonialCard } from '../../componentes/CARDS/index.js'

export default function TestimonialsCarousel({ carousel, content }) {
  const { currentPage, firstVisibleIndex, interactionProps, pageCount, visibleCount } = carousel

  return (
    <div
      className="testimonials-section__viewport"
      role="group"
      aria-label={content.selectorLabel}
      aria-roledescription={content.carouselRoleDescription}
      tabIndex={pageCount > 1 ? 0 : undefined}
      {...interactionProps}
    >
      <div className="testimonials-section__track" style={{ '--active-page': currentPage, '--visible-count': visibleCount }}>
        {content.items.map((testimonial, index) => (
          <TestimonialCard
            className="testimonials-section__card"
            key={testimonial.id}
            testimonial={testimonial}
            ratingLabel={content.ratingLabel}
            isVisible={index >= firstVisibleIndex && index < firstVisibleIndex + visibleCount}
            variant="editorial"
          />
        ))}
      </div>
    </div>
  )
}
