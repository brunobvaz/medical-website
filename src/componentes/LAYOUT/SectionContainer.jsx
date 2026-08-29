export default function SectionContainer({ as: Component = 'div', narrow = false, size = 'default', className = '', children, ...props }) {
  const resolvedSize = narrow ? 'narrow' : size
  const classes = ['section-container', `section-container--${resolvedSize}`, className].filter(Boolean).join(' ')

  return <Component className={classes} {...props}>{children}</Component>
}
