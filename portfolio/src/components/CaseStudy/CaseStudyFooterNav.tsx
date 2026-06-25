import { Link } from 'react-router-dom'
import './CaseStudyFooterNav.css'

interface CaseStudyFooterNavProps {
  previousProject: { slug: string; title: string }
  nextProject: { slug: string; title: string }
}

function CaseStudyFooterNav({ previousProject, nextProject }: CaseStudyFooterNavProps) {
  return (
    <nav className="cs-footer-nav">
      <Link to={`/projects/${previousProject.slug}`} className="cs-nav-item">
        <div className="cs-nav-dir">← Previous</div>
        <div className="cs-nav-title">{previousProject.title}</div>
      </Link>
      <Link to={`/projects/${nextProject.slug}`} className="cs-nav-item cs-nav-item-right">
        <div className="cs-nav-dir">Next →</div>
        <div className="cs-nav-title">{nextProject.title}</div>
      </Link>
    </nav>
  )
}

export default CaseStudyFooterNav
