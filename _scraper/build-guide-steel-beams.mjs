// Builds the "Structural Steel Beams" GUIDE page into tcb-website/ (root, live-ready).
// Content is original + TCB-voiced, grounded in AISC 360-22 / ASCE 7-22 knowledge.
// AISC docs are copyrighted: NOTHING is copied verbatim — the spec is cited/linked only.
// Run:  node _scraper/build-guide-steel-beams.mjs   (from project ROOT)
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('tcb-website');
const src = await readFile(path.join(ROOT, 'what-is-zoo-caging.html'), 'utf8');
const chrome = src.slice(src.indexOf('<body>'), src.indexOf('<main id="main">'));
const tail   = src.slice(src.indexOf('<footer class="footer">'));

const SLUG = 'structural-steel-beams-guide.html';
const URL  = 'https://tcbmetalworks.com/structural-steel-beams-guide/';
const IMG  = 'https://tcbmetalworks.com/assets/img/structural-steel-framing-og.jpg';
const TITLE = "Structural Steel Beams: Shapes, Grades & Sizing Guide";
const H1   = "Structural Steel Beams: A Practical Guide to Shapes, Grades, Sizing &amp; Fabrication";
const DESC = "A plain-English guide to structural steel beams: the common shapes and grades, how beams are sized to AISC 360-22, connections, and fabrication.";
const KEYWORDS = "structural steel beams, steel beams, wide flange beam, W-shape beam, I-beam, steel beam sizing, load-bearing beam, basement beam, structural steel fabrication, AISC 360-22";
const DATE = "2026-07-11";
const WIKI_STEEL = "https://en.wikipedia.org/wiki/Structural_steel";
const AISC = "https://www.aisc.org/";

const FAQ = [
  ["What is a structural steel beam?", "A structural steel beam is a load-bearing member that carries loads across a span and transfers them to columns, walls, or foundations. The most common type is the wide-flange (W-shape) beam, often called an I-beam because of its cross-section. Beams are the horizontal backbone of floors, roofs, mezzanines, and load-bearing walls."],
  ["What is the most common steel beam shape?", "The wide-flange (W-shape) beam is by far the most common in modern construction. Its wide, parallel flanges give it an efficient strength-to-weight ratio for carrying bending loads, and it connects easily to other members. S-shapes, channels (C), hollow structural sections (HSS), and angles are used where their particular shape suits the job."],
  ["How are steel beams sized?", "Beam size is determined by a licensed structural engineer, not by a rule of thumb. The engineer calculates the loads the beam must carry (dead, live, snow, wind, and others per ASCE 7-22), the span and how the beam is braced, and then checks it against the strength and serviceability limit states in the AISC 360-22 Specification. The result is a specific shape, size, and grade for that exact application."],
  ["What steel grade are beams made from?", "Wide-flange beams are usually ASTM A992 steel, which has a minimum yield strength of 50 ksi. Hollow structural sections are commonly ASTM A500 or A1085, while plates, angles, and channels are often A36 or A572 Grade 50. The right grade depends on the shape and the loads."],
  ["Are steel beams bolted or welded?", "Both. Bolted connections use high-strength bolts and are fast to install in the field; welded connections are often made in the shop for a clean, rigid joint. Many structures use a mix — for example, shop-welded assemblies that bolt together on site. The connection type is engineered for the loads it must transfer."],
  ["How are steel beams protected from rust?", "Common options are hot-dip galvanizing, shop primer, and industrial paint or powder coating systems. Interior beams in a dry, conditioned space may need little more than a primer, while beams exposed to weather or moisture usually call for galvanizing or a multi-coat system. The right choice depends on the environment and the expected service life."],
  ["Can a steel beam replace a load-bearing wall or wood beam?", "Yes — a properly engineered steel beam can carry the load of a removed wall or span farther than wood with fewer supporting posts, which is why steel is common for basement beams and open-plan renovations. The beam must be sized by an engineer and supported on adequately designed posts and footings."],
  ["Do I need engineered drawings to get a steel beam fabricated?", "For any load-bearing beam, yes. A fabricator needs the engineer's design — the shape, size, grade, length, connection details, and finish — to fabricate accurately. If you don't have drawings yet, a good fabrication partner can point you to the information you'll need and work from the engineer's specification."],
];

const li = a => a.map(x => `            <li>${x}</li>`).join('\n');

const MAIN = `  <main id="main">
    <!-- HERO BANNER -->
    <section class="pagehero">
      <div class="pagehero__grain"></div>
      <div class="container pagehero__inner" data-reveal>
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="resources.html">Resources</a><span>/</span><a href="resources.html#guides">Guides</a><span>/</span>Structural Steel Beams</nav>
        <span class="eyebrow" style="margin-top:1rem">Guide</span>
        <h1 style="margin-top:1rem">${H1}</h1>
        <div class="article-meta">
          <span><svg><use href="#i-user"/></svg>By <strong>TCB Metal Works</strong></span>
          <span><svg><use href="#i-clock"/></svg>14 min read</span>
          <span><svg><use href="#i-calendar"/></svg>Last updated <time datetime="${DATE}">July 11, 2026</time></span>
        </div>
      </div>
    </section>

    <!-- ARTICLE BODY -->
    <section class="section">
      <div class="container article-wrap">

        <aside class="toc" data-reveal="left">
          <nav aria-label="Table of contents">
            <p class="toc__title">Table of Contents</p>
            <ol>
              <li><a href="#what">What Are Structural Steel Beams?</a></li>
              <li><a href="#shapes">Common Steel Beam Shapes</a></li>
              <li><a href="#grades">Steel Grades &amp; Specifications</a></li>
              <li><a href="#sizing">How Steel Beams Are Sized</a></li>
              <li><a href="#connections">Connections: Bolted vs Welded</a></li>
              <li><a href="#corrosion">Corrosion Protection &amp; Finishing</a></li>
              <li><a href="#fabrication">Fabrication &amp; Quality Control</a></li>
              <li><a href="#basement">Steel Beams in Homes &amp; Basements</a></li>
              <li><a href="#working">Working With a Fabricator</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ol>
          </nav>
        </aside>

        <article class="prose" data-reveal>

          <figure class="article-figure">
            <img src="assets/img/structural-steel-framing.webp"
                 alt="Structural steel framing and beams anchored to a concrete foundation, fabricated by TCB Metal Works"
                 width="1000" height="525" fetchpriority="high" decoding="async" />
            <figcaption>Structural steel members carrying load into base-plate connections — fabricated by TCB Metal Works.</figcaption>
          </figure>

          <div class="callout">
            <h2>Quick Answer</h2>
            <p>A structural steel beam is a horizontal load-bearing member that carries loads across a span and transfers them to columns, walls, or foundations. The most common type is the wide-flange (W-shape) beam. Beam shape, size, and grade are chosen by a licensed engineer, sized to the loads and spans of the specific project and checked against the <a href="${AISC}" target="_blank" rel="noopener">AISC 360-22</a> Specification, then fabricated and finished for its environment.</p>
          </div>

          <h2 id="what">What Are Structural Steel Beams?</h2>
          <p>Steel beams are the horizontal backbone of a building. Where columns carry load straight down, beams carry it <em>across</em> — spanning an opening and delivering the weight above to the supports on either end. Floors, roofs, mezzanines, basement openings, and load-bearing walls all rely on them.</p>
          <p>Steel earns its place here because it does a lot with a little. A relatively small steel section can carry heavy loads over long spans, which means fewer posts, longer clear openings, and predictable, well-understood behavior. In the United States, structural steel buildings are designed to the American Institute of Steel Construction's <a href="${AISC}" target="_blank" rel="noopener">Specification for Structural Steel Buildings (AISC 360-22)</a>, with loads determined under ASCE/SEI 7-22. Those standards are why a steel beam's performance can be relied on rather than guessed at.</p>
          <p>The rest of this guide walks through the shapes and grades you'll encounter, how beams are sized, how they're connected and protected, and what to have ready when you bring a project to a fabricator.</p>

          <h2 id="shapes">Common Steel Beam Shapes</h2>
          <p>"Beam" covers a family of rolled cross-sections, each suited to a different job. The shape is named for its profile, and picking the right one is part of the engineering.</p>
          <div class="table-wrap">
          <table>
            <thead><tr><th>Shape</th><th>Also called</th><th>Where it's used</th></tr></thead>
            <tbody>
              <tr><td><b>W-shape</b></td><td>Wide flange, I-beam, H-beam</td><td>The workhorse beam and column. Wide parallel flanges make it efficient in bending — most floor and roof beams are W-shapes.</td></tr>
              <tr><td><b>S-shape</b></td><td>American Standard beam</td><td>An older I-shaped profile with sloped, narrower flanges. Still used in some machinery and rail applications.</td></tr>
              <tr><td><b>C-shape</b></td><td>Channel, MC</td><td>A C-shaped section for edge beams, framing, stair stringers, and built-up members.</td></tr>
              <tr><td><b>HSS</b></td><td>Hollow structural section, tube</td><td>Square, rectangular, or round tube. Excellent for columns, braces, and beams where twisting or a clean look matters.</td></tr>
              <tr><td><b>Angle (L)</b></td><td>Angle iron</td><td>An L-shaped section for bracing, lintels, connections, and light framing.</td></tr>
              <tr><td><b>Tee (WT)</b></td><td>Structural tee</td><td>Cut from a W-shape; used for chords of trusses and special connections.</td></tr>
              <tr><td><b>Plate &amp; bar</b></td><td>—</td><td>Flat stock for base plates, gusset plates, stiffeners, and built-up or custom beams.</td></tr>
            </tbody>
          </table>
          </div>
          <p>For most load-bearing beams the answer is a wide-flange W-shape — it puts material where bending needs it, in the top and bottom flanges. HSS and channels come in when the situation calls for their particular strengths. A single project often mixes several of these into one engineered frame.</p>

          <aside class="cta-inline"><p>Not sure which section your project needs? Our team can work from your engineer's drawings — or help you scope what's required.</p><a href="contact.html">Talk with our fabrication team &rarr;</a></aside>

          <h2 id="grades">Steel Grades &amp; Specifications</h2>
          <p>Two beams can look identical and behave very differently, because the <em>grade</em> of steel sets its strength. Grades are defined by ASTM standards, and the key number for design is the minimum yield strength (Fy) — the point beyond which steel deforms permanently. Each shape tends to pair with a typical grade.</p>
          <div class="table-wrap">
          <table>
            <thead><tr><th>Common grade</th><th>Typical shapes</th><th>Min. yield (Fy)</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td><b>ASTM A992</b></td><td>W-shapes (wide flange)</td><td>50 ksi</td><td>The default for modern wide-flange beams and columns.</td></tr>
              <tr><td><b>ASTM A500 / A1085</b></td><td>HSS (tube)</td><td>46–50 ksi</td><td>The standards for hollow structural sections; A1085 has tighter tolerances.</td></tr>
              <tr><td><b>ASTM A572 Gr. 50</b></td><td>Plates, some shapes</td><td>50 ksi</td><td>A common high-strength, low-alloy structural grade.</td></tr>
              <tr><td><b>ASTM A36</b></td><td>Plates, angles, bars, channels</td><td>36 ksi</td><td>A general-purpose carbon steel still widely used for connection material.</td></tr>
              <tr><td><b>ASTM A53 / A252</b></td><td>Round pipe</td><td>~35 ksi</td><td>Pipe columns and posts.</td></tr>
            </tbody>
          </table>
          </div>
          <p>You don't need to memorize these — the engineer specifies the grade as part of the design, and a fabricator sources and documents material that meets it. What's worth knowing is that grade matters: substituting a lower-strength steel, even in the right shape, can undermine the whole design. Reputable fabrication includes material traceability so the steel in the structure is verifiably the steel that was specified.</p>

          <h2 id="sizing">How Steel Beams Are Sized</h2>
          <p>This is the question everyone asks — "what size beam do I need?" — and the honest answer is that it's a calculation for a licensed structural engineer, not a chart off the internet. Getting it wrong is a safety issue. Here's what actually goes into that calculation, so you understand what you're paying for and why it matters.</p>

          <h3>Step 1: Add up the loads</h3>
          <p>Every beam is designed around the loads it will carry. Engineers work from the load types and combinations defined in ASCE/SEI 7-22:</p>
          <ul>
${li(['<b>Dead loads</b> — the permanent weight of the structure itself and everything fixed to it.','<b>Live loads</b> — people, furniture, storage, and other movable weight.','<b>Snow, wind, and rain</b> loads where they apply.','<b>Seismic loads</b> in regions where they govern.','<b>Point loads</b> — concentrated loads from a column, wall, or piece of equipment landing on the beam.'])}
          </ul>
          <p>These are combined in specific ways to find the worst realistic case the beam must survive.</p>

          <h3>Step 2: Check the strength limit states</h3>
          <p>With the loads known, the engineer checks the beam against the strength "limit states" in AISC 360-22 — the ways a beam can fail. For a typical floor beam these include:</p>
          <ul>
${li(['<b>Yielding</b> — the section reaching its full bending capacity.','<b>Lateral-torsional buckling</b> — a long, unbraced beam trying to twist and buckle sideways under load, which is why beams are braced at intervals.','<b>Local buckling</b> — a thin flange or web buckling before the whole section yields.','<b>Shear</b> — the web carrying the vertical force near the supports.'])}
          </ul>
          <p>The beam has to pass every applicable check, whether or not it ends up being the one that governs.</p>

          <h3>Step 3: Check serviceability (deflection)</h3>
          <p>A beam can be plenty strong and still be wrong. If it sags too much, floors feel bouncy, doors stick, and finishes crack. So engineers also limit <em>deflection</em> — how far the beam bends under load. For many floor beams this serviceability check, not raw strength, is what sets the final size.</p>

          <h3>LRFD and ASD</h3>
          <p>AISC 360-22 allows two design approaches, and both are considered valid. Load and Resistance Factor Design (LRFD) applies factors to loads and a resistance factor to the beam's capacity; Allowable Strength Design (ASD) applies a safety factor to capacity instead. A good engineer uses whichever the project calls for; the takeaway for an owner is simply that a recognized, code-based method stands behind the number.</p>

          <div class="callout">
            <h2>The bottom line on sizing</h2>
            <p>Load-bearing beams should always be sized by a licensed structural engineer for your specific project. A fabricator turns that engineered design into an accurate, well-built beam — the two roles work together, and skipping the first one is never worth the risk.</p>
          </div>

          <h2 id="connections">Connections: Bolted vs Welded</h2>
          <p>A beam is only as good as how it's joined to everything else. Connections transfer the load out of the beam and into the columns and supports, and they're engineered with the same care as the members themselves. There are two broad families.</p>
          <div class="table-wrap">
          <table>
            <thead><tr><th></th><th>Bolted</th><th>Welded</th></tr></thead>
            <tbody>
              <tr><td><b>How it joins</b></td><td>High-strength bolts through pre-drilled holes</td><td>Steel fused together with weld metal</td></tr>
              <tr><td><b>Best for</b></td><td>Fast field assembly and erection</td><td>Rigid, clean joints, often shop-made</td></tr>
              <tr><td><b>Types</b></td><td>Bearing-type &amp; slip-critical</td><td>Fillet welds &amp; groove (CJP/PJP) welds</td></tr>
              <tr><td><b>Notes</b></td><td>Inspectable, repeatable, easy to erect</td><td>Requires qualified welders &amp; procedures</td></tr>
            </tbody>
          </table>
          </div>
          <p>In practice most projects use both — assemblies are welded in the controlled environment of the shop, then bolted together in the field where welding is slower and harder to inspect. The engineer specifies the connection for the forces it must carry, and the fabricator executes it to approved welding procedures and bolting standards.</p>

          <h2 id="corrosion">Corrosion Protection &amp; Finishing</h2>
          <p>Steel rusts if it's left unprotected in the wrong environment, so the finish is part of the design, not an afterthought. The right system depends entirely on where the beam lives.</p>
          <ul class="checklist">
${li(['<b>Shop primer</b> — a basic protective coat, often enough for interior beams in a dry, conditioned space.','<b>Paint / industrial coating systems</b> — multi-coat systems for tougher interior or sheltered-exterior exposure.','<b>Powder coating</b> — a durable, attractive finish for exposed architectural steel.','<b>Hot-dip galvanizing</b> — steel dipped in molten zinc for long-term protection outdoors or in wet, corrosive conditions.'])}
          </ul>
          <p>An interior basement beam may need little more than primer, while a beam exposed to weather, washdown, or coastal air is a candidate for galvanizing. Fire protection — spray-applied fireproofing or intumescent coatings — is a separate requirement driven by the building code, not by corrosion.</p>

          <h2 id="fabrication">Fabrication &amp; Quality Control</h2>
          <p>Between the engineer's design and a beam that actually fits on site sits fabrication — and it's where quality is won or lost. A well-run shop works from detailed shop drawings and controls the whole process:</p>
          <ul>
${li(['Cutting members to precise length and preparing weld edges','Drilling or punching bolt holes to the connection layout','Welding to qualified procedures with skilled, tested welders','Fitting and checking assemblies against tight dimensional tolerances','Applying the specified surface prep and coatings','Inspecting welds, dimensions, and material before it ships'])}
          </ul>
          <p>AISC 360-22 devotes whole chapters to fabrication, erection, and quality control for good reason: accurate fabrication is what makes a design perform in the real world. Beams that are cut square, drilled to layout, and welded soundly go up faster, fit right the first time, and carry load exactly as intended. That precision is the difference between a drawing and a durable structure — and it's the part a fabricator like TCB owns.</p>

          <h2 id="basement">Steel Beams in Homes &amp; Basements</h2>
          <p>Steel isn't only for high-rises. One of the most common places homeowners meet a structural steel beam is a basement or a renovation — and it's a job where steel really shines.</p>
          <p>When a load-bearing wall comes out to open up a floor plan, or a sagging wood girder needs replacing, a single steel W-beam can often carry the load that used to sit on a wall or a row of posts. Steel spans farther than dimensional lumber, so it means fewer columns cluttering a basement and longer clear openings upstairs. It's also dimensionally stable — it won't shrink, warp, or be eaten by insects the way wood can.</p>
          <p>The rules don't change for a house: the beam still has to be sized by an engineer for the actual loads, and it has to land on posts and footings designed to carry what it delivers. Done right, a steel beam is a permanent, low-maintenance fix that quietly does its job for the life of the building.</p>

          <aside class="cta-inline"><p>Planning a basement beam, a load-bearing wall removal, or a structural steel project in the Racine area?</p><a href="contact.html">Request a quote from TCB Metal Works &rarr;</a></aside>

          <h2 id="working">Working With a Fabricator</h2>
          <p>When you're ready to have beams fabricated, a little preparation makes for a faster, more accurate quote and a smoother build. Here's what a fabricator will want to see:</p>
          <ul class="checklist">
${li(['<b>Engineered drawings or specs</b> — the shape, size, grade, and length of each member.','<b>Connection details</b> — how each beam ties into columns, walls, or other beams.','<b>The finish required</b> — primer, paint, powder coat, or galvanizing, based on where the steel will live.','<b>Quantities and dimensions</b> — how many of each member, and any field measurements that affect fit.','<b>Delivery and access</b> — where the steel is going and any site constraints on size or handling.','<b>Your timeline</b> — when you need it, so material and shop time can be planned.'])}
          </ul>
          <p>If you don't have every one of these yet, that's fine — a good fabrication partner will help you figure out what's missing and work from your engineer's design. What matters is starting the conversation with the real requirements rather than a guess.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
${FAQ.map(([q, a]) => `          <h3>${q}</h3>\n          <p>${a}</p>`).join('\n')}

          <h2 id="final">Final Thoughts</h2>
          <p>Structural steel beams are one of the most dependable tools in construction: strong, predictable, and backed by decades of engineering standards. The key ideas are simple — the shape and grade suit the job, the size comes from a licensed engineer working to AISC 360-22, and the quality comes from precise fabrication and the right finish.</p>
          <p>TCB Metal Works fabricates structural steel and load-bearing beams — including basement and residential beams — for builders, contractors, and property owners across Racine and southeastern Wisconsin. Bring us your engineer's design, or your project and its constraints, and we'll help you get it built right.</p>

          <h2 id="references">References &amp; Standards</h2>
          <ul class="refs">
            <li>American Institute of Steel Construction — <a href="${AISC}" target="_blank" rel="noopener">Specification for Structural Steel Buildings (ANSI/AISC 360-22)</a> and the 16th Edition Steel Construction Manual.</li>
            <li>ASCE/SEI 7-22, <em>Minimum Design Loads and Associated Criteria for Buildings and Other Structures</em>.</li>
            <li>ASTM International material standards for structural steel shapes, plates, and hollow sections.</li>
          </ul>

        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta">
      <div class="cta__bg"><img src="assets/img/cta-bg.webp" alt="" aria-hidden="true" loading="lazy" width="1312" height="1070" /></div>
      <div class="container cta__inner" data-reveal>
        <span class="eyebrow" style="justify-content:center">Structural Steel &amp; Beams</span>
        <h2 style="margin-top:1rem">Need Steel Beams Fabricated?</h2>
        <p>TCB Metal Works fabricates structural steel and load-bearing beams — from basement beams to full framing — engineered to spec, cleanly welded, and finished for the job. Send us your drawings or your project and we'll take it from there.</p>
        <div class="cta__actions">
          <a class="btn btn--primary" href="contact.html">Request a Quote <svg><use href="#i-arrow"/></svg></a>
          <a class="btn btn--ghost" href="services.html#basement-beams">Structural Steel &amp; Beams</a>
        </div>
      </div>
    </section>

    <!-- RELATED -->
    <section class="section alt">
      <div class="container">
        <div class="section-head center" data-reveal>
          <span class="eyebrow">Keep Reading</span>
          <h2>Related Reading</h2>
          <p class="lead">More on structural steel, fabrication, and choosing the right materials.</p>
        </div>
        <div class="cards" style="margin-top:3rem;grid-template-columns:repeat(auto-fill,minmax(min(100%,320px),1fr))" data-reveal-group>
          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Solutions</span><img src="assets/img/svc-basement-beams.jpg" alt="Structural steel basement beams fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1024" height="1024" /></div>
            <div class="card__body">
              <h3>Structural Steel &amp; Beams</h3>
              <p>Our custom structural steel, load-bearing beam, and basement beam fabrication services.</p>
              <a class="card__link" href="services.html#basement-beams">View solution <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Guide</span><img src="assets/img/structural-steel-framing.webp" alt="Structural steel framing fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1000" height="525" /></div>
            <div class="card__body">
              <h3>Structural Steel Framing</h3>
              <p>How engineered steel framing carries load — components, connections, and corrosion protection.</p>
              <a class="card__link" href="structural-steel-framing-zoo-enclosures.html">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Materials</span><img src="assets/img/steel-zoo-enclosures.webp" alt="Stainless and structural steel fabrication by TCB Metal Works" loading="lazy" decoding="async" width="1000" height="562" /></div>
            <div class="card__body">
              <h3>Choosing the Right Materials</h3>
              <p>Steel, stainless, and aluminium compared — corrosion, cost, and where each one fits.</p>
              <a class="card__link" href="choosing-the-right-materials-for-zoo-enclosures.html">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
        </div>
        <div class="center" style="margin-top:2.5rem" data-reveal><a class="btn btn--ghost" href="resources.html#guides">View All Guides <svg><use href="#i-arrow"/></svg></a></div>
      </div>
    </section>
  </main>

`;

const proseText = MAIN.slice(MAIN.indexOf('<article class="prose"'), MAIN.indexOf('</article>'))
  .replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ');
const words = proseText.split(/\s+/).filter(Boolean).length;
const minutes = Math.max(1, Math.round(words / 240));

const faqJson = FAQ.map(([q, a]) =>
  `      { "@type": "Question", "name": ${JSON.stringify(q)}, "acceptedAnswer": { "@type": "Answer", "text": ${JSON.stringify(a)} } }`
).join(',\n');

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
  <meta property="article:section" content="Guides" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Structural Steel Beams: Shapes, Grades &amp; Sizing Guide" />
  <meta name="twitter:description" content="A plain-English guide to structural steel beams — shapes, grades, sizing to AISC 360-22, connections, and fabrication." />
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
    "@type": "Article",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "${URL}" },
    "headline": "Structural Steel Beams: A Practical Guide to Shapes, Grades, Sizing & Fabrication",
    "description": "${DESC}",
    "image": "${IMG}",
    "datePublished": "${DATE}",
    "dateModified": "${DATE}",
    "inLanguage": "en-US",
    "articleSection": "Guides",
    "wordCount": ${words},
    "timeRequired": "PT${minutes}M",
    "keywords": "${KEYWORDS}",
    "about": [
      { "@type": "Thing", "name": "Structural steel", "sameAs": "${WIKI_STEEL}" },
      { "@type": "Thing", "name": "I-beam", "sameAs": "https://en.wikipedia.org/wiki/I-beam" }
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
      { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://tcbmetalworks.com/resources/" },
      { "@type": "ListItem", "position": 3, "name": "Guides", "item": "https://tcbmetalworks.com/resources/#guides" },
      { "@type": "ListItem", "position": 4, "name": "Structural Steel Beams", "item": "${URL}" }
    ]
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
${faqJson}
    ]
  }
  </script>
</head>
`;

const out = HEAD + chrome + MAIN.replace('14 min read', `${minutes} min read`) + tail;
await writeFile(path.join(ROOT, SLUG), out, 'utf8');
console.log(`wrote ${SLUG} | ${words} words | ${minutes} min read | ${(out.length/1024).toFixed(0)} KB | title ${TITLE.length}c | desc ${DESC.length}c`);
