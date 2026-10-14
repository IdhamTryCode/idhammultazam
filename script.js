/**
 * Behaviour ported from the "Portfolio v2" Claude Design component:
 * theme toggle, scroll-reveal, and the mobile project-carousel dots.
 */
(function () {
  'use strict';

  var THEME_KEY = 'ihm-theme';
  var root = document.documentElement;

  /* ---------------------------------------------------------- theme --- */

  var toggle = document.getElementById('theme-toggle');

  function syncToggleLabel() {
    if (!toggle) return;
    var label = root.getAttribute('data-theme') === 'dark'
      ? 'Ganti ke mode terang'
      : 'Ganti ke mode gelap';
    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('title', label);
  }

  syncToggleLabel();

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      syncToggleLabel();
    });
  }

  /* --------------------------------------------------------- reveal --- */

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function setupReveal() {
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

    // Only animate blocks that start below the fold; anything already visible
    // stays put so the first paint is never blank.
    var targets = Array.prototype.filter.call(
      document.querySelectorAll('[data-reveal]'),
      function (el) { return el.getBoundingClientRect().top > window.innerHeight; }
    );
    if (!targets.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px' });

    targets.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity .5s ease-out, transform .5s ease-out';
      io.observe(el);
    });
  }

  setupReveal();

  /* ----------------------------------------------- carousel progress --- */

  var track = document.getElementById('project-track');
  var dotList = document.getElementById('track-dots');

  if (track && dotList) {
    var dots = Array.prototype.slice.call(dotList.children);
    var GAP = 16; // matches .track gap

    var updateDots = function () {
      var first = track.firstElementChild;
      if (!first) return;
      var step = first.offsetWidth + GAP;
      if (step <= GAP) return;
      var index = Math.max(0, Math.min(dots.length - 1, Math.round(track.scrollLeft / step)));
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === index);
      });
    };

    track.addEventListener('scroll', updateDots, { passive: true });
    window.addEventListener('resize', updateDots);
    updateDots();
  }
})();
