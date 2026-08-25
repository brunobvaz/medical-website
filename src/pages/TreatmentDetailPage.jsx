import { useParams } from 'react-router-dom'
import { TextLink } from '../componentes/ACTION/index.js'
import { Section, SectionContainer } from '../componentes/LAYOUT/index.js'
import { getTreatmentDetail } from '../data/treatmentDetails.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './TreatmentDetailPage.css'

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function TreatmentDetailPage() {
  const { slug } = useParams()
  const { language } = useI18n()
  const content = getTreatmentDetail(slug, language)

  if (!content) return <main className="blank-page" aria-label="Treatment" />

  return (
    <main className={`treatment-detail treatment-detail--${content.slug}`}>
      <Section className="treatment-detail__hero" aria-labelledby={`${content.slug}-title`}>
        <img className="treatment-detail__hero-image" src={content.heroImage} alt={content.heroAlt} />
        <div className="treatment-detail__hero-overlay" aria-hidden="true" />
        <SectionContainer className="treatment-detail__hero-content">
          <p className="type-eyebrow">{content.eyebrow}</p>
          <h1 className="type-page-title" id={`${content.slug}-title`}>{content.title}</h1>
          <p className="type-body">{content.heroDescription}</p>
        </SectionContainer>
      </Section>

      <Section className="treatment-detail__content" aria-label={content.listLabel}>
        <SectionContainer narrow>
          <p className="treatment-detail__introduction type-body type-muted">{content.introduction}</p>
          <div className="treatment-detail__list">
            {content.items.map((item) => (
              <article className="treatment-detail__item" key={item.slug}>
                <div className="treatment-detail__thumbnail">
                  <img src={content.heroImage} alt="" style={{ objectPosition: item.imagePosition }} loading="lazy" />
                </div>
                <div className="treatment-detail__item-content">
                  <h2 className="type-card-title">{item.title}</h2>
                  <p className="type-small type-muted">{item.description}</p>
                  <TextLink to={`/treatments/${content.slug}/${item.slug}`} variant="accent" trailingIcon={<ArrowIcon />}>{content.linkLabel}</TextLink>
                </div>
              </article>
            ))}
          </div>
        </SectionContainer>
      </Section>
    </main>
  )
}
