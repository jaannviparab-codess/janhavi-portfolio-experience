import { useEffect, useRef, useState } from 'react'

// Adds a `.reveal` fade/slide-in animation the first time an element
// scrolls into view. Falls back to visible-by-default if IntersectionObserver
// is unavailable, and respects prefers-reduced-motion by skipping the
// initial hidden state entirely.
export default function useReveal() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}
