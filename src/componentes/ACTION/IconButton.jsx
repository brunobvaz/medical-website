import './action.css'

export default function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'medium',
  href,
  className = '',
  type = 'button',
  ...props
}) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      aria-label={label}
      className={`ui-icon-button ui-icon-button--${variant} ui-icon-button--${size} ${className}`.trim()}
      href={href}
      title={label}
      type={href ? undefined : type}
      {...props}
    >
      {icon}
    </Component>
  )
}
