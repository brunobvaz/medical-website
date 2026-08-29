import { IconButton } from '../../componentes/ACTION/index.js'

const PreviousIcon = (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

const NextIcon = (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="m10 6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

export default function TestimonialsNavigation({ carousel, content }) {
  const { currentPage, pageCount, showNext, showPage, showPrevious } = carousel
  if (pageCount <= 1) return null

  return (
    <div className="testimonials-section__navigation">
      <div className="testimonials-section__pagination" aria-label={content.selectorLabel}>
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            aria-label={content.pageButtonLabel.replace('{page}', String(index + 1))}
            aria-current={currentPage === index ? 'page' : undefined}
            className={currentPage === index ? 'is-active' : ''}
            key={index}
            onClick={() => showPage(index)}
            type="button"
          />
        ))}
      </div>
      <div className="testimonials-section__controls">
        <IconButton icon={PreviousIcon} label={content.previousLabel} variant="accent" onClick={showPrevious} />
        <IconButton icon={NextIcon} label={content.nextLabel} variant="accent" onClick={showNext} />
      </div>
    </div>
  )
}
