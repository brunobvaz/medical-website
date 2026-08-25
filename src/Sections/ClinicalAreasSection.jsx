import { ClinicalAreaCard } from '../componentes/CARDS/index.js'
import { Section, SectionContainer } from '../componentes/LAYOUT/index.js'
import { getClinicalAreas } from '../data/homepage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './ClinicalAreasSection.css'

export default function ClinicalAreasSection() {
  const { language } = useI18n()
  const content = getClinicalAreas(language)

  return (
    <Section className="clinical-areas-section" id="areas-clinicas" aria-labelledby="clinical-areas-title">
      <SectionContainer narrow>
        <header className="clinical-areas-section__heading">
          <h2 className="type-eyebrow" id="clinical-areas-title">{content.title}</h2>
          <span aria-hidden="true" />
        </header>

        <div className="clinical-areas-section__grid">
          {content.items.map((area) => (
            <ClinicalAreaCard
              key={area.slug}
              image={area.image}
              imageAlt={area.imageAlt}
              title={area.title}
              description={area.description}
              linkLabel={content.linkLabel}
              to={area.to}
            />
          ))}
        </div>
      </SectionContainer>
    </Section>
  )
}
