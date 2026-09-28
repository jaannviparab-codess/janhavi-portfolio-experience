import { personal } from '../data/profile'
import { GithubIcon, LinkedinIcon } from '../components/icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{personal.name}</p>
          <p className="footer__role">AI Automation Specialist | Python Developer</p>
        </div>

        <div className="footer__social">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Open GitHub profile"
          >
            <GithubIcon size={17} />
          </a>
          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="Open LinkedIn profile"
            >
              <LinkedinIcon size={17} />
            </a>
          )}
        </div>

        <p className="footer__copy">&copy; 2026 {personal.name}</p>
      </div>
    </footer>
  )
}
