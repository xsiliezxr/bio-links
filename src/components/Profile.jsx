import { FALLBACK_AVATAR } from '../config/site'

export default function Profile({ profile }) {
  const [first, ...rest] = profile.name.split(/\s+/)

  const onError = (e) => {
    e.currentTarget.onerror = null
    e.currentTarget.src = FALLBACK_AVATAR
  }

  return (
    <header className="profile">
      {profile.status && (
        <p className="sticker" data-reveal><i />{profile.status}</p>
      )}
      <div className="profile-visual">
        <div className="avatar">
          <img src={profile.avatar} alt={profile.name} onError={onError} />
        </div>
        <h1 className="name">
          <span>{first}</span>
          {rest.length > 0 && <em>{rest.join(' ')}</em>}
        </h1>
      </div>
      {profile.tagline && <p className="role" data-reveal>{profile.tagline}</p>}
      {profile.location && <p className="loc" data-reveal>{profile.location}</p>}
      {profile.bio && <p className="bubble" data-reveal>{profile.bio}</p>}
      <p className="profile-note">Credenciales, código y contacto en un solo lugar.</p>
    </header>
  )
}
