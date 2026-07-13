/* TCB Metal Works — interactions & subtle motion (vanilla, deferred) */
(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- Header: solid on scroll ---------- */
  const header = $('.header');
  const onScroll = () => header && header.classList.toggle('is-solid', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  const toggle = $('.nav-toggle');
  const scrim  = $('.nav-scrim');
  const closeNav = () => { document.body.classList.remove('nav-open'); toggle?.setAttribute('aria-expanded', 'false'); };
  const openNav  = () => { document.body.classList.add('nav-open');    toggle?.setAttribute('aria-expanded', 'true'); };
  toggle?.addEventListener('click', () => document.body.classList.contains('nav-open') ? closeNav() : openNav());
  scrim?.addEventListener('click', closeNav);
  $$('.nav__link:not(.nav__sub-toggle)').forEach(a => a.addEventListener('click', closeNav));
  $$('.nav__sub a').forEach(a => a.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

  /* Nav dropdowns — accordion toggle inside the mobile drawer (supports multiple) */
  $$('.nav__sub-toggle').forEach(st => {
    st.addEventListener('click', (e) => {
      if (window.matchMedia('(max-width: 1024px)').matches) {
        e.preventDefault();
        const parent = st.closest('.nav__has-sub');
        const open = parent.classList.toggle('is-open');
        st.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
    });
  });

  /* ---------- Scroll reveals ---------- */
  const reveals = $$('[data-reveal]');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-in'));
  } else {
    // stagger siblings sharing a [data-reveal-group]
    $$('[data-reveal-group]').forEach(group => {
      $$('[data-reveal]', group).forEach((el, i) => el.style.setProperty('--d', (i * 70) + 'ms'));
    });
    // threshold 0 + a bottom rootMargin: reveals once the element's top edge rises into view.
    // (A percentage threshold can never be met by elements taller than the viewport —
    //  e.g. a long article body — which would leave them stuck at opacity:0.)
    // threshold 0: a percentage threshold can never be met by elements taller than the
    // viewport (e.g. a long article body), which would leave them stuck at opacity:0.
    const pending = new Set(reveals);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) reveal(e.target); });
    }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });
    function reveal(el) {
      el.classList.add('is-in');
      io.unobserve(el);
      pending.delete(el);
    }
    reveals.forEach(el => io.observe(el));

    // Safety sweep: a big jump (TOC anchor link, fast scroll) can carry an element from
    // below the band to above it without IntersectionObserver ever firing — it only
    // reports state *changes*. Debounced on scroll-end, so it costs nothing while idle.
    let sweepT;
    const sweep = () => {
      pending.forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight) reveal(el); });
    };
    window.addEventListener('scroll', () => { clearTimeout(sweepT); sweepT = setTimeout(sweep, 120); }, { passive: true });
    setTimeout(sweep, 250);   // catch anything already in view on load
  }

  /* ---------- Count-up stats ---------- */
  const counters = $$('[data-count]');
  const runCount = (el) => {
    const end = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    if (reduce) { el.textContent = end + suffix; return; }
    const dur = 1800, t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.firstChild.nodeValue = Math.round(end * eased).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    };
    // keep the suffix span intact: ensure a text node exists first
    if (!el.firstChild || el.firstChild.nodeType !== 3) el.insertBefore(document.createTextNode('0'), el.firstChild);
    requestAnimationFrame(tick);
  };
  if (counters.length) {
    const cio = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => { if (e.isIntersecting) { runCount(e.target); obs.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(el => cio.observe(el));
  }

  /* ---------- Hero parallax (subtle, desktop only) ---------- */
  const heroImg = $('.hero__media img');
  if (heroImg && !reduce && window.matchMedia('(min-width: 861px) and (pointer: fine)').matches) {
    let ticking = false;
    const move = () => {
      const y = window.scrollY;
      if (y < window.innerHeight) heroImg.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.02)`;
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(move); ticking = true; } }, { passive: true });
  }

  /* ---------- Testimonials slider ---------- */
  const track = $('.quotes__track');
  if (track) {
    const slides = $$('.quotes__slide', track);
    const dotsWrap = $('.quotes__dots');
    let idx = 0, timer;
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', `Testimonial ${i + 1}`);
      b.addEventListener('click', () => { go(i); restart(); });
      dotsWrap.appendChild(b);
    });
    const dots = $$('button', dotsWrap);
    const go = (n) => {
      idx = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
      dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
    };
    const restart = () => { clearInterval(timer); timer = setInterval(() => go(idx + 1), 4000); };
    // Lock the track to the tallest testimonial so it never grows/shrinks as it cycles.
    // Re-measured on resize (and after fonts load) so it stays correct at every screen size.
    const sizeTrack = () => {
      let max = 0;
      slides.forEach(s => {
        const prev = s.style.cssText;
        s.style.cssText = 'position:absolute;top:0;left:0;right:0;height:auto;opacity:0;visibility:hidden;transform:none;display:block;pointer-events:none';
        max = Math.max(max, s.offsetHeight);
        s.style.cssText = prev;
      });
      if (max) track.style.minHeight = Math.ceil(max) + 'px';
    };
    sizeTrack();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sizeTrack);
    let rsz; window.addEventListener('resize', () => { clearTimeout(rsz); rsz = setTimeout(sizeTrack, 200); }, { passive: true });
    go(0); restart();
    // pause while the visitor is reading (hover or keyboard focus anywhere in the block)
    const quotes = track.closest('.quotes') || track;
    quotes.addEventListener('mouseenter', () => clearInterval(timer));
    quotes.addEventListener('mouseleave', restart);
    quotes.addEventListener('focusin', () => clearInterval(timer));
    quotes.addEventListener('focusout', restart);
  }

  /* ---------- Contact form ---------- */
  const form = $('#quote-form');
  if (form) {
    const status = $('.form__status', form);
    const setInvalid = (field, on) => field.closest('.field').classList.toggle('invalid', on);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let firstBad = null;
      $$('[required]', form).forEach(input => {
        const empty = !input.value.trim();
        const badEmail = input.type === 'email' && input.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value);
        const bad = empty || badEmail;
        setInvalid(input, bad);
        if (bad && !firstBad) firstBad = input;
      });
      if (firstBad) { firstBad.focus(); status.className = 'form__status bad'; status.textContent = 'Please complete the highlighted fields.'; return; }
      // Demo only — no backend. Wire this to your form handler / email service.
      status.className = 'form__status ok';
      status.textContent = "Thanks — your request has been received. We'll be in touch within one business day.";
      form.reset();
    });
    $$('input, textarea, select', form).forEach(i => i.addEventListener('blur', () => {
      if (i.hasAttribute('required')) setInvalid(i, !i.value.trim());
    }));
  }

  /* ---------- Scroll progress bar ---------- */
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  let barTicking = false;
  const updateBar = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(window.scrollY / h, 1) : 0) + ')';
    barTicking = false;
  };
  updateBar();
  window.addEventListener('scroll', () => { if (!barTicking) { requestAnimationFrame(updateBar); barTicking = true; } }, { passive: true });

  /* ---------- Gentle scroll parallax on framed feature images ---------- */
  if (!reduce && window.matchMedia('(min-width: 861px) and (pointer: fine)').matches) {
    const frames = $$('.frame img');
    let frameTicking = false;
    const moveFrames = () => {
      const vh = window.innerHeight;
      frames.forEach(img => {
        const r = img.getBoundingClientRect();
        if (r.bottom > 0 && r.top < vh) {
          const progress = (r.top + r.height / 2 - vh / 2) / vh;   // -0.5 … 0.5
          img.style.transform = 'translate3d(0,' + (progress * -18).toFixed(1) + 'px,0) scale(1.06)';
        }
      });
      frameTicking = false;
    };
    moveFrames();
    window.addEventListener('scroll', () => { if (!frameTicking) { requestAnimationFrame(moveFrames); frameTicking = true; } }, { passive: true });
  }

  /* ---------- Flowing gradient mesh in CTA bands + cursor-reactive glow ---------- */
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  $$('.cta').forEach(cta => {
    if (cta.querySelector('.gradient-flow')) return;
    const gf = document.createElement('div');
    gf.className = 'gradient-flow';
    gf.setAttribute('aria-hidden', 'true');
    gf.innerHTML = '<span class="g1"></span><span class="g2"></span><span class="g3"></span>' +
                   (finePointer ? '<span class="gp"></span>' : '');
    cta.prepend(gf);

    // Cursor-following glow (desktop / fine pointer only). Driven by user input, lerped for smoothness.
    const pointer = gf.querySelector('.gp');
    if (!pointer) return;
    let curX = 0, curY = 0, tgX = 0, tgY = 0, raf = null;
    const settled = () => Math.abs(tgX - curX) < 0.4 && Math.abs(tgY - curY) < 0.4;
    const loop = () => {
      curX += (tgX - curX) * 0.12;
      curY += (tgY - curY) * 0.12;
      pointer.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, 0)`;
      raf = settled() ? null : requestAnimationFrame(loop);
    };
    cta.addEventListener('pointermove', (e) => {
      const rect = cta.getBoundingClientRect();
      tgX = e.clientX - rect.left - rect.width / 2;
      tgY = e.clientY - rect.top - rect.height / 2;
      pointer.style.opacity = '0.85';
      if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });
    cta.addEventListener('pointerleave', () => {
      tgX = 0; tgY = 0;
      pointer.style.opacity = '';
      if (!raf) raf = requestAnimationFrame(loop);
    });
  });

  /* ---------- Hero welding sparks — ambient, blurred, behind the headline ----------
     A canvas spark spray whose emitter sits on the arc in hero.jpg (~52% / 56%), so the
     animated sparks read as a continuation of the photo's molten weld. The canvas paints
     only bright pixels; CSS blurs + screen-blends the whole layer so it never fights the
     type. Paused when the hero is off-screen or the tab is hidden; skipped for reduced-motion. */
  (function heroSparks () {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'hero__sparks';
    canvas.setAttribute('aria-hidden', 'true');
    hero.insertBefore(canvas, hero.querySelector('.hero__inner') || null);
    const ctx = canvas.getContext('2d');
    const MAX = window.matchMedia('(max-width: 860px)').matches ? 120 : 230;

    const makeSprite = (core, mid) => {
      const s = document.createElement('canvas'); s.width = s.height = 32;
      const c = s.getContext('2d');
      const g = c.createRadialGradient(16, 16, 0, 16, 16, 16);
      g.addColorStop(0, core); g.addColorStop(0.42, mid); g.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = g; c.fillRect(0, 0, 32, 32); return s;
    };
    const sprHot   = makeSprite('rgba(255,255,255,1)', 'rgba(255,214,140,.6)');
    const sprEmber = makeSprite('rgba(255,188,108,1)', 'rgba(242,126,6,.45)');

    let W = 0, H = 0, DPR = 1, ex = 0, ey = 0;
    const sparks = [];

    // The white-hot arc in hero.jpg, as a fraction of the photo's natural size.
    // We re-project it to on-screen hero coords through the img's object-fit:cover
    // crop + parallax transform, so the emitter stays locked to the real weld.
    const ARC = { x: 0.558, y: 0.548 };
    const heroImg = hero.querySelector('.hero__media img');
    function locateArc () {
      if (!heroImg || !heroImg.naturalWidth) { ex = W * 0.55; ey = H * 0.66; return; }
      const ir = heroImg.getBoundingClientRect(), hr = hero.getBoundingClientRect();
      const nW = heroImg.naturalWidth, nH = heroImg.naturalHeight;
      const scale = Math.max(ir.width / nW, ir.height / nH);
      const offX = (ir.width - nW * scale) / 2, offY = (ir.height - nH * scale) / 2;
      ex = (ir.left + offX + ARC.x * nW * scale) - hr.left;
      ey = (ir.top  + offY + ARC.y * nH * scale) - hr.top;
    }
    if (heroImg) heroImg.addEventListener('load', locateArc);

    function resize () {
      const r = hero.getBoundingClientRect();
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      locateArc();
    }

    function spawn () {
      const ang = (-Math.PI * 0.32) + Math.random() * (Math.PI * 0.92);   // fan right + down
      const speed = 0.8 + Math.random() * Math.random() * 9.4;
      sparks.push({
        x: ex + (Math.random() - 0.5) * 16, y: ey + (Math.random() - 0.5) * 16, px: 0, py: 0,
        vx: Math.cos(ang) * speed, vy: Math.sin(ang) * speed - Math.random() * 1.6,
        life: 1, decay: 0.009 + Math.random() * 0.018,
        size: 1.0 + Math.random() * 2.6, streak: speed > 4.6, split: Math.random() < 0.14
      });
    }

    let last = 0, flick = 0, running = false, rafId = 0, fc = 0;
    function frame (t) {
      if (!running) return;
      const dt = Math.min(2.4, (t - last) / 16.67 || 1); last = t;
      if ((fc = (fc + 1) % 12) === 0) locateArc();     // track the arc through parallax
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';

      flick += (Math.random() - 0.5) * 0.09; flick *= 0.9;      // live-arc flicker
      ctx.globalAlpha = Math.max(0.05, Math.min(0.26, 0.16 * (0.55 + flick)));
      ctx.drawImage(sprHot, ex - 150, ey - 150, 300, 300);      // molten weld-pool glow

      if (sparks.length < MAX) { const n = 2 + ((Math.random() * 4) | 0); for (let i = 0; i < n; i++) spawn(); }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i];
        p.px = p.x; p.py = p.y;
        p.vy += 0.09 * dt; p.vx *= 0.985; p.vy *= 0.99;
        p.x += p.vx * dt; p.y += p.vy * dt; p.life -= p.decay * dt;
        if (p.life <= 0 || p.y > H + 24) { sparks.splice(i, 1); continue; }

        if (p.split && p.life < 0.5) {                          // crackle/pop
          p.split = false;
          for (let k = 0; k < 3 && sparks.length < MAX; k++) sparks.push({
            x: p.x, y: p.y, px: p.x, py: p.y,
            vx: (Math.random() - 0.5) * 2.6, vy: (Math.random() - 0.5) * 2.6 - 0.5,
            life: 0.5, decay: 0.03 + Math.random() * 0.03, size: 0.6 + Math.random() * 0.9, streak: false, split: false
          });
        }

        const a = p.life * p.life;
        const spr = p.life > 0.55 ? sprHot : sprEmber;          // cools white-hot → ember
        const sz = p.size * (0.6 + p.life * 1.2) * 8.5;   // bigger, softer spark radius
        if (p.streak) {
          ctx.globalAlpha = a * 0.28;
          ctx.strokeStyle = p.life > 0.55 ? 'rgba(255,226,172,1)' : 'rgba(242,140,40,1)';
          ctx.lineWidth = p.size * 0.9;
          ctx.beginPath(); ctx.moveTo(p.px, p.py); ctx.lineTo(p.x, p.y); ctx.stroke();
        }
        ctx.globalAlpha = a * 0.5;                          // weaker light
        ctx.drawImage(spr, p.x - sz / 2, p.y - sz / 2, sz, sz);
      }
      rafId = requestAnimationFrame(frame);
    }

    function start () { if (running) return; running = true; last = 0; rafId = requestAnimationFrame(frame); }
    function stop () { running = false; cancelAnimationFrame(rafId); }

    resize();
    let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 180); }, { passive: true });
    document.addEventListener('visibilitychange', () => { document.hidden ? stop() : start(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(es => es.forEach(e => (e.isIntersecting ? start() : stop())), { threshold: 0 }).observe(hero);
    } else { start(); }
  })();

  /* ---------- Article: sticky TOC scroll-spy ---------- */
  const toc = $('.toc');
  if (toc && 'IntersectionObserver' in window) {
    const links = $$('a[href^="#"]', toc);
    const map = new Map();
    links.forEach(a => {
      const target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) map.set(target, a);
    });
    if (map.size) {
      const spy = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const active = map.get(e.target);
            links.forEach(l => l.classList.toggle('is-active', l === active));
          }
        });
      }, { rootMargin: '-96px 0px -68% 0px', threshold: 0 });
      map.forEach((_, target) => spy.observe(target));
    }
  }

  /* ---------- Footer year ---------- */
  const yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();
})();
