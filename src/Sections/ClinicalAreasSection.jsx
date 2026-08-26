import { Link } from 'react-router-dom'
import identityMark from '../assets/icons/igsite_gold_2x.png'
import { Section, SectionContainer } from '../componentes/LAYOUT/index.js'
import { getClinicalAreas } from '../data/homepage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './ClinicalAreasSection.css'

export default function ClinicalAreasSection() {
  const { language } = useI18n()
  const content = getClinicalAreas(language)

  return (
    <Section className="clinical-areas-section" id="areas-clinicas" aria-labelledby="clinical-areas-title">
      <SectionContainer>
        <header className="clinical-areas-section__heading">
          <div className="clinical-areas-section__heading-copy">
            <p className="clinical-areas-section__eyebrow type-eyebrow">{content.title}</p>
            <span className="clinical-areas-section__rule" aria-hidden="true" />
            <h2 id="clinical-areas-title">
              <span>{content.headingLineOne}</span>
              <em>{content.headingLineTwo}</em>
            </h2>
            <p className="clinical-areas-section__introduction">{content.introduction}</p>
          </div>
          <img className="clinical-areas-section__identity" src={identityMark} alt="" />
        </header>

        <ol className="clinical-areas-section__list">
          {content.items.map((area, index) => (
            <li key={area.slug}>
              <span className="clinical-areas-section__number">{String(index + 1).padStart(2, '0')}</span>
              <span className="clinical-areas-section__divider" aria-hidden="true" />
              <div className="clinical-areas-section__item-copy">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
              <Link className="clinical-areas-section__link" to={area.to}>
                <span>{content.linkLabel}</span><span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ol>
      </SectionContainer>
    </Section>
  )
}
