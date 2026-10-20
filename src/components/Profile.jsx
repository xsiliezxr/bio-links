import { useEffect, useState } from 'react'
import { FALLBACK_AVATAR } from '../config/site'

export default function Profile({ profile }) {
  const [first, ...rest] = profile.name.split(/\s+/)
  const [typedBio, setTypedBio] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!profile.bio) {
      setIsTyping(false)
      return undefined
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedBio(profile.bio)
      setIsTyping(false)
      return undefined
    }

    let index = 0
    setTypedBio('')
    setIsTyping(true)
    const timer = window.setInterval(() => {
      index += 1
      setTypedBio(profile.bio.slice(0, index))
      if (index >= profile.bio.length) {
        window.clearInterval(timer)
        setIsTyping(false)
      }
    }, 32)

    return () => window.clearInterval(timer)
  }, [profile.bio])

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
      {profile.bio && (
        <p className={'bubble' + (isTyping ? ' is-typing' : '')} data-reveal>
          {typedBio}<span className="typing-cursor" aria-hidden="true" />
        </p>
      )}
      <p className="profile-note">El trabajo bien hecho.</p>
    </header>
  )
}
