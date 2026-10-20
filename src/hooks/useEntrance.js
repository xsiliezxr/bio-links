import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// Apertura: el plano de píxeles se disuelve → avatar "pop" → nombre en pasos (pixel)
// → viñetas que se revelan de izquierda a derecha, como un panel de cómic.
export default function useEntrance(scope) {
  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('.intro', { display: 'none' })
    })

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline()
      tl.to('.intro i', { scale: 0, duration: 0.4, ease: 'steps(4)', stagger: { amount: 0.9, from: 'random' } })
        .set('.intro', { display: 'none' })
        .from('.avatar', { scale: 0.2, rotation: -25, opacity: 0, duration: 0.6, ease: 'back.out(2.4)', clearProps: 'all' }, 0.45)
        .from('.name > *', { x: -50, opacity: 0, duration: 0.5, ease: 'steps(6)', stagger: 0.15, clearProps: 'all' }, 0.7)
        .fromTo(
          '[data-reveal]',
          { opacity: 0, y: 24, clipPath: 'inset(0% 100% 0% 0%)' },
          {
            opacity: 1, y: 0, clipPath: 'inset(-20px -24px -24px -20px)',
            duration: 0.55, ease: 'power3.out', stagger: 0.06,
            clearProps: 'opacity,transform,clipPath', // devuelve el control del hover al CSS
          },
          0.85,
        )
    })
  }, { scope })
}
