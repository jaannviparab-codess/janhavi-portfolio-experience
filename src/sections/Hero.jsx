import { personal } from '../data/profile'
import { ArrowRightIcon, DownloadIcon, GithubIcon, LinkedinIcon } from '../components/icons'
import HeroVisual from '../components/HeroVisual'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">Hi, I&apos;m</p>
          <h1 className="hero__name">{personal.name}</h1>
          <p className="hero__headline">{personal.headline}</p>
          <p className="hero__tagline">{personal.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects <ArrowRightIcon size={16} />
            </a>
            <a href={personal.resumeUrl} download className="btn btn-secondary">
              Download Resume <DownloadIcon size={16} />
            </a>
          </div>

          <div className="hero__social">
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
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
