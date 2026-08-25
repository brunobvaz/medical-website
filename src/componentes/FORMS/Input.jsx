import { useId } from 'react'
import './forms.css'

export default function Input({ label, hint, error, leadingIcon, trailingIcon, id, className = '', required, ...props }) {
  const generatedId = useId()
  const inputId = id || generatedId
  const messageId = `${inputId}-message`

  return (
    <div className={`ui-field ${error ? 'ui-field--error' : ''} ${className}`.trim()}>
      {label && <label className="ui-field__label type-label" htmlFor={inputId}>{label}{required && <span aria-hidden="true"> *</span>}</label>}
      <div className="ui-field__control">
        {leadingIcon && <span className="ui-field__icon ui-field__icon--leading">{leadingIcon}</span>}
        <input
          aria-describedby={(error || hint) ? messageId : undefined}
          aria-invalid={error ? true : undefined}
          className="ui-field__input type-small"
          id={inputId}
          required={required}
          {...props}
        />
        {trailingIcon && <span className="ui-field__icon ui-field__icon--trailing">{trailingIcon}</span>}
      </div>
      {(error || hint) && <small className="ui-field__message type-caption" id={messageId}>{error || hint}</small>}
    </div>
  )
}
