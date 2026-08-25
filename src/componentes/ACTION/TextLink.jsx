import './action.css'
import { Link } from 'react-router-dom'

export default function TextLink({
  children,
  href,
  to,
  variant = 'default',
  leadingIcon,
  trailingIcon,
  external = false,
  className = '',
  ...props
}) {
  const Component = to ? Link : 'a'

  return (
    <Component
      className={`ui-text-link type-small ui-text-link--${variant} ${className}`.trim()}
      href={href}
      to={to}
      rel={external ? 'noreferrer' : undefined}
      target={external ? '_blank' : undefined}
      {...props}
    >
      {leadingIcon && <span className="ui-action__icon">{leadingIcon}</span>}
      <span>{children}</span>
      {trailingIcon && <span className="ui-action__icon">{trailingIcon}</span>}
    </Component>
  )
}
