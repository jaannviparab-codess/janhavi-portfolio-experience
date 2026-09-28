import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/profile'
import './Projects.css'

export default function Projects() {
  const featured = projects.filter((project) => project.featured)
  const secondary = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects I've built"
          subtitle="A live web platform plus a hardware build — spanning software and embedded systems."
        />

        <div className="projects__featured">
          {featured.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="projects__secondary">
          {secondary.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
