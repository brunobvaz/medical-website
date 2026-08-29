import { Button } from '../../componentes/ACTION/index.js'
import { Input, Textarea } from '../../componentes/FORMS/index.js'

export default function CTAContactForm({ action, content }) {
  return (
    <form className="cta-section__form" action={action} aria-labelledby="cta-title" method="get">
      <p className="type-eyebrow">{content.eyebrow}</p>
      <h2 className="type-section-title" id="cta-title">{content.title}</h2>
      <Input label={content.nameLabel} name="name" placeholder={content.namePlaceholder} autoComplete="name" required />
      <Input label={content.emailLabel} name="email" type="email" placeholder={content.emailPlaceholder} autoComplete="email" required />
      <Textarea label={content.messageLabel} name="message" placeholder={content.messagePlaceholder} rows={4} resize="none" required />
      <Button className="cta-section__submit" type="submit" variant="primary" size="small">
        {content.submitLabel}
      </Button>
    </form>
  )
}
