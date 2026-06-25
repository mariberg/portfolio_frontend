import './CaseStudySidebar.css'

interface CaseStudySidebarProps {
  techStack: { name: string; role: string }[]
  links: { github?: string; demo?: string; blog?: string }
  reflection: string
}

function CaseStudySidebar({ techStack, links, reflection }: CaseStudySidebarProps) {
  return (
    <aside className="cs-sidebar">
      {techStack && techStack.length > 0 && (
        <div className="cs-sidebar-block">
          <div className="cs-sidebar-title">// tech stack</div>
          {/* Desktop: vertical list */}
          <div className="cs-stack-list">
            {techStack.map((item) => (
              <div key={item.name} className="cs-stack-item">
                <div className="cs-stack-dot"></div>
                <span className="cs-stack-name">{item.name}</span>
                <span className="cs-stack-role">{item.role}</span>
              </div>
            ))}
          </div>
          {/* Mobile: pill chips */}
          <div className="cs-stack-chips">
            {techStack.map((item) => (
              <div key={item.name} className="cs-chip">
                <div className="cs-chip-dot"></div>
                {item.name} <span className="cs-chip-role">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {(links.github || links.demo || links.blog) && (
        <div className="cs-sidebar-block">
          <div className="cs-sidebar-title">// links</div>
          <div className="cs-links">
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="cs-link cs-link-primary">
                View on GitHub ↗
              </a>
            )}
            {links.demo && (
              <a href={links.demo} target="_blank" rel="noopener noreferrer" className="cs-link cs-link-ghost">
                Live demo ↗
              </a>
            )}
            {links.blog && (
              <a href={links.blog} target="_blank" rel="noopener noreferrer" className="cs-link cs-link-ghost">
                Blog post ↗
              </a>
            )}
          </div>
        </div>
      )}

      {reflection && (
        <div className="cs-sidebar-block">
          <div className="cs-sidebar-title">// reflection</div>
          <div className="cs-learnings">
            <p>"{reflection}"</p>
          </div>
        </div>
      )}
    </aside>
  )
}

export default CaseStudySidebar
