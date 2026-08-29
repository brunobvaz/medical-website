export default function CTAFormPanel({ animatedBackground = true, background, children }) {
  const classes = [
    'cta-section__form-panel',
    animatedBackground && 'cta-section__form-panel--animated',
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} style={{ '--cta-background': `url(${background})` }}>
      {children}
    </div>
  )
}
