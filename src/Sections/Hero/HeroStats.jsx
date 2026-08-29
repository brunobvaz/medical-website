import './HeroStats.css'

export default function HeroStats({ ariaLabel, stats }) {
  return (
    <aside className="medical-hero-stats" aria-label={ariaLabel}>
      <ul className="medical-hero-stats__list">
        {stats.map((stat, index) => (
          <li
            className={`medical-hero-stat medical-hero-stat--${index % 2 === 0 ? 'gold' : 'grey'}`}
            key={stat.label}
          >
            <span
              className={`medical-hero-stat__value ${stat.accessibleValue ? 'medical-hero-stat__value--stars' : ''}`}
              aria-label={stat.accessibleValue}
            >
              {stat.value}
            </span>
            <span className="medical-hero-stat__label">
              <span className="medical-hero-stat__label-full">{stat.label}</span>
              {stat.shortLabel && <span className="medical-hero-stat__label-short">{stat.shortLabel}</span>}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
