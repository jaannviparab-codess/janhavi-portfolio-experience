import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { skillGroups, currentlyLearning } from '../data/profile'
import { CodeIcon, DatabaseIcon, ServerIcon, SparklesIcon, WrenchIcon } from '../components/icons'
import './Skills.css'

const groupIcons = {
  Programming: CodeIcon,
  'Backend & Web': ServerIcon,
  Database: DatabaseIcon,
  Tools: WrenchIcon,
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          eyebrow="Technical Skills"
          title="What I work with"
          subtitle="Tools and technologies I use hands-on, day to day."
        />

        <div className="skills__grid">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[group.category] ?? CodeIcon
            return (
              <Reveal as="div" key={group.category} delay={index * 80} className="skills__card card card--interactive">
                <div className="skills__card-head">
                  <span className="skills__card-icon">
                    <Icon size={19} />
                  </span>
                  <h3>{group.category}</h3>
                </div>
                <ul className="skills__tags">
                  {group.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="skills__learning" delay={120}>
          <div className="skills__learning-head">
            <span className="skills__learning-icon">
              <SparklesIcon size={18} />
            </span>
            <div>
              <h3>Currently Learning</h3>
              <p>Actively building skills here — not yet claiming expertise.</p>
            </div>
          </div>

          <div className="skills__learning-grid">
            {currentlyLearning.map((item) => (
              <div key={item.name} className="skills__learning-card">
                <span className="tag tag--learning">{item.name}</span>
                <p>{item.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
