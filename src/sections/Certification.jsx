import Reveal from '../components/Reveal'
import CertificateCard from '../components/CertificateCard'
import { certification, certificates } from '../data/profile'
import { AwardIcon } from '../components/icons'
import './Credentials.css'

export default function Certification() {
  return (
    <>
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

      {/* Spans the full width of the parent .credentials__grid */}
      <div className="certificates">
        <h3 className="certificates__label">Job simulation certificates</h3>
        <div className="certificates__grid">
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} certificate={certificate} delay={index * 100} />
          ))}
        </div>
      </div>
    </>
  )
}
