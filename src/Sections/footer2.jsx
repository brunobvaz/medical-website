import { useI18n } from '../i18n/I18nContext.jsx'
import { Link } from 'react-router-dom'
import siteConfig from '../config/site.js'
import './Footer.css'

export default function Footer2() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer" id="contactos">
      <div className="site-footer__inner site-footer__inner--compact">
        <div className="site-footer__bottom">
          <p className="type-caption">© {currentYear} {t.footer.rights}</p>
          <div>
            <Link to={siteConfig.routes.privacy}>{t.footer.privacy}</Link>
            <Link to={siteConfig.routes.terms}>{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
