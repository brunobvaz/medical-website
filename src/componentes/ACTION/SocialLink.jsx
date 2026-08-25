import './action.css'

export default function SocialLink({ icon, label, href, variant = 'outline', className = '', ...props }) {
  return (
    <a
      aria-label={label}
      className={`ui-social-link ui-social-link--${variant} ${className}`.trim()}
      href={href}
      rel="noreferrer"
      target="_blank"
      title={label}
      {...props}
    >
      {icon}
    </a>
  )
}
