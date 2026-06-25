import { certifications } from '../../data/portfolio'
import CertItem from './CertItem'
import './Certifications.css'

function Certifications() {
  return (
    <section className="certifications-section" id="credentials">
      <div className="certifications-label">// credentials</div>
      <h2 className="certifications-heading">Certifications &amp; Recognition</h2>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <CertItem
            key={cert.name}
            name={cert.name}
            meta={cert.meta}
            credlyUrl={cert.credlyUrl}
            variant={cert.variant}
          />
        ))}
      </div>
    </section>
  )
}

export default Certifications
