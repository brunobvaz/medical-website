import { Section, SectionContainer } from '../../componentes/LAYOUT/index.js'
import { getFeedContent } from '../../data/homepage.js'
import { useI18n } from '../../i18n/I18nContext.jsx'
import FeedComparisons from './FeedComparisons.jsx'
import FeedFeaturedMedia from './FeedFeaturedMedia.jsx'
import FeedIntro from './FeedIntro.jsx'
import './FeedSection.css'

export default function FeedSection() {
  const { language } = useI18n()
  const content = getFeedContent(language)

  return (
    <Section className="feed-section" aria-labelledby="feed-title">
      <SectionContainer className="feed-section__layout">
        <FeedIntro content={content} />
        <FeedComparisons items={content.comparisons} labels={content.comparisonLabels} />
        <FeedFeaturedMedia media={content.featuredMedia} alt={content.imageAlt} />
        <p className="feed-section__disclaimer type-caption">{content.disclaimer}</p>
      </SectionContainer>
    </Section>
  )
}
