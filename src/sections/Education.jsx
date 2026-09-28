import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Certification from './Certification'
import { education } from '../data/profile'
import { GraduationCapIcon } from '../components/icons'
import './Credentials.css'

export default function Education() {
  return (
    <section id="education" className="section credentials">
      <div className="container">
        <SectionHeading eyebrow="Education & Certification" title="Academic background" />

        <div className="credentials__grid">
          <Reveal as="article" className="credential-card card card--interactive">
            <span className="credential-card__icon">
              <GraduationCapIcon size={22} />
            </span>
            <div>
              <p className="credential-card__eyebrow">Degree</p>
              <h3 className="credential-card__title">{education.degree}</h3>
              <p className="credential-card__meta">
                CGPA: {education.cgpa} · {education.status}
              </p>
            </div>
          </Reveal>

          <Certification />
        </div>
      </div>
    </section>
  )
}
