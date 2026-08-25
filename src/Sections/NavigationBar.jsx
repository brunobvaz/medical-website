import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../componentes/ACTION/index.js'
import siteConfig from '../config/site.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './NavigationBar.css'

export default function NavigationBar({
  brand,
  bookingLabel,
  bookingHref,
  onMenuClick,
}) {
  const { t, toggleLanguage } = useI18n()
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const firstLinkRef = useRef(null)
  const resolvedBrand = brand ?? siteConfig.brand
  const resolvedBookingLabel = bookingLabel ?? t.navigation.booking
  const resolvedBookingHref = bookingHref ?? siteConfig.routes.booking
  const menuItems = [
    { label: t.navigation.links.home, to: siteConfig.routes.home },
    { label: t.navigation.links.about, to: siteConfig.routes.about },
    { label: t.navigation.links.treatments, to: siteConfig.routes.treatments },
    { label: t.navigation.links.team, to: siteConfig.routes.results },
    { label: t.navigation.links.contacts, to: siteConfig.routes.contacts },
    { label: t.navigation.links.components, to: siteConfig.routes.components },
  ]

  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen)
    onMenuClick?.()
  }

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    firstLinkRef.current?.focus()

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  return (
    <header className={`main-navigation ${isMenuOpen ? 'main-navigation--open' : ''}`}>
      <Button className="main-navigation__booking" to={resolvedBookingHref} size="small">
        <span className="main-navigation__booking-full">{resolvedBookingLabel}</span>
        <span className="main-navigation__booking-short">{t.navigation.bookingShort}</span>
      </Button>

      <Link className="main-navigation__brand type-card-title" to={siteConfig.routes.home} aria-label={`${resolvedBrand}, ${t.navigation.homeLabel}`}>
        <span className="main-navigation__brand-name">{resolvedBrand}</span>
        <span className="main-navigation__brand-rule" aria-hidden="true" />
        <small>{t.navigation.specialty}</small>
      </Link>

      <div className="main-navigation__actions">
        <Button
          className="main-navigation__language"
          variant="ghost"
          size="small"
          aria-label={t.navigation.changeLanguage}
          onClick={toggleLanguage}
        >
          {t.navigation.nextLanguage}
        </Button>

        <button
          className={`main-navigation__menu ${isMenuOpen ? 'main-navigation__menu--open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? t.navigation.closeMenuLabel : t.navigation.menuLabel}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation-overlay"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`navigation-overlay ${isMenuOpen ? 'navigation-overlay--open' : ''}`}
        id="main-navigation-overlay"
        aria-hidden={!isMenuOpen}
      >
        <nav className="navigation-overlay__nav" aria-label={t.navigation.menuNavigationLabel}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={item.to}>
                <Link
                  className="type-section-title type-uppercase"
                  ref={index === 0 ? firstLinkRef : undefined}
                  to={item.to}
                  aria-current={pathname === item.to ? 'page' : undefined}
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            className="navigation-overlay__booking"
            to={resolvedBookingHref}
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            {t.navigation.links.booking}
          </Button>
        </nav>
      </div>
    </header>
  )
}
