import treatmentsHero from '../assets/optimized/treatments.png'
import treatmentsHeroMobile from '../assets/optimized/treatments_mobile.png'
import { Button } from '../componentes/ACTION/index.js'
import { InformationCard } from '../componentes/CARDS/index.js'
import { PageHeader, Section, SectionContainer } from '../componentes/LAYOUT/index.js'
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
      <PageHeader
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        image={treatmentsHero}
        mobileImage={treatmentsHeroMobile}
        titleId="treatments-title"
      />

      <Section className="treatments-page__areas" aria-labelledby="treatments-areas-title">
        <SectionContainer size="wide">
          <header className="treatments-page__areas-header">
            <p className="type-eyebrow type-eyebrow--wide">{content.areas.eyebrow}</p>
            <span className="treatments-page__areas-rule" aria-hidden="true" />
            <h2 className="type-section-title" id="treatments-areas-title">{content.areas.title}</h2>
            <p className="type-body type-muted">{content.areas.description}</p>
          </header>

          <div className="treatments-page__grid">
            {clinicalAreas.items.map((area) => (
              <InformationCard
                className="treatments-page__card"
                key={area.slug}
                icon={area.icon.src}
                iconAlt={area.imageAlt}
                title={area.title}
                description={area.description}
                linkLabel={clinicalAreas.linkLabel}
                to={area.to}
              />
            ))}
          </div>
        </SectionContainer>
      </Section>

      <Section className="treatments-page__booking" aria-labelledby="treatments-booking-title">
        <SectionContainer narrow>
          <h2 className="type-section-title" id="treatments-booking-title">{content.booking.title}</h2>
          <p className="type-body">{content.booking.description}</p>
          <Button to="/booking" variant="light" size="large">
            {content.booking.buttonLabel}
          </Button>
        </SectionContainer>
      </Section>
    </main>
  )
}
