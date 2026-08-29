import { Button } from '../../componentes/ACTION/index.js'
import { SectionHeader } from '../../componentes/LAYOUT/index.js'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M14 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function FeedIntro({ content }) {
  return (
    <div className="feed-section__intro">
      <SectionHeader
        className="feed-section__heading"
        eyebrow={content.eyebrow}
        eyebrowRule
        title={content.title}
        description={content.description}
        descriptionSize="body-lg"
        titleId="feed-title"
      />
      <div className="feed-section__action">
        <Button to="/results" variant="primary" size="small" trailingIcon={<ArrowIcon />}>
          {content.buttonLabel}
        </Button>
      </div>
    </div>
  )
}
