import type { ReactNode } from 'react'
import './CaseStudyMain.css'

interface CaseStudyMainProps {
  problem: string
  approach: string
  decisions: { title: string; description: string }[]
  screenshots?: { src: string; alt: string; title: string; description: string }[]
  screenshotLayout?: 'mobile' | 'desktop'
  architectureDiagram?: ReactNode
}

function CaseStudyMain({ problem, approach, decisions, screenshots, screenshotLayout = 'mobile', architectureDiagram }: CaseStudyMainProps) {
  return (
    <div className="cs-main">
      {problem && (
        <section className="cs-section">
          <h2 className="cs-section-title">The problem</h2>
          <p className="cs-text">{problem}</p>
        </section>
      )}

      {approach && (
        <section className="cs-section">
          <h2 className="cs-section-title">The approach</h2>
          <p className="cs-text" dangerouslySetInnerHTML={{ __html: approach.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        </section>
      )}

      {decisions && decisions.length > 0 && (
        <section className="cs-section">
          <h2 className="cs-section-title">Key decisions</h2>
          <ul className="cs-challenges">
            {decisions.map((decision) => (
              <li key={decision.title} className="cs-challenge">
                <div className="cs-challenge-dot"></div>
                <div className="cs-challenge-text">
                  <strong>{decision.title}</strong> — {decision.description}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {screenshots && screenshots.length > 0 && (
        <section className="cs-section">
          <h2 className="cs-section-title">Screenshots</h2>
          <div className={`cs-screenshots ${screenshotLayout === 'desktop' ? 'cs-screenshots-desktop' : 'cs-screenshots-mobile'}`}>
            {screenshots.map((screenshot) => (
              <figure key={screenshot.src} className="cs-screenshot-figure">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="cs-screenshot"
                />
                <figcaption className="cs-screenshot-caption">
                  <strong className="cs-screenshot-title">{screenshot.title}</strong>
                  <span className="cs-screenshot-desc">{screenshot.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {architectureDiagram && (
        <div className="cs-arch-mobile">
          {architectureDiagram}
        </div>
      )}
    </div>
  )
}

export default CaseStudyMain
