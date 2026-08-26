import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/icons/idsite_gold.png'
import { useI18n } from '../../i18n/I18nContext.jsx'
import './Loading.css'

const ENTER_DURATION = 750
const EXIT_DURATION = 700

export default function Loading({ autoDismiss = true }) {
  const { language } = useI18n()
  const [isVisible, setIsVisible] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const timers = useRef([])
  const label = language === 'en' ? 'Loading page' : 'A carregar página'

  useEffect(() => {
    if (!autoDismiss) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const enterTimer = window.setTimeout(() => {
      setIsExiting(true)

      const exitTimer = window.setTimeout(() => {
        setIsVisible(false)
      }, reduceMotion ? 50 : EXIT_DURATION)

      timers.current.push(exitTimer)
    }, reduceMotion ? 100 : ENTER_DURATION)

    timers.current.push(enterTimer)

    return () => {
      timers.current.forEach((timer) => window.clearTimeout(timer))
      timers.current = []
    }
  }, [autoDismiss])

  useEffect(() => {
    if (!isVisible) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className={`page-loading ${isExiting ? 'page-loading--exiting' : ''}`} role="status" aria-live="polite" aria-label={label}>
      <img className="page-loading__logo" src={logo} alt="" aria-hidden="true" />
    </div>
  )
}
