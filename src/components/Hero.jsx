import { useLang } from '../hooks/useLang.jsx'
import { links } from '../data/content.js'

const WAVE_DELAYS = [0, 0.1, 0.2, 0.3, 0.15, 0.35, 0.05, 0.25, 0.4, 0.12, 0.28, 0.08, 0.32, 0.18, 0.22, 0.02]
const RESUME_PATH = `${import.meta.env.BASE_URL}resume/Yusuf_Pathan_Senior_Frontend_Engineer.pdf`

export default function Hero() {
  const { t } = useLang()

  return (
    <div className="wrap hero" id="top">
      <p className="hero-kicker">{t.hero.kicker}</p>
      <h1 className="name">Yusuf Pathan</h1>
      <p className="role">{t.hero.role}</p>
      <p className="tagline">{t.hero.tagline}</p>

      <div className="hero-meta">
        <span><i className="dot" />{t.hero.location}</span>
        <span><i className="dot" />{t.hero.current}</span>
        <span><i className="dot" />{t.hero.openTo}</span>
      </div>

      <div className="cta-row">
        <a className="btn btn-primary" href={`mailto:${links.email}`}>
          {t.hero.cta}
        </a>
        <a className="btn btn-secondary" href={RESUME_PATH} download>
          {t.hero.resumeCta}
        </a>
        <a className="btn btn-secondary" href={links.github} target="_blank" rel="noopener">
          GitHub
        </a>
        <a className="btn btn-secondary" href={links.linkedin} target="_blank" rel="noopener">
          LinkedIn
        </a>
      </div>

      <div className="wave" aria-hidden="true">
        {WAVE_DELAYS.map((d, i) => (
          <span key={i} style={{ animationDelay: `${d}s` }} />
        ))}
      </div>
    </div>
  )
}
