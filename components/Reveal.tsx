'use client'

import { useEffect } from 'react'

/**
 * Fades in `[data-reveal]` blocks as they scroll into view. Ported from the
 * Claude Design component: blocks already visible on load are left untouched,
 * so the first screen never starts blank.
 */
export function Reveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    ).filter((el) => el.getBoundingClientRect().top > window.innerHeight)

    if (targets.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'none'
          io.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -6% 0px' },
    )

    for (const el of targets) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(14px)'
      el.style.transition = 'opacity .5s ease-out, transform .5s ease-out'
      io.observe(el)
    }

    return () => io.disconnect()
  }, [])

  return null
}
