/**
 * Runs synchronously in <head>, before first paint, so the page never flashes
 * the wrong colour scheme. Kept separate from script.js (which is deferred) and
 * out of an inline <script> so the CSP can keep script-src at 'self'.
 */
(function () {
  var t = null;
  try { t = localStorage.getItem('ihm-theme'); } catch (e) {}
  if (t !== 'light' && t !== 'dark') {
    t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', t);
})();
