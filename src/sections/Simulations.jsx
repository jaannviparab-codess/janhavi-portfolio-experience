import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { simulations } from '../data/profile'
import { LayersIcon } from '../components/icons'
import './Simulations.css'

export default function Simulations() {
  return (
    <section id="simulations" className="section section--tight simulations">
      <div className="container">
        <SectionHeading
          eyebrow="Job Simulations"
          title="Practical, guided simulations"
          subtitle="Completed via Forage — clearly not employment, but hands-on practice with real-world scenarios."
        />

        <div className="simulations__grid">
          {simulations.map((sim, index) => (
            <Reveal as="article" key={sim.title} delay={index * 100} className="simulations__card card card--interactive">
              <div className="simulations__card-head">
                <span className="simulations__icon">
                  <LayersIcon size={19} />
                </span>
                <span className="badge">Job Simulation</span>
              </div>
              <h3 className="simulations__title">
                {sim.company} — {sim.title}
              </h3>
              <p className="simulations__platform">via {sim.platform}</p>
              <p className="simulations__description">{sim.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
