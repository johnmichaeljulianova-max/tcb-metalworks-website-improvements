import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('tcb-website');
const src = await readFile(path.join(ROOT, 'what-is-zoo-caging.html'), 'utf8');
const chrome = src.slice(src.indexOf('<body>'), src.indexOf('<main id="main">'));
const tail   = src.slice(src.indexOf('<footer class="footer">'));

const SLUG = 'zoo-enrichment-boxes.html';
const URL  = 'https://tcbmetalworks.com/zoo-enrichment-boxes/';
const IMG  = 'https://tcbmetalworks.com/assets/img/zoo-enrichment-boxes-og.jpg';
const TITLE = "Zoo Enrichment Boxes: Animal Welfare &amp; Zoo Management";
const H1   = "Zoo Enrichment Boxes: How They Improve Animal Welfare and Modern Zoo Management";
const OGTITLE = "Zoo Enrichment Boxes: How They Improve Animal Welfare &amp; Modern Zoo Management";
const DESC = "Discover how zoo enrichment boxes support animal welfare, encourage natural behaviors, reduce stress, and improve husbandry through custom enrichment design.";
const KEYWORDS = "zoo enrichment boxes, animal enrichment, environmental enrichment, foraging enrichment, cognitive enrichment, sensory enrichment, puzzle feeders, custom enrichment devices, zoo enclosure fabrication";
const DATE = "2026-07-10";

const FAQ = [
  ["What is a zoo enrichment box?", "A zoo enrichment box is a specially designed device that encourages animals to perform natural behaviors such as foraging, exploring, manipulating objects, and solving simple challenges. It forms part of a broader environmental enrichment program that supports physical and psychological well-being."],
  ["Why are enrichment boxes important?", "Enrichment boxes help increase behavioral diversity, encourage natural activities, reduce boredom, and provide cognitive and physical stimulation. They are widely used by modern zoos to improve animal welfare and create more engaging environments."],
  ["Which animals use enrichment boxes?", "Enrichment boxes can be designed for a wide range of species, including lions, tigers, bears, primates, elephants, rhinoceroses, giraffes, hoofstock, birds, reptiles, and small mammals. Each device is typically customized to match the biological and behavioral needs of the species."],
  ["What materials are best for zoo enrichment boxes?", "Professionally fabricated enrichment boxes commonly use structural steel, stainless steel hardware, heavy-duty welded components, and animal-safe finishes. Material selection depends on the target species, expected wear, and environmental conditions."],
  ["How often should enrichment boxes be changed?", "Rather than relying on the same enrichment device continuously, zoos typically rotate enrichment boxes and vary enrichment activities to maintain novelty and encourage ongoing engagement. Rotation schedules depend on the species, enrichment goals, and husbandry program."],
  ["Can enrichment boxes be customized?", "Yes. Most professional zoological facilities use custom-fabricated enrichment boxes designed around the behavior, size, strength, feeding habits, and enclosure requirements of the species they manage."],
];

const li = a => a.map(x => `            <li>${x}</li>`).join('\n');

const MAIN = `  <main id="main">
    <!-- HERO BANNER -->
    <section class="pagehero">
      <div class="pagehero__grain"></div>
      <div class="container pagehero__inner" data-reveal>
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><span>/</span><a href="articles.html">Articles</a><span>/</span>Enrichment Boxes</nav>
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
              <li><a href="#what-is-a-box">What Is a Zoo Enrichment Box?</a></li>
              <li><a href="#why-enrichment">Why Environmental Enrichment Matters</a></li>
              <li><a href="#types">Types of Zoo Enrichment Boxes</a></li>
              <li><a href="#engineering">Engineering &amp; Fabrication</a></li>
              <li><a href="#choosing">Choosing a Fabrication Partner</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ol>
          </nav>
        </aside>

        <article class="prose" data-reveal>

          <figure class="article-figure">
            <img src="assets/img/zoo-enrichment-boxes.webp"
                 alt="Detail of galvanized welded mesh set into a reinforced structural steel frame, fabricated by TCB Metal Works — the same durable materials used to build custom zoo enrichment devices"
                 width="1000" height="600" fetchpriority="high" decoding="async" />
            <figcaption>Galvanized welded mesh in a reinforced steel frame from a TCB Metal Works zoo build — the same structural steel and heavy-duty welded construction that custom enrichment boxes are engineered from.</figcaption>
          </figure>

          <div class="callout">
            <h2>Quick Answer</h2>
            <p>A zoo enrichment box is a custom-designed enrichment device that encourages animals to perform natural behaviors such as foraging, problem-solving, exploration, climbing, and food searching. Rather than simply providing entertainment, enrichment boxes are carefully integrated into animal care programs to improve mental stimulation, promote physical activity, reduce abnormal repetitive behaviors, and enhance overall animal welfare. Modern zoological facilities use enrichment boxes alongside habitat design and positive husbandry practices to create more engaging environments for animals under professional care.</p>
          </div>

          <h2 id="introduction">Introduction</h2>
          <p>Modern zoos have evolved far beyond simply providing secure habitats for animals. Today, accredited zoological facilities focus on creating environments that support both the physical and psychological well-being of the animals in their care.</p>
          <p>One of the most effective ways to do that is through environmental enrichment — the carefully planned activities, objects, and challenges that push animals to express the behaviours they'd perform in the wild. These experiences spark curiosity, invite exploration, get animals moving, and cut the boredom of a static environment. Research backs it up: well-designed enrichment programs improve welfare by increasing behavioural diversity and reducing the repetitive behaviours that tend to show up in under-stimulating enclosures.</p>
          <p>Among the many enrichment tools available, zoo enrichment boxes have become one of the most versatile and widely used solutions. Properly designed enrichment boxes encourage animals to search, investigate, manipulate objects, and solve simple challenges while supporting species-specific behaviors and daily husbandry routines.</p>
          <p>When incorporated into a comprehensive enrichment program, these custom-fabricated devices help create healthier, more stimulating environments that benefit both animals and animal care professionals.</p>

          <h2 id="what-is-a-box">What Is a Zoo Enrichment Box?</h2>
          <p>A zoo enrichment box is a specially designed enclosure accessory that provides animals with opportunities to interact with their environment in meaningful and engaging ways.</p>
          <p>Unlike feeding containers or storage boxes, enrichment boxes are intentionally created to encourage natural behaviors. Depending on the species and management goals, they may contain hidden food, scents, movable components, browse materials, or interactive features that motivate animals to explore and solve simple challenges.</p>
          <p>Rather than obtaining food immediately, animals are encouraged to spend time investigating, manipulating, or foraging within the enrichment box. This process more closely resembles the effort required to locate food and resources in natural habitats.</p>
          <p>Enrichment boxes can be developed for a wide variety of species, including:</p>
          <ul>
${li(['Large carnivores','Primates','Bears','Elephants','Rhinoceroses','Hoofstock','Small mammals','Birds','Reptiles'])}
          </ul>
          <p>Because every species has unique behavioral needs, enrichment boxes are typically custom designed to match the animal's physical abilities, natural behaviors, and husbandry objectives.</p>

          <h2 id="why-enrichment">Why Environmental Enrichment Is Essential in Modern Zoos</h2>
          <p>Animals living in professionally managed zoological facilities no longer spend their days simply occupying an exhibit. Modern husbandry emphasizes providing animals with opportunities to make choices, solve problems, explore their surroundings, and engage in species-appropriate activities.</p>
          <p>Without adequate environmental stimulation, animals may have fewer opportunities to express natural behaviors. Over time, this can contribute to reduced behavioral diversity and, in some cases, the development of repetitive behaviors that indicate the need for more engaging environments.</p>
          <p>Environmental enrichment helps address these challenges by encouraging animals to interact with their surroundings in ways that more closely reflect their natural behavioral repertoire.</p>
          <p>A well-designed enrichment program can help:</p>
          <ul>
${li(['Encourage natural foraging behaviors','Increase physical activity','Stimulate cognitive engagement','Promote exploration and curiosity','Reduce boredom','Increase behavioral diversity','Support positive welfare outcomes','Enhance daily husbandry routines'])}
          </ul>
          <p>Enrichment boxes are particularly valuable because they combine many of these benefits into a single, adaptable tool that can be customized for different species, habitats, and management objectives.</p>

          <h3>Enrichment Boxes as Part of a Complete Zoo Enclosure System</h3>
          <p>Environmental enrichment is most effective when integrated into the overall enclosure design rather than added as an afterthought.</p>
          <p>Professionally designed enrichment boxes work alongside other enclosure components such as <a href="keeper-doors-for-zoo-enclosures.html">keeper doors</a>, <a href="shift-gates-for-zoo-enclosures.html">shift gates</a>, <a href="zoo-holding-areas.html">holding areas</a>, and <a href="zoo-squeeze-cage.html">squeeze cages</a> to support safe and efficient animal management. For example, enrichment devices may be placed in an exhibit after an animal has been shifted into a holding area, allowing keepers to refresh the habitat safely before reintroducing the animal.</p>
          <p>This coordinated approach enables zoos to provide regular enrichment while maintaining protected contact practices and minimizing disruption to daily operations. It also reinforces the idea that animal welfare depends not only on individual enrichment devices but on a thoughtfully designed <a href="what-is-zoo-caging.html">enclosure system</a> that supports both the animals and the professionals who care for them.</p>

          <h2 id="types">Types of Zoo Enrichment Boxes and How They Support Animal Welfare</h2>
          <p>Not all enrichment boxes do the same job. Each device is built to encourage a specific natural behaviour that keeps an animal mentally sharp, physically active, and engaged — and the right design depends on the species, the husbandry goals, the enclosure layout, and the individual animals themselves.</p>
          <p>Modern zoological facilities often rotate enrichment devices regularly to introduce novelty and prevent animals from becoming overly familiar with a single object. This variety helps maintain curiosity and encourages continued interaction with the environment.</p>

          <h3>Food and Foraging Enrichment Boxes</h3>
          <p>The most common enrichment boxes are built to bring back natural foraging behaviour. In the wild, many animals spend a big share of the day hunting for food — manipulating objects, digging, climbing, or solving problems to get at a meal. Drop that food in a bowl and all of that effort simply disappears.</p>
          <p>Foraging enrichment boxes recreate part of this experience by requiring animals to investigate, manipulate, or search before obtaining food. Examples include:</p>
          <ul>
${li(['Hidden food compartments','Puzzle feeders','Rotating food dispensers','Suspended feeding boxes','Browse holders for herbivores','Multi-chamber feeding devices'])}
          </ul>
          <p>These designs increase feeding time, encourage exploration, and provide valuable cognitive stimulation while supporting species-specific feeding behaviors.</p>

          <h3>Cognitive Enrichment Boxes</h3>
          <p>Plenty of zoo animals are formidable problem-solvers. Primates, bears, elephants, parrots, and several carnivores show real curiosity and intelligence, which makes cognitive enrichment an important part of their daily management.</p>
          <p>Cognitive enrichment boxes are designed to encourage animals to think, investigate, and solve simple challenges before accessing a reward. These devices may incorporate:</p>
          <ul>
${li(['Sliding panels','Rotating mechanisms','Levers','Multiple compartments','Sequential opening systems','Simple puzzle elements'])}
          </ul>
          <p>The goal is not to make obtaining food difficult but to encourage active engagement and stimulate natural exploratory behaviors. Research has shown that providing cognitive challenges can increase behavioral diversity and contribute to positive welfare outcomes by reducing inactivity and encouraging species-appropriate behaviors.</p>

          <h3>Sensory Enrichment Boxes</h3>
          <p>Animals read the world through smell, touch, hearing, and sight. Sensory enrichment boxes play to that, introducing new scents, textures, sounds, or materials that pull an animal in to investigate. Depending on the species, that might include:</p>
          <ul>
${li(['Natural browse materials','Herbs and spices','Animal-safe scents','Different textures','Bark, wood, or natural fibers','Water-based enrichment elements'])}
          </ul>
          <p>Regularly changing sensory experiences helps maintain curiosity while supporting natural investigative behaviors.</p>

          <h3>Manipulative Enrichment</h3>
          <p>Many species handle objects instinctively — primates work branches and tools, bears flip logs looking for food, elephants explore with their trunks. Give them the chance to do the same inside an enclosure and they stay physically and mentally engaged.</p>
          <p>Manipulative enrichment boxes are designed to withstand repeated handling while allowing animals to push, pull, rotate, lift, open, carry, and investigate. These activities encourage physical movement while supporting problem-solving and exploratory behavior.</p>
          <p>Because these devices often experience substantial wear, they require durable materials and precision fabrication to ensure long-term safety and reliability.</p>

          <h3>Species-Specific Enrichment Matters</h3>
          <p>No single enrichment box is suitable for every species. Effective enrichment begins with understanding how animals naturally interact with their environment. For example:</p>
          <ul>
${li(['<strong>Large cats</strong> benefit from enrichment that encourages stalking, scent investigation, and food-searching behaviors.','<strong>Primates</strong> often respond well to puzzle-based devices that challenge their dexterity and problem-solving abilities.','<strong>Bears</strong> are highly motivated by enrichment that promotes digging, manipulation, and extended foraging.','<strong>Elephants</strong> require large, durable enrichment structures capable of withstanding significant force while encouraging exploration with their trunks.','<strong>Hoofstock</strong> may benefit from browse feeders and enrichment that supports natural grazing or browsing behaviors.'])}
          </ul>
          <p>Designing enrichment around the biological and behavioral characteristics of each species helps maximize engagement while supporting positive welfare outcomes.</p>

          <h3>Rotating Enrichment for Continued Engagement</h3>
          <p>Even the best enrichment device goes stale if it shows up the same way every day. To keep interest high, zoos rotate enrichment boxes, vary how food is presented, and introduce fresh scents, textures, or challenges on a planned schedule — which heads off habituation and keeps animals exploring with real curiosity.</p>
          <p>Rather than relying on a single enrichment item, animal care teams typically use a combination of devices and techniques that complement one another. This flexible strategy promotes behavioral diversity while allowing enrichment programs to evolve alongside the changing needs of individual animals.</p>

          <h2 id="engineering">Engineering and Fabrication of Zoo Enrichment Boxes</h2>
          <p>An enrichment box is only effective if it is both engaging for the animal and durable enough to withstand repeated daily use. Unlike toys designed for domestic pets, zoo enrichment boxes are exposed to powerful animals, changing weather conditions, frequent cleaning, and continuous interaction that can place significant stress on the equipment.</p>
          <p>For this reason, enrichment boxes used in zoological facilities require thoughtful engineering, appropriate material selection, and precision fabrication to ensure they remain safe, functional, and reliable throughout their service life. Rather than producing standardized products, professionally fabricated enrichment boxes are typically custom-designed to match the behavioral needs of the species and the operational requirements of the zoo.</p>

          <h3>Materials Used in Zoo Enrichment Box Fabrication</h3>
          <p>The choice of materials directly influences the durability, safety, and longevity of an enrichment device. Because animals interact with enrichment boxes through biting, pushing, pulling, scratching, climbing, or manipulating different components, every material must be capable of withstanding repeated use without creating hazards.</p>
          <p><strong>Structural steel.</strong> Structural steel is commonly used for the main framework of enrichment boxes designed for medium and large animal species. Its strength allows fabricators to create rigid structures that resist deformation while supporting moving components, food compartments, and attachment systems. Structural steel also provides flexibility for custom fabrication, enabling enrichment boxes to be designed in a wide range of shapes and sizes to suit different enclosure layouts and management objectives.</p>
          <p><strong>Stainless steel components.</strong> Components that experience frequent movement or direct food contact often benefit from stainless steel construction — hinges, latches, rotating mechanisms, fasteners, sliding components, food trays, and hardware exposed to moisture. Its excellent corrosion resistance helps maintain smooth operation even after repeated cleaning and exposure to outdoor environments.</p>
          <p><strong>Animal-safe materials.</strong> Every material incorporated into an enrichment box must be appropriate for the species using it. Sharp edges, toxic coatings, loose components, or materials that can splinter or break apart should be avoided. Professional fabrication emphasizes rounded edges, smooth welded joints, secure fasteners, non-toxic finishes, durable construction, and easy-to-clean surfaces. These design principles help reduce injury risks while supporting long-term reliability.</p>

          <h3>Engineering for Different Animal Species</h3>
          <p>No single enrichment box can effectively serve every animal. Species differ in size, strength, intelligence, feeding behavior, and methods of interacting with objects. As a result, enrichment devices should be engineered around the biological and behavioral characteristics of the intended species. For example:</p>
          <ul>
${li(['<strong>Large carnivores</strong> require heavily reinforced enrichment devices capable of resisting powerful bites, clawing, and repeated impact.','<strong>Primates</strong> benefit from enrichment boxes that incorporate multiple moving components and problem-solving opportunities while withstanding frequent manipulation.','<strong>Elephants</strong> require exceptionally robust structures designed to tolerate significant pulling, lifting, and pushing forces generated by the trunk.','<strong>Bears</strong> often manipulate enrichment devices aggressively, making structural reinforcement and secure mounting particularly important.','<strong>Birds and smaller mammals</strong> may require lightweight designs that encourage climbing, pecking, or exploratory behaviors while remaining safe and durable.'])}
          </ul>
          <p>By tailoring the engineering to each species, enrichment boxes become more engaging, safer to use, and more effective at promoting natural behaviors.</p>

          <h3>Designing for Daily Zoo Operations</h3>
          <p>An enrichment box should not only benefit the animal — it should also support the daily workflow of animal care staff. Well-designed enrichment devices are easy to load with food or browse, clean and disinfect, inspect for wear, repair or maintain, remove and replace, and rotate between enclosures.</p>
          <p>Considering these operational requirements during the design stage helps reduce maintenance time while encouraging enrichment to be incorporated consistently into daily husbandry routines. This practical approach benefits both the animals and the professionals responsible for their care.</p>

          <h3>Precision Fabrication for Long-Term Reliability</h3>
          <p>Precision manufacturing is essential because enrichment boxes experience repeated use under demanding conditions. Accurate fabrication ensures that moving components operate smoothly, hinges remain properly aligned, welds maintain structural integrity, fasteners remain secure, doors and access panels close correctly, and attachment points withstand repeated loading.</p>
          <p>High-quality fabrication also simplifies routine inspections and maintenance, helping zoos keep enrichment equipment in safe working condition for many years.</p>

          <h3>Why Custom Fabrication Delivers Better Results</h3>
          <p>Commercially available enrichment products may be suitable for some applications, but they often cannot accommodate the unique requirements of zoological facilities. Custom fabrication allows every enrichment box to be designed specifically for the target species, desired enrichment objectives, feeding methods, enclosure layout, keeper access, cleaning procedures, long-term durability, and integration with the overall enclosure system.</p>
          <p>By tailoring enrichment devices to both the animals and the operational needs of the facility, custom fabrication creates more effective enrichment programs while supporting safer, more efficient zoo management.</p>

          <h2 id="choosing">Choosing the Right Zoo Enrichment Box Fabrication Partner</h2>
          <p>An effective enrichment program depends on more than creative ideas. The quality of the enrichment equipment itself plays an important role in ensuring that enrichment remains safe, engaging, and practical for long-term use.</p>
          <p>Zoo enrichment boxes are handled daily by both animals and animal care professionals. They must withstand repeated interaction, frequent cleaning, changing environmental conditions, and the unique physical abilities of different species. Selecting an experienced fabrication partner helps ensure that every enrichment device performs reliably while supporting the zoo's animal welfare goals.</p>
          <p>Rather than purchasing generic enrichment products, many zoological facilities invest in custom-designed enrichment boxes that are tailored to their species, enclosure layouts, and husbandry programs. Not every metal fabrication company understands the unique requirements of zoological environments, so the following qualities are particularly important.</p>

          <h3>Species-Specific Design Expertise</h3>
          <p>Every animal interacts with enrichment differently. A puzzle feeder designed for a chimpanzee will have very different design requirements than an enrichment box intended for a tiger, elephant, bear, or giraffe. Strength, dexterity, feeding behavior, curiosity, and physical size all influence how an enrichment device should be engineered. Custom fabrication ensures each enrichment box supports natural behaviors while remaining safe for both the animals and the staff who maintain it.</p>

          <h3>Durable Construction for Daily Use</h3>
          <p>Enrichment equipment is exposed to constant wear. Animals may bite, claw, pull, lift, roll, strike, or manipulate enrichment devices repeatedly throughout the day. Outdoor exposure, cleaning chemicals, moisture, and temperature changes further increase the demands placed on the equipment. High-quality fabrication using durable materials and precision manufacturing helps ensure enrichment boxes continue performing safely with minimal maintenance over many years.</p>

          <h3>Easy Maintenance and Cleaning</h3>
          <p>Zoo professionals use enrichment equipment every day, making practical maintenance an important consideration. Well-designed enrichment boxes should be easy to load with food or enrichment materials, inspect for damage, clean and sanitize, repair if necessary, rotate between exhibits, and remove and reinstall. Designing for efficient maintenance helps reduce labor while allowing enrichment programs to remain consistent and effective.</p>

          <h3>Integration with the Complete Enclosure System</h3>
          <p>Environmental enrichment should complement — not interfere with — daily zoo operations. Custom enrichment boxes can be designed to work alongside <a href="keeper-doors-for-zoo-enclosures.html">keeper doors</a>, <a href="shift-gates-for-zoo-enclosures.html">shift gates</a>, <a href="zoo-holding-areas.html">holding areas</a>, <a href="zoo-squeeze-cage.html">squeeze cages</a>, transfer corridors, feeding systems, and veterinary management routines. This integrated approach allows keepers to introduce or replace enrichment safely while maintaining protected contact and minimizing disruption to daily husbandry activities.</p>

          <h3>Why Custom Fabrication Is the Better Choice</h3>
          <p>Every zoo has different species, exhibits, operational procedures, and conservation goals. Because of these differences, custom fabrication offers significant advantages over standardized enrichment products. A custom-designed enrichment box can be engineered specifically for individual animal species, behavioral enrichment objectives, feeding strategies, enclosure dimensions, existing enclosure infrastructure, keeper accessibility, cleaning and maintenance procedures, and future enclosure modifications. This flexibility allows zoological facilities to create enrichment programs that better support both animal welfare and operational efficiency.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
${FAQ.map(([q, a]) => `          <h3>${q}</h3>\n          <p>${a}</p>`).join('\n')}

          <h2 id="final-thoughts">Final Thoughts</h2>
          <p>Environmental enrichment has become a cornerstone of modern zoo management, helping animals remain mentally stimulated, physically active, and behaviorally engaged. Among the many enrichment tools available, enrichment boxes offer a practical and versatile way to encourage natural behaviors while supporting daily husbandry and animal welfare objectives.</p>
          <p>Their success, however, depends on more than creative concepts. Safe design, durable materials, precision engineering, and species-specific fabrication are all essential to creating enrichment equipment that performs reliably in demanding zoological environments.</p>
          <p>When thoughtfully integrated with <a href="keeper-doors-for-zoo-enclosures.html">keeper doors</a>, <a href="shift-gates-for-zoo-enclosures.html">shift gates</a>, <a href="zoo-holding-areas.html">holding areas</a>, and other enclosure systems, custom enrichment boxes become an important part of a comprehensive approach to animal care — one that balances enrichment, operational efficiency, and long-term safety.</p>

          <h2 id="references">References</h2>
          <p>This article is informed by peer-reviewed research and established zoological best practices, including:</p>
          <ul class="refs">
            <li>Studies published in <em>Zoo Biology</em> on environmental enrichment and behavioral management.</li>
            <li>Research from <em>Frontiers in Psychology</em> exploring animal cognition, environmental complexity, and welfare.</li>
            <li>Articles from the <em>Journal of Applied Animal Welfare Science</em> examining the role of enrichment in promoting species-appropriate behaviors.</li>
            <li>Recent research published in <em>ScienceDirect</em> on enrichment strategies and animal welfare outcomes.</li>
            <li>Practical guidance from the <em>International Zoo Yearbook</em> on implementing environmental enrichment programs in zoological facilities.</li>
          </ul>

        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta">
      <div class="cta__bg"><img src="assets/img/cta-bg.webp" alt="" aria-hidden="true" loading="lazy" /></div>
      <div class="container cta__inner" data-reveal>
        <span class="eyebrow" style="justify-content:center">Custom Zoo Enrichment Boxes</span>
        <h2 style="margin-top:1rem">Enrichment Built for Demanding Zoo Environments</h2>
        <p>TCB Metal Works designs and fabricates custom zoo enrichment boxes engineered for durability, safety, and long-term performance — from heavy-duty puzzle feeders for large carnivores to browse holders for hoofstock and interactive devices for primates, each built to integrate seamlessly with your complete enclosure system.</p>
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
            <div class="card__media"><span class="card__tag">Zoo Enclosure Equipment</span><img src="assets/img/zoo-holding-areas.webp" alt="Interconnected stainless steel off-exhibit holding pens with a sealed hygienic floor, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1024" height="537" /></div>
            <div class="card__body">
              <h3>Zoo Holding Areas</h3>
              <p>The off-exhibit hub of an enclosure — design, safety features, welfare, and custom fabrication.</p>
              <a class="card__link" href="zoo-holding-areas.html">Read article <svg><use href="#i-arrow"/></svg></a>
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
  <meta property="og:title" content="${OGTITLE}" />
  <meta property="og:description" content="${DESC}" />
  <meta property="og:image" content="${IMG}" />
  <meta property="og:url" content="${URL}" />
  <meta property="article:published_time" content="${DATE}" />
  <meta property="article:modified_time" content="${DATE}" />
  <meta property="article:author" content="TCB Metal Works" />
  <meta property="article:section" content="Zoo Enclosure Equipment" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${TITLE}" />
  <meta name="twitter:description" content="How zoo enrichment boxes support animal welfare, encourage natural behaviors, and why they're custom fabricated." />
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
    "headline": "Zoo Enrichment Boxes: How They Improve Animal Welfare and Modern Zoo Management",
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
      { "@type": "ListItem", "position": 3, "name": "Zoo Enrichment Boxes", "item": "${URL}" }
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
console.log(`wrote ${SLUG} | ${words} words | ${minutes} min read | ${(out.length/1024).toFixed(0)} KB | title ${TITLE.replace('&amp;','&').length}c | desc ${DESC.length}c`);
