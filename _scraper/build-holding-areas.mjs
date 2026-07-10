import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('tcb-website');
const src = await readFile(path.join(ROOT, 'what-is-zoo-caging.html'), 'utf8');
const chrome = src.slice(src.indexOf('<body>'), src.indexOf('<main id="main">'));
const tail   = src.slice(src.indexOf('<footer class="footer">'));

const URL  = 'https://tcbmetalworks.com/zoo-holding-areas/';
const IMG  = 'https://tcbmetalworks.com/assets/img/zoo-holding-areas-og.jpg';
const DESC = "Learn what zoo holding areas are, why they matter for animal welfare and keeper safety, and how good design improves modern zoo enclosure operations.";
const KEYWORDS = "zoo holding areas, animal holding area, off-exhibit holding, zoo enclosure holding, holding pens, protected contact, night house, zoo enclosure fabrication, custom holding areas";
const H1   = "Zoo Holding Areas: Design, Safety &amp; Best Practices for Modern Animal Enclosures";
const DATE = "2026-07-10";

const FAQ = [
  ["What is a zoo holding area?", "A zoo holding area is a secure, off-exhibit space where animals are temporarily housed during routine husbandry, veterinary procedures, exhibit maintenance, breeding programs, transportation, or emergency situations. It allows zoo professionals to manage animals safely while maintaining secure separation between staff and wildlife."],
  ["Why are holding areas important?", "Holding areas allow keepers to safely clean exhibits, perform maintenance, conduct veterinary examinations, introduce enrichment devices, and manage breeding or social groups without direct interaction with animals. They are an essential component of protected contact management and modern zoo operations."],
  ["Are holding areas different for every species?", "Yes. Holding areas are custom designed according to the biological and behavioural characteristics of each species. Animal size, strength, climbing ability, social behaviour, veterinary requirements, and husbandry routines all influence the final layout and engineering of the space."],
  ["What materials are commonly used in zoo holding areas?", "Professionally fabricated holding areas typically use structural steel for the primary framework, reinforced welded mesh for secure containment and visibility, stainless steel hardware for high-wear components, and corrosion-resistant protective coatings to ensure long-term durability."],
  ["How do holding areas improve animal welfare?", "Holding areas support low-stress animal management by allowing animals to move through familiar, predictable pathways using positive reinforcement and established husbandry routines. They also reduce unnecessary handling while providing safe environments for health monitoring, veterinary care, and temporary separation when required."],
  ["How long do professionally fabricated holding areas last?", "The lifespan of a holding area depends on engineering quality, fabrication standards, material selection, environmental conditions, and maintenance practices. Professionally fabricated steel holding areas that receive regular inspection and maintenance can provide reliable service for decades."],
];

const li = a => a.map(x => `            <li>${x}</li>`).join('\n');

const MAIN = `  <main id="main">
    <!-- HERO BANNER -->
    <section class="pagehero">
      <div class="pagehero__grain"></div>
      <div class="container pagehero__inner" data-reveal>
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="articles.html">Articles</a><span>/</span>Holding Areas</nav>
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
              <li><a href="#what-is-a-holding-area">What Is a Holding Area?</a></li>
              <li><a href="#why-essential">Why They Are Essential</a></li>
              <li><a href="#integrated-system">An Integrated System</a></li>
              <li><a href="#design">Design Considerations</a></li>
              <li><a href="#materials">Engineering &amp; Fabrication</a></li>
              <li><a href="#choosing">Choosing a Fabrication Partner</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ol>
          </nav>
        </aside>

        <article class="prose" data-reveal>

          <figure class="article-figure">
            <img src="assets/img/zoo-holding-areas.webp"
                 alt="An array of interconnected stainless steel off-exhibit holding pens with a sealed hygienic floor, fabricated by TCB Metal Works for the University of Miami research facility"
                 width="1024" height="537" fetchpriority="high" decoding="async" />
            <figcaption>Interconnected stainless steel holding pens in a TCB Metal Works build — the secure, off-exhibit spaces where animals are managed during cleaning, veterinary care and maintenance.</figcaption>
          </figure>

          <div class="callout">
            <h2>Quick Answer</h2>
            <p>A zoo holding area is a secure, off-exhibit space where animals are temporarily housed during routine husbandry, veterinary procedures, habitat maintenance, breeding programs, or emergency situations. Holding areas are an essential part of modern zoo enclosure systems because they allow animals to be managed safely while supporting protected contact, improving operational efficiency, and reducing stress for both animals and keepers. When designed correctly, they work seamlessly with shift gates, keeper doors, and transfer corridors to create safe and predictable animal movement throughout a zoological facility.</p>
          </div>

          <h2 id="introduction">Introduction</h2>
          <p>Visitors usually focus on the public exhibit, but some of the most important areas in a zoo are hidden behind the scenes. These operational spaces enable zoo professionals to care for animals safely while maintaining clean, secure, and well-managed habitats.</p>
          <p>Among the most important of those spaces are zoo holding areas. A holding area is simply somewhere an animal can stay while keepers get on with the work of the day — cleaning an exhibit, repairing structures, setting out enrichment, or prepping a habitat for whatever comes next. The same spaces earn their keep during veterinary exams, breeding management, introductions, transport, and the occasional emergency.</p>
          <p>Holding areas rarely stand alone. They plug into a larger <a href="what-is-zoo-caging.html">enclosure management system</a>, connecting with <a href="shift-gates-for-zoo-enclosures.html">shift gates</a>, <a href="keeper-doors-for-zoo-enclosures.html">keeper doors</a>, <a href="zoo-squeeze-cage.html">squeeze cages</a>, and transfer corridors so animals move through the facility in a controlled, predictable way. The stainless-steel research pens we fabricated for the University of Miami are a good example: a run of interconnected holding spaces, each with its own gate, laid out so animals could be shifted between them and cleaned around without anyone stepping into an occupied pen.</p>
          <p>Modern zoological facilities increasingly rely on these interconnected systems because they improve operational efficiency while supporting evidence-based animal welfare practices. Research has shown that predictable husbandry routines and thoughtfully designed enclosure infrastructure can reduce unnecessary stress and provide animals with greater control over their daily environment.</p>

          <h2 id="what-is-a-holding-area">What Is a Zoo Holding Area?</h2>
          <p>A zoo holding area is a secure enclosure located behind or adjacent to the main exhibit where animals can be temporarily housed without direct contact with zoo staff.</p>
          <p>Unlike public viewing habitats, holding areas are designed primarily for animal management rather than visitor experience. They provide a safe environment where animals can remain comfortably while routine operations take place elsewhere in the enclosure. Depending on the facility and the species being managed, holding areas may be used for:</p>
          <ul>
${li(['Daily exhibit cleaning and maintenance','Veterinary examinations and health monitoring','Feeding and husbandry routines','Behavioural training sessions','Breeding and reproductive management','Temporary separation of compatible animals','Quarantine or observation when necessary','Emergency animal containment'])}
          </ul>
          <p>The design of a holding area varies according to the needs of each species. A holding space for a tiger, for example, differs significantly from one designed for giraffes, elephants, primates, or reptiles. Animal size, behaviour, social structure, and husbandry requirements all influence the layout and engineering of the space. For this reason, professionally designed holding areas are almost always custom-built as part of a complete zoo enclosure system.</p>

          <h2 id="why-essential">Why Modern Zoos Rely on Holding Areas</h2>
          <p>Take the holding area away and a lot of everyday zoo work gets harder — and a good deal more dangerous. Every day, animal care teams need temporary access to the primary exhibit: cleaning substrates, inspecting barriers, repairing components, swapping out enrichment, landscaping, and making habitat improvements all mean stepping into spaces the animals normally occupy.</p>
          <p>Rather than moving animals using stressful or risky methods, keepers guide them into a dedicated holding area through established husbandry routines and positive reinforcement training. Once the animal has entered the holding space and all gates have been secured, staff can safely access the exhibit without direct interaction. This systematic approach offers several important benefits:</p>
          <ul>
${li(['Improves keeper safety by maintaining protected contact.','Reduces stress through predictable daily routines.','Supports efficient habitat maintenance.','Facilitates veterinary care and health monitoring.','Allows flexible management of social groups and breeding programs.','Improves emergency preparedness by providing secure containment spaces.'])}
          </ul>
          <p>Because holding areas serve as the operational hub of many enclosure systems, they are considered one of the most important investments in modern zoo infrastructure.</p>

          <h2 id="integrated-system">Holding Areas as Part of an Integrated Enclosure System</h2>
          <p>A holding area does not operate independently. Instead, it forms one part of a coordinated animal management system that includes:</p>
          <ul>
${li(['<a href="shift-gates-for-zoo-enclosures.html">Shift gates</a>','<a href="keeper-doors-for-zoo-enclosures.html">Keeper doors</a>','Transfer corridors','<a href="zoo-squeeze-cage.html">Squeeze cages</a>','Veterinary access points','Protected contact barriers'])}
          </ul>
          <p>Each component has a specific purpose, but together they allow animals to move safely between different parts of the facility while minimizing stress and maintaining secure separation between animals and staff.</p>
          <p>For example, a large carnivore may be shifted from its public exhibit into a holding area using a shift gate. Once the gate is locked, keepers can safely enter the exhibit through a keeper door to perform cleaning, maintenance, or habitat improvements. If a medical examination is required, the holding area may also connect directly to a squeeze cage or veterinary treatment space, reducing the need for additional handling. This integrated approach improves operational efficiency while supporting higher standards of animal welfare and workplace safety.</p>

          <h2 id="design">Designing Zoo Holding Areas for Safety and Efficiency</h2>
          <p>A well-designed holding area is much more than a temporary space where animals wait while keepers work. It is a carefully planned environment that supports daily husbandry, veterinary care, emergency response, and long-term animal welfare.</p>
          <p>Because holding areas are used frequently, they must be designed to accommodate both the physical characteristics of the species and the operational needs of the animal care team. Every design decision — from the size of the space to the location of gates and access points — can influence safety, efficiency, and the overall well-being of the animals.</p>

          <h3>Adequate Space for Natural Movement</h3>
          <p>Animals should be able to move comfortably within a holding area without feeling unnecessarily confined. The amount of space required depends on species, body size, social structure, behavioural needs, and duration of occupancy.</p>
          <p>For larger mammals such as elephants, rhinoceroses, and giraffes, holding areas require substantial structural strength and sufficient room for natural movement. Smaller species may require less floor space but often benefit from environmental features that encourage species-appropriate behaviours. Providing adequate space helps reduce stress and supports better welfare during temporary confinement.</p>

          <h3>Safe and Predictable Animal Flow</h3>
          <p>One of the primary functions of a holding area is to allow animals to move safely between different sections of the enclosure. For this reason, holding areas should be positioned to create a logical and predictable movement pathway connecting primary exhibits, shift gates, transfer corridors, keeper doors, veterinary facilities, and squeeze cages when required.</p>
          <p>Reducing unnecessary turns, dead ends, and visual distractions encourages smoother animal movement while making routine transfers more efficient for animal care staff. A thoughtfully planned layout also reduces the need for repeated handling, helping minimize stress during daily husbandry activities.</p>

          <h3>Clear Visibility for Animal Care Staff</h3>
          <p>Effective observation is essential during every animal transfer. Holding areas should allow keepers to monitor an animal's position and behaviour before opening or closing gates or entering adjacent work areas. Depending on the species and enclosure design, visibility may be provided through reinforced welded mesh, observation windows, strategic sightlines, or remote camera systems.</p>
          <p>Maintaining clear visual access enables staff to confirm that animals have safely entered the holding area, monitor behaviour during routine management, and verify that all containment systems are properly secured before proceeding with enclosure maintenance.</p>

          <h3>Comfortable Environmental Conditions</h3>
          <p>Even though holding areas are typically used for temporary occupancy, they should still provide conditions that support the health and comfort of the animals. Depending on the species, this may include:</p>
          <ul>
${li(['Appropriate ventilation','Natural or artificial lighting','Non-slip flooring','Proper drainage','Climate control where necessary','Dry resting surfaces','Protection from excessive heat, cold, or precipitation'])}
          </ul>
          <p>Maintaining suitable environmental conditions helps reduce stress and supports the physical well-being of animals during husbandry, veterinary care, or temporary separation.</p>

          <h3>Safety Features That Support Daily Operations</h3>
          <p>Safety is the primary objective of every holding area. Because keepers frequently work near these spaces, professionally engineered holding areas incorporate multiple layers of protection that help prevent accidental escapes while supporting efficient daily operations. Important safety features commonly include:</p>
          <ul>
${li(['Heavy-duty structural steel construction','High-security locking mechanisms','Reinforced keeper doors','Integrated shift gates','Protected contact barriers','Emergency access procedures','Durable containment systems','Clear observation points'])}
          </ul>
          <p>Rather than relying on a single safety measure, modern enclosure systems combine these features to create a reliable containment strategy that protects both animals and personnel.</p>

          <h3>Species-Specific Design Matters</h3>
          <p>No two animal species use a holding area in the same way. Behaviour, intelligence, strength, mobility, and social dynamics all influence how a holding area should be designed. For example:</p>
          <ul>
${li(['Large carnivores require highly secure containment systems capable of withstanding significant physical forces.','Primates benefit from environments that provide climbing opportunities, visual stimulation, and flexible management spaces.','Elephants and rhinoceroses require exceptionally robust structural components designed to withstand substantial weight and impact.','Hoofstock species, such as giraffes and zebras, often benefit from wider passageways that encourage calm and natural movement between connected spaces.'])}
          </ul>
          <p>By tailoring each holding area to the biological and behavioural needs of the species, zoos can improve both operational efficiency and animal welfare while reducing unnecessary risks during routine management.</p>

          <h3>Supporting Low-Stress Animal Management</h3>
          <p>Modern zoos increasingly emphasize low-stress handling techniques that encourage animals to participate voluntarily in routine management activities. Rather than forcing movement, animal care teams use positive reinforcement training and predictable daily routines to guide animals into holding areas. Over time, animals become familiar with these routines, making transfers calmer, safer, and more efficient.</p>
          <p>A well-designed holding area supports this approach by providing an environment that feels secure, minimizes unnecessary distractions, and integrates smoothly with the surrounding enclosure system. When thoughtful design is combined with professional husbandry practices, holding areas become more than containment spaces — they become valuable tools for promoting animal welfare while supporting safe and effective zoo operations.</p>

          <h2 id="materials">Engineering and Fabrication of Zoo Holding Areas</h2>
          <p>The effectiveness of a zoo holding area depends not only on its layout but also on the quality of its engineering and construction. Because these spaces are used daily and must safely contain animals of varying sizes and strengths, every structural component must be designed for long-term performance, reliability, and safety.</p>
          <p>Unlike standard industrial animal pens or agricultural holding facilities, zoo holding areas require custom engineering that considers animal behaviour, operational workflows, environmental conditions, and integration with the surrounding enclosure system. For this reason, professionally fabricated holding areas are designed specifically for each facility rather than built from generic or off-the-shelf solutions.</p>

          <h3>Structural Steel Framework</h3>
          <p>Structural steel forms the backbone of most professionally fabricated zoo holding areas. Its high strength, rigidity, and durability make it ideal for supporting enclosure walls, roof systems, gates, and integrated safety components. Structural steel also provides the flexibility needed to fabricate custom layouts that match the unique dimensions and operational requirements of each facility.</p>
          <p>When properly engineered and fabricated, structural steel resists deformation and helps maintain alignment between connected components such as shift gates and keeper doors, ensuring reliable operation throughout the life of the enclosure.</p>

          <h3>Heavy-Duty Welded Mesh</h3>
          <p>Many holding areas use reinforced welded mesh as part of the containment system. Compared to chain-link fencing or lighter materials, welded mesh offers superior strength while providing excellent visibility and ventilation. It allows animal care staff to continuously observe animal behaviour without compromising containment or security.</p>
          <p>Mesh specifications are carefully selected based on the species being housed, taking into account body size, strength, climbing ability, bite force, reach distance, and behavioural characteristics. Properly engineered mesh systems are securely welded into reinforced steel frames to create a rigid containment structure capable of withstanding years of daily use.</p>

          <h3>Corrosion Protection</h3>
          <p>Holding areas operate in environments where steel structures are regularly exposed to rain, humidity, wash-down procedures, animal waste, and cleaning agents. Without adequate protection, corrosion can reduce both the lifespan and reliability of enclosure infrastructure. To improve long-term durability, professional fabrication commonly includes protective finishes such as:</p>
          <ul>
${li(['Hot-dip galvanizing','Powder coating','Zinc-rich primers','Industrial protective paint systems'])}
          </ul>
          <p>Selecting the appropriate finish depends on environmental conditions, maintenance schedules, and the operational requirements of the zoological facility.</p>

          <h3>Engineering Considerations for Long-Term Performance</h3>
          <p>Designing a holding area requires more than selecting strong materials. Every component must work together to support safe, efficient, and predictable daily operations.</p>
          <p><strong>Structural strength and stability.</strong> Holding areas must withstand both static structural loads and the dynamic forces generated by animal movement. Large mammals such as elephants, rhinoceroses, and bears can apply tremendous pressure to enclosure structures, while agile species such as primates may repeatedly climb, pull, or swing on containment systems. Engineers account for these species-specific forces when determining structural reinforcement, frame geometry, support spacing, and connection details.</p>
          <p><strong>Efficient workflow integration.</strong> A holding area functions as part of a larger enclosure management system rather than as a standalone structure. Its design should integrate seamlessly with shift gates, keeper doors, transfer corridors, squeeze cages, veterinary holding spaces, and main exhibit areas — enabling animals to move through the facility safely and efficiently while reducing unnecessary handling.</p>
          <p><strong>Ease of maintenance.</strong> Professionally designed holding areas allow easy access to gates, hinges, locking mechanisms, and other critical components so inspections and servicing can be performed with minimal disruption to daily operations. Simplifying maintenance not only extends the lifespan of the enclosure but also helps reduce downtime and long-term operating costs.</p>

          <h3>Why Custom Fabrication Matters</h3>
          <p>Every zoological facility has different operational goals, exhibit layouts, and species requirements. A holding area designed for a lion habitat will differ significantly from one built for giraffes, elephants, reptiles, or primates. Even facilities housing the same species often require unique layouts based on husbandry practices, veterinary protocols, breeding programs, and available space. Custom fabrication allows every aspect of the holding area to be tailored to the specific needs of the project, including:</p>
          <ul>
${li(['Overall dimensions','Structural reinforcement','Mesh configuration','Access points','Gate placement','Keeper circulation routes','Veterinary access','Integration with adjacent enclosure systems'])}
          </ul>
          <p>By designing each holding area around the facility's operational requirements, custom fabrication creates safer, more efficient environments for both animals and staff.</p>

          <h2 id="choosing">Choosing the Right Zoo Holding Area Fabrication Partner</h2>
          <p>A zoo holding area is one of the most important operational spaces within an animal enclosure. Because it is used daily for husbandry, veterinary care, maintenance, breeding management, and emergency response, its design and construction directly influence the safety of both animals and zoo professionals.</p>
          <p>Choosing an experienced fabrication partner helps ensure that every holding area is engineered to meet the unique demands of the species, enclosure layout, and operational workflow. Rather than relying on generic containment systems, professionally fabricated holding areas are designed to integrate seamlessly with the entire enclosure while providing reliable performance for decades.</p>

          <h3>Experience in Custom Zoo Enclosure Systems</h3>
          <p>Every zoological facility has unique operational requirements. The design of a holding area depends on factors such as the species being housed, enclosure layout, husbandry routines, veterinary procedures, and future expansion plans. An experienced fabrication company develops custom solutions tailored to each project instead of adapting standardized industrial products that may not meet zoological requirements.</p>

          <h3>Precision Engineering and Manufacturing</h3>
          <p>Reliable enclosure systems begin with careful engineering. Before fabrication begins, engineers should evaluate structural loading, animal behaviour, gate placement, access routes, ventilation requirements, integration with adjacent enclosure components, and future maintenance access. Accurate fabrication ensures structural components fit correctly, gates align properly, locking mechanisms operate consistently, and the enclosure performs reliably throughout years of daily use.</p>

          <h3>Durable Materials for Long-Term Performance</h3>
          <p>Holding areas operate in demanding environments where equipment is exposed to frequent use, changing weather conditions, cleaning chemicals, moisture, and continual interaction with animals. Selecting high-quality materials and corrosion-resistant finishes helps extend the service life of the enclosure while reducing maintenance requirements and operational downtime. Durability is particularly important because holding areas often serve as the central hub of daily animal management.</p>

          <h3>Complete System Integration</h3>
          <p>A holding area should never be designed as an isolated structure. For maximum efficiency, it should integrate seamlessly with shift gates, keeper doors, squeeze cages, transfer corridors, veterinary treatment areas, main exhibits, and protected contact systems. Designing these elements as one coordinated enclosure system improves workflow, reduces unnecessary animal handling, and supports safer daily operations for animal care staff.</p>

          <h3>Why Custom Fabrication Delivers Better Results</h3>
          <p>Modern zoological facilities continue to evolve as standards for animal welfare, conservation, and operational safety advance. Custom fabrication allows holding areas to evolve alongside these changing requirements. Rather than forcing a facility to adapt to a standard enclosure design, custom-engineered holding areas are built specifically for individual species, behavioural requirements, veterinary procedures, daily husbandry routines, operational workflows, and future facility expansion. This tailored approach creates more efficient enclosure systems while supporting safer animal management and improved long-term performance.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
${FAQ.map(([q, a]) => `          <h3>${q}</h3>\n          <p>${a}</p>`).join('\n')}

          <h2 id="final-thoughts">Final Thoughts</h2>
          <p>Although visitors rarely see them, holding areas are among the most important components of a modern zoo enclosure. They provide secure spaces where animals can be safely managed during routine husbandry, veterinary care, exhibit maintenance, breeding programs, and emergency situations. By supporting protected contact management and predictable animal movement, holding areas contribute to safer working environments while helping reduce stress for the animals in human care.</p>
          <p>Their effectiveness depends on thoughtful planning, precision engineering, durable materials, and seamless integration with the broader enclosure system. When combined with components such as shift gates, keeper doors, and squeeze cages, professionally fabricated holding areas become an essential part of efficient, welfare-focused zoo operations.</p>
          <p>As zoological facilities continue to advance standards for conservation, animal care, and workplace safety, custom-engineered holding areas will remain a critical investment in building reliable and future-ready enclosure infrastructure.</p>

          <h2 id="references">References</h2>
          <p>This guide is based on established zoological management practices, enclosure design principles, and peer-reviewed research, including:</p>
          <ul class="refs">
            <li>Studies published in <em>Zoo Biology</em> on animal transfers, enclosure management, and protected contact systems.</li>
            <li>Research on modern zoo design and welfare-focused enclosure planning.</li>
            <li>Publications addressing husbandry practices, enclosure operations, and animal welfare in accredited zoological facilities.</li>
            <li>Engineering and fabrication best practices for custom structural steel enclosure systems.</li>
          </ul>

        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta">
      <div class="cta__bg"><img src="assets/img/cta-bg.webp" alt="" aria-hidden="true" loading="lazy" /></div>
      <div class="container cta__inner" data-reveal>
        <span class="eyebrow" style="justify-content:center">Custom Holding Area Fabrication</span>
        <h2 style="margin-top:1rem">The Operational Hub of Your Enclosure</h2>
        <p>TCB Metal Works designs and fabricates custom zoo holding areas engineered for safe animal management, operational efficiency, and long-term durability — integrating seamlessly with keeper doors, shift gates, transfer corridors, and squeeze cages.</p>
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
            <div class="card__media"><span class="card__tag">Zoo Enclosure Equipment</span><img src="assets/img/shift-gates.webp" alt="Galvanized steel framed mesh gate panels on a base track, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="900" height="472" /></div>
            <div class="card__body">
              <h3>Shift Gates for Zoo Enclosures</h3>
              <p>Safely transferring animals between spaces — sliding &amp; swing designs, locking, and protected contact.</p>
              <a class="card__link" href="shift-gates-for-zoo-enclosures.html">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Zoo Enclosure Equipment</span><img class="obj-right" src="assets/img/keeper-doors.webp" alt="Solid steel keeper door with heavy-duty hinges set into galvanized framed welded mesh, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1004" height="527" /></div>
            <div class="card__body">
              <h3>Keeper Doors for Zoo Enclosures</h3>
              <p>Safe access design, locking systems, protected contact, and species-specific requirements.</p>
              <a class="card__link" href="keeper-doors-for-zoo-enclosures.html">Read article <svg><use href="#i-arrow"/></svg></a>
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
  <title>Zoo Holding Areas: Design, Safety &amp; Best Practices</title>
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
  <meta property="og:title" content="Zoo Holding Areas: Design, Safety &amp; Best Practices for Modern Animal Enclosures" />
  <meta property="og:description" content="${DESC}" />
  <meta property="og:image" content="${IMG}" />
  <meta property="og:url" content="${URL}" />
  <meta property="article:published_time" content="${DATE}" />
  <meta property="article:modified_time" content="${DATE}" />
  <meta property="article:author" content="TCB Metal Works" />
  <meta property="article:section" content="Zoo Enclosure Equipment" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Zoo Holding Areas: Design, Safety &amp; Best Practices" />
  <meta name="twitter:description" content="What zoo holding areas are, how they support animal welfare and keeper safety, and why they're custom fabricated." />
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
    "headline": "Zoo Holding Areas: Design, Safety & Best Practices for Modern Animal Enclosures",
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
      { "@type": "ListItem", "position": 3, "name": "Zoo Holding Areas", "item": "${URL}" }
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
await writeFile(path.join(ROOT, 'zoo-holding-areas.html'), out, 'utf8');
console.log(`wrote zoo-holding-areas.html | ${words} words | ${minutes} min read | ${(out.length/1024).toFixed(0)} KB`);
