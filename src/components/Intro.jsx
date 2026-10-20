const COLS = 12
const ROWS = 20

// Cuadrícula de "píxeles" que cubre la pantalla y GSAP disuelve al abrir.
export default function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      {Array.from({ length: COLS * ROWS }, (_, i) => (
        <i key={i} style={{ background: i % 7 === 0 ? 'var(--amber)' : i % 3 === 0 ? 'var(--ink)' : 'var(--ember)' }} />
      ))}
    </div>
  )
}
