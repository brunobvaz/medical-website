import eyelidsImage from '../assets/eye.png'
import functionIcon from '../assets/icons/positioning-function-icon.png'
import harmonyIcon from '../assets/icons/positioning-harmony-icon.png'
import precisionIcon from '../assets/icons/positioning-precision-icon.png'
import { Section } from '../componentes/LAYOUT/index.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './PositioningSection.css'

const pillarIcons = [functionIcon, precisionIcon, harmonyIcon]

const TitleBlock = ({ text }) => {
  const [primary, accent] = text.split('\n')

  return <span className="positioning-section__title-block"><span>{primary}</span><em>{accent}</em></span>
}

export default function PositioningSection() {
  const { t } = useI18n()
  const content = t.positioning

  return (
    <Section className="positioning-section" aria-labelledby="positioning-title">
      <img className="positioning-section__image" src={eyelidsImage} alt="" loading="lazy" />

      <div className="positioning-section__content">
        <p className="positioning-section__eyebrow type-eyebrow">{content.eyebrow}</p>

        <h2 className="positioning-section__title" id="positioning-title">
          <TitleBlock text={content.titleLeft} />
          <span className="positioning-section__cross" aria-hidden="true" />
          <TitleBlock text={content.titleRight} />
        </h2>

        <p className="positioning-section__introduction">
          {content.introduction.map((line) => <span key={line}>{line}</span>)}
        </p>
        <span className="positioning-section__divider" aria-hidden="true" />

        <ul className="positioning-section__pillars">
          {content.pillars.map((pillar, index) => (
            <li key={pillar.title}>
              <img className="positioning-section__pillar-icon" src={pillarIcons[index]} alt="" />
              <h3>{pillar.title}</h3>
              <span className="positioning-section__pillar-rule" aria-hidden="true" />
              <p>{pillar.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
