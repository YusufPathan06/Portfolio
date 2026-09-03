import { useLang } from '../hooks/useLang.jsx'
import { links } from '../data/content.js'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <footer id="contact">
      <div className="wrap">
        <h2 className="contact-title">{c.title}</h2>
        <p className="contact-sub">{c.sub}</p>
        <div className="contact-links">
          <a className="btn btn-primary" href={`mailto:${links.email}`}>
            {links.email}
          </a>
          <a className="btn btn-secondary" href={links.whatsapp} target="_blank" rel="noopener">
            WhatsApp
          </a>
          <a className="btn btn-secondary" href={links.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a className="btn btn-secondary" href={links.github} target="_blank" rel="noopener">
            GitHub
          </a>
        </div>
        <div className="foot-row">
          <span>{c.footName}</span>
          <span>{c.footLoc}</span>
        </div>
      </div>
    </footer>
  )
}
