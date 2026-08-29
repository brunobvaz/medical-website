export default function SectionHeader({
  eyebrow,
  eyebrowRule = false,
  title,
  description,
  titleId,
  layout = 'stacked',
  descriptionSize = 'body',
  className = '',
}) {
  const classes = [
    'section-header',
    `section-header--${layout}`,
    className,
  ].filter(Boolean).join(' ')
  const eyebrowClasses = [
    'section-header__eyebrow',
    'type-eyebrow',
    eyebrowRule && 'type-eyebrow--ruled',
  ].filter(Boolean).join(' ')

  return (
    <header className={classes}>
      <div className="section-header__title-group">
        {eyebrow && <p className={eyebrowClasses}>{eyebrow}</p>}
        <h2 className="type-section-title" id={titleId}>{title}</h2>
      </div>
      {description && <p className={`section-header__description type-${descriptionSize} type-muted`}>{description}</p>}
    </header>
  )
}
