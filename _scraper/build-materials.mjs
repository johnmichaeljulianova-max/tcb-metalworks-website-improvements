import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('tcb-website');
const src = await readFile(path.join(ROOT, 'what-is-zoo-caging.html'), 'utf8');
const chrome = src.slice(src.indexOf('<body>'), src.indexOf('<main id="main">'));
const tail   = src.slice(src.indexOf('<footer class="footer">'));

const SLUG = 'choosing-the-right-materials-for-zoo-enclosures.html';
const URL  = 'https://tcbmetalworks.com/choosing-the-right-materials-for-zoo-enclosures/';
const IMG  = 'https://tcbmetalworks.com/assets/img/steel-zoo-enclosures-og.jpg';
const TITLE = "Choosing the Right Materials for Zoo Enclosures";
const H1   = "Choosing the Right Materials for Zoo Enclosures";
const DESC = "Discover how carbon steel, stainless steel, aluminium, HDPE, and protective finishes shape the safety, durability, and lifespan of a zoo enclosure.";
const KEYWORDS = "zoo enclosure materials, materials for zoo enclosures, carbon steel, stainless steel, aluminium, HDPE, hot-dip galvanizing, powder coating, zoo enclosure fabrication";
const DATE = "2026-07-10";
const WIKI_GALV = "https://en.wikipedia.org/wiki/Galvanization";

const MAIN = `  <main id="main">
    <!-- HERO BANNER -->
    <section class="pagehero">
      <div class="pagehero__grain"></div>
      <div class="container pagehero__inner" data-reveal>
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="resources.html#blog">Blog</a><span>/</span>Choosing Enclosure Materials</nav>
        <span class="eyebrow" style="margin-top:1rem">Blog &amp; Insights</span>
        <h1 style="margin-top:1rem">${H1}</h1>
        <div class="article-meta">
          <span><svg><use href="#i-user"/></svg>By <strong>TCB Metal Works</strong></span>
          <span><svg><use href="#i-clock"/></svg>15 min read</span>
          <span><svg><use href="#i-calendar"/></svg>Last updated <time datetime="${DATE}">July 10, 2026</time></span>
        </div>
      </div>
    </section>

    <!-- ARTICLE BODY -->
    <section class="section">
      <div class="container article-wrap">

        <aside class="toc" data-reveal="left">
          <nav aria-label="Table of contents">
            <p class="toc__title">In This Article</p>
            <ol>
              <li><a href="#application">Start with the Application</a></li>
              <li><a href="#carbon-steel">Carbon Steel</a></li>
              <li><a href="#stainless-steel">Stainless Steel</a></li>
              <li><a href="#aluminium">Aluminium</a></li>
              <li><a href="#hdpe">HDPE</a></li>
              <li><a href="#finishes">Protective Finishes</a></li>
              <li><a href="#performance">Performance, Not Preference</a></li>
            </ol>
          </nav>
        </aside>

        <article class="prose" data-reveal>

          <figure class="article-figure">
            <img src="assets/img/steel-zoo-enclosures.webp"
                 alt="Precision-fabricated stainless steel animal enclosure bars and gates by TCB Metal Works — one of several materials chosen to fit each part of a zoo enclosure"
                 width="1000" height="562" fetchpriority="high" decoding="async" />
            <figcaption>Precision-fabricated stainless steel by TCB Metal Works — just one of the materials, alongside carbon steel, aluminium and HDPE, matched component by component to how an enclosure actually gets used.</figcaption>
          </figure>

          <p>Material selection is one of the most important decisions in the design and fabrication of a zoo enclosure. The right combination of materials shapes structural integrity, animal safety, operational efficiency, maintenance requirements, and the overall lifespan of the facility.</p>
          <p>Modern zoo enclosures are rarely built from a single material. They combine metals, polymers, and protective finishes chosen for the specific demands of the enclosure, the species being housed, the surrounding environment, and the facility's long-term operational goals.</p>
          <p>Whether you're developing a new exhibit, expanding an existing zoological facility, or upgrading aging infrastructure, understanding the characteristics of commonly used materials helps ensure every component is fit for purpose.</p>

          <h2 id="application">Material Selection Starts with the Application</h2>
          <p>There is no universal material that suits every enclosure. A primate habitat has different requirements than a big cat exhibit; a coastal wildlife park faces different environmental challenges than an inland zoological garden. Veterinary holding areas, transport cages, keeper doors, and structural framing each do a different job, and each may call for a different material to strike the right balance of strength, durability, corrosion resistance, hygiene, and cost.</p>
          <p>Before selecting materials, project teams should evaluate:</p>
          <ul>
            <li>Animal species and behavior</li>
            <li>Structural loading requirements</li>
            <li>Environmental exposure</li>
            <li>Corrosion risk</li>
            <li>Cleaning and maintenance practices</li>
            <li>Expected service life</li>
            <li>Fabrication requirements</li>
            <li>Budget and lifecycle cost</li>
            <li>Future modifications or expansion</li>
          </ul>
          <p>The most effective material selection weighs the complete operating environment, not just the initial cost.</p>

          <h2 id="carbon-steel">Carbon Steel</h2>
          <p>Carbon steel remains one of the most widely used materials in zoo enclosure fabrication because it combines strength, versatility, and cost-effectiveness. It is commonly specified for:</p>
          <ul>
            <li><a href="structural-steel-framing-zoo-enclosures.html">Structural steel framing</a></li>
            <li><a href="shift-gates-for-zoo-enclosures.html">Shift gates</a></li>
            <li><a href="keeper-doors-for-zoo-enclosures.html">Keeper doors</a></li>
            <li><a href="zoo-holding-areas.html">Holding areas</a></li>
            <li>Transport cages</li>
            <li>Transfer chutes</li>
            <li>Support structures</li>
            <li>Platforms and walkways</li>
          </ul>

          <h3>Advantages</h3>
          <ul>
            <li>High structural strength</li>
            <li>Excellent weldability</li>
            <li>Efficient fabrication</li>
            <li>Cost-effective for large projects</li>
            <li>Readily available in a wide range of structural sections</li>
          </ul>

          <h3>Considerations</h3>
          <p>Because carbon steel is prone to corrosion, it is almost always protected — with hot-dip galvanizing, powder coating, an industrial paint system, or a combination of finishes chosen for the operating environment.</p>

          <h2 id="stainless-steel">Stainless Steel</h2>
          <p>Stainless steel is the choice where corrosion resistance, hygiene, and long-term durability come first. The two grades specified most often for fabricated products are 304 and 316.</p>

          <h3>Stainless Steel 304</h3>
          <p>Suitable for many indoor and outdoor applications, Type 304 offers excellent corrosion resistance while keeping good strength and fabrication characteristics. Typical applications include:</p>
          <ul>
            <li>Keeper-access hardware</li>
            <li>Veterinary fixtures</li>
            <li>Feeding systems</li>
            <li>Gates and fittings</li>
            <li>Equipment exposed to frequent cleaning</li>
          </ul>

          <h3>Stainless Steel 316</h3>
          <p>Type 316 adds molybdenum for enhanced corrosion resistance, which makes it particularly well suited to aggressive environments. Common applications include:</p>
          <ul>
            <li>Coastal zoological facilities</li>
            <li>Marine exhibits</li>
            <li>High-humidity environments</li>
            <li>Areas exposed to chlorides or harsh cleaning agents</li>
          </ul>
          <p>Stainless steel carries a higher initial cost than carbon steel, but its durability and low maintenance often make it the more economical choice over the life of the enclosure.</p>

          <h2 id="aluminium">Aluminium</h2>
          <p>Aluminium earns its place through light weight and natural corrosion resistance, and it's often used where reducing structural weight or simplifying installation matters. Typical applications include:</p>
          <ul>
            <li>Aviary framing</li>
            <li>Lightweight access systems</li>
            <li>Equipment housings</li>
            <li>Service panels</li>
            <li>Architectural features</li>
          </ul>
          <p>It performs well in many settings, but it isn't always the right answer for components that take significant impact or heavy structural loads — the choice should always follow the engineering requirements.</p>

          <h2 id="hdpe">HDPE (High-Density Polyethylene)</h2>
          <p>Not every enclosure component is metal. HDPE is widely used in zoological facilities because it is durable, moisture-resistant, chemically resistant, and easy to clean. Common applications include:</p>
          <ul>
            <li>Protective wall liners</li>
            <li>Feeding stations</li>
            <li>Enrichment equipment</li>
            <li>Veterinary work surfaces</li>
            <li>Splash guards</li>
            <li>Wear panels</li>
          </ul>
          <p>Its resistance to moisture and corrosion makes it an effective material for selected non-structural applications.</p>

          <h2 id="finishes">Protective Finishes Extend Service Life</h2>
          <p>Choosing the right base material is only half the equation — surface protection matters just as much for long-term performance.</p>
          <h3>Hot-Dip Galvanizing</h3>
          <p><a href="${WIKI_GALV}" target="_blank" rel="noopener">Hot-dip galvanizing</a> protects carbon steel with a durable zinc coating that resists corrosion in outdoor environments.</p>
          <h3>Powder Coating</h3>
          <p>Powder coating adds an attractive, durable finish and another layer of defence against weather, abrasion, and routine wear.</p>
          <h3>Duplex Coating Systems</h3>
          <p>For projects that demand maximum durability, hot-dip galvanizing can be paired with powder coating for enhanced corrosion resistance and an extended service life.</p>
          <p>The most appropriate finish depends on environmental conditions, maintenance expectations, and project requirements.</p>

          <h2 id="performance">Material Selection Is About Performance, Not Preference</h2>
          <p>Successful zoo projects rarely lean on a single material. Engineers and fabricators pick materials by the specific job each component does: structural framing might use galvanized carbon steel for strength and economy, veterinary fixtures benefit from stainless steel, lightweight structures may use aluminium, and enrichment or protective elements might incorporate HDPE.</p>
          <p>Choosing materials by performance requirement — rather than habit — results in facilities that are safer, easier to maintain, and better suited to years of hard use.</p>

          <h2 id="partner">Working with an Experienced Fabrication Partner</h2>
          <p>Material selection should sit alongside engineering, fabrication method, and operational requirements — not be settled in isolation. An experienced fabrication partner can recommend the right materials, protective finishes, and manufacturing processes for the intended application, helping ensure each component performs reliably throughout its service life. If you're planning a new enclosure or upgrading an existing facility, the right partner will match those choices to your <a href="what-is-zoo-caging.html">enclosure system</a> as a whole.</p>

        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta">
      <div class="cta__bg"><img src="assets/img/cta-bg.webp" alt="" aria-hidden="true" loading="lazy" width="1312" height="1070" /></div>
      <div class="container cta__inner" data-reveal>
        <span class="eyebrow" style="justify-content:center">Custom Fabrication for Zoo Facilities</span>
        <h2 style="margin-top:1rem">The Right Material for Every Component</h2>
        <p>TCB Metal Works fabricates custom steel solutions for zoological facilities, wildlife parks, and animal-care environments — from structural framing and <a href="zoo-mesh-systems.html">mesh systems</a> to keeper doors, transport cages, transfer chutes, and other custom components, each manufactured with careful attention to material performance, durability, and long-term value.</p>
        <div class="cta__actions">
          <a class="btn btn--primary" href="contact.html">Discuss Your Project <svg><use href="#i-arrow"/></svg></a>
          <a class="btn btn--ghost" href="zoo-enclosures.html">Explore Zoo Enclosures</a>
        </div>
      </div>
    </section>

    <!-- RELATED ARTICLES -->
    <section class="section alt">
      <div class="container">
        <div class="section-head center" data-reveal>
          <span class="eyebrow">Keep Reading</span>
          <h2>Related Articles</h2>
          <p class="lead">Go deeper on the components and engineering behind modern zoo enclosure systems.</p>
        </div>
        <div class="cards" style="margin-top:3rem;grid-template-columns:repeat(auto-fill,minmax(min(100%,320px),1fr))" data-reveal-group>
          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Zoo Enclosure Equipment</span><img src="assets/img/structural-steel-framing.webp" alt="Galvanized structural steel base channel, frame verticals and base-plate connections of a zoo enclosure, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1000" height="525" /></div>
            <div class="card__body">
              <h3>Structural Steel Framing</h3>
              <p>The load-bearing framework behind every enclosure — design, engineering, connections, and finishes.</p>
              <a class="card__link" href="structural-steel-framing-zoo-enclosures.html">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Zoo Enclosure Equipment</span><img src="assets/img/zoo-mesh-systems.webp" alt="Galvanized welded wire mesh panels in reinforced steel frames forming a zoo enclosure wall, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1000" height="595" /></div>
            <div class="card__body">
              <h3>Zoo Mesh Systems</h3>
              <p>Choosing the right mesh for safe, durable enclosures — welded wire, materials, and engineering.</p>
              <a class="card__link" href="zoo-mesh-systems.html">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Blog</span><img src="assets/img/structural-steel-framing.webp" alt="Precision-fabricated structural steel connections on a TCB Metal Works zoo enclosure" loading="lazy" decoding="async" width="1000" height="525" /></div>
            <div class="card__body">
              <h3>Choosing an Enclosure Manufacturer</h3>
              <p>The 10 factors every zoo should weigh before selecting a fabrication partner.</p>
              <a class="card__link" href="how-to-choose-a-zoo-enclosure-manufacturer.html">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
        </div>
        <div class="center" style="margin-top:2.5rem" data-reveal><a class="btn btn--ghost" href="resources.html#blog">More From the Blog <svg><use href="#i-arrow"/></svg></a></div>
      </div>
    </section>
  </main>

`;

const proseText = MAIN.slice(MAIN.indexOf('<article class="prose"'), MAIN.indexOf('</article>'))
  .replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ');
const words = proseText.split(/\s+/).filter(Boolean).length;
const minutes = Math.max(1, Math.round(words / 240));

const HEAD = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${TITLE}</title>
  <meta name="description" content="${DESC}" />
  <meta name="keywords" content="${KEYWORDS}" />
  <link rel="canonical" href="${URL}" />
  <meta name="theme-color" content="#0B101B" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <meta name="author" content="TCB Metal Works" />
  <meta name="geo.region" content="US-WI" />
  <meta name="geo.placename" content="Racine, Wisconsin" />

  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="TCB Metal Works" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:title" content="${TITLE}" />
  <meta property="og:description" content="${DESC}" />
  <meta property="og:image" content="${IMG}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="${URL}" />
  <meta property="article:published_time" content="${DATE}" />
  <meta property="article:modified_time" content="${DATE}" />
  <meta property="article:author" content="TCB Metal Works" />
  <meta property="article:section" content="Blog" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${TITLE}" />
  <meta name="twitter:description" content="How carbon steel, stainless steel, aluminium, HDPE, and protective finishes are matched to each part of a zoo enclosure." />
  <meta name="twitter:image" content="${IMG}" />

  <link rel="icon" href="assets/img/favicon.png" sizes="192x192" />
  <link rel="apple-touch-icon" href="assets/img/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/styles.css" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "${URL}" },
    "headline": "Choosing the Right Materials for Zoo Enclosures",
    "description": "${DESC}",
    "image": "${IMG}",
    "datePublished": "${DATE}",
    "dateModified": "${DATE}",
    "inLanguage": "en-US",
    "articleSection": "Blog",
    "wordCount": ${words},
    "timeRequired": "PT${minutes}M",
    "keywords": "${KEYWORDS}",
    "about": [
      { "@type": "Thing", "name": "Structural steel", "sameAs": "https://en.wikipedia.org/wiki/Structural_steel" },
      { "@type": "Thing", "name": "Galvanization", "sameAs": "https://en.wikipedia.org/wiki/Galvanization" }
    ],
    "author": { "@type": "Organization", "name": "TCB Metal Works", "url": "https://tcbmetalworks.com/" },
    "publisher": {
      "@type": "Organization",
      "name": "TCB Metal Works",
      "url": "https://tcbmetalworks.com/",
      "logo": { "@type": "ImageObject", "url": "https://tcbmetalworks.com/assets/img/logo-dark.svg" }
    }
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tcbmetalworks.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://tcbmetalworks.com/resources/#blog" },
      { "@type": "ListItem", "position": 3, "name": "Choosing the Right Materials for Zoo Enclosures", "item": "${URL}" }
    ]
  }
  </script>
</head>
`;

const out = HEAD + chrome + MAIN.replace('15 min read', `${minutes} min read`) + tail;
await writeFile(path.join(ROOT, SLUG), out, 'utf8');
console.log(`wrote ${SLUG} | ${words} words | ${minutes} min read | ${(out.length/1024).toFixed(0)} KB | title ${TITLE.length}c | desc ${DESC.length}c`);
