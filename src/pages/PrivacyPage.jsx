import LegalDocumentPage from '../componentes/LAYOUT/LegalDocumentPage.jsx'
import { getPrivacyPage } from '../data/privacyPage.js'
import { useI18n } from '../i18n/I18nContext.jsx'

export default function PrivacyPage() {
  const { language } = useI18n()
  return <LegalDocumentPage content={getPrivacyPage(language)} titleId="privacy-title" />
}
