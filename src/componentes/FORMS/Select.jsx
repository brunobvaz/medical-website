import { useId } from 'react'
import './forms.css'

export default function Select({ label, hint, error, options = [], placeholder = 'Selecionar', id, className = '', required, children, ...props }) {
  const generatedId = useId()
  const selectId = id || generatedId
  const messageId = `${selectId}-message`

  return (
    <div className={`ui-field ${error ? 'ui-field--error' : ''} ${className}`.trim()}>
      {label && <label className="ui-field__label type-label" htmlFor={selectId}>{label}{required && <span aria-hidden="true"> *</span>}</label>}
      <div className="ui-field__control ui-field__control--select">
        <select
          aria-describedby={(error || hint) ? messageId : undefined}
          aria-invalid={error ? true : undefined}
          className="ui-field__input type-small"
          id={selectId}
          required={required}
          {...props}
        >
          <option disabled value="">{placeholder}</option>
          {children || options.map((option) => {
            const value = typeof option === 'string' ? option : option.value
            const text = typeof option === 'string' ? option : option.label
            return <option key={value} value={value}>{text}</option>
          })}
        </select>
        <svg className="ui-field__select-icon" aria-hidden="true" viewBox="0 0 20 20" fill="none">
          <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {(error || hint) && <small className="ui-field__message type-caption" id={messageId}>{error || hint}</small>}
    </div>
  )
}
