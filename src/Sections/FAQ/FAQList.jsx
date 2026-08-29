import FAQItem from './FAQItem.jsx'

export default function FAQList({ items, accordion }) {
  return (
    <div className="faq-section__questions">
      {items.map((item, index) => (
        <FAQItem accordion={accordion} index={index} item={item} key={item.id} />
      ))}
    </div>
  )
}
