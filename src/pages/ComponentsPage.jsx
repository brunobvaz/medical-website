import {
  ArrowButton,
  Button,
  IconButton,
  NavLink,
  SocialLink,
  TextLink,
} from '../componentes/ACTION/index.js'
import {
  Checkbox,
  DatePicker,
  Input,
  Select,
  Textarea,
} from '../componentes/FORMS/index.js'
import { useI18n } from '../i18n/I18nContext.jsx'
import { AfterBeforeCard, ServiceCard, TestimonialCard } from '../componentes/CARDS/index.js'
import serviceCardImage from '../assets/feed/botox.jpg'
import beforeImage from '../assets/before_after/antes.jpeg'
import afterImage from '../assets/before_after/depois.jpeg'

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none">
    <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CrossIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18.5" stroke="currentColor" />
    <path d="M20 11v18M11 20h18" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const HeartIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M20.8 5.8a5.2 5.2 0 0 0-7.4 0L12 7.2l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 22l8.8-8.8a5.2 5.2 0 0 0 0-7.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const InstagramIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)

function ActionsShowcase() {
  const { t } = useI18n()

  return (
    <article className="component-panel">
      <div className="component-panel__heading">
        <span>01</span>
        <div><p className="eyebrow type-eyebrow">{t.components.interaction}</p><h3>ACTIONS</h3></div>
      </div>

      <div className="component-demo-grid">
        <div className="component-demo component-demo--wide">
          <h4>Button</h4>
          <div className="component-row">
            <Button>Primary</Button><Button variant="dark">Dark</Button>
            <Button variant="secondary">Secondary</Button><Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button><Button disabled>Disabled</Button>
          </div>
          <div className="component-row component-row--align-end">
            <Button size="small">Small</Button>
            <Button size="medium" trailingIcon={<ArrowIcon />}>Medium</Button>
            <Button size="large" leadingIcon={<HeartIcon />}>Large</Button>
          </div>
        </div>

        <div className="component-demo">
          <h4>IconButton</h4>
          <div className="component-row">
            <IconButton icon={<HeartIcon />} label={t.components.addFavourite} />
            <IconButton icon={<HeartIcon />} label={t.components.outlinedFavourite} variant="outline" />
            <IconButton icon={<HeartIcon />} label={t.components.primaryFavourite} variant="primary" />
          </div>
        </div>

        <div className="component-demo component-demo--dark">
          <h4>ArrowButton</h4>
          <div className="component-row">
            <ArrowButton direction="left" label={t.components.previous} size="small" />
            <ArrowButton direction="left" label={t.components.previous} />
            <ArrowButton direction="right" label={t.components.next} />
          </div>
        </div>

        <div className="component-demo">
          <h4>TextLink</h4>
          <div className="component-stack">
            <TextLink to="/components" trailingIcon={<ArrowIcon />}>{t.components.learnMore}</TextLink>
            <TextLink to="/components" variant="accent">{t.components.readArticle}</TextLink>
            <TextLink to="/components" variant="underline">{t.components.viewDetails}</TextLink>
          </div>
        </div>

        <div className="component-demo">
          <h4>NavLink</h4>
          <div className="component-row">
            <NavLink active to="/components">{t.components.active}</NavLink>
            <NavLink to="/components">{t.components.normal}</NavLink>
          </div>
        </div>

        <div className="component-demo">
          <h4>SocialLink</h4>
          <div className="component-row">
            <SocialLink href="https://instagram.com" icon={<InstagramIcon />} label="Instagram" />
            <SocialLink href="https://instagram.com" icon={<InstagramIcon />} label={t.components.instagramPlain} variant="plain" />
          </div>
        </div>
      </div>
    </article>
  )
}

function FormsShowcase() {
  const { t } = useI18n()

  return (
    <article className="component-panel">
      <div className="component-panel__heading">
        <span>02</span>
        <div><p className="eyebrow type-eyebrow">{t.components.dataCollection}</p><h3>FORMS</h3></div>
      </div>

      <form className="form-showcase" onSubmit={(event) => event.preventDefault()}>
        <Input label={t.form.fullName} placeholder={t.form.namePlaceholder} required />
        <Input label="E-mail" type="email" placeholder="name@example.com" hint={t.form.emailHint} />
        <Input label={t.form.phone} type="tel" placeholder="+351 900 000 000" leadingIcon={<CrossIcon />} />
        <Input label={t.form.invalidField} defaultValue={t.form.invalidValue} error={t.form.invalidMessage} />
        <Input label={t.form.unavailableField} placeholder={t.form.notEditable} disabled />
        <Select label={t.form.specialty} options={t.form.specialties.map((label, index) => ({ value: index, label }))} required />
        <Select label={t.form.preferredDoctor} placeholder={t.form.noPreference} options={['Dra. Ana Silva', 'Dr. Miguel Sousa']} hint={t.form.optional} />
        <DatePicker label={t.form.preferredDate} min="2026-08-12" />
        <Textarea className="form-showcase__wide" label={t.form.message} placeholder={t.form.messagePlaceholder} hint={t.form.messageHint} maxLength={500} />

        <div className="form-showcase__wide checkbox-showcase">
          <Checkbox label={t.form.privacy} description={t.form.privacyDescription} />
          <Checkbox label={t.form.news} defaultChecked />
          <Checkbox label={t.form.unavailableOption} disabled />
          <Checkbox label={t.form.requiredConsent} error={t.form.requiredConsentError} />
        </div>

        <Button className="form-showcase__submit" type="submit">{t.form.submit}</Button>
      </form>
    </article>
  )
}

function CardsShowcase() {
  const { t } = useI18n()
  const service = t.services.items[0]
  const testimonial = t.testimonials.items[0]

  return (
    <article className="component-panel">
      <div className="component-panel__heading">
        <span>03</span>
        <div><p className="eyebrow type-eyebrow">Cards</p><h3>CARDS</h3></div>
      </div>

      <div className="component-card-preview">
        <ServiceCard
          image={serviceCardImage}
          imageAlt={service.imageAlt}
          eyebrow={service.category}
          title={service.title}
          description={service.description}
          buttonLabel={t.services.buttonLabel}
          to="/treatments/botox"
        />
      </div>

      <div className="component-panel__subsection">
        <h4>AfterBeforeCard</h4>
        <div className="component-comparison-preview">
          <AfterBeforeCard
            beforeImage={beforeImage}
            afterImage={afterImage}
            beforeLabel={t.components.before}
            afterLabel={t.components.after}
            beforeAlt={`${t.components.comparisonCards}: ${t.components.before}`}
            afterAlt={`${t.components.comparisonCards}: ${t.components.after}`}
            sliderLabel={t.components.comparisonLabel}
          />
        </div>
      </div>

      <div className="component-panel__subsection">
        <h4>TestimonialCard</h4>
        <div className="component-card-preview">
          <TestimonialCard
            testimonial={testimonial}
            ratingLabel={t.testimonials.ratingLabel}
          />
        </div>
      </div>
    </article>
  )
}

export default function ComponentsPage() {
  const { t } = useI18n()

  return (
    <main className="components-section" aria-labelledby="components-title">
      <header className="components-heading">
        <p className="eyebrow type-eyebrow">{t.components.eyebrow}</p>
        <h1 id="components-title">{t.components.title}</h1>
        <p className="type-body type-muted">{t.components.description}</p>
      </header>
      <ActionsShowcase />
      <FormsShowcase />
      <CardsShowcase />
    </main>
  )
}
