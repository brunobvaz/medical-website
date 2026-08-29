import { Section } from '../../componentes/LAYOUT/index.js'
import { positioningMedia } from '../../data/homepage.js'
import { useI18n } from '../../i18n/I18nContext.jsx'
import PositioningMedia from './PositioningMedia.jsx'
import PositioningPillars from './PositioningPillars.jsx'
import PositioningTitle from './PositioningTitle.jsx'
import './PositioningSection.css'

export default function PositioningSection() {
  const { t } = useI18n()
  const content = t.positioning

  return (
    <Section className="positioning-section" aria-labelledby="positioning-title">
      <PositioningMedia media={positioningMedia.background} />

      <div className="positioning-section__content">
        <p className="positioning-section__eyebrow type-eyebrow">{content.eyebrow}</p>
        <PositioningTitle title={content.title} accessibleLabel={content.titleLabel} />
        <p className="positioning-section__introduction type-body">
          {content.introduction.map((line) => <span key={line}>{line}</span>)}
        </p>
        <span className="positioning-section__divider" aria-hidden="true" />
        <PositioningPillars pillars={content.pillars} icons={positioningMedia.pillarIcons} />
      </div>
    </Section>
  )
}
