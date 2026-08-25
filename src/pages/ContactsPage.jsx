import consultationRoom from '../assets/optimized/consultation-room.jpg'
import { Section } from '../componentes/LAYOUT/index.js'
import siteConfig from '../config/site.js'
import { getContactPage } from '../data/contactPage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './ContactsPage.css'

const PhoneIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7.1 3.5 4.4 5.2c-1.1.7-1.4 2.1-.8 3.2 2.7 5.2 6.8 9.3 12 12 .9.5 2.1.2 2.8-.6l2-2.5-4.3-3-1.9 1.8c-2.7-1.3-5-3.6-6.3-6.3l1.8-1.9-2.6-4.4Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

const EmailIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" stroke="currentColor" strokeWidth="1.4" /><path d="m4 6 8 7 8-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

const LocationIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" stroke="currentColor" strokeWidth="1.4" /><circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.4" /></svg>
)

export default function ContactsPage() {
  const { language } = useI18n()
  const content = getContactPage(language)

  return (
    <main>
      <Section className="contacts-page" aria-labelledby="contacts-title">
        <div className="contacts-page__content">
          <div className="contacts-page__inner">
            <p className="type-eyebrow">{content.eyebrow}</p>
            <h1 className="type-page-title" id="contacts-title">{content.title}</h1>
            <p className="contacts-page__introduction type-body type-muted">{content.introduction}</p>

            <address className="contacts-page__details">
              <div className="contacts-page__detail">
                <span className="contacts-page__icon"><PhoneIcon /></span>
                <div>
                  <h2 className="type-label">{content.phoneLabel}</h2>
                  <a className="type-small" href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                </div>
              </div>

              <div className="contacts-page__detail">
                <span className="contacts-page__icon"><EmailIcon /></span>
                <div>
                  <h2 className="type-label">{content.emailLabel}</h2>
                  <a className="type-small" href={siteConfig.emailHref}>{siteConfig.email}</a>
                </div>
              </div>

              <div className="contacts-page__detail">
                <span className="contacts-page__icon"><LocationIcon /></span>
                <div>
                  <h2 className="type-label">{content.locationsLabel}</h2>
                  <div className="contacts-page__locations">
                    {content.locations.map((location) => (
                      <section key={location.name}>
                        <h3 className="type-label">{location.name}</h3>
                        <p className="type-small type-muted">{location.address}</p>
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            </address>
          </div>
        </div>

        <figure className="contacts-page__image">
          <img src={consultationRoom} alt={content.imageAlt} />
        </figure>
      </Section>
    </main>
  )
}
