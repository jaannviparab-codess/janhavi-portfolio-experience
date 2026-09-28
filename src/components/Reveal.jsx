import useReveal from '../hooks/useReveal'

// Wraps any block of content so it fades/slides into view on scroll.
// `as` lets a section swap the wrapper tag (div/li/etc), `delay` staggers
// groups of cards using the same CSS transition defined in index.css.
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }) {
  const [ref, isVisible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
