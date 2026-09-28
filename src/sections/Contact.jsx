import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { personal } from '../data/profile'
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from '../components/icons'
import './Contact.css'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // No backend yet — opens the visitor's email client with the message
  // pre-filled. Swap this for a real request (e.g. Formspree, EmailJS,
  // or a custom API route) once one is wired up; the form fields above
  // won't need to change.
  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading eyebrow="Contact" title="Let's build something useful." align="center" />

        <div className="contact__grid">
          <Reveal className="contact__info">
            <ul className="contact__list">
              <li>
                <a href={`mailto:${personal.email}`} className="contact__link">
                  <span className="icon-btn contact__icon">
                    <MailIcon size={18} />
                  </span>
                  <span>
                    <strong>Email</strong>
                    <span>{personal.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={personal.phoneHref} className="contact__link">
                  <span className="icon-btn contact__icon">
                    <PhoneIcon size={18} />
                  </span>
                  <span>
                    <strong>Phone</strong>
                    <span>{personal.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <span className="contact__link contact__link--static">
                  <span className="icon-btn contact__icon">
                    <MapPinIcon size={18} />
                  </span>
                  <span>
                    <strong>Location</strong>
                    <span>{personal.location}</span>
                  </span>
                </span>
              </li>
              <li>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact__link">
                  <span className="icon-btn contact__icon">
                    <GithubIcon size={18} />
                  </span>
                  <span>
                    <strong>GitHub</strong>
                    <span>{personal.githubHandle}</span>
                  </span>
                </a>
              </li>
              {personal.linkedin && (
                <li>
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link">
                    <span className="icon-btn contact__icon">
                      <LinkedinIcon size={18} />
                    </span>
                    <span>
                      <strong>LinkedIn</strong>
                      <span>View profile</span>
                    </span>
                  </a>
                </li>
              )}
            </ul>
          </Reveal>

          <Reveal delay={100} className="contact__form-wrap card">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary contact__submit">
                Send Message <ArrowRightIcon size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
