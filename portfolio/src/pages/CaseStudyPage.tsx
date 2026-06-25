import { useParams, Link } from 'react-router-dom'
import { projects, getAdjacentProjects } from '../data/portfolio'
import CaseStudyNav from '../components/CaseStudy/CaseStudyNav'
import CaseStudyHero from '../components/CaseStudy/CaseStudyHero'
import CaseStudyContent from '../components/CaseStudy/CaseStudyContent'
import CaseStudyMain from '../components/CaseStudy/CaseStudyMain'
import CaseStudySidebar from '../components/CaseStudy/CaseStudySidebar'
import CaseStudyArchDiagram from '../components/CaseStudy/CaseStudyArchDiagram'
import CaseStudyFooterNav from '../components/CaseStudy/CaseStudyFooterNav'

function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '6rem 2rem 2rem' }}>
        <p style={{ fontFamily: 'Caveat, cursive', fontSize: '1.5rem', color: 'var(--green-light)', marginBottom: '1rem' }}>
          Project not found.
        </p>
        <Link to="/" style={{ color: 'var(--mint)', textDecoration: 'underline', fontSize: '1rem' }}>
          ← Back to home
        </Link>
      </main>
    )
  }

  const caseStudy = project.caseStudy
  const { prev, next } = getAdjacentProjects(project.slug)

  // Architecture diagram for mobile positioning (rendered inside CaseStudyMain)
  const mobileDiagram = caseStudy?.architectureDiagramId ? (
    <CaseStudyArchDiagram
      projectSlug={caseStudy.architectureDiagramId}
      subtitle={project.slug === 'tilawa' ? 'CloudFormation' : project.slug === 'oak-bedrock' ? 'CDK' : 'CDK'}
    />
  ) : undefined

  return (
    <>
      <CaseStudyNav />
      <CaseStudyHero
        number={project.number}
        title={project.title}
        type={caseStudy?.type ?? ''}
        role={caseStudy?.role ?? ''}
        tags={project.tags}
      />
      {caseStudy && (
        <CaseStudyContent>
          <CaseStudyMain
            problem={caseStudy.problem}
            approach={caseStudy.approach}
            decisions={caseStudy.decisions}
            screenshots={caseStudy.screenshots}
            screenshotLayout={caseStudy.screenshotLayout}
            architectureDiagram={mobileDiagram}
          />
          <CaseStudySidebar
            techStack={caseStudy.techStack}
            links={caseStudy.links}
            reflection={caseStudy.reflection}
          />
        </CaseStudyContent>
      )}
      {/* Desktop architecture diagram — full width below grid */}
      {caseStudy?.architectureDiagramId && (
        <div className="cs-arch-desktop">
          <CaseStudyArchDiagram
            projectSlug={caseStudy.architectureDiagramId}
            subtitle={project.slug === 'tilawa' ? 'CloudFormation' : project.slug === 'oak-bedrock' ? 'CDK' : 'CDK'}
          />
        </div>
      )}
      <CaseStudyFooterNav
        previousProject={prev}
        nextProject={next}
      />
    </>
  )
}

export default CaseStudyPage
