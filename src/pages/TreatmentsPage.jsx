import { Button } from '../componentes/ACTION/index.js'
import { ClinicalAreaCard } from '../componentes/CARDS/index.js'
import { Section, SectionContainer, SectionHeader } from '../componentes/LAYOUT/index.js'
import { getClinicalAreas } from '../data/homepage.js'
import { getTreatmentsPage } from '../data/treatmentsPage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './TreatmentsPage.css'

export default function TreatmentsPage() {
  const { language } = useI18n()
  const content = getTreatmentsPage(language)
  const clinicalAreas = getClinicalAreas(language)

  return (
    <main className="treatments-page">
      <Section className="treatments-page__section" aria-labelledby="treatments-title">
        <SectionContainer>
          <SectionHeader
            className="treatments-page__heading"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            titleId="treatments-title"
            layout="split"
          />

          <div className="treatments-page__list">
            {clinicalAreas.items.map((area) => (
              <ClinicalAreaCard
                key={area.slug}
                image={area.image}
                imageAlt={area.imageAlt}
                title={area.title}
                description={area.description}
                linkLabel={clinicalAreas.linkLabel}
                to={area.to}
                variant="vertical"
              />
            ))}
          </div>

          <div className="treatments-page__cta">
            <Button to="/booking" variant="primary" size="large">
              {content.bookingLabel}
            </Button>
          </div>
        </SectionContainer>
      </Section>
    </main>
  )
}
