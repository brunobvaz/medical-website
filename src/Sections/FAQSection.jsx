import { useI18n } from '../i18n/I18nContext.jsx'
import { Section, SectionContainer, SectionHeader } from '../componentes/LAYOUT/index.js'
import './FAQSection.css'

export default function FAQSection() {
  const { t } = useI18n()
  const content = t.faq

  return (
    <Section className="faq-section" id="faq" aria-labelledby="faq-title">
      <SectionContainer className="faq-section__inner">
        <SectionHeader className="faq-section__heading" eyebrow={content.eyebrow} title={content.title} description={content.introduction} titleId="faq-title" />

        <div className="faq-section__questions">
          {content.items.map((item, index) => (
            <details className="faq-section__item" key={item.question} open={index === 0}>
              <summary>
                <span className="type-small">{item.question}</span>
                <span className="faq-section__toggle" aria-hidden="true" />
              </summary>
              <div className="faq-section__answer">
                <p className="type-small type-muted">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </SectionContainer>
    </Section>
  )
}
