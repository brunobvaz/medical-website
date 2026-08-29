import { useState } from 'react'
import { Button } from '../../componentes/ACTION/index.js'
import { Section, SectionContainer } from '../../componentes/LAYOUT/index.js'
import { clinicalAreasSectionMedia, getClinicalAreas } from '../../data/homepage.js'
import { useI18n } from '../../i18n/I18nContext.jsx'
import ClinicalAreasGrid from './ClinicalAreasGrid.jsx'
import ClinicalAreasHeader from './ClinicalAreasHeader.jsx'
import './ClinicalAreasSection.css'

export default function ClinicalAreasSection() {
  const { language } = useI18n()
  const content = getClinicalAreas(language)
  const [activeAreaSlug, setActiveAreaSlug] = useState(content.items[0]?.slug ?? null)

  const toggleArea = (slug) => {
    setActiveAreaSlug((currentSlug) => currentSlug === slug ? null : slug)
  }

  return (
    <Section className="clinical-areas-section" id="areas-clinicas" aria-labelledby="clinical-areas-title">
      <SectionContainer>
        <ClinicalAreasHeader
          content={content}
          identityMedia={clinicalAreasSectionMedia.identityMark}
        />
        <ClinicalAreasGrid
          activeAreaSlug={activeAreaSlug}
          areas={content.items}
          labels={content}
          onActivate={setActiveAreaSlug}
          onToggle={toggleArea}
        />
        <div className="clinical-areas-section__footer">
          <Button
            className="clinical-areas-section__all"
            to="/treatments"
            variant="primary"
            size="small"
            trailingIcon={<span aria-hidden="true">→</span>}
          >
            {content.allServicesLabel}
          </Button>
        </div>
      </SectionContainer>
    </Section>
  )
}
