import { Button } from '../ACTION/index.js'
import Section from './Section.jsx'
import SectionContainer from './SectionContainer.jsx'
import './legal-document.css'

export default function LegalDocumentPage({ content, titleId }) {
  return (
    <main className="legal-document">
      <Section className="legal-document__section" aria-labelledby={titleId}>
        <SectionContainer narrow className="legal-document__container">
          <header className="legal-document__header">
            <p className="type-eyebrow">{content.eyebrow}</p>
            <h1 className="type-page-title" id={titleId}>{content.title}</h1>
            <p className="legal-document__updated type-caption type-muted">{content.updated}</p>
            <p className="legal-document__introduction type-body type-muted">{content.introduction}</p>
          </header>

          <div className="legal-document__content">
            {content.sections.map((section) => (
              <section className="legal-document__item" key={section.title}>
                <h2 className="type-card-title">{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p className="type-body type-muted" key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>

          <Button className="legal-document__back" to="/" variant="secondary">{content.backLabel}</Button>
        </SectionContainer>
      </Section>
    </main>
  )
}
