import { Button } from '../../componentes/ACTION/index.js'

export default function ClinicProfile({ content }) {
  return (
    <article className="clinic-introduction__profile">
      <p className="clinic-introduction__eyebrow type-eyebrow">{content.eyebrow}</p>
      <h2 className="type-section-title" id="clinic-introduction-title">
        {content.titleLines.map((line) => <span key={line}>{line}</span>)}
        <span>{content.titleFinal} <em className="type-accent">{content.titleAccent}</em></span>
      </h2>
      <p className="clinic-introduction__description type-body">{content.description}</p>
      <span className="clinic-introduction__profile-rule" aria-hidden="true" />
      <ul className="clinic-introduction__principles" aria-label={content.principlesLabel}>
        {content.principles.map((principle) => <li key={principle}>{principle}</li>)}
      </ul>
      <Button className="clinic-introduction__button" to="/about" variant="primary" size="small">
        {content.buttonLabel} <span aria-hidden="true">→</span>
      </Button>
    </article>
  )
}
