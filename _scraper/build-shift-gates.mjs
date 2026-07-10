import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('tcb-website');
const src = await readFile(path.join(ROOT, 'what-is-zoo-caging.html'), 'utf8');

// Reuse the exact shared chrome so header/sprite/footer can never drift
const chrome = src.slice(src.indexOf('<body>'), src.indexOf('<main id="main">'));
const tail   = src.slice(src.indexOf('<footer class="footer">'));

const URL  = 'https://tcbmetalworks.com/shift-gates-for-zoo-enclosures/';
const IMG  = 'https://tcbmetalworks.com/assets/img/shift-gates-og.jpg';
const DESC = "Learn what shift gates are, how they improve keeper safety and animal welfare, and why custom-fabricated gates are essential for modern zoo enclosures.";
const KEYWORDS = "shift gates for zoo enclosures, zoo shift gates, shift gate, animal transfer gate, sliding animal gate, zoo enclosure gates, protected contact, zoo gate fabrication, custom shift gates";
const H1   = "Shift Gates for Zoo Enclosures: Design, Safety &amp; Fabrication Guide";
const DATE = "2026-07-09";

const FAQ = [
  ["What is a shift gate in a zoo?", "A shift gate is a secure gate used to move animals safely between different areas of a zoo enclosure, such as exhibits, holding areas, veterinary spaces, or night houses. It allows keepers to control animal movement while maintaining secure separation between staff and animals."],
  ["Why are shift gates important?", "Shift gates improve both safety and efficiency by allowing animals to be transferred without direct contact with keepers. They support routine husbandry, habitat maintenance, veterinary care, breeding management, and emergency procedures while reducing the risk of accidental escapes."],
  ["What materials are used to fabricate shift gates?", "Most professionally fabricated shift gates use structural steel as the primary framework, along with stainless steel hardware, reinforced welded mesh where appropriate, heavy-duty locking systems, and corrosion-resistant protective coatings to ensure long-term durability."],
  ["Are all shift gates the same?", "No. Every shift gate is designed around the specific needs of the enclosure and the species it serves. Factors such as animal size, behaviour, enclosure layout, movement patterns, and management practices all influence the final design."],
  ["Can shift gates be customized?", "Yes. Most zoo shift gates are custom fabricated to suit the unique requirements of each facility. Customization may include gate dimensions, sliding or swing operation, structural reinforcement, mesh configuration, locking mechanisms, opening direction, integration with holding areas, and compatibility with keeper doors and squeeze cages."],
  ["How long do zoo shift gates last?", "The lifespan of a shift gate depends on fabrication quality, material selection, maintenance practices, and operating conditions. Professionally fabricated steel shift gates that receive routine maintenance can remain in service for decades while maintaining reliable performance."],
];

const li = a => a.map(x => `            <li>${x}</li>`).join('\n');

const MAIN = `  <main id="main">
    <!-- HERO BANNER -->
    <section class="pagehero">
      <div class="pagehero__grain"></div>
      <div class="container pagehero__inner" data-reveal>
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="articles.html">Articles</a><span>/</span>Shift Gates</nav>
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
              <li><a href="#what-is-a-shift-gate">What Is a Shift Gate?</a></li>
              <li><a href="#why-zoos-use">Why Modern Zoos Use Them</a></li>
              <li><a href="#protected-contact">Protected Contact</a></li>
              <li><a href="#how-they-work">How Shift Gates Work</a></li>
              <li><a href="#materials">Materials &amp; Engineering</a></li>
              <li><a href="#choosing">Choosing a Fabrication Partner</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ol>
          </nav>
        </aside>

        <article class="prose" data-reveal>

          <figure class="article-figure">
            <img src="assets/img/shift-gates.webp"
                 alt="A run of galvanized steel framed welded-mesh gate panels on a base track, fabricated by TCB Metal Works for a zoo enclosure — the kind of movable barriers used as shift gates between spaces"
                 width="900" height="472" fetchpriority="high" decoding="async" />
            <figcaption>Framed galvanized mesh panels on a base track in a TCB Metal Works enclosure build — the movable, precision-aligned barriers that let keepers transfer animals between spaces without direct contact.</figcaption>
          </figure>

          <div class="callout">
            <h2>Quick Answer</h2>
            <p>A shift gate is a secure, movable barrier used in zoo enclosures to safely transfer animals between different spaces, such as exhibits, holding areas, veterinary facilities, and night houses. Rather than allowing direct interaction between keepers and animals, shift gates support protected contact management, enabling animals to be moved in a controlled manner while maintaining secure separation from staff. Professionally engineered shift gates improve operational efficiency, enhance animal welfare, and reduce risks during daily husbandry, maintenance, and veterinary procedures.</p>
          </div>

          <h2 id="introduction">Introduction</h2>
          <p>Modern zoo enclosures are carefully planned systems designed to balance animal welfare, keeper safety, veterinary care, and efficient daily operations. While visitors often notice the habitats themselves, much of the infrastructure that keeps a zoo functioning safely remains behind the scenes.</p>
          <p>One of the most important of those components is the shift gate. It lets keepers move an animal between areas of an enclosure without ever making direct contact — sending it into a holding area so an exhibit can be cleaned, or guiding it toward a veterinary space for a check-up. Handled well, those movements become predictable, controlled, and far safer for the animal and the people working around it.</p>
          <p>As zoological facilities increasingly adopt protected contact management, shift gates have become a fundamental part of <a href="what-is-zoo-caging.html">modern zoo caging design</a>. They work alongside <a href="keeper-doors-for-zoo-enclosures.html">keeper doors</a>, holding areas, transfer corridors, and <a href="zoo-squeeze-cage.html">squeeze cages</a> to create secure movement pathways that reduce stress on animals while supporting efficient husbandry routines. On the University of Miami research pens we fabricated, every stainless-steel gate was built with its own hinges and latch hardware — sized for constant daily use and quick wash-down rather than pulled from a catalogue.</p>
          <p>Understanding how shift gates function — and why they are custom engineered for each facility — helps illustrate their vital role in modern zoo operations.</p>

          <h2 id="what-is-a-shift-gate">What Is a Shift Gate?</h2>
          <p>A shift gate is a specialized gate installed within a zoo enclosure that controls the movement of animals between designated spaces while maintaining secure containment.</p>
          <p>Unlike perimeter fencing or public viewing barriers, shift gates are operational tools used by trained zoo professionals during routine husbandry and veterinary activities. They allow animals to be safely transferred between interconnected areas without exposing keepers to unnecessary risk.</p>
          <p>Depending on the enclosure layout, shift gates may connect:</p>
          <ul>
${li(['Outdoor exhibits','Indoor holding areas','Night houses','Transfer corridors','Veterinary treatment spaces','Isolation areas','Off-exhibit management zones'])}
          </ul>
          <p>Rather than functioning independently, shift gates form part of a coordinated <a href="zoo-enclosures.html">enclosure management system</a>. They are designed to work seamlessly with keeper doors, holding pens, raceways, and protected contact barriers, allowing animals to move through the facility in a controlled and predictable manner.</p>
          <p>The design of each shift gate depends on several factors, including the species being housed, the enclosure configuration, daily husbandry routines, and veterinary requirements. A gate intended for rhinoceroses or elephants, for example, differs substantially from one designed for primates or large carnivores because each species presents unique behavioural and physical challenges.</p>

          <h2 id="why-zoos-use">Why Modern Zoos Use Shift Gates</h2>
          <p>Daily animal care involves far more than feeding and cleaning exhibits. Zoo professionals regularly move animals between different areas for health checks, habitat maintenance, breeding management, enrichment programs, and emergency response.</p>
          <p>Attempting to perform these activities without controlled transfer systems would increase stress for animals and create unnecessary safety risks for staff.</p>
          <p>Shift gates provide a practical solution by allowing keepers to separate animals from work areas before entering an enclosure. Once an animal has been guided into a designated holding space, staff can safely access the exhibit to carry out maintenance, place enrichment items, inspect structures, or prepare the habitat before the animal is returned.</p>
          <p>Beyond improving safety, this structured movement process supports better animal welfare. Animals become familiar with routine transfers through consistent husbandry practices and positive reinforcement, making movements calmer and more predictable over time. Research and modern zoo management guidelines consistently recognize that well-designed transfer systems contribute to safer operations while reducing unnecessary stress during routine handling.</p>

          <h2 id="protected-contact">Protected Contact: The Foundation of Safe Animal Transfers</h2>
          <p>The widespread adoption of protected contact management has transformed how many zoological facilities care for potentially dangerous animals. Rather than relying on direct interaction, protected contact keeps a physical barrier between animals and keepers at all times. Shift gates are one of the key components that make this management philosophy possible.</p>
          <p>During a routine procedure, keepers first use the shift gate to guide an animal into a secure holding area. After confirming that the gate is fully closed and locked, staff can safely enter the adjacent exhibit through designated keeper doors to clean, inspect, or modify the enclosure.</p>
          <p>This approach offers several important advantages:</p>
          <ul>
${li(['Improves keeper safety by maintaining physical separation.','Reduces opportunities for accidental escapes.','Supports efficient enclosure maintenance.','Enables safer veterinary examinations and husbandry procedures.','Encourages predictable daily routines that reduce stress for animals.'])}
          </ul>
          <p>Rather than serving as a simple barrier, a shift gate functions as part of a carefully engineered workflow that helps modern zoological facilities operate safely and efficiently.</p>

          <h2 id="how-they-work">How Shift Gates Work &amp; the Engineering Behind Them</h2>
          <p>A shift gate is much more than a movable barrier. It is a carefully engineered component of an animal management system designed to control movement safely, efficiently, and predictably.</p>
          <p>During daily operations, keepers use shift gates to guide animals between designated areas without entering the same space. The process relies on established husbandry routines, positive reinforcement, and enclosure design rather than force, allowing animals to move calmly through familiar pathways.</p>
          <p>For example, before cleaning a habitat, keepers may encourage an animal to enter an adjacent holding area using routine feeding or behavioural cues. Once the animal has moved into the designated space, the shift gate is securely closed and locked, allowing staff to safely enter the exhibit through a keeper door. After maintenance or veterinary procedures are complete, the animal can be guided back into the exhibit using the same controlled process.</p>
          <p>Because these movements occur regularly throughout the day, every component of a shift gate must operate smoothly, consistently, and reliably.</p>

          <h3>Structural Frame</h3>
          <p>The structural frame provides the strength and stability of the entire gate system. Typically fabricated from heavy-duty structural steel, the frame is designed to withstand repeated daily operation while resisting the forces generated by powerful animals. Proper engineering ensures the gate remains aligned over years of use, preventing operational issues such as binding, sagging, or excessive wear.</p>
          <p>A rigid frame also provides the foundation for integrating locking systems, guide tracks, hinges, and safety features without compromising structural integrity.</p>

          <h3>Gate Panel</h3>
          <p>The gate panel forms the primary containment barrier between connected enclosure spaces. Depending on the species and enclosure requirements, the panel may consist of:</p>
          <ul>
${li(['Solid steel construction','Heavy-duty welded mesh','Steel framing with reinforced mesh infill','Combination designs that balance visibility and security'])}
          </ul>
          <p>The appropriate configuration depends on factors such as animal size, climbing ability, bite force, visibility requirements, and enclosure management practices. Professionally fabricated gate panels are engineered to resist deformation while maintaining smooth operation under demanding conditions.</p>

          <h3>Guide Systems and Hinges</h3>
          <p>Shift gates may operate using different movement mechanisms depending on the enclosure design. Common configurations include sliding gates, swing gates, vertical lift gates, and guillotine-style gates.</p>
          <p>Each design offers advantages depending on the available space, species, and operational workflow. Sliding gates are commonly used where space is limited and controlled movement is required. Swing gates provide a straightforward solution for many holding areas, while vertical lift systems can be beneficial in locations where floor space must remain unobstructed. Regardless of the operating method, precision alignment is essential to ensure reliable performance and minimize maintenance.</p>

          <h3>High-Security Locking Mechanisms</h3>
          <p>Every shift gate must remain securely closed whenever an animal is being contained. For this reason, professionally engineered systems incorporate robust locking mechanisms designed to prevent accidental opening while allowing authorized staff to operate them efficiently. Depending on the enclosure's safety requirements, locking systems may include:</p>
          <ul>
${li(['Mechanical latches','Heavy-duty deadbolts','Multi-point locking mechanisms','Padlock-compatible hardware','Dual-lock safety arrangements','Sequential locking procedures'])}
          </ul>
          <p>Many zoological facilities use redundant locking practices, requiring visual confirmation and multiple locking points before personnel enter adjacent areas. These additional safeguards reduce the risk of human error and strengthen overall enclosure security.</p>

          <h3>Observation Panels and Visibility</h3>
          <p>Visibility is an important element of safe animal management. Before opening or closing a shift gate, keepers need to confirm an animal's location and behaviour. For this reason, many systems incorporate reinforced mesh sections or observation openings that provide clear sightlines without compromising containment.</p>
          <p>Good visibility allows staff to verify that animals have completely entered the holding area, monitor behaviour during transfers, confirm that gates are fully closed and locked, and coordinate movements with other members of the animal care team. Maintaining visual awareness throughout the transfer process improves both safety and operational efficiency.</p>

          <h3>Safety Features That Reduce Risk</h3>
          <p>Modern shift gates are designed around the principle of layered safety. Rather than relying on a single component, multiple engineering features work together to create a secure transfer system that protects both animals and staff. Common safety features include:</p>
          <ul>
${li(['Reinforced structural steel construction','Precision-fabricated guide systems','Heavy-duty locking mechanisms','Tamper-resistant hardware','Corrosion-resistant finishes','Smooth operating mechanisms that reduce sudden movement','Clear observation points','Integration with holding areas and keeper doors'])}
          </ul>
          <p>When combined with established operating procedures and trained personnel, these features help minimize the likelihood of accidents while supporting efficient daily husbandry.</p>

          <h3>Supporting Low-Stress Animal Management</h3>
          <p>One of the greatest advantages of well-designed shift gates is their contribution to low-stress animal management. Modern zoos increasingly rely on positive reinforcement training and predictable routines to encourage voluntary movement between enclosure spaces. Rather than forcing animals through transfer systems, keepers gradually condition them to respond to familiar cues, making daily movements calmer and more efficient.</p>
          <p>A properly engineered shift gate supports this approach by operating quietly and consistently, reducing unnecessary noise, sudden movements, or mechanical resistance that could startle animals. This combination of thoughtful enclosure design, professional animal management, and precision fabrication contributes to better welfare outcomes while creating a safer working environment for zoo staff.</p>

          <h2 id="materials">Materials, Engineering &amp; Custom Fabrication</h2>
          <p>Every zoo enclosure presents a unique set of operational challenges, and no single shift gate design can accommodate every species or facility. Factors such as animal size, strength, behaviour, enclosure layout, and daily husbandry routines all influence how a shift gate should be engineered. For this reason, professionally fabricated shift gates are almost always custom designed rather than selected from standard industrial gate systems.</p>
          <p>A well-engineered shift gate must provide reliable animal containment while operating smoothly over thousands of cycles. At the same time, it must integrate seamlessly with keeper doors, holding areas, veterinary spaces, and transfer corridors to support the overall management of the enclosure. Achieving this balance requires careful material selection, precision fabrication, and an understanding of both structural engineering and zoo operations.</p>

          <h3>Structural Steel</h3>
          <p>Structural steel is the primary material used in the fabrication of most zoo shift gates. Its excellent strength-to-weight ratio allows engineers to fabricate rigid frames capable of resisting bending, twisting, and impact forces generated by large animals. Structural steel also provides the flexibility needed to manufacture custom gate sizes, reinforced frames, and specialized mounting systems for different enclosure configurations.</p>
          <p>When properly fabricated, structural steel maintains dimensional stability over years of continuous operation, supporting smooth gate movement and consistent alignment.</p>

          <h3>Stainless Steel Components</h3>
          <p>Certain components benefit from the use of <a href="services.html#stainless">stainless steel</a> because of its superior resistance to corrosion. Depending on the application, stainless steel may be used for hinges, fasteners, locking hardware, guide rollers, bearings, and other high-wear moving components. Using stainless steel in critical areas helps improve reliability, particularly in humid environments or facilities where equipment is cleaned and disinfected frequently.</p>

          <h3>Heavy-Duty Welded Mesh</h3>
          <p>Many shift gates incorporate reinforced welded mesh rather than solid steel panels. Mesh construction offers several operational advantages, including improved airflow, increased visibility, and continuous observation of animal behaviour during transfers.</p>
          <p>The mesh specification depends on species size, bite strength, climbing ability, reach distance, security requirements, and visibility needs. Properly engineered mesh systems are welded into reinforced steel frames to maintain structural strength while resisting deformation under repeated loading.</p>

          <h3>Protective Coatings</h3>
          <p>Environmental exposure is one of the greatest threats to fabricated steel equipment. Rain, humidity, cleaning agents, animal waste, and ultraviolet exposure can gradually degrade unprotected steel surfaces. To improve longevity, professional fabrication commonly incorporates corrosion-resistant finishes such as:</p>
          <ul>
${li(['Hot-dip galvanizing','Powder coating','Zinc-rich primers','Industrial protective paint systems'])}
          </ul>
          <p>The appropriate finish depends on the enclosure environment, expected maintenance schedule, and facility requirements. Proper corrosion protection not only extends service life but also helps maintain smooth operation of moving components over time.</p>

          <h3>Engineering Considerations</h3>
          <p>Successful shift gate design involves much more than selecting strong materials. Every gate must be engineered to operate safely, efficiently, and consistently throughout years of daily use.</p>
          <p><strong>Structural stability.</strong> A shift gate must remain stable under both operational loads and the forces generated by animals interacting with the enclosure. Engineers evaluate frame geometry, reinforcement locations, weld quality, and support structures to ensure the gate maintains its alignment during repeated operation, reducing wear on guide systems and locking mechanisms.</p>
          <p><strong>Smooth and reliable operation.</strong> Animals respond best to equipment that behaves consistently. A gate that sticks, jerks, or requires excessive force to operate can interrupt routine husbandry procedures and create unnecessary stress during transfers. Precision fabrication helps ensure that guide tracks, hinges, rollers, and moving components operate smoothly throughout the equipment's service life.</p>
          <p><strong>Integration with enclosure infrastructure.</strong> Shift gates are most effective when designed as part of a complete enclosure system, engineered to integrate with keeper doors, holding areas, transfer raceways, veterinary restraint systems, night houses, and protected contact barriers. This coordinated approach allows animals to move through different sections of the enclosure in a controlled manner while enabling zoo professionals to safely perform routine tasks.</p>

          <h3>Why Every Shift Gate Is Custom Designed</h3>
          <p>No two zoological facilities operate exactly the same way. Even enclosures housing the same species often differ in size, layout, operational procedures, and veterinary requirements. As a result, custom fabrication has become the preferred approach for modern zoo enclosure systems. Design variables commonly include:</p>
          <ul>
${li(['Gate dimensions','Sliding or swing operation','Structural reinforcement','Mesh configuration','Locking mechanisms','Opening direction','Integration with adjacent structures','Species-specific safety requirements'])}
          </ul>
          <p>By tailoring every shift gate to the needs of the facility, engineers create systems that improve operational efficiency while supporting long-term safety and animal welfare.</p>

          <h2 id="choosing">Choosing the Right Shift Gate Fabrication Partner</h2>
          <p>A shift gate is one of the most frequently operated components within a zoo enclosure. Because it directly affects animal movement, keeper safety, and day-to-day operations, selecting the right fabrication partner is just as important as choosing the right gate design.</p>
          <p>Unlike conventional industrial gates, zoo shift gates must be engineered for specific species, enclosure layouts, and operational workflows. Every detail — from structural strength to locking mechanisms — plays a role in ensuring safe and reliable performance over many years.</p>

          <h3>Custom Engineering Capabilities</h3>
          <p>Every zoological facility has different requirements. A shift gate for a rhinoceros habitat will differ significantly from one designed for primates, elephants, bears, or large cats. Differences in animal behaviour, enclosure layout, veterinary access, and daily husbandry routines all influence the final design. A capable fabrication partner develops custom solutions rather than relying on standardized gate systems that may not suit the facility's operational needs.</p>

          <h3>Quality of Materials and Fabrication</h3>
          <p>Long-term performance depends on more than strong materials. Precision cutting, accurate welding, proper alignment, and careful assembly all contribute to a gate that operates smoothly throughout its service life. High-quality fabrication should include:</p>
          <ul>
${li(['Precision manufacturing','Heavy-duty structural construction','Reliable locking systems','Smooth-operating guide mechanisms','Corrosion-resistant finishes','Comprehensive quality inspections'])}
          </ul>
          <p>Attention to these details helps minimize maintenance while improving overall enclosure safety.</p>

          <h3>Integration With Existing Enclosure Systems</h3>
          <p>A shift gate should never be designed in isolation. Instead, it should integrate seamlessly with keeper doors, holding areas, night houses, veterinary facilities, transfer corridors, squeeze cages, and protected contact barriers. Designing these components as a complete system creates safer workflows, reduces unnecessary animal movement, and improves operational efficiency throughout the facility.</p>

          <h3>Long-Term Reliability</h3>
          <p>Zoo infrastructure is built to serve for many years under demanding conditions. Daily operation, outdoor weather, cleaning chemicals, moisture, and repeated interaction with powerful animals all place significant demands on fabricated equipment. Choosing durable materials, corrosion-resistant finishes, and precision-engineered components helps extend service life while reducing maintenance costs and operational downtime.</p>

          <h3>Why Custom Fabrication Is the Best Investment</h3>
          <p>Although standardized industrial gates may appear to offer a lower initial cost, they are rarely designed to meet the specialized requirements of zoological facilities. Custom fabrication allows every aspect of the shift gate to be optimized for the enclosure, the species, and the operational workflow. The advantages include species-specific engineering, improved keeper safety, better integration with enclosure infrastructure, smoother daily operation, enhanced animal welfare, increased durability, easier maintenance, and flexibility for future enclosure modifications.</p>
          <p>By investing in custom-engineered shift gates, zoological facilities gain equipment that supports safe and efficient operations throughout the life of the enclosure.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
${FAQ.map(([q, a]) => `          <h3>${q}</h3>\n          <p>${a}</p>`).join('\n')}

          <h2 id="final-thoughts">Final Thoughts</h2>
          <p>Shift gates are a vital part of modern zoo enclosure systems. They provide a safe and controlled method for moving animals between different areas while supporting protected contact management, routine husbandry, veterinary care, and enclosure maintenance.</p>
          <p>Their effectiveness depends on more than strong materials alone. Successful shift gate systems combine thoughtful engineering, precision fabrication, durable construction, and species-specific design to create reliable infrastructure that serves both animals and zoo professionals.</p>
          <p>As zoological facilities continue to advance standards for conservation, safety, and animal welfare, custom-fabricated shift gates will remain an essential investment in creating secure and efficient environments for daily operations.</p>

          <h2 id="references">References</h2>
          <p>This guide is informed by peer-reviewed research, zoological management practices, and engineering principles, including:</p>
          <ul class="refs">
            <li>International research on protected contact management and controlled animal movement.</li>
            <li>Zoo enclosure planning and husbandry publications.</li>
            <li>Studies on enclosure design, animal welfare, and transfer systems.</li>
            <li>Structural steel fabrication and precision manufacturing references applicable to custom enclosure infrastructure.</li>
          </ul>

        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta">
      <div class="cta__bg"><img src="assets/img/cta-bg.webp" alt="" aria-hidden="true" loading="lazy" /></div>
      <div class="container cta__inner" data-reveal>
        <span class="eyebrow" style="justify-content:center">Custom Shift Gate Fabrication</span>
        <h2 style="margin-top:1rem">Engineered for Safe, Controlled Transfers</h2>
        <p>TCB Metal Works designs and fabricates custom shift gates for zoo enclosures — engineered for safety, durability, and seamless integration with keeper doors, squeeze cages, holding areas, and transfer systems.</p>
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
            <div class="card__media"><span class="card__tag">Zoo Enclosure Equipment</span><img class="obj-right" src="assets/img/keeper-doors.webp" alt="Solid steel keeper door with heavy-duty hinges set into galvanized framed welded mesh, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1004" height="527" /></div>
            <div class="card__body">
              <h3>Keeper Doors for Zoo Enclosures</h3>
              <p>Safe access design, locking systems, protected contact, and species-specific requirements.</p>
              <a class="card__link" href="keeper-doors-for-zoo-enclosures.html">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Zoo Veterinary Equipment</span><img src="assets/img/squeeze-cage.webp" alt="Stainless steel animal holding pens with hinged gates, latches and a sealed hygienic floor, fabricated by TCB Metal Works for the University of Miami research facility" loading="lazy" decoding="async" width="1024" height="538" /></div>
            <div class="card__body">
              <h3>What Is a Zoo Squeeze Cage?</h3>
              <p>How squeeze cages support safe veterinary care — design, safety features, and custom fabrication.</p>
              <a class="card__link" href="zoo-squeeze-cage.html">Read article <svg><use href="#i-arrow"/></svg></a>
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
  <title>Shift Gates for Zoo Enclosures: Design, Safety &amp; Fabrication</title>
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
  <meta property="og:title" content="Shift Gates for Zoo Enclosures: Design, Safety &amp; Fabrication Guide" />
  <meta property="og:description" content="${DESC}" />
  <meta property="og:image" content="${IMG}" />
  <meta property="og:url" content="${URL}" />
  <meta property="article:published_time" content="${DATE}" />
  <meta property="article:modified_time" content="${DATE}" />
  <meta property="article:author" content="TCB Metal Works" />
  <meta property="article:section" content="Zoo Enclosure Equipment" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Shift Gates for Zoo Enclosures: Design, Safety &amp; Fabrication" />
  <meta name="twitter:description" content="What shift gates are, how they support protected contact and low-stress transfers, and why they're custom fabricated." />
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
    "headline": "Shift Gates for Zoo Enclosures: Design, Safety & Fabrication Guide",
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
      { "@type": "ListItem", "position": 3, "name": "Shift Gates for Zoo Enclosures", "item": "${URL}" }
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
await writeFile(path.join(ROOT, 'shift-gates-for-zoo-enclosures.html'), out, 'utf8');
console.log(`wrote shift-gates-for-zoo-enclosures.html | ${words} words | ${minutes} min read | ${(out.length/1024).toFixed(0)} KB`);
