import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('tcb-website');
const src = await readFile(path.join(ROOT, 'what-is-zoo-caging.html'), 'utf8');
const chrome = src.slice(src.indexOf('<body>'), src.indexOf('<main id="main">'));
const tail   = src.slice(src.indexOf('<footer class="footer">'));

const SLUG = 'structural-steel-framing-zoo-enclosures.html';
const URL  = 'https://tcbmetalworks.com/structural-steel-framing-zoo-enclosures/';
const IMG  = 'https://tcbmetalworks.com/assets/img/structural-steel-framing-og.jpg';
const TITLE = "Structural Steel Framing for Zoo Enclosures: Guide";
const H1   = "Structural Steel Framing for Zoo Enclosures: Design, Fabrication &amp; Engineering Guide";
const DESC = "Structural steel framing is the foundation of safe, durable zoo enclosures — steel frame design, fabrication, engineering, and how custom systems support zoos.";
const KEYWORDS = "structural steel framing, zoo enclosure framing, steel frame fabrication, structural steel zoo, load-bearing steel, welded steel connections, corrosion protection, custom steel fabrication, zoo enclosure engineering";
const DATE = "2026-07-10";
const WIKI_STEEL = "https://en.wikipedia.org/wiki/Structural_steel";

const FAQ = [
  ["What is structural steel framing?", "Structural steel framing is a load-bearing framework made from engineered steel members that support buildings, industrial facilities, and specialized structures such as zoo enclosures. It provides the strength and stability needed to safely carry structural and operational loads."],
  ["Why is structural steel used for zoo enclosures?", "Structural steel offers excellent strength, durability, and design flexibility. It supports large spans, integrates easily with mesh systems and animal management equipment, and can be custom fabricated to suit different animal species and enclosure layouts."],
  ["How long does structural steel framing last?", "With proper engineering, corrosion protection, routine inspections, and maintenance, structural steel framing can remain in service for several decades while maintaining its structural performance."],
  ["Can structural steel framing be customized?", "Yes. Nearly every zoo enclosure requires a custom structural framing system designed around the specific exhibit layout, target species, operational workflow, and project requirements."],
  ["What protects structural steel from corrosion?", "Common protection systems include hot-dip galvanizing, powder coating, zinc-rich primers, and industrial protective coatings. The most suitable system depends on environmental conditions and the expected service life of the structure."],
  ["Why is quality fabrication important?", "Precision fabrication ensures structural members fit correctly, connections perform as designed, coatings are properly applied, and the completed enclosure maintains its strength, safety, and durability throughout its lifespan."],
];

const li = a => a.map(x => `            <li>${x}</li>`).join('\n');

const MAIN = `  <main id="main">
    <!-- HERO BANNER -->
    <section class="pagehero">
      <div class="pagehero__grain"></div>
      <div class="container pagehero__inner" data-reveal>
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="articles.html">Articles</a><span>/</span>Structural Steel Framing</nav>
        <span class="eyebrow" style="margin-top:1rem">Zoo Enclosure Equipment</span>
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
            <p class="toc__title">Table of Contents</p>
            <ol>
              <li><a href="#what-is-framing">What Is Structural Steel Framing?</a></li>
              <li><a href="#why">Why Structural Steel Is Used</a></li>
              <li><a href="#components">Structural Components of a Zoo Enclosure</a></li>
              <li><a href="#engineering">Engineering &amp; Fabrication</a></li>
              <li><a href="#choosing">Choosing a Fabrication Partner</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ol>
          </nav>
        </aside>

        <article class="prose" data-reveal>

          <figure class="article-figure">
            <img src="assets/img/structural-steel-framing.webp"
                 alt="The galvanized structural steel base channel, frame verticals and base-plate connections of a zoo enclosure anchored to a concrete foundation, fabricated by TCB Metal Works for the Denver Zoo"
                 width="1000" height="525" fetchpriority="high" decoding="async" />
            <figcaption>Galvanized structural steel framing anchored to a concrete foundation on a TCB Metal Works zoo build — the base channel, frame verticals and base-plate connections that carry the entire enclosure.</figcaption>
          </figure>

          <div class="callout">
            <h2>Quick Answer</h2>
            <p>Structural steel framing is the load-bearing framework that supports zoo enclosures, mesh systems, gates, and animal management infrastructure. Engineered for strength, durability, and long-term performance, structural steel frames provide the stability needed to safely contain animals while supporting efficient zoo operations and modern enclosure design.</p>
          </div>

          <h2 id="introduction">Introduction</h2>
          <p>Every successful zoo enclosure begins with a strong foundation. While visitors often notice the animals, landscaping, and exhibit features, the structural framework supporting the entire habitat usually remains hidden behind the scenes.</p>
          <p>That framework is structural steel framing, and it does far more than hold the enclosure up. It is the backbone the rest of the build hangs on, carrying everything from <a href="zoo-mesh-systems.html">welded mesh systems</a> and <a href="keeper-doors-for-zoo-enclosures.html">keeper doors</a> to <a href="shift-gates-for-zoo-enclosures.html">shift gates</a>, <a href="zoo-holding-areas.html">holding areas</a>, <a href="zoo-squeeze-cage.html">squeeze cages</a>, and elevated platforms. Get the frame wrong and even the best components can't perform safely or last — which is why the framing, not the finishes, is where a durable enclosure really begins.</p>
          <p>Modern zoological facilities demand structures capable of withstanding far more than their own weight. Zoo enclosures must resist environmental loads such as wind and rain while also accommodating the forces generated by powerful animals, moving gates, daily operational activities, and years of continuous use. <a href="${WIKI_STEEL}" target="_blank" rel="noopener">Structural steel</a> provides the strength, flexibility, and durability needed to meet these demanding requirements while allowing engineers to create customized enclosure layouts for different species and exhibit designs.</p>
          <p>Beyond its structural performance, steel framing offers exceptional design flexibility. It enables fabricators to create open, visually appealing habitats that integrate seamlessly with mesh systems, enrichment equipment, veterinary facilities, and protected contact animal management systems. This adaptability has made structural steel the preferred material for many modern zoological projects.</p>
          <p>Research in structural engineering demonstrates that properly designed steel framing provides outstanding strength-to-weight performance, predictable structural behavior, and long service life when combined with quality fabrication and appropriate corrosion protection. At the same time, enclosure design research emphasizes that well-engineered structural systems play an important role in supporting safe animal management, operational efficiency, and positive animal welfare outcomes.</p>

          <h2 id="what-is-framing">What Is Structural Steel Framing?</h2>
          <p>Structural steel framing is a system of interconnected steel members that forms the primary load-bearing structure of a building or engineered facility. In zoo enclosures, these members work together to support enclosure walls, mesh panels, roofs, gates, platforms, climbing structures, and other critical infrastructure.</p>
          <p>Unlike conventional fencing systems, structural steel framing is specifically engineered to safely transfer loads throughout the structure. Columns, beams, bracing, and connections are carefully designed to resist forces generated by environmental conditions and animal activity while maintaining stability throughout the enclosure's service life.</p>
          <p>Because no two zoo exhibits are identical, structural steel framing is almost always custom-designed. Engineers evaluate the enclosure layout, target species, expected loading conditions, operational workflow, and future maintenance requirements before determining the appropriate structural system.</p>
          <p>This flexibility allows steel framing to support a wide range of zoological environments — from large carnivore habitats and elephant exhibits to primate enclosures, aviaries, reptile houses, and animal holding facilities — while providing a reliable foundation for every other enclosure component.</p>

          <h3>The Backbone of Modern Zoo Enclosures</h3>
          <p>Structural steel framing does far more than hold an enclosure together. It creates the framework that allows every major enclosure system to function as an integrated whole. A properly engineered steel frame supports:</p>
          <ul>
${li(['<a href="zoo-mesh-systems.html">Zoo mesh systems</a>','<a href="keeper-doors-for-zoo-enclosures.html">Keeper doors</a>','<a href="shift-gates-for-zoo-enclosures.html">Shift gates</a>','<a href="zoo-holding-areas.html">Holding areas</a>','<a href="zoo-squeeze-cage.html">Squeeze cages</a>','Elevated platforms','Animal transfer corridors','<a href="zoo-enrichment-boxes.html">Enrichment equipment</a>','Roof structures','Maintenance access systems'])}
          </ul>
          <p>By integrating these components into one cohesive structure, structural steel framing helps create enclosures that are safe for animals, efficient for zoo staff, and durable enough to withstand decades of demanding operation. For zoological facilities investing in long-term infrastructure, structural steel remains one of the most dependable and adaptable construction materials available.</p>

          <h2 id="why">Why Structural Steel Framing Is the Preferred Choice for Zoo Enclosures</h2>
          <p>Not all construction materials are suitable for zoological facilities. Zoo enclosures are expected to perform reliably under demanding conditions while ensuring the safety of animals, keepers, and visitors. Unlike conventional buildings or commercial fencing, enclosure structures must withstand continuous exposure to outdoor environments, daily operational activities, and the unique physical behaviors of different animal species.</p>
          <p>For these reasons, structural steel framing has become the preferred choice for modern zoo enclosure construction. Its exceptional strength, versatility, and long-term durability allow engineers to design safe and efficient habitats that meet both operational and animal welfare objectives.</p>

          <h3>Superior Strength and Structural Performance</h3>
          <p>One of the greatest advantages of structural steel is its outstanding strength-to-weight ratio. Structural steel members can support substantial loads without requiring excessively large sections, allowing engineers to create open enclosure designs that maximize visibility while maintaining structural stability. In zoo environments, structural framing may need to resist:</p>
          <ul>
${li(['Dead loads from enclosure components','Wind loads on large mesh panels','Roof and canopy loads','Dynamic forces from moving gates','Impact loads from large animals','Equipment and maintenance loads'])}
          </ul>
          <p>Properly engineered steel framing distributes these forces throughout the structure, helping maintain long-term safety and structural integrity.</p>

          <h3>Design Flexibility for Every Animal Species</h3>
          <p>No two zoo exhibits are exactly alike. A tiger enclosure has different structural requirements than an aviary, while elephant habitats require significantly different framing systems than primate exhibits. Structural steel provides the flexibility needed to accommodate these varying design requirements. Engineers can fabricate steel members into virtually any configuration, allowing enclosures to be customized for:</p>
          <ul>
${li(['Large carnivores','Primates','Elephants','Rhinoceroses','Bears','Hoofstock','Aviaries','Reptile exhibits','Marine animal facilities'])}
          </ul>
          <p>This flexibility enables zoological facilities to create habitats that reflect both the behavioral needs of the animals and the operational goals of the institution.</p>

          <h3>Supporting Complex Zoo Infrastructure</h3>
          <p>Structural steel framing serves as the foundation for nearly every major enclosure component. Rather than functioning as a standalone framework, it supports an integrated animal management system that includes zoo mesh systems, keeper doors, shift gates, holding areas, squeeze cages, transfer corridors, elevated walkways, veterinary access areas, feeding stations, and environmental enrichment structures. By connecting these elements into a single engineered system, structural steel framing allows zoo staff to manage animal movement safely and efficiently while maintaining protected contact procedures.</p>

          <h3>Durability in Challenging Environments</h3>
          <p>Zoo enclosures remain in service year-round and are continuously exposed to demanding environmental conditions. Rain, humidity, temperature changes, ultraviolet radiation, cleaning chemicals, and animal waste can all contribute to material deterioration if the structure is not properly protected.</p>
          <p>Structural steel is particularly well suited for these environments because it can be manufactured with protective systems such as galvanizing and industrial coating applications that significantly improve corrosion resistance. With proper engineering, fabrication, and routine maintenance, structural steel framing can deliver reliable performance for decades, making it a cost-effective long-term investment for zoological facilities.</p>

          <h3>Efficient Fabrication and Future Expansion</h3>
          <p>Modern zoos frequently renovate exhibits, expand habitats, or modify facilities as animal care practices evolve. Structural steel supports these changing requirements because it can be fabricated with high precision and adapted more easily than many traditional construction materials. Custom-fabricated framing systems allow engineers to:</p>
          <ul>
${li(['Expand existing enclosures','Modify exhibit layouts','Install additional mesh systems','Integrate new keeper access points','Add enrichment structures','Upgrade animal management systems'])}
          </ul>
          <p>This adaptability helps zoological facilities respond to changing operational needs without completely rebuilding existing infrastructure.</p>

          <h3>Supporting Animal Welfare Through Better Engineering</h3>
          <p>Although animals rarely interact directly with the structural frame itself, the engineering behind that framework has a significant influence on enclosure quality. A well-designed steel structure allows architects and zoological planners to create larger viewing areas, integrate naturalistic landscaping, support climbing structures, and incorporate enrichment features without compromising structural safety.</p>
          <p>Research in zoo enclosure design consistently shows that carefully planned habitats promote better management practices and create environments that encourage species-appropriate behaviors. Structural steel framing provides the flexibility needed to achieve these goals while maintaining the high safety standards required in modern zoological facilities.</p>

          <h3>Long-Term Value for Zoo Owners</h3>
          <p>Zoo infrastructure represents a substantial long-term investment. Selecting structural steel framing helps reduce lifecycle costs by providing exceptional structural reliability, low maintenance requirements, long service life, flexible future modifications, high-quality fabrication, and excellent compatibility with custom enclosure systems. When combined with professional engineering and precision fabrication, structural steel continues to be one of the most dependable solutions for constructing safe, durable, and efficient zoo enclosures.</p>

          <h2 id="components">Structural Components of a Zoo Enclosure</h2>
          <p>Every framing system consists of multiple structural elements working together to transfer loads safely to the foundation. Depending on the enclosure design, engineers may specify:</p>
          <ul>
${li(['Wide flange beams','Structural columns','Hollow structural sections (HSS)','Steel channels','Angles','Plates','Cross bracing','Base plates','Connection assemblies'])}
          </ul>
          <p>Each member is selected for its structural job, the loads it will see, and how it has to work with everything around it. Combine those elements well and you get a frame that is both strong and adaptable — from the base plates and anchors that tie it to the foundation to the columns and beams that carry the <a href="zoo-mesh-systems.html">mesh systems</a>, gates, and roof above. On the University of Miami research holding pens, for instance, we fabricated the whole framework in stainless steel so it could take constant wash-downs without corroding — a materials call driven entirely by how that facility runs day to day.</p>

          <h2 id="engineering">Engineering and Fabrication of Structural Steel Framing</h2>
          <p>Designing a structural steel frame for a zoo enclosure involves far more than selecting steel beams and connecting them together. Every structural component must be engineered to safely support enclosure systems while accounting for the behavior of the animals, environmental conditions, maintenance requirements, and the long-term operational needs of the facility. From the earliest design stages to final installation, precision engineering and quality fabrication play a critical role in ensuring that the completed structure performs safely and reliably throughout its service life.</p>

          <h3>Structural Engineering Begins with Load Analysis</h3>
          <p>Before any steel member is fabricated, engineers evaluate the loads that the structure will experience. Unlike conventional commercial buildings, zoo enclosures are subject to a combination of structural, environmental, and operational forces that vary depending on the species being housed and the enclosure's intended function. Typical design considerations include:</p>
          <ul>
${li(['Dead loads from structural members and enclosure components','Live loads from maintenance personnel and equipment','Wind loads acting on mesh panels and roof systems','Seismic loads where applicable','Dynamic loads from moving gates and mechanical equipment','Animal-generated forces such as pushing, climbing, leaning, or impact'])}
          </ul>
          <p>Accurate load analysis allows engineers to determine the appropriate member sizes, connection details, and support systems needed to maintain structural stability while avoiding unnecessary material costs.</p>

          <h3>Precision Fabrication Ensures Structural Reliability</h3>
          <p>Even the most carefully engineered design depends on accurate manufacturing. Professional fabrication begins with detailed shop drawings that define every structural member, connection, weld, and dimensional tolerance before production starts. During fabrication, steel members are:</p>
          <ul>
${li(['Cut to precise dimensions','Drilled or machined where required','Welded according to approved procedures','Assembled for dimensional verification','Prepared for protective coatings','Inspected before shipment'])}
          </ul>
          <p>Maintaining tight fabrication tolerances helps ensure that every component fits correctly during installation, reducing delays and improving the overall quality of the finished enclosure.</p>

          <h3>Welding and Structural Connections</h3>
          <p>Connections are among the most critical parts of any structural steel frame. Regardless of how strong individual steel members may be, the overall performance of the structure depends on properly designed and fabricated connections that safely transfer forces throughout the framing system. Common connection methods include:</p>
          <ul>
${li(['Full-penetration welds','Fillet welds','Bolted structural connections','Base plate anchor systems','Gusset plate assemblies','Moment and shear connections'])}
          </ul>
          <p>Connection selection depends on structural loading, fabrication requirements, constructability, and long-term maintenance considerations. High-quality welding and accurate connection detailing contribute significantly to the safety and durability of zoo enclosure structures.</p>

          <h3>Corrosion Protection for Long-Term Performance</h3>
          <p>Zoo structures operate in environments that can accelerate corrosion if steel is left unprotected. Outdoor exposure, humidity, rainfall, cleaning chemicals, animal waste, and changing temperatures all affect the lifespan of structural steel. To improve durability, fabricated steel components are commonly protected using systems such as:</p>
          <ul>
${li(['Hot-dip galvanizing','Powder coating','Zinc-rich primers','Multi-layer industrial coating systems'])}
          </ul>
          <p>The choice of protective coating depends on environmental conditions, project specifications, and long-term maintenance objectives. Effective corrosion protection helps preserve both the structural integrity and appearance of the enclosure while reducing future maintenance costs.</p>

          <h3>Quality Control Throughout Fabrication</h3>
          <p>Quality assurance is essential at every stage of structural steel fabrication. Professional manufacturers implement inspection procedures to verify that fabricated components meet engineering drawings and project specifications before installation. Typical quality control measures include:</p>
          <ul>
${li(['Material verification','Dimensional inspections','Weld quality inspections','Surface preparation checks','Coating thickness verification','Hardware inspection','Final assembly review'])}
          </ul>
          <p>By identifying potential issues before installation, quality control helps ensure that the completed framing system performs as intended throughout its service life.</p>

          <h3>Integrating Structural Steel with Complete Zoo Enclosure Systems</h3>
          <p>Structural steel framing does not function independently. It serves as the framework that supports every major enclosure component, including <a href="zoo-mesh-systems.html">zoo mesh systems</a>, <a href="keeper-doors-for-zoo-enclosures.html">keeper doors</a>, <a href="shift-gates-for-zoo-enclosures.html">shift gates</a>, <a href="zoo-holding-areas.html">holding areas</a>, <a href="zoo-squeeze-cage.html">squeeze cages</a>, animal transfer corridors, elevated platforms, <a href="zoo-enrichment-boxes.html">environmental enrichment equipment</a>, and maintenance access structures. Designing these components as a unified structural system improves operational efficiency, simplifies future modifications, and enhances the overall safety of the enclosure. This integrated engineering approach allows zoological facilities to create habitats that are not only structurally sound but also practical for daily animal care and long-term management.</p>

          <h2 id="choosing">Choosing the Right Structural Steel Fabrication Partner</h2>
          <p>Structural steel framing is a long-term investment that directly influences the safety, reliability, and lifespan of a zoo enclosure. While proper engineering is essential, the quality of fabrication is equally important. Even the best structural design can be compromised by poor workmanship, inaccurate fabrication, or inadequate quality control. Choosing an experienced structural steel fabrication partner helps ensure that every component is manufactured to specification, performs as intended, and supports the long-term success of the enclosure.</p>
          <p>Zoo enclosure projects require more than general steel fabrication experience. They demand an understanding of structural engineering, animal management systems, and the unique operational requirements of zoological facilities. When selecting a fabrication partner, several factors should be carefully evaluated.</p>

          <h3>Engineering Expertise</h3>
          <p>A reliable fabricator should work closely with engineers, architects, and project teams to ensure every structural component is manufactured according to the approved design. This includes understanding structural load requirements, member sizing, connection details, fabrication tolerances, material specifications, and installation requirements. Engineering knowledge helps minimize fabrication errors while ensuring the completed structure performs as intended.</p>

          <h3>Precision Manufacturing</h3>
          <p>Accurate fabrication is critical because structural steel components must fit together precisely during installation. Professional fabrication facilities use advanced equipment and detailed quality procedures to produce components with consistent dimensional accuracy. Precision manufacturing contributes to faster installation, better structural alignment, reduced field modifications, improved connection fit-up, and greater overall construction efficiency. These advantages help reduce project delays while improving the long-term performance of the enclosure.</p>

          <h3>High-Quality Welding and Workmanship</h3>
          <p>Structural steel framing relies heavily on the quality of its welded and bolted connections. Poor welding can reduce structural capacity, create maintenance problems, and shorten the service life of the enclosure. Professional fabricators maintain high workmanship standards through qualified welding procedures, skilled welders, thorough weld inspections, dimensional verification, and continuous quality assurance. Consistent workmanship ensures that every structural component contributes to the overall strength and reliability of the finished enclosure.</p>

          <h3>Protective Finishes for Long-Term Durability</h3>
          <p>Because zoo enclosures operate outdoors, protective coatings are essential for preserving structural steel over time. An experienced fabrication partner should recommend corrosion protection systems appropriate for the project's environmental conditions and maintenance strategy. Depending on the application, this may include hot-dip galvanizing, powder coating, industrial paint systems, zinc-rich primer systems, and multi-layer protective coatings. Selecting the right finish helps extend service life while reducing future maintenance costs.</p>

          <h3>Custom Fabrication Capabilities</h3>
          <p>Every zoological facility has different operational goals, exhibit layouts, and species requirements. A qualified fabrication partner should be capable of producing custom structural steel framing for zoo mesh systems, keeper doors, shift gates, holding areas, squeeze cages, transfer corridors, elevated platforms, visitor viewing structures, maintenance access systems, and environmental enrichment support structures. Custom fabrication ensures that every structural component integrates seamlessly into the complete enclosure system.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
${FAQ.map(([q, a]) => `          <h3>${q}</h3>\n          <p>${a}</p>`).join('\n')}

          <h2 id="final-thoughts">Final Thoughts</h2>
          <p>Structural steel framing is the foundation of every successful zoo enclosure. It provides the strength, stability, and flexibility needed to support modern habitats while accommodating the complex operational requirements of zoological facilities.</p>
          <p>From supporting <a href="zoo-mesh-systems.html">zoo mesh systems</a> and <a href="keeper-doors-for-zoo-enclosures.html">keeper doors</a> to integrating <a href="shift-gates-for-zoo-enclosures.html">shift gates</a>, <a href="zoo-holding-areas.html">holding areas</a>, <a href="zoo-squeeze-cage.html">squeeze cages</a>, and <a href="zoo-enrichment-boxes.html">environmental enrichment</a> structures, structural steel framing connects every enclosure component into a single, reliable system.</p>
          <p>When combined with sound engineering, precision fabrication, and appropriate corrosion protection, structural steel delivers exceptional long-term performance, making it one of the most trusted construction materials for modern zoo infrastructure.</p>

          <h2 id="references">References</h2>
          <p>This article draws upon established structural engineering principles and zoological enclosure design research, including:</p>
          <ul class="refs">
            <li>Structural steel design and fabrication references from leading engineering textbooks.</li>
            <li>Research on steel construction, structural behavior, and fabrication practices published by <em>Taylor &amp; Francis</em> and other engineering publishers.</li>
            <li>Industry guidance on structural steelwork, corrosion protection, welding, and quality assurance.</li>
            <li>Zoo enclosure design research published in <em>Zoo's Print</em>, supporting the relationship between structural systems, enclosure functionality, and animal management.</li>
          </ul>

        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta">
      <div class="cta__bg"><img src="assets/img/cta-bg.webp" alt="" aria-hidden="true" loading="lazy" width="1312" height="1070" /></div>
      <div class="container cta__inner" data-reveal>
        <span class="eyebrow" style="justify-content:center">Custom Structural Steel Framing</span>
        <h2 style="margin-top:1rem">The Framework Behind the Whole Enclosure</h2>
        <p>TCB Metal Works designs and fabricates custom structural steel framing for zoo enclosures and animal management systems — engineered to integrate seamlessly with mesh systems, keeper doors, shift gates, holding areas, and squeeze cages, and built for long-term durability and dependable performance.</p>
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
          <p class="lead">More on the components and engineering behind modern zoo enclosure systems.</p>
        </div>
        <div class="cards" style="margin-top:3rem;grid-template-columns:repeat(auto-fill,minmax(min(100%,320px),1fr))" data-reveal-group>
          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Zoo Enclosure Equipment</span><img src="assets/img/zoo-mesh-systems.webp" alt="Galvanized welded wire mesh panels in reinforced steel frames forming a zoo enclosure wall, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1000" height="595" /></div>
            <div class="card__body">
              <h3>Zoo Mesh Systems</h3>
              <p>Choosing the right mesh for safe, durable enclosures — welded wire, materials, and engineering.</p>
              <a class="card__link" href="zoo-mesh-systems.html">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Zoo Enclosure Equipment</span><img src="assets/img/shift-gates.webp" alt="Galvanized steel framed mesh gate panels on a base track, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="900" height="472" /></div>
            <div class="card__body">
              <h3>Shift Gates for Zoo Enclosures</h3>
              <p>Safely transferring animals between spaces — sliding &amp; swing designs, locking, and protected contact.</p>
              <a class="card__link" href="shift-gates-for-zoo-enclosures.html">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Zoo Caging</span><img src="assets/img/zoo-enclosure-design.webp" alt="Zoo enclosure design render showing climbing structures and containment mesh" loading="lazy" decoding="async" width="1400" height="677" /></div>
            <div class="card__body">
              <h3>What Is Zoo Caging?</h3>
              <p>How modern enclosure systems are designed — keeper doors, shift gates, holding areas and mesh.</p>
              <a class="card__link" href="what-is-zoo-caging.html">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
        </div>
        <div class="center" style="margin-top:2.5rem" data-reveal><a class="btn btn--ghost" href="articles.html">View All Articles <svg><use href="#i-arrow"/></svg></a></div>
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
  <meta property="og:title" content="Structural Steel Framing for Zoo Enclosures: Design, Fabrication &amp; Engineering Guide" />
  <meta property="og:description" content="${DESC}" />
  <meta property="og:image" content="${IMG}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="${URL}" />
  <meta property="article:published_time" content="${DATE}" />
  <meta property="article:modified_time" content="${DATE}" />
  <meta property="article:author" content="TCB Metal Works" />
  <meta property="article:section" content="Zoo Enclosure Equipment" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Structural Steel Framing for Zoo Enclosures" />
  <meta name="twitter:description" content="Why structural steel framing is the foundation of safe, durable zoo enclosures — design, fabrication, and engineering." />
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
    "headline": "Structural Steel Framing for Zoo Enclosures: Design, Fabrication & Engineering Guide",
    "description": "${DESC}",
    "image": "${IMG}",
    "datePublished": "${DATE}",
    "dateModified": "${DATE}",
    "inLanguage": "en-US",
    "articleSection": "Zoo Enclosure Equipment",
    "wordCount": ${words},
    "timeRequired": "PT${minutes}M",
    "keywords": "${KEYWORDS}",
    "about": [
      { "@type": "Thing", "name": "Structural steel", "sameAs": "https://en.wikipedia.org/wiki/Structural_steel" },
      { "@type": "Thing", "name": "Zoo", "sameAs": "https://en.wikipedia.org/wiki/Zoo" }
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
      { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://tcbmetalworks.com/articles/" },
      { "@type": "ListItem", "position": 3, "name": "Structural Steel Framing", "item": "${URL}" }
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

const out = HEAD + chrome + MAIN.replace('15 min read', `${minutes} min read`) + tail;
await writeFile(path.join(ROOT, SLUG), out, 'utf8');
console.log(`wrote ${SLUG} | ${words} words | ${minutes} min read | ${(out.length/1024).toFixed(0)} KB | title ${TITLE.length}c | desc ${DESC.length}c`);
