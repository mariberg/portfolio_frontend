import { diagramRegistry } from './diagrams'
import './CaseStudyArchDiagram.css'

interface CaseStudyArchDiagramProps {
  projectSlug: string
  subtitle?: string
}

function CaseStudyArchDiagram({ projectSlug, subtitle }: CaseStudyArchDiagramProps) {
  const DiagramComponent = diagramRegistry[projectSlug]

  if (!DiagramComponent) return null

  return (
    <section className="cs-arch-full">
      <div className="cs-arch-header">
        <span className="cs-arch-title">System Architecture</span>
        <span className="cs-arch-line"></span>
        {subtitle && <span className="cs-arch-sub">{subtitle}</span>}
      </div>
      <div className="cs-arch-diagram">
        <DiagramComponent />
      </div>
    </section>
  )
}

export default CaseStudyArchDiagram
