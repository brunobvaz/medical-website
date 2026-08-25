import { lazy, Suspense, useEffect } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import NavigationBar from './Sections/NavigationBar.jsx'
import Footer from './Sections/Footer.jsx'
import Footer2 from './Sections/footer2.jsx'
import { Loading } from './componentes/LAYOUT/index.js'

const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const BookingPage = lazy(() => import('./pages/BookingPage.jsx'))
const ComponentsPage = lazy(() => import('./pages/ComponentsPage.jsx'))
const ContactsPage = lazy(() => import('./pages/ContactsPage.jsx'))
const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage.jsx'))
const ProcedureDetailPage = lazy(() => import('./pages/ProcedureDetailPage.jsx'))
const ResultsPage = lazy(() => import('./pages/ResultsPage.jsx'))
const TermsPage = lazy(() => import('./pages/TermsPage.jsx'))
const TreatmentDetailPage = lazy(() => import('./pages/TreatmentDetailPage.jsx'))
const TreatmentsPage = lazy(() => import('./pages/TreatmentsPage.jsx'))

function App() {
  return (
    <Suspense fallback={<Loading autoDismiss={false} />}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="treatments" element={<TreatmentsPage />} />
          <Route path="treatments/:areaSlug/:procedureSlug" element={<ProcedureDetailPage />} />
          <Route path="treatments/:slug" element={<TreatmentDetailPage />} />
          <Route path="results" element={<ResultsPage />} />
          <Route path="team" element={<Navigate to="/results" replace />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

function SiteLayout() {
  const { pathname } = useLocation()
  const isLandingPage = pathname === '/'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="site-shell">
      <Loading key={pathname} />
      <NavigationBar />
      <Outlet />
      {!isLandingPage && <Footer />}
      <Footer2 />
    </div>
  )
}

export default App
