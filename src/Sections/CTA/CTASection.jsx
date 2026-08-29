import { FooterContent } from '../../componentes/NAVIGATION/index.js'
import { Section } from '../../componentes/LAYOUT/index.js'
import siteConfig from '../../config/site.js'
import { getCTAContent } from '../../data/homepage.js'
import { useI18n } from '../../i18n/I18nContext.jsx'
import CTAContactForm from './CTAContactForm.jsx'
import CTAFormPanel from './CTAFormPanel.jsx'
import './CTASection.css'

export default function CTASection() {
  const { language } = useI18n()
  const content = getCTAContent(language)

  return (
    <Section className="cta-section" aria-labelledby="cta-title">
      <CTAFormPanel background={content.background}>
        <CTAContactForm action={siteConfig.routes.booking} content={content} />
      </CTAFormPanel>
      <FooterContent />
    </Section>
  )
}
