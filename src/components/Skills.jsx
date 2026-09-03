import { useLang } from '../hooks/useLang.jsx'

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="tight">
      <div className="wrap">
        <h2 className="section-title">{t.skillsTitle}</h2>
        <div className="skills-grid">
          {t.skills.map((s, i) => (
            <div className="skill-group" key={i}>
              <h3>{s.group}</h3>
              <p>{s.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
