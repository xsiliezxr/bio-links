// Única puerta de entrada a las variables VITE_* (acceso estático) + saneado.
const e = import.meta.env

export const text = (v = '') => String(v).trim().replace(/^["']|["']$/g, '')

// Acepta "github.com/x", "https://…" o el formato markdown "[x](https://…)"
export const url = (v) => {
  let s = text(v)
  const md = s.match(/\]\(([^)]+)\)/)
  if (md) s = md[1]
  if (!s) return ''
  return /^(https?:|mailto:|tel:|\/)/i.test(s) ? s : `https://${s}`
}

export const hint = (u) => {
  if (!/^https?:/i.test(u)) return ''
  try {
    const x = new URL(u)
    return (x.hostname + x.pathname).replace(/^www\./, '').replace(/\/$/, '')
  } catch {
    return ''
  }
}

export const ENV = {
  name: e.VITE_PROFILE_NAME,
  tagline: e.VITE_PROFILE_TAGLINE,
  bio: e.VITE_PROFILE_BIO,
  location: e.VITE_PROFILE_LOCATION,
  status: e.VITE_STATUS_TEXT,
  avatar: e.VITE_PROFILE_AVATAR_URL,
  link: {
    portfolio: e.VITE_LINK_PORTFOLIO,
    whatsapp: e.VITE_LINK_WHATSAPP,
    githubPersonal: e.VITE_LINK_GITHUB_PERSONAL,
    githubWork: e.VITE_LINK_GITHUB_WORK,
    linkedin: e.VITE_LINK_LINKEDIN,
    instagram: e.VITE_LINK_INSTAGRAM,
    facebook: e.VITE_LINK_FACEBOOK,
    x: e.VITE_LINK_X,
    tiktok: e.VITE_LINK_TIKTOK,
    youtube: e.VITE_LINK_YOUTUBE,
    cv: e.VITE_LINK_CV,
  },
  email: { personal: e.VITE_EMAIL_PERSONAL, work: e.VITE_EMAIL_WORK },
}
