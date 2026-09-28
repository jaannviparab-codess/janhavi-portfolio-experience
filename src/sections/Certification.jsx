import Reveal from '../components/Reveal'
import { certification } from '../data/profile'
import { AwardIcon } from '../components/icons'
import './Credentials.css'

export default function Certification() {
  return (
    <Reveal as="article" delay={100} className="credential-card card card--interactive">
      <span className="credential-card__icon">
        <AwardIcon size={22} />
      </span>
      <div>
        <p className="credential-card__eyebrow">Certification</p>
        <h3 className="credential-card__title">{certification.name}</h3>
        <p className="credential-card__meta">{certification.date}</p>
      </div>
    </Reveal>
  )
}
