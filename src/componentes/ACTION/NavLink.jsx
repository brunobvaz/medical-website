import './action.css'
import { Link } from 'react-router-dom'

export default function NavLink({ children, href, to, active = false, className = '', ...props }) {
  const Component = to ? Link : 'a'

  return (
    <Component
      aria-current={active ? 'page' : undefined}
      className={`ui-nav-link type-nav ${active ? 'ui-nav-link--active' : ''} ${className}`.trim()}
      href={href}
      to={to}
      {...props}
    >
      {children}
    </Component>
  )
}
