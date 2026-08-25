import { Button } from '../componentes/ACTION/index.js'
import { AfterBeforeCard } from '../componentes/CARDS/index.js'
import { Section, SectionContainer } from '../componentes/LAYOUT/index.js'
import { getResultsPage } from '../data/resultsPage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './ResultsPage.css'

export default function ResultsPage() {
  const { language } = useI18n()
  const content = getResultsPage(language)

  return (
    <main className="results-page">
      <Section className="results-page__section" aria-labelledby="results-title">
        <SectionContainer className="results-page__container">
          <header className="results-page__header">
            <p className="type-eyebrow">{content.eyebrow}</p>
            <h1 className="type-page-title" id="results-title">{content.title}</h1>
            <p className="type-body type-muted">{content.introduction}</p>
          </header>

          <div className="results-page__content">
            <nav className="results-page__categories" aria-label={content.eyebrow}>
              {content.categories.map((category, index) => (
                <a className={index === 0 ? 'results-page__category--active' : ''} href={index === 0 ? '#resultados-palpebras' : '/treatments'} key={category}>{category}</a>
              ))}
            </nav>

            <div className="results-page__list" id="resultados-palpebras">
              {content.items.map((item) => (
                <article className="results-page__result" key={item.title}>
                  <h2>{item.title}</h2>
                  <AfterBeforeCard
                    className="results-page__comparison"
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    beforeLabel={content.beforeLabel}
                    afterLabel={content.afterLabel}
                    beforeAlt={`${item.title}: ${content.beforeLabel}`}
                    afterAlt={`${item.title}: ${content.afterLabel}`}
                    sliderLabel={`${content.sliderLabel}: ${item.title}`}
                  />
                </article>
              ))}
            </div>

            <footer className="results-page__footer">
              <Button to="/booking" variant="secondary" size="large">{content.bookingLabel}</Button>
              <p>{content.disclaimer}</p>
            </footer>
          </div>
        </SectionContainer>
      </Section>
    </main>
  )
}
