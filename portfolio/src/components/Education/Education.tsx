import { education } from '../../data/portfolio'
import EduItem from './EduItem'
import './Education.css'

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-label">// background</div>
      <h2 className="education-heading">Education</h2>
      <div className="education-list">
        {education.map((entry) => (
          <EduItem
            key={entry.label}
            degree={entry.degree}
            school={entry.school}
            label={entry.label}
          />
        ))}
      </div>
    </section>
  )
}

export default Education
