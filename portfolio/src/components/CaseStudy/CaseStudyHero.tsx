import './CaseStudyHero.css'

interface CaseStudyHeroProps {
  number: string
  title: string
  type: string
  role: string
  tags: { label: string; variant: 'green' | 'pink' }[]
}

function CaseStudyHero({ number, title, type, role, tags }: CaseStudyHeroProps) {
  return (
    <section className="cs-hero">
      <div className="cs-number">{number}</div>
      <div className="cs-label">// case study</div>
      <h1 className="cs-title">{title}</h1>
      <div className="cs-meta">
        <div className="cs-meta-item">
          <div className="cs-meta-key">Type</div>
          <div className="cs-meta-val">{type}</div>
        </div>
        <div className="cs-meta-item">
          <div className="cs-meta-key">Role</div>
          <div className="cs-meta-val">{role}</div>
        </div>
      </div>
      <div className="cs-tags">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className={`cs-tag${tag.variant === 'pink' ? ' cs-tag-pink' : ''}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </section>
  )
}

export default CaseStudyHero
