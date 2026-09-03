import { useLang } from '../hooks/useLang.jsx'
import { useCountUp } from '../hooks/useCountUp.js'

function Stat({ value, suffix, label }) {
  const [ref, count] = useCountUp(value)
  return (
    <div className="stat" ref={ref}>
      <span className="stat-num">
        {count}
        {suffix}
      </span>
      <p className="stat-label">{label}</p>
    </div>
  )
}

export default function Stats() {
  const { t } = useLang()

  return (
    <div className="wrap stats">
      {t.stats.map((s, i) => (
        <Stat key={i} value={s.value} suffix={s.suffix} label={s.label} />
      ))}
    </div>
  )
}
