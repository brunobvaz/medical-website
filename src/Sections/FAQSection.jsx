import { useState } from 'react'
import { useI18n } from '../i18n/I18nContext.jsx'
import { Section, SectionContainer, SectionHeader } from '../componentes/LAYOUT/index.js'
import './FAQSection.css'

export default function FAQSection() {
  const { t } = useI18n()
  const content = t.faq
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section className="faq-section" id="faq" aria-labelledby="faq-title">
      <SectionContainer className="faq-section__inner">
        <SectionHeader className="faq-section__heading" eyebrow={content.eyebrow} title={content.title} description={content.introduction} titleId="faq-title" />
        <div className="faq-section__questions">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <article className={`faq-section__item${isOpen ? ' is-open' : ''}`} key={item.question}>
                <button aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} className="faq-section__question" onClick={() => setOpenIndex(isOpen ? -1 : index)} type="button">
                  <span className="type-small">{item.question}</span>
                  <span className="faq-section__toggle" aria-hidden="true" />
                </button>
                <div className="faq-section__answer-wrap" id={`faq-answer-${index}`}>
                  <div className="faq-section__answer"><p className="type-small type-muted">{item.answer}</p></div>
                </div>
              </article>
            )
          })}
        </div>
      </SectionContainer>
    </Section>
  )
}
