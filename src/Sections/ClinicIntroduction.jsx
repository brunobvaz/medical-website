import { useEffect, useRef, useState } from 'react'
import { Button } from '../componentes/ACTION/index.js'
import { Section } from '../componentes/LAYOUT/index.js'
import siteConfig from '../config/site.js'
import { clinicIntroductionMedia } from '../data/homepage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './ClinicIntroduction.css'

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SignatureMark = () => (
  <svg className="clinic-introduction__mark" aria-hidden="true" viewBox="0 0 36 36" fill="none">
    {Array.from({ length: 9 }, (_, index) => (
      <circle key={index} cx={6 + (index % 3) * 12} cy={6 + Math.floor(index / 3) * 12} r="2.4" fill="currentColor" />
    ))}
  </svg>
)

const SocialIcon = ({ id }) => {
  const paths = {
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></>,
    facebook: <path d="M14.5 8H17V4.5h-2.5c-3 0-5 1.9-5 5.2V12H7v3.5h2.5V22H13v-6.5h3L16.5 12H13V9.8c0-1.2.5-1.8 1.5-1.8Z" />,
    linkedin: <path d="M5 9v10M5 5.5v.1M10 19v-6c0-2.2 1.4-4 3.7-4 2.2 0 3.3 1.5 3.3 4v6M10 9v10" />,
  }

  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">{paths[id]}</svg>
}

export default function ClinicIntroduction() {
  const { t } = useI18n()
  const content = t.clinicIntroduction
  const portraitRef = useRef(null)
  const [showSocials, setShowSocials] = useState(false)

  useEffect(() => {
    const portrait = portraitRef.current
    if (!portrait) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowSocials(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: .35 })

    observer.observe(portrait)
    return () => observer.disconnect()
  }, [])

  return (
    <Section className="clinic-introduction" id="sobre" aria-labelledby="clinic-introduction-title">
      <div className="clinic-introduction__content">
        <h2 className="type-section-title" id="clinic-introduction-title">{content.title}</h2>
        <p className="clinic-introduction__description type-body">{content.description}</p>
        <Button className="clinic-introduction__button" to="/about" variant="primary" size="small" trailingIcon={<ArrowIcon />}>
          {content.buttonLabel}
        </Button>
      </div>

      <div className="clinic-introduction__portrait" ref={portraitRef}>
        <img src={clinicIntroductionMedia} alt={content.doctorAlt} />
        <nav className={`clinic-introduction__social-ribbon ${showSocials ? 'clinic-introduction__social-ribbon--visible' : ''}`} aria-label={t.cta.followLabel}>
          {siteConfig.socialLinks.map(({ id, label, href }) => (
            <a href={href} key={id} target="_blank" rel="noreferrer" aria-label={label} title={label}>
              <SocialIcon id={id} />
            </a>
          ))}
        </nav>
      </div>

      <figure className="clinic-introduction__quote">
        <SignatureMark />
        <blockquote className="type-small type-uppercase">{content.quote}</blockquote>
        <figcaption className="type-caption type-uppercase">{content.doctorName}</figcaption>
      </figure>
    </Section>
  )
}
