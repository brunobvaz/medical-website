/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import translations from '../data/translations.js'

const DEFAULT_LANGUAGE = 'pt'
const STORAGE_KEY = 'medical-language'
const I18nContext = createContext(null)

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem(STORAGE_KEY)

  if (savedLanguage in translations) return savedLanguage

  return navigator.language.toLowerCase().startsWith('en') ? 'en' : DEFAULT_LANGUAGE
}

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage: () => setLanguage((current) => current === 'pt' ? 'en' : 'pt'),
    t: translations[language],
  }), [language])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)

  if (!context) throw new Error('useI18n must be used inside I18nProvider')

  return context
}
