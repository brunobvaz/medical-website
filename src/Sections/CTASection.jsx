import { Link } from 'react-router-dom'
import { Button } from '../componentes/ACTION/index.js'
import { Input, Textarea } from '../componentes/FORMS/index.js'
import { Section } from '../componentes/LAYOUT/index.js'
import siteConfig from '../config/site.js'
import { ctaMedia } from '../data/homepage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './CTASection.css'

const Icon = ({ children }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    {children}
  </svg>
)

const socialIcons = {
  instagram: <Icon><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></Icon>,
  facebook: <Icon><path d="M14.5 8H17V4.5h-2.5c-3 0-5 1.9-5 5.2V12H7v3.5h2.5V22H13v-6.5h3L16.5 12H13V9.8c0-1.2.5-1.8 1.5-1.8Z" /></Icon>,
  linkedin: <Icon><path d="M5 9v10M5 5.5v.1M10 19v-6c0-2.2 1.4-4 3.7-4 2.2 0 3.3 1.5 3.3 4v6M10 9v10" /></Icon>,
}

const SocialLinks = ({ label }) => (
  <section className="cta-section__socials" aria-label="Social media">
    <h3 className="type-label type-uppercase">{label}</h3>
    <div>
      {siteConfig.socialLinks.map(({ id, label: socialLabel, href }) => (
        <a key={id} href={href} target="_blank" rel="noreferrer" aria-label={socialLabel}>{socialIcons[id]}</a>
      ))}
    </div>
  </section>
)

export function CTAFooterContent({ socialsInAbout = false }) {
  const { t } = useI18n()
  const content = t.cta
  const footer = t.footer

  return (
    <div className="cta-section__footer-content">
      <section className="cta-section__about" aria-label={footer.aboutLabel}>
        <Link className="cta-section__brand" to={siteConfig.routes.home} aria-label={t.navigation.homeLabel}>
          <strong>{t.navigation.brand}</strong>
          <small>{footer.specialty}</small>
        </Link>
        {socialsInAbout
          ? <SocialLinks label={content.followLabel} />
          : <p className="type-small type-muted">{footer.description}</p>}
      </section>

      <nav className="cta-section__column" aria-label={footer.quickLinksLabel}>
        <h3 className="type-label type-uppercase">{footer.quickLinksLabel}</h3>
        <ul>{footer.quickLinks.map((link) => <li key={link.href}><Link to={link.href}>{link.label}</Link></li>)}</ul>
      </nav>

      <nav className="cta-section__column" aria-label={footer.treatmentsLabel}>
        <h3 className="type-label type-uppercase">{footer.treatmentsLabel}</h3>
        <ul>{footer.treatments.map((item) => <li key={item.slug}><Link to={`/treatments/${item.slug}`}>{item.label}</Link></li>)}</ul>
      </nav>

      <section className="cta-section__column cta-section__contact" aria-label={footer.contactsLabel}>
        <h3 className="type-label type-uppercase">{footer.contactsLabel}</h3>
        <address>
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          <a href={siteConfig.emailHref}>{siteConfig.email}</a>
          <p>{footer.address}</p>
          <p>{footer.schedule}</p>
        </address>
      </section>

      {!socialsInAbout && <SocialLinks label={content.followLabel} />}
    </div>
  )
}

export default function CTASection() {
  const { t } = useI18n()
  const content = t.cta

  return (
    <Section className="cta-section" aria-labelledby="cta-title">
      <div className="cta-section__form-panel" style={{ '--cta-background': `url(${ctaMedia})` }}>
        <form className="cta-section__form" action={siteConfig.routes.booking}>
          <p className="type-eyebrow">{content.eyebrow}</p>
          <h2 className="type-section-title" id="cta-title">{content.title}</h2>
          <Input label={content.nameLabel} name="name" placeholder={content.namePlaceholder} autoComplete="name" required />
          <Input label={content.emailLabel} name="email" type="email" placeholder={content.emailPlaceholder} autoComplete="email" required />
          <Textarea label={content.messageLabel} name="message" placeholder={content.messagePlaceholder} rows={4} resize="none" required />
          <Button className="cta-section__submit" type="submit" variant="primary" size="small">
            {content.submitLabel}
          </Button>
        </form>
      </div>

      <CTAFooterContent />
    </Section>
  )
}
