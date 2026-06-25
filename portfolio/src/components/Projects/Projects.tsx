import { projects } from '../../data/portfolio'
import ProjectCard from './ProjectCard'
import './Projects.css'

const borderColors = ['var(--green)', 'var(--pink)', 'var(--green-light)']

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-label">// work</div>
      <h2 className="projects-heading">Selected Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            number={project.number}
            title={project.title}
            description={project.description}
            tags={project.tags}
            slug={project.slug}
            borderColor={borderColors[index]}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
