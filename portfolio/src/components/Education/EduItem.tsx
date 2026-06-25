import './EduItem.css'

interface EduItemProps {
  degree: string
  school: string
  label: string
}

function EduItem({ degree, school, label }: EduItemProps) {
  return (
    <div className="edu-item">
      <div>
        <div className="edu-degree">{degree}</div>
        <div className="edu-school">{school}</div>
      </div>
      <div className="edu-label">{label}</div>
    </div>
  )
}

export default EduItem
