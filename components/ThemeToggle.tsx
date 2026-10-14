'use client'

import { useSyncExternalStore } from 'react'

const THEME_KEY = 'ihm-theme'

/**
 * The `data-theme` attribute on <html> is the source of truth — it is set by
 * the inline bootstrap in app/layout.tsx before first paint, so React reads it
 * as an external store rather than trying to own it. The server snapshot is
 * `false` (light), which matches the markup rendered on the server.
 */
function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  })
  return () => observer.disconnect()
}

function getSnapshot() {
  return document.documentElement.getAttribute('data-theme') === 'dark'
}

function getServerSnapshot() {
  return false
}

/**
 * Both icons are always rendered — globals.css shows one or the other off
 * `[data-theme]`, so the right icon is correct from the very first paint and
 * never waits on hydration.
 */
export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const label = isDark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'

  function toggleTheme() {
    const root = document.documentElement
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    try {
      localStorage.setItem(THEME_KEY, next)
    } catch {
      /* private mode / storage disabled — the toggle still works for this visit */
    }
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <svg
        className="icon-sun"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg
        className="icon-moon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  )
}
