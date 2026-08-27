import specialityImage from '../assets/optimized/speciality.webp'
import specialityMobileImage from '../assets/optimized/speciality-mobile.webp'
import identityMark from '../assets/optimized/speciality-identity-mark.webp'
import { Section } from '../componentes/LAYOUT/index.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './SpecialitySection.css'

export default function SpecialitySection() {
  const { t } = useI18n()
  const content = t.speciality
  const description = content.description ?? content.paragraphs?.[0] ?? ''
  const callout = content.callout ?? content.paragraphs?.[1] ?? ''

  return (
    <Section className="speciality-section" aria-labelledby="speciality-title">
      <div className="speciality-section__content">
        <p className="speciality-section__eyebrow type-eyebrow">{content.eyebrow}</p>
        <span className="speciality-section__heading-rule" aria-hidden="true" />

        <h2 id="speciality-title">
          <span>{content.titleLineOne}</span>
          <span>{content.titleLineTwo} <em>{content.titleAccent}</em></span>
        </h2>

        <p className="speciality-section__description">{description}</p>

        <div className="speciality-section__callout">
          <img src={identityMark} width="192" height="192" alt="" loading="lazy" decoding="async" />
          <span aria-hidden="true" />
          <p>{callout}</p>
        </div>
      </div>

      <figure className="speciality-section__media">
        <picture className="speciality-section__image-frame">
          <source media="(max-width: 840px)" srcSet={`${specialityMobileImage} 720w`} sizes="calc(100vw - 2rem)" />
          <img
            className="speciality-section__image"
            src={specialityImage}
            srcSet={`${specialityImage} 1024w`}
            sizes="(max-width: 840px) calc(100vw - 2rem), 44vw"
            width="1024"
            height="1536"
            alt={content.imageAlt}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </figure>
    </Section>
  )
}
