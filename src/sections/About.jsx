import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { about } from '../data/profile'
import { BriefcaseIcon, GraduationCapIcon, LayersIcon, SparklesIcon } from '../components/icons'
import './About.css'

const icons = [GraduationCapIcon, BriefcaseIcon, LayersIcon, SparklesIcon]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading eyebrow="About Me" title="Who I am" />

        <div className="about__grid">
          <Reveal className="about__text" delay={80}>
            <p>{about.paragraph}</p>
          </Reveal>

          <ul className="about__highlights">
            {about.highlights.map((item, index) => {
              const Icon = icons[index % icons.length]
              return (
                <Reveal as="li" key={item.label} delay={index * 90} className="about__highlight">
                  <span className="about__highlight-icon">
                    <Icon size={18} />
                  </span>
                  <span>
                    <strong>{item.label}</strong>
                    <span className="about__highlight-value">{item.value}</span>
                  </span>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
