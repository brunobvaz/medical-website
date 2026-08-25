import { Button } from '../componentes/ACTION/index.js'
import { Section, SectionContainer, SectionHeader } from '../componentes/LAYOUT/index.js'
import { feedMedia } from '../data/homepage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './FeedSection.css'

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function FeedSection() {
  const { t } = useI18n()
  const content = t.feed

  return (
    <Section className="feed-section" aria-labelledby="feed-title">
      <SectionContainer className="feed-section__layout">
        <div className="feed-section__intro">
          <SectionHeader className="feed-section__heading" eyebrow={content.eyebrow} title={content.title} description={content.description} titleId="feed-title" />
          <div className="feed-section__action">
            <Button to="/treatments" variant="primary" size="small" trailingIcon={<ArrowIcon />}>
              {content.buttonLabel}
            </Button>
          </div>

          <figure className="feed-section__featured">
            <img src={feedMedia.featured} alt={`${content.imageAlt} 1`} loading="lazy" />
          </figure>
        </div>

        <div className="feed-section__grid">
          {feedMedia.gallery.map((image, index) => (
            <figure className="feed-section__item" key={image}>
              <img src={image} alt={`${content.imageAlt} ${index + 2}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </SectionContainer>
    </Section>
  )
}
