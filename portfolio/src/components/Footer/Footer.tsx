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
        This portfolio began as my first AWS project: the{' '}
        <a href="https://cloudresumechallenge.dev/docs/the-challenge/aws/" target="_blank" rel="noopener noreferrer">
          Cloud Resume Challenge
        </a>
        . The DynamoDB visitor counter I built back then is still running today and has recorded {visitorCount !== null ? visitorCount.toLocaleString() : '...'} requests, including a traffic spike after being featured on{' '}
        <a href="https://www.youtube.com/c/techwithlucy" target="_blank" rel="noopener noreferrer">
          Tech With Lucy's
        </a>
        {' '}YouTube channel.
      </p>
    </footer>
  )
}

export default Footer
