// Purely decorative — an abstract code-editor / workspace illustration
// built from primitive shapes so the hero doesn't rely on a stock photo.
export default function HeroVisual() {
  return (
    <svg
      className="hero-visual"
      viewBox="0 0 520 480"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        .hv-bg-blue { fill: var(--accent-blue); opacity: 0.10; }
        .hv-bg-teal { fill: var(--accent-teal); opacity: 0.09; }
        .hv-panel { fill: var(--bg-card); stroke: var(--border-strong); stroke-width: 1.5; }
        .hv-divider { stroke: var(--border-subtle); stroke-width: 1; }
        .hv-dot { fill: var(--text-muted); opacity: 0.55; }
        .hv-bar-muted { fill: var(--text-muted); opacity: 0.35; }
        .hv-bar-blue { fill: var(--accent-blue); opacity: 0.85; }
        .hv-bar-teal { fill: var(--accent-teal); opacity: 0.85; }
        .hv-chip { fill: var(--bg-elevated); stroke: var(--border-strong); stroke-width: 1.2; }
        .hv-chip-text { fill: var(--text-primary); font-size: 13px; font-weight: 600; font-family: inherit; }
        .hv-link { stroke: var(--border-strong); stroke-width: 1.3; }
        .hv-node { fill: var(--bg-base); stroke: var(--accent-teal); stroke-width: 1.5; }
        .hv-cursor { fill: var(--accent-teal); animation: hv-blink 1.1s steps(1) infinite; }
        @keyframes hv-blink { 50% { opacity: 0; } }
      `}</style>

      <circle className="hv-bg-blue" cx="392" cy="96" r="170" />
      <circle className="hv-bg-teal" cx="96" cy="360" r="150" />

      {/* connecting lines from panel to chips */}
      <path className="hv-link" d="M378 92 L344 66" fill="none" />
      <path className="hv-link" d="M96 160 L70 152" fill="none" />
      <path className="hv-link" d="M100 340 L68 322" fill="none" />
      <path className="hv-link" d="M356 302 L378 330" fill="none" />

      {/* editor window */}
      <rect className="hv-panel" x="70" y="70" width="310" height="270" rx="18" />
      <circle className="hv-dot" cx="92" cy="96" r="4" />
      <circle className="hv-dot" cx="108" cy="96" r="4" />
      <circle className="hv-dot" cx="124" cy="96" r="4" />
      <line className="hv-divider" x1="70" y1="112" x2="380" y2="112" />

      {/* abstract code lines */}
      <rect className="hv-bar-blue" x="92" y="132" width="40" height="8" rx="4" />
      <rect className="hv-bar-muted" x="138" y="132" width="70" height="8" rx="4" />

      <rect className="hv-bar-teal" x="110" y="154" width="90" height="8" rx="4" />

      <rect className="hv-bar-muted" x="110" y="176" width="60" height="8" rx="4" />
      <rect className="hv-bar-blue" x="176" y="176" width="30" height="8" rx="4" />

      <rect className="hv-bar-muted" x="92" y="198" width="50" height="8" rx="4" />

      <rect className="hv-bar-teal" x="110" y="220" width="100" height="8" rx="4" />

      <rect className="hv-bar-muted" x="110" y="242" width="70" height="8" rx="4" />

      <rect className="hv-bar-blue" x="92" y="264" width="44" height="8" rx="4" />
      <rect className="hv-bar-muted" x="142" y="264" width="26" height="8" rx="4" />

      <rect className="hv-bar-muted" x="110" y="286" width="80" height="8" rx="4" />
      <rect className="hv-cursor" x="196" y="286" width="6" height="8" rx="1.5" />

      {/* floating tech chips */}
      <g>
        <rect className="hv-chip" x="334" y="46" width="94" height="36" rx="18" />
        <text className="hv-chip-text" x="381" y="69" textAnchor="middle">Python</text>
      </g>
      <g>
        <rect className="hv-chip" x="14" y="132" width="88" height="36" rx="18" />
        <text className="hv-chip-text" x="58" y="155" textAnchor="middle">Django</text>
      </g>
      <g>
        <rect className="hv-chip" x="18" y="304" width="76" height="36" rx="18" />
        <text className="hv-chip-text" x="56" y="327" textAnchor="middle">API</text>
      </g>
      <g>
        <rect className="hv-chip" x="352" y="316" width="94" height="36" rx="18" />
        <text className="hv-chip-text" x="399" y="339" textAnchor="middle">SQLite</text>
      </g>

      <circle className="hv-node" cx="378" cy="92" r="3" />
      <circle className="hv-node" cx="96" cy="160" r="3" />
      <circle className="hv-node" cx="100" cy="340" r="3" />
      <circle className="hv-node" cx="356" cy="302" r="3" />
    </svg>
  )
}
