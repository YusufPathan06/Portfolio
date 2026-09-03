import { useLang } from '../hooks/useLang.jsx'

export default function Experience() {
  const { t } = useLang()

  return (
    <section id="experience">
      <div className="wrap">
        <h2 className="section-title">{t.experienceTitle}</h2>
        <div className="timeline">
          {t.experience.map((job, i) => (
            <div key={i} className={`tl-item${job.current ? ' current' : ''}`}>
              <span className="tl-marker" />
              <div className="tl-head">
                <span className="tl-role">{job.role}</span>
                <span className="tl-org">{job.org}</span>
                <span className="tl-dates">{job.dates}</span>
              </div>
              <p className="tl-context">{job.context}</p>
              {job.lead && <p className="tl-lead">{job.lead}</p>}

              {job.facts && (
                <div className="tl-facts">
                  {job.facts.map((f, j) => (
                    <div key={j}>
                      <span>{f.value}</span>
                      <small>{f.label}</small>
                    </div>
                  ))}
                </div>
              )}

              <ul className="tl-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <p className="tl-stack">
                <b>Stack:</b> {job.stack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
