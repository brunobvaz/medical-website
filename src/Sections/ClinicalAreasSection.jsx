import { useState } from 'react'
import { Link } from 'react-router-dom'
import identityMark from '../assets/icons/igsite_gold_2x.png'
import { ArrowDownLink } from '../componentes/ACTION/index.js'
import { Section, SectionContainer } from '../componentes/LAYOUT/index.js'
import { getClinicalAreas } from '../data/homepage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './ClinicalAreasSection.css'

export default function ClinicalAreasSection() {
  const { language } = useI18n()
  const content = getClinicalAreas(language)
  const [activeArea, setActiveArea] = useState(0)

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
          <img className="clinical-areas-section__identity" src={identityMark} alt="" aria-hidden="true" />
        </header>

        <div className="clinical-areas-section__cards">
          {content.items.map((area, index) => (
            <article
              className={`clinical-areas-section__card${activeArea === index ? ' is-active' : ''}`}
              key={area.slug}
              onFocus={() => setActiveArea(index)}
              onMouseEnter={() => setActiveArea(index)}
            >
              <img className="clinical-areas-section__cover" src={area.coverImage} alt="" aria-hidden="true" />
              <span className="clinical-areas-section__shade" aria-hidden="true" />
              <span className="clinical-areas-section__card-number">{String(index + 1).padStart(2, '0')}</span>
              <img className="clinical-areas-section__card-icon" src={area.image} alt="" aria-hidden="true" />
              <div className="clinical-areas-section__card-copy">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
              <ArrowDownLink
                aria-label={`${content.linkLabel}: ${area.title}`}
                className="clinical-areas-section__card-link"
                to={area.to}
              >
                {content.linkLabel}
              </ArrowDownLink>
            </article>
          ))}
        </div>

        <div className="clinical-areas-section__footer">
          <Link className="clinical-areas-section__all" to="/treatments">
            <span>{content.allServicesLabel}</span><span aria-hidden="true">→</span>
          </Link>
        </div>
      </SectionContainer>
    </Section>
  )
}
