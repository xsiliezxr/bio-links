import { useRef } from 'react'
import { profile, links, emails } from './config/site'
import useCopy from './hooks/useCopy'
import useEntrance from './hooks/useEntrance'
import Background from './components/Background'
import Intro from './components/Intro'
import Profile from './components/Profile'
import Links from './components/Links'
import Emails from './components/Emails'

export default function App() {
  const root = useRef(null)
  const [message, copy] = useCopy()
  useEntrance(root)

  return (
    <div ref={root}>
      <Background />
      <Intro />
      <main className="page">
        <div className="sheet">
          <Profile profile={profile} />
          <section className="content-column">
            <Links links={links} />
            <Emails emails={emails} onCopy={copy} />
          </section>
          <footer className="foot" data-reveal>© 2026 Angel Siliezar. Todos los derechos reservados.</footer>
        </div>
      </main>
      {message && <div className="toast" role="status">{message}</div>}
    </div>
  )
}
