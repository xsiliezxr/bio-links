import { useCallback, useRef, useState } from 'react'

export default function useCopy() {
  const [message, setMessage] = useState('')
  const timer = useRef()

  const copy = useCallback(async (text) => {
    let ok = false
    try {
      await navigator.clipboard.writeText(text)
      ok = true
    } catch {
      // Fallback para navegadores internos (Instagram, TikTok…)
      const el = document.createElement('textarea')
      el.value = text
      el.style.cssText = 'position:fixed;opacity:0'
      document.body.appendChild(el)
      el.select()
      try { ok = document.execCommand('copy') } catch { /* noop */ }
      el.remove()
    }
    setMessage(ok ? '¡Copiado!' : 'No se pudo copiar')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setMessage(''), 1800)
  }, [])

  return [message, copy]
}
