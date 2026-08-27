import { Button } from '../componentes/ACTION/index.js'
import { Section } from '../componentes/LAYOUT/index.js'
import identityMark from '../assets/optimized/identity-mark.webp'
import signatureImage from '../assets/optimized/signature.webp'
import { clinicIntroductionMedia } from '../data/homepage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './ClinicIntroduction.css'

export default function ClinicIntroduction() {
  const { t } = useI18n()
  const content = t.clinicIntroduction

  return (
    <Section className="clinic-introduction" id="sobre" aria-labelledby="clinic-introduction-title">
      <div className="clinic-introduction__inner">
        <article className="clinic-introduction__profile">
          <p className="clinic-introduction__eyebrow type-eyebrow">{content.eyebrow}</p>
          <h2 id="clinic-introduction-title">
            {content.titleLines.map((line) => <span key={line}>{line}</span>)}
            <span>{content.titleFinal} <em>{content.titleAccent}</em></span>
          </h2>
          <p className="clinic-introduction__description">{content.description}</p>
          <span className="clinic-introduction__profile-rule" aria-hidden="true" />
          <ul className="clinic-introduction__principles" aria-label={content.principlesLabel}>
            {content.principles.map((principle) => <li key={principle}>{principle}</li>)}
          </ul>
          <Button className="clinic-introduction__button" to="/about" variant="primary" size="small">
            {content.buttonLabel} <span aria-hidden="true">→</span>
          </Button>
        </article>

        <figure className="clinic-introduction__portrait">
          <picture>
            <source
              media="(max-width: 860px)"
              srcSet={`${clinicIntroductionMedia.mobile} 720w`}
              sizes="calc(100vw - 2rem)"
            />
            <img
              src={clinicIntroductionMedia.desktop}
              srcSet={`${clinicIntroductionMedia.desktop} 1498w`}
              sizes="(max-width: 860px) calc(100vw - 2rem), 32vw"
              width="1498"
              height="1050"
              alt={content.doctorAlt}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </figure>

        <aside className="clinic-introduction__manifesto" aria-label={content.approachLabel}>
          <img className="clinic-introduction__identity-mark" src={identityMark} width="760" height="380" alt="" loading="lazy" decoding="async" />
          <span className="clinic-introduction__manifesto-rule" aria-hidden="true" />
          <blockquote>“{content.quote}”</blockquote>
          <img className="clinic-introduction__signature-image" src={signatureImage} width="560" height="187" alt="" loading="lazy" decoding="async" />
          <strong className="clinic-introduction__doctor-name">{content.doctorName}</strong>
          <span className="clinic-introduction__doctor-role">{content.doctorRole}</span>
        </aside>
      </div>
    </Section>
  )
}
