export default function FAQItem({ item, index, accordion }) {
  const isOpen = accordion.isOpen(item.id)
  const questionId = `faq-question-${item.id}`
  const answerId = `faq-answer-${item.id}`

  return (
    <article className={`faq-section__item${isOpen ? ' is-open' : ''}`}>
      <h3 className="faq-section__question-heading">
        <button
          ref={accordion.registerTrigger(item.id)}
          id={questionId}
          aria-expanded={isOpen}
          aria-controls={answerId}
          className="faq-section__question"
          onClick={() => accordion.toggleItem(item.id)}
          onKeyDown={(event) => accordion.handleTriggerKeyDown(event, index)}
          type="button"
        >
          <span className="type-small">{item.question}</span>
          <span className="faq-section__toggle" aria-hidden="true" />
        </button>
      </h3>
      <div
        className="faq-section__answer-wrap"
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        aria-hidden={!isOpen}
        inert={isOpen ? undefined : true}
      >
        <div className="faq-section__answer">
          <p className="type-small type-muted">{item.answer}</p>
        </div>
      </div>
    </article>
  )
}
