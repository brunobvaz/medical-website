import { Section } from '../../componentes/LAYOUT/index.js'
import { clinicIntroductionMedia } from '../../data/homepage.js'
import { useI18n } from '../../i18n/I18nContext.jsx'
import ClinicManifesto from './ClinicManifesto.jsx'
import ClinicPortrait from './ClinicPortrait.jsx'
import ClinicProfile from './ClinicProfile.jsx'
import './ClinicIntroduction.css'

export default function ClinicIntroduction() {
  const { t } = useI18n()
  const content = t.clinicIntroduction

  return (
    <Section className="clinic-introduction" id="sobre" aria-labelledby="clinic-introduction-title">
      <div className="clinic-introduction__inner">
        <ClinicProfile content={content} />
        <ClinicPortrait media={clinicIntroductionMedia.portrait} alt={content.doctorAlt} />
        <ClinicManifesto content={content} media={clinicIntroductionMedia} />
      </div>
    </Section>
  )
}
