import { useState } from 'react'
import { Button } from '../componentes/ACTION/index.js'
import { Checkbox, DatePicker, Input, Select, Textarea } from '../componentes/FORMS/index.js'
import { Section, SectionContainer, SectionHeader } from '../componentes/LAYOUT/index.js'
import { getBookingPage } from '../data/bookingPage.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import './BookingPage.css'

const today = new Date().toISOString().slice(0, 10)

export default function BookingPage() {
  const { language } = useI18n()
  const content = getBookingPage(language)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setSubmitted(true)
  }

  return (
    <main className="booking-page">
      <Section className="booking-page__section" aria-labelledby="booking-title">
        <SectionContainer>
          <SectionHeader
            className="booking-page__heading"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.introduction}
            titleId="booking-title"
            layout="split"
          />

          <div className="booking-page__form-shell">
            <header className="booking-page__form-header">
              <h2 className="type-card-title">{content.formTitle}</h2>
              <p className="type-caption type-muted">{content.requiredHint}</p>
            </header>

            <form className="booking-page__form" onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
              <Input label={content.nameLabel} name="name" placeholder={content.namePlaceholder} autoComplete="name" required />
              <Input label={content.emailLabel} name="email" type="email" placeholder={content.emailPlaceholder} autoComplete="email" required />
              <Input label={content.phoneLabel} name="phone" type="tel" placeholder={content.phonePlaceholder} autoComplete="tel" required />
              <Select label={content.locationLabel} name="location" placeholder={content.locationPlaceholder} options={content.locations} defaultValue="" required />
              <Select label={content.areaLabel} name="clinicalArea" placeholder={content.areaPlaceholder} options={content.areas} defaultValue="" required />
              <DatePicker label={content.dateLabel} name="preferredDate" min={today} hint={content.dateHint} required />
              <Select label={content.timeLabel} name="preferredTime" placeholder={content.timePlaceholder} options={content.times} defaultValue="" required />
              <Textarea className="booking-page__wide" label={content.messageLabel} name="message" placeholder={content.messagePlaceholder} hint={content.messageHint} maxLength={500} rows={5} />

              <div className="booking-page__wide booking-page__consent">
                <Checkbox name="privacy" label={content.privacyLabel} description={content.privacyDescription} required />
                <Checkbox name="newsletter" label={content.newsLabel} />
              </div>

              <div className="booking-page__wide booking-page__actions">
                <Button type="submit" variant="primary">{content.submitLabel}</Button>
                <p className="booking-page__status type-small" role="status" aria-live="polite">
                  {submitted ? content.successMessage : ''}
                </p>
              </div>
            </form>
          </div>
        </SectionContainer>
      </Section>
    </main>
  )
}
