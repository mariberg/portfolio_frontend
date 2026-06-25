import type { ReactNode } from 'react'
import './CaseStudyContent.css'

interface CaseStudyContentProps {
  children: ReactNode
}

function CaseStudyContent({ children }: CaseStudyContentProps) {
  return (
    <div className="cs-body">
      {children}
    </div>
  )
}

export default CaseStudyContent
