import { Section, SectionContainer, SectionHeader } from '../../componentes/LAYOUT/index.js'
import { getFAQContent } from '../../data/homepage.js'
import { useI18n } from '../../i18n/I18nContext.jsx'
import FAQList from './FAQList.jsx'
import useFAQAccordion from './useFAQAccordion.js'
import './FAQSection.css'

export default function FAQSection() {
  const { language } = useI18n()
  const content = getFAQContent(language)
  const accordion = useFAQAccordion(content.items)

  return (
    <Section className="faq-section" id="faq" aria-labelledby="faq-title">
      <SectionContainer className="faq-section__inner">
        <SectionHeader
          className="faq-section__heading"
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.introduction}
          descriptionSize="body-lg"
          titleId="faq-title"
        />
        <FAQList accordion={accordion} items={content.items} />
      </SectionContainer>
    </Section>
  )
}
