// Builds two DRAFT case-study pages into tcb-website/_drafts/.
// DRAFTS ONLY: not linked in nav/sitemap/index, robots=noindex until published.
// Paths use ../ because the files live one level below the site root (_drafts/).
// Run:  node _scraper/build-casestudy-drafts.mjs   (from project ROOT)
import fs from 'fs';
import path from 'path';

const OUTDIR = path.resolve('tcb-website/_drafts');
fs.mkdirSync(OUTDIR, { recursive: true });

const SPRITE = `  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <symbol id="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
    <symbol id="i-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></symbol>
    <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></symbol>
    <symbol id="i-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L7.6 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/></symbol>
    <symbol id="i-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></symbol>
    <symbol id="i-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></symbol>
    <symbol id="i-star" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z"/></symbol>
    <symbol id="i-fb" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"/></symbol>
    <symbol id="i-x" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.3 8.3L23 22h-6.6l-5.2-6.8L5.3 22H2l7.8-8.9L1.5 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.1 3.9H5.2L17.7 20Z"/></symbol>
    <symbol id="i-yt" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.1-.4-4.6a2.5 2.5 0 0 0-1.8-1.8C19.3 5.2 12 5.2 12 5.2s-7.3 0-8.8.4a2.5 2.5 0 0 0-1.8 1.8C1 8.9 1 12 1 12s0 3.1.4 4.6a2.5 2.5 0 0 0 1.8 1.8c1.5.4 8.8.4 8.8.4s7.3 0 8.8-.4a2.5 2.5 0 0 0 1.8-1.8C23 15.1 23 12 23 12Zm-13 3V9l5.2 3-5.2 3Z"/></symbol>
  </svg>`;

const HEADER = `  <div class="nav-scrim"></div>
  <header class="header">
    <div class="container header__inner">
      <a class="brand" href="../index.html" aria-label="TCB Metal Works — home"><img src="../assets/img/logo-light.svg" alt="TCB Metal Works" width="46" height="54" /></a>
      <nav class="nav" aria-label="Primary">
        <ul class="nav__list">
          <li><a class="nav__link" href="../index.html">Home</a></li>
          <li><a class="nav__link" href="../zoo-enclosures.html">Zoo Enclosures</a></li>
          <li class="nav__has-sub">
            <a class="nav__link nav__sub-toggle" href="../services.html" aria-haspopup="true" aria-expanded="false">Solutions <svg class="nav__chev"><use href="#i-chev"/></svg></a>
            <ul class="nav__sub">
              <li><a href="../zoo-enclosures.html">Zoo &amp; Animal Enclosures</a></li>
              <li><a href="../services.html#basement-beams">Structural Steel &amp; Beams</a></li>
              <li><a href="../services.html#stainless">Stainless Steel Fabrication</a></li>
              <li><a href="../services.html#press-brake">Press Brake Forming</a></li>
              <li><a href="../services.html#machining">Machining &amp; Turning</a></li>
              <li><a href="../services.html#truck-beds">Custom Truck Beds</a></li>
              <li><a href="../services.html">View All Solutions</a></li>
            </ul>
          </li>
          <li><a class="nav__link" href="../index.html#projects" aria-current="page">Projects</a></li>
          <li class="nav__has-sub">
            <a class="nav__link nav__sub-toggle" href="../resources.html" aria-haspopup="true" aria-expanded="false">Resources <svg class="nav__chev"><use href="#i-chev"/></svg></a>
            <ul class="nav__sub">
              <li><a href="../articles.html">Articles</a></li>
              <li><a href="../resources.html#blog">Blog</a></li>
              <li><a href="../resources.html#faqs">FAQs</a></li>
              <li><a href="../resources.html#guides">Guides</a></li>
            </ul>
          </li>
          <li><a class="nav__link" href="../about.html">About</a></li>
          <li><a class="nav__link" href="../contact.html">Contact</a></li>
        </ul>
        <a class="header__phone" href="tel:+12247669928"><svg><use href="#i-phone"/></svg>224-766-9928</a>
      </nav>
      <div class="header__cta">
        <a class="btn btn--primary btn--sm" href="../contact.html">Request A Quote</a>
        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>`;

const FOOTER = `  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <img src="../assets/img/logo-light.svg" alt="TCB Metal Works" width="64" height="75" />
          <p>TCB Metal Works delivers high-quality, custom metal fabrication built on integrity, craftsmanship, and long-lasting client trust.</p>
          <div class="footer__social"><a href="#" aria-label="Facebook"><svg><use href="#i-fb"/></svg></a><a href="#" aria-label="X (Twitter)"><svg><use href="#i-x"/></svg></a><a href="#" aria-label="YouTube"><svg><use href="#i-yt"/></svg></a></div>
        </div>
        <div><h4>Quick Links</h4><div class="footer__links"><a href="../about.html">About Us</a><a href="../services.html">Solutions</a><a href="../index.html#projects">Projects</a><a href="../resources.html">Resources</a><a href="../contact.html">Contact</a></div></div>
        <div><h4>Our Services</h4><div class="footer__links"><a href="../zoo-enclosures.html">Zoo &amp; Animal Enclosures</a><a href="../services.html">Structural Steel</a><a href="../services.html">Stainless Steel</a><a href="../services.html">Press Brake Forming</a><a href="../services.html">Custom Truck Beds</a></div></div>
        <div class="footer__news">
          <h4>Get In Touch</h4>
          <div class="footer__links" style="margin-bottom:1.5rem">
            <a href="tel:+12247669928"><svg width="15" height="15" style="display:inline;vertical-align:-2px;margin-right:6px;color:var(--ember)"><use href="#i-phone"/></svg>224-766-9928</a>
            <a href="mailto:tombruzan@tcbmetalworks.com"><svg width="15" height="15" style="display:inline;vertical-align:-2px;margin-right:6px;color:var(--ember)"><use href="#i-mail"/></svg>tombruzan@tcbmetalworks.com</a>
            <a href="https://maps.google.com/?q=1600+Layard+Ave+Racine+WI+53404" target="_blank" rel="noopener"><svg width="15" height="15" style="display:inline;vertical-align:-2px;margin-right:6px;color:var(--ember)"><use href="#i-pin"/></svg>1600 Layard Ave, Racine, WI 53404</a>
          </div>
          <p>Sign up for our newsletter for the latest news and updates.</p>
          <form onsubmit="event.preventDefault(); this.reset(); this.querySelector('button').textContent='Subscribed ✓';" style="display:flex;gap:.5rem"><input type="email" placeholder="Your email" aria-label="Email address" required /><button class="btn btn--primary btn--sm" type="submit">Subscribe</button></form>
        </div>
      </div>
      <div class="footer__bottom"><p>© <span id="year">2026</span> TCB Metal Works. All rights reserved.</p><p><a href="#">Privacy Policy</a></p></div>
    </div>
  </footer>`;

function specCard(label, value, note) {
  return `<div class="reason" data-reveal style="background:#fff"><span class="eyebrow eyebrow--sm">${label}</span><b>${value}</b>${note ? `<p>${note}</p>` : ''}</div>`;
}
function tick(strong, rest) {
  return `<li><span class="ic"><svg><use href="#i-check"/></svg></span><span><b>${strong}</b> ${rest}</span></li>`;
}
function galleryFig(src, alt, w, h, objClass) {
  return `          <figure class="project" data-reveal style="margin:0">
            <img src="../assets/img/${src}" alt="${alt}"${objClass ? ` class="${objClass}"` : ''} loading="lazy" decoding="async" width="${w}" height="${h}" />
          </figure>`;
}

function page(d) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${d.title}</title>
  <meta name="description" content="${d.desc}" />
  <meta name="keywords" content="${d.keywords}" />
  <link rel="canonical" href="https://tcbmetalworks.com${d.canonical}" />
  <meta name="theme-color" content="#0B101B" />
  <!-- DRAFT: not for indexing until published. Remove the next line to go live. -->
  <meta name="robots" content="noindex, nofollow" />
  <meta name="geo.region" content="US-WI" />
  <meta name="geo.placename" content="Racine, Wisconsin" />
  <meta name="geo.position" content="42.7405;-87.7887" />
  <meta name="ICBM" content="42.7405, -87.7887" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="TCB Metal Works" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:title" content="${d.title}" />
  <meta property="og:description" content="${d.ogdesc}" />
  <meta property="og:image" content="https://tcbmetalworks.com/assets/img/${d.hero}" />
  <meta property="og:image:width" content="${d.heroW}" />
  <meta property="og:image:height" content="${d.heroH}" />
  <meta property="og:url" content="https://tcbmetalworks.com${d.canonical}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${d.title}" />
  <meta name="twitter:description" content="${d.ogdesc}" />
  <meta name="twitter:image" content="https://tcbmetalworks.com/assets/img/${d.hero}" />
  <link rel="icon" href="../assets/img/favicon.png" sizes="192x192" />
  <link rel="apple-touch-icon" href="../assets/img/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../assets/css/styles.css" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(d.h1)},
    "description": ${JSON.stringify(d.desc)},
    "image": "https://tcbmetalworks.com/assets/img/${d.hero}",
    "url": "https://tcbmetalworks.com${d.canonical}",
    "about": ${JSON.stringify(d.about)},
    "mentions": { "@type": "${d.clientType}", "name": ${JSON.stringify(d.client)} },
    "author": { "@type": "MetalWorker", "@id": "https://tcbmetalworks.com/#business", "name": "TCB Metal Works" },
    "publisher": { "@type": "MetalWorker", "@id": "https://tcbmetalworks.com/#business", "name": "TCB Metal Works", "telephone": "+1-224-766-9928", "url": "https://tcbmetalworks.com/", "address": { "@type": "PostalAddress", "streetAddress": "1600 Layard Ave", "addressLocality": "Racine", "addressRegion": "WI", "postalCode": "53404", "addressCountry": "US" } }
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tcbmetalworks.com/" },
      { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://tcbmetalworks.com/#projects" },
      { "@type": "ListItem", "position": 3, "name": ${JSON.stringify(d.crumb)}, "item": "https://tcbmetalworks.com${d.canonical}" }
    ]
  }
  </script>
</head>
<body>
  <a href="#main" class="skip-link" style="position:absolute;left:-999px;top:0;background:#F27E06;color:#0B101B;padding:.6rem 1rem;z-index:999" onfocus="this.style.left='0'" onblur="this.style.left='-999px'">Skip to content</a>

${SPRITE}

${HEADER}

  <main id="main">
    <!-- PAGE HERO -->
    <section class="pagehero">
      <div class="pagehero__grain"></div>
      <div class="container pagehero__inner" data-reveal>
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="../index.html">Home</a><span>/</span><a href="../index.html#projects">Projects</a><span>/</span>${d.crumb}</nav>
        <span class="flagship__badge" style="margin-top:1rem"><svg><use href="#i-star"/></svg> ${d.badge}</span>
        <h1 style="margin-top:1rem">${d.h1}</h1>
        <p>${d.heroLede}</p>
        <div class="hero__actions" style="margin-top:2rem">
          <a class="btn btn--primary" href="../contact.html">Discuss a Similar Project <svg><use href="#i-arrow"/></svg></a>
          <a class="btn btn--ghost" href="../zoo-enclosures.html">Our Enclosure Work</a>
        </div>
      </div>
    </section>

    <!-- AT A GLANCE -->
    <section class="section">
      <div class="container">
        <div class="section-head center" data-reveal>
          <span class="eyebrow">Project at a Glance</span>
          <h2>${d.glanceH2}</h2>
        </div>
        <div class="cards" style="margin-top:2.5rem;grid-template-columns:repeat(auto-fill,minmax(min(100%,220px),1fr))" data-reveal-group>
          ${d.specs.map(s => specCard(s[0], s[1], s[2])).join('\n          ')}
        </div>
      </div>
    </section>

    <!-- OVERVIEW / CHALLENGE -->
    <section class="section alt">
      <div class="container split">
        <div class="split__media" data-reveal="left">
          <div class="frame frame--tall"><img src="../assets/img/${d.hero}" alt="${d.heroAlt}" loading="lazy" decoding="async" width="${d.heroW}" height="${d.heroH}" /></div>
          <div class="badge"><b>${d.badgeStat}</b><span>${d.badgeStatSub}</span></div>
        </div>
        <div class="split__content" data-reveal="right">
          <span class="eyebrow">The Challenge</span>
          <h2 style="margin-top:1rem">${d.challengeH2}</h2>
          ${d.challenge.map(p => `<p${p.lead ? ' class="lead" style="margin-top:1.25rem"' : ' style="margin-top:1rem"'}>${p.t}</p>`).join('\n          ')}
        </div>
      </div>
    </section>

    <!-- SOLUTION -->
    <section class="section">
      <div class="container">
        <div class="section-head center" data-reveal>
          <span class="eyebrow">Our Solution</span>
          <h2>${d.solutionH2}</h2>
          <p class="lead">${d.solutionLede}</p>
        </div>
        <div class="split" style="margin-top:3rem">
          <div class="split__content" data-reveal="left">
            <ul class="tick-list">
              ${d.solutionTicks.map(t => tick(t[0], t[1])).join('\n              ')}
            </ul>
          </div>
          <div class="split__content" data-reveal="right">
            <h3>${d.matH3}</h3>
            ${d.matParas.map(t => `<p style="margin-top:1rem">${t}</p>`).join('\n            ')}
            <a class="btn btn--primary" style="margin-top:1.75rem" href="../contact.html">Request a Consultation <svg><use href="#i-arrow"/></svg></a>
          </div>
        </div>
      </div>
    </section>

    <!-- RESULTS (dark) -->
    <section class="section dark">
      <div class="container">
        <div class="section-head center" data-reveal>
          <span class="eyebrow">The Outcome</span>
          <h2>${d.resultsH2}</h2>
          <p class="lead">${d.resultsLede}</p>
        </div>
        <div class="expertise" style="margin-top:3rem" data-reveal-group>
          ${d.results.map((r, i) => `<div class="expertise__item" data-reveal><div class="expertise__num">0${i + 1}</div><h3>${r[0]}</h3><p>${r[1]}</p></div>`).join('\n          ')}
        </div>
      </div>
    </section>

    <!-- GALLERY -->
    <section class="section">
      <div class="container">
        <div class="section-head center" data-reveal>
          <span class="eyebrow">Gallery</span>
          <h2>${d.galleryH2}</h2>
          <p class="lead">${d.galleryLede}</p>
        </div>
        <div class="projects" style="margin-top:3rem;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))" data-reveal-group>
${d.gallery.map(g => galleryFig(g.src, g.alt, g.w, g.h, g.obj)).join('\n')}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta">
      <div class="cta__bg"><img src="../assets/img/cta-bg.webp" alt="" aria-hidden="true" loading="lazy" width="1312" height="1070" /></div>
      <div class="container cta__inner" data-reveal>
        <span class="eyebrow" style="justify-content:center">${d.ctaEyebrow}</span>
        <h2 style="margin-top:1rem">${d.ctaH2}</h2>
        <p>${d.ctaP}</p>
        <div class="cta__actions">
          <a class="btn btn--primary" href="../contact.html">Request a Consultation <svg><use href="#i-arrow"/></svg></a>
          <a class="btn btn--ghost" href="tel:+12247669928"><svg><use href="#i-phone"/></svg> 224-766-9928</a>
        </div>
      </div>
    </section>
  </main>

${FOOTER}
  <script src="../assets/js/main.js" defer></script>
</body>
</html>
`;
}

// ---------------- DATA: Denver Zoo ----------------
const denver = {
  file: 'denver-zoo-australia-exhibit.html',
  canonical: '/denver-zoo-australia-exhibit/',
  title: 'Denver Zoo Australia Exhibit — TIG-Welded Aluminium Cassowary Enclosure | TCB Metal Works',
  desc: 'How TCB Metal Works designed and fabricated a TIG-welded aluminium cassowary enclosure for Denver Zoo’s Australia exhibit — secure containment, welded mesh, and a solid steel keeper door built to institutional standards.',
  ogdesc: 'A TIG-welded aluminium cassowary enclosure for Denver Zoo’s Australia exhibit — secure containment, welded mesh, and a solid steel keeper door.',
  keywords: 'Denver Zoo cassowary enclosure, TIG-welded aluminium enclosure, zoo exhibit fabrication, cassowary containment, welded mesh enclosure, keeper door, custom zoo enclosure',
  h1: 'Denver Zoo Australia Exhibit: A TIG-Welded Aluminium Cassowary Enclosure',
  crumb: 'Denver Zoo — Australia Exhibit',
  badge: 'Zoo Exhibit Case Study',
  hero: 'proj-denver-zoo.jpg', heroW: 1024, heroH: 1024,
  heroAlt: 'Denver Zoo Australia exhibit cassowary enclosure fabricated by TCB Metal Works',
  heroLede: 'For Denver Zoo’s Australia exhibit, TCB Metal Works engineered and built a secure enclosure for the cassowary — one of the most powerful birds in the world — using TIG-welded aircraft-grade aluminium, welded containment mesh, and a solid steel keeper door.',
  about: ['Zoo', 'Cassowary', 'Welded wire mesh', 'Aluminium'],
  client: 'Denver Zoo', clientType: 'Organization',
  glanceH2: 'The Denver Zoo Cassowary Enclosure',
  specs: [
    ['Client', 'Denver Zoo', 'A leading accredited zoo and conservation institution.'],
    ['Sector', 'Zoo Exhibit', 'Public-facing animal exhibit and containment.'],
    ['Species', 'Cassowary', 'A large, powerful ratite requiring high-security containment.'],
    ['Primary Material', 'TIG-Welded Aluminium', 'Corrosion-resistant, lightweight, and strong.'],
    ['Key Features', 'Welded Mesh + Steel Keeper Door', 'Engineered containment with safe keeper access.'],
    ['Built By', 'TCB Metal Works', 'Custom fabrication in Racine, Wisconsin.'],
  ],
  badgeStat: 'TIG-welded', badgeStatSub: 'aircraft-grade aluminium',
  challengeH2: 'Containing One of the World’s Most Powerful Birds',
  challenge: [
    { lead: true, t: 'A cassowary is not a typical exhibit animal. Standing up to six feet tall with dense, powerful legs and a dagger-like inner claw, it is widely considered one of the most dangerous birds to house. An enclosure for one has to hold up to real force while keeping keepers, the public, and the animal safe.' },
    { t: 'The Australia exhibit also demanded more than raw strength. The enclosure had to resist corrosion in a humid, frequently washed environment, give visitors clear sightlines into the habitat, and give keepers a safe, controlled way to enter and service the space — all without compromising containment.' },
    { t: 'That combination — security, durability, visibility, and safe access — is exactly the kind of one-off, get-it-right-the-first-time problem TCB is built for.' },
  ],
  solutionH2: 'Engineered Aluminium Containment, Built to Institutional Standards',
  solutionLede: 'We designed the enclosure around the animal — its strength, its behaviour, and the daily reality of keeper operations — then fabricated it to hold up for the long term.',
  solutionTicks: [
    ['TIG-welded aluminium frame', '— aircraft-grade aluminium, precision TIG-welded for clean, strong, corrosion-resistant joints.'],
    ['Welded containment mesh', '— engineered mesh sized and secured for a bird of the cassowary’s strength and reach.'],
    ['Solid steel keeper door', '— a heavy-duty access point that lets keepers enter and service the enclosure safely without a containment gap.'],
    ['Clear public sightlines', '— framing and mesh laid out to keep the habitat visible for guests while staying fully secure.'],
    ['Corrosion-resistant throughout', '— material and finish choices made for a humid, wash-down exhibit environment.'],
  ],
  matH3: 'Why Aluminium and Welded Mesh',
  matParas: [
    'Aircraft-grade aluminium gives a rare combination: it resists corrosion without coatings, stays light enough to work with in large spans, and — when TIG-welded — forms joints that are both clean-looking and genuinely strong. For a humid exhibit that gets cleaned often, that means a structure that holds its integrity for decades with minimal upkeep.',
    'Welded mesh, correctly sized and anchored to the frame, does the containment work. Paired with a solid steel keeper door, the result is a single engineered system — not a fence with a gate bolted on — where every element is specified for the species it holds.',
  ],
  resultsH2: 'A Secure, Durable Exhibit That Performs',
  resultsLede: 'The finished enclosure meets the zoo’s containment and safety requirements while standing up to daily use.',
  results: [
    ['Safe Containment', 'High-security containment engineered specifically for a cassowary’s strength and behaviour.'],
    ['Keeper-Safe Access', 'A solid steel keeper door gives staff a controlled, safe way to enter and service the space.'],
    ['Built to Last', 'Corrosion-resistant aluminium and welded mesh designed for a long service life with low maintenance.'],
    ['Institution-Grade', 'Fabricated to the standards an accredited zoo exhibit demands.'],
  ],
  galleryH2: 'Inside the Build',
  galleryLede: 'Details from the Denver Zoo Australia exhibit enclosure — frame, mesh, and keeper access.',
  gallery: [
    { src: 'proj-denver-zoo.jpg', alt: 'Denver Zoo Australia exhibit cassowary enclosure', w: 1024, h: 1024 },
    { src: 'zoo-mesh-systems.webp', alt: 'Welded containment mesh panels on the Denver Zoo enclosure', w: 1000, h: 595 },
    { src: 'keeper-doors.webp', alt: 'Solid steel keeper door on the Denver Zoo enclosure', w: 1024, h: 538, obj: 'obj-right' },
  ],
  ctaEyebrow: 'Zoo &amp; Animal Enclosures',
  ctaH2: 'Planning a Zoo Exhibit or Enclosure?',
  ctaP: 'Tell us about the species and the setting. Our specialists will help you scope, engineer, and fabricate secure, durable containment built to institutional standards.',
};

// ---------------- DATA: University of Miami ----------------
const miami = {
  file: 'university-of-miami-holding-pens.html',
  canonical: '/university-of-miami-swine-pens/',
  title: 'University of Miami Stainless Steel Holding Pens — Research Animal Enclosures | TCB Metal Works',
  desc: 'How TCB Metal Works fabricated custom stainless steel holding pens for the University of Miami — hygienic, cleanable, corrosion-resistant animal holding built for safe agricultural and veterinary research.',
  ogdesc: 'Custom stainless steel holding pens for the University of Miami — hygienic, cleanable, corrosion-resistant animal holding for research.',
  keywords: 'University of Miami holding pens, stainless steel animal holding, research animal enclosures, stainless steel fabrication, swine pens, hygienic animal holding, custom research holding pens',
  h1: 'University of Miami: Custom Stainless Steel Research Holding Pens',
  crumb: 'University of Miami — Holding Pens',
  badge: 'Research Facility Case Study',
  hero: 'proj-swine-pens.jpg', heroW: 1024, heroH: 1024,
  heroAlt: 'University of Miami custom stainless steel holding pens fabricated by TCB Metal Works',
  heroLede: 'For the University of Miami, TCB Metal Works fabricated custom stainless steel holding pens for agricultural and veterinary research — built for hygiene, corrosion resistance, and a long service life in a demanding, frequently sanitized environment.',
  about: ['Stainless steel', 'Animal husbandry', 'Welding', 'Galvanization'],
  client: 'University of Miami', clientType: 'CollegeOrUniversity',
  glanceH2: 'The University of Miami Holding Pens',
  specs: [
    ['Client', 'University of Miami', 'A major research university.'],
    ['Sector', 'Research &amp; Agriculture', 'Animal holding for research and husbandry.'],
    ['Application', 'Animal Holding Pens', 'Safe, contained holding for research animals.'],
    ['Primary Material', 'Stainless Steel', 'Hygienic, cleanable, corrosion-resistant.'],
    ['Key Priorities', 'Hygiene + Durability', 'Sanitary surfaces built for repeated wash-down.'],
    ['Built By', 'TCB Metal Works', 'Custom fabrication in Racine, Wisconsin.'],
  ],
  badgeStat: 'Stainless', badgeStatSub: 'hygienic &amp; cleanable',
  challengeH2: 'Holding That Meets Research Hygiene Standards',
  challenge: [
    { lead: true, t: 'Research animal holding lives or dies on cleanability. Pens are washed down constantly, exposed to waste and moisture, and expected to stay sanitary and structurally sound for years. Ordinary steel corrodes and traps contaminants in exactly the places you can’t afford them.' },
    { t: 'The University of Miami needed holding pens that could take that daily abuse — surfaces that sanitize easily, joints that don’t harbour bacteria, and a structure strong enough to safely contain the animals without degrading over time.' },
    { t: 'It’s a materials-and-fabrication problem before it’s anything else, and stainless steel done right is the answer.' },
  ],
  solutionH2: 'Custom Stainless Steel, Fabricated for Sanitation',
  solutionLede: 'We built the pens around the realities of a research facility — constant cleaning, corrosion exposure, and the need for safe, reliable containment.',
  solutionTicks: [
    ['Stainless steel construction', '— corrosion-resistant and hygienic, chosen to survive constant wash-down and waste exposure.'],
    ['Cleanable, sanitary surfaces', '— built so pens can be sanitized quickly and thoroughly between uses.'],
    ['Sound welded joints', '— fabricated to stay strong and avoid the crevices that trap contaminants.'],
    ['Secure containment', '— engineered to safely and reliably hold research animals day in, day out.'],
    ['Built for a long service life', '— a structure that holds up for years in a demanding environment.'],
  ],
  matH3: 'Why Stainless Steel',
  matParas: [
    'Stainless steel is the default material for hygienic environments for good reason: it resists corrosion without coatings that can chip or harbour bacteria, and its surfaces sanitize cleanly. In a research setting where pens are washed constantly and contamination is unacceptable, that property is the whole ballgame.',
    'The value we add is in the fabrication. Getting stainless holding right means clean, sound welds, smooth cleanable surfaces, and a structure engineered for safe containment — a custom build to the facility’s exact requirements, not an off-the-shelf pen forced to fit.',
  ],
  resultsH2: 'Hygienic, Durable Holding the Facility Can Rely On',
  resultsLede: 'The finished pens give the University sanitary, corrosion-resistant holding built to hold up under daily research use.',
  results: [
    ['Sanitary by Design', 'Stainless surfaces that sanitize cleanly between uses — built for research hygiene standards.'],
    ['Corrosion-Resistant', 'Material chosen to survive constant wash-down and waste exposure without degrading.'],
    ['Safe Containment', 'Engineered to reliably and safely contain research animals.'],
    ['Long Service Life', 'A durable, custom-built structure made to last in a demanding environment.'],
  ],
  galleryH2: 'Inside the Build',
  galleryLede: 'Details from the University of Miami stainless steel holding pens.',
  gallery: [
    { src: 'proj-swine-pens.jpg', alt: 'University of Miami stainless steel holding pens', w: 1024, h: 1024 },
    { src: 'steel-zoo-enclosures.webp', alt: 'Stainless steel pen framing and finish detail', w: 1000, h: 562 },
    { src: 'zoo-holding-areas.webp', alt: 'Array of interconnected stainless holding pens', w: 1024, h: 537 },
  ],
  ctaEyebrow: 'Research &amp; Animal Holding',
  ctaH2: 'Need Hygienic Stainless Holding or Enclosures?',
  ctaP: 'Tell us about your facility and requirements. We fabricate custom stainless steel holding and enclosures engineered for hygiene, durability, and safe containment.',
};

for (const d of [denver, miami]) {
  const out = path.join(OUTDIR, d.file);
  fs.writeFileSync(out, page(d));
  console.log('wrote', path.relative(process.cwd(), out));
}
console.log('\nDRAFTS built. Not linked in nav/sitemap/index. robots=noindex until you publish.');
