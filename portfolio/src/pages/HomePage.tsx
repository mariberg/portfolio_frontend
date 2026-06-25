import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero/Hero'
import Divider from '../components/Divider/Divider'
import Projects from '../components/Projects/Projects'
import Writing from '../components/Writing/Writing'
import Certifications from '../components/Certifications/Certifications'
import Education from '../components/Education/Education'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Divider />
      <Projects />
      <Divider />
      <Writing />
      <Divider />
      <Certifications />
      <Divider />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
