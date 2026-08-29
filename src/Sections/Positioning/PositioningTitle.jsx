function TitleBlock({ accent, primary }) {
  return (
    <span className="positioning-section__title-block" aria-hidden="true">
      <span>{primary}</span>
      <em>{accent}</em>
    </span>
  )
}

export default function PositioningTitle({ accessibleLabel, title }) {
  return (
    <h2
      className="positioning-section__title type-section-title"
      id="positioning-title"
      aria-label={accessibleLabel}
    >
      <TitleBlock {...title.left} />
      <span className="positioning-section__cross" aria-hidden="true" />
      <TitleBlock {...title.right} />
    </h2>
  )
}
