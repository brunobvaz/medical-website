import './action.css'

export default function IconButton({
  icon,
  label,
  variant = 'ghost',
  href,
  className = '',
  type = 'button',
  ...props
}) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      aria-label={label}
      className={`ui-icon-button ui-icon-button--${variant} ${className}`.trim()}
      href={href}
      title={label}
      type={href ? undefined : type}
      {...props}
    >
      {icon}
    </Component>
  )
}
