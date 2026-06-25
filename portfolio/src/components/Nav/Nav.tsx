import { useState } from 'react'
import './Nav.css'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="nav">
      <div className="nav-logo">mb.</div>

      {/* Desktop links — hidden at ≤768px via CSS */}
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#credentials">Credentials</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a
            href="https://blog.marikabergman.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog ↗
          </a>
        </li>
      </ul>

      {/* Hamburger — shown at ≤768px via CSS */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile overlay */}
      {menuOpen && (
        <ul className="nav-mobile-overlay">
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#credentials" onClick={handleLinkClick}>Credentials</a></li>
          <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          <li>
            <a
              href="https://blog.marikabergman.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Blog ↗
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Nav
