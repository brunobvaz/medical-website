import { useState } from 'react'
import { Link } from 'react-router-dom'
import identityMark from '../assets/optimized/identity-mark.webp'
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
          <img className="clinical-areas-section__identity" src={identityMark} width="760" height="380" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        </header>

        <div className="clinical-areas-section__cards">
          {content.items.map((area, index) => (
            <article
              className={`clinical-areas-section__card${activeArea === index ? ' is-active' : ''}`}
              key={area.slug}
              onFocusCapture={(event) => {
                if (event.target.closest('a')) setActiveArea(index)
              }}
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse') setActiveArea(index)
              }}
            >
              {activeArea === index && (
                <picture className="clinical-areas-section__cover-media" aria-hidden="true">
                  <source media="(max-width: 600px)" srcSet={`${area.coverMobileImage} 640w`} sizes="calc(100vw - 2rem)" />
                  <img
                    className="clinical-areas-section__cover"
                    src={area.coverImage}
                    srcSet={`${area.coverImage} 1200w`}
                    sizes="(max-width: 600px) calc(100vw - 2rem), (max-width: 900px) 50vw, 36vw"
                    width={area.coverWidth}
                    height={area.coverHeight}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              )}
              <span className="clinical-areas-section__shade" aria-hidden="true" />
              <span className="clinical-areas-section__card-number">{String(index + 1).padStart(2, '0')}</span>
              <img
                className="clinical-areas-section__card-icon"
                src={area.image}
                width={area.imageWidth}
                height={area.imageHeight}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
              <div className="clinical-areas-section__card-copy">
                <h3>
                  <button
                    className="clinical-areas-section__card-toggle"
                    type="button"
                    aria-expanded={activeArea === index}
                    aria-controls={`clinical-area-description-${area.slug}`}
                    aria-label={`${activeArea === index ? content.collapseLabel : content.expandLabel}: ${area.title}`}
                    onClick={() => setActiveArea((currentArea) => currentArea === index ? null : index)}
                  >
                    <span>{area.title}</span>
                    <span className="clinical-areas-section__card-indicator" aria-hidden="true">
                      {activeArea === index ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                <p id={`clinical-area-description-${area.slug}`} hidden={activeArea !== index}>{area.description}</p>
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
