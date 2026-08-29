import { SocialLink } from '../ACTION/index.js'
import siteConfig from '../../config/site.js'
import socialIcons from './socialIcons.jsx'

export default function FooterSocialLinks({ label }) {
  return (
    <section className="footer-content__socials" aria-label={label}>
      <h3 className="type-label type-uppercase">{label}</h3>
      <div>
        {siteConfig.socialLinks.map(({ id, label: socialLabel, href }) => (
          <SocialLink
            className="footer-content__social-link"
            href={href}
            icon={socialIcons[id]}
            key={id}
            label={socialLabel}
          />
        ))}
      </div>
    </section>
  )
}
