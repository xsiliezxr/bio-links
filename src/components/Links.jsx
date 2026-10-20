import { CUSTOM_ICONS, ICONS } from '../lib/icons'

const ext = (href) => (/^https?:/i.test(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})

const mobileAppUrl = (href, id) => {
  if (!/^https?:/i.test(href) || !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) return ''
  try {
    const parsed = new URL(href)
    if (id === 'instagram') return `instagram://user?username=${parsed.pathname.split('/').filter(Boolean)[0]}`
    if (id === 'linkedin') return `linkedin://in/${parsed.pathname.split('/').filter(Boolean).pop()}`
    if (id === 'x') return `twitter://user?screen_name=${parsed.pathname.split('/').filter(Boolean)[0]}`
    if (id === 'facebook') return `fb://profile/${parsed.pathname.split('/').filter(Boolean)[0]}`
    return ''
  } catch {
    return ''
  }
}

const openLink = (event, link) => {
  const appUrl = mobileAppUrl(link.href, link.id)
  if (!appUrl) return
  event.preventDefault()
  const fallback = window.setTimeout(() => {
    window.location.assign(link.href)
  }, 900)
  const cancelFallback = () => {
    window.clearTimeout(fallback)
    document.removeEventListener('visibilitychange', cancelFallback)
  }
  document.addEventListener('visibilitychange', cancelFallback, { once: true })
  window.location.assign(appUrl)
}

function LinkButton({ link }) {
  const Icon = ICONS[link.id] ?? CUSTOM_ICONS[link.icon] ?? CUSTOM_ICONS.link
  return (
    <a className={'btn' + (link.featured ? ' is-featured' : '')} href={link.href} data-reveal onClick={(event) => openLink(event, link)} {...ext(link.href)}>
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
    <a className="tile" href={link.href} aria-label={link.label} title={link.label} data-reveal onClick={(event) => openLink(event, link)} {...ext(link.href)}>
      <Icon />
    </a>
  )
}

export default function Links({ links }) {
  const list = links.filter((l) => l.tier === 'list')
  const tiles = links.filter((l) => l.tier === 'icon')
  return (
    <div className="links-panel">
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
    </div>
  )
}
