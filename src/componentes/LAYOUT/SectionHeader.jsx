export default function SectionHeader({
  eyebrow,
  title,
  description,
  titleId,
  layout = 'stacked',
  className = '',
}) {
  const classes = [
    'section-header',
    `section-header--${layout}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <header className={classes}>
      <div className="section-header__title-group">
        {eyebrow && <p className="section-header__eyebrow type-eyebrow">{eyebrow}</p>}
        <h2 className="type-section-title" id={titleId}>{title}</h2>
      </div>
      {description && <p className="section-header__description type-body type-muted">{description}</p>}
    </header>
  )
}
