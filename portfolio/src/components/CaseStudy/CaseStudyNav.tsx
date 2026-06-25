import { Link } from 'react-router-dom'
import './CaseStudyNav.css'

function CaseStudyNav() {
  return (
    <nav className="cs-nav">
      <Link to="/" className="cs-nav-logo">mb.</Link>
      <Link to="/#projects" className="cs-back">← Back to projects</Link>
    </nav>
  )
}

export default CaseStudyNav
