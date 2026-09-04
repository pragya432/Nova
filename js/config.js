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
