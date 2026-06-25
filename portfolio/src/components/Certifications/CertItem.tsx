import './CertItem.css'

interface CertItemProps {
  name: string
  meta: string
  credlyUrl?: string
  variant: 'default' | 'special' | 'community'
}

function CertItem({ name, meta, credlyUrl, variant }: CertItemProps) {
  const variantClass = variant !== 'default' ? ` cert-item--${variant}` : ''
  const iconClass = variant === 'community' ? ' cert-icon--pink' : ''
  const icon = variant === 'community' ? '✦' : '⬡'

  const content = (
    <>
      <div className={`cert-icon${iconClass}`}>{icon}</div>
      <div>
        <div className="cert-name">{name}</div>
        <div className="cert-meta">{meta}</div>
      </div>
    </>
  )

  if (credlyUrl) {
    return (
      <a
        href={credlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`cert-item${variantClass}`}
      >
        {content}
      </a>
    )
  }

  return (
    <div className={`cert-item${variantClass}`}>
      {content}
    </div>
  )
}

export default CertItem
