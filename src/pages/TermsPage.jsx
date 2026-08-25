import LegalDocumentPage from '../componentes/LAYOUT/LegalDocumentPage.jsx'
import { getTermsPage } from '../data/termsPage.js'
import { useI18n } from '../i18n/I18nContext.jsx'

export default function TermsPage() {
  const { language } = useI18n()
  return <LegalDocumentPage content={getTermsPage(language)} titleId="terms-title" />
}
