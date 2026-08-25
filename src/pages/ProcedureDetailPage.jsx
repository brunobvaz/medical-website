import { useParams } from 'react-router-dom'
import { Button } from '../componentes/ACTION/index.js'
import { Section, SectionContainer } from '../componentes/LAYOUT/index.js'
import { Breadcrumbs, Tabs } from '../componentes/NAVIGATION/index.js'
import { getProcedureDetail } from '../data/treatmentDetails.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './ProcedureDetailPage.css'

export default function ProcedureDetailPage() {
  const { areaSlug, procedureSlug } = useParams()
  const { language } = useI18n()
  const content = getProcedureDetail(areaSlug, procedureSlug, language)

  if (!content) return <main className="blank-page" aria-label="Procedure" />

  const treatmentImage = (
    <figure className="procedure-detail__image">
      <img src={content.heroImage} alt={content.heroAlt} />
    </figure>
  )

  return (
    <main className="procedure-detail">
      <Section className="procedure-detail__hero" aria-labelledby="procedure-title">
        <img src={content.heroImage} alt="" />
        <div className="procedure-detail__hero-overlay" aria-hidden="true" />
        <SectionContainer className="procedure-detail__hero-content">
          <Breadcrumbs items={content.breadcrumbs} ariaLabel={content.breadcrumbsLabel} />
          <h1 className="type-page-title" id="procedure-title">{content.procedure.title}</h1>
          <p className="type-body">{content.procedure.description}</p>
        </SectionContainer>
      </Section>

      <Section className="procedure-detail__information">
        <SectionContainer>
          <Tabs items={content.tabs} ariaLabel={content.tabsLabel} aside={treatmentImage} />
          <Button className="procedure-detail__booking" to="/booking" variant="secondary">
            {content.bookLabel}
          </Button>
        </SectionContainer>
      </Section>
    </main>
  )
}
