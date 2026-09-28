import { useEffect, useState } from 'react'
import { personal, navLinks } from '../data/profile'
import { GithubIcon, LinkedinIcon, MenuIcon, CloseIcon } from '../components/icons'
import useActiveSection from '../hooks/useActiveSection'
import './Navbar.css'

const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => setIsMenuOpen(false)}>
          <span className="navbar__brand-mark">JP</span>
          <span className="navbar__brand-name">Janhavi Parab</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${activeId === link.href.replace('#', '') ? 'is-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Open GitHub profile"
          >
            <GithubIcon size={18} />
          </a>
          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="Open LinkedIn profile"
            >
              <LinkedinIcon size={18} />
            </a>
          )}

          <button
            className="navbar__toggle"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__mobile ${isMenuOpen ? 'is-open' : ''}`}
        aria-label="Mobile"
        hidden={!isMenuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`navbar__mobile-link ${activeId === link.href.replace('#', '') ? 'is-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
