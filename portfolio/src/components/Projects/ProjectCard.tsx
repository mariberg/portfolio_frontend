import { Link } from 'react-router-dom'
import './ProjectCard.css'

interface ProjectCardProps {
  number: string
  title: string
  description: string
  tags: { label: string; variant: 'green' | 'pink' }[]
  slug: string
  borderColor?: string
}

function ProjectCard({ number, title, description, tags, slug, borderColor = 'var(--green)' }: ProjectCardProps) {
  return (
    <Link to={`/projects/${slug}`} className="project-card" style={{ '--card-border-color': borderColor } as React.CSSProperties}>
      <div className="project-number">{number}</div>
      <div className="project-title">{title}</div>
      <p className="project-desc">{description}</p>
      <div className="project-tags">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className={`tag${tag.variant === 'pink' ? ' tag-pink' : ''}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
      <span className="project-link">
        View case study →
      </span>
    </Link>
  )
}

export default ProjectCard
