import { Section } from '../../componentes/LAYOUT/index.js'
import { specialityMedia } from '../../data/homepage.js'
import { useI18n } from '../../i18n/I18nContext.jsx'
import SpecialityContent from './SpecialityContent.jsx'
import SpecialityMedia from './SpecialityMedia.jsx'
import './SpecialitySection.css'

export default function SpecialitySection() {
  const { t } = useI18n()
  const content = t.speciality

  return (
    <Section className="speciality-section" aria-labelledby="speciality-title">
      <SpecialityContent content={content} calloutMedia={specialityMedia.identityMark} />
      <SpecialityMedia media={specialityMedia.mainImage} alt={content.imageAlt} />
    </Section>
  )
}
