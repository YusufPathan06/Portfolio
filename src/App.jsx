import { LangProvider } from './hooks/useLang.jsx'
import { ThemeProvider } from './hooks/useTheme.jsx'
import Ambient from './components/Ambient.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Ambient />
        <Header />
        <main>
          <Hero />
          <Stats />
          <Experience />
          <Skills />
        </main>
        <Contact />
      </LangProvider>
    </ThemeProvider>
  )
}
