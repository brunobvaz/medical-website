import { Button } from '../componentes/ACTION/index.js'
import { Section } from '../componentes/LAYOUT/index.js'
import { clinicIntroductionMedia } from '../data/homepage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './ClinicIntroduction.css'

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SignatureMark = () => (
  <svg className="clinic-introduction__mark" aria-hidden="true" viewBox="0 0 36 36" fill="none">
    {Array.from({ length: 9 }, (_, index) => (
      <circle key={index} cx={6 + (index % 3) * 12} cy={6 + Math.floor(index / 3) * 12} r="2.4" fill="currentColor" />
    ))}
  </svg>
)

export default function ClinicIntroduction() {
  const { t } = useI18n()
  const content = t.clinicIntroduction

  return (
    <Section className="clinic-introduction" id="sobre" aria-labelledby="clinic-introduction-title">
      <div className="clinic-introduction__content">
        <h2 className="type-section-title" id="clinic-introduction-title">{content.title}</h2>
        <p className="clinic-introduction__description type-body">{content.description}</p>
        <Button className="clinic-introduction__button" to="/about" variant="primary" size="small" trailingIcon={<ArrowIcon />}>
          {content.buttonLabel}
        </Button>
      </div>

      <div className="clinic-introduction__portrait">
        <img src={clinicIntroductionMedia} alt={content.doctorAlt} />
      </div>

      <figure className="clinic-introduction__quote">
        <SignatureMark />
        <blockquote className="type-small type-uppercase">{content.quote}</blockquote>
        <figcaption className="type-caption type-uppercase">{content.doctorName}</figcaption>
      </figure>
    </Section>
  )
}
