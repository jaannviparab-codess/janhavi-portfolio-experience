import { CheckIcon, ExternalLinkIcon, GithubIcon } from './icons'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const { name, tagline, date, description, features, tech, liveUrl, githubUrl, featured } = project

  return (
    <article className={`project-card card card--interactive ${featured ? 'project-card--featured' : ''}`}>
      {featured && <span className="badge project-card__badge">Featured Project</span>}

      <div className="project-card__head">
        <h3 className="project-card__name">{name}</h3>
        <p className="project-card__tagline">
          {tagline}
          {date && <span className="project-card__date"> · {date}</span>}
        </p>
      </div>

      <p className="project-card__description">{description}</p>

      <ul className="project-card__features">
        {features.map((feature) => (
          <li key={feature}>
            <CheckIcon size={15} className="project-card__check" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <ul className="project-card__tech" aria-label={`Technologies used in ${name}`}>
        {tech.map((item) => (
          <li key={item} className="tag tag--teal">
            {item}
          </li>
        ))}
      </ul>

      <div className="project-card__links">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            Live Demo <ExternalLinkIcon size={15} />
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
            <GithubIcon size={16} /> GitHub
          </a>
        )}
      </div>
    </article>
  )
}
