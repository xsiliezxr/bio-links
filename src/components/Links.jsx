import { ICONS } from '../lib/icons'

const ext = (href) => (/^https?:/i.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})

function LinkButton({ link }) {
  const Icon = ICONS[link.id]
  return (
    <a className={'btn' + (link.featured ? ' is-featured' : '')} href={link.href} data-reveal {...ext(link.href)}>
      <span className="btn-icon"><Icon /></span>
      <span className="btn-text">
        <b>{link.label}</b>
        {link.hint && <small>{link.hint}</small>}
      </span>
    </a>
  )
}

function IconTile({ link }) {
  const Icon = ICONS[link.id]
  return (
    <a className="tile" href={link.href} aria-label={link.label} title={link.label} data-reveal {...ext(link.href)}>
      <Icon />
    </a>
  )
}

export default function Links({ links }) {
  const list = links.filter((l) => l.tier === 'list')
  const tiles = links.filter((l) => l.tier === 'icon')
  return (
    <>
      {list.length > 0 && (
        <nav className="list" aria-label="Enlaces principales">
          {list.map((l) => <LinkButton key={l.id} link={l} />)}
        </nav>
      )}
      {tiles.length > 0 && (
        <nav className="tiles" aria-label="Más redes">
          {tiles.map((l) => <IconTile key={l.id} link={l} />)}
        </nav>
      )}
    </>
  )
}
