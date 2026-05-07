const classIndexItems = [
  { id: "welcome", label: "Class Welcome + attendance", start: 0 },
  { id: "anthem", label: "National Anthem", start: 1 },
  { id: "rules", label: "Classroom Rules", start: 2 },
  { id: "pre-starter", label: "Pre-assessment + Starter", start: 3 },
  { id: "lesson-title", label: "Lesson title", start: 5 },
  { id: "outcomes", label: "Outcomes + vocab", start: 6 },
  { id: "lesson-explanation", label: "Lesson explanation", start: 7 },
  { id: "formative", label: "Formative assessment", start: 17 },
  { id: "check-understanding", label: "Check understanding", start: 18 },
  { id: "final-assessment", label: "Final assessment", start: 20, tone: "final" },
  { id: "enrichment", label: "Enrichment activity", start: 21 },
  { id: "homework", label: "Homework", start: 21 }
];

const lessonOneObjectives = [
  "Explain why carbon forms many compounds.",
  "Define hydrocarbons and represent them using formulas/models.",
  "Differentiate saturated and unsaturated hydrocarbons using bonding evidence."
];

const lessons = [
  {
    id: "lesson-1",
    short: "L1",
    title: "Introduction to Hydrocarbons",
    minutes: 45,
    status: "Ready",
    sourcePages: "Teacher Edition pages 5-11",
    outcomes: [
      "CHM.5.6.01.001.07 Explain why carbon forms many compounds.",
      "CHM.5.6.01.003.15 Define hydrocarbons.",
      "CHM.5.6.01.001.08 Use models/formulas to represent hydrocarbons.",
      "CHM.5.6.01.001.09 Explain saturated versus unsaturated hydrocarbons using Lewis and ball-and-stick models."
    ],
    slides: [
      {
        section: "attendance",
        title: "Attendance and Readiness Check",
        duration: "2 min",
        objective: "Prepare students to participate in a student-led chemistry lesson.",
        content: `
          <div class="slide-grid split-large">
            <div class="content-panel">
              <span class="time-tag">2 min</span>
              <h2 class="slide-title">Ready to investigate <span class="hero-word">carbon?</span></h2>
              <p class="slide-subtitle">Students open notebooks, prepare calculators, and choose a partner for quick discussion tasks.</p>
              <div class="pill-row">
                <span class="chip">Notebook open</span>
                <span class="chip">Partner chosen</span>
                <span class="chip">Device ready</span>
                <span class="chip">Voice level 1</span>
              </div>
              <div class="reveal">
                <button class="reveal-toggle" type="button">Readiness answer</button>
                <div class="reveal-content">A ready student can name one material that contains carbon and can explain what evidence they would look for in a formula.</div>
              </div>
            </div>
            <div class="visual-panel student-hero-panel">
              <div class="student-scene-card">
                <div class="mini-three-scene" data-scene="methane" aria-label="Rotating methane molecule"></div>
                <div class="print-fallback molecule-field">
                  <span class="bond-line b1"></span><span class="bond-line b2"></span><span class="bond-line b3"></span><span class="bond-line b4"></span>
                  <span class="atom c">C</span><span class="atom h h1">H</span><span class="atom h h2">H</span><span class="atom h h3">H</span><span class="atom h h4">H</span>
                </div>
                <div class="student-scene-caption">
                  <strong>Module 20</strong>
                  <span>carbon models, fuels, structures, and reactivity</span>
                </div>
              </div>
            </div>
          </div>`
      },
      {
        section: "agenda",
        title: "Lesson Map",
        duration: "2 min",
        objective: "Describe the learning route for today's class.",
        content: `
          <div class="slide-grid">
            <div class="content-panel">
              <span class="time-tag">2 min</span>
              <h2 class="slide-title">From carbon atoms to hydrocarbon evidence</h2>
              <p class="slide-subtitle">Each stop gives students something to observe, classify, explain, or justify.</p>
              <ul class="bullet-list">
                <li>Start from prior knowledge about bonding.</li>
                <li>Explore carbon's bonding capacity with models.</li>
                <li>Classify compounds as hydrocarbon or not.</li>
                <li>Use bonding evidence to compare saturated and unsaturated hydrocarbons.</li>
              </ul>
            </div>
            <div class="activity-panel">
              <div class="journey-track student-path">
                <div class="journey-step"><span>01</span><strong>Look</strong><p>Find carbon in materials you already know.</p></div>
                <div class="journey-step"><span>02</span><strong>Build</strong><p>Use 2D and 3D models to see bonds.</p></div>
                <div class="journey-step"><span>03</span><strong>Sort</strong><p>Decide hydrocarbon or not from evidence.</p></div>
                <div class="journey-step"><span>04</span><strong>Defend</strong><p>Prove saturated or unsaturated.</p></div>
              </div>
            </div>
          </div>`
      },
      {
        section: "expectations",
        title: "Active Learning Expectations",
        duration: "1 min",
        objective: "Follow classroom routines for collaborative chemistry learning.",
        content: `
          <div class="slide-grid three">
            <div class="mini-card">
              <span class="badge support">Talk</span>
              <h3>Scientific voice</h3>
              <p>Use evidence words: formula, bond, atom, structure, saturated, unsaturated.</p>
            </div>
            <div class="mini-card">
              <span class="badge core">Build</span>
              <h3>Model first</h3>
              <p>Sketch or manipulate the model before writing the final answer.</p>
            </div>
            <div class="mini-card">
              <span class="badge challenge">Justify</span>
              <h3>No unsupported claims</h3>
              <p>Every classification needs visible structural evidence.</p>
            </div>
            <div class="content-panel" style="grid-column: 1 / -1;">
              <h2 class="slide-title">Teacher as facilitator. Students as investigators.</h2>
              <p class="slide-subtitle">The lesson target is 70% active learning: observe, compare, decide, and explain.</p>
            </div>
          </div>`
      },
      {
        section: "pre",
        title: "Pre-assessment: Carbon Bonding",
        duration: "4 min",
        objective: "Activate prior knowledge about valence electrons and covalent bonding.",
        content: `
          <div class="slide-grid">
            <div class="content-panel">
              <span class="time-tag">4 min</span>
              <h2 class="slide-title">What can carbon do?</h2>
              <p class="slide-subtitle">Answer individually, then compare with your partner.</p>
              <div class="choice-grid">
                <div class="question-card"><h3>Remember</h3><p>How many valence electrons does carbon have?</p></div>
                <div class="question-card"><h3>Understand</h3><p>Why does carbon usually form covalent bonds?</p></div>
                <div class="question-card"><h3>Apply</h3><p>Predict how many single bonds carbon can form.</p></div>
              </div>
              <div class="reveal">
                <button class="reveal-toggle" type="button">Expected answers</button>
                <div class="reveal-content">Carbon has 4 valence electrons. It usually shares electrons and can form 4 covalent bonds to complete an octet.</div>
              </div>
            </div>
            <div class="visual-panel">
              <div class="electron-shell" aria-label="Animated carbon electron shell">
                <div class="orbit one"><span class="electron"></span><span class="electron"></span></div>
                <div class="orbit two"><span class="electron"></span><span class="electron"></span><span class="electron"></span><span class="electron"></span></div>
                <div class="nucleus">C</div>
              </div>
            </div>
          </div>`
      },
      {
        section: "starter",
        title: "Starter: Carbon Everywhere",
        duration: "3 min",
        objective: "Connect carbon compounds to familiar materials and products.",
        content: `
          <div class="slide-grid wide">
            <div class="content-panel">
              <span class="time-tag">3 min</span>
              <h2 class="slide-title">Why does carbon appear in so many materials?</h2>
              <p class="slide-subtitle">Look at the four examples. Which are likely to contain carbon compounds? What evidence would prove it?</p>
              <div class="hydrocarbon-strip photo-strip">
                <div class="material-tile" style="background-image: linear-gradient(160deg, rgba(13,45,47,.74), rgba(13,45,47,.1)), url('./assets/ppt/perfume-bottles.jpeg');"><span>Perfumes</span></div>
                <div class="material-tile" style="background-image: linear-gradient(160deg, rgba(13,45,47,.72), rgba(13,45,47,.08)), url('./assets/ppt/dye-bowls.jpeg');"><span>Dyes</span></div>
                <div class="material-tile" style="background-image: linear-gradient(160deg, rgba(13,45,47,.76), rgba(13,45,47,.1)), url('./assets/ruwais-refinery.jpg');"><span>Fuels</span></div>
                <div class="material-tile tile-polymer polymer-media"><span>Plastics</span><small>carbon-chain materials</small></div>
              </div>
              <p class="image-credit">Media: teacher PowerPoint images and local refinery image.</p>
              <div class="reveal">
                <button class="reveal-toggle" type="button">Discussion anchor</button>
                <div class="reveal-content">Most familiar materials contain carbon compounds. Evidence includes formulas with C atoms and structures showing carbon bonded to hydrogen or other atoms.</div>
              </div>
            </div>
          </div>`
      },
      {
        section: "starter",
        title: "Lesson Title",
        duration: "1 min",
        objective: "Name the lesson focus and connect it to the module sequence.",
        content: `
          <div class="slide-grid split-large">
            <div class="content-panel">
              <span class="time-tag">1 min</span>
              <h2 class="slide-title">Introduction to <span class="hero-word">Hydrocarbons</span></h2>
              <p class="slide-subtitle">Today we focus on carbon diversity, hydrocarbon representation, and bonding evidence.</p>
              <div class="keyword-row">
                <span class="keyword">Carbon</span>
                <span class="keyword">Organic compound</span>
                <span class="keyword">Hydrocarbon</span>
                <span class="keyword">Saturated</span>
                <span class="keyword">Unsaturated</span>
              </div>
            </div>
            <div class="visual-panel hydrocarbon-builder-panel">
              <div class="formula-board hydrocarbon-builder">
                <div class="mini-three-scene" data-scene="ethane" aria-label="Rotating ethane hydrocarbon model"></div>
                <div class="print-fallback bond-row">
                  <div class="bond-card"><div class="bond-visual"><div class="bond-lines"><span></span></div></div><h3>C-C</h3><p>carbon-carbon bond</p></div>
                </div>
                <div class="formula"><span>C</span><small>+</small><span>H</span></div>
                <div class="equation-note">Hydrocarbons are built from carbon and hydrogen atoms only.</div>
              </div>
            </div>
          </div>`
      },
      {
        section: "objectives",
        title: "Learning Objectives, Success Criteria, and Keywords",
        duration: "3 min",
        objective: "Use measurable targets to guide learning and self-check progress.",
        content: `
          <div class="slide-grid">
            <div class="content-panel">
              <span class="time-tag">3 min</span>
              <h2 class="slide-title">Three measurable targets</h2>
              <ul class="bullet-list">
                <li>Explain why carbon forms many compounds.</li>
                <li>Define hydrocarbons and represent them using formulas/models.</li>
                <li>Differentiate saturated and unsaturated hydrocarbons using bonding evidence.</li>
              </ul>
            </div>
            <div class="activity-panel">
              <h3>Success criteria</h3>
              <div class="task-grid">
                <div class="task-card"><h3>I can explain</h3><p>Carbon forms four covalent bonds and bonds with itself.</p></div>
                <div class="task-card"><h3>I can model</h3><p>I can translate between formula, structure, and 3D model.</p></div>
                <div class="task-card"><h3>I can classify</h3><p>I can use single, double, or triple bonds as evidence.</p></div>
              </div>
              <div class="keyword-row" style="margin-top: 12px;">
                <span class="keyword">tetravalent</span><span class="keyword">covalent bond</span><span class="keyword">molecular formula</span><span class="keyword">structural formula</span>
              </div>
            </div>
          </div>`
      },
      {
        section: "explore",
        title: "Explore: Carbon Electron Structure",
        duration: "4 min",
        objective: "Explain why carbon forms many compounds.",
        content: `
          <div class="slide-grid">
            <div class="content-panel">
              <span class="time-tag">4 min</span>
              <h2 class="slide-title">Carbon has four bonding opportunities</h2>
              <p class="slide-subtitle">Observe the outer shell. Decide why carbon does not usually gain or lose four electrons.</p>
              <ul class="bullet-list">
                <li>Carbon has 4 valence electrons.</li>
                <li>It can share electrons to make 4 covalent bonds.</li>
                <li>It bonds to carbon atoms, making chains, branches, rings, and networks.</li>
              </ul>
              <div class="reveal">
                <button class="reveal-toggle" type="button">Key idea</button>
                <div class="reveal-content">Carbon's tetravalence and ability to bond with itself explain why carbon forms a huge number of compounds.</div>
              </div>
            </div>
            <div class="visual-panel carbon-visual-panel">
              <div class="carbon-poster">
                <img src="./assets/online/carbon-allotropes.svg" alt="Carbon allotrope structures">
                <div class="carbon-callout top">same element</div>
                <div class="carbon-callout bottom">different bonding patterns</div>
              </div>
              <div class="electron-mini" aria-hidden="true">
                <div class="orbit one"><span class="electron"></span><span class="electron"></span></div>
                <div class="orbit two"><span class="electron"></span><span class="electron"></span><span class="electron"></span><span class="electron"></span></div>
                <div class="nucleus">C</div>
              </div>
            </div>
          </div>`
      },
      {
        section: "explore",
        title: "3D Model: Methane",
        duration: "3 min",
        objective: "Represent a hydrocarbon using a 3D ball-and-stick model.",
        content: `
          <div class="slide-grid">
            <div class="content-panel">
              <span class="time-tag">3 min</span>
              <h2 class="slide-title">Rotate the first hydrocarbon</h2>
              <p class="slide-subtitle">Methane, CH4, is the simplest hydrocarbon. Count atoms, bonds, and element types.</p>
              <ul class="bullet-list">
                <li>1 carbon atom</li>
                <li>4 hydrogen atoms</li>
                <li>4 single covalent bonds</li>
              </ul>
              <div class="reveal">
                <button class="reveal-toggle" type="button">Classification</button>
                <div class="reveal-content">Methane is a hydrocarbon because it contains carbon and hydrogen only.</div>
              </div>
            </div>
            <div class="visual-panel">
              <div class="three-card">
                <div class="three-scene" data-scene="methane" aria-label="Animated 3D methane molecule"></div>
                <div class="print-fallback molecule-field">
                  <span class="bond-line b1"></span><span class="bond-line b2"></span><span class="bond-line b3"></span><span class="bond-line b4"></span>
                  <span class="atom c">C</span><span class="atom h h1">H</span><span class="atom h h2">H</span><span class="atom h h3">H</span><span class="atom h h4">H</span>
                </div>
                <div class="scene-caption">Screen: animated Three.js model. PDF: static ball-and-stick fallback.</div>
              </div>
            </div>
          </div>`
      },
      {
        section: "explain",
        title: "Organic Compounds",
        duration: "3 min",
        objective: "Identify the main characteristic of organic compounds.",
        content: `
          <div class="slide-grid">
            <div class="content-panel">
              <span class="time-tag">3 min</span>
              <h2 class="slide-title">Most organic compounds contain carbon</h2>
              <p class="slide-subtitle">The Teacher Edition begins Lesson 1 with organic compounds because hydrocarbons are a major family inside organic chemistry.</p>
              <ul class="bullet-list">
                <li>Organic chemistry studies carbon-containing compounds.</li>
                <li>Carbon can bond with H, O, N, halogens, sulfur, and other carbon atoms.</li>
                <li>Hydrocarbons are narrower: carbon and hydrogen only.</li>
              </ul>
            </div>
            <div class="activity-panel">
              <div class="source-grid">
                <div class="photo-card" style="background-image: url('./assets/ppt/perfume-bottles.jpeg');"><span>fragrance chemistry</span></div>
                <div class="photo-card" style="background-image: url('./assets/ppt/dye-bowls.jpeg');"><span>color compounds</span></div>
              </div>
              <h3>Student quick sort</h3>
              <div class="choice-grid compact">
                <div class="choice-card"><strong>CO2</strong><div class="structure">O=C=O</div><p>carbon + oxygen</p></div>
                <div class="choice-card"><strong>C2H6</strong><div class="structure">H3C-CH3</div><p>carbon + hydrogen</p></div>
                <div class="choice-card"><strong>C2H5OH</strong><div class="structure">C-H-O</div><p>oxygen present</p></div>
              </div>
            </div>
          </div>`
      },
      {
        section: "activities",
        title: "Student Activity: Hydrocarbon or Not?",
        duration: "4 min",
        objective: "Define hydrocarbons and classify examples using formulas.",
        content: `
          <div class="slide-grid split-large">
            <div class="content-panel">
              <span class="time-tag">4 min</span>
              <h2 class="slide-title">Sort by evidence, not by guessing</h2>
              <p class="slide-subtitle">Work with your partner. Put each example into Hydrocarbon or Not a Hydrocarbon, then justify one decision.</p>
              <div class="evidence-scanner">
                <div><strong>Scan 1</strong><span>Does it contain carbon?</span></div>
                <div><strong>Scan 2</strong><span>Does it contain hydrogen?</span></div>
                <div><strong>Scan 3</strong><span>Are there any other elements?</span></div>
              </div>
              <div class="reveal">
                <button class="reveal-toggle" type="button">Sorted answer</button>
                <div class="reveal-content">Hydrocarbons: CH4, C3H8, C6H6. Not hydrocarbons: C2H5OH, NaCl, CO. Hydrocarbons contain carbon and hydrogen only.</div>
              </div>
            </div>
            <div class="activity-panel">
              <div class="choice-grid">
                <div class="choice-card"><strong>CH4</strong><div class="structure">C + H only</div><p>Hydrocarbon?</p></div>
                <div class="choice-card"><strong>C3H8</strong><div class="structure">C-C-C</div><p>Hydrocarbon?</p></div>
                <div class="choice-card"><strong>C2H5OH</strong><div class="structure">O present</div><p>Hydrocarbon?</p></div>
                <div class="choice-card"><strong>NaCl</strong><div class="structure">no C</div><p>Hydrocarbon?</p></div>
                <div class="choice-card"><strong>C6H6</strong><div class="structure">ring</div><p>Hydrocarbon?</p></div>
                <div class="choice-card"><strong>CO</strong><div class="structure">O present</div><p>Hydrocarbon?</p></div>
              </div>
            </div>
          </div>`
      },
      {
        section: "explain",
        title: "Models: Formula to 3D",
        duration: "3 min",
        objective: "Represent hydrocarbons using molecular, structural, ball-and-stick, and space-filling models.",
        content: `
          <div class="slide-grid wide">
            <div class="content-panel">
              <span class="time-tag">3 min</span>
              <h2 class="slide-title">One molecule, four representations</h2>
              <p class="slide-subtitle">Each model shows useful information and hides other information.</p>
              <div class="model-row model-lab representation-lab">
                <div class="model-card representation-card"><div class="model-icon formula-model">C2H6</div><h3>Molecular</h3><p>Counts atoms only.</p></div>
                <div class="model-card representation-card"><div class="model-icon structure-model">H3C-CH3</div><h3>Structural</h3><p>Shows atom connections.</p></div>
                <div class="model-card representation-card model-3d-card"><div class="mini-three-scene" data-scene="ethane" aria-label="Ethane ball-and-stick model"></div><div class="print-fallback model-icon structure-model">H3C-CH3</div><h3>Ball-stick</h3><p>Shows geometry and bonds.</p></div>
                <div class="model-card representation-card model-3d-card"><div class="mini-three-scene" data-scene="bonds" aria-label="Single double and triple carbon bond models"></div><div class="print-fallback bond-lines"><span></span><span></span><span></span></div><h3>Bond evidence</h3><p>Compare single, double, and triple bonds.</p></div>
              </div>
              <div class="reveal">
                <button class="reveal-toggle" type="button">Best model for bonding evidence</button>
                <div class="reveal-content">Structural and ball-and-stick models are strongest for identifying single, double, and triple bonds.</div>
              </div>
            </div>
          </div>`
      },
      {
        section: "explain",
        title: "Saturated and Unsaturated Hydrocarbons",
        duration: "4 min",
        objective: "Differentiate saturated and unsaturated hydrocarbons using bonding evidence.",
        content: `
          <div class="slide-grid">
            <div class="content-panel">
              <span class="time-tag">4 min</span>
              <h2 class="slide-title">Bond type is the evidence</h2>
              <ul class="bullet-list">
                <li><strong>Saturated:</strong> carbon-carbon single bonds only.</li>
                <li><strong>Unsaturated:</strong> at least one carbon-carbon double or triple bond.</li>
                <li>Unsaturated hydrocarbons can usually react in addition reactions because multiple bonds can open.</li>
              </ul>
              <div class="reveal">
                <button class="reveal-toggle" type="button">Simple test</button>
                <div class="reveal-content">If the carbon skeleton contains C=C or C=C-like multiple bonding, classify it as unsaturated. If it has only C-C single bonds, classify it as saturated.</div>
              </div>
            </div>
            <div class="activity-panel">
              <div class="bond-row bond-showcase molecule-showcase">
                <div class="bond-card molecule-card"><div class="bond-visual model-visual"><div class="mini-three-scene" data-scene="bond-single" aria-label="Single carbon-carbon bond model"></div><div class="print-fallback bond-lines"><span></span></div></div><h3>Single</h3><p>Saturated evidence.</p></div>
                <div class="bond-card molecule-card"><div class="bond-visual model-visual"><div class="mini-three-scene" data-scene="bond-double" aria-label="Double carbon-carbon bond model"></div><div class="print-fallback bond-lines"><span></span><span></span></div></div><h3>Double</h3><p>Unsaturated evidence.</p></div>
                <div class="bond-card molecule-card"><div class="bond-visual model-visual"><div class="mini-three-scene" data-scene="bond-triple" aria-label="Triple carbon-carbon bond model"></div><div class="print-fallback bond-lines"><span></span><span></span><span></span></div></div><h3>Triple</h3><p>Unsaturated evidence.</p></div>
              </div>
            </div>
          </div>`
      },
      {
        section: "explore",
        title: "Interactive Bond Comparison",
        duration: "3 min",
        objective: "Compare single, double, and triple bonds using a visual model.",
        content: `
          <div class="slide-grid">
            <div class="content-panel">
              <span class="time-tag">3 min</span>
              <h2 class="slide-title">Watch the bond evidence</h2>
              <p class="slide-subtitle">Three.js shows the same two-carbon idea with increasing bond order.</p>
              <ul class="bullet-list">
                <li>Single bond: one shared pair.</li>
                <li>Double bond: two shared pairs.</li>
                <li>Triple bond: three shared pairs.</li>
              </ul>
            </div>
            <div class="visual-panel">
              <div class="three-card">
                <div class="three-scene" data-scene="bonds" aria-label="Animated 3D carbon bond comparison"></div>
                <div class="print-fallback bond-row">
                  <div class="bond-card"><div class="bond-visual"><div class="bond-lines"><span></span></div></div><h3>C-C</h3><p>Single</p></div>
                  <div class="bond-card"><div class="bond-visual"><div class="bond-lines"><span></span><span></span></div></div><h3>C=C</h3><p>Double</p></div>
                  <div class="bond-card"><div class="bond-visual"><div class="bond-lines"><span></span><span></span><span></span></div></div><h3>C#C</h3><p>Triple</p></div>
                </div>
                <div class="scene-caption">Animated model for class discussion; static bond comparison for PDF.</div>
              </div>
            </div>
          </div>`
      },
      {
        section: "activities",
        title: "Differentiated Task",
        duration: "5 min",
        objective: "Apply bonding evidence at support, core, and challenge levels.",
        content: `
          <div class="slide-grid wide">
            <div class="content-panel">
              <span class="time-tag">5 min</span>
              <h2 class="slide-title">Choose your evidence level</h2>
              <div class="task-grid">
                <div class="task-card"><span class="badge support">Support</span><h3>Identify</h3><p>Circle carbon and hydrogen in CH4, C2H6, C2H4. Which are hydrocarbons?</p></div>
                <div class="task-card"><span class="badge core">Core</span><h3>Compare</h3><p>Classify C2H6, C2H4, and C2H2 as saturated or unsaturated. State the bond evidence.</p></div>
                <div class="task-card"><span class="badge challenge">Challenge</span><h3>Predict</h3><p>Which compound would react more easily in an addition reaction? Justify with bond structure.</p></div>
              </div>
              <div class="reveal">
                <button class="reveal-toggle" type="button">Teacher check</button>
                <div class="reveal-content">Support checks definition, core checks classification, and challenge checks structure-reactivity reasoning.</div>
              </div>
            </div>
          </div>`
      },
      {
        section: "activities",
        title: "UAE Real-Life Connection",
        duration: "3 min",
        objective: "Connect hydrocarbons to UAE industry, materials, and environmental responsibility.",
        content: `
          <div class="slide-grid">
            <div class="content-panel">
              <span class="time-tag">3 min</span>
              <h2 class="slide-title">Hydrocarbons are a real UAE chemistry story</h2>
              <p class="slide-subtitle">Fuels and petrochemicals connect molecular structure to industry, transport, materials, and sustainability decisions.</p>
              <ul class="bullet-list">
                <li>Crude oil and natural gas contain many hydrocarbons.</li>
                <li>Refining separates mixtures into useful fractions.</li>
                <li>Cleaner fuels and responsible use connect chemistry to sustainability.</li>
              </ul>
              <div class="reveal">
                <button class="reveal-toggle" type="button">Create prompt</button>
                <div class="reveal-content">Propose one UAE-linked product or environmental challenge where understanding hydrocarbons matters. Include the compound family and one safety or sustainability point.</div>
              </div>
            </div>
            <div class="visual-panel" style="padding: 0;">
              <div class="image-frame" style="background-image: url('./assets/ruwais-refinery.jpg');">
                <div class="image-caption">From molecule models to refining, fuels, materials, and environmental decisions.</div>
              </div>
            </div>
          </div>`
      },
      {
        section: "activities",
        title: "Technology and AI Activity",
        duration: "3 min",
        objective: "Use digital tools to support classification and explanation.",
        content: `
          <div class="slide-grid">
            <div class="content-panel">
              <span class="time-tag">3 min</span>
              <h2 class="slide-title">Digital checkpoint</h2>
              <p class="slide-subtitle">Teacher selects one platform depending on class access.</p>
              <div class="keyword-row">
                <span class="keyword">Classkick</span><span class="keyword">Padlet</span><span class="keyword">Kahoot</span><span class="keyword">Mentimeter</span><span class="keyword">AI prompt</span>
              </div>
              <div class="teacher-note">Placeholder: replace with live class link or QR code when provided.</div>
            </div>
            <div class="activity-panel tech-panel">
              <div class="qr-card" aria-label="Placeholder QR code"><span></span></div>
              <h3>AI-supported prompt card</h3>
              <p class="slide-subtitle">Ask an AI tool: "Give me three hydrocarbon formulas. I will classify them as saturated or unsaturated and explain the bond evidence."</p>
              <div class="reveal">
                <button class="reveal-toggle" type="button">Safety rule</button>
                <div class="reveal-content">Students must verify AI answers using the class definition and bond evidence. AI is a practice partner, not the final authority.</div>
              </div>
            </div>
          </div>`
      },
      {
        section: "formative",
        title: "Formative Assessment: Bloom Levels",
        duration: "3 min",
        objective: "Check learning across remembering, understanding, and applying.",
        content: `
          <div class="slide-grid">
            <div class="content-panel">
              <span class="time-tag">3 min</span>
              <h2 class="slide-title">Quick evidence check</h2>
              <div class="bloom-ladder">
                <div class="bloom-step"><strong>Remember</strong><span>Define hydrocarbon.</span></div>
                <div class="bloom-step"><strong>Understand</strong><span>Explain why carbon forms four bonds.</span></div>
                <div class="bloom-step"><strong>Apply</strong><span>Classify C3H8 and C3H6.</span></div>
              </div>
              <div class="reveal">
                <button class="reveal-toggle" type="button">Answer check</button>
                <div class="reveal-content">Hydrocarbon: carbon and hydrogen only. Carbon has four valence electrons and shares them. C3H8 is saturated; C3H6 is likely unsaturated or cyclic, so structure is needed.</div>
              </div>
            </div>
            <div class="activity-panel">
              <h3>Teacher scan</h3>
              <p class="slide-subtitle">Ask students to hold up 1, 2, or 3 fingers for confidence. Reteach the weakest point in one minute.</p>
            </div>
          </div>`
      },
      {
        section: "formative",
        title: "HOTS Question",
        duration: "3 min",
        objective: "Analyze and evaluate bonding evidence to predict reactivity.",
        content: `
          <div class="slide-grid">
            <div class="content-panel">
              <span class="time-tag">3 min</span>
              <h2 class="slide-title">Predict: which molecule reacts more easily?</h2>
              <p class="slide-subtitle">A compound with a C=C bond is compared with a similar compound that has only C-C single bonds. Which is more likely to undergo addition reaction?</p>
              <div class="reveal">
                <button class="reveal-toggle" type="button">Reasoned answer</button>
                <div class="reveal-content">The compound with a C=C bond is more likely to undergo addition because the multiple bond can open and form new single bonds.</div>
              </div>
            </div>
            <div class="activity-panel">
              <div class="bloom-ladder">
                <div class="bloom-step"><strong>Analyze</strong><span>Compare bond structures.</span></div>
                <div class="bloom-step"><strong>Evaluate</strong><span>Justify the predicted reactivity.</span></div>
                <div class="bloom-step"><strong>Create</strong><span>Write a new example pair.</span></div>
              </div>
            </div>
          </div>`
      },
      {
        section: "summary",
        title: "Summary",
        duration: "2 min",
        objective: "Summarize the key ideas from Lesson 1.",
        content: `
          <div class="slide-grid wide">
            <div class="content-panel">
              <span class="time-tag">2 min</span>
              <h2 class="slide-title">Today in four takeaways</h2>
              <div class="summary-grid">
                <div class="summary-card"><h3>Carbon diversity</h3><p>Carbon forms many compounds because it makes four covalent bonds and bonds to itself.</p></div>
                <div class="summary-card"><h3>Hydrocarbons</h3><p>Hydrocarbons contain carbon and hydrogen only.</p></div>
                <div class="summary-card"><h3>Models</h3><p>Different models show formula, connectivity, geometry, or space.</p></div>
                <div class="summary-card"><h3>Saturation</h3><p>Single C-C bonds indicate saturated; C=C or C#C indicates unsaturated.</p></div>
                <div class="summary-card"><h3>Evidence</h3><p>Classification must be supported by formula and bond structure.</p></div>
                <div class="summary-card"><h3>Real life</h3><p>Hydrocarbons connect to UAE fuels, materials, industry, and sustainability.</p></div>
              </div>
            </div>
          </div>`
      },
      {
        section: "exit",
        title: "Exit Ticket",
        duration: "3 min",
        objective: "Demonstrate mastery of the three lesson objectives.",
        content: `
          <div class="slide-grid wide">
            <div class="content-panel">
              <span class="time-tag">3 min</span>
              <h2 class="slide-title">Exit check: three moves before you leave</h2>
              <div class="task-grid">
                <div class="exit-card"><h3>1. Explain</h3><p>Why can carbon form many different compounds?</p></div>
                <div class="exit-card"><h3>2. Define</h3><p>Write one hydrocarbon formula and explain why it qualifies.</p></div>
                <div class="exit-card"><h3>3. Differentiate</h3><p>Classify C2H6 and C2H4 using bond evidence.</p></div>
              </div>
              <div class="reveal">
                <button class="reveal-toggle" type="button">Teacher answer guide</button>
                <div class="reveal-content">Carbon forms four covalent bonds and bonds with itself. A valid hydrocarbon has C and H only. C2H6 is saturated; C2H4 is unsaturated because it contains a C=C bond.</div>
              </div>
            </div>
          </div>`
      },
      {
        section: "reflection",
        title: "Reflection and Homework",
        duration: "1 min",
        objective: "Reflect on learning and extend hydrocarbon understanding independently.",
        content: `
          <div class="slide-grid">
            <div class="content-panel">
              <span class="time-tag">1 min</span>
              <h2 class="slide-title">What changed in your understanding?</h2>
              <p class="slide-subtitle">Complete one reflection sentence and one extension task.</p>
              <ul class="bullet-list">
                <li>Before today's lesson I thought...</li>
                <li>Now I can explain...</li>
                <li>I still need practice with...</li>
              </ul>
            </div>
            <div class="activity-panel">
              <h3>Homework / extension</h3>
              <p class="slide-subtitle">Research one UAE-linked hydrocarbon product or environmental issue. Prepare a 60-second explanation using: formula or family, use, benefit, and one safety or sustainability concern.</p>
              <div class="teacher-note">Next lesson: naming and drawing alkanes.</div>
            </div>
          </div>`
      }
    ]
  },
  {
    id: "lesson-2",
    short: "L2",
    title: "Alkanes",
    minutes: 45,
    status: "Planned",
    sourcePages: "Teacher Edition lesson sequence",
    outcomes: [
      "IUPAC naming of straight-chain, branched, substituted, and cycloalkanes.",
      "Draw alkane structures from names.",
      "Compare physical properties of related compounds."
    ]
  },
  {
    id: "lesson-3",
    short: "L3",
    title: "Alkenes and Alkynes",
    minutes: 90,
    status: "Planned",
    sourcePages: "Teacher Edition lesson sequence",
    outcomes: [
      "IUPAC naming of alkenes and alkynes.",
      "Draw structures from names.",
      "Compare uses, properties, and 3D models of alkane, alkene, and alkyne families."
    ]
  },
  {
    id: "lesson-4",
    short: "L4",
    title: "Hydrocarbon Isomers",
    minutes: 45,
    status: "Planned",
    sourcePages: "Teacher Edition lesson sequence",
    outcomes: [
      "Compare structural, geometric, stereoisomers, chirality, and optical isomers.",
      "Explain cis/trans evidence.",
      "Use models or simulations to compare isomers."
    ]
  },
  {
    id: "lesson-5",
    short: "L5",
    title: "Aromatic Hydrocarbons",
    minutes: 45,
    status: "Planned",
    sourcePages: "Teacher Edition pages 33-38",
    outcomes: [
      "Describe benzene structure and reactivity.",
      "Compare aliphatic and aromatic hydrocarbons.",
      "Name and draw aromatic compounds from IUPAC names."
    ]
  }
];

lessons.forEach((lesson) => {
  if (!lesson.slides) {
    lesson.slides = [
      {
        section: "agenda",
        title: `${lesson.title}: Build Space`,
        duration: `${lesson.minutes} min`,
        objective: "Lesson is isolated and ready for full slide development.",
        content: `
          <div class="placeholder-lesson">
            <div class="content-panel">
              <span class="time-tag">${lesson.minutes} min</span>
              <h2 class="slide-title">${lesson.title}</h2>
              <p class="slide-subtitle">This lesson tab already has independent navigation state and will not interfere with Lesson 1.</p>
              <div class="teacher-note">Status: ${lesson.status}. Full deck to be built next from Excel outcomes and Teacher Edition details.</div>
            </div>
            <div class="activity-panel">
              <h3>Official outcome scope</h3>
              <ul class="outcome-list">${lesson.outcomes.map((outcome) => `<li>${outcome}</li>`).join("")}</ul>
            </div>
          </div>`
      }
    ];
  }
});

const state = {
  activeLessonId: "lesson-1",
  view: "landing",
  printMode: "active",
  slideIndexByLesson: Object.fromEntries(lessons.map((lesson) => [lesson.id, 0])),
  reveals: new Set()
};

const elements = {
  tabs: document.querySelector("#lessonTabs"),
  decks: document.querySelector("#lessonDecks"),
  landing: document.querySelector("#moduleLanding"),
  moduleMap: document.querySelector("#moduleMap"),
  flowList: document.querySelector("#flowList"),
  sidebarLesson: document.querySelector("#sidebarLesson"),
  slideCounter: document.querySelector("#slideCounter"),
  progressFill: document.querySelector("#progressFill"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  printButton: document.querySelector("#printButton"),
  printModeButton: document.querySelector("#printModeButton"),
  homeButton: document.querySelector("#homeButton"),
  startLessonButton: document.querySelector("#startLessonButton")
};

const dateFormatter = new Intl.DateTimeFormat(undefined, { year: "numeric", month: "long", day: "numeric" });
const dayFormatter = new Intl.DateTimeFormat(undefined, { weekday: "long" });
const today = new Date();

function activeLesson() {
  return lessons.find((lesson) => lesson.id === state.activeLessonId);
}

function activeSlideIndex() {
  return state.slideIndexByLesson[state.activeLessonId] ?? 0;
}

function activeSlide() {
  const lesson = activeLesson();
  return lesson.slides[activeSlideIndex()];
}

function buildModuleMap() {
  elements.moduleMap.innerHTML = lessons.map((lesson, index) => `
    <article class="module-card ${lesson.status === "Ready" ? "is-ready" : ""}">
      <span>${index + 1}</span>
      <div>
        <h3>${lesson.title}</h3>
        <p>${lesson.status} - ${lesson.minutes} min - ${lesson.outcomes[0]}</p>
      </div>
    </article>
  `).join("");
}

function buildTabs() {
  elements.tabs.innerHTML = lessons.map((lesson, index) => `
    <button class="lesson-tab" type="button" data-lesson="${lesson.id}" aria-label="Open ${lesson.title}">
      <span>${index + 1}</span>
      <span><strong>${lesson.short}: ${lesson.title}</strong><small>${lesson.status}</small></span>
    </button>
  `).join("");
}

function activeClassIndexId(slideIndex) {
  const item = [...classIndexItems].reverse().find((candidate) => slideIndex >= candidate.start);
  return item?.id ?? classIndexItems[0].id;
}

function classIndexMarkup(activeId) {
  return `
    ${classIndexItems.map((item) => `
      <li class="flow-item ${item.id === activeId ? "is-active" : ""} ${item.tone === "final" ? "is-final" : ""}" data-index-item="${item.id}">
        <div class="flow-button"><strong>${item.label}</strong></div>
      </li>
    `).join("")}
  `;
}

function printSidebarMarkup(lesson, slideIndex) {
  const activeId = activeClassIndexId(slideIndex);
  return `
    <aside class="print-sidebar class-sidebar" aria-hidden="true">
      <div class="sidebar-head">
        <strong>Class index</strong>
      </div>
      <ol class="flow-list">
        ${classIndexMarkup(activeId)}
      </ol>
    </aside>
  `;
}

function buildDecks() {
  elements.decks.innerHTML = lessons.map((lesson) => `
    <section class="lesson-deck" data-lesson="${lesson.id}" aria-label="${lesson.title}">
      ${lesson.slides.map((slide, index) => `
        <article class="slide-page" data-section="${slide.section}" data-slide="${index}">
          ${printSidebarMarkup(lesson, index)}
          <div class="slide-stage">
            <header class="metadata-bar">
              <div class="meta-main">
                <h2>${lesson.title}</h2>
                <p>${slide.objective}</p>
              </div>
              <div class="meta-date">
                <span class="meta-chip">${dayFormatter.format(today)}</span>
                <span class="meta-chip">${dateFormatter.format(today)}</span>
                <span class="meta-chip">${slide.duration}</span>
                <span class="meta-chip">${index + 1} / ${lesson.slides.length}</span>
              </div>
            </header>
            <section class="slide-content">
              ${slide.content}
            </section>
          </div>
        </article>
      `).join("")}
    </section>
  `).join("");

  document.querySelectorAll(".reveal").forEach((reveal, revealIndex) => {
    const slidePage = reveal.closest(".slide-page");
    const deck = reveal.closest(".lesson-deck");
    const key = revealKey(deck.dataset.lesson, Number(slidePage.dataset.slide), revealIndex);
    reveal.dataset.revealKey = key;
    const button = reveal.querySelector(".reveal-toggle");
    button.addEventListener("click", () => {
      reveal.classList.toggle("is-open");
      if (reveal.classList.contains("is-open")) {
        state.reveals.add(key);
      } else {
        state.reveals.delete(key);
      }
    });
  });
}

function revealKey(lessonId, slideIndex, revealIndex) {
  return `${lessonId}:${slideIndex}:${revealIndex}`;
}

function buildFlow() {
  elements.flowList.innerHTML = classIndexMarkup(activeClassIndexId(activeSlideIndex()));
}

function updateUI() {
  const lesson = activeLesson();
  const slideIndex = activeSlideIndex();
  const total = lesson.slides.length;

  elements.landing.hidden = state.view !== "landing";
  elements.decks.hidden = state.view === "landing";

  document.querySelectorAll(".lesson-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.lesson === state.activeLessonId);
  });

  document.querySelectorAll(".lesson-deck").forEach((deck) => {
    deck.classList.toggle("is-active", deck.dataset.lesson === state.activeLessonId);
    deck.querySelectorAll(".slide-page").forEach((page) => {
      page.classList.toggle("is-current", Number(page.dataset.slide) === slideIndex);
    });
  });

  elements.sidebarLesson.textContent = "Class index";
  elements.slideCounter.textContent = `Slide ${slideIndex + 1} / ${total}`;
  elements.progressFill.style.width = `${((slideIndex + 1) / total) * 100}%`;
  elements.prevButton.disabled = state.view === "landing" || slideIndex === 0;
  elements.nextButton.disabled = state.view !== "landing" && slideIndex === total - 1;

  buildFlow();
  elements.flowList.querySelectorAll(".flow-item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.indexItem === activeClassIndexId(slideIndex));
  });

  document.querySelectorAll(".reveal").forEach((reveal) => {
    reveal.classList.toggle("is-open", state.reveals.has(reveal.dataset.revealKey));
  });

  document.body.dataset.printMode = state.printMode;
  elements.printModeButton.textContent = state.printMode === "active" ? "Print: Active lesson" : "Print: All lessons";
}

function enterDeck(lessonId = state.activeLessonId, slideIndex) {
  state.activeLessonId = lessonId;
  if (slideIndex !== undefined) {
    state.slideIndexByLesson[lessonId] = slideIndex;
  }
  state.view = "deck";
  updateUI();
}

function goToLesson(lessonId) {
  enterDeck(lessonId);
}

function nextSlide() {
  if (state.view === "landing") {
    enterDeck(state.activeLessonId, 0);
    return;
  }
  const lesson = activeLesson();
  const current = activeSlideIndex();
  if (current < lesson.slides.length - 1) {
    state.slideIndexByLesson[state.activeLessonId] = current + 1;
    updateUI();
  }
}

function previousSlide() {
  if (state.view === "landing") return;
  const current = activeSlideIndex();
  if (current > 0) {
    state.slideIndexByLesson[state.activeLessonId] = current - 1;
    updateUI();
  }
}

function firstSlide() {
  if (state.view === "landing") return;
  state.slideIndexByLesson[state.activeLessonId] = 0;
  updateUI();
}

function lastSlide() {
  if (state.view === "landing") return;
  const lesson = activeLesson();
  state.slideIndexByLesson[state.activeLessonId] = lesson.slides.length - 1;
  updateUI();
}

function initThreeScenes() {
  document.querySelectorAll(".three-scene, .mini-three-scene").forEach((container) => {
    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.set(0, 0.35, container.classList.contains("mini-three-scene") ? 6 : 7);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      container.appendChild(renderer.domElement);

      scene.add(new THREE.AmbientLight(0xffffff, 1.2));
      const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
      keyLight.position.set(3, 5, 4);
      scene.add(keyLight);

      const group = new THREE.Group();
      scene.add(group);

      const sceneType = container.dataset.scene;
      if (sceneType === "methane") {
        buildMethane(group);
      } else if (sceneType === "ethane") {
        buildEthane(group);
      } else if (sceneType === "bond-single") {
        buildCarbonBondModel(group, 1, "C-C");
      } else if (sceneType === "bond-double") {
        buildCarbonBondModel(group, 2, "C=C");
      } else if (sceneType === "bond-triple") {
        buildCarbonBondModel(group, 3, "C#C");
      } else {
        buildBondScene(group);
      }

      const resize = () => {
        const width = container.clientWidth || 400;
        const height = container.clientHeight || 300;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      resize();
      window.addEventListener("resize", resize);

      const animate = () => {
        if (sceneType === "methane") {
          group.rotation.y += 0.008;
          group.rotation.x = Math.sin(performance.now() * 0.001) * 0.08;
        } else {
          const t = performance.now() * 0.001;
          group.rotation.y = Math.sin(t) * 0.18;
          group.rotation.x = Math.sin(t * 0.8) * 0.04;
        }
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      animate();
    } catch (error) {
      container.classList.add("three-failed");
      container.textContent = "3D model unavailable. Static fallback will appear in print.";
      console.warn("Three.js scene failed", error);
    }
  });
}

function material(color, metalness = 0.12, roughness = 0.34) {
  return new THREE.MeshStandardMaterial({ color, metalness, roughness });
}

function addAtom(group, label, color, position, radius) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 32), material(color));
  mesh.position.copy(position);
  group.add(mesh);

  const sprite = makeLabel(label);
  sprite.position.copy(position.clone().multiplyScalar(1.15));
  group.add(sprite);
  return mesh;
}

function addBond(group, start, end, color = 0xd8e8ea, radius = 0.065) {
  const midpoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();
  const geometry = new THREE.CylinderGeometry(radius, radius, length, 24);
  const mesh = new THREE.Mesh(geometry, material(color, 0.05, 0.22));
  mesh.position.copy(midpoint);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());
  group.add(mesh);
  return mesh;
}

function makeLabel(text, color) {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const context = canvas.getContext("2d");
  context.fillStyle = "rgba(255,255,255,0)";
  context.fillRect(0, 0, 128, 128);
  context.fillStyle = color || (text === "C" ? "#ffffff" : "#102028");
  context.font = "900 48px Segoe UI, Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(0.7, 0.7, 0.7);
  return sprite;
}

function buildMethane(group) {
  const carbon = new THREE.Vector3(0, 0, 0);
  const hydrogens = [
    new THREE.Vector3(1.55, 1.25, 1.05),
    new THREE.Vector3(-1.55, -1.25, 1.05),
    new THREE.Vector3(-1.25, 1.4, -1.1),
    new THREE.Vector3(1.25, -1.4, -1.1)
  ];

  addAtom(group, "C", 0x15262d, carbon, 0.62);
  hydrogens.forEach((position) => {
    addBond(group, carbon, position);
    addAtom(group, "H", 0xf1f7f8, position, 0.38);
  });
}

function buildEthane(group) {
  const left = new THREE.Vector3(-0.72, 0, 0);
  const right = new THREE.Vector3(0.72, 0, 0);
  addAtom(group, "C", 0x15262d, left, 0.48);
  addAtom(group, "C", 0x15262d, right, 0.48);
  addBond(group, left, right, 0xf2b134, 0.055);

  [
    { base: left, offset: new THREE.Vector3(-0.88, 0.8, 0.55) },
    { base: left, offset: new THREE.Vector3(-0.88, -0.8, 0.55) },
    { base: left, offset: new THREE.Vector3(-0.72, 0, -0.85) },
    { base: right, offset: new THREE.Vector3(0.88, 0.8, -0.55) },
    { base: right, offset: new THREE.Vector3(0.88, -0.8, -0.55) },
    { base: right, offset: new THREE.Vector3(0.72, 0, 0.85) }
  ].forEach(({ base, offset }) => {
    const position = base.clone().add(offset);
    addBond(group, base, position, 0xd8e8ea, 0.042);
    addAtom(group, "H", 0xf1f7f8, position, 0.26);
  });
}

function buildCarbonBondModel(group, count, labelText) {
  const left = new THREE.Vector3(-0.65, 0, 0);
  const right = new THREE.Vector3(0.65, 0, 0);
  addAtom(group, "C", 0x16262d, left, 0.42);
  addAtom(group, "C", 0x16262d, right, 0.42);
  const offsets = count === 1 ? [0] : count === 2 ? [-0.13, 0.13] : [-0.22, 0, 0.22];
  offsets.forEach((offset) => {
    addBond(group, left.clone().add(new THREE.Vector3(0, offset, 0)), right.clone().add(new THREE.Vector3(0, offset, 0)), 0xf2b134, 0.045);
  });

  const label = makeLabel(labelText, "#ffffff");
  label.position.set(0, -0.82, 0);
  label.scale.set(0.86, 0.42, 1);
  group.add(label);
}

function buildBondScene(group) {
  const sets = [
    { x: -2, count: 1, label: "C-C" },
    { x: 0, count: 2, label: "C=C" },
    { x: 2, count: 3, label: "C#C" }
  ];

  sets.forEach((set) => {
    const left = new THREE.Vector3(set.x - 0.5, 0, 0);
    const right = new THREE.Vector3(set.x + 0.5, 0, 0);
    addAtom(group, "C", 0x16262d, left, 0.38);
    addAtom(group, "C", 0x16262d, right, 0.38);
    const offsets = set.count === 1 ? [0] : set.count === 2 ? [-0.12, 0.12] : [-0.2, 0, 0.2];
    offsets.forEach((offset) => addBond(group, left.clone().add(new THREE.Vector3(0, offset, 0)), right.clone().add(new THREE.Vector3(0, offset, 0)), 0xf2b134, 0.045));

    const label = makeLabel(set.label, "#ffffff");
    label.position.set(set.x, -0.88, 0);
    label.scale.set(0.78, 0.38, 1);
    group.add(label);
  });
}

function wireEvents() {
  elements.tabs.addEventListener("click", (event) => {
    const tab = event.target.closest(".lesson-tab");
    if (!tab) return;
    goToLesson(tab.dataset.lesson);
  });

  elements.startLessonButton.addEventListener("click", () => {
    enterDeck("lesson-1", 0);
  });

  elements.homeButton.addEventListener("click", () => {
    state.view = "landing";
    updateUI();
  });

  elements.prevButton.addEventListener("click", previousSlide);
  elements.nextButton.addEventListener("click", nextSlide);

  elements.printButton.addEventListener("click", () => window.print());
  elements.printModeButton.addEventListener("click", () => {
    state.printMode = state.printMode === "active" ? "all" : "active";
    updateUI();
  });

  document.addEventListener("keydown", (event) => {
    const tag = event.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      nextSlide();
    }
    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      previousSlide();
    }
  });
}

buildModuleMap();
buildTabs();
buildDecks();
wireEvents();
updateUI();
initThreeScenes();
