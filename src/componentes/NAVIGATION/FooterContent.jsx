import { Link } from 'react-router-dom'
import siteConfig from '../../config/site.js'
import { useI18n } from '../../i18n/I18nContext.jsx'
import FooterSocialLinks from './FooterSocialLinks.jsx'
import './Footer.css'

export default function FooterContent({ socialsInAbout = false }) {
  const { t } = useI18n()
  const content = t.cta
  const footer = t.footer

  return (
    <div className="footer-content">
      <section className="footer-content__about" aria-label={footer.aboutLabel}>
        <Link className="footer-content__brand" to={siteConfig.routes.home} aria-label={t.navigation.homeLabel}>
          <strong>{t.navigation.brand}</strong>
          <small>{footer.specialty}</small>
        </Link>
        {socialsInAbout
          ? <FooterSocialLinks label={content.followLabel} />
          : <p className="type-small type-muted">{footer.description}</p>}
      </section>

      <nav className="footer-content__column" aria-label={footer.quickLinksLabel}>
        <h3 className="type-label type-uppercase">{footer.quickLinksLabel}</h3>
        <ul>{footer.quickLinks.map((link) => <li key={link.href}><Link to={link.href}>{link.label}</Link></li>)}</ul>
      </nav>

      <nav className="footer-content__column" aria-label={footer.treatmentsLabel}>
        <h3 className="type-label type-uppercase">{footer.treatmentsLabel}</h3>
        <ul>{footer.treatments.map((item) => <li key={item.slug}><Link to={`/treatments/${item.slug}`}>{item.label}</Link></li>)}</ul>
      </nav>

      <section className="footer-content__column footer-content__contact" aria-label={footer.contactsLabel}>
        <h3 className="type-label type-uppercase">{footer.contactsLabel}</h3>
        <address>
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          <a href={siteConfig.emailHref}>{siteConfig.email}</a>
          <p>{footer.address}</p>
          <p>{footer.schedule}</p>
        </address>
      </section>

      {!socialsInAbout && <FooterSocialLinks label={content.followLabel} />}
    </div>
  )
}
