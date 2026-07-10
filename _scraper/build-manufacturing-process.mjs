import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('tcb-website');
const src = await readFile(path.join(ROOT, 'what-is-zoo-caging.html'), 'utf8');
const chrome = src.slice(src.indexOf('<body>'), src.indexOf('<main id="main">'));
const tail   = src.slice(src.indexOf('<footer class="footer">'));

const SLUG = 'zoo-enclosure-manufacturing-process.html';
const URL  = 'https://tcbmetalworks.com/zoo-enclosure-manufacturing-process/';
const IMG  = 'https://tcbmetalworks.com/assets/img/zoo-mesh-systems-og.jpg';
const TITLE = "Zoo Enclosure Manufacturing: From Design to Installation";
const H1   = "The Zoo Enclosure Manufacturing Process: From Design to Installation";
const OGTITLE = "The Zoo Enclosure Manufacturing Process: From Design to Installation";
const DESC = "See how custom zoo enclosures are manufactured — from engineering and CAD design to steel fabrication, welding, quality control, and installation.";
const KEYWORDS = "zoo enclosure manufacturing, zoo enclosure fabrication process, steel fabrication, CAD shop drawings, welding, quality control, zoo enclosure installation, custom steel fabrication";
const DATE = "2026-07-10";
const WIKI_WELDING = "https://en.wikipedia.org/wiki/Welding";

const MAIN = `  <main id="main">
    <!-- HERO BANNER -->
    <section class="pagehero">
      <div class="pagehero__grain"></div>
      <div class="container pagehero__inner" data-reveal>
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="resources.html#blog">Blog</a><span>/</span>The Manufacturing Process</nav>
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
            <p class="toc__title">The 9 Stages</p>
            <ol>
              <li><a href="#consultation">Consultation &amp; Requirements</a></li>
              <li><a href="#engineering">Engineering &amp; Design</a></li>
              <li><a href="#cad">CAD Modeling &amp; Shop Drawings</a></li>
              <li><a href="#materials">Material Selection</a></li>
              <li><a href="#fabrication">Precision Fabrication</a></li>
              <li><a href="#welding">Welding &amp; Assembly</a></li>
              <li><a href="#coatings">Corrosion Protection</a></li>
              <li><a href="#quality">Quality Control</a></li>
              <li><a href="#installation">Delivery &amp; Installation</a></li>
            </ol>
          </nav>
        </aside>

        <article class="prose" data-reveal>

          <figure class="article-figure">
            <img src="assets/img/zoo-mesh-systems.webp"
                 alt="Finished welded wire mesh in reinforced structural steel frames on a TCB Metal Works zoo enclosure — the output of a controlled design-to-installation manufacturing process"
                 width="1000" height="595" fetchpriority="high" decoding="async" />
            <figcaption>The finished product of a controlled manufacturing process — welded mesh in reinforced steel frames, engineered, fabricated, coated and inspected before installation by TCB Metal Works.</figcaption>
          </figure>

          <p>When people think about zoo enclosures, they often picture the finished habitat — secure mesh systems, spacious animal exhibits, and natural-looking environments. What they don't see is the engineering and manufacturing process that makes these structures possible.</p>
          <p>A modern zoo enclosure is not simply fabricated from steel and assembled on-site. It is the result of careful planning, precision engineering, quality-controlled manufacturing, and skilled craftsmanship. Every component must work together to provide a safe environment for animals, keepers, and visitors while withstanding years of continuous use.</p>
          <p>Whether the project involves a lion habitat, primate enclosure, aviary, or wildlife sanctuary, understanding the manufacturing process helps project owners appreciate the importance of selecting an experienced fabrication partner. Here's how a custom zoo enclosure goes from concept to installation.</p>

          <h2 id="consultation">1. Project Consultation and Requirements Gathering</h2>
          <p>Every successful enclosure begins with a conversation. During the initial consultation, the project team works closely with the client to understand the goals, operational requirements, and unique challenges of the enclosure. Topics typically discussed include:</p>
          <ul>
            <li>Animal species</li>
            <li>Enclosure dimensions</li>
            <li>Site conditions</li>
            <li>Keeper access requirements</li>
            <li>Visitor viewing areas</li>
            <li>Animal management systems</li>
            <li>Budget expectations</li>
            <li>Construction schedule</li>
          </ul>
          <p>Gathering accurate information at the beginning helps reduce revisions later and ensures the final design aligns with the facility's operational needs.</p>

          <h2 id="engineering">2. Engineering and Design Development</h2>
          <p>Once the project requirements are established, engineers begin transforming concepts into practical designs. This stage focuses on developing structural solutions that safely support the enclosure while accommodating operational workflows and animal welfare considerations. Engineers evaluate factors such as:</p>
          <ul>
            <li>Structural loads</li>
            <li>Wind and seismic requirements</li>
            <li>Animal-generated forces</li>
            <li>Material selection</li>
            <li>Connection details</li>
            <li>Maintenance access</li>
            <li>Future expansion possibilities</li>
          </ul>
          <p>A well-engineered design improves safety, reduces material waste, and simplifies construction. Much of this work centres on the <a href="structural-steel-framing-zoo-enclosures.html">structural steel framing</a> that carries the entire enclosure.</p>

          <h2 id="cad">3. CAD Modeling and Shop Drawings</h2>
          <p>Before fabrication begins, every component is translated into detailed digital drawings. Using modern CAD software, designers create accurate models of structural steel members, mesh frames, gates, <a href="keeper-doors-for-zoo-enclosures.html">keeper doors</a>, and other enclosure components. Shop drawings specify:</p>
          <ul>
            <li>Dimensions</li>
            <li>Material grades</li>
            <li>Weld locations</li>
            <li>Hole positions</li>
            <li>Connection details</li>
            <li>Surface finishes</li>
            <li>Assembly information</li>
          </ul>
          <p>These drawings serve as the blueprint for manufacturing and help ensure every part fits correctly during installation.</p>

          <h2 id="materials">4. Material Selection and Procurement</h2>
          <p>Selecting the right material is one of the most important decisions in the manufacturing process. Depending on the project, fabrication may involve:</p>
          <ul>
            <li>Structural carbon steel</li>
            <li>Stainless steel</li>
            <li>Aluminium</li>
            <li>Expanded metal</li>
            <li>Welded wire mesh</li>
            <li>Structural tubing</li>
            <li>Steel plate</li>
          </ul>
          <p>Material selection depends on structural requirements, environmental conditions, corrosion exposure, maintenance expectations, and project budget. Using certified, high-quality materials provides a solid foundation for long-term performance.</p>

          <h2 id="fabrication">5. Precision Cutting and Fabrication</h2>
          <p>With materials prepared, fabrication begins. Steel components are cut, drilled, formed, and machined according to the approved shop drawings using precision equipment. Accurate fabrication minimizes installation issues while ensuring structural members align correctly during assembly. Typical fabrication processes include:</p>
          <ul>
            <li>CNC cutting</li>
            <li>Saw cutting</li>
            <li>Plate processing</li>
            <li>Tube cutting</li>
            <li>Hole drilling</li>
            <li>Edge preparation</li>
            <li>Forming and bending</li>
          </ul>
          <p>Maintaining tight dimensional tolerances at this stage helps improve both structural quality and construction efficiency.</p>

          <h2 id="welding">6. Welding and Assembly</h2>
          <p><a href="${WIKI_WELDING}" target="_blank" rel="noopener">Welding</a> is one of the most critical stages of enclosure manufacturing. Structural frames, <a href="zoo-mesh-systems.html">mesh panels</a>, gates, platforms, and custom assemblies are carefully welded according to approved fabrication procedures. High-quality welding provides:</p>
          <ul>
            <li>Strong structural connections</li>
            <li>Consistent dimensional accuracy</li>
            <li>Reliable long-term performance</li>
            <li>Improved resistance to operational loads</li>
          </ul>
          <p>Experienced fabricators also monitor heat input and welding sequences to reduce distortion and maintain proper alignment throughout the manufacturing process.</p>

          <h2 id="coatings">7. Surface Preparation and Corrosion Protection</h2>
          <p>Zoo enclosures operate in challenging outdoor environments where moisture, humidity, cleaning chemicals, and animal waste can accelerate corrosion. Before protective coatings are applied, fabricated components undergo thorough surface preparation to ensure proper coating adhesion. Depending on project requirements, protection systems may include:</p>
          <ul>
            <li>Hot-dip galvanizing</li>
            <li>Powder coating</li>
            <li>Zinc-rich primers</li>
            <li>Industrial paint systems</li>
          </ul>
          <p>Selecting the appropriate corrosion protection system significantly extends the service life of the enclosure while reducing future maintenance requirements.</p>

          <h2 id="quality">8. Quality Control and Inspection</h2>
          <p>Before leaving the fabrication facility, every component should undergo rigorous quality inspections. Quality control typically includes:</p>
          <ul>
            <li>Material verification</li>
            <li>Dimensional checks</li>
            <li>Weld inspections</li>
            <li>Surface finish inspections</li>
            <li>Coating verification</li>
            <li>Hardware inspection</li>
            <li>Assembly fit-up checks</li>
          </ul>
          <p>These inspections help identify potential issues before installation, reducing costly delays and ensuring the finished enclosure meets project specifications.</p>

          <h2 id="installation">9. Packaging, Delivery, and Installation Support</h2>
          <p>Once manufacturing is complete, components are carefully packaged to protect finished surfaces during transportation. Proper labeling and organized packing also simplify installation on site.</p>
          <p>Many fabrication partners provide installation support by supplying assembly drawings, technical documentation, and coordination with contractors to ensure the enclosure is erected efficiently and according to the design.</p>

          <h2 id="quality-matters">Manufacturing Quality Directly Impacts Zoo Safety</h2>
          <p>Every step in the manufacturing process influences the safety and performance of the finished enclosure. Accurate engineering, precision fabrication, high-quality welding, and thorough quality control all contribute to structures that safely contain animals while supporting efficient daily operations.</p>
          <p>Choosing an experienced fabrication partner helps ensure these critical processes are carried out to the highest standard. To see how the finished pieces work together, explore our guide to <a href="what-is-zoo-caging.html">modern zoo caging systems</a>.</p>

        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta">
      <div class="cta__bg"><img src="assets/img/cta-bg.webp" alt="" aria-hidden="true" loading="lazy" width="1312" height="1070" /></div>
      <div class="container cta__inner" data-reveal>
        <span class="eyebrow" style="justify-content:center">Partner with TCB Metal Works</span>
        <h2 style="margin-top:1rem">From CAD Detailing to Installation</h2>
        <p>We combine engineering expertise with precision steel fabrication to manufacture custom zoo enclosures built for safety, durability, and long-term performance — structural steel framing, welded mesh systems, keeper doors, shift gates, squeeze cages, holding areas, and platforms, from concept and CAD detailing through fabrication, quality control, and installation support.</p>
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
            <div class="card__media"><span class="card__tag">Blog</span><img src="assets/img/structural-steel-framing.webp" alt="Precision-fabricated structural steel connections on a TCB Metal Works zoo enclosure" loading="lazy" decoding="async" width="1000" height="525" /></div>
            <div class="card__body">
              <h3>Choosing an Enclosure Manufacturer</h3>
              <p>The 10 factors every zoo should weigh before selecting a fabrication partner.</p>
              <a class="card__link" href="how-to-choose-a-zoo-enclosure-manufacturer.html">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
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
  <meta property="og:title" content="${OGTITLE}" />
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
  <meta name="twitter:title" content="${OGTITLE}" />
  <meta name="twitter:description" content="How a custom zoo enclosure goes from CAD design to steel fabrication, welding, QC, and installation." />
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
    "headline": "The Zoo Enclosure Manufacturing Process: From Design to Installation",
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
      { "@type": "Thing", "name": "Welding", "sameAs": "https://en.wikipedia.org/wiki/Welding" },
      { "@type": "Thing", "name": "Structural steel", "sameAs": "https://en.wikipedia.org/wiki/Structural_steel" }
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
      { "@type": "ListItem", "position": 3, "name": "The Zoo Enclosure Manufacturing Process", "item": "${URL}" }
    ]
  }
  </script>
</head>
`;

const out = HEAD + chrome + MAIN.replace('15 min read', `${minutes} min read`) + tail;
await writeFile(path.join(ROOT, SLUG), out, 'utf8');
console.log(`wrote ${SLUG} | ${words} words | ${minutes} min read | ${(out.length/1024).toFixed(0)} KB | title ${TITLE.length}c | desc ${DESC.length}c`);
