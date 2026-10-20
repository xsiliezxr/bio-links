import { useMemo, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const GLYPHS = ['</>', '{ }', '#', ';', '01', '*', '+']
const COLORS = ['var(--ember)', 'var(--amber)', 'var(--fog)']
const KINDS = ['glyph', 'pixel', 'ring']

// Píxeles, anillos y símbolos de código flotando con poco brillo.
export default function Background() {
  const root = useRef(null)
  const items = useMemo(
    () => Array.from({ length: 26 }, (_, i) => ({
      id: i,
      kind: KINDS[i % 3],
      glyph: GLYPHS[i % GLYPHS.length],
      color: COLORS[i % 3],
      left: gsap.utils.random(0, 100),
      top: gsap.utils.random(0, 100),
      size: gsap.utils.random(10, 26),
      opacity: gsap.utils.random(0.07, 0.2),
    })),
    [],
  )

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      Array.from(root.current.children).forEach((el) => {
        gsap.to(el, {
          x: gsap.utils.random(-50, 50),
          y: gsap.utils.random(-70, 70),
          rotation: gsap.utils.random(-35, 35),
          duration: gsap.utils.random(6, 12),
          ease: 'sine.inOut', repeat: -1, yoyo: true,
        })
      })
    })
  }, { scope: root })

  return (
    <div className="bg" ref={root} aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.id}
          className={`bg-item ${it.kind}`}
          style={{ left: `${it.left}%`, top: `${it.top}%`, '--s': `${it.size}px`, color: it.color, opacity: it.opacity }}
        >
          {it.kind === 'glyph' ? it.glyph : null}
        </span>
      ))}
    </div>
  )
}
