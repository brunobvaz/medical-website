import { Link } from 'react-router-dom'
import './navigation.css'

export default function Breadcrumbs({ items, ariaLabel = 'Breadcrumbs' }) {
  return (
    <nav className="ui-breadcrumbs type-eyebrow" aria-label={ariaLabel}>
      <ol>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1

          return (
            <li key={item.label}>
              {isCurrent ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
