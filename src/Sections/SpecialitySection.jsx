import specialityImage from '../assets/speciality.png'
import identityMark from '../assets/icons/idsite_gold.png'
import { Section } from '../componentes/LAYOUT/index.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './SpecialitySection.css'

export default function SpecialitySection() {
  const { t } = useI18n()
  const content = t.speciality

  return (
    <Section className="speciality-section" aria-labelledby="speciality-title">
      <div className="speciality-section__content">
        <p className="speciality-section__eyebrow type-eyebrow">{content.eyebrow}</p>
        <span className="speciality-section__heading-rule" aria-hidden="true" />

        <h2 id="speciality-title">
          <span>{content.titleLineOne}</span>
          <span>{content.titleLineTwo} <em>{content.titleAccent}</em></span>
        </h2>

        <p className="speciality-section__description">{content.paragraphs[0]}</p>

        <div className="speciality-section__callout">
          <img src={identityMark} alt="" />
          <span aria-hidden="true" />
          <p>{content.paragraphs[1]}</p>
        </div>
      </div>

      <figure className="speciality-section__image">
        <img src={specialityImage} alt={content.imageAlt} loading="lazy" />
      </figure>
    </Section>
  )
}
