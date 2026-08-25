export default function Section({ as: Component = 'section', className = '', children, ...props }) {
  return <Component className={`site-section ${className}`.trim()} {...props}>{children}</Component>
}
