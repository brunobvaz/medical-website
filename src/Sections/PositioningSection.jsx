import eyelidsImage from '../assets/optimized/positioning-eye.webp'
import eyelidsMobileImage from '../assets/optimized/positioning-eye-mobile.webp'
import functionIcon from '../assets/optimized/positioning-function-icon.webp'
import harmonyIcon from '../assets/optimized/positioning-harmony-icon.webp'
import precisionIcon from '../assets/optimized/positioning-precision-icon.webp'
import { Section } from '../componentes/LAYOUT/index.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './PositioningSection.css'

const pillarIcons = [functionIcon, precisionIcon, harmonyIcon]

const TitleBlock = ({ text }) => {
  const [primary = text, ...accentParts] = text.split('\n')
  const accent = accentParts.join(' ').trim()

  return (
    <span className="positioning-section__title-block">
      <span>{primary}</span>
      {accent && <em>{accent}</em>}
    </span>
  )
}

export default function PositioningSection() {
  const { t } = useI18n()
  const content = t.positioning

  return (
    <Section className="positioning-section" aria-labelledby="positioning-title">
      <div className="positioning-section__media" aria-hidden="true">
        <picture>
          <source media="(max-width: 820px)" srcSet={`${eyelidsMobileImage} 800w`} sizes="100vw" />
          <img
            className="positioning-section__image"
            src={eyelidsImage}
            srcSet={`${eyelidsImage} 1600w`}
            sizes="100vw"
            width="1600"
            height="551"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

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
              <img
                className="positioning-section__pillar-icon"
                src={pillarIcons[index]}
                width="192"
                height="192"
                alt=""
                loading="lazy"
                decoding="async"
              />
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
