export default function PositioningPillars({ icons, pillars }) {
  return (
    <ul className="positioning-section__pillars">
      {pillars.map((pillar) => {
        const icon = icons[pillar.id]

        return (
          <li key={pillar.id}>
            <img
              className="positioning-section__pillar-icon"
              src={icon.src}
              width={icon.width}
              height={icon.height}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <h3 className="type-label type-uppercase">{pillar.title}</h3>
            <span className="positioning-section__pillar-rule" aria-hidden="true" />
            <p className="type-small type-muted">{pillar.description}</p>
          </li>
        )
      })}
    </ul>
  )
}
