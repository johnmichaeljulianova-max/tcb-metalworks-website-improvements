import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('tcb-website');
const src = await readFile(path.join(ROOT, 'what-is-zoo-caging.html'), 'utf8');

// Reuse the exact shared chrome so header/sprite/footer can never drift
const chrome = src.slice(src.indexOf('<body>'), src.indexOf('<main id="main">'));
const tail   = src.slice(src.indexOf('<footer class="footer">'));

const URL  = 'https://tcbmetalworks.com/keeper-doors-for-zoo-enclosures/';
const IMG  = 'https://tcbmetalworks.com/assets/img/keeper-doors-og.jpg';
const DESC = "Learn what keeper doors are, why they're essential in modern zoo enclosures, their safety features, fabrication methods, and containment best practices.";
const KEYWORDS = "keeper doors for zoo enclosures, zoo keeper doors, keeper door, zoo enclosure doors, animal enclosure doors, custom keeper doors, zoo door fabrication, steel zoo doors, zoo safety doors";
const H1   = "Keeper Doors for Zoo Enclosures: Design, Safety Features &amp; Fabrication Guide";
const DATE = "2026-07-09";

const FAQ = [
  ["What is a keeper door?", "A keeper door is a secure access door that allows authorized zoo professionals to safely enter service areas, holding spaces, or enclosure support zones while maintaining secure separation from animals. It is a key component of modern zoo enclosure systems and protected contact management."],
  ["Why are keeper doors important in zoos?", "Keeper doors allow staff to perform essential daily tasks such as feeding, cleaning, maintenance, habitat inspections, and veterinary support while minimizing the risk of direct contact with animals."],
  ["What materials are used to fabricate keeper doors?", "Most professionally fabricated keeper doors use structural steel as the primary framework, combined with stainless steel hardware, heavy-duty hinges, reinforced welded mesh where appropriate, industrial locking systems, and corrosion-resistant protective finishes."],
  ["Can keeper doors be customized?", "Yes. Nearly every zoo enclosure has different operational requirements, making custom fabrication the preferred solution. Keeper doors can be customized for species-specific requirements, door dimensions, swing direction, locking systems, mesh configurations, observation panels, structural reinforcement, and integration with holding areas and shift gates."],
  ["How do keeper doors improve zoo safety?", "Keeper doors support protected contact management by allowing zoo professionals to access service areas only after animals have been safely transferred to designated holding spaces. Combined with secure locking systems and operational procedures, they significantly reduce the risk of accidental contact and animal escape."],
  ["How long do professionally fabricated keeper doors last?", "The service life of a keeper door depends on material quality, fabrication standards, environmental conditions, maintenance practices, and frequency of use. Properly fabricated steel keeper doors that receive routine maintenance can remain in operation for decades."],
];

const li = a => a.map(x => `            <li>${x}</li>`).join('\n');

const MAIN = `  <main id="main">
    <!-- HERO BANNER -->
    <section class="pagehero">
      <div class="pagehero__grain"></div>
      <div class="container pagehero__inner" data-reveal>
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="articles.html">Articles</a><span>/</span>Keeper Doors</nav>
        <span class="eyebrow" style="margin-top:1rem">Zoo Enclosure Equipment</span>
        <h1 style="margin-top:1rem">${H1}</h1>
        <div class="article-meta">
          <span><svg><use href="#i-user"/></svg>By <strong>TCB Metal Works</strong></span>
          <span><svg><use href="#i-clock"/></svg>15 min read</span>
          <span><svg><use href="#i-calendar"/></svg>Last updated <time datetime="${DATE}">July 9, 2026</time></span>
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
              <li><a href="#what-is-a-keeper-door">What Is a Keeper Door?</a></li>
              <li><a href="#why-zoos-use">Why Modern Zoos Use Them</a></li>
              <li><a href="#protected-contact">Protected Contact Management</a></li>
              <li><a href="#components">Key Components</a></li>
              <li><a href="#materials">Materials &amp; Fabrication</a></li>
              <li><a href="#species-design">Species-Specific Design</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ol>
          </nav>
        </aside>

        <article class="prose" data-reveal>

          <figure class="article-figure">
            <img src="assets/img/keeper-doors.webp"
                 alt="Galvanized steel framed welded-mesh panels with a solid steel keeper door and heavy-duty hinges, fabricated by TCB Metal Works for the Denver Zoo Australia exhibit"
                 width="1004" height="527" fetchpriority="high" decoding="async" />
            <figcaption>A keeper door in a TCB Metal Works enclosure build — a solid steel access panel set into galvanized framed mesh, with heavy-duty hinges and a reinforced sill.</figcaption>
          </figure>

          <div class="callout">
            <h2>Quick Answer</h2>
            <p>A keeper door is a secure access door that allows zoo professionals to safely enter service areas, holding spaces, and enclosure support zones without direct contact with animals. Modern keeper doors are engineered with heavy-duty steel construction, specialized locking systems, and protected access features that help prevent escapes while improving keeper safety and operational efficiency. Professional zoo facilities typically integrate keeper doors into larger enclosure management systems that include holding areas, shift gates, and transfer corridors.</p>
          </div>

          <h2 id="introduction">Introduction</h2>
          <p>Every modern zoo enclosure depends on more than strong fencing and secure barriers. Behind every successful animal habitat is an infrastructure that allows zoo professionals to feed animals, clean exhibits, perform maintenance, and carry out veterinary procedures safely.</p>
          <p>One of the most important of those components — and one of the most overlooked — is the keeper door. Unlike an ordinary industrial or commercial door, a keeper door is engineered for a zoological setting, where the safety of animals, keepers, veterinarians, and visitors all hinges on controlled access. It's the transition point between animal space and staff-only space, and it lets routine work happen without putting anyone at unnecessary risk.</p>
          <p>Whether the animals are large carnivores, hoofstock, primates, reptiles, or birds, every zoological facility depends on carefully designed access that supports daily husbandry while holding secure containment — keeper doors that tie into holding areas, shift gates, and protected-contact protocols. On our Denver Zoo Australia exhibit, for example, the keeper door was a solid steel leaf set straight into the galvanized welded-mesh wall on heavy-duty hinges, built to swing reliably for years while giving keepers a secure way in and out of the cassowary enclosure.</p>
          <p>This guide explains what keeper doors are, how they work, why they are indispensable in <a href="what-is-zoo-caging.html">modern zoo caging design</a>, and the engineering principles that make them a critical component of safe and efficient enclosure systems.</p>

          <h2 id="what-is-a-keeper-door">What Is a Keeper Door?</h2>
          <p>A keeper door is a purpose-built access door that allows authorized zoo staff to move safely between service areas and animal management spaces while maintaining secure separation from the animals.</p>
          <p>Unlike public access doors, keeper doors are designed around operational safety. Their primary function is to control staff movement without compromising animal containment or creating opportunities for escape.</p>
          <p>Depending on the enclosure design, keeper doors may connect:</p>
          <ul>
${li(['Holding areas','Night houses','Veterinary spaces','Keeper corridors','Service rooms','Food preparation areas','Transfer raceways','Outdoor exhibits'])}
          </ul>
          <p>These doors are rarely used in isolation. Instead, they form part of an integrated <a href="zoo-enclosures.html">enclosure management system</a> that allows animals and staff to occupy different spaces safely during feeding, cleaning, habitat maintenance, enrichment activities, and veterinary care.</p>
          <p>Modern zoological facilities also incorporate keeper doors into protected contact systems, where physical barriers remain between staff and potentially dangerous animals at all times. This approach significantly reduces operational risks while supporting efficient daily husbandry practices.</p>

          <h2 id="why-zoos-use">Why Every Modern Zoo Uses Keeper Doors</h2>
          <p>Zoo professionals perform countless tasks each day that require safe access to animal habitats. These responsibilities include:</p>
          <ul>
${li(['Delivering food and water','Cleaning exhibits','Replacing enrichment devices','Inspecting enclosure structures','Conducting maintenance','Monitoring animal behavior','Supporting veterinary procedures','Responding to emergencies'])}
          </ul>
          <p>Without carefully engineered access systems, many of these activities would expose staff to unnecessary danger or increase the risk of animal escapes.</p>
          <p>Keeper doors solve this challenge by providing designated entry points that work alongside <a href="what-is-zoo-caging.html#components" data-future-href="shift-gates.html">shift gates</a>, holding areas, and transfer systems to separate animals from staff during routine operations. Animals can be shifted into adjacent holding spaces while keepers safely enter the exhibit, complete their work, and exit before the animals are returned.</p>
          <p>Industry guidance consistently emphasizes secure door systems, direct visibility of access points, and double-barrier arrangements as fundamental elements of safe zoo operations, particularly for species capable of causing serious injury.</p>

          <h2 id="protected-contact">Protected Contact: The Foundation of Keeper Safety</h2>
          <p>Modern zoo management increasingly relies on a husbandry philosophy known as <strong>protected contact</strong>. Rather than allowing keepers and dangerous animals to occupy the same space, protected contact uses physical barriers and carefully controlled access systems to eliminate direct interaction whenever possible.</p>
          <p>Keeper doors play a central role in this approach. Instead of entering an enclosure while animals are present, staff first use shift gates and holding areas to relocate the animals into secure spaces. Only after all containment procedures have been completed do keepers access the exhibit through designated keeper doors.</p>
          <p>Many facilities strengthen these procedures further by using:</p>
          <ul>
${li(['Double-door vestibules','Air-lock entry systems','Sequential locking mechanisms','Two-key or two-lock safety systems','Self-closing doors','Visual confirmation before entry'])}
          </ul>
          <p>These measures help prevent accidental access, reduce the possibility of animal escape, and create multiple layers of protection for both staff and animals. Modern zoological safety standards consistently recommend such systems for enclosures housing dangerous species because they significantly improve operational safety without compromising efficiency.</p>

          <h2 id="components">Key Components of a Modern Keeper Door</h2>
          <p>Keeper doors may appear similar to industrial steel doors at first glance, but they are engineered for a very different purpose. In a zoological environment, a door is not simply an entry point — it is a critical safety component that protects animals, zoo professionals, veterinarians, and visitors every time it is used.</p>
          <p>Although every zoo enclosure is unique, professionally fabricated keeper doors typically include several essential components that work together to create a reliable and secure access system.</p>

          <h3>Heavy-Duty Structural Frame</h3>
          <p>The structural frame forms the foundation of the keeper door. Fabricated from heavy-duty structural steel, the frame must withstand years of repeated opening and closing while resisting deformation caused by environmental exposure and operational loads.</p>
          <p>More importantly, the frame must remain rigid under the forces generated by large animals. Species such as lions, tigers, bears, gorillas, and other powerful mammals can exert considerable force against enclosure structures, making structural integrity a fundamental design requirement.</p>
          <p>Precision fabrication also ensures proper door alignment, reducing unnecessary wear on hinges, locking mechanisms, and seals throughout the door's service life.</p>

          <h3>Reinforced Door Panels</h3>
          <p>The door panel itself provides the primary containment barrier. Depending on the enclosure design, panels may consist of:</p>
          <ul>
${li(['Solid steel construction','Welded mesh systems','Combination steel and mesh assemblies','Observation panels integrated into steel framing'])}
          </ul>
          <p>Which one fits comes down to the species, how much visibility and ventilation the door needs, and the facility's operating procedures. A carnivore enclosure usually calls for reinforced steel framing and heavy-duty welded mesh that can shrug off climbing, pulling, and biting, while a door for smaller species leans toward visibility and airflow — without ever giving up the containment standard.</p>

          <h3>Industrial Hinges</h3>
          <p>Keeper doors are opened and closed countless times throughout their operational life. For this reason, hinge selection is a critical engineering consideration.</p>
          <p>Heavy-duty industrial hinges are designed to support the door's weight while maintaining smooth and reliable operation under continuous use. Proper hinge placement distributes loads evenly across the frame, minimizing stress concentrations that could lead to premature wear or misalignment.</p>
          <p>In high-security enclosures, hinge systems may also incorporate tamper-resistant designs and protective features that prevent damage from animal interaction.</p>

          <h3>High-Security Locking Systems</h3>
          <p>The locking mechanism is arguably the most important component of any keeper door. Modern zoological facilities rely on locking systems that remain secure under demanding conditions while allowing trained staff to operate them efficiently during routine husbandry and emergency situations.</p>
          <p>Depending on the facility's operational requirements, keeper doors may incorporate:</p>
          <ul>
${li(['Mechanical deadbolt systems','Multi-point locking mechanisms','Dual-lock arrangements','Sequential locking systems','Padlock-compatible hardware','Self-locking latches','Two-key safety procedures'])}
          </ul>
          <p>Many accredited zoological institutions implement redundant locking procedures for dangerous animal enclosures, ensuring that multiple independent safety measures must be satisfied before access is granted. This layered approach significantly reduces the likelihood of accidental entry or animal escape while supporting standardized operating procedures.</p>

          <h3>Observation Windows and Mesh Viewing Panels</h3>
          <p>Maintaining visibility is essential during enclosure operations. Observation windows or reinforced mesh viewing panels allow zoo professionals to confirm an animal's location before opening the door, monitor movement throughout transfer procedures, and verify that holding areas have been secured.</p>
          <p>These viewing features improve communication between team members while supporting protected contact management by reducing uncertainty during routine operations. Materials used for observation panels must provide both durability and clear visibility while resisting scratching, impact, and long-term environmental exposure.</p>

          <h3>Safety Features That Reduce Operational Risk</h3>
          <p>Modern keeper doors are engineered around the principle of <strong>multiple layers of protection</strong>. Rather than relying on a single barrier, today's enclosure systems combine physical hardware, operational procedures, and facility design to minimize risk. Common safety features include:</p>
          <ul>
${li(['Reinforced structural construction','Heavy-duty locking mechanisms','Self-closing door systems','Anti-tamper hardware','Emergency release provisions for authorized personnel','Clear sightlines through viewing panels','Corrosion-resistant finishes','Integration with holding areas and shift gates'])}
          </ul>
          <p>These features help create predictable and repeatable workflows that reduce the likelihood of human error while improving overall enclosure security.</p>

          <h3>Part of a Complete Enclosure System</h3>
          <p>A keeper door earns its keep as part of an integrated enclosure management system, not as an isolated component. During routine operations, animals are typically moved through shift gates into holding areas before keepers enter the exhibit. This sequence allows maintenance, feeding, cleaning, enrichment placement, and inspections to be carried out without direct contact between staff and animals. The same principle governs veterinary handling equipment such as <a href="zoo-squeeze-cage.html">squeeze cages</a>, which rely on the same corridors and holding spaces.</p>
          <p>By coordinating keeper doors with transfer corridors, holding facilities, and protected contact procedures, zoological institutions create a safer working environment while reducing stress for the animals. This systems-based approach has become a defining characteristic of modern zoo enclosure design.</p>

          <h2 id="materials">Materials and Fabrication</h2>
          <p>A keeper door is only as reliable as the materials, engineering, and fabrication techniques behind it. While its primary purpose is to provide secure access, the door must also withstand years of demanding use in environments where safety can never be compromised.</p>
          <p>Unlike standard industrial doors, keeper doors for zoo enclosures are engineered to resist repeated operation, harsh weather conditions, cleaning chemicals, and the physical forces exerted by animals. Every component — from the steel frame to the locking hardware — must work together to deliver dependable performance throughout the life of the enclosure.</p>

          <h3>Structural Steel</h3>
          <p>Structural steel forms the foundation of most professionally fabricated keeper doors. Its high strength and excellent fabrication characteristics allow manufacturers to produce rigid door frames capable of supporting heavy panels, industrial hinges, and specialized locking systems without compromising structural integrity.</p>
          <p>Steel also provides the flexibility needed to manufacture custom dimensions and integrate additional enclosure features such as mesh panels, observation windows, reinforcement plates, and access hardware. When engineered correctly, structural steel doors provide exceptional durability even under continuous daily operation.</p>

          <h3>Stainless Steel Components</h3>
          <p>Although structural steel provides the primary framework, <a href="services.html#stainless">stainless steel</a> is often incorporated into components exposed to moisture or frequent cleaning — hinges, fasteners, locking hardware, access handles, and veterinary service fittings.</p>
          <p>Because stainless steel offers excellent corrosion resistance, it helps maintain reliable operation in humid environments and reduces maintenance requirements over time. Depending on the project, fabricators may combine structural steel and stainless steel to balance performance, longevity, and project budget.</p>

          <h3>Welded Mesh Integration</h3>
          <p>Many keeper doors incorporate heavy-duty welded mesh rather than solid steel panels. Mesh systems provide several operational advantages, including improved visibility, natural ventilation, and easier observation of animal behavior before entry.</p>
          <p>The mesh specification depends on species size, bite force, climbing ability, pulling strength, visibility requirements, and the required security level. Proper mesh integration requires precision welding and reinforced framing to maintain structural stability while resisting deformation under repeated loading.</p>

          <h3>Corrosion Protection</h3>
          <p>Zoo enclosures are exposed to demanding environmental conditions throughout the year. Humidity, rainfall, temperature changes, animal waste, cleaning chemicals, and regular washing can all accelerate corrosion if protective measures are not applied. Professional fabrication commonly incorporates corrosion-resistant finishes such as:</p>
          <ul>
${li(['Hot-dip galvanizing','Powder coating','Zinc-rich primers','Industrial protective coatings'])}
          </ul>
          <p>Selecting the appropriate finish depends on the enclosure's operating environment, maintenance schedule, and expected service life. A properly protected keeper door maintains both its structural performance and appearance for many years while reducing long-term maintenance costs.</p>

          <h3>Engineering Considerations</h3>
          <p>Designing a keeper door involves much more than selecting durable materials. Every enclosure presents unique engineering challenges that influence how the door is fabricated, installed, and operated.</p>
          <p><strong>Structural integrity.</strong> Keeper doors must remain stable under both operational loads and unexpected animal interaction. Engineers evaluate frame geometry, reinforcement, weld locations, and load distribution to ensure the door maintains its performance throughout years of service. Maintaining precise tolerances also helps prevent excessive wear on hinges and locking mechanisms.</p>
          <p><strong>Operational efficiency.</strong> Routine activities such as feeding, cleaning, habitat maintenance, enrichment placement, and veterinary support all depend on doors that operate smoothly and consistently — with easy operation by trained staff, reliable locking performance, minimal maintenance interruptions, and long service intervals.</p>
          <p><strong>Integration with enclosure systems.</strong> Keeper doors are rarely installed as standalone components. They are designed to work alongside shift gates, holding areas, transfer raceways, veterinary handling systems, and protected contact barriers. When every component is engineered as part of a complete enclosure system, both safety and workflow improve significantly.</p>

          <h3>The Value of Precision Fabrication</h3>
          <p>Precision fabrication is about more than producing components that fit together. Accurate manufacturing contributes directly to safety, reliability, and long-term performance — smooth operation throughout years of use, accurate alignment of locking mechanisms, consistent sealing and fit, reduced maintenance, improved structural performance, and easier installation during construction.</p>
          <p>Small manufacturing inaccuracies can become significant operational problems once an enclosure is in daily use. By investing in precision fabrication from the beginning, zoological facilities reduce the likelihood of costly repairs, operational disruptions, and premature equipment replacement.</p>

          <h2 id="species-design">Species-Specific Design Considerations</h2>
          <p>Because different species exhibit different behaviors and physical capabilities, the design of a keeper door must always be tailored to the enclosure it serves.</p>

          <h3>Why Off-the-Shelf Doors Are Rarely Suitable</h3>
          <p>Although industrial steel doors are widely available, they are rarely appropriate for zoological applications without significant modification. Zoo environments present unique engineering challenges that require custom solutions. Factors such as animal strength, enclosure layout, veterinary workflows, environmental exposure, and institutional safety protocols all influence the final design.</p>
          <p>Custom fabrication allows engineers to optimize door dimensions, structural reinforcement, mesh specifications, locking configurations, viewing panel placement, corrosion protection, and integration with surrounding enclosure components. Rather than adapting standard products to specialized environments, custom fabrication ensures that the keeper door becomes an integral part of the enclosure's overall safety and operational strategy.</p>

          <h3>Why Every Keeper Door Is Custom Designed</h3>
          <p>No two zoological facilities are identical. Even enclosures housing the same species often differ in layout, operational procedures, climate, and veterinary requirements. As a result, professionally fabricated keeper doors are almost always custom engineered rather than selected from standardized product catalogs. Design variables may include:</p>
          <ul>
${li(['Door dimensions','Frame thickness','Mesh configuration','Locking systems','Viewing panel placement','Swing direction','Species-specific reinforcement','Integration with existing enclosure infrastructure'])}
          </ul>
          <p>A keeper door designed for a lion holding area differs significantly from one used in a primate habitat or a giraffe facility. Animal size, strength, behavior, environmental conditions, and husbandry practices all influence the final design.</p>

          <h3>What to Look For in a Fabrication Partner</h3>
          <p>Selecting the right keeper door is not simply a matter of choosing a strong steel door. It is about investing in a critical safety system that will support daily zoo operations for many years.</p>
          <p><strong>Experience with custom zoo enclosure systems.</strong> Not every metal fabrication company has experience manufacturing equipment for zoological environments. An experienced fabricator understands animal behavior, enclosure workflows, and protected contact management, and develops solutions tailored to each project rather than relying on standardized products.</p>
          <p><strong>Engineering expertise.</strong> Before fabrication starts, engineers should evaluate structural loading, door dimensions, hardware selection, locking mechanisms, integration with adjacent enclosure systems, and future maintenance requirements. Proper engineering reduces installation issues while helping ensure reliable performance.</p>
          <p><strong>Precision manufacturing.</strong> Poorly aligned doors, inconsistent welds, or improperly installed hardware create operational problems that become increasingly difficult to correct once the enclosure is in use. Fabrication should prioritize accurate dimensional tolerances, high-quality welding, smooth door operation, proper hardware alignment, thorough quality inspections, and consistent finishing.</p>
          <p><strong>Long-term durability.</strong> Keeper doors are exposed to daily operation, outdoor weather, humidity, cleaning chemicals, animal interaction, and temperature changes. Selecting durable materials and corrosion-resistant finishes extends the lifespan of the equipment while maintaining dependable performance.</p>

          <h3>Why Custom Fabrication Delivers Better Results</h3>
          <p>Modern zoological facilities continue to evolve. New exhibits, expanding conservation programs, changing animal collections, and updated husbandry practices all influence enclosure design. Custom fabrication provides the flexibility needed to support these changing requirements.</p>
          <p>Instead of adapting facility operations to fit standard products, custom-engineered keeper doors are designed specifically for individual species, exhibit layouts, operational workflows, veterinary procedures, protected contact systems, and future expansion plans. This tailored approach creates safer, more efficient enclosure systems that continue to perform as facility needs change over time.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
${FAQ.map(([q, a]) => `          <h3>${q}</h3>\n          <p>${a}</p>`).join('\n')}

          <h2 id="final-thoughts">Final Thoughts</h2>
          <p>Keeper doors are far more than simple access points — they are essential safety systems that support the daily operation of modern zoological facilities.</p>
          <p>From routine husbandry and veterinary care to habitat maintenance and emergency response, these doors enable zoo professionals to perform critical tasks while maintaining secure animal containment and supporting protected contact management.</p>
          <p>Their effectiveness depends on careful engineering, durable materials, precision fabrication, and thoughtful integration with the broader enclosure system. Every detail — from structural framing and locking mechanisms to corrosion protection and species-specific design — contributes to creating safer environments for both animals and the professionals who care for them.</p>

          <h2 id="references">References</h2>
          <p>This guide is based on established zoological management practices, enclosure design principles, and peer-reviewed literature, including:</p>
          <ul class="refs">
            <li>Hediger, H. (1967). <em>The Psychology and Behaviour of Animals in Zoos and Circuses.</em> International Zoo Yearbook.</li>
            <li>Zoo management and enclosure safety publications from <em>Zoo's Print Journal.</em></li>
            <li>Industry guidance from leading zoological organizations on protected contact management, enclosure operations, and animal welfare.</li>
            <li>Current engineering and fabrication best practices for custom steel enclosure systems.</li>
          </ul>

        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta">
      <div class="cta__bg"><img src="assets/img/cta-bg.webp" alt="" aria-hidden="true" loading="lazy" /></div>
      <div class="container cta__inner" data-reveal>
        <span class="eyebrow" style="justify-content:center">Custom Keeper Door Fabrication</span>
        <h2 style="margin-top:1rem">Engineered for Secure Access</h2>
        <p>TCB Metal Works fabricates heavy-duty keeper doors engineered for long-term durability, operational efficiency, and secure animal containment — integrating seamlessly with holding areas, shift gates, and transfer corridors.</p>
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
            <div class="card__media"><span class="card__tag">Zoo Caging</span><img src="assets/img/zoo-enclosure-design.webp" alt="Zoo enclosure design render showing climbing structures and containment mesh" loading="lazy" decoding="async" width="1400" height="677" /></div>
            <div class="card__body">
              <h3>What Is Zoo Caging?</h3>
              <p>How modern enclosure systems are designed — keeper doors, shift gates, holding areas and mesh.</p>
              <a class="card__link" href="what-is-zoo-caging.html">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Zoo Veterinary Equipment</span><img class="obj-left" src="assets/img/squeeze-cage.webp" alt="Zoo enclosure design render showing steel-framed holding structures and service corridors" loading="lazy" decoding="async" width="1200" height="580" /></div>
            <div class="card__body">
              <h3>What Is a Zoo Squeeze Cage?</h3>
              <p>How squeeze cages support safe veterinary care — design, safety features, and custom fabrication.</p>
              <a class="card__link" href="zoo-squeeze-cage.html">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
          <article class="card card--placeholder" data-reveal aria-label="Upcoming article placeholder">
            <div class="card__media"><svg class="ph-icon" aria-hidden="true"><use href="#i-image"/></svg></div>
            <div class="card__body">
              <span class="ph-cat" aria-hidden="true"></span>
              <h3>Shift Gates</h3>
              <p>Managing safe animal movement between exhibits and holding areas.</p>
              <span class="card__link" aria-disabled="true">Coming soon <svg><use href="#i-arrow"/></svg></span>
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
  <title>Keeper Doors for Zoo Enclosures: Design, Safety &amp; Fabrication</title>
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
  <meta property="og:title" content="Keeper Doors for Zoo Enclosures: Design, Safety Features &amp; Fabrication Guide" />
  <meta property="og:description" content="${DESC}" />
  <meta property="og:image" content="${IMG}" />
  <meta property="og:url" content="${URL}" />
  <meta property="article:published_time" content="${DATE}" />
  <meta property="article:modified_time" content="${DATE}" />
  <meta property="article:author" content="TCB Metal Works" />
  <meta property="article:section" content="Zoo Enclosure Equipment" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Keeper Doors for Zoo Enclosures: Design, Safety &amp; Fabrication" />
  <meta name="twitter:description" content="What keeper doors are, the safety features that protect animals and staff, and how they're fabricated." />
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
    "headline": "Keeper Doors for Zoo Enclosures: Design, Safety Features & Fabrication Guide",
    "description": "${DESC}",
    "image": "${IMG}",
    "datePublished": "${DATE}",
    "dateModified": "${DATE}",
    "inLanguage": "en-US",
    "articleSection": "Zoo Enclosure Equipment",
    "wordCount": ${words},
    "timeRequired": "PT${minutes}M",
    "keywords": "${KEYWORDS}",
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
      { "@type": "ListItem", "position": 3, "name": "Keeper Doors for Zoo Enclosures", "item": "${URL}" }
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
await writeFile(path.join(ROOT, 'keeper-doors-for-zoo-enclosures.html'), out, 'utf8');
console.log(`wrote keeper-doors-for-zoo-enclosures.html | ${words} words | ${minutes} min read | ${(out.length/1024).toFixed(0)} KB`);
