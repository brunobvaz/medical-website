import oculoplasticsImage from '../assets/optimized/oculoplastics.jpg'
import { Section } from '../componentes/LAYOUT/index.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './SpecialitySection.css'

const benefitMarks = ['◉', '✦', '⌁', '✓']

export default function SpecialitySection() {
  const { t } = useI18n()
  const content = t.speciality

  return (
    <Section className="speciality-section" aria-labelledby="speciality-title">
      <div className="speciality-section__content">
        <div className="speciality-section__intro">
          <p className="type-eyebrow">{content.eyebrow}</p>
          <h2 className="type-section-title" id="speciality-title">
            <span>{content.titleLineOne}</span>
            <span>{content.titleLineTwo}</span>
          </h2>
          <span className="speciality-section__rule" aria-hidden="true" />
          <div className="speciality-section__description type-body">
            {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>

        <ul className="speciality-section__benefits">
          {content.benefits.map((benefit, index) => (
            <li key={benefit}>
              <span className="speciality-section__benefit-mark" aria-hidden="true">{benefitMarks[index]}</span>
              <p>{benefit}</p>
            </li>
          ))}
        </ul>
      </div>

      <figure className="speciality-section__image">
        <img src={oculoplasticsImage} alt={content.imageAlt} loading="lazy" />
      </figure>
    </Section>
  )
}
