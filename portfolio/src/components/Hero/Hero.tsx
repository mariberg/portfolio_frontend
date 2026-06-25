import './Hero.css'
import diagramSvg from '../../assets/diagram1.svg'

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-left">
        <div className="hero-eyebrow">Hi, I'm</div>
        <h1 className="hero-name">
          Marika<br />
          <span>Bergman</span>
        </h1>
        <p className="hero-tagline">
          Backend &amp; cloud engineer specialising in <strong>AWS serverless architecture</strong>, with a growing interest in <strong>applied AI integration</strong>. I build full-stack applications when the project calls for it — but the backend and infrastructure is where I'm most at home. I'm less interested in technically impressive solutions than in ones that genuinely solve the problem in front of them.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            See my work
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="diagram-wrap">
          <img src={diagramSvg} alt="Skills diagram" />
        </div>
      </div>
    </section>
  )
}

export default Hero
