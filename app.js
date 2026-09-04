/* NOVA MASTER APPLICATION BUNDLE */

/* --- config.js --- */
/**
 * NOVA CONFIGURATION & DATA REPOSITORY
 * Global city baselines, zone metadata, simulation scenarios, and timeline data.
 */

window.NOVA_CONFIG = {
  // Baseline City Telemetry State
  baseline: {
    population: 2450000,
    energyEfficiency: 92.4, // %
    airQualityIndex: 14,    // AQI (lower is better)
    trafficCongestion: 12,  // %
    healthcareResponse: 3.4,// minutes
    renewableMix: 88.6,     // %
    sustainability: 89,     // score 0-100
    safety: 90,             // score 0-100
    efficiency: 92,         // score 0-100
    wellbeing: 91,          // score 0-100
    innovation: 85          // score 0-100
  },

  // Section 01: Six Living City Zones
  zones: {
    transport: {
      id: 'transport',
      index: '01',
      title: 'Autonomous Transit & Mobility Grid',
      category: 'Mobility Network',
      description: 'Distributed autonomous transit networks dynamically optimize traffic flow using real-time predictive sensor meshes, dedicated emergency channels, and zero-emission multimodal fleets.',
      color: '#00f0ff',
      coordinates: { x: 320, y: 220 },
      stats: [
        { label: 'Traffic Congestion', value: 'LOW', delta: '-68% vs conventional' },
        { label: 'Public Transit Efficiency', value: '94%', delta: '+18% ridership throughput' },
        { label: 'Autonomous Mobility Share', value: '82%', delta: 'Level 5 synchronized' },
        { label: 'CO₂ Transit Reduction', value: '-31%', delta: '140k metric tons/yr' }
      ],
      features: [
        'Decentralized vehicle-to-infrastructure (V2X) mesh',
        'Dynamic signal prioritization for high-occupancy transit',
        'Predictive incident avoidance algorithms',
        'Sub-second emergency corridor clearance'
      ],
      widgetType: 'transport'
    },
    energy: {
      id: 'energy',
      index: '02',
      title: 'Symbiotic Clean Energy Grid',
      category: 'Power & Storage',
      description: 'A responsive bidirectional energy lattice integrating distributed rooftop photovoltaics, tidal generators, and solid-state sub-grid storage to ensure continuous self-balancing power.',
      color: '#8b5cf6',
      coordinates: { x: 580, y: 160 },
      stats: [
        { label: 'Renewable Power Share', value: '88.6%', delta: 'Peak 97.2% solar/wind' },
        { label: 'Smart Grid Efficiency', value: '96.8%', delta: 'Sub-1% distribution loss' },
        { label: 'Decentralized Storage', value: '1.2 GWh', delta: 'Solid-state buffers' },
        { label: 'Peak Load Shaving', value: '38%', delta: 'Real-time automated shedding' }
      ],
      features: [
        'Autonomous microgrid islanding capability',
        'Predictive load forecasting based on microclimate sensors',
        'Peer-to-peer building energy barter protocols',
        'Dynamic geothermal district balancing'
      ],
      widgetType: 'energy'
    },
    healthcare: {
      id: 'healthcare',
      index: '03',
      title: 'Predictive & Connected Health Network',
      category: 'Human Resilience',
      description: 'Continuous predictive health surveillance integrates remote bio-monitoring with synchronized triage drones, automated hospital load distribution, and human-led clinical teams.',
      color: '#f43f5e',
      coordinates: { x: 440, y: 360 },
      stats: [
        { label: 'Emergency Response Time', value: '3.4 min', delta: '-58% traditional EMS' },
        { label: 'Hospital Bed Utilization', value: '84%', delta: 'Balanced citywide capacity' },
        { label: 'Remote Bio-telemetry Care', value: '76%', delta: 'Non-emergency home care' },
        { label: 'Early Outbreak Detection', value: '99.1%', delta: 'Cluster anomaly prediction' }
      ],
      features: [
        'AI-guided drone defibrillator and trauma dispatch',
        'Encrypted federated clinical analytics',
        'Cross-hospital dynamic ICU allocation',
        'Human physician oversight on every diagnostic alert'
      ],
      widgetType: 'healthcare'
    },
    education: {
      id: 'education',
      index: '04',
      title: 'Adaptive Learning & Skill Ecosystems',
      category: 'Cognitive Infrastructure',
      description: 'Shifting from rigid one-size-fits-all curricula to lifelong adaptive mentorship environments that synthesize real-time skill forecasting with immersive spatial learning studios.',
      color: '#f59e0b',
      coordinates: { x: 180, y: 340 },
      stats: [
        { label: 'Personalized Retention', value: '91%', delta: '+34% vs legacy lecture' },
        { label: 'Adaptive Mentorship Ratio', value: '1 : 1', delta: 'AI tutor per learner' },
        { label: 'Skill Forecast Accuracy', value: '88%', delta: '5-year industry projection' },
        { label: 'Civic Lifelong Participation', value: '62%', delta: 'Continuous adult upskilling' }
      ],
      features: [
        'Neuro-cognitive pacing calibrated to student focus',
        'Holographic architectural and surgical simulations',
        'Decentralized skill verification credentials',
        'Teacher focus redirected entirely to emotional intelligence'
      ],
      widgetType: 'education'
    },
    environment: {
      id: 'environment',
      index: '05',
      title: 'Ecological Canopy & Closed-Loop Metabolism',
      category: 'Biosphere Systems',
      description: 'Dense sensor arrays monitor microclimates, urban tree canopies, closed-loop greywater purification, and robotic bio-waste sorting to maintain an optimal ecological equilibrium.',
      color: '#10b981',
      coordinates: { x: 380, y: 120 },
      stats: [
        { label: 'Air Quality Index (AQI)', value: '14', delta: 'Optimal particulate level' },
        { label: 'Urban Canopy Coverage', value: '44%', delta: '+12% biodiversity corridor' },
        { label: 'Water Recirculation Rate', value: '89%', delta: 'Closed-loop greywater' },
        { label: 'Carbon Sink Absorption', value: '280 kt', delta: 'Net-negative urban core' }
      ],
      features: [
        'Automated stormwater retention and aquifer replenishment',
        'Bio-acoustic biodiversity tracking in urban parks',
        'Ultrasonic micro-particulate mist towers',
        'Autonomous anaerobic waste digestion units'
      ],
      widgetType: 'environment'
    },
    governance: {
      id: 'governance',
      index: '06',
      title: 'Transparent Civic Platform & Human Governance',
      category: 'Civic Trust',
      description: 'Direct citizen participation is augmented with algorithmic policy simulation. AI identifies systemic consequences and bottlenecks, while human citizens and elected councils retain full veto authority.',
      color: '#a855f7',
      coordinates: { x: 620, y: 320 },
      stats: [
        { label: 'Civic Participation Rate', value: '74%', delta: 'Active weekly consensus' },
        { label: 'Public Service Transparency', value: '100%', delta: 'Open verifiable audit logs' },
        { label: 'Policy Impact Simulation', value: '93%', delta: 'Pre-vote consequence model' },
        { label: 'Human Ethical Veto Cases', value: '100%', delta: 'No unilateral AI policies' }
      ],
      features: [
        'Zero-knowledge proof citizen voting and privacy',
        'Real-time municipal resource spending ledgers',
        'Decentralized neighborhood participatory budgeting',
        'Mandatory human deliberative assemblies'
      ],
      widgetType: 'governance'
    }
  },

  // Section 03: Four Realistic Simulation Scenarios
  simulationScenarios: [
    {
      id: 'heatwave',
      number: '01',
      title: 'Extreme Heatwave Alert',
      badge: 'MICROCLIMATE SURGE // +5°C SPIKE',
      situation: 'NOVA meteorological sensors project a sustained 5°C temperature spike over the next 72 hours. Grid refrigeration demand is surging by 42%, while vulnerable elderly citizens face severe thermal stress.',
      question: 'What should NOVA prioritize to maintain urban equilibrium?',
      options: [
        {
          key: 'A',
          title: 'Activate District Cooling & Civic Sanctuaries',
          desc: 'Deploy automated misting networks, convert municipal halls to 24/7 cooling centers, and prioritize public transit to sanctuaries.',
          deltas: { sustainability: 8, safety: 16, efficiency: -6, wellbeing: 15, innovation: 4 },
          narrative: 'Civic safety and wellbeing surged dramatically as vulnerable populations were protected. Energy efficiency suffered minor curtailment due to heavy localized chilling.'
        },
        {
          key: 'B',
          title: 'Surge Renewable Storage Distribution',
          desc: 'Draw down solid-state battery reserves and redirect clean microgrid feeds exclusively to district refrigeration corridors.',
          deltas: { sustainability: 14, safety: 10, efficiency: 9, wellbeing: 7, innovation: 11 },
          narrative: 'The grid demonstrated exceptional resilience with zero brownouts, though non-cooling public zones reported moderate thermal discomfort.'
        },
        {
          key: 'C',
          title: 'Mandate Non-Essential Industrial Curtailment',
          desc: 'Temporarily throttle heavy manufacturing and data centers to safeguard household cooling and emergency service capacity.',
          deltas: { sustainability: 16, safety: 8, efficiency: -11, wellbeing: 10, innovation: 2 },
          narrative: 'Energy demand dropped within 4 minutes, ensuring residential power continuity, at the cost of short-term industrial economic productivity.'
        },
        {
          key: 'D',
          title: 'Autonomous Holistic Equilibrium Optimization',
          desc: 'Permit NOVA AI to dynamically throttle HVAC by ±1.2°C across 300,000 buildings while dispatching predictive medical drones.',
          deltas: { sustainability: 12, safety: 14, efficiency: 15, wellbeing: 8, innovation: 18 },
          narrative: 'A masterclass in algorithmic balancing. The city maintained 98.4% grid stability with invisible fractional adjustments across the built environment.'
        }
      ]
    },
    {
      id: 'traffic',
      number: '02',
      title: 'Arterial Gridlock & Transit Crisis',
      badge: 'CONGESTION SURGE // ARTERIAL 4 & 7',
      situation: 'A multi-vehicle autonomous shuttle collision on Sector 2 Arterial has triggered cascade congestion across central transit corridors, threatening emergency hospital access.',
      question: 'How should the city infrastructure orchestrate the response?',
      options: [
        {
          key: 'A',
          title: 'Reroute Autonomous AV Fleet to Peripheral Rings',
          desc: 'Instruct all Level-5 autonomous vehicles to detour via outer ring roads, leaving core avenues completely clear for emergency transit.',
          deltas: { sustainability: 6, safety: 15, efficiency: 7, wellbeing: 10, innovation: 12 },
          narrative: 'Core avenues cleared in 90 seconds. Average trip times for commuters increased slightly, but critical emergency routes were uncompromised.'
        },
        {
          key: 'B',
          title: 'Surge Rapid Transit & Subterranean Maglev',
          desc: 'Make all underground transit fare-free, increase train cadence to 90-second intervals, and incentivize drivers to park at perimeter hubs.',
          deltas: { sustainability: 15, safety: 12, efficiency: 11, wellbeing: 14, innovation: 9 },
          narrative: 'Public transit absorbed 68,000 commuters within 30 minutes, drastically cutting surface vehicular density and boosting citizen satisfaction.'
        },
        {
          key: 'C',
          title: 'Dynamic Signal & Lane Reversal Synchronization',
          desc: 'Dynamically reconfigure reversible multi-modal lanes and synchronize smart signals to bleed traffic toward secondary thoroughfares.',
          deltas: { sustainability: 5, safety: 8, efficiency: 17, wellbeing: 7, innovation: 14 },
          narrative: 'Traffic flow normalized swiftly through algorithmic signal tuning, showcasing advanced smart-city routing efficiency.'
        },
        {
          key: 'D',
          title: 'Absolute Priority Emergency Corridor Lock',
          desc: 'Enforce geo-fenced beacon corridors that clear traffic 2 kilometers ahead of ambulances using audio and HUD in-vehicle prompts.',
          deltas: { sustainability: 4, safety: 20, efficiency: 6, wellbeing: 12, innovation: 15 },
          narrative: 'Ambulance travel time dropped to an unprecedented 2.1 minutes. Zero fatalities reported from the incident.'
        }
      ]
    },
    {
      id: 'energy',
      number: '03',
      title: 'Peak Deficit & Renewable Cloud Interruption',
      badge: 'POWER RESERVE DEFICIT // -38% SOLAR YIELD',
      situation: 'An unexpected marine stratus cloud layer has slashed solar generation by 38% at the exact moment industrial and residential cooling peaks.',
      question: 'Which energy strategy maintains critical urban operations?',
      options: [
        {
          key: 'A',
          title: 'Rapid Discharge of Solid-State Substation Reserves',
          desc: 'Draw down municipal grid storage batteries by 35% to maintain 100% uninterrupted power to all sectors without human intervention.',
          deltas: { sustainability: 10, safety: 14, efficiency: 12, wellbeing: 13, innovation: 10 },
          narrative: 'Seamless continuity achieved with zero flicker. Storage reserves were depleted to 55%, requiring rapid overnight wind replenishment.'
        },
        {
          key: 'B',
          title: 'Prioritize Hospital & Life-Safety Circuits',
          desc: 'Lock primary power to healthcare, water filtration, and emergency response, while gently dimming public street illumination by 30%.',
          deltas: { sustainability: 13, safety: 18, efficiency: 8, wellbeing: 9, innovation: 7 },
          narrative: 'Critical human infrastructure remained impenetrable. Citizens praised the ethical prioritization of medical and essential facilities.'
        },
        {
          key: 'C',
          title: 'Activate Peer-to-Peer Neighborhood Microgrid Barter',
          desc: 'Enable residential micro-generators and private batteries to feed the grid in exchange for civic green credits.',
          deltas: { sustainability: 17, safety: 9, efficiency: 14, wellbeing: 16, innovation: 19 },
          narrative: 'Citizens actively sold 140 MWh of surplus decentralized power back to the grid, transforming the crisis into a triumph of civic collaboration.'
        },
        {
          key: 'D',
          title: 'Automated Commercial Load Shedding',
          desc: 'Selectively idle non-critical commercial displays, aesthetic fountains, and server farm non-urgent computing jobs.',
          deltas: { sustainability: 15, safety: 10, efficiency: 16, wellbeing: 8, innovation: 11 },
          narrative: '50 MW shaved instantly without impacting citizen quality of life or safety.'
        }
      ]
    },
    {
      id: 'healthcare',
      number: '04',
      title: 'Syndromic Surge & Clinical Capacity',
      badge: 'HEALTHCARE SURGE // MULTI-CLUSTER OUTBREAK',
      situation: 'A sudden airborne allergen surge has spiked acute respiratory admissions across Eastern NOVA. Hospital emergency departments are operating at 94% capacity.',
      question: 'How does NOVA balance algorithmic automation with human compassionate care?',
      options: [
        {
          key: 'A',
          title: 'Deploy AI Remote Triage & Home Monitoring Kits',
          desc: 'Distribute smart inhaler bio-sensors and remote AI video consultations for mild cases, preserving hospital beds for critical patients.',
          deltas: { sustainability: 8, safety: 14, efficiency: 18, wellbeing: 15, innovation: 17 },
          narrative: '72% of patients received targeted care in the comfort of their homes, preventing clinical gridlock and reducing nosocomial infection risks.'
        },
        {
          key: 'B',
          title: 'Dispatch Mobile Modular Care Units to Community Centers',
          desc: 'Convert neighborhood libraries and transit hubs into clean-air respiratory care lounges staffed by human nurse clinicians.',
          deltas: { sustainability: 11, safety: 16, efficiency: 9, wellbeing: 18, innovation: 12 },
          narrative: 'A deeply human, community-rooted response. Immediate local relief fostered immense public trust and comfort.'
        },
        {
          key: 'C',
          title: 'Surge Medical Volunteer Corps & Mutual Aid',
          desc: 'Activate vetted off-duty healthcare workers and trained civic volunteers with real-time logistical coordination apps.',
          deltas: { sustainability: 9, safety: 15, efficiency: 11, wellbeing: 19, innovation: 10 },
          narrative: 'Over 800 civic volunteers mobilized in 2 hours, illustrating that algorithms are most powerful when organizing human compassion.'
        },
        {
          key: 'D',
          title: 'Dynamic Cross-Hospital Algorithmic Bed Balancing',
          desc: 'Rebalance patients across all 9 metropolitan hospitals using autonomous medical transit pods to equalize clinician workloads.',
          deltas: { sustainability: 7, safety: 17, efficiency: 16, wellbeing: 12, innovation: 15 },
          narrative: 'Hospital bed utilization stabilized at an optimal 78% across the entire city, preventing clinician burnout.'
        }
      ]
    }
  ],

  // Section 06: Timeline Milestones (2026 to 2050)
  timeline: {
    '2026': {
      year: '2026',
      theme: 'Foundational Sensor Mesh & Human-in-the-Loop AI',
      desc: 'First-generation municipal digital twins map physical infrastructure. AI acts primarily as a diagnostic advisor to human city managers.',
      sectors: [
        { sector: 'Transport', title: 'Mixed Autonomous Corridors', desc: 'Dedicated lanes for Level 4 automated shuttles alongside conventional traffic.' },
        { sector: 'Energy', title: 'Decentralized Solar Mandate', desc: 'Rooftop micro-generation integration with early battery storage pilots.' },
        { sector: 'Healthcare', title: 'Predictive Emergency Triage', desc: 'Ambulance dispatch algorithms cut urban response times by 25%.' },
        { sector: 'Education', title: 'Hybrid Adaptive Workspaces', desc: 'Classrooms adopt modular AI learning assistants for foundational math and literacy.' },
        { sector: 'Environment', title: 'Hyperlocal Air Quality Grids', desc: 'Street-lamp sensor arrays track particulate matter at 10-meter resolution.' },
        { sector: 'Governance', title: 'Open Civic Dashboards', desc: 'Citizens gain real-time visibility into municipal energy and infrastructure budgets.' }
      ]
    },
    '2030': {
      year: '2030',
      theme: 'Interconnected Urban Intelligence & Microgrids',
      desc: 'Silos dissolve. Energy, transit, and healthcare systems communicate through unified real-time event brokers with human ethical oversight.',
      sectors: [
        { sector: 'Transport', title: 'Autonomous Multi-Modal Mesh', desc: 'Private combustion vehicles restricted from core; 60% autonomous electric transit.' },
        { sector: 'Energy', title: 'Bidirectional Solid-State Grids', desc: 'District storage substations automatically balance solar and offshore wind fluctuations.' },
        { sector: 'Healthcare', title: 'Continuous Bio-telemetry', desc: 'Wearable civic health networks anticipate chronic decompensation before acute onset.' },
        { sector: 'Education', title: 'Immersive Holographic Labs', desc: 'Students collaborate in spatial digital twins to design real urban micro-parks.' },
        { sector: 'Environment', title: 'Closed-Loop Greywater Networks', desc: '80% of urban residential water purified and recycled locally via bio-filtration.' },
        { sector: 'Governance', title: 'Participatory Policy Simulation', desc: 'Citizens test algorithmic simulations of proposed zoning and transit laws before voting.' }
      ]
    },
    '2035': {
      year: '2035',
      theme: 'Predictive Equilibrium & Urban Symbiosis',
      desc: 'The city anticipates climate disruptions hours in advance, autonomously buffering energy, water, and emergency routes while deferring to civic policy.',
      sectors: [
        { sector: 'Transport', title: 'Subterranean Logistics Tubes', desc: 'Surface roads reclaimed for pedestrians; 90% of urban freight moved underground.' },
        { sector: 'Energy', title: 'Ambient Geothermal & Fusion Buffer', desc: 'Deep closed-loop geothermal networks provide uninterrupted baseline urban heat and power.' },
        { sector: 'Healthcare', title: 'Autonomous Drone Clinical Dispatch', desc: 'Automated defibrillator and trauma pods reach any point in the city in under 2 minutes.' },
        { sector: 'Education', title: 'Personalized Skill Forecasting', desc: 'Curricula update dynamically based on emerging regional science and ecological demands.' },
        { sector: 'Environment', title: 'Microclimate Mist & Urban Canopies', desc: 'Living architectural facades mitigate urban heat island effect by an average of 4°C.' },
        { sector: 'Governance', title: 'Cryptographic Zero-Knowledge Consensus', desc: 'Direct digital democracy with verified identity and total privacy protections.' }
      ]
    },
    '2040': {
      year: '2040',
      theme: 'Closed-Loop Metabolism & Bio-Digital Synthesis',
      desc: 'NOVA functions as a photosynthetic biological organism. Materials, nutrients, energy, and water exist in 100% cyclical regeneracy.',
      sectors: [
        { sector: 'Transport', title: 'Passive Magnetic Levitation Pods', desc: 'Zero-friction transit corridors glide silently through vertical building atriums.' },
        { sector: 'Energy', title: 'Quantum-Balanced Microgrids', desc: 'Zero distribution loss across self-healing superconducting district power conduits.' },
        { sector: 'Healthcare', title: 'Genomic Preventive Bio-Shields', desc: 'Environmental sensors track pathogen evolutions and synthesize community preventative therapies.' },
        { sector: 'Education', title: 'Lifelong Civic Apprenticeships', desc: 'Education is fully integrated into city governance, scientific research, and art studios.' },
        { sector: 'Environment', title: 'Net-Negative Carbon Architecture', desc: 'Engineered timber and carbon-sequestering concrete make NOVA a net carbon absorber.' },
        { sector: 'Governance', title: 'Intergenerational Council Assemblies', desc: 'AI models long-term 100-year ecological impacts of every major civic investment.' }
      ]
    },
    '2050': {
      year: '2050',
      theme: 'The Symbiotic Human City',
      desc: 'A harmonious partnership where computational intelligence handles systemic complexity, freeing humanity to focus on empathy, culture, and meaning.',
      sectors: [
        { sector: 'Transport', title: 'Integrated Vertical Mobility', desc: 'Seamless 3D mobility pods connect skyways, pedestrian parks, and ground transit.' },
        { sector: 'Energy', title: 'Planetary Closed-Loop Energy Web', desc: '100% clean, abundant energy distributed universally with zero carbon footprint.' },
        { sector: 'Healthcare', title: 'Holistic Longevity Ecosystems', desc: 'Lifespans extended with dignified, community-integrated preventive living spaces.' },
        { sector: 'Education', title: 'Empathy & Wisdom Academies', desc: 'Human education dedicated to philosophy, arts, ethics, and ecological stewardship.' },
        { sector: 'Environment', title: 'Full Ecological Re-wilding', desc: 'Over 55% of the city surface area dedicated to biodiversity corridors and old-growth trees.' },
        { sector: 'Governance', title: 'Symbiotic Algorithmic Democracy', desc: 'Humans define the values; transparent intelligence optimizes the execution.' }
      ]
    }
  },

  // City Archetypes for Section 07
  archetypes: [
    {
      name: 'The Symbiotic Architect',
      minWellbeing: 90,
      minSustainability: 88,
      quote: 'You designed a city where artificial intelligence and ecological harmony reinforce human dignity at every scale.',
      desc: 'Your decisions favored holistic equilibrium, peer-to-peer collaboration, and long-term environmental restoration over brute efficiency. NOVA thrives under your vision as a living garden of computational wisdom.'
    },
    {
      name: 'The Human-First Pioneer',
      minWellbeing: 92,
      minSustainability: 0,
      quote: 'You proved that technology is only as valuable as the human empathy it amplifies.',
      desc: 'In every crisis, you prioritized vulnerable citizens, community mutual aid, and medical access. You refused to treat citizens as mere data points, ensuring humanity remained the soul of NOVA.'
    },
    {
      name: 'The Resilient Arbiter',
      minWellbeing: 0,
      minSustainability: 90,
      quote: 'You engineered an unshakeable infrastructure capable of weathering the fiercest climate shocks.',
      desc: 'Your decisive management of energy grids, closed-loop water, and rapid transit created an ultra-reliable urban fortress. Your NOVA guarantees that safety and environmental continuity never fail.'
    },
    {
      name: 'The Algorithmic Vanguard',
      minWellbeing: 0,
      minSustainability: 0,
      quote: 'You unlocked the maximum potential of decentralized multi-agent synchronization.',
      desc: 'You leveraged high-precision automation, dynamic signal routing, and rapid algorithmic balancing. Your NOVA demonstrates peak operational efficiency, setting new benchmarks for futuristic city platforms.'
    }
  ],

  // Credible Sources (Distinguishing Real Tech vs Future Concept)
  sources: [
    {
      sector: 'Urban Digital Twins',
      techName: 'City-Scale Spatial Computing & IoT Telemetry',
      category: 'REAL TECHNOLOGY',
      badgeClass: 'source-badge-real',
      organization: 'MIT Senseable City Lab & IEEE Smart Cities',
      citation: 'Ratti et al., "Sensable City Protocols: Real-time Urban Dynamics via Distributed Sensors," IEEE Pervasive Computing, 2023.',
      realApplication: 'Currently deployed in Singapore (Virtual Singapore) and Zurich for microclimate, flood simulation, and transit analysis.'
    },
    {
      sector: 'Responsible AI',
      techName: 'Human-in-the-Loop Algorithmic Governance',
      category: 'REAL TECHNOLOGY',
      badgeClass: 'source-badge-real',
      organization: 'Stanford HAI & EU Artificial Intelligence Act',
      citation: 'Stanford Institute for Human-Centered AI (HAI), "2024 AI Index Report: Safe and Accountable Public Deployment."',
      realApplication: 'Mandatory human oversight frameworks for high-risk algorithmic public services and emergency dispatch.'
    },
    {
      sector: 'Clean Energy Grids',
      techName: 'Bidirectional Microgrid Load Balancing',
      category: 'REAL TECHNOLOGY',
      badgeClass: 'source-badge-real',
      organization: 'National Renewable Energy Laboratory (NREL)',
      citation: 'NREL Autonomous Energy Systems (AES) Multi-Agent Grid Optimization Framework, 2024.',
      realApplication: 'Automated peak shaving and peer-to-peer solar trading tested in microgrids across California, Denmark, and Japan.'
    },
    {
      sector: 'Predictive Healthcare',
      techName: 'AI-Assisted Pre-Hospital Emergency Routing',
      category: 'REAL TECHNOLOGY',
      badgeClass: 'source-badge-real',
      organization: 'World Health Organization (WHO) & Lancet Digital Health',
      citation: 'WHO Global Strategy on Digital Health 2020-2025; Lancet Digital Health clinical triage studies, 2023.',
      realApplication: 'Automated emergency dispatch and medical drone delivery of defibrillators in Sweden and the UK.'
    },
    {
      sector: 'Closed-Loop Ecology',
      techName: 'Urban Circular Water & Biosphere Metabolism',
      category: 'REAL TECHNOLOGY',
      badgeClass: 'source-badge-real',
      organization: 'UN Habitat SDG 11 & IPCC Sixth Assessment Report',
      citation: 'IPCC AR6 WGIII Chapter 8: "Urban Systems and Other Human Settlements," Cambridge University Press, 2022.',
      realApplication: 'Closed-loop water recycling and sponge city infrastructure in Shenzhen, Copenhagen, and Windhoek.'
    },
    {
      sector: 'Future Systems',
      techName: 'Multi-Agent Symbiotic Urban Operating System',
      category: 'NOVA FUTURE CONCEPT',
      badgeClass: 'source-badge-concept',
      organization: 'NOVA Research Architecture (2030-2050 Vision)',
      citation: 'Extrapolated from IEEE Multi-Agent Systems and Decentralized Autonomous Infrastructure specifications.',
      realApplication: 'Fully synchronized multi-sector dynamic cascade equilibrium where energy, healthcare, and mobility self-heal seamlessly.'
    }
  ]
};


/* --- audio.js --- */
/**
 * NOVA AUDIO ENGINE — SYNTHETIC SOUNDSCAPE & FEEDBACK
 * Built with Web Audio API. Zero external audio file dependencies.
 * Calibrated for a subtle, high-tech, cinematic atmosphere.
 * Muted by default.
 */

class NovaAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.isMuted = true;
    this.ambientGain = null;
    this.ambientOsc1 = null;
    this.ambientOsc2 = null;
    this.ambientFilter = null;
    this.initElements();
  }

  initElements() {
    this.toggleBtn = document.getElementById('audio-toggle-btn');
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggleAudio());
    }
  }

  initAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
        this.startAmbient();
      }
    } else if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleAudio() {
    this.initAudioContext();
    this.isMuted = !this.isMuted;

    if (this.toggleBtn) {
      if (this.isMuted) {
        this.toggleBtn.classList.remove('active');
        this.toggleBtn.querySelector('.audio-text').textContent = 'AUDIO: OFF';
        if (this.ambientGain) {
          this.ambientGain.gain.setTargetAtTime(0, this.audioCtx.currentTime, 0.2);
        }
      } else {
        this.toggleBtn.classList.add('active');
        this.toggleBtn.querySelector('.audio-text').textContent = 'AUDIO: ON';
        if (this.ambientGain) {
          this.ambientGain.gain.setTargetAtTime(0.04, this.audioCtx.currentTime, 0.5);
        }
        this.playChime(523.25, 0.2); // Welcome C5 ping
      }
    }
  }

  startAmbient() {
    if (!this.audioCtx) return;

    try {
      // Sub-bass warm drone (55Hz / 110Hz)
      this.ambientGain = this.audioCtx.createGain();
      this.ambientGain.gain.setValueAtTime(0, this.audioCtx.currentTime);

      this.ambientFilter = this.audioCtx.createBiquadFilter();
      this.ambientFilter.type = 'lowpass';
      this.ambientFilter.frequency.setValueAtTime(240, this.audioCtx.currentTime);

      this.ambientOsc1 = this.audioCtx.createOscillator();
      this.ambientOsc1.type = 'sine';
      this.ambientOsc1.frequency.setValueAtTime(55, this.audioCtx.currentTime); // A1

      this.ambientOsc2 = this.audioCtx.createOscillator();
      this.ambientOsc2.type = 'sine';
      this.ambientOsc2.frequency.setValueAtTime(110.2, this.audioCtx.currentTime); // Slight detune for subtle binaural beat

      this.ambientOsc1.connect(this.ambientFilter);
      this.ambientOsc2.connect(this.ambientFilter);
      this.ambientFilter.connect(this.ambientGain);
      this.ambientGain.connect(this.audioCtx.destination);

      this.ambientOsc1.start();
      this.ambientOsc2.start();
    } catch (e) {
      console.warn('Ambient audio init failed:', e);
    }
  }

  // Micro-interaction UI Sound (Soft click/blip)
  playClick() {
    if (this.isMuted || !this.audioCtx) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, this.audioCtx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.03, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.05);
    } catch (e) {}
  }

  // Soft Chime for selections and confirmations
  playChime(freq = 659.25, duration = 0.25) {
    if (this.isMuted || !this.audioCtx) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.05, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration + 0.02);
    } catch (e) {}
  }

  // Consequence Calculation Chord
  playSuccessChord() {
    if (this.isMuted || !this.audioCtx) return;
    setTimeout(() => this.playChime(523.25, 0.3), 0);
    setTimeout(() => this.playChime(659.25, 0.3), 80);
    setTimeout(() => this.playChime(783.99, 0.4), 160);
  }
}

window.novaAudio = new NovaAudioEngine();


/* --- city-3d.js --- */
/**
 * NOVA 3D DIGITAL TWIN CITY ENGINE
 * Real-time procedural urban digital twin rendered with Three.js.
 * Features architectural volumetric skyscrapers, edge wireframes,
 * moving transit vehicle particles, energy flow pulses, and mouse parallax.
 */

class Nova3DCity {
  constructor() {
    this.canvas = document.getElementById('hero-city-canvas');
    if (!this.canvas) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.buildingsGroup = null;
    this.trafficParticles = null;
    this.energyLinesGroup = null;

    // Mouse Parallax & Orbit
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetRotationX = 0.35;
    this.targetRotationY = -0.45;
    this.currentRotationX = 0.35;
    this.currentRotationY = -0.45;
    this.isDragging = false;
    this.previousMouseX = 0;
    this.previousMouseY = 0;

    this.init();
  }

  init() {
    if (typeof THREE === 'undefined') {
      console.warn('Three.js not loaded. Retrying in 200ms...');
      setTimeout(() => this.init(), 200);
      return;
    }

    const width = this.canvas.parentElement.clientWidth;
    const height = this.canvas.parentElement.clientHeight;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x07090e, 0.014);

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    this.camera.position.set(0, 48, 82);
    this.camera.lookAt(0, 4, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0x1a233a, 2.2);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 1.8);
    dirLight1.position.set(50, 80, 40);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x8b5cf6, 1.2);
    dirLight2.position.set(-50, 40, -40);
    this.scene.add(dirLight2);

    // Build the Living City
    this.createGroundGrid();
    this.createProceduralBuildings();
    this.createTrafficSystem();
    this.createEnergyBeacons();

    // Event Listeners
    this.bindEvents();

    // Start Render Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  createGroundGrid() {
    // Coordinate Grid Helper
    const gridHelper = new THREE.GridHelper(160, 40, 0x00f0ff, 0x151f33);
    gridHelper.position.y = -0.05;
    this.scene.add(gridHelper);

    // Subtle Ground Disc
    const groundGeo = new THREE.PlaneGeometry(240, 240);
    const groundMat = new THREE.MeshBasicMaterial({
      color: 0x07090e,
      depthWrite: false
    });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = -0.1;
    this.scene.add(groundMesh);
  }

  createProceduralBuildings() {
    this.buildingsGroup = new THREE.Group();

    const gridSize = 7;
    const spacing = 11;
    const buildingMat = new THREE.MeshPhongMaterial({
      color: 0x0d121c,
      specular: 0x00f0ff,
      shininess: 30,
      flatShading: true
    });

    const edgeMatCyan = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.55
    });

    const edgeMatViolet = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.45
    });

    for (let x = -gridSize; x <= gridSize; x++) {
      for (let z = -gridSize; z <= gridSize; z++) {
        // Leave broad arterial boulevard intersections open
        if (Math.abs(x) === 1 || Math.abs(z) === 1) continue;
        if (Math.random() > 0.72) continue; // Organic density variation

        const distFromCenter = Math.sqrt(x * x + z * z);
        const maxH = Math.max(4, 28 - distFromCenter * 2.5);
        const height = 4 + Math.random() * maxH;
        const width = 4 + Math.random() * 3.5;
        const depth = 4 + Math.random() * 3.5;

        const boxGeo = new THREE.BoxGeometry(width, height, depth);
        const boxMesh = new THREE.Mesh(boxGeo, buildingMat);
        boxMesh.position.set(x * spacing + (Math.random() - 0.5) * 2, height / 2, z * spacing + (Math.random() - 0.5) * 2);

        // Architectural Edge Wireframe
        const edges = new THREE.EdgesGeometry(boxGeo);
        const line = new THREE.LineSegments(edges, Math.random() > 0.35 ? edgeMatCyan : edgeMatViolet);
        boxMesh.add(line);

        // Rooftop Communication Beacon
        if (height > 18) {
          const antennaGeo = new THREE.CylinderGeometry(0.08, 0.08, 3, 6);
          const antennaMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
          const antenna = new THREE.Mesh(antennaGeo, antennaMat);
          antenna.position.set(0, height / 2 + 1.5, 0);
          boxMesh.add(antenna);

          // Pulsing Beacon Light Sphere
          const beaconGeo = new THREE.SphereGeometry(0.3, 8, 8);
          const beaconMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
          const beacon = new THREE.Mesh(beaconGeo, beaconMat);
          beacon.position.set(0, height / 2 + 3.1, 0);
          boxMesh.add(beacon);
        }

        this.buildingsGroup.add(boxMesh);
      }
    }

    this.scene.add(this.buildingsGroup);
  }

  createTrafficSystem() {
    // Thousands of light points flowing through the grid
    const particleCount = 1400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    this.particleSpeeds = [];

    const colorCyan = new THREE.Color(0x00f0ff);
    const colorViolet = new THREE.Color(0x8b5cf6);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const isEastWest = Math.random() > 0.5;
      const roadCoord = (Math.floor(Math.random() * 12) - 6) * 11 + 5.5;

      let x, y, z;
      if (isEastWest) {
        x = (Math.random() - 0.5) * 160;
        z = roadCoord;
      } else {
        x = roadCoord;
        z = (Math.random() - 0.5) * 160;
      }
      y = 0.4 + Math.random() * 0.8;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color assignment
      const c = Math.random() > 0.4 ? colorCyan : (Math.random() > 0.3 ? colorViolet : colorWhite);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      // Speed & direction
      this.particleSpeeds.push({
        isEastWest,
        speed: (0.15 + Math.random() * 0.3) * (Math.random() > 0.5 ? 1 : -1)
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    this.trafficParticles = new THREE.Points(geometry, material);
    this.scene.add(this.trafficParticles);
  }

  createEnergyBeacons() {
    // Overhead energy conduits connecting main towers
    this.energyLinesGroup = new THREE.Group();
    const curvePoints = [
      new THREE.Vector3(-35, 24, -20),
      new THREE.Vector3(0, 32, 5),
      new THREE.Vector3(35, 20, 25)
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 40, 0.15, 6, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.6,
      wireframe: true
    });
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    this.energyLinesGroup.add(tube);

    this.scene.add(this.energyLinesGroup);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      if (!this.canvas || !this.renderer || !this.camera) return;
      const width = this.canvas.parentElement.clientWidth;
      const height = this.canvas.parentElement.clientHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    });

    // Mouse movement for subtle tilt/parallax
    window.addEventListener('mousemove', (e) => {
      this.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      this.mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      this.targetRotationY = -0.45 + this.mouseX * 0.25;
      this.targetRotationX = 0.35 + this.mouseY * 0.15;
    });

    // Canvas Mouse Drag Orbit
    const container = this.canvas.parentElement;
    container.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.previousMouseX = e.clientX;
      this.previousMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.previousMouseX;
      const deltaY = e.clientY - this.previousMouseY;
      this.targetRotationY += deltaX * 0.005;
      this.targetRotationX = Math.max(0.1, Math.min(0.8, this.targetRotationX + deltaY * 0.005));
      this.previousMouseX = e.clientX;
      this.previousMouseY = e.clientY;
    });

    // Touch Support for mobile
    container.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMouseX = e.touches[0].clientX;
        this.previousMouseY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - this.previousMouseX;
      const deltaY = e.touches[0].clientY - this.previousMouseY;
      this.targetRotationY += deltaX * 0.005;
      this.targetRotationX = Math.max(0.1, Math.min(0.8, this.targetRotationX + deltaY * 0.005));
      this.previousMouseX = e.touches[0].clientX;
      this.previousMouseY = e.touches[0].clientY;
    }, { passive: true });
  }

  // Camera dive transition when "ENTER NOVA" is clicked
  diveIntoCity(callback) {
    if (!this.camera) {
      if (callback) callback();
      return;
    }

    const startY = this.camera.position.y;
    const startZ = this.camera.position.z;
    const targetY = 18;
    const targetZ = 35;
    let progress = 0;

    const diveInterval = setInterval(() => {
      progress += 0.04;
      if (progress >= 1) {
        clearInterval(diveInterval);
        if (callback) callback();
        // Gently drift back up for ambient background
        setTimeout(() => {
          this.camera.position.set(0, 48, 82);
        }, 1500);
      } else {
        const ease = 1 - Math.pow(1 - progress, 3);
        this.camera.position.y = startY + (targetY - startY) * ease;
        this.camera.position.z = startZ + (targetZ - startZ) * ease;
      }
    }, 16);
  }

  animate() {
    requestAnimationFrame(this.animate);

    // Smooth Orbit & Parallax interpolation
    this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.05;
    this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.05;

    if (this.buildingsGroup) {
      this.buildingsGroup.rotation.y = this.currentRotationY;
      this.buildingsGroup.rotation.x = this.currentRotationX - 0.35;
    }

    // Auto-drift slow revolution
    if (!this.isDragging) {
      this.targetRotationY += 0.0006;
    }

    // Update Traffic Particles Movement
    if (this.trafficParticles) {
      const positions = this.trafficParticles.geometry.attributes.position.array;
      const count = this.particleSpeeds.length;

      for (let i = 0; i < count; i++) {
        const info = this.particleSpeeds[i];
        if (info.isEastWest) {
          positions[i * 3] += info.speed;
          if (positions[i * 3] > 80) positions[i * 3] = -80;
          if (positions[i * 3] < -80) positions[i * 3] = 80;
        } else {
          positions[i * 3 + 2] += info.speed;
          if (positions[i * 3 + 2] > 80) positions[i * 3 + 2] = -80;
          if (positions[i * 3 + 2] < -80) positions[i * 3 + 2] = 80;
        }
      }

      this.trafficParticles.geometry.attributes.position.needsUpdate = true;
      this.trafficParticles.rotation.y = this.currentRotationY;
      this.trafficParticles.rotation.x = this.currentRotationX - 0.35;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}

window.nova3DCity = new Nova3DCity();


/* --- city-map.js --- */
/**
 * NOVA CITY MAP & ZONE INSPECTOR
 * Handles the interactive 2D/2.5D architectural city map, zone selection,
 * and dynamic sector widgets (Transport, Energy, Healthcare, Education, Environment, Governance).
 */

class NovaCityMap {
  constructor() {
    this.currentZoneId = 'transport';
    this.svg = document.getElementById('city-map-svg');
    this.init();
  }

  init() {
    this.bindZoneButtons();
    this.renderSvgMap();
    this.selectZone('transport');
  }

  bindZoneButtons() {
    const buttons = document.querySelectorAll('.zone-selector-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const zoneId = btn.getAttribute('data-zone');
        if (zoneId) {
          if (window.novaAudio) window.novaAudio.playClick();
          this.selectZone(zoneId);
        }
      });
    });
  }

  renderSvgMap() {
    if (!this.svg) return;

    // Build rich architectural vector map with sectors, transit routes, and energy nodes
    this.svg.innerHTML = `
      <defs>
        <!-- Grid Pattern -->
        <pattern id="cityGridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
        </pattern>
        <!-- Gradients -->
        <radialGradient id="zoneGlowCyan" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#00f0ff" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="zoneGlowViolet" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="zoneGlowGreen" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Background Grid -->
      <rect width="100%" height="100%" fill="#0a0e17"/>
      <rect width="100%" height="100%" fill="url(#cityGridPattern)"/>

      <!-- Concentric Perimeter Rings -->
      <circle cx="400" cy="250" r="220" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1" stroke-dasharray="4 6"/>
      <circle cx="400" cy="250" r="140" fill="none" stroke="rgba(0,240,255,0.12)" stroke-width="1.5"/>
      <circle cx="400" cy="250" r="60" fill="none" stroke="rgba(139,92,246,0.18)" stroke-width="1.5" stroke-dasharray="2 4"/>

      <!-- Major Arterial Highways (Transit Corridors) -->
      <path id="transit-route-1" d="M 80 250 L 720 250" fill="none" stroke="rgba(0,240,255,0.3)" stroke-width="3"/>
      <path id="transit-route-2" d="M 400 40 L 400 460" fill="none" stroke="rgba(0,240,255,0.3)" stroke-width="3"/>
      <path id="transit-route-diag" d="M 160 90 L 640 410" fill="none" stroke="rgba(139,92,246,0.3)" stroke-width="2" stroke-dasharray="6 6"/>

      <!-- Moving Flow Pulses along Arterials -->
      <circle r="4" fill="#00f0ff">
        <animateMotion path="M 80 250 L 720 250" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle r="3.5" fill="#8b5cf6">
        <animateMotion path="M 720 250 L 80 250" dur="5.5s" repeatCount="indefinite"/>
      </circle>
      <circle r="4" fill="#00f0ff">
        <animateMotion path="M 400 40 L 400 460" dur="4.2s" repeatCount="indefinite"/>
      </circle>
      <circle r="3.5" fill="#10b981">
        <animateMotion path="M 160 90 L 640 410" dur="6s" repeatCount="indefinite"/>
      </circle>

      <!-- Zone Polygons / Sectors -->
      <!-- 1. Transport Sector -->
      <g class="map-svg-zone" data-zone="transport" style="cursor: pointer;">
        <circle cx="300" cy="220" r="55" fill="url(#zoneGlowCyan)" class="zone-glow-bg"/>
        <rect x="250" y="180" width="100" height="80" rx="6" fill="rgba(0,240,255,0.06)" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="3 3"/>
        <circle cx="300" cy="220" r="6" fill="#00f0ff"/>
        <text x="300" y="242" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#00f0ff" text-anchor="middle">01 TRANSPORT</text>
      </g>

      <!-- 2. Energy Sector -->
      <g class="map-svg-zone" data-zone="energy" style="cursor: pointer;">
        <circle cx="560" cy="150" r="55" fill="url(#zoneGlowViolet)" class="zone-glow-bg"/>
        <polygon points="560,95 615,150 560,205 505,150" fill="rgba(139,92,246,0.08)" stroke="#8b5cf6" stroke-width="1.5"/>
        <circle cx="560" cy="150" r="6" fill="#8b5cf6"/>
        <text x="560" y="172" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#8b5cf6" text-anchor="middle">02 ENERGY</text>
      </g>

      <!-- 3. Healthcare Sector -->
      <g class="map-svg-zone" data-zone="healthcare" style="cursor: pointer;">
        <circle cx="450" cy="360" r="55" fill="rgba(244,63,94,0.12)" class="zone-glow-bg"/>
        <rect x="405" y="325" width="90" height="70" rx="4" fill="rgba(244,63,94,0.06)" stroke="#f43f5e" stroke-width="1.5"/>
        <path d="M 450 345 L 450 365 M 440 355 L 460 355" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
        <text x="450" y="382" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#f43f5e" text-anchor="middle">03 HEALTHCARE</text>
      </g>

      <!-- 4. Education Sector -->
      <g class="map-svg-zone" data-zone="education" style="cursor: pointer;">
        <circle cx="190" cy="340" r="50" fill="rgba(245,158,11,0.12)" class="zone-glow-bg"/>
        <polygon points="190,295 240,365 140,365" fill="rgba(245,158,11,0.06)" stroke="#f59e0b" stroke-width="1.5"/>
        <circle cx="190" cy="340" r="6" fill="#f59e0b"/>
        <text x="190" y="360" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#f59e0b" text-anchor="middle">04 EDUCATION</text>
      </g>

      <!-- 5. Environment Sector -->
      <g class="map-svg-zone" data-zone="environment" style="cursor: pointer;">
        <circle cx="380" cy="110" r="55" fill="url(#zoneGlowGreen)" class="zone-glow-bg"/>
        <circle cx="380" cy="110" r="42" fill="rgba(16,185,129,0.08)" stroke="#10b981" stroke-width="1.5"/>
        <circle cx="380" cy="110" r="6" fill="#10b981"/>
        <text x="380" y="132" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#10b981" text-anchor="middle">05 ENVIRONMENT</text>
      </g>

      <!-- 6. Governance Sector -->
      <g class="map-svg-zone" data-zone="governance" style="cursor: pointer;">
        <circle cx="630" cy="330" r="50" fill="rgba(168,85,247,0.12)" class="zone-glow-bg"/>
        <rect x="585" y="295" width="90" height="70" rx="4" fill="rgba(168,85,247,0.06)" stroke="#a855f7" stroke-width="1.5"/>
        <circle cx="630" cy="330" r="6" fill="#a855f7"/>
        <text x="630" y="352" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="#a855f7" text-anchor="middle">06 GOVERNANCE</text>
      </g>
    `;

    // Add click listeners to SVG groups
    const svgZones = this.svg.querySelectorAll('.map-svg-zone');
    svgZones.forEach(elem => {
      elem.addEventListener('click', () => {
        const zoneId = elem.getAttribute('data-zone');
        if (zoneId) {
          if (window.novaAudio) window.novaAudio.playClick();
          this.selectZone(zoneId);
        }
      });
    });
  }

  selectZone(zoneId) {
    const zoneData = window.NOVA_CONFIG.zones[zoneId];
    if (!zoneData) return;
    this.currentZoneId = zoneId;

    // Update Zone Pill Buttons
    document.querySelectorAll('.zone-selector-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-zone') === zoneId);
    });

    // Update SVG highlights
    if (this.svg) {
      this.svg.querySelectorAll('.map-svg-zone').forEach(elem => {
        const isMatch = elem.getAttribute('data-zone') === zoneId;
        const bg = elem.querySelector('.zone-glow-bg');
        if (bg) {
          bg.setAttribute('r', isMatch ? '75' : '50');
        }
        elem.style.opacity = isMatch ? '1' : '0.65';
      });
    }

    // Render Inspector Panel Content
    this.renderInspector(zoneData);
  }

  renderInspector(data) {
    const container = document.getElementById('zone-inspector-content');
    if (!container) return;

    let widgetHtml = '';

    // Specialized Interactive Widgets per Sector
    if (data.widgetType === 'transport') {
      widgetHtml = `
        <div class="zone-interactive-widget">
          <div class="widget-title">
            <span>Dynamic Route Orchestrator</span>
            <span class="badge badge-cyan">V2X MESH ACTIVE</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px;">
            Simulate real-time traffic signal optimization and emergency routing clearance:
          </p>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px;">
            <button class="btn btn-sm btn-secondary transport-mode-btn active" data-mode="normal">Standard Flow</button>
            <button class="btn btn-sm btn-secondary transport-mode-btn" data-mode="transit-surge">Transit Priority</button>
            <button class="btn btn-sm btn-secondary transport-mode-btn" data-mode="emergency">Emergency Corridor</button>
          </div>
          <div id="transport-route-status" style="font-family: var(--font-mono); font-size: 0.78rem; padding: 10px; background: rgba(0,240,255,0.06); border: 1px solid var(--border-accent); border-radius: 4px; color: var(--cyan-core);">
            STATUS: 12,400 autonomous shuttles synchronized. Traffic latency at 1.2s.
          </div>
        </div>
      `;
    } else if (data.widgetType === 'energy') {
      widgetHtml = `
        <div class="zone-interactive-widget">
          <div class="widget-title">
            <span>Symbiotic Flow Pipeline</span>
            <span class="badge badge-violet">BIDIRECTIONAL</span>
          </div>
          <div class="energy-flow-chain">
            <div class="energy-node">
              <span class="node-name">SOLAR ARRAYS</span>
              <span class="node-val" id="val-solar">420 MW</span>
            </div>
            <div class="energy-flow-arrow">→</div>
            <div class="energy-node">
              <span class="node-name">SMART GRID</span>
              <span class="node-val" id="val-grid">390 MW</span>
            </div>
            <div class="energy-flow-arrow">→</div>
            <div class="energy-node">
              <span class="node-name">BUILDINGS</span>
              <span class="node-val" id="val-bld">310 MW</span>
            </div>
            <div class="energy-flow-arrow">→</div>
            <div class="energy-node">
              <span class="node-name">STORAGE BUFFER</span>
              <span class="node-val" id="val-bat">80 MW</span>
            </div>
          </div>
          <div style="margin-top: 14px;">
            <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 6px;">
              <span style="color: var(--text-muted);">Adjust Citywide Peak Demand:</span>
              <span style="color: var(--violet-core);" id="energy-slider-val">100% (Baseline)</span>
            </div>
            <input type="range" id="energy-load-slider" min="60" max="140" value="100" class="custom-range-slider" style="accent-color: var(--violet-core);">
          </div>
        </div>
      `;
    } else if (data.widgetType === 'healthcare') {
      widgetHtml = `
        <div class="zone-interactive-widget">
          <div class="widget-title">
            <span>Predictive Emergency Scenario</span>
            <button class="btn btn-sm btn-violet" id="btn-run-ems-scenario">Simulate Scenario</button>
          </div>
          <div class="scenario-step-list" id="ems-scenario-list">
            <div class="scenario-step-item active" data-step="1">
              <div class="scenario-step-num">1</div>
              <div class="scenario-step-label">Emergency detected via bio-telemetry anomaly</div>
            </div>
            <div class="scenario-step-item" data-step="2">
              <div class="scenario-step-num">2</div>
              <div class="scenario-step-label">Exact coordinates identified (Sector 4 Plaza)</div>
            </div>
            <div class="scenario-step-item" data-step="3">
              <div class="scenario-step-num">3</div>
              <div class="scenario-step-label">Nearest autonomous medical pod & trauma drone dispatched</div>
            </div>
            <div class="scenario-step-item" data-step="4">
              <div class="scenario-step-num">4</div>
              <div class="scenario-step-label">NOVA General Hospital notified & clinical team prepped</div>
            </div>
            <div class="scenario-step-item" data-step="5">
              <div class="scenario-step-num">5</div>
              <div class="scenario-step-label">Transit signals cleared; patient stabilized in 2.8 mins</div>
            </div>
          </div>
        </div>
      `;
    } else if (data.widgetType === 'education') {
      widgetHtml = `
        <div class="zone-interactive-widget">
          <div class="widget-title">
            <span>Cognitive Paradigm Shift</span>
            <span class="badge badge-amber">ADAPTIVE</span>
          </div>
          <div class="education-compare-grid">
            <div class="edu-card edu-card-traditional">
              <span class="edu-tag">Traditional Model</span>
              <ul>
                <li>• Rigid fixed batch pacing</li>
                <li>• Standardized memorization tests</li>
                <li>• Static historical textbook content</li>
                <li>• Education stops after degree</li>
              </ul>
            </div>
            <div class="edu-card edu-card-adaptive">
              <span class="edu-tag">NOVA Adaptive Model</span>
              <ul>
                <li>• AI calibrated to individual neuro-pace</li>
                <li>• Real-time collaborative digital twin labs</li>
                <li>• Live industry skill demand alignment</li>
                <li>• Continuous lifelong civic learning</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    } else if (data.widgetType === 'environment') {
      widgetHtml = `
        <div class="zone-interactive-widget">
          <div class="widget-title">
            <span>Metabolism Telemetry</span>
            <span class="badge badge-emerald">CLOSED-LOOP</span>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-family: var(--font-mono); font-size: 0.78rem;">
            <div style="padding: 8px; background: rgba(16,185,129,0.06); border-radius: 4px;">
              <span style="color: var(--text-muted); display: block;">PM2.5 / PM10:</span>
              <span style="color: var(--emerald-core); font-weight: 600;">3.8 µg/m³ (Pure)</span>
            </div>
            <div style="padding: 8px; background: rgba(16,185,129,0.06); border-radius: 4px;">
              <span style="color: var(--text-muted); display: block;">Water Recycled:</span>
              <span style="color: var(--emerald-core); font-weight: 600;">88.9% Closed-Loop</span>
            </div>
            <div style="padding: 8px; background: rgba(16,185,129,0.06); border-radius: 4px;">
              <span style="color: var(--text-muted); display: block;">Urban Heat Island:</span>
              <span style="color: var(--emerald-core); font-weight: 600;">-3.6°C via Canopies</span>
            </div>
            <div style="padding: 8px; background: rgba(16,185,129,0.06); border-radius: 4px;">
              <span style="color: var(--text-muted); display: block;">Bio-Waste Recycled:</span>
              <span style="color: var(--emerald-core); font-weight: 600;">97.4% Methane Capture</span>
            </div>
          </div>
        </div>
      `;
    } else if (data.widgetType === 'governance') {
      widgetHtml = `
        <div class="zone-interactive-widget">
          <div class="widget-title">
            <span>Human-in-the-Loop Civic Model</span>
            <span class="badge badge-violet">HUMAN VETO</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px;">
            AI continuously evaluates municipal trade-offs and generates non-binding policy proposals. Democratic human citizen assemblies retain final veto authority.
          </p>
          <div style="padding: 10px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: 4px; font-family: var(--font-mono); font-size: 0.75rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: var(--text-muted);">Active Proposal:</span>
              <span style="color: var(--cyan-core);">Zoning Code Amendment #402</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: var(--text-muted);">AI Simulated Impact:</span>
              <span style="color: var(--emerald-core);">+14% Green Space, -2% Commute</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-muted);">Citizen Consensus Vote:</span>
              <span style="color: #fff; font-weight: 700;">88.4% APPROVE (Enacted)</span>
            </div>
          </div>
        </div>
      `;
    }

    // Build the Stats Grid
    const statsHtml = data.stats.map(s => `
      <div class="zone-stat-card">
        <span class="zone-stat-label">${s.label}</span>
        <span class="zone-stat-value">${s.value}</span>
        <span class="zone-stat-delta">${s.delta}</span>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="zone-meta-bar">
        <span class="zone-index-tag">ZONE // ${data.index} — ${data.category}</span>
        <span class="badge badge-cyan">TELEMETRY LIVE</span>
      </div>
      <h3 class="zone-inspector-title">${data.title}</h3>
      <p class="zone-inspector-desc">${data.description}</p>
      <div class="zone-stats-grid">
        ${statsHtml}
      </div>
      ${widgetHtml}
    `;

    // Attach Interactive Handlers for the newly rendered widget
    this.bindWidgetInteractions(data.widgetType);
  }

  bindWidgetInteractions(widgetType) {
    if (widgetType === 'transport') {
      const modeButtons = document.querySelectorAll('.transport-mode-btn');
      const statusEl = document.getElementById('transport-route-status');
      modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          modeButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const mode = btn.getAttribute('data-mode');
          if (window.novaAudio) window.novaAudio.playClick();
          if (mode === 'normal') {
            statusEl.textContent = 'STATUS: Standard autonomous flow. Signal timing balanced across all 6 sectors.';
          } else if (mode === 'transit-surge') {
            statusEl.textContent = 'STATUS: Transit priority engaged. Shuttles granted 100% green light precedence.';
          } else if (mode === 'emergency') {
            statusEl.textContent = 'STATUS: Emergency Corridor Cleared! Arterial 2 & 4 geo-fenced. Response latency: 1.8 mins.';
          }
        });
      });
    } else if (widgetType === 'energy') {
      const slider = document.getElementById('energy-load-slider');
      const sliderVal = document.getElementById('energy-slider-val');
      const valGrid = document.getElementById('val-grid');
      const valBld = document.getElementById('val-bld');
      const valBat = document.getElementById('val-bat');

      if (slider) {
        slider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value, 10);
          sliderVal.textContent = `${val}% (${val > 100 ? 'Surge Load' : (val < 100 ? 'Eco Load' : 'Baseline')})`;
          const bldLoad = Math.round(310 * (val / 100));
          const gridLoad = Math.round(390 * (val / 100));
          const batteryBuffer = Math.max(0, 420 - gridLoad);

          valBld.textContent = `${bldLoad} MW`;
          valGrid.textContent = `${gridLoad} MW`;
          valBat.textContent = `${batteryBuffer} MW`;
        });
      }
    } else if (widgetType === 'healthcare') {
      const btn = document.getElementById('btn-run-ems-scenario');
      const steps = document.querySelectorAll('.scenario-step-item');
      if (btn) {
        btn.addEventListener('click', () => {
          if (window.novaAudio) window.novaAudio.playChime(784);
          let current = 0;
          const interval = setInterval(() => {
            steps.forEach((s, idx) => {
              s.classList.toggle('active', idx === current);
            });
            current++;
            if (current >= steps.length) {
              clearInterval(interval);
              setTimeout(() => {
                steps.forEach(s => s.classList.remove('active'));
                steps[steps.length - 1].classList.add('active');
                if (window.novaAudio) window.novaAudio.playSuccessChord();
              }, 600);
            }
          }, 800);
        });
      }
    }
  }
}

window.novaCityMap = new NovaCityMap();


/* --- network-graph.js --- */
/**
 * NOVA INTELLIGENCE — INTERCONNECTED NETWORK TOPOLOGY & CASCADE SIMULATOR
 * Visualizes the central AI hub connecting the 6 city sectors down to Citizen Wellbeing.
 * Features an interactive incident cascade simulator with signal pulses.
 */

class NovaNetworkGraph {
  constructor() {
    this.canvas = document.getElementById('network-topology-canvas');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.currentStep = 0;
    this.pulses = [];
    this.nodes = [];
    this.links = [];

    this.cascadeData = [
      {
        step: 0,
        badge: 'STAGE 1 // ANOMALY DETECTED',
        title: 'LiDAR & Bio-telemetry Anomaly Triggered',
        desc: 'At 08:42:14, an impact deceleration pulse is recorded on Sector 2 Arterial. Within 40 milliseconds, three intersecting LiDAR surveillance masts cross-verify a vehicle-to-infrastructure incident.',
        activeNode: 'AI_CORE',
        targetSector: 'TRANSPORT',
        telemetry: { latency: '40 ms', confidence: '99.8%', humanNotified: 'YES' }
      },
      {
        step: 1,
        badge: 'STAGE 2 // MULTI-AGENT SYNCHRONIZATION',
        title: 'Autonomous Traffic Vector Reconfiguration',
        desc: 'NOVA transit agents automatically instruct 140 oncoming autonomous shuttles within a 1.5km radius to divert via secondary loop avenues, clearing arterial lane 1 and 2 completely.',
        activeNode: 'TRANSPORT',
        targetSector: 'TRANSPORT',
        telemetry: { corridorWidth: '2 Lanes Cleared', delayAdded: '+45s commuter avg', safetyBuffer: 'Optimal' }
      },
      {
        step: 2,
        badge: 'STAGE 3 // EMERGENCY DISPATCH',
        title: 'Emergency Medical Drone & Ambulance Pre-empt',
        desc: 'Exact spatial coordinates and predicted injury biometrics are transmitted to Emergency Station 4. An automated trauma stabilization drone launches with 90-second flight ETA.',
        activeNode: 'HEALTHCARE',
        targetSector: 'HEALTHCARE',
        telemetry: { flightETA: '88 sec', ambulanceETA: '2.4 min', droneType: 'Aero-Med 4' }
      },
      {
        step: 3,
        badge: 'STAGE 4 // CLINICAL READINESS',
        title: 'Central Hospital Trauma Bay Allocation',
        desc: 'NOVA General Hospital automatically reserves Trauma Bay 3 and notifies the on-call surgical trauma team with incoming patient vital telemetry streaming from the drone.',
        activeNode: 'HEALTHCARE',
        targetSector: 'HEALTHCARE',
        telemetry: { hospitalCap: 'Available (84%)', traumaTeam: 'Standby Activated', prepTime: '-6 min traditional' }
      },
      {
        step: 4,
        badge: 'STAGE 5 // CIVIC NOTIFICATION',
        title: 'Hyperlocal Citizen Ambient Alerting',
        desc: 'Citizens within 500 meters receive a low-distraction ambient notification on civic smart interfaces, advising them of emergency vehicle sirens and rerouting pedestrian crosswalks.',
        activeNode: 'CITIZEN',
        targetSector: 'GOVERNANCE',
        telemetry: { devicesNotified: '3,420', panicsAvoided: '100%', privacyPreserved: 'Zero-Knowledge' }
      },
      {
        step: 5,
        badge: 'STAGE 6 // EQUILIBRIUM RESTORED',
        title: 'Disruption Minimized & Arterial Restored',
        desc: 'Patient safely en route to trauma center. Secondary vehicles cleared. Signal timing returns to nominal flow in 4.2 minutes vs 45+ minutes in legacy cities.',
        activeNode: 'CITIZEN',
        targetSector: 'ALL',
        telemetry: { totalResolution: '4.2 minutes', baselineSaved: '41 minutes', livesPreserved: '100%' }
      }
    ];

    this.init();
  }

  init() {
    this.setupNodes();
    this.bindEvents();
    this.updateCascadeUI(0);

    // Canvas animation loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  setupNodes() {
    const w = this.canvas.parentElement.clientWidth;
    const h = 480;
    this.canvas.width = w;
    this.canvas.height = h;

    const centerX = w / 2;
    const centerY = h / 2 - 20;

    // Central AI Node
    this.aiNode = { id: 'AI_CORE', label: 'NOVA AI CORE', x: centerX, y: centerY, r: 28, color: '#00f0ff' };

    // 6 Sector Nodes surrounding AI
    const sectors = [
      { id: 'TRANSPORT', label: 'TRANSPORT', color: '#00f0ff' },
      { id: 'ENERGY', label: 'ENERGY', color: '#8b5cf6' },
      { id: 'HEALTHCARE', label: 'HEALTHCARE', color: '#f43f5e' },
      { id: 'EDUCATION', label: 'EDUCATION', color: '#f59e0b' },
      { id: 'ENVIRONMENT', label: 'ENVIRONMENT', color: '#10b981' },
      { id: 'GOVERNANCE', label: 'GOVERNANCE', color: '#a855f7' }
    ];

    this.sectorNodes = [];
    const radius = Math.min(w * 0.35, 170);

    sectors.forEach((s, idx) => {
      const angle = (idx / sectors.length) * Math.PI * 2 - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      this.sectorNodes.push({
        id: s.id,
        label: s.label,
        x: x,
        y: y,
        r: 18,
        color: s.color
      });
    });

    // Citizen Wellbeing Anchor Node (Bottom Center)
    this.citizenNode = {
      id: 'CITIZEN',
      label: 'CITIZEN WELLBEING',
      x: centerX,
      y: h - 35,
      r: 22,
      color: '#10b981'
    };

    // Connections
    this.links = [];
    // AI Core to each Sector
    this.sectorNodes.forEach(node => {
      this.links.push({ from: this.aiNode, to: node, color: node.color });
      this.links.push({ from: node, to: this.citizenNode, color: 'rgba(255,255,255,0.1)' });
    });
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      if (!this.canvas) return;
      this.setupNodes();
    });

    // Step Nodes click in track
    const stepButtons = document.querySelectorAll('.cascade-step-node');
    stepButtons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        if (window.novaAudio) window.novaAudio.playClick();
        this.goToStep(idx);
      });
    });

    // Next / Auto buttons
    const nextBtn = document.getElementById('cascade-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (window.novaAudio) window.novaAudio.playClick();
        const next = (this.currentStep + 1) % this.cascadeData.length;
        this.goToStep(next);
      });
    }

    const autoBtn = document.getElementById('cascade-auto-btn');
    if (autoBtn) {
      autoBtn.addEventListener('click', () => {
        if (this.autoInterval) {
          clearInterval(this.autoInterval);
          this.autoInterval = null;
          autoBtn.textContent = 'AUTO PLAY';
          autoBtn.classList.remove('active');
        } else {
          autoBtn.textContent = 'PAUSE';
          autoBtn.classList.add('active');
          this.autoInterval = setInterval(() => {
            const next = (this.currentStep + 1) % this.cascadeData.length;
            this.goToStep(next);
          }, 2400);
        }
      });
    }
  }

  goToStep(index) {
    this.currentStep = index;
    this.updateCascadeUI(index);
    this.triggerPulseForStep(index);
  }

  triggerPulseForStep(index) {
    const data = this.cascadeData[index];
    // Find corresponding node
    const target = this.sectorNodes.find(n => n.id === data.activeNode) || (data.activeNode === 'CITIZEN' ? this.citizenNode : this.aiNode);

    // Spawn pulses from AI Core to target
    this.pulses.push({
      fromX: this.aiNode.x,
      fromY: this.aiNode.y,
      toX: target.x,
      toY: target.y,
      color: target.color,
      progress: 0,
      speed: 0.03
    });
  }

  updateCascadeUI(index) {
    const data = this.cascadeData[index];
    if (!data) return;

    // Update track buttons
    const stepButtons = document.querySelectorAll('.cascade-step-node');
    stepButtons.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
      btn.classList.toggle('completed', idx < index);
    });

    // Update Detail Panel
    const badgeEl = document.getElementById('cascade-step-badge');
    const titleEl = document.getElementById('cascade-step-title');
    const descEl = document.getElementById('cascade-step-desc');
    const tel1 = document.getElementById('cascade-tel-1');
    const tel2 = document.getElementById('cascade-tel-2');
    const tel3 = document.getElementById('cascade-tel-3');

    if (badgeEl) badgeEl.textContent = data.badge;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;

    const keys = Object.keys(data.telemetry);
    if (tel1 && keys[0]) tel1.textContent = `${keys[0].toUpperCase()}: ${data.telemetry[keys[0]]}`;
    if (tel2 && keys[1]) tel2.textContent = `${keys[1].toUpperCase()}: ${data.telemetry[keys[1]]}`;
    if (tel3 && keys[2]) tel3.textContent = `${keys[2].toUpperCase()}: ${data.telemetry[keys[2]]}`;
  }

  animate() {
    requestAnimationFrame(this.animate);
    if (!this.ctx || !this.aiNode) return;

    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Draw Links
    this.links.forEach(link => {
      ctx.beginPath();
      ctx.moveTo(link.from.x, link.from.y);
      ctx.lineTo(link.to.x, link.to.y);
      ctx.strokeStyle = link.color;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });

    // Animate & Draw Pulses
    for (let i = this.pulses.length - 1; i >= 0; i--) {
      const p = this.pulses[i];
      p.progress += p.speed;
      if (p.progress >= 1) {
        this.pulses.splice(i, 1);
        continue;
      }

      const curX = p.fromX + (p.toX - p.fromX) * p.progress;
      const curY = p.fromY + (p.toY - p.fromY) * p.progress;

      ctx.beginPath();
      ctx.arc(curX, curY, 4, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0; // Reset
    }

    // Draw Sector Nodes
    this.sectorNodes.forEach(node => {
      const isHighlighted = this.cascadeData[this.currentStep].activeNode === node.id;

      // Glow ring if active
      if (isHighlighted) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r + 8, 0, Math.PI * 2);
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      ctx.fillStyle = '#0e121a';
      ctx.fill();
      ctx.strokeStyle = node.color;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Node text label
      ctx.font = '500 11px "JetBrains Mono", monospace';
      ctx.fillStyle = isHighlighted ? '#ffffff' : '#94a3b8';
      ctx.textAlign = 'center';
      ctx.fillText(node.label, node.x, node.y + node.r + 16);
    });

    // Draw Citizen Anchor Node
    const isCitizenActive = this.cascadeData[this.currentStep].activeNode === 'CITIZEN';
    ctx.beginPath();
    ctx.arc(this.citizenNode.x, this.citizenNode.y, this.citizenNode.r, 0, Math.PI * 2);
    ctx.fillStyle = isCitizenActive ? 'rgba(16,185,129,0.2)' : '#0e121a';
    ctx.fill();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = isCitizenActive ? 3 : 1.5;
    ctx.stroke();

    ctx.font = '600 11px "JetBrains Mono", monospace';
    ctx.fillStyle = '#10b981';
    ctx.textAlign = 'center';
    ctx.fillText('CITIZEN WELLBEING (OUTCOME ANCHOR)', this.citizenNode.x, this.citizenNode.y + 4);

    // Draw AI Core Node (Center)
    ctx.beginPath();
    ctx.arc(this.aiNode.x, this.aiNode.y, this.aiNode.r, 0, Math.PI * 2);
    ctx.fillStyle = '#0e1422';
    ctx.fill();
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Inner core pulse
    const pulseR = 8 + Math.sin(Date.now() * 0.005) * 2.5;
    ctx.beginPath();
    ctx.arc(this.aiNode.x, this.aiNode.y, pulseR, 0, Math.PI * 2);
    ctx.fillStyle = '#00f0ff';
    ctx.fill();

    ctx.font = '700 11px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText('AI HUB', this.aiNode.x, this.aiNode.y - this.aiNode.r - 8);
  }
}

window.novaNetwork = new NovaNetworkGraph();


/* --- simulation.js --- */
/**
 * NOVA SIMULATION ENGINE — "SHAPE THE FUTURE"
 * Flagship interactive decision system.
 * Deterministic multi-metric state calculation across 4 real scenarios.
 * Emits updates to the Live City Dashboard and Your NOVA Profile.
 */

class NovaSimulationEngine {
  constructor() {
    this.currentScenarioIndex = 0;
    this.userChoices = {}; // { heatwave: 'A', traffic: 'B', ... }
    this.metrics = { ...window.NOVA_CONFIG.baseline };

    this.scenarios = window.NOVA_CONFIG.simulationScenarios;
    this.init();
  }

  init() {
    this.bindTabButtons();
    this.renderScenario(0);
  }

  bindTabButtons() {
    const tabButtons = document.querySelectorAll('.sim-tab-btn');
    tabButtons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        if (window.novaAudio) window.novaAudio.playClick();
        this.currentScenarioIndex = idx;
        this.renderScenario(idx);
      });
    });
  }

  renderScenario(index) {
    const scenario = this.scenarios[index];
    if (!scenario) return;

    // Update Tab Buttons UI
    document.querySelectorAll('.sim-tab-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
      const isCompleted = !!this.userChoices[this.scenarios[idx].id];
      btn.classList.toggle('completed', isCompleted);
    });

    // Populate Left Card
    const badgeEl = document.getElementById('sim-badge-text');
    const headlineEl = document.getElementById('sim-headline-text');
    const briefEl = document.getElementById('sim-brief-text');
    const questionEl = document.getElementById('sim-question-text');
    const optionsContainer = document.getElementById('sim-options-container');

    if (badgeEl) badgeEl.textContent = scenario.badge;
    if (headlineEl) headlineEl.textContent = scenario.title;
    if (briefEl) briefEl.textContent = scenario.situation;
    if (questionEl) questionEl.textContent = scenario.question;

    // Render Options
    if (optionsContainer) {
      const activeChoice = this.userChoices[scenario.id];
      optionsContainer.innerHTML = scenario.options.map(opt => {
        const isSelected = activeChoice === opt.key;
        return `
          <div class="sim-option-card ${isSelected ? 'selected' : ''}" data-key="${opt.key}">
            <div class="sim-option-key">${opt.key}</div>
            <div class="sim-option-body">
              <div class="sim-option-title">${opt.title}</div>
              <div class="sim-option-subtext">${opt.desc}</div>
            </div>
          </div>
        `;
      }).join('');

      // Add click handlers to options
      optionsContainer.querySelectorAll('.sim-option-card').forEach(card => {
        card.addEventListener('click', () => {
          const key = card.getAttribute('data-key');
          this.handleChoice(scenario.id, key);
        });
      });
    }

    // Render Right Panel (Consequences)
    this.renderConsequences(scenario);
  }

  handleChoice(scenarioId, optionKey) {
    if (window.novaAudio) window.novaAudio.playChime(659.25);

    this.userChoices[scenarioId] = optionKey;
    this.recalculateMetrics();

    // Re-render current scenario
    this.renderScenario(this.currentScenarioIndex);

    // Notify Dashboard and Profile engines
    this.notifySubsystems();
  }

  recalculateMetrics() {
    // Reset to baseline
    const newMetrics = { ...window.NOVA_CONFIG.baseline };

    // Apply deterministic deltas from all made choices
    Object.keys(this.userChoices).forEach(sId => {
      const scenario = this.scenarios.find(s => s.id === sId);
      if (!scenario) return;
      const choice = this.userChoices[sId];
      const opt = scenario.options.find(o => o.key === choice);
      if (!opt) return;

      // Accumulate deltas
      newMetrics.sustainability = Math.min(100, Math.max(30, newMetrics.sustainability + opt.deltas.sustainability));
      newMetrics.safety = Math.min(100, Math.max(30, newMetrics.safety + opt.deltas.safety));
      newMetrics.efficiency = Math.min(100, Math.max(30, newMetrics.efficiency + opt.deltas.efficiency));
      newMetrics.wellbeing = Math.min(100, Math.max(30, newMetrics.wellbeing + opt.deltas.wellbeing));
      newMetrics.innovation = Math.min(100, Math.max(30, newMetrics.innovation + opt.deltas.innovation));
    });

    this.metrics = newMetrics;
  }

  renderConsequences(scenario) {
    const activeChoiceKey = this.userChoices[scenario.id];
    const narrativeEl = document.getElementById('sim-narrative-content');
    const deltasContainer = document.getElementById('sim-deltas-container');

    if (!activeChoiceKey) {
      if (narrativeEl) {
        narrativeEl.innerHTML = `
          <div class="sim-narrative-title">AWAITING EXECUTIVE DECISION</div>
          <div class="sim-narrative-text">Select an option on the left to simulate NOVA's systemic cascade and observe consequential shifts in sustainability, safety, efficiency, and citizen wellbeing.</div>
        `;
      }
      if (deltasContainer) {
        deltasContainer.innerHTML = `
          <div class="sim-metric-card">
            <div class="sim-metric-name">Sustainability</div>
            <div class="sim-metric-val-row">
              <span class="sim-metric-current-val">${this.metrics.sustainability}%</span>
              <span class="sim-metric-delta-tag neutral">±0%</span>
            </div>
          </div>
          <div class="sim-metric-card">
            <div class="sim-metric-name">Safety</div>
            <div class="sim-metric-val-row">
              <span class="sim-metric-current-val">${this.metrics.safety}%</span>
              <span class="sim-metric-delta-tag neutral">±0%</span>
            </div>
          </div>
          <div class="sim-metric-card">
            <div class="sim-metric-name">Efficiency</div>
            <div class="sim-metric-val-row">
              <span class="sim-metric-current-val">${this.metrics.efficiency}%</span>
              <span class="sim-metric-delta-tag neutral">±0%</span>
            </div>
          </div>
          <div class="sim-metric-card">
            <div class="sim-metric-name">Citizen Wellbeing</div>
            <div class="sim-metric-val-row">
              <span class="sim-metric-current-val">${this.metrics.wellbeing}%</span>
              <span class="sim-metric-delta-tag neutral">±0%</span>
            </div>
          </div>
        `;
      }
      return;
    }

    const opt = scenario.options.find(o => o.key === activeChoiceKey);
    if (!opt) return;

    if (narrativeEl) {
      narrativeEl.innerHTML = `
        <div class="sim-narrative-title">DECISION ENACTED: OPTION ${opt.key} — ${opt.title}</div>
        <div class="sim-narrative-text">${opt.narrative}</div>
      `;
    }

    if (deltasContainer) {
      const formatDelta = (val) => {
        if (val > 0) return `<span class="sim-metric-delta-tag positive">+${val}%</span>`;
        if (val < 0) return `<span class="sim-metric-delta-tag negative">${val}%</span>`;
        return `<span class="sim-metric-delta-tag neutral">0%</span>`;
      };

      deltasContainer.innerHTML = `
        <div class="sim-metric-card">
          <div class="sim-metric-name">Sustainability</div>
          <div class="sim-metric-val-row">
            <span class="sim-metric-current-val">${this.metrics.sustainability}%</span>
            ${formatDelta(opt.deltas.sustainability)}
          </div>
        </div>
        <div class="sim-metric-card">
          <div class="sim-metric-name">Safety</div>
          <div class="sim-metric-val-row">
            <span class="sim-metric-current-val">${this.metrics.safety}%</span>
            ${formatDelta(opt.deltas.safety)}
          </div>
        </div>
        <div class="sim-metric-card">
          <div class="sim-metric-name">Efficiency</div>
          <div class="sim-metric-val-row">
            <span class="sim-metric-current-val">${this.metrics.efficiency}%</span>
            ${formatDelta(opt.deltas.efficiency)}
          </div>
        </div>
        <div class="sim-metric-card">
          <div class="sim-metric-name">Citizen Wellbeing</div>
          <div class="sim-metric-val-row">
            <span class="sim-metric-current-val">${this.metrics.wellbeing}%</span>
            ${formatDelta(opt.deltas.wellbeing)}
          </div>
        </div>
      `;
    }

    // Update Progress Callout
    const completedCount = Object.keys(this.userChoices).length;
    const progressEl = document.getElementById('sim-progress-text');
    if (progressEl) {
      progressEl.textContent = `SIMULATION PROGRESS: ${completedCount} / 4 SCENARIOS DECIDED`;
    }
  }

  notifySubsystems() {
    // Custom Event for app-wide reactive binding
    window.dispatchEvent(new CustomEvent('nova:metrics-updated', {
      detail: {
        metrics: this.metrics,
        choices: this.userChoices,
        isComplete: Object.keys(this.userChoices).length >= 4
      }
    }));
  }

  resetSimulation() {
    this.userChoices = {};
    this.metrics = { ...window.NOVA_CONFIG.baseline };
    this.currentScenarioIndex = 0;
    this.renderScenario(0);
    this.notifySubsystems();
    if (window.novaAudio) window.novaAudio.playChime(440);
  }
}

window.novaSimulation = new NovaSimulationEngine();


/* --- human-ai.js --- */
/**
 * NOVA HUMAN + AI — ETHICAL DECISION MATRIX & POLICY OVERRIDE
 * Demonstrates responsible AI governance and human veto authority.
 * Features Accept / Modify (with sliders) / Reject pathways.
 */

class NovaHumanAI {
  constructor() {
    this.currentMode = 'modify'; // 'accept', 'modify', 'reject'
    this.sliders = {
      warmthFloor: 21,
      vulnerableBuffer: 95,
      industrialSharing: 70
    };
    this.init();
  }

  init() {
    this.bindActionButtons();
    this.bindSliders();
    this.updateOutcome();
  }

  bindActionButtons() {
    const buttons = document.querySelectorAll('.policy-action-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        if (!action) return;
        if (window.novaAudio) window.novaAudio.playClick();

        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        this.currentMode = action;

        const drawer = document.getElementById('policy-sliders-drawer');
        if (drawer) {
          drawer.classList.toggle('visible', action === 'modify');
        }

        this.updateOutcome();
      });
    });
  }

  bindSliders() {
    const s1 = document.getElementById('slider-warmth');
    const s2 = document.getElementById('slider-vulnerable');
    const s3 = document.getElementById('slider-industrial');

    if (s1) {
      s1.addEventListener('input', (e) => {
        this.sliders.warmthFloor = e.target.value;
        const valEl = document.getElementById('val-warmth');
        if (valEl) valEl.textContent = `${this.sliders.warmthFloor}°C`;
        this.updateOutcome();
      });
    }

    if (s2) {
      s2.addEventListener('input', (e) => {
        this.sliders.vulnerableBuffer = e.target.value;
        const valEl = document.getElementById('val-vulnerable');
        if (valEl) valEl.textContent = `${this.sliders.vulnerableBuffer}%`;
        this.updateOutcome();
      });
    }

    if (s3) {
      s3.addEventListener('input', (e) => {
        this.sliders.industrialSharing = e.target.value;
        const valEl = document.getElementById('val-industrial');
        if (valEl) valEl.textContent = `${this.sliders.industrialSharing}%`;
        this.updateOutcome();
      });
    }
  }

  updateOutcome() {
    const outcomeBox = document.getElementById('policy-outcome-content');
    if (!outcomeBox) return;

    if (this.currentMode === 'accept') {
      outcomeBox.innerHTML = `
        <div class="policy-outcome-title" style="color: var(--amber-core);">POLICY ENACTED: RAW ALGORITHMIC EXECUTION</div>
        <div class="policy-outcome-text">
          NOVA strictly follows the AI efficiency model. Heating across 240,000 residential apartments is throttled by 4°C. 
          The electrical grid achieves 99.4% stability (+18% energy efficiency), but public clinics report a 14% uptick in hypothermic complications among elderly citizens.
          <strong>Lesson: Algorithmic optimization blind to empathy sacrifices human wellbeing.</strong>
        </div>
      `;
    } else if (this.currentMode === 'modify') {
      outcomeBox.innerHTML = `
        <div class="policy-outcome-title" style="color: var(--cyan-core);">POLICY ENACTED: HUMAN-MODIFIED EQUILIBRIUM</div>
        <div class="policy-outcome-text">
          Human leaders adjusted the AI parameters: guaranteed minimum warmth floor locked at <strong>${this.sliders.warmthFloor}°C</strong>, 
          vulnerable citizen exemption maintained at <strong>${this.sliders.vulnerableBuffer}%</strong>, and industrial sectors mandated to absorb <strong>${this.sliders.industrialSharing}%</strong> of load shedding.
          Result: Zero hypothermia cases, grid stability sustained at 96.2%, and high public trust.
          <strong>The Ideal: AI handles predictive complexity; humans safeguard ethics and values.</strong>
        </div>
      `;
    } else if (this.currentMode === 'reject') {
      outcomeBox.innerHTML = `
        <div class="policy-outcome-title" style="color: var(--rose-core);">POLICY ENACTED: HUMAN EXECUTIVE VETO</div>
        <div class="policy-outcome-text">
          Elected human council completely rejects residential rationing. Municipal emergency battery reserves are discharged to 40%, and a public appeal for voluntary conservation is issued.
          Citizens voluntarily reduce power by 12%.
          <strong>Lesson: The human right to refuse automated governance is the foundational bedrock of civic liberty.</strong>
        </div>
      `;
    }
  }
}

window.novaHumanAI = new NovaHumanAI();


/* --- dashboard.js --- */
/**
 * NOVA LIVE DASHBOARD & TELEMETRY MONITOR
 * Real-time architectural monitoring of 8 core city vital indicators.
 * Reacts to simulation decisions and updates live Chart.js sparkline visualizations.
 */

class NovaDashboard {
  constructor() {
    this.chart = null;
    this.init();
  }

  init() {
    this.initChart();
    this.startLiveTickers();
    this.listenToSimulation();
  }

  initChart() {
    const canvas = document.getElementById('dash-trend-canvas');
    if (!canvas || typeof Chart === 'undefined') return;

    const ctx = canvas.getContext('2d');

    // Create subtle gradient fill
    const gradCyan = ctx.createLinearGradient(0, 0, 0, 240);
    gradCyan.addColorStop(0, 'rgba(0, 240, 255, 0.25)');
    gradCyan.addColorStop(1, 'rgba(0, 240, 255, 0.0)');

    const gradViolet = ctx.createLinearGradient(0, 0, 0, 240);
    gradViolet.addColorStop(0, 'rgba(139, 92, 246, 0.25)');
    gradViolet.addColorStop(1, 'rgba(139, 92, 246, 0.0)');

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', 'LIVE'],
        datasets: [
          {
            label: 'Clean Energy Output (%)',
            data: [82, 79, 85, 94, 98, 95, 91, 86, 88.6],
            borderColor: '#00f0ff',
            backgroundColor: gradCyan,
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 3,
            pointBackgroundColor: '#00f0ff'
          },
          {
            label: 'Citizen Wellbeing Index',
            data: [88, 88, 89, 90, 92, 91, 90, 91, 91],
            borderColor: '#8b5cf6',
            backgroundColor: gradViolet,
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 3,
            pointBackgroundColor: '#8b5cf6'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          legend: {
            labels: {
              color: '#94a3b8',
              font: { family: "'JetBrains Mono', monospace", size: 11 }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(14, 18, 26, 0.95)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            titleColor: '#00f0ff',
            bodyColor: '#f8fafc',
            titleFont: { family: "'JetBrains Mono', monospace" }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: { color: '#64748b', font: { family: "'JetBrains Mono', monospace", size: 10 } }
          },
          y: {
            min: 50,
            max: 100,
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: { color: '#64748b', font: { family: "'JetBrains Mono', monospace", size: 10 } }
          }
        }
      }
    });
  }

  listenToSimulation() {
    window.addEventListener('nova:metrics-updated', (e) => {
      const { metrics } = e.detail;
      this.updateMetrics(metrics);
    });
  }

  updateMetrics(m) {
    const elEnergy = document.getElementById('dash-val-energy');
    const elAqi = document.getElementById('dash-val-aqi');
    const elTraffic = document.getElementById('dash-val-traffic');
    const elHealthcare = document.getElementById('dash-val-health');
    const elRenewable = document.getElementById('dash-val-renew');
    const elWellbeing = document.getElementById('dash-val-wellbeing');
    const elSustainability = document.getElementById('dash-val-sustainability');

    if (elEnergy) elEnergy.textContent = `${m.efficiency.toFixed(1)}%`;
    if (elAqi) elAqi.textContent = Math.round(14 * (100 / m.sustainability));
    if (elTraffic) elTraffic.textContent = `${Math.max(4, Math.round(25 - (m.efficiency * 0.15)))}%`;
    if (elHealthcare) elHealthcare.textContent = `${(5.5 - (m.safety * 0.025)).toFixed(1)} min`;
    if (elRenewable) elRenewable.textContent = `${(m.sustainability * 0.98).toFixed(1)}%`;
    if (elWellbeing) elWellbeing.textContent = `${m.wellbeing}%`;
    if (elSustainability) elSustainability.textContent = `${m.sustainability}%`;

    // Update Breakdown Bars
    const barEnergy = document.getElementById('bar-energy');
    const barSustainability = document.getElementById('bar-sustainability');
    const barWellbeing = document.getElementById('bar-wellbeing');

    if (barEnergy) barEnergy.style.width = `${m.efficiency}%`;
    if (barSustainability) barSustainability.style.width = `${m.sustainability}%`;
    if (barWellbeing) barWellbeing.style.width = `${m.wellbeing}%`;

    // Update Chart Live Point
    if (this.chart) {
      this.chart.data.datasets[0].data[8] = m.efficiency;
      this.chart.data.datasets[1].data[8] = m.wellbeing;
      this.chart.update('none');
    }
  }

  startLiveTickers() {
    // Dynamic population live tick
    const popEl = document.getElementById('dash-val-pop');
    let pop = 2450120;
    setInterval(() => {
      pop += Math.floor(Math.random() * 3) - 1;
      if (popEl) popEl.textContent = pop.toLocaleString();
    }, 3500);

    // Dynamic simulation timestamp clock
    const clockEl = document.getElementById('dash-live-clock');
    const updateClock = () => {
      if (!clockEl) return;
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0] + ' UTC';
      clockEl.textContent = timeStr;
    };
    updateClock();
    setInterval(updateClock, 1000);
  }
}

window.novaDashboard = new NovaDashboard();


/* --- timeline.js --- */
/**
 * NOVA FUTURE TIMELINE — EVOLUTIONARY PATHWAYS (2026 TO 2050)
 * Manages the interactive scrubber and dynamic multi-sector projection cards.
 */

class NovaTimeline {
  constructor() {
    this.currentYear = '2026';
    this.years = ['2026', '2030', '2035', '2040', '2050'];
    this.timelineData = window.NOVA_CONFIG.timeline;
    this.init();
  }

  init() {
    this.bindNodes();
    this.selectYear('2026');
  }

  bindNodes() {
    const nodes = document.querySelectorAll('.timeline-year-node');
    nodes.forEach(node => {
      node.addEventListener('click', () => {
        const year = node.getAttribute('data-year');
        if (year && this.timelineData[year]) {
          if (window.novaAudio) window.novaAudio.playClick();
          this.selectYear(year);
        }
      });
    });
  }

  selectYear(year) {
    this.currentYear = year;
    const era = this.timelineData[year];
    if (!era) return;

    // Update Nodes & Rail Fill
    const yearIndex = this.years.indexOf(year);
    const progressPercent = (yearIndex / (this.years.length - 1)) * 100;

    const progressLine = document.getElementById('timeline-rail-progress');
    if (progressLine) {
      progressLine.style.width = `${progressPercent}%`;
    }

    const nodes = document.querySelectorAll('.timeline-year-node');
    nodes.forEach((n, idx) => {
      n.classList.toggle('active', n.getAttribute('data-year') === year);
      n.classList.toggle('reached', idx <= yearIndex);
    });

    // Update Headline & Theme
    const yearBadge = document.getElementById('era-year-badge');
    const titleEl = document.getElementById('era-title');
    const descEl = document.getElementById('era-desc');

    if (yearBadge) yearBadge.textContent = `HORIZON // YEAR ${era.year}`;
    if (titleEl) titleEl.textContent = era.theme;
    if (descEl) descEl.textContent = era.desc;

    // Render 6 Sector Cards
    const cardsContainer = document.getElementById('timeline-cards-container');
    if (cardsContainer) {
      cardsContainer.innerHTML = era.sectors.map(sec => `
        <div class="timeline-sector-card">
          <div class="sector-card-header">
            <span class="sector-name">${sec.sector}</span>
            <span class="badge badge-cyan">${era.year} MILESTONE</span>
          </div>
          <div class="sector-milestone-title">${sec.title}</div>
          <div class="sector-milestone-desc">${sec.desc}</div>
          <div class="sector-status-pill">System Integration: Verified</div>
        </div>
      `).join('');
    }
  }
}

window.novaTimeline = new NovaTimeline();


/* --- your-nova.js --- */
/**
 * NOVA "YOUR NOVA" PROFILE & RADAR EVALUATION
 * Aggregates decisions across all 4 simulation scenarios.
 * Computes radar chart dimensions, assigns a city archetype,
 * and allows resetting via "REBUILD NOVA".
 */

class NovaProfileEngine {
  constructor() {
    this.radarChart = null;
    this.init();
  }

  init() {
    this.initRadarChart();
    this.bindRebuildButton();
    this.bindExportButton();
    this.listenToMetrics();
    this.evaluateProfile(window.NOVA_CONFIG.baseline);
  }

  initRadarChart() {
    const canvas = document.getElementById('profile-radar-chart');
    if (!canvas || typeof Chart === 'undefined') return;

    const ctx = canvas.getContext('2d');

    this.radarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Sustainability', 'Safety', 'Efficiency', 'Innovation', 'Wellbeing'],
        datasets: [{
          label: 'Your City Alignment (%)',
          data: [89, 90, 92, 85, 91],
          backgroundColor: 'rgba(0, 240, 255, 0.25)',
          borderColor: '#00f0ff',
          borderWidth: 2,
          pointBackgroundColor: '#00f0ff',
          pointBorderColor: '#ffffff',
          pointHoverBackgroundColor: '#ffffff',
          pointHoverBorderColor: '#00f0ff',
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(14, 18, 26, 0.95)',
            borderColor: 'rgba(0, 240, 255, 0.3)',
            borderWidth: 1,
            titleColor: '#00f0ff',
            bodyColor: '#f8fafc',
            titleFont: { family: "'JetBrains Mono', monospace" }
          }
        },
        scales: {
          r: {
            angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
            grid: { color: 'rgba(255, 255, 255, 0.08)' },
            pointLabels: {
              color: '#cbd5e1',
              font: { family: "'JetBrains Mono', monospace", size: 11, weight: '600' }
            },
            ticks: {
              display: false,
              min: 40,
              max: 100,
              stepSize: 20
            },
            suggestedMin: 50,
            suggestedMax: 100
          }
        }
      }
    });
  }

  listenToMetrics() {
    window.addEventListener('nova:metrics-updated', (e) => {
      const { metrics, isComplete } = e.detail;
      this.evaluateProfile(metrics, isComplete);
    });
  }

  evaluateProfile(m, isComplete = false) {
    // 1. Update Progress Bars & Values
    const elSust = document.getElementById('prof-val-sust');
    const elSafe = document.getElementById('prof-val-safe');
    const elEff = document.getElementById('prof-val-eff');
    const elInno = document.getElementById('prof-val-inno');
    const elWell = document.getElementById('prof-val-well');

    const fillSust = document.getElementById('prof-fill-sust');
    const fillSafe = document.getElementById('prof-fill-safe');
    const fillEff = document.getElementById('prof-fill-eff');
    const fillInno = document.getElementById('prof-fill-inno');
    const fillWell = document.getElementById('prof-fill-well');

    if (elSust) elSust.textContent = `${m.sustainability}%`;
    if (elSafe) elSafe.textContent = `${m.safety}%`;
    if (elEff) elEff.textContent = `${m.efficiency}%`;
    if (elInno) elInno.textContent = `${m.innovation}%`;
    if (elWell) elWell.textContent = `${m.wellbeing}%`;

    if (fillSust) fillSust.style.width = `${m.sustainability}%`;
    if (fillSafe) fillSafe.style.width = `${m.safety}%`;
    if (fillEff) fillEff.style.width = `${m.efficiency}%`;
    if (fillInno) fillInno.style.width = `${m.innovation}%`;
    if (fillWell) fillWell.style.width = `${m.wellbeing}%`;

    // 2. Update Radar Chart
    if (this.radarChart) {
      this.radarChart.data.datasets[0].data = [
        m.sustainability,
        m.safety,
        m.efficiency,
        m.innovation,
        m.wellbeing
      ];
      this.radarChart.update();
    }

    // 3. Determine Archetype
    let archetype = window.NOVA_CONFIG.archetypes[3]; // Default Vanguard

    if (m.wellbeing >= 90 && m.sustainability >= 88) {
      archetype = window.NOVA_CONFIG.archetypes[0]; // The Symbiotic Architect
    } else if (m.wellbeing >= 92) {
      archetype = window.NOVA_CONFIG.archetypes[1]; // The Human-First Pioneer
    } else if (m.sustainability >= 90) {
      archetype = window.NOVA_CONFIG.archetypes[2]; // The Resilient Arbiter
    }

    const titleEl = document.getElementById('profile-archetype-title');
    const quoteEl = document.getElementById('profile-verdict-quote');
    const descEl = document.getElementById('profile-archetype-desc');

    if (titleEl) titleEl.textContent = archetype.name;
    if (quoteEl) quoteEl.textContent = `"${archetype.quote}"`;
    if (descEl) descEl.textContent = archetype.desc;
  }

  bindRebuildButton() {
    const rebuildBtn = document.getElementById('btn-rebuild-nova');
    if (rebuildBtn) {
      rebuildBtn.addEventListener('click', () => {
        if (window.novaSimulation) {
          window.novaSimulation.resetSimulation();
        }
        // Smooth scroll back to simulation section
        const simSection = document.getElementById('simulate');
        if (simSection) {
          simSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  bindExportButton() {
    const exportBtn = document.getElementById('btn-export-profile');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        if (window.novaAudio) window.novaAudio.playSuccessChord();
        const title = document.getElementById('profile-archetype-title')?.textContent || 'NOVA City Profile';
        const summary = `[NOVA City Profile: ${title}]\nSustainability: ${document.getElementById('prof-val-sust')?.textContent}\nSafety: ${document.getElementById('prof-val-safe')?.textContent}\nEfficiency: ${document.getElementById('prof-val-eff')?.textContent}\nWellbeing: ${document.getElementById('prof-val-well')?.textContent}\nInnovation: ${document.getElementById('prof-val-inno')?.textContent}\n"The city doesn't wait for the future. It builds it."`;

        if (navigator.clipboard) {
          navigator.clipboard.writeText(summary).then(() => {
            alert('City Profile copied to clipboard!\n\n' + summary);
          });
        } else {
          alert(summary);
        }
      });
    }
  }
}

window.novaProfile = new NovaProfileEngine();


/* --- main.js --- */
/**
 * NOVA MAIN CONTROLLER
 * App orchestration, navigation, smooth scrolling, HUD coordinate updates,
 * and sources filtering.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroActions();
  initSourcesTable();
  initHudTelemetry();
  initIntersectionObserver();
});

// 1. Navigation & Mobile Drawer
function initNavbar() {
  const nav = document.querySelector('.nova-nav');
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll listener for sticky navbar blur intensity
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      if (window.novaAudio) window.novaAudio.playClick();
    });

    // Close menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Active section indicator in nav
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(sec => {
      const secH = sec.offsetHeight;
      const secTop = sec.offsetTop - 100;
      const secId = sec.getAttribute('id');
      if (scrollY > secTop && scrollY <= secTop + secH) {
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${secId}`);
        });
      }
    });
  });
}

// 2. Hero Action Buttons
function initHeroActions() {
  const enterBtn = document.getElementById('hero-enter-btn');
  const navEnterBtn = document.getElementById('nav-enter-btn');
  const exploreBtn = document.getElementById('hero-explore-btn');

  const handleEnterNova = (e) => {
    e.preventDefault();
    if (window.novaAudio) window.novaAudio.playChime(880, 0.3);

    // If 3D city is active, trigger dramatic camera dive
    if (window.nova3DCity) {
      window.nova3DCity.diveIntoCity(() => {
        const citySec = document.getElementById('city');
        if (citySec) citySec.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      const citySec = document.getElementById('city');
      if (citySec) citySec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (enterBtn) enterBtn.addEventListener('click', handleEnterNova);
  if (navEnterBtn) navEnterBtn.addEventListener('click', handleEnterNova);

  if (exploreBtn) {
    exploreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.novaAudio) window.novaAudio.playClick();
      const intelSec = document.getElementById('intelligence');
      if (intelSec) intelSec.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// 3. Sources Filtering Table
function initSourcesTable() {
  const tbody = document.getElementById('sources-table-body');
  const tabBtns = document.querySelectorAll('.sources-tab-btn');
  if (!tbody || !window.NOVA_CONFIG) return;

  const renderRows = (filter) => {
    const sources = window.NOVA_CONFIG.sources.filter(s => {
      if (filter === 'all') return true;
      if (filter === 'real') return s.category === 'REAL TECHNOLOGY';
      if (filter === 'concept') return s.category === 'NOVA FUTURE CONCEPT';
      return true;
    });

    tbody.innerHTML = sources.map(s => `
      <tr>
        <td>
          <span class="source-tech-name">${s.techName}</span>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">${s.sector}</span>
        </td>
        <td>
          <span class="${s.badgeClass}">${s.category}</span>
        </td>
        <td>
          <strong>${s.organization}</strong>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">${s.citation}</p>
        </td>
        <td>
          <p style="font-size: 0.82rem; line-height: 1.5;">${s.realApplication}</p>
        </td>
      </tr>
    `).join('');
  };

  // Initial render
  renderRows('all');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      if (window.novaAudio) window.novaAudio.playClick();
      renderRows(filter);
    });
  });
}

// 4. Subtle HUD Telemetry Coordinate Fluctuations
function initHudTelemetry() {
  const freqEl = document.getElementById('hud-freq');
  if (freqEl) {
    setInterval(() => {
      const f = (60.01 + (Math.random() - 0.5) * 0.03).toFixed(2);
      freqEl.textContent = `${f} Hz`;
    }, 2800);
  }
}

// 5. Scroll Reveal Micro-animations
function initIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.panel, .role-card, .sim-scenario-box, .vision-pillar-card').forEach(el => {
    observer.observe(el);
  });
}


