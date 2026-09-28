import { useEffect, useState } from 'react'
import { ArrowUpIcon } from './icons'
import './BackToTop.css'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!isVisible) return null

  return (
    <a href="#home" className="icon-btn back-to-top" aria-label="Back to top">
      <ArrowUpIcon size={18} />
    </a>
  )
}
