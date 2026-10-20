import { ENV, text, url, hint } from './env'

export const FALLBACK_AVATAR = '/avatar.svg'

export const profile = {
  name: text(ENV.name) || 'Tu Nombre',
  tagline: text(ENV.tagline),
  bio: text(ENV.bio),
  location: text(ENV.location),
  status: text(ENV.status),
  avatar: text(ENV.avatar) || FALLBACK_AVATAR,
}

// tier: 'list' = botón con texto · 'icon' = solo ícono. El orden es el de aparición.
const DEFS = [
  { id: 'portfolio', label: 'Portafolio', tier: 'list', featured: true },
  { id: 'whatsapp', label: 'WhatsApp', tier: 'list', note: 'Escríbeme directo' },
  { id: 'githubPersonal', label: 'GitHub personal', tier: 'list' },
  { id: 'githubWork', label: 'GitHub trabajo', tier: 'list' },
  { id: 'linkedin', label: 'LinkedIn', tier: 'list' },
  { id: 'instagram', label: 'Instagram', tier: 'icon' },
  { id: 'facebook', label: 'Facebook', tier: 'icon' },
  { id: 'x', label: 'X', tier: 'icon' },
  { id: 'tiktok', label: 'TikTok', tier: 'icon' },
  { id: 'youtube', label: 'YouTube', tier: 'icon' },
  { id: 'cv', label: 'Descargar CV', tier: 'icon' },
]

export const links = DEFS.map((d) => ({ ...d, href: url(ENV.link[d.id]) }))
  .filter((d) => d.href)
  .map((d) => ({ ...d, hint: d.note ?? hint(d.href) }))

export const emails = [
  { id: 'personal', label: 'Personal', addr: text(ENV.email.personal) },
  { id: 'work', label: 'Trabajo', addr: text(ENV.email.work) },
].filter((m) => m.addr)
