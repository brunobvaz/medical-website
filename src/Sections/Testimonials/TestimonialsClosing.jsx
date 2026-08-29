export default function TestimonialsClosing({ content }) {
  return (
    <footer className="testimonials-section__closing">
      <div className="testimonials-section__rating" aria-label={content.ratingLabel}>
        {Array.from({ length: 5 }, (_, index) => <span aria-hidden="true" key={index}>★</span>)}
      </div>
      <p className="type-subsection-title">{content.closingTitle}</p>
      <p className="testimonials-section__closing-accent type-subsection-title">{content.closingAccent}</p>
      <p className="testimonials-section__disclaimer type-caption">{content.disclaimer}</p>
    </footer>
  )
}
