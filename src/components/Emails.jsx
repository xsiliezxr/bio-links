import { FaEnvelope, FaCopy } from '../lib/icons'

export default function Emails({ emails, onCopy }) {
  if (!emails.length) return null
  return (
    <section className="mails">
      <h2 data-reveal>Escríbeme</h2>
      {emails.map((m) => (
        <div className={'mail' + (m.featured ? ' is-featured' : '')} key={m.id} data-reveal>
          <a className="mail-link" href={`mailto:${m.addr}`}>
            <FaEnvelope />
            <span><b>{m.label}</b><small>{m.addr}</small></span>
          </a>
          <button type="button" className="copy" aria-label={`Copiar correo de ${m.label}`} onClick={() => onCopy(m.addr)}>
            <FaCopy />
          </button>
        </div>
      ))}
    </section>
  )
}
