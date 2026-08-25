import './action.css'
import { Link } from 'react-router-dom'

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  href,
  to,
  className = '',
  type = 'button',
  ...props
}) {
  const Component = to ? Link : href ? 'a' : 'button'
  const classes = [
    'ui-button type-action',
    `ui-button--${variant}`,
    `ui-button--${size}`,
    fullWidth ? 'ui-button--full' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <Component className={classes} href={href} to={to} type={href || to ? undefined : type} {...props}>
      {leadingIcon && <span className="ui-action__icon">{leadingIcon}</span>}
      <span>{children}</span>
      {trailingIcon && <span className="ui-action__icon">{trailingIcon}</span>}
    </Component>
  )
}
