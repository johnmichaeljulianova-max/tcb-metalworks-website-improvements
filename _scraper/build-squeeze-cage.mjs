import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('tcb-website');
const src = await readFile(path.join(ROOT, 'what-is-zoo-caging.html'), 'utf8');

// Reuse the exact shared chrome so it can never drift from the sibling article
const bodyStart = src.indexOf('<body>');
const mainStart = src.indexOf('<main id="main">');
const footStart = src.indexOf('<footer class="footer">');
if (bodyStart < 0 || mainStart < 0 || footStart < 0) throw new Error('markers not found');
const chrome = src.slice(bodyStart, mainStart);   // <body> + skip link + sprite + header
const tail   = src.slice(footStart);              // footer + scripts + </html>

const URL = 'https://tcbmetalworks.com/zoo-squeeze-cage/';
const IMG = 'https://tcbmetalworks.com/assets/img/squeeze-cage-og.jpg';
const DESC = "Learn what a zoo squeeze cage is, how it works, why zoos use it for veterinary care, and the design features that improve animal welfare and keeper safety.";
const KEYWORDS = "zoo squeeze cage, squeeze cage, animal squeeze cage, zoo animal restraint system, veterinary squeeze cage, wildlife squeeze cage, zoo veterinary equipment, custom squeeze cage, zoo enclosure equipment";
const H1 = "What Is a Zoo Squeeze Cage? Design, Safety Features &amp; Veterinary Applications";
const DATE = "2026-07-09";

const FAQ = [
  ["What is a zoo squeeze cage?", "A zoo squeeze cage is a specialized animal restraint system used to safely limit an animal's movement during veterinary examinations, preventive healthcare, medical treatments, and routine husbandry procedures. It is designed to protect both animals and zoo professionals while minimizing stress through controlled restraint."],
  ["Are zoo squeeze cages humane?", "Yes — when properly designed and operated by trained professionals, zoo squeeze cages are considered a humane method of temporary restraint. Modern facilities use low-stress handling techniques, positive conditioning, and species-specific designs to minimize anxiety while allowing essential veterinary care to be performed safely."],
  ["Why don't zoos simply sedate animals?", "Chemical immobilization plays an important role in veterinary medicine but is not always the safest or most practical option for routine procedures. Whenever appropriate, a properly designed squeeze cage allows veterinarians to perform examinations and treatments while reducing the frequency of anesthesia and its associated risks."],
  ["What animals use squeeze cages?", "Squeeze cages can be custom designed for a wide variety of species, including giraffes, hoofstock, large carnivores, bears, primates, exotic mammals, and wildlife rehabilitation animals. Each restraint system is engineered around the physical characteristics and handling requirements of the intended species."],
  ["What materials are used to fabricate zoo squeeze cages?", "Professional zoo squeeze cages are commonly fabricated using structural steel, stainless steel components, heavy-duty hardware, corrosion-resistant coatings, and precision-engineered restraint mechanisms selected to meet the operational requirements of the facility."],
  ["Can a squeeze cage be customized?", "Yes. Most zoo squeeze cages are custom fabricated because every species and facility has different operational requirements. Customization may include cage dimensions, restraint mechanisms, veterinary access panels, locking systems, integration with holding areas, transfer gate compatibility, material selection, and protective finishes."],
  ["How long does a zoo squeeze cage last?", "The lifespan of a squeeze cage depends on material quality, fabrication standards, environmental conditions, maintenance practices, and frequency of use. Professionally fabricated steel restraint systems that receive regular maintenance can remain in service for decades."],
];

const li = a => a.map(x => `            <li>${x}</li>`).join('\n');

const MAIN = `  <main id="main">
    <!-- HERO BANNER -->
    <section class="pagehero">
      <div class="pagehero__grain"></div>
      <div class="container pagehero__inner" data-reveal>
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="articles.html">Articles</a><span>/</span>What Is a Zoo Squeeze Cage?</nav>
        <span class="eyebrow" style="margin-top:1rem">Zoo Veterinary Equipment</span>
        <h1 style="margin-top:1rem">${H1}</h1>
        <div class="article-meta">
          <span><svg><use href="#i-user"/></svg>By <strong>TCB Metal Works</strong></span>
          <span><svg><use href="#i-clock"/></svg>14 min read</span>
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
              <li><a href="#what-is-a-squeeze-cage">What Is a Zoo Squeeze Cage?</a></li>
              <li><a href="#why-zoos-use">Why Zoos Use Squeeze Cages</a></li>
              <li><a href="#how-they-work">How Squeeze Cages Work</a></li>
              <li><a href="#components">Key Components</a></li>
              <li><a href="#welfare-safety">Welfare &amp; Keeper Safety</a></li>
              <li><a href="#materials">Materials &amp; Fabrication</a></li>
              <li><a href="#choosing">Choosing the Right Design</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ol>
          </nav>
        </aside>

        <article class="prose" data-reveal>

          <figure class="article-figure">
            <img src="assets/img/squeeze-cage.webp"
                 alt="Zoo enclosure design render showing steel-framed holding structures, service corridors and keeper access areas where squeeze cages are integrated"
                 width="1200" height="580" fetchpriority="high" decoding="async" />
            <figcaption>A squeeze cage is never a standalone device — it is integrated with holding areas, transfer corridors and keeper access points like the steel-framed structures shown here.</figcaption>
          </figure>

          <div class="callout">
            <h2>Quick Answer</h2>
            <p>A zoo squeeze cage is a specialized animal restraint system that safely and temporarily limits an animal's movement during veterinary examinations, medical treatments, health monitoring, and routine husbandry procedures. When properly designed and used by trained professionals, squeeze cages help protect both animals and zoo staff while minimizing stress and reducing the need for chemical immobilization in many situations.</p>
          </div>

          <h2 id="introduction">Introduction</h2>
          <p>When people hear the term "squeeze cage," they often imagine a device designed solely to restrain an animal. In reality, modern zoo squeeze cages serve a much more important purpose: they help veterinarians and animal care professionals perform essential medical procedures while minimizing stress for the animal and reducing risks to everyone involved.</p>
          <p>Routine health examinations, vaccinations, blood collection, hoof care, ultrasound imaging, and other veterinary procedures are critical to maintaining the health of animals in zoological facilities. Performing these tasks safely, however, can be extremely challenging when working with large, powerful, or potentially dangerous species.</p>
          <p>Rather than relying on frequent sedation or direct physical restraint, many zoos use specially engineered squeeze cages that allow trained staff to carry out these procedures in a controlled and humane manner. Research and decades of practical experience have shown that, when animals are gradually conditioned to the equipment and handlers follow established protocols, squeeze cages can become an effective part of routine husbandry and veterinary care.</p>
          <p>This guide explains what a zoo squeeze cage is, how it works, the design features that contribute to safety and animal welfare, and why custom fabrication plays a vital role in creating reliable restraint systems for modern zoological facilities.</p>

          <h2 id="what-is-a-squeeze-cage">What Is a Zoo Squeeze Cage?</h2>
          <p>A zoo squeeze cage is a purpose-built restraint system that temporarily and humanely limits an animal's movement so that veterinarians and trained animal care professionals can safely perform medical examinations, diagnostic procedures, preventive healthcare, and routine husbandry.</p>
          <p>Unlike a permanent enclosure, a squeeze cage is not intended for long-term housing. Instead, it functions as a specialized piece of veterinary and animal management equipment that becomes part of the enclosure's overall handling system.</p>
          <p>Most squeeze cages are integrated with other components of a <a href="what-is-zoo-caging.html">modern zoo caging system</a>, including:</p>
          <ul>
${li(['Holding areas','<a href="what-is-zoo-caging.html#components">Shift gates</a>','Transfer corridors','<a href="what-is-zoo-caging.html#components">Keeper doors</a>','Protected contact systems'])}
          </ul>
          <p>That integration is what lets an animal move calmly from its primary habitat into the restraint area without a struggle — the squeeze cage works because the corridors, gates, and holding spaces around it work. The stainless-steel handling pens we fabricated for the University of Miami are a case in point: interconnected spaces, each with its own gate, laid out so animals could be moved and separated for care without unnecessary handling.</p>
          <p>Depending on the species and the procedure being performed, a squeeze cage may be used for:</p>
          <ul>
${li(['Routine physical examinations','Blood sample collection','Vaccinations','Hoof trimming','Ultrasound examinations','X-ray imaging','Minor medical treatments','Identification procedures','Weight monitoring'])}
          </ul>
          <p>One of the earliest documented examples of successful squeeze cage use comes from Woodland Park Zoo, where a giraffe squeeze cage was used dozens of times over a four-year period without serious injuries to animals or personnel. The study emphasized that success depended not only on the equipment itself but also on animal conditioning, careful observation of behavior, and well-trained staff.</p>
          <p>This highlights an important principle that still guides modern zoo management: effective restraint systems rely on both thoughtful engineering and proper operational practices.</p>

          <h2 id="why-zoos-use">Why Zoos Use Squeeze Cages</h2>
          <p>Preventive healthcare is one of the foundations of modern zoo animal management. Regular examinations allow veterinarians to detect health concerns early, monitor ongoing conditions, and provide treatment before minor issues become serious problems.</p>
          <p>Without an appropriate restraint system, many procedures would require full chemical immobilization, which carries its own risks and may not always be the most practical option. A well-designed squeeze cage helps reduce these challenges by providing a controlled environment where trained professionals can safely perform routine procedures while minimizing unnecessary stress.</p>
          <p>The benefits extend beyond veterinary medicine. Squeeze cages also contribute to:</p>
          <ul>
${li(['Improved keeper safety during close-contact procedures','More efficient routine health monitoring','Reduced reliance on sedation when appropriate','Better long-term management of individual animals','More consistent preventive healthcare programs'])}
          </ul>
          <p>Importantly, the effectiveness of a squeeze cage depends on how it is incorporated into the animal's daily management. Research involving giraffes demonstrated that gradual conditioning to the restraint system was one of the key factors behind successful, low-stress handling. Rather than forcing animals into unfamiliar equipment, keepers developed positive routines that allowed the giraffes to become accustomed to the process over time.</p>
          <p>This reflects a broader shift in modern zoological care: restraint equipment should support animal welfare, not work against it.</p>

          <h2 id="how-they-work">How Zoo Squeeze Cages Work</h2>
          <p>A zoo squeeze cage is designed to provide temporary, controlled restraint that allows veterinarians and animal care professionals to perform medical procedures safely while minimizing stress for the animal.</p>
          <p>Unlike permanent enclosure structures, squeeze cages are used only when necessary and for the shortest practical duration. Their purpose is not to confine animals but to create a predictable and secure environment during examinations, treatments, and routine husbandry procedures.</p>
          <p>Modern squeeze cages run on a simple principle — <strong>limit movement only as much as necessary</strong> while keeping the animal comfortable and safe. In a well-designed enclosure system, animals are guided into the cage through holding areas and transfer corridors using familiar husbandry routines, which keeps excitement down and lets staff work calmly.</p>
          <p>Because every species behaves differently, the design and operation of a squeeze cage must always reflect the physical characteristics, temperament, and handling requirements of the animals it is intended to serve.</p>

          <h2 id="components">Key Components of a Modern Squeeze Cage</h2>
          <p>Although squeeze cage designs vary between facilities and species, most systems share several essential components that work together to provide safe and controlled restraint.</p>

          <h3>Structural Frame</h3>
          <p>The structural frame forms the foundation of the squeeze cage. Constructed from heavy-duty steel, the frame must withstand repeated use while resisting the significant forces generated by large and powerful animals. Precision engineering ensures the structure remains stable throughout veterinary procedures and continues to perform reliably over many years.</p>
          <p>A properly fabricated frame also provides the flexibility to accommodate additional features such as access doors, adjustable restraint panels, observation openings, and integrated locking systems.</p>

          <h3>Adjustable Restraint Panels</h3>
          <p>The restraint mechanism is the defining feature of a squeeze cage. Instead of completely immobilizing the animal, adjustable panels gradually reduce the available space, limiting excessive movement while allowing the animal to remain standing in a natural position whenever appropriate.</p>
          <p>The movement of these panels must be smooth, controlled, and carefully engineered to avoid sudden pressure or unnecessary discomfort. Proper adjustment allows veterinarians to safely access different parts of the body for examinations or treatment without exposing staff to unnecessary risk.</p>

          <h3>Access Doors and Service Openings</h3>
          <p>Veterinary procedures often require access to specific areas of an animal's body. For this reason, squeeze cages commonly include strategically positioned service doors or access panels that allow veterinarians to safely perform procedures such as:</p>
          <ul>
${li(['Blood collection','Vaccinations','Ultrasound examinations','Physical assessments','Minor wound treatment','Identification procedures'])}
          </ul>
          <p>These openings enable efficient medical care while maintaining secure containment throughout the procedure.</p>

          <h3>Secure Locking Systems</h3>
          <p>Every movable component within a squeeze cage must remain secure during operation. Professional restraint systems use robust locking mechanisms designed to prevent accidental movement while allowing trained personnel to operate the equipment quickly and efficiently.</p>
          <p>Reliable locking systems are especially important during procedures involving large carnivores, hoofstock, or other powerful species where sudden movement could create hazards for both the animal and veterinary staff.</p>

          <h3>Observation Panels</h3>
          <p>Safe animal handling depends on continuous monitoring. Observation openings or viewing panels allow veterinarians and keepers to monitor the animal's posture, breathing, behavior, and overall condition throughout the procedure without compromising safety.</p>
          <p>Maintaining clear visibility also allows staff to recognize signs of stress or discomfort and respond appropriately if adjustments are needed.</p>

          <h2 id="welfare-safety">Animal Welfare and Keeper Safety</h2>
          <p>Modern zoo squeeze cages are designed with two equally important objectives: protecting the animal, and protecting the professionals providing care. These objectives are closely connected. Equipment that minimizes unnecessary stress for the animal also contributes to safer working conditions for veterinary teams and animal care staff.</p>

          <h3>Safety Features That Protect Animals and Keepers</h3>
          <p>Some of the most important safety features include:</p>
          <ul>
${li(['Smooth operating restraint mechanisms','Rounded edges that reduce the risk of injury','Heavy-duty structural construction','Secure locking systems','Non-slip flooring','Multiple emergency release options','Clear visibility for continuous observation','Controlled access points for veterinary procedures'])}
          </ul>
          <p>Rather than relying solely on the strength of the structure, modern restraint systems combine engineering, operational procedures, and trained personnel to achieve safe and effective animal management.</p>

          <h3>Animal Welfare Comes First</h3>
          <p>One of the most common misconceptions about squeeze cages is that they are designed to force animals into submission. In reality, modern zoological facilities use squeeze cages as part of broader animal welfare programs that emphasize low-stress handling and positive conditioning.</p>
          <p>Many animals are gradually introduced to the equipment over time through carefully planned husbandry routines. This familiarization process helps reduce fear and allows animals to voluntarily participate in certain management activities, making veterinary procedures less stressful than they might otherwise be.</p>
          <p>Research describing the use of a giraffe squeeze cage at Woodland Park Zoo demonstrated that repeated handling could be performed safely over several years without serious injuries when animals were properly conditioned and experienced staff followed established handling protocols. This finding highlights that successful restraint depends not only on equipment design but also on thoughtful animal management practices.</p>
          <p>The goal is never to restrain an animal more than necessary. Instead, modern squeeze cages are designed to support efficient veterinary care while respecting the physical and behavioral needs of the species.</p>

          <h3>Every Species Requires a Different Design</h3>
          <p>There is no universal squeeze cage suitable for every animal. A restraint system designed for giraffes differs significantly from one intended for bears, large cats, hoofstock, primates, or reptiles. Factors such as body size, strength, movement patterns, behavior, and veterinary requirements all influence the final design. For example:</p>
          <ul>
${li(['Large carnivores may require reinforced structural components and specialized access points.','Hoofstock often benefit from adjustable side panels that provide secure but comfortable restraint.','Primates may require different visibility and handling considerations to reduce stress during examinations.','Giraffe restraint systems are designed to accommodate their height, neck movement, and unique anatomy.'])}
          </ul>
          <p>Because of these differences, professional squeeze cages are almost always custom engineered rather than manufactured as standardized products.</p>

          <h2 id="materials">Materials and Fabrication</h2>
          <p>Designing a zoo squeeze cage involves far more than constructing a strong steel frame. Every restraint system must balance structural integrity, animal welfare, veterinary accessibility, and long-term reliability while accommodating the unique characteristics of the species it is built to serve.</p>
          <p>Zoo environments expose equipment to constant use, varying weather conditions, moisture, cleaning agents, and repeated interaction with powerful animals. Selecting materials that provide both structural strength and corrosion resistance helps ensure safe operation throughout the equipment's service life.</p>

          <h3>Structural Steel</h3>
          <p>Structural steel forms the backbone of most zoo squeeze cages. Its exceptional strength-to-weight ratio allows engineers to fabricate rigid frames capable of withstanding the forces generated during routine restraint procedures without excessive movement or deformation.</p>
          <p>Steel also offers excellent fabrication flexibility, allowing custom cages to incorporate adjustable restraint panels, veterinary access doors, integrated transfer gates, viewing windows, reinforced mounting points, and custom locking systems. When properly engineered and fabricated, structural steel provides the durability needed for equipment expected to operate reliably for decades.</p>

          <h3>Stainless Steel</h3>
          <p>Certain squeeze cage components benefit from the use of <a href="services.html#stainless">stainless steel</a>. Because veterinary procedures often involve exposure to moisture, disinfectants, and biological materials, stainless steel offers superior corrosion resistance and can be easier to clean and maintain.</p>
          <p>Depending on the application, stainless steel may be selected for veterinary access panels, hardware and fasteners, hinges, internal surfaces, and components exposed to frequent cleaning. Using stainless steel in high-contact areas can improve hygiene while extending the service life of critical components.</p>

          <h3>Protective Coatings</h3>
          <p>Even heavy-duty structural steel requires protection from environmental exposure. Professional fabrication commonly includes corrosion-resistant finishes that help preserve both structural integrity and appearance over time. Protective solutions may include:</p>
          <ul>
${li(['Hot-dip galvanizing','Powder coating','Industrial protective coatings','Zinc-rich primers','Multi-layer corrosion protection systems'])}
          </ul>
          <p>The appropriate finish depends on the operating environment, maintenance program, and facility requirements. Proper corrosion protection reduces maintenance costs while helping ensure dependable long-term performance.</p>

          <h3>Engineering Considerations</h3>
          <p>Although strength is essential, successful squeeze cage design requires balancing multiple engineering priorities. A restraint system must be strong enough to safely manage large animals while remaining practical for the veterinarians and animal care professionals who use it every day.</p>
          <p><strong>Structural stability.</strong> The cage must remain stable during restraint procedures without excessive vibration or movement. Structural calculations consider both static and dynamic loads generated by different species, ensuring the system performs safely under expected operating conditions.</p>
          <p><strong>Ergonomic operation.</strong> Veterinary teams often operate squeeze cages during lengthy medical procedures. Controls, access panels, and restraint mechanisms should be positioned to reduce operator fatigue while allowing precise and efficient adjustments. An intuitive design also minimizes training requirements and supports consistent operation by different members of the animal care team.</p>
          <p><strong>Veterinary accessibility.</strong> Every medical procedure requires different levels of access. Squeeze cages are designed with strategically positioned openings that allow veterinarians to safely reach specific areas of the animal without compromising containment.</p>
          <p><strong>Ease of maintenance.</strong> Well-designed equipment should remain easy to inspect, clean, and maintain throughout its operational life. Smooth surfaces, accessible hardware, and replaceable wear components simplify routine maintenance while helping facilities maintain high hygiene standards.</p>

          <h2 id="choosing">Choosing the Right Squeeze Cage Design</h2>
          <p>A zoo squeeze cage is one of the most specialized pieces of equipment within a zoological facility. Unlike standard animal containment systems, it must support veterinary procedures, integrate with enclosure operations, and function reliably under demanding conditions for many years.</p>

          <h3>Why Every Zoo Squeeze Cage Is Different</h3>
          <p>One of the biggest misconceptions about squeeze cages is that a single design can accommodate every species. In reality, each restraint system is engineered around the physical characteristics, behavior, and veterinary needs of the animals it will serve. Factors influencing the design include:</p>
          <ul>
${li(['Animal size and body proportions','Strength and movement patterns','Behavioral characteristics','Veterinary examination requirements','Frequency of use','Enclosure layout','Protected contact protocols','Integration with holding areas and transfer systems'])}
          </ul>
          <p>These variables make custom engineering essential rather than optional.</p>

          <h3>The Value of Custom Fabrication</h3>
          <p>Standardized equipment rarely meets the complex operational needs of modern zoological facilities. Every zoo has different exhibit layouts, veterinary workflows, and husbandry practices. A custom-fabricated squeeze cage allows these operational requirements to be incorporated directly into the design rather than forcing staff to adapt to off-the-shelf equipment.</p>
          <p>Custom fabrication offers several advantages:</p>
          <ul>
${li(['Designs tailored to specific species','Seamless integration with existing enclosure systems','Improved veterinary access','Enhanced keeper safety','Greater operational efficiency','Better long-term durability','Easier maintenance and future modifications'])}
          </ul>

          <h3>Integrating Squeeze Cages Into Modern Zoo Enclosures</h3>
          <p>A squeeze cage should never be viewed as a standalone piece of equipment. Instead, it functions as one component within a larger <a href="zoo-enclosures.html">enclosure management system</a> that may include keeper doors, shift gates, holding areas, transfer corridors, and protected contact barriers.</p>
          <p>When these components are designed to work together, animals can move through the enclosure in a calm, predictable manner, allowing veterinary procedures to be carried out with greater efficiency and less stress. This systems-based approach reflects the evolution of modern zoo design, where engineering, animal welfare, and operational planning are integrated to create safer environments for both animals and the professionals who care for them.</p>

          <h3>What to Look For in a Fabrication Partner</h3>
          <p>Selecting the right fabrication partner is about much more than finding a company that can weld steel. It requires choosing a manufacturer that understands the operational, engineering, and animal welfare considerations behind every design.</p>
          <p><strong>Experience with custom animal containment systems.</strong> Differences in anatomy, behavior, veterinary procedures, and enclosure layouts mean that standardized equipment rarely provides the best solution. An experienced fabricator develops equipment that supports daily animal management while integrating seamlessly with the surrounding enclosure system.</p>
          <p><strong>Engineering and fabrication quality.</strong> Poorly aligned restraint mechanisms, weak welds, or inaccurate tolerances affect both safety and operational efficiency. High-quality fabrication should include precision manufacturing, structural integrity, smooth operation of moving components, reliable locking mechanisms, durable corrosion-resistant finishes, and thorough quality control before installation.</p>
          <p><strong>Safety-centered design.</strong> A well-designed system reduces unnecessary stress while allowing veterinarians and keepers to perform routine procedures with confidence — through controlled restraint mechanisms, emergency release features, clear observation of the animal, secure veterinary access points, and compatibility with protected contact management.</p>
          <p><strong>Long-term durability.</strong> Moisture, humidity, cleaning chemicals, outdoor weather, and repeated interaction with powerful animals all place considerable stress on fabricated components. Selecting appropriate materials, protective coatings, and fabrication methods reduces maintenance requirements and extends the lifespan of the equipment.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
${FAQ.map(([q, a]) => `          <h3>${q}</h3>\n          <p>${a}</p>`).join('\n')}

          <h2 id="final-thoughts">Final Thoughts</h2>
          <p>Zoo squeeze cages are far more than restraint devices — they are essential tools that support preventive healthcare, veterinary treatment, and the safe management of animals in modern zoological facilities.</p>
          <p>When thoughtfully engineered, these systems help reduce stress during handling, improve safety for keepers and veterinarians, and integrate seamlessly into daily husbandry routines. Their effectiveness depends not only on sound operational practices but also on precision engineering, durable materials, and species-specific design.</p>
          <p>As zoos, wildlife parks, and conservation centers continue to advance animal welfare standards, custom-fabricated squeeze cages will remain an important part of creating safer and more efficient animal care environments.</p>

          <h2 id="references">References</h2>
          <p>The information presented in this guide is supported by research and established zoological practices, including:</p>
          <ul class="refs">
            <li>Wallach, J. D., &amp; Boever, W. J. (1986). <em>Use of a squeeze cage for handling giraffes.</em> Zoo Biology, 5(4), 339–346.</li>
            <li>Fowler, M. E. <em>Restraint and Handling of Wild and Domestic Animals.</em></li>
            <li>Research on animal welfare, protected contact management, and veterinary handling published in peer-reviewed zoological and veterinary journals.</li>
          </ul>

        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta">
      <div class="cta__bg"><img src="assets/img/cta-bg.webp" alt="" aria-hidden="true" loading="lazy" /></div>
      <div class="container cta__inner" data-reveal>
        <span class="eyebrow" style="justify-content:center">Custom Squeeze Cage Fabrication</span>
        <h2 style="margin-top:1rem">Built Around Your Species and Your Workflow</h2>
        <p>Every animal presents unique handling challenges, which is why professionally fabricated restraint systems should never be treated as one-size-fits-all solutions. TCB Metal Works fabricates zoo squeeze cages engineered for structural integrity, precision, and long-term durability — supporting modern standards for animal welfare and keeper safety.</p>
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
          <article class="card card--placeholder" data-reveal aria-label="Upcoming article placeholder">
            <div class="card__media"><svg class="ph-icon" aria-hidden="true"><use href="#i-image"/></svg></div>
            <div class="card__body">
              <span class="ph-cat" aria-hidden="true"></span>
              <h3>Keeper Doors</h3>
              <p>Safe access design, locking systems, and species-specific requirements.</p>
              <span class="card__link" aria-disabled="true">Coming soon <svg><use href="#i-arrow"/></svg></span>
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

// word count of the article body only
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
  <title>What Is a Zoo Squeeze Cage? Design, Safety &amp; Veterinary Guide</title>
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
  <meta property="og:title" content="What Is a Zoo Squeeze Cage? Design, Safety Features &amp; Veterinary Applications" />
  <meta property="og:description" content="${DESC}" />
  <meta property="og:image" content="${IMG}" />
  <meta property="og:url" content="${URL}" />
  <meta property="article:published_time" content="${DATE}" />
  <meta property="article:modified_time" content="${DATE}" />
  <meta property="article:author" content="TCB Metal Works" />
  <meta property="article:section" content="Zoo Veterinary Equipment" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="What Is a Zoo Squeeze Cage? Design, Safety &amp; Veterinary Guide" />
  <meta name="twitter:description" content="How zoo squeeze cages work, the design features that protect animals and keepers, and why custom fabrication matters." />
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
    "headline": "What Is a Zoo Squeeze Cage? Design, Safety Features & Veterinary Applications",
    "description": "${DESC}",
    "image": "${IMG}",
    "datePublished": "${DATE}",
    "dateModified": "${DATE}",
    "inLanguage": "en-US",
    "articleSection": "Zoo Veterinary Equipment",
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
      { "@type": "ListItem", "position": 3, "name": "What Is a Zoo Squeeze Cage?", "item": "${URL}" }
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
await writeFile(path.join(ROOT, 'zoo-squeeze-cage.html'), out, 'utf8');
console.log(`wrote zoo-squeeze-cage.html | ${words} words | ${minutes} min read | ${(out.length/1024).toFixed(0)} KB`);
