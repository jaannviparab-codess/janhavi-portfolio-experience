// Hand-drawn line icons (no icon library dependency). Every icon takes
// the same `size` + `className` props and inherits color via currentColor.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function GithubIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.7 2.8 5.6 3.1 5.6 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  )
}

export function LinkedinIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M6.5 8.5v10M6.5 5.5v.01M11.5 18.5v-6a3 3 0 0 1 6 0v6M11.5 18.5v-10" />
      <rect x="3" y="3" width="18" height="18" rx="3" />
    </svg>
  )
}

export function MailIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function PhoneIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M6.6 3.5h3l1.4 4.5-2.3 1.6a12.5 12.5 0 0 0 5.7 5.7l1.6-2.3 4.5 1.4v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  )
}

export function MapPinIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M12 21s7-6.6 7-11.5a7 7 0 1 0-14 0C5 14.4 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  )
}

export function ExternalLinkIcon({ size = 18, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M9 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3M14 4h6v6M10 14 20 4" />
    </svg>
  )
}

export function DownloadIcon({ size = 18, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  )
}

export function MenuIcon({ size = 24, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ size = 24, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function ArrowUpIcon({ size = 18, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )
}

export function ArrowRightIcon({ size = 18, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function BriefcaseIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <rect x="3" y="7.5" width="18" height="12" rx="2.2" />
      <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M3 12.5h18" />
    </svg>
  )
}

export function GraduationCapIcon({ size = 22, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="m2 9 10-5 10 5-10 5-10-5Z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6" />
    </svg>
  )
}

export function AwardIcon({ size = 22, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <circle cx="12" cy="8.5" r="5.5" />
      <path d="m8.2 13.3-1.4 7.2 5.2-2.8 5.2 2.8-1.4-7.2" />
    </svg>
  )
}

export function DatabaseIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5V18c0 1.7 3.6 3 8 3s8-1.3 8-3V5.5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  )
}

export function SparklesIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  )
}

export function CodeIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
    </svg>
  )
}

export function CheckIcon({ size = 16, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  )
}

export function ServerIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </svg>
  )
}

export function WrenchIcon({ size = 20, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.6L4 16.2V20h3.8l5.3-5.3a4 4 0 0 0 4.6-5.4l-2.8 2.8-2-2Z" />
    </svg>
  )
}

export function LayersIcon({ size = 22, className }) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 8v5M21 8v5" />
    </svg>
  )
}
