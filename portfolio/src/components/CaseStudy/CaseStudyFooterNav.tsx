import { Link } from 'react-router-dom'
import './CaseStudyFooterNav.css'

interface CaseStudyFooterNavProps {
  previousProject: { slug: string; title: string } | null
  nextProject: { slug: string; title: string } | null
}

function CaseStudyFooterNav({ previousProject, nextProject }: CaseStudyFooterNavProps) {
  return (
    <nav className="cs-footer-nav">
      {previousProject ? (
        <Link to={`/projects/${previousProject.slug}`} className="cs-nav-item">
          <div className="cs-nav-dir">← Previous</div>
          <div className="cs-nav-title">{previousProject.title}</div>
        </Link>
      ) : (
        <Link to="/" className="cs-nav-item">
          <div className="cs-nav-dir">← Back</div>
          <div className="cs-nav-title">Home</div>
        </Link>
      )}
      {nextProject ? (
        <Link to={`/projects/${nextProject.slug}`} className="cs-nav-item cs-nav-item-right">
          <div className="cs-nav-dir">Next →</div>
          <div className="cs-nav-title">{nextProject.title}</div>
        </Link>
      ) : (
        <Link to="/" className="cs-nav-item cs-nav-item-right">
          <div className="cs-nav-dir">Home →</div>
          <div className="cs-nav-title">Home</div>
        </Link>
      )}
    </nav>
  )
}

export default CaseStudyFooterNav
