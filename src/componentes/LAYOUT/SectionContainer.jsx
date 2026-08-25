export default function SectionContainer({ as: Component = 'div', narrow = false, className = '', children, ...props }) {
  const classes = ['section-container', narrow ? 'section-container--narrow' : '', className].filter(Boolean).join(' ')

  return <Component className={classes} {...props}>{children}</Component>
}
