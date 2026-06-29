/* jshint esversion: 9 */
(function () {
  'use strict';

  // ── Helpers ──────────────────────────────────────────────────────
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // ── Footer year ──────────────────────────────────────────────────
  const yearEl = $('#footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Sticky header ────────────────────────────────────────────────
  const header = $('#site-header');
  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // ── Mobile nav toggle ────────────────────────────────────────────
  const toggle = $('#nav-toggle');
  const navList = $('#nav-list');

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open', !expanded);
    document.body.style.overflow = expanded ? '' : 'hidden';
  });

  // Close mobile menu when a link is clicked
  $$('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navList.classList.contains('open')) {
      toggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('open');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });

  // ── Active nav link on scroll ─────────────────────────────────────
  const sections = $$('section[id]');
  const navLinks = $$('.nav__link');

  function onScroll() {
    const scrollY = window.scrollY;
    let current = '';

    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (scrollY >= top) current = section.id;
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${current}`
      );
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Scroll-reveal with IntersectionObserver ───────────────────────
  const reveals = $$('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Stagger siblings in the same parent
            const siblings = $$('.reveal', entry.target.parentElement);
            const idx = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${idx * 60}ms`;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback for old browsers
    reveals.forEach(el => el.classList.add('visible'));
  }

})();
