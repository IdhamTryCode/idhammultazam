'use client'

import { useSyncExternalStore } from 'react'

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

export function useIsDark() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
