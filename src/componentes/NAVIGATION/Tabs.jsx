import { useId, useState } from 'react'
import './navigation.css'

export default function Tabs({ items, ariaLabel, aside, className = '' }) {
  const [activeId, setActiveId] = useState(items[0]?.id)
  const instanceId = useId()
  const activeItem = items.find((item) => item.id === activeId) ?? items[0]

  const selectTab = (nextIndex) => {
    setActiveId(items[nextIndex].id)
    requestAnimationFrame(() => document.getElementById(`${instanceId}-${items[nextIndex].id}-tab`)?.focus())
  }

  const selectRelativeTab = (currentIndex, direction) => selectTab((currentIndex + direction + items.length) % items.length)

  return (
    <div className={`ui-tabs ${className}`.trim()}>
      <div className="ui-tabs__list" role="tablist" aria-label={ariaLabel}>
        {items.map((item, index) => {
          const isActive = item.id === activeItem.id

          return (
            <button
              id={`${instanceId}-${item.id}-tab`}
              className={`ui-tabs__tab type-action ${isActive ? 'ui-tabs__tab--active' : ''}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${instanceId}-${item.id}-panel`}
              tabIndex={isActive ? 0 : -1}
              key={item.id}
              onClick={() => setActiveId(item.id)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowRight') { event.preventDefault(); selectRelativeTab(index, 1) }
                if (event.key === 'ArrowLeft') { event.preventDefault(); selectRelativeTab(index, -1) }
                if (event.key === 'Home') { event.preventDefault(); selectTab(0) }
                if (event.key === 'End') { event.preventDefault(); selectTab(items.length - 1) }
              }}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <div className="ui-tabs__content">
        <section
          id={`${instanceId}-${activeItem.id}-panel`}
          className="ui-tabs__panel"
          role="tabpanel"
          aria-labelledby={`${instanceId}-${activeItem.id}-tab`}
          tabIndex={0}
        >
          <h2 className="type-section-title">{activeItem.title}</h2>
          {activeItem.paragraphs.map((paragraph) => <p className="type-body type-muted" key={paragraph}>{paragraph}</p>)}
        </section>
        {aside && <aside className="ui-tabs__aside">{aside}</aside>}
      </div>
    </div>
  )
}
