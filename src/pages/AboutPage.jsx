import consultationRoom from '../assets/optimized/consultation-room.jpg'
import aboutPhoto from '../assets/optimized/about-office.jpg'
import doctorPortrait from '../assets/optimized/doctor.jpg'
import { Section, SectionContainer } from '../componentes/LAYOUT/index.js'
import { getAboutPage } from '../data/aboutPage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './AboutPage.css'

export default function AboutPage() {
  const { language } = useI18n()
  const content = getAboutPage(language)

  return (
    <main className="about-page">
      <Section className="about-page__hero" aria-labelledby="about-title">
        <div className="about-page__hero-content">
          <div>
            <p className="type-eyebrow">{content.eyebrow}</p>
            <h1 className="type-page-title" id="about-title">{content.title}</h1>
            <p className="type-body type-muted">{content.introduction}</p>
          </div>
        </div>

        <figure className="about-page__portrait">
          <img src={doctorPortrait} alt={content.portraitAlt} />
        </figure>
      </Section>


      <Section className="about-page__presentation" aria-labelledby="presentation-title">
        <SectionContainer className="about-page__presentation-grid">
          <div className="about-page__presentation-copy">
            <h2 className="type-section-title" id="presentation-title">{content.presentationTitle}</h2>
            <div className="about-page__presentation-text">
              {content.presentationParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <figure className="about-page__presentation-photo">
            <img src={aboutPhoto} alt={content.presentationAlt} loading="lazy" />
          </figure>
        </SectionContainer>
      </Section>




      <Section className="about-page__journey" aria-labelledby="journey-title">
        <SectionContainer className="about-page__container">
          <header className="about-page__section-header">
            <h2 className="type-section-title" id="journey-title">{content.journeyTitle}</h2>
            <span aria-hidden="true" />
          </header>
          <ol className="about-page__timeline">
            {content.journey.map((item) => (
              <li key={item.label}>
                <p className="about-page__timeline-label">{item.label}</p>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </li>
            ))}
          </ol>
        </SectionContainer>
      </Section>

      <Section className="about-page__specialty" aria-labelledby="specialty-title">
        <SectionContainer className="about-page__specialty-grid about-page__container">
          <div className="about-page__specialty-copy">
            <p className="type-eyebrow">{content.specialtyEyebrow}</p>
            <h2 className="type-section-title" id="specialty-title">{content.specialtyTitle}</h2>
            <span className="about-page__rule" aria-hidden="true" />
            <p className="type-body type-muted">{content.specialtyIntroduction}</p>
            <ul className="about-page__focus-list">
              {content.focusAreas.map((area) => <li key={area}>{area}</li>)}
            </ul>
          </div>
          <figure className="about-page__office">
            <img src={consultationRoom} alt={content.officeAlt} loading="lazy" />
          </figure>
        </SectionContainer>
      </Section>

      <Section className="about-page__quote" aria-label={content.quoteLabel}>
        <blockquote>
          <span aria-hidden="true">“</span>
          <p>{content.quote}</p>
          <cite>{content.quoteAuthor}</cite>
        </blockquote>
      </Section>


    </main>
  )
}
