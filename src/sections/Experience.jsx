import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { experience } from '../data/profile'
import { BriefcaseIcon, CheckIcon } from '../components/icons'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeading eyebrow="Professional Experience" title="Where I've worked" />

        <Reveal className="experience__timeline">
          <div className="experience__rail" aria-hidden="true">
            <span className="experience__dot" />
          </div>

          <article className="experience__card card">
            <div className="experience__card-head">
              <span className="experience__icon">
                <BriefcaseIcon size={20} />
              </span>
              <div>
                <h3 className="experience__role">{experience.role}</h3>
                <p className="experience__meta">
                  {experience.company} · {experience.team}
                </p>
              </div>
              <span className="badge experience__duration">{experience.duration}</span>
            </div>

            <ul className="experience__bullets">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckIcon size={15} className="experience__check" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
