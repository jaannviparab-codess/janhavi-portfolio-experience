import Reveal from './Reveal'
import { ExternalLinkIcon } from './icons'
import './CertificateCard.css'

export default function CertificateCard({ certificate, delay = 0 }) {
  const { company, title, credential, date, period, issuedBy, pdfUrl, previewUrl } = certificate

  return (
    <Reveal as="article" delay={delay} className="certificate-card card card--interactive">
      {/* The preview is a convenience link only; the button below is the
          accessible one, so keep this out of the tab order and AT tree. */}
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="certificate-card__preview"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={previewUrl}
          alt={`Preview of the ${company} ${title} certificate`}
          width="1200"
          height="848"
          loading="lazy"
          decoding="async"
        />
      </a>

      <div className="certificate-card__body">
        <p className="certificate-card__company">{company}</p>
        <h4 className="certificate-card__title">{title}</h4>
        <p className="certificate-card__meta">
          {credential} · <span className="certificate-card__nowrap">{date}</span>
        </p>
        <p className="certificate-card__detail">
          Period: {period} · <span className="certificate-card__nowrap">Issued by {issuedBy}</span>
        </p>

        <div className="certificate-card__actions">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            aria-label={`View Certificate: ${company} ${title} (PDF, opens in a new tab)`}
          >
            View Certificate <ExternalLinkIcon size={15} />
          </a>
        </div>
      </div>
    </Reveal>
  )
}
