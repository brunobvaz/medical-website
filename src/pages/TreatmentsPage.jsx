import treatmentsHero from '../assets/optimized/treatments.png'
import treatmentsHeroMobile from '../assets/optimized/treatments_mobile.png'
import identityMark from '../assets/optimized/speciality-identity-mark.webp'
import { Button } from '../componentes/ACTION/index.js'
import { InformationCard } from '../componentes/CARDS/index.js'
import { PageHeader, Section, SectionContainer } from '../componentes/LAYOUT/index.js'
import { getClinicalAreas } from '../data/homepage.js'
import { getTreatmentsPage } from '../data/treatmentsPage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './TreatmentsPage.css'

const CalendarIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M7 3v3m10-3v3M4.5 9h15M6 5h12a2 2 0 0 1 2 2v12H4V7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 12h3v3H8z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

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

          <aside className="treatments-page__booking" aria-labelledby="treatments-booking-title">
            <div className="treatments-page__booking-icon" aria-hidden="true">
              <img src={identityMark} alt="" />
            </div>
            <div className="treatments-page__booking-copy">
              <h2 id="treatments-booking-title">{content.booking.title}</h2>
              <p className="type-small type-muted">{content.booking.description}</p>
            </div>
            <Button to="/booking" variant="primary" size="large" leadingIcon={<CalendarIcon />}>
              {content.booking.buttonLabel}
            </Button>
          </aside>
        </SectionContainer>
      </Section>
    </main>
  )
}
