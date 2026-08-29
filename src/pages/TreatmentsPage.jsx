import oculoplasticsHero from '../assets/optimized/oculoplastics.jpg'
import { Button } from '../componentes/ACTION/index.js'
import { InformationCard } from '../componentes/CARDS/index.js'
import { Section, SectionContainer } from '../componentes/LAYOUT/index.js'
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
      <Section className="treatments-page__hero" aria-labelledby="treatments-title">
        <div className="treatments-page__hero-content">
          <p className="type-eyebrow type-eyebrow--wide">{content.hero.eyebrow}</p>
          <span className="treatments-page__hero-rule" aria-hidden="true" />
          <h1 className="type-page-title" id="treatments-title">{content.hero.title}</h1>
          <p className="type-body type-muted">{content.hero.description}</p>
        </div>

        <figure className="treatments-page__hero-media">
          <img
            className="treatments-page__hero-image"
            src={oculoplasticsHero}
            alt={content.hero.imageAlt}
            width="1122"
            height="1402"
            fetchPriority="high"
          />
          <span className="treatments-page__hero-overlay" aria-hidden="true" />
        </figure>
      </Section>

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
