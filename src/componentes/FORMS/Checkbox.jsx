import { useId } from 'react'
import './forms.css'

export default function Checkbox({ label, description, error, id, className = '', ...props }) {
  const generatedId = useId()
  const inputId = id || generatedId
  const messageId = `${inputId}-message`

  return (
    <div className={`ui-checkbox-field ${error ? 'ui-checkbox-field--error' : ''} ${className}`.trim()}>
      <label className="ui-checkbox" htmlFor={inputId}>
        <input aria-describedby={(error || description) ? messageId : undefined} aria-invalid={error ? true : undefined} id={inputId} type="checkbox" {...props} />
        <span className="ui-checkbox__box" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none"><path d="m3 8 3.2 3L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <span className="ui-checkbox__content">
          <span className="type-small">{label}</span>
          {description && <small className="type-caption" id={!error ? messageId : undefined}>{description}</small>}
        </span>
      </label>
      {error && <small className="ui-field__message type-caption" id={messageId}>{error}</small>}
    </div>
  )
}
