import { Link } from 'react-router-dom'
import './action.css'

export default function ArrowDownLink({ children, to, href, className = '', ...props }) {
  const Component = to ? Link : 'a'

  return (
    <Component className={`ui-arrow-down-link ${className}`.trim()} href={href} to={to} {...props}>
      <span className="ui-arrow-down-link__label">{children}</span>
      <span className="ui-arrow-down-link__arrow" aria-hidden="true">
        <svg viewBox="0 0 48 12" fill="none">
          <path d="M1 6h42M38 1l5 5-5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
      </span>
    </Component>
  )
}
