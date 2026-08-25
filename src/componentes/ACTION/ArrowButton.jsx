import './action.css'

export default function ArrowButton({
  direction = 'right',
  label,
  size = 'large',
  variant = 'light',
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <button
      aria-label={label || (direction === 'left' ? 'Anterior' : 'Seguinte')}
      className={`ui-arrow-button ui-arrow-button--${direction} ui-arrow-button--${size} ui-arrow-button--${variant} ${className}`.trim()}
      type={type}
      {...props}
    >
      <svg className="ui-arrow-button__chevron" aria-hidden="true" viewBox="0 0 24 48" fill="none">
        <path
          d={direction === 'left' ? 'M20 2 4 24l16 22' : 'M4 2l16 22L4 46'}
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="square"
          strokeLinejoin="miter"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </button>
  )
}
