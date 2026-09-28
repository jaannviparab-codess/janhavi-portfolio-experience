import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Simulations from './sections/Simulations'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Simulations />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
