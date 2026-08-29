import { AfterBeforeCard } from '../../componentes/CARDS/index.js'

export default function FeedComparisons({ items, labels }) {
  return (
    <div className="feed-section__comparisons">
      {items.map((item, index) => (
        <AfterBeforeCard
          className="feed-section__comparison"
          key={item.id}
          title={item.title}
          beforeImage={item.beforeImage}
          beforeMobileImage={item.beforeMobileImage}
          afterImage={item.afterImage}
          afterMobileImage={item.afterMobileImage}
          imageWidth={item.imageWidth}
          imageHeight={item.imageHeight}
          beforeLabel={labels.beforeLabel}
          afterLabel={labels.afterLabel}
          beforeAlt={`${item.title}: ${labels.beforeLabel}`}
          afterAlt={`${item.title}: ${labels.afterLabel}`}
          sliderLabel={`${labels.sliderLabel}: ${item.title}`}
          sliderValueText={labels.sliderValueText}
          demoOnView
          demoDelay={index * 450}
        />
      ))}
    </div>
  )
}
