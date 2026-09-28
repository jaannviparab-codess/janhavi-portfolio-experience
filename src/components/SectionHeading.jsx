import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'section-head--center' : ''

  return (
    <Reveal className={`section-head ${alignClass}`.trim()}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  )
}
