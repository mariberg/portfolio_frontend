import './Contact.css'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-label">// contact</div>
      <h2 className="contact-heading">Let's build something.</h2>
      <p className="contact-subtitle">
        Available for freelance projects in AWS serverless &amp; AI integration.
      </p>
      <a
        href="mailto:contact@marikabergman.com"
        className="contact-email"
      >
        contact@marikabergman.com
      </a>
      <div className="contact-socials">
        <a
          href="https://www.linkedin.com/in/marika-bergman-185700256"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-social-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/mariberg"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-social-link"
        >
          GitHub
        </a>
        <a
          href="https://blog.marikabergman.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-social-link"
        >
          Blog
        </a>
      </div>
    </section>
  )
}

export default Contact
