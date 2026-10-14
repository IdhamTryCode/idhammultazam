'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const GAP = 16 // keep in sync with .track gap in globals.css

/**
 * Horizontal snap carousel on mobile, plain 2x2 grid from 900px up — the
 * switch is driven entirely by the --pj-* custom properties, so this component
 * only has to keep the progress dots in step with scroll position.
 */
export function ProjectTrack({
  count,
  children,
}: {
  count: number
  children: React.ReactNode
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const sync = useCallback(() => {
    const track = trackRef.current
    const first = track?.firstElementChild as HTMLElement | null | undefined
    if (!track || !first) return

    const step = first.offsetWidth + GAP
    if (step <= GAP) return

    const index = Math.max(0, Math.min(count - 1, Math.round(track.scrollLeft / step)))
    setActive((current) => (current === index ? current : index))
  }, [count])

  useEffect(() => {
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [sync])

  return (
    <>
      <div className="track" ref={trackRef} onScroll={sync}>
        {children}
      </div>

      <div className="track-foot">
        <div className="dots" aria-hidden="true">
          {Array.from({ length: count }, (_, i) => (
            <span key={i} className={i === active ? 'is-active' : undefined} />
          ))}
        </div>
        <span className="track-foot__hint">Geser untuk lihat lainnya →</span>
      </div>
    </>
  )
}
