'use client'

import { Children, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'
import Stack, { type StackApi } from './reactbits/Stack'

const DESKTOP = '(min-width: 900px)'

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(DESKTOP)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

const getSnapshot = () => window.matchMedia(DESKTOP).matches
// Mobile is the primary layout, so the server renders the stack.
const getServerSnapshot = () => false

/**
 * Mobile: a swipeable card stack (React Bits Stack) with dots and a Next
 * button. From 900px up: the plain 2x2 grid, where every project fits at once.
 * Links to a project's id (the logo rail under the hero) bring that card to
 * the front of the stack.
 */
export function ProjectTrack({ ids, children }: { ids: string[]; children: ReactNode }) {
  const isDesktop = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const cards = Children.toArray(children)
  const api = useRef<StackApi | null>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const showHash = (hash: string) => {
      const index = ids.indexOf(hash.replace(/^#/, ''))
      if (index >= 0) api.current?.show(index)
    }
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="#"]')
      if (link) showHash(link.getAttribute('href') ?? '')
    }
    showHash(window.location.hash)
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [ids, isDesktop])

  if (isDesktop) return <div className="track">{children}</div>

  return (
    <>
      <div className="pj-stack">
        <Stack
          cards={cards}
          apiRef={api}
          ariaLabel="Proyek, geser kartu untuk melihat yang lain"
          layout="fan"
          visible={3}
          spread={0.45}
          depth={0.4}
          radius={24}
          tilt={18}
          threshold={80}
          onChange={setActive}
        />
      </div>

      <div className="track-foot">
        <div className="dots" aria-hidden="true">
          {cards.map((_, i) => (
            <span key={i} className={i === active ? 'is-active' : undefined} />
          ))}
        </div>
        <button type="button" className="track-foot__next" onClick={() => api.current?.next()}>
          Swipe atau tap <span aria-hidden="true">→</span>
        </button>
      </div>
    </>
  )
}
