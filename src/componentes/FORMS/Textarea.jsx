import { useId } from 'react'
import './forms.css'

export default function Textarea({ label, hint, error, id, className = '', required, rows = 5, resize = 'vertical', ...props }) {
  const generatedId = useId()
  const textareaId = id || generatedId
  const messageId = `${textareaId}-message`

  return (
    <div className={`ui-field ${error ? 'ui-field--error' : ''} ${className}`.trim()}>
      {label && <label className="ui-field__label type-label" htmlFor={textareaId}>{label}{required && <span aria-hidden="true"> *</span>}</label>}
      <div className="ui-field__control">
        <textarea
          aria-describedby={(error || hint) ? messageId : undefined}
          aria-invalid={error ? true : undefined}
          className="ui-field__input ui-field__textarea type-small"
          id={textareaId}
          required={required}
          rows={rows}
          style={{ resize }}
          {...props}
        />
      </div>
      {(error || hint) && <small className="ui-field__message type-caption" id={messageId}>{error || hint}</small>}
    </div>
  )
}
