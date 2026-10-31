/**
 * Silhouette décorative (tours et bulbes) du splash screen.
 * Purement ornementale : masquée aux technologies d'assistance.
 */
export default function SkylineArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 160" className={className} aria-hidden="true" preserveAspectRatio="xMidYMax slice">
      <g fill="currentColor">
        {/* Tour gauche */}
        <path d="M24 160V96l16-22 16 22v64z" />
        <path d="M40 60c7 8 11 14 11 20H29c0-6 4-12 11-20z" />
        <rect x="38" y="46" width="4" height="12" rx="2" />

        {/* Bulbe 1 */}
        <path d="M86 160v-48h44v48z" />
        <path d="M108 66c14 12 21 22 21 32 0 8-9 14-21 14s-21-6-21-14c0-10 7-20 21-32z" />
        <rect x="106" y="52" width="4" height="14" rx="2" />

        {/* Corps central */}
        <path d="M150 160V88h100v72z" />
        <path d="M200 44l52 40H148z" />
        <rect x="196" y="24" width="8" height="22" rx="4" />

        {/* Bulbe 2 */}
        <path d="M272 160v-44h40v44z" />
        <path d="M292 74c13 11 19 21 19 30 0 7-8 13-19 13s-19-6-19-13c0-9 6-19 19-30z" />
        <rect x="290" y="62" width="4" height="12" rx="2" />

        {/* Tour droite */}
        <path d="M344 160v-58l16-20 16 20v58z" />
        <path d="M360 68c7 8 11 14 11 20h-22c0-6 4-12 11-20z" />
        <rect x="358" y="54" width="4" height="12" rx="2" />

        {/* Muraille */}
        <path d="M0 160v-26h400v26z" />
      </g>
    </svg>
  );
}
