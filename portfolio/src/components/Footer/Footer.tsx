import { useEffect, useState } from 'react'
import './Footer.css'

function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://x9yxbl5ntc.execute-api.eu-west-2.amazonaws.com/prod/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => setVisitorCount(json.Attributes.numberOfVisitors))
      .catch(() => {
        // Silently fail if the visitor counter API is unavailable
      })
  }, [])

  return (
    <footer className="footer">
      <p className="footer-text">
        Marika Bergman · © 2026
      </p>
      <p className="footer-challenge">
        This site was built as part of the{' '}
        <a href="https://cloudresumechallenge.dev/docs/the-challenge/aws/" target="_blank" rel="noopener noreferrer">
          AWS Cloud Resume Challenge
        </a>
        . Serving {visitorCount !== null ? visitorCount.toLocaleString() : '...'} requests, including a traffic spike from a feature on{' '}
        <a href="https://www.youtube.com/c/techwithlucy" target="_blank" rel="noopener noreferrer">
          Tech With Lucy
        </a>
        {' '}YouTube channel.
      </p>
    </footer>
  )
}

export default Footer
