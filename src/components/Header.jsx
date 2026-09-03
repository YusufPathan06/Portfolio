import { useLang } from '../hooks/useLang.jsx'
import { useActiveSection } from '../hooks/useActiveSection.js'
import ThemeToggle from './ThemeToggle.jsx'

const SECTION_IDS = ['top', 'experience', 'skills', 'contact']
const RESUME_PATH = `${import.meta.env.BASE_URL}resume/Yusuf_Pathan_Senior_Frontend_Engineer.pdf`

export default function Header() {
  const { lang, setLang, t } = useLang()
  const active = useActiveSection(SECTION_IDS)

  const linkClass = (id) => (active === id ? 'active' : undefined)

  return (
    <header>
      <div className="wrap header-row">
        <a className="brand" href="#top">
          {lang === 'ar' ? 'يوسف پتان' : 'Yusuf Pathan'}
        </a>
        <nav>
          <a href="#experience" className={linkClass('experience')}>{t.nav.experience}</a>
          <a href="#skills" className={linkClass('skills')}>{t.nav.skills}</a>
          <a href="#contact" className={linkClass('contact')}>{t.nav.contact}</a>
          <a className="resume-link" href={RESUME_PATH} download>
            {t.nav.resume}
          </a>
          <ThemeToggle />
          <div className="lang-toggle" role="group" aria-label="Language">
            <button aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
              EN
            </button>
            <button aria-pressed={lang === 'ar'} onClick={() => setLang('ar')}>
              عربي
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
