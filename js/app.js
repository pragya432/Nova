/* NOVA MASTER APPLICATION BUNDLE */

/* --- config.js --- */
/**
 * NOVA CONFIGURATION & DATA REPOSITORY
 * Multi-City Intelligence Layer, Sector Zones, Deterministic Simulation Scenarios, and Timeline Data.
 * Theme: "Design the Digital Future"
 */

window.NOVA_CONFIG = {
  // Currently Active Selected City
  activeCityId: 'dehradun',

  // Helper to get active city object
  getActiveCity: function() {
    return this.cityData[this.activeCityId] || this.cityData.dehradun;
  },

  // Helper to switch active city dynamically
  setActiveCity: function(cityId) {
    if (this.cityData && this.cityData[cityId]) {
      this.activeCityId = cityId;
      this.simulationScenarios = this.cityData[cityId].scenarios;
      try {
        localStorage.setItem('nova_selected_city', cityId);
      } catch (e) {}
      window.dispatchEvent(new CustomEvent('nova:city-changed', {
        detail: { cityId: cityId, city: this.cityData[cityId] }
      }));
      return true;
    }
    return false;
  },

  // Dynamic baseline returning the active city metrics
  get baseline() {
    return this.getActiveCity().metrics;
  },


  // Structured City Intelligence Repository
  cityData: {
    dehradun: {
      id: 'dehradun',
      name: 'Dehradun',
      state: 'Uttarakhand',
      country: 'India',
      tagline: 'Doon Valley Ecological Basin & Foothill Innovation Corridor',
      coordinates: 'LAT 30.3165° N • LON 78.0322° E',
      populationDisplay: '840,000',
      heroContext: 'Balancing rapid Himalayan foothill urban expansion with natural drainage aquifers and protected Sal forest bio-corridors.',
      profile: {
        environment: 'Sensitive Himalayan Foothill Basin',
        airQuality: 'Moderate (AQI 68)',
        mobility: 'Valley Choke-points & Mountain Gateways',
        urbanGrowth: 'Rapid Foothill Sprawl (+4.2%/yr)',
        energy: 'Micro-Hydro + Rooftop Solar (74%)',
        healthcare: 'Regional Healthcare Gateway (4.1 min)',
        environmentalRisk: 'High (Flash Floods & Monsoon Runoff)',
        greenCover: 'High (54% Forest Canopy)'
      },
      metrics: {
        population: 840000,
        energyEfficiency: 86.4,
        airQualityIndex: 68,
        trafficCongestion: 42,
        healthcareResponse: 4.1,
        renewableMix: 74.0,
        sustainability: 84,
        safety: 82,
        efficiency: 78,
        wellbeing: 88,
        innovation: 80
      },
      challenges: [
        {
          tag: 'CRITICAL DRAINAGE',
          title: 'Monsoon Flash Flood & Catchment Saturation',
          desc: 'Rapid concretization has reduced natural stormwater percolation into valley gravel beds by 38%, turning the Rispana and Bindal seasonal streams into hazardous flood torrents.'
        },
        {
          tag: 'ECOSYSTEM INTEGRITY',
          title: 'Foothill Urban Encroachment into Forest Belts',
          desc: 'Accelerated real estate development encroaches on vital elephant and leopard migratory corridors linking the Doon Valley to Rajaji National Park.'
        },
        {
          tag: 'TRANSIT STRAIN',
          title: 'Topographical Traffic Choke-points on Tourism Corridors',
          desc: 'Peak seasonal pilgrim and tourist traffic bound for Mussoorie and Char Dham overloads the narrow valley gateway roads, causing multi-hour standstills.'
        },
        {
          tag: 'WATER SECURITY',
          title: 'Himalayan Spring Shed Depletion & Aquifer Stress',
          desc: 'Over-extraction of sub-surface mountain springs combined with erratic monsoons has depleted municipal drinking reserves in elevated residential neighborhoods.'
        }
      ],
      scenarios: [
        {
          id: 'flood',
          number: '01',
          title: 'Doon Valley Cloudburst & Flash Flood Risk',
          badge: 'MONSOON CATCHMENT SPIKE // 180MM RUNOFF',
          situation: 'A sudden Himalayan cloudburst has saturated the Doon Valley catchment. Water levels in the Rispana and Bindal streams are rising at 0.4 meters per hour, threatening 45,000 residents in low-lying settlements.',
          question: 'What should NOVA prioritize to protect the valley from catastrophic inundation?',
          options: [
            {
              key: 'A',
              title: 'Activate Subterranean Stormwater Siphons & Weirs',
              desc: 'Deploy automated weir gates to divert peak flood volume into underground aquifer recharge chambers along the valley fringe.',
              deltas: { sustainability: 14, safety: 18, efficiency: 8, wellbeing: 15, innovation: 12 },
              narrative: 'Automated weirs absorbed 62% of surge runoff, preventing riverbank breach and replenishing critical Doon aquifers for the dry season.'
            },
            {
              key: 'B',
              title: 'Deploy Natural Sponge Wetlands & Eco-Buffers',
              desc: 'Open designated peripheral flood meadow reservations to naturally pool runoff and filter silt through native riparian vegetation.',
              deltas: { sustainability: 18, safety: 12, efficiency: 6, wellbeing: 14, innovation: 8 },
              narrative: 'Ecological wetlands successfully absorbed the deluge with zero structural concrete damage, expanding Dehradun green cover.'
            },
            {
              key: 'C',
              title: 'Enforce Geo-fenced Catchment Evacuation',
              desc: 'Evacuate vulnerable riverside settlements via autonomous electric shuttles and convert municipal community centers into shelters.',
              deltas: { sustainability: 6, safety: 20, efficiency: -4, wellbeing: 12, innovation: 10 },
              narrative: 'Zero lives lost. 12,000 residents relocated within 45 minutes, though commercial transit was temporarily disrupted.'
            },
            {
              key: 'D',
              title: 'AI Multi-Agent Hydro-Topographical Balancing',
              desc: 'Permit NOVA AI to coordinate micro-dam retention, dynamic pump routing, and arterial lane closures across all 18 foothill watersheds.',
              deltas: { sustainability: 12, safety: 16, efficiency: 16, wellbeing: 10, innovation: 19 },
              narrative: 'Algorithmic micro-balancing prevented municipal flooding with surgical precision, keeping 92% of road networks operating.'
            }
          ]
        },
        {
          id: 'forest',
          number: '02',
          title: 'Foothill Forest Corridor Encroachment',
          badge: 'BIODIVERSITY ALERT // BUFFER ZONE STRESS',
          situation: 'Unauthorized peripheral real-estate construction is fragmenting the critical wildlife corridor between Thano forest and Rajaji National Park, increasing human-wildlife encounters.',
          question: 'How should NOVA enforce ecological zoning while accommodating necessary urban housing?',
          options: [
            {
              key: 'A',
              title: 'Demarcate Satellite Smart Bio-Fencing & Corridors',
              desc: 'Install bio-acoustic boundary sensors and automated wildlife underpasses, halting heavy machinery near migratory routes.',
              deltas: { sustainability: 17, safety: 14, efficiency: 9, wellbeing: 12, innovation: 15 },
              narrative: 'Migratory routes secured. Wildlife movement detected by infrared mesh, reducing human-wildlife conflict by 84%.'
            },
            {
              key: 'B',
              title: 'Mandate High-Density Vertical Eco-Clusters',
              desc: 'Moratorium on horizontal forest sprawl; incentivize redevelopment of central brownfields into net-zero vertical timber apartments.',
              deltas: { sustainability: 19, safety: 10, efficiency: 12, wellbeing: 14, innovation: 16 },
              narrative: 'Forest sprawl halted. 350 hectares of pristine Sal canopy permanently protected as an unbreachable green belt.'
            },
            {
              key: 'C',
              title: 'Civic Community Agro-Forestry Stewardship',
              desc: 'Grant local Himalayan villages digital tenure and economic credits to actively steward and monitor buffer zones.',
              deltas: { sustainability: 16, safety: 11, efficiency: 7, wellbeing: 18, innovation: 11 },
              narrative: 'Village cooperatives planted 80,000 indigenous broadleaf saplings, building high community ownership and trust.'
            },
            {
              key: 'D',
              title: 'Strict Automated Satellite Boundary Enforcement',
              desc: 'Real-time LiDAR and optical satellite tracking triggers automated stop-work injunctions on unauthorized earthmoving.',
              deltas: { sustainability: 15, safety: 13, efficiency: 14, wellbeing: 8, innovation: 18 },
              narrative: 'Zero illegal clearing tolerated. Developer compliance reached 99.1% within 14 days.'
            }
          ]
        },
        {
          id: 'transit',
          number: '03',
          title: 'Mussoorie Tourism Highway Gridlock',
          badge: 'CONGESTION SPIKE // RAJPUR GATEWAY',
          situation: 'A long weekend has brought 28,000 visitor vehicles toward the Mussoorie and Char Dham corridors, choking Dehradun arterials and blocking local ambulance routes.',
          question: 'Which mobility strategy clears the Doon Valley gateway?',
          options: [
            {
              key: 'A',
              title: 'Mandatory Peripheral Intermodal Park-and-Ride',
              desc: 'Intercept private combustion vehicles at suburban checkpoints and transfer visitors to zero-emission ropeways and autonomous electric buses.',
              deltas: { sustainability: 18, safety: 14, efficiency: 12, wellbeing: 13, innovation: 15 },
              narrative: 'Valley road emissions dropped 64% in 2 hours. Tourism revenue maintained with zero traffic paralysis.'
            },
            {
              key: 'B',
              title: 'Dynamic Digital Twin Congestion Toll Gates',
              desc: 'Implement dynamic geo-fenced entry pricing that surges during peak congestion, redirecting discretionary drivers to eco-parks.',
              deltas: { sustainability: 12, safety: 10, efficiency: 16, wellbeing: 9, innovation: 17 },
              narrative: 'Peak vehicle volume dropped 44%. Collected toll funds redirected into local mountain reforestation.'
            },
            {
              key: 'C',
              title: 'Emergency Medical Clear-Corridor Lock',
              desc: 'Geofence the right lane of Rajpur and Saharanpur roads exclusively for emergency ambulances and public transit pods.',
              deltas: { sustainability: 8, safety: 20, efficiency: 10, wellbeing: 15, innovation: 13 },
              narrative: 'Emergency response time held steady at 3.8 minutes despite crushing holiday tourism volumes.'
            },
            {
              key: 'D',
              title: 'Staggered Autonomous Signal Wave Synchronization',
              desc: 'Synchronize 84 traffic nodes across Dehradun to prioritize outward dispersal of tourist queues toward bypass expressways.',
              deltas: { sustainability: 10, safety: 12, efficiency: 17, wellbeing: 11, innovation: 14 },
              narrative: 'Average bottleneck delay slashed from 95 minutes down to 22 minutes via algorithmic signal timing.'
            }
          ]
        },
        {
          id: 'water',
          number: '04',
          title: 'Himalayan Spring Shed & Aquifer Depletion',
          badge: 'WATER RESERVES // -34% SPRING DISCHARGE',
          situation: 'Consecutive dry months have reduced spring discharge from upper mountain recharge zones by 34%. Upland residential sectors face severe pressure on piped water supply.',
          question: 'How does NOVA restore water balance and community resilience?',
          options: [
            {
              key: 'A',
              title: 'Deploy Decentralized Spring Shed Infiltration Trenches',
              desc: 'Construct contour trenches and check dams across 12 recharge ridges to capture future dew and rainfall directly into aquifers.',
              deltas: { sustainability: 20, safety: 12, efficiency: 10, wellbeing: 16, innovation: 12 },
              narrative: 'Groundwater table stabilized. Natural spring discharge rebounded 28% within one monsoon season.'
            },
            {
              key: 'B',
              title: 'Closed-Loop Greywater Recycling Mandate',
              desc: 'Require commercial complexes and schools to recycle 90% of non-potable water for gardening, HVAC, and sanitation.',
              deltas: { sustainability: 16, safety: 14, efficiency: 14, wellbeing: 12, innovation: 14 },
              narrative: 'Municipal fresh water demand dropped by 4.2 million liters daily, safeguarding residential reserves.'
            },
            {
              key: 'C',
              title: 'Smart Ultrasonic Leak Detection & Pressure Balancing',
              desc: 'Deploy acoustic acoustic IoT sensors across the aging pipeline network to eliminate 32% of hidden distribution loss.',
              deltas: { sustainability: 14, safety: 11, efficiency: 19, wellbeing: 13, innovation: 17 },
              narrative: 'Repaired 140 subterranean leaks within 72 hours, recovering 18% additional potable water supply.'
            },
            {
              key: 'D',
              title: 'Equitable Smart Metering with Basic Life Allowance',
              desc: 'Guarantee 120 liters/day free per citizen while heavily tier-pricing luxury villa swimming pools and lawn irrigation.',
              deltas: { sustainability: 15, safety: 16, efficiency: 11, wellbeing: 19, innovation: 11 },
              narrative: 'Strong civic approval. Wealthy commercial users curtailed waste while vulnerable families secured dignified access.'
            }
          ]
        }
      ]
    },

    delhi: {
      id: 'delhi',
      name: 'Delhi NCR',
      state: 'National Capital Region',
      country: 'India',
      tagline: 'Mega-Metropolis Air Basin & Multi-Modal Transit Grid',
      coordinates: 'LAT 28.6139° N • LON 77.2090° E',
      populationDisplay: '21,400,000',
      heroContext: 'Tackling hazardous winter smog inversions, peak summer heatwaves, and arterial ring road transit density across a 21-million citizen megacity.',
      profile: {
        environment: 'Semi-Arid Yamuna River Plain',
        airQuality: 'Severe Winter Inversion (AQI 184)',
        mobility: 'Heavy Radial & Ring Road Congestion',
        urbanGrowth: 'Ultra-Dense Megacity (+2.8%/yr)',
        energy: 'Solar + Clean Grid Import (62%)',
        healthcare: 'High-Capacity Tertiary Trauma (3.2 min)',
        environmentalRisk: 'Severe (Winter Smog & Summer Heatwaves)',
        greenCover: 'Moderate (23% Ridge Forest)'
      },
      metrics: {
        population: 21400000,
        energyEfficiency: 82.1,
        airQualityIndex: 184,
        trafficCongestion: 68,
        healthcareResponse: 3.2,
        renewableMix: 62.0,
        sustainability: 68,
        safety: 76,
        efficiency: 84,
        wellbeing: 72,
        innovation: 92
      },
      challenges: [
        {
          tag: 'HAZARDOUS AIR',
          title: 'Severe Particulate Smog & Thermal Inversion',
          desc: 'Winter meteorological inversions trap vehicular PM2.5, dust, and regional biomass smoke, driving the Air Quality Index past severe hazardous thresholds.'
        },
        {
          tag: 'MOBILITY DENSITY',
          title: 'Arterial Ring-Road Traffic Paralyzation',
          desc: 'Over 11 million registered vehicles generate intense radial congestion, stressing outer ring roads and arterial junctions during peak hours.'
        },
        {
          tag: 'THERMAL CRISIS',
          title: 'Extreme Summer Heatwave & Substation Overload',
          desc: 'Sustained summer temperatures exceeding 47°C cause dramatic air conditioning demand spikes, threatening electrical grid substations with cascading brownouts.'
        },
        {
          tag: 'RIVER ECOSYSTEM',
          title: 'Yamuna River Watershed Restoration',
          desc: 'Urban discharge and untreated industrial effluent stress the river corridor, requiring closed-loop bioremediation and floodplain protection.'
        }
      ],
      scenarios: [
        {
          id: 'smog',
          number: '01',
          title: 'Hazardous Winter Smog & AQI Crisis',
          badge: 'AIR QUALITY EMERGENCY // AQI 420+',
          situation: 'A sudden thermal inversion has trapped fine particulate matter across Delhi NCR. The Air Quality Index has breached 420 across 28 municipal monitoring stations, triggering severe pediatric and geriatric respiratory alerts.',
          question: 'What executive action does NOVA implement to rapidly scrub the air basin?',
          options: [
            {
              key: 'A',
              title: 'Deploy Automated Ultrasonic Mist Towers & Smog Canopies',
              desc: 'Activate 1,200 vertical misting masts along arterial roads and rooftop scrubbers to precipitate PM2.5 and PM10 particles.',
              deltas: { sustainability: 18, safety: 16, efficiency: 10, wellbeing: 17, innovation: 16 },
              narrative: 'Particulate density dropped by 34% in critical pedestrian zones within 6 hours. Pediatric clinic admissions stabilized.'
            },
            {
              key: 'B',
              title: 'Enforce Zero-Emission Electric Only Transit Zone',
              desc: 'Moratorium on private fossil-fuel vehicle entry within the Inner Ring Road; make all metro and electric bus lines completely fare-free.',
              deltas: { sustainability: 20, safety: 14, efficiency: 12, wellbeing: 15, innovation: 14 },
              narrative: 'Vehicular emissions slashed by 58%. Public transit ridership broke record highs with smooth multi-modal flow.'
            },
            {
              key: 'C',
              title: 'Temporary Non-Essential Industrial & Construction Stop',
              desc: 'Halt brick kilns, thermal processing, and demolition dust activities across NCR with real-time drone verification.',
              deltas: { sustainability: 17, safety: 12, efficiency: -8, wellbeing: 12, innovation: 10 },
              narrative: 'Dust generation halted instantly, providing immediate breathing room for the city at the cost of short-term industrial delay.'
            },
            {
              key: 'D',
              title: 'Hyperlocal Air Purified Civic Bio-Sanctuaries',
              desc: 'Convert metro stations, community hubs, and government schools into 24/7 HEPA-filtered clean air relief lounges.',
              deltas: { sustainability: 10, safety: 19, efficiency: 8, wellbeing: 18, innovation: 12 },
              narrative: 'Over 650,000 vulnerable citizens accessed verified clean air, drastically cutting acute hospital admissions.'
            }
          ]
        },
        {
          id: 'heatwave',
          number: '02',
          title: 'Peak Summer Heatwave & Substation Overload',
          badge: 'HEAT SURGE // 47.8°C PEAK LOAD',
          situation: 'Temperatures have soared to 47.8°C across the National Capital Region. Air conditioning electrical demand has surged to 8,200 MW, threatening major transmission substations with catastrophic tripping.',
          question: 'How does NOVA balance electrical integrity while protecting citizen lives?',
          options: [
            {
              key: 'A',
              title: 'Dynamic HVAC Modulation across Commercial Hubs',
              desc: 'Algorithmically throttle commercial office temperatures from 20°C to 24.5°C across 4,000 corporate buildings in Connaught Place and Cyber City.',
              deltas: { sustainability: 15, safety: 14, efficiency: 18, wellbeing: 10, innovation: 17 },
              narrative: 'Shaved 680 MW of peak demand in 4 minutes with zero blackouts. Commercial occupants reported comfortable conditions.'
            },
            {
              key: 'B',
              title: 'Discharge District Solid-State Energy Buffers',
              desc: 'Draw down municipal grid battery reserves to sustain residential and healthcare electricity without any curtailment.',
              deltas: { sustainability: 12, safety: 18, efficiency: 9, wellbeing: 16, innovation: 12 },
              narrative: 'Zero power cuts across residential neighborhoods. Battery storage carried the city through the 4-hour peak window.'
            },
            {
              key: 'C',
              title: 'Deploy Mobile Water Mist Trucks to Urban Heat Islands',
              desc: 'Dispatch zero-emission cooling tankers to dense unshaded settlements to reduce ambient road temperatures by 4°C.',
              deltas: { sustainability: 14, safety: 17, efficiency: 7, wellbeing: 19, innovation: 11 },
              narrative: 'Heat-related fatalities prevented in dense colonies. Citizens lauded the humane prioritization of vulnerable areas.'
            },
            {
              key: 'D',
              title: 'Incentivize Voluntary Rooftop Solar Peer-Feeding',
              desc: 'Pay residential solar owners 2.5x green credits to export excess battery power into the stressed grid.',
              deltas: { sustainability: 19, safety: 11, efficiency: 16, wellbeing: 14, innovation: 19 },
              narrative: 'Citizens fed 210 MWh back into the grid, turning a potential blackout into a celebration of decentralized clean power.'
            }
          ]
        },
        {
          id: 'traffic',
          number: '03',
          title: 'Arterial Ring-Road Transit Gridlock',
          badge: 'RADIAL GRIDLOCK // 120KM BOTTLENECK',
          situation: 'Multiple vehicle breakdowns on the Ring Road and DND Flyway have cascaded into a 22-kilometer standstill, delaying 180,000 commuters and impeding emergency hospital vehicles.',
          question: 'Which transit intervention restores circulation across the capital?',
          options: [
            {
              key: 'A',
              title: 'Automated Lane Reversal & Dynamic Signal Clearance',
              desc: 'Reconfigure multi-lane expressways with automated dynamic overhead lane direction signs, bleeding traffic toward parallel relief arteries.',
              deltas: { sustainability: 11, safety: 13, efficiency: 19, wellbeing: 12, innovation: 17 },
              narrative: 'Traffic speed doubled within 25 minutes. Gridlock resolved without requiring physical police intervention.'
            },
            {
              key: 'B',
              title: 'Emergency Medical Green-Wave Corridors',
              desc: 'Prioritize AI-cleared traffic signals 1.5 km ahead of all ambulances and emergency medical drone escorts.',
              deltas: { sustainability: 6, safety: 20, efficiency: 11, wellbeing: 15, innovation: 14 },
              narrative: 'Ambulances reached AIIMS and Safdarjung Hospital in 2.9 minutes. Zero critical patient delays.'
            },
            {
              key: 'C',
              title: 'Surge Metro Rail Cadence to 90 Seconds',
              desc: 'Deploy automated reserve driverless trains across Yellow and Blue lines to absorb surface vehicular demand.',
              deltas: { sustainability: 18, safety: 15, efficiency: 14, wellbeing: 16, innovation: 15 },
              narrative: '94,000 drivers parked and took the metro, slashing arterial congestion and cutting tons of carbon emissions.'
            },
            {
              key: 'D',
              title: 'Staggered Commercial Departure Windows',
              desc: 'Issue automated departure coordination slots to large corporate tech parks, dispersing evening rush hour over 3 hours.',
              deltas: { sustainability: 12, safety: 12, efficiency: 16, wellbeing: 11, innovation: 13 },
              narrative: 'Peak crush hours smoothed successfully, eliminating recurring gridlock at major toll plazas.'
            }
          ]
        },
        {
          id: 'yamuna',
          number: '04',
          title: 'Yamuna River Catchment & Floodplain Stress',
          badge: 'ECOLOGICAL RESTORATION // RIVER ECOSYSTEM',
          situation: 'Heavy upstream dam discharge combined with urban stormwater runoff threatens low-lying floodplain agricultural settlements along the Yamuna bank.',
          question: 'How should NOVA manage the river basin and safeguard downstream communities?',
          options: [
            {
              key: 'A',
              title: 'Activate Wetland Floodplain Absorption Parks',
              desc: 'Open ecological biodiversity parks along the riverbanks to absorb 140 million cubic meters of floodwaters without concrete walls.',
              deltas: { sustainability: 20, safety: 16, efficiency: 9, wellbeing: 17, innovation: 14 },
              narrative: 'Floodwaters recharged groundwater and created thriving bird sanctuaries instead of urban destruction.'
            },
            {
              key: 'B',
              title: 'Deploy Autonomous Sensor Masts & Rapid Evacuation',
              desc: 'Alert riverside inhabitants via multi-lingual voice beacons and deploy autonomous transit boats for orderly relocation.',
              deltas: { sustainability: 11, safety: 19, efficiency: 11, wellbeing: 14, innovation: 16 },
              narrative: '42,000 citizens relocated safely with dry belongings and zero flood-related casualties.'
            },
            {
              key: 'C',
              title: 'Automated Sluice Gate Flow Balancing',
              desc: 'Coordinate barrage discharge gates using predictive rainfall simulations to maintain steady laminar river flow.',
              deltas: { sustainability: 15, safety: 17, efficiency: 18, wellbeing: 12, innovation: 18 },
              narrative: 'Water level held 0.8 meters below danger mark through synchronized upstream barrage modulation.'
            },
            {
              key: 'D',
              title: 'Closed-Loop Bioremediation Filtration Injection',
              desc: 'Deploy bio-enzymatic aeration micro-rafts to break down trapped industrial surfactants while the river is swollen.',
              deltas: { sustainability: 21, safety: 12, efficiency: 10, wellbeing: 15, innovation: 15 },
              narrative: 'River dissolved oxygen levels surged by 40%, marking historic environmental cleanup milestone.'
            }
          ]
        }
      ]
    },

    mumbai: {
      id: 'mumbai',
      name: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      tagline: 'Coastal Megacity & Arabian Sea Blue Infrastructure',
      coordinates: 'LAT 19.0760° N • LON 72.8777° E',
      populationDisplay: '13,800,000',
      heroContext: 'Managing high-tide monsoonal flood locks, suburban rail transit density, and coastal mangrove bio-shields across an island megacity.',
      profile: {
        environment: 'Peninsular Coastal & Mangrove Estuary',
        airQuality: 'Maritime Dispersed (AQI 82)',
        mobility: 'High Suburban Rail & Arterial Pressure',
        urbanGrowth: 'Intense Density & Coastal Redevelopment',
        energy: 'Offshore Wind, Solar & Regional Grid (70%)',
        healthcare: 'High-Density Municipal Trauma (3.8 min)',
        environmentalRisk: 'Critical (Monsoon Floods & High Tide Surges)',
        greenCover: 'Sanjay Gandhi National Park & Mangrove Fringe'
      },
      metrics: {
        population: 13800000,
        energyEfficiency: 84.5,
        airQualityIndex: 82,
        trafficCongestion: 64,
        healthcareResponse: 3.8,
        renewableMix: 70.0,
        sustainability: 74,
        safety: 78,
        efficiency: 86,
        wellbeing: 78,
        innovation: 89
      },
      challenges: [
        {
          tag: 'COASTAL INUNDATION',
          title: 'Monsoonal Storm Surge & High-Tide Flood Lock',
          desc: 'Simultaneous heavy rainfall and Arabian Sea high tides prevent gravity stormwater discharge, flooding low-lying railway tracks and arterial junctions.'
        },
        {
          tag: 'TRANSIT DENSITY',
          title: 'Suburban Rail Transit Pressure',
          desc: 'Over 7.5 million daily commuters rely on the suburban rail spine, where minor weather disruptions trigger severe network-wide delays.'
        },
        {
          tag: 'MANGROVE BUFFERS',
          title: 'Estuarine Mangrove & Coastal Buffer Protection',
          desc: 'Urban coastal reclamation encroaches on critical mangrove forests that act as natural wave breakers and carbon sinks.'
        },
        {
          tag: 'EPIDEMIOLOGICAL SURGE',
          title: 'Monsoonal Waterborne Syndromic Outbreaks',
          desc: 'High humidity and localized waterlogging risk seasonal dengue and leptospirosis spikes, demanding predictive health surveillance.'
        }
      ],
      scenarios: [
        {
          id: 'tide',
          number: '01',
          title: 'High-Tide Lock & Monsoonal Storm Surge',
          badge: 'FLOOD LOCK // 4.8M ARABIAN SEA TIDE',
          situation: 'A 4.8-meter Arabian Sea high tide coincides with 120mm of rainfall within 2 hours. Stormwater gates are shut to prevent seawater backflow, causing floodwaters to pool in Hindmata, Kurla, and Milan subway.',
          question: 'How should NOVA mitigate sea lock and keep Mumbai moving?',
          options: [
            {
              key: 'A',
              title: 'Activate Heavy Underground Submersible Pumping Caverns',
              desc: 'Engage high-capacity subterranean pump stations to draw 800,000 liters/sec into deep underground balancing holding tanks.',
              deltas: { sustainability: 15, safety: 19, efficiency: 11, wellbeing: 16, innovation: 14 },
              narrative: 'Floodwaters pumped below ground in real time. Railway tracks stayed dry and suburban trains continued running.'
            },
            {
              key: 'B',
              title: 'Deploy Mangrove Wetland Holding Sinks',
              desc: 'Divert stormwater toward protected mangrove wetland estuaries configured with automated one-way tidal flaps.',
              deltas: { sustainability: 20, safety: 14, efficiency: 9, wellbeing: 15, innovation: 12 },
              narrative: 'Mangroves naturally absorbed the peak surge volume, demonstrating the irreplaceable value of living coastal infrastructure.'
            },
            {
              key: 'C',
              title: 'Pre-emptive Elevated Flyway Rerouting',
              desc: 'Reroute all essential traffic to the Coastal Road and elevated corridors while closing submerged ground underpasses.',
              deltas: { sustainability: 8, safety: 17, efficiency: 14, wellbeing: 12, innovation: 15 },
              narrative: 'Zero stranded vehicles. Commuters safely navigated the city via elevated avenues.'
            },
            {
              key: 'D',
              title: 'Autonomous Multi-Sensor Urban Drainage Balancing',
              desc: 'Permit NOVA AI to dynamically throttle 48 coastal sluice gates and 120 floodgates calibrated to wave height sensors.',
              deltas: { sustainability: 12, safety: 18, efficiency: 17, wellbeing: 14, innovation: 19 },
              narrative: 'Micro-second gate adjustments synchronized with wave crests prevented backflow while draining low-lying areas.'
            }
          ]
        },
        {
          id: 'transit',
          number: '02',
          title: 'Suburban Rail Transit Interruption',
          badge: 'RAIL NETWORK OVERLOAD // CENTRAL LINE',
          situation: 'Waterlogging on tracks near Kurla has halted Central Line trains during evening rush hour, leaving 350,000 commuters stranded at major terminals.',
          question: 'Which multimodal intervention evacuates commuters safely?',
          options: [
            {
              key: 'A',
              title: 'Deploy Autonomous Electric Bus Flotilla',
              desc: 'Mobilize 1,400 reserve autonomous electric double-decker buses along parallel arterial flyways with bus-only express lanes.',
              deltas: { sustainability: 16, safety: 17, efficiency: 14, wellbeing: 17, innovation: 14 },
              narrative: 'Stranded stations evacuated in 40 minutes. Commuters reached home safely without crowd crushing.'
            },
            {
              key: 'B',
              title: 'Activate Coastal Water Taxi & Ferry Surge',
              desc: 'Deploy high-speed electric passenger ferries between Gateway of India, Belapur, and Versova to bypass terrestrial congestion.',
              deltas: { sustainability: 17, safety: 15, efficiency: 12, wellbeing: 18, innovation: 16 },
              narrative: 'Water transit transported 62,000 commuters smoothly along the coast, relieving inland pressure.'
            },
            {
              key: 'C',
              title: 'Corporate Remote Working & Local Shelter Order',
              desc: 'Authorize nearby corporate offices to open lobbies as warm resting zones with refreshments until trains resume.',
              deltas: { sustainability: 10, safety: 18, efficiency: 8, wellbeing: 19, innovation: 10 },
              narrative: 'High civic solidarity. Thousands sheltered in comfort, preventing stampedes at waterlogged stations.'
            },
            {
              key: 'D',
              title: 'Subterranean Metro Line Frequency Surge',
              desc: 'Run underground Metro Line 3 at 75-second automated headways to absorb cross-city commuter volume.',
              deltas: { sustainability: 15, safety: 16, efficiency: 19, wellbeing: 15, innovation: 17 },
              narrative: 'Underground metro absorbed 180,000 commuters with zero weather interference, proving underground resilience.'
            }
          ]
        },
        {
          id: 'energy',
          number: '03',
          title: 'Marine Cloud Shield & Clean Power Deficit',
          badge: 'RENEWABLE DEFICIT // 40% SOLAR DROP',
          situation: 'Dense monsoon stratus clouds have blanketed the coastline for 5 days, slashing solar yield by 40% while humidity drives continuous residential dehumidification and cooling.',
          question: 'How does NOVA maintain uninterrupted coastal power?',
          options: [
            {
              key: 'A',
              title: 'Surge Offshore Tidal & Wind Micro-Turbines',
              desc: 'Unlock offshore marine turbines that generate maximum clean power during intense monsoon winds and tidal currents.',
              deltas: { sustainability: 19, safety: 15, efficiency: 14, wellbeing: 14, innovation: 17 },
              narrative: 'High wind and tidal generation compensated for 88% of lost solar output, maintaining 100% grid integrity.'
            },
            {
              key: 'B',
              title: 'Activate Port & Maritime Battery Storage',
              desc: 'Discharge solid-state storage banks located at JNPT port and naval docks to power hospitals and transit.',
              deltas: { sustainability: 12, safety: 18, efficiency: 11, wellbeing: 15, innovation: 12 },
              narrative: 'Critical infrastructure ran uninterrupted for 36 hours from maritime battery reserves.'
            },
            {
              key: 'C',
              title: 'Commercial Air Conditioning Thermal Pre-Cooling',
              desc: 'Pre-cool commercial concrete structures overnight using wind power, idling AC units during daytime peak deficit hours.',
              deltas: { sustainability: 16, safety: 13, efficiency: 18, wellbeing: 12, innovation: 18 },
              narrative: 'Buildings maintained comfortable ambient temperatures with zero power draw during peak hours.'
            },
            {
              key: 'D',
              title: 'Non-Essential Aesthetic Grid Shedding',
              desc: 'Dim decorative architectural lighting along Marine Drive and idle commercial billboards across South Mumbai.',
              deltas: { sustainability: 14, safety: 14, efficiency: 15, wellbeing: 11, innovation: 10 },
              narrative: 'Saved 45 MW instantly without affecting citizen safety or residential power continuity.'
            }
          ]
        },
        {
          id: 'health',
          number: '04',
          title: 'Monsoonal Syndromic Health Surge',
          badge: 'PREDICTIVE HEALTH // VECTOR OUTBREAK',
          situation: 'Predictive bio-sensors have flagged a 300% spike in waterborne and mosquito-borne viral markers in localized coastal slum settlements following unseasonal puddling.',
          question: 'How does NOVA deploy responsible healthcare interventions?',
          options: [
            {
              key: 'A',
              title: 'Deploy Drone Larvicidal Bio-Sprayers to Water Pockets',
              desc: 'Target stagnant water pools with organic bio-control agents using autonomous micro-drones guided by satellite terrain models.',
              deltas: { sustainability: 18, safety: 19, efficiency: 15, wellbeing: 17, innovation: 18 },
              narrative: 'Mosquito breeding sites neutralized in 48 hours. Vector density plummeted 82% with zero chemical toxins.'
            },
            {
              key: 'B',
              title: 'Mobile Modular Diagnostic Lounges in Community Hubs',
              desc: 'Establish walk-in rapid fever screening clinics staffed by human nurse practitioners at neighborhood transit points.',
              deltas: { sustainability: 11, safety: 18, efficiency: 10, wellbeing: 20, innovation: 12 },
              narrative: 'Early detection in 92% of cases. Hospitals avoided overcrowding and patients received dignified community care.'
            },
            {
              key: 'C',
              title: 'Hyperlocal Clean Drinking Water Kiosk Distribution',
              desc: 'Deploy UV-purification water filtration pods to all affected neighborhoods, ensuring 100% pure potable water access.',
              deltas: { sustainability: 15, safety: 17, efficiency: 12, wellbeing: 19, innovation: 13 },
              narrative: 'Waterborne gastrointestinal cases dropped to zero in 3 days. Public trust in civic water reached peak highs.'
            },
            {
              key: 'D',
              title: 'Dynamic Cross-Hospital ICU Bed Balancing',
              desc: 'Distribute critical admissions across municipal and private hospitals in Mumbai using AI-optimized patient transfer pods.',
              deltas: { sustainability: 9, safety: 18, efficiency: 17, wellbeing: 14, innovation: 16 },
              narrative: 'Hospital bed occupancy maintained at an optimal 80%, avoiding clinical burnout in public wards.'
            }
          ]
        }
      ]
    },

    bengaluru: {
      id: 'bengaluru',
      name: 'Bengaluru',
      state: 'Karnataka',
      country: 'India',
      tagline: 'Deccan Plateau Tech Capital & Interconnected Lake Networks',
      coordinates: 'LAT 12.9716° N • LON 77.5946° E',
      populationDisplay: '9,600,000',
      heroContext: 'Solving Outer Ring Road tech corridor mobility gridlock, revitalizing historic lake cascade aquifers, and optimizing peri-urban expansion.',
      profile: {
        environment: 'Deccan Plateau Ridge & Interconnected Lakes',
        airQuality: 'Good to Moderate (AQI 54)',
        mobility: 'Acute Tech Corridor Gridlock (ORR)',
        urbanGrowth: 'Fast Peripheral Tech Sprawl (+4.6%/yr)',
        energy: 'Solar Rooftop & Wind Microgrids (82%)',
        healthcare: 'Advanced Health-Tech Telemetry (3.5 min)',
        environmentalRisk: 'Moderate (Groundwater Stress & Lake Encroachment)',
        greenCover: 'Garden City Canopy (32%)'
      },
      metrics: {
        population: 9600000,
        energyEfficiency: 89.2,
        airQualityIndex: 54,
        trafficCongestion: 72,
        healthcareResponse: 3.5,
        renewableMix: 82.0,
        sustainability: 80,
        safety: 85,
        efficiency: 82,
        wellbeing: 84,
        innovation: 95
      },
      challenges: [
        {
          tag: 'TECH COMMUTE',
          title: 'Outer Ring Road (ORR) Transit Paralyzation',
          desc: 'High concentration of IT enterprise campuses along the Outer Ring Road generates severe daily commuter gridlock, reducing productivity and inflating commute times.'
        },
        {
          tag: 'WATER CASCADES',
          title: 'Interconnected Lake Network & Aquifer Depletion',
          desc: 'Historical interconnected lake channels built in the 16th century have been fragmented by urban sprawl, causing simultaneous flash floods and severe groundwater depletion.'
        },
        {
          tag: 'PERI-URBAN GROWTH',
          title: 'Peripheral Tech Sprawl & Civic Infrastructure Lag',
          desc: 'Rapid development beyond municipal boundaries strains sewage treatment, civic power, and drinking water pipelines.'
        },
        {
          tag: 'CANOPY PRESERVATION',
          title: 'Urban Heat Island vs Garden City Tree Canopy',
          desc: 'Felling of old-growth roadside trees for road widening creates microclimatic heat islands across industrial tech corridors.'
        }
      ],
      scenarios: [
        {
          id: 'traffic',
          number: '01',
          title: 'Outer Ring Road Tech Corridor Gridlock',
          badge: 'CONGESTION EMERGENCY // ORR STANDSTILL',
          situation: 'Rainfall and a stalled heavy freight vehicle on Marathahalli junction have triggered a 14-kilometer gridlock spanning Whitefield to Bellandur. Over 120,000 IT professionals are immobilized.',
          question: 'How does NOVA resolve the Outer Ring Road paralysis?',
          options: [
            {
              key: 'A',
              title: 'Automated Multi-Modal Shuttle Surge & Bus Lanes',
              desc: 'Enforce dynamic bus-only lanes on ORR and deploy 800 autonomous electric high-occupancy employee pods.',
              deltas: { sustainability: 17, safety: 14, efficiency: 16, wellbeing: 16, innovation: 17 },
              narrative: 'Arterial commute time slashed from 90 mins to 24 mins. Tech companies reported seamless employee transit.'
            },
            {
              key: 'B',
              title: 'Micro-Mobility Skyways & Active Transit Corridors',
              desc: 'Open elevated dedicated e-bike and cycle skyways connecting metro stations directly into IT campus atriums.',
              deltas: { sustainability: 20, safety: 15, efficiency: 13, wellbeing: 18, innovation: 16 },
              narrative: '42,000 commuters switched to active zero-emission e-bikes, permanently cutting surface car density.'
            },
            {
              key: 'C',
              title: 'Dynamic Work-From-Anywhere Civic Satellite Hubs',
              desc: 'Direct commuters to decentralized municipal co-working pods within their local residential neighborhoods.',
              deltas: { sustainability: 16, safety: 12, efficiency: 15, wellbeing: 17, innovation: 14 },
              narrative: 'Eliminated 65,000 unnecessary trips across the city while preserving tech company operational continuity.'
            },
            {
              key: 'D',
              title: 'AI Drone Heavy Clearance & Signal Priority',
              desc: 'Dispatch autonomous heavy tow drones to winch stranded freight vehicles off carriageways within 6 minutes.',
              deltas: { sustainability: 8, safety: 18, efficiency: 18, wellbeing: 11, innovation: 19 },
              narrative: 'Obstruction cleared in 340 seconds. Algorithmic green wave flushed remaining queues in 18 minutes.'
            }
          ]
        },
        {
          id: 'lakes',
          number: '02',
          title: 'Lake Cascade Disconnection & Waterlogging',
          badge: 'WATERSHED STRESS // BELLANDUR-VARTHUR CATCHMENT',
          situation: 'An unseasonal cloudburst has overwhelmed Bellandur and Varthur lakes. Because historic feeder storm canals (Rajakaluves) have been encroached, water is backing up into tech parks while groundwater aquifers remain parched.',
          question: 'Which hydrological strategy restores Bengaluru\'s historic lake chain?',
          options: [
            {
              key: 'A',
              title: 'Re-open Ecological Rajakaluve Canal Corridors',
              desc: 'Demolish unauthorized boundary walls encroaching on historical water channels and re-establish natural gravity flow.',
              deltas: { sustainability: 21, safety: 16, efficiency: 12, wellbeing: 15, innovation: 14 },
              narrative: 'Natural water cascades reconnected between 7 lakes. Floodwaters drained naturally and recharge rates surged.'
            },
            {
              key: 'B',
              title: 'Deploy Floating Wetland Bio-Islands & Aerators',
              desc: 'Install solar-powered micro-bubble aerators and vetiver floating wetlands to digest foam and detoxify water.',
              deltas: { sustainability: 19, safety: 15, efficiency: 11, wellbeing: 17, innovation: 16 },
              narrative: 'Toxic lake foam eliminated completely. Migratory waterfowl and freshwater biodiversity returned in weeks.'
            },
            {
              key: 'C',
              title: 'Underground Aquifer Recharge Wells Network',
              desc: 'Mandate and construct 10,000 injection wells across commercial campuses to divert floodwater directly into deep granite fissures.',
              deltas: { sustainability: 18, safety: 17, efficiency: 13, wellbeing: 14, innovation: 15 },
              narrative: 'Pre-monsoon groundwater depth rose by 4.2 meters, securing water independence for 400,000 residents.'
            },
            {
              key: 'D',
              title: 'Automated Sluice Gate Predictive Lake Balancing',
              desc: 'Deploy IoT telemetry gates to automatically pre-drain downstream lakes hours ahead of incoming cloudburst storms.',
              deltas: { sustainability: 14, safety: 18, efficiency: 17, wellbeing: 13, innovation: 19 },
              narrative: 'Zero tech parks flooded. Real-time predictive volume buffering handled 140% of peak precipitation.'
            }
          ]
        },
        {
          id: 'energy',
          number: '03',
          title: 'IT Data Center Peak Grid Deficit',
          badge: 'GRID DEFICIT // AI COMPUTING LOAD SURGE',
          situation: 'High-performance AI model training runs across 14 enterprise data centers have coincided with an afternoon solar dip, creating a 180 MW localized power shortfall in Electronic City.',
          question: 'How does NOVA balance industrial computational demand with civic power?',
          options: [
            {
              key: 'A',
              title: 'Automated Data Center Compute Throttling',
              desc: 'Shift non-urgent batch training jobs to nocturnal hours when regional wind generation peaks.',
              deltas: { sustainability: 17, safety: 15, efficiency: 19, wellbeing: 12, innovation: 18 },
              narrative: 'Shaved 120 MW instantly with zero loss to commercial data integrity. Residential power held stable.'
            },
            {
              key: 'B',
              title: 'Deploy Solid-State Campus Microgrids',
              desc: 'Discharge dedicated commercial solid-state battery banks to island the tech parks from the public grid.',
              deltas: { sustainability: 14, safety: 16, efficiency: 15, wellbeing: 14, innovation: 15 },
              narrative: 'Tech parks operated 100% self-sufficiently for 6 hours without drawing a single watt from municipal lines.'
            },
            {
              key: 'C',
              title: 'Peer-to-Peer Rooftop Solar Energy Barter',
              desc: 'Incentivize 40,000 suburban households to sell surplus rooftop solar to tech campuses at dynamic green rates.',
              deltas: { sustainability: 20, safety: 11, efficiency: 16, wellbeing: 18, innovation: 20 },
              narrative: 'Citizens earned substantial green income while powering the city\'s knowledge economy.'
            },
            {
              key: 'D',
              title: 'Smart District Geothermal Heat Sinks',
              desc: 'Channel server heat into deep geothermal exchange loops to warm residential water systems in adjoining quarters.',
              deltas: { sustainability: 19, safety: 14, efficiency: 18, wellbeing: 16, innovation: 19 },
              narrative: 'Server waste heat converted into civic utility, setting a global benchmark for circular computing.'
            }
          ]
        },
        {
          id: 'healthcare',
          number: '04',
          title: 'Peri-Urban Healthcare & Trauma Dispatch',
          badge: 'EMS TELEMETRY // PERIPHERAL ACCESSIBILITY',
          situation: 'A multi-casualty accident on the outskirts of Sarjapur Road risks critical delay because nearest tertiary hospitals are 18 km away through congested traffic.',
          question: 'How does NOVA deploy rapid trauma response to peripheral neighborhoods?',
          options: [
            {
              key: 'A',
              title: 'Deploy Automated Aero-Med Defibrillator Drone',
              desc: 'Launch high-speed vertical take-off drone carrying automated trauma equipment and holographic surgeon link.',
              deltas: { sustainability: 10, safety: 21, efficiency: 18, wellbeing: 17, innovation: 20 },
              narrative: 'Drone arrived in 94 seconds. On-scene bystanders guided by remote trauma surgeon to stabilize patients.'
            },
            {
              key: 'B',
              title: 'Activate Peripheral Modular Emergency Clinics',
              desc: 'Direct patients to newly deployed modular neighborhood triage suites equipped with robotic telemetry diagnostics.',
              deltas: { sustainability: 12, safety: 18, efficiency: 14, wellbeing: 19, innovation: 16 },
              narrative: 'Patients stabilized locally within 8 minutes, eliminating the need for hazardous high-speed transit.'
            },
            {
              key: 'C',
              title: 'Dynamic Traffic Green-Beacon Signal Clearance',
              desc: 'Clear a 14-km continuous green signal wave across arterial junctions for high-speed ambulance transit.',
              deltas: { sustainability: 7, safety: 19, efficiency: 12, wellbeing: 14, innovation: 14 },
              narrative: 'Ambulance traverse time cut by 68%. All patients admitted to surgical trauma suites in critical window.'
            },
            {
              key: 'D',
              title: 'Crowdsourced First-Responder Civic Mesh',
              desc: 'Alert certified medical professionals and civic first-aiders located within 500 meters via emergency app.',
              deltas: { sustainability: 11, safety: 17, efficiency: 11, wellbeing: 20, innovation: 13 },
              narrative: 'Four off-duty doctors arrived on scene in 120 seconds, illustrating the power of connected civic community.'
            }
          ]
        }
      ]
    },

    hyderabad: {
      id: 'hyderabad',
      name: 'Hyderabad',
      state: 'Telangana',
      country: 'India',
      tagline: 'Deccan Innovation Hub & Heritage Water Networks',
      coordinates: 'LAT 17.3850° N • LON 78.4867° E',
      populationDisplay: '7,800,000',
      heroContext: 'Rejuvenating Musi River basin stormwater resilience, optimizing Cyberabad IT transit corridors, and coordinating regional bio-pharma health networks.',
      profile: {
        environment: 'Granitic Deccan Basin & Musi River Plain',
        airQuality: 'Moderate (AQI 62)',
        mobility: 'Elevated Corridors with Choke-points',
        urbanGrowth: 'Rapid Tech-Driven Peripheral Growth',
        energy: 'Solar + Gas Cogeneration Lattice (78%)',
        healthcare: 'National Bio-Pharma & Clinical Hub (3.3 min)',
        environmentalRisk: 'Moderate (Musi River Floods & Summer Heat)',
        greenCover: 'Expanding Urban Forest Blocks (28%)'
      },
      metrics: {
        population: 7800000,
        energyEfficiency: 88.0,
        airQualityIndex: 62,
        trafficCongestion: 52,
        healthcareResponse: 3.3,
        renewableMix: 78.0,
        sustainability: 82,
        safety: 86,
        efficiency: 87,
        wellbeing: 85,
        innovation: 91
      },
      challenges: [
        {
          tag: 'RIVER RESILIENCE',
          title: 'Musi River Catchment & Urban Inundation',
          desc: 'Flash cloudbursts over the granite Deccan catchment cause rapid Musi River swelling, flooding heritage bridge corridors and low-lying settlements.'
        },
        {
          tag: 'TECH LOGISTICS',
          title: 'Cyberabad & Hitec City Transit Bottlenecks',
          desc: 'High commuter density between older historic quarters and modern tech clusters strains arterial junctions along the Outer Ring Road.'
        },
        {
          tag: 'CIRCULAR INDUSTRY',
          title: 'Bio-Pharma Industrial Water Management',
          desc: 'Genome Valley and pharmaceutical industrial clusters require strict zero-liquid-discharge closed-loop water treatment.'
        },
        {
          tag: 'AQUIFER PROTECTION',
          title: 'Granite Rock Aquifer & Summer Heat Mitigation',
          desc: 'Hard-rock Deccan terrain has limited natural infiltration, leading to summer groundwater exhaustion during prolonged heatwaves.'
        }
      ],
      scenarios: [
        {
          id: 'musi',
          number: '01',
          title: 'Musi River Basin Flash Cloudburst',
          badge: 'FLOOD SURGE // 140MM CLOUDBURST',
          situation: 'An intense cloudburst over the upper catchment has triggered sudden discharge into the Musi River. River levels are rising at 0.5 meters/hour, threatening Chaderghat and Moosarambagh causeways.',
          question: 'How should NOVA safeguard the river corridor and protect civic connectivity?',
          options: [
            {
              key: 'A',
              title: 'Activate Automated Ecological Retention Reservoirs',
              desc: 'Divert peak flood volumes into upstream retention wetlands and urban lakes (Himayat Sagar and Osman Sagar).',
              deltas: { sustainability: 18, safety: 18, efficiency: 10, wellbeing: 16, innovation: 14 },
              narrative: 'Upstream lakes absorbed 70% of the surge. The Musi held safely within its banks with zero structural breach.'
            },
            {
              key: 'B',
              title: 'Dynamic Causeways Barrier Deployment & Rerouting',
              desc: 'Deploy automated hydraulic flood barriers at vulnerable bridges while routing traffic over elevated expressways.',
              deltas: { sustainability: 10, safety: 19, efficiency: 13, wellbeing: 14, innovation: 16 },
              narrative: 'Zero citizens stranded. Automated barriers sealed causeways 20 minutes before water crested.'
            },
            {
              key: 'C',
              title: 'Deploy Autonomous Drainage Siphon Pumping',
              desc: 'Engage solar-powered high-capacity storm pumps to dewater localized arterial underpasses into stormwater cisterns.',
              deltas: { sustainability: 14, safety: 16, efficiency: 17, wellbeing: 13, innovation: 16 },
              narrative: 'Key underpasses cleared in 35 minutes, maintaining critical transit connection to the airport.'
            },
            {
              key: 'D',
              title: 'Multi-Lingual Civic Smart Beacon Warnings',
              desc: 'Broadcast localized audio alerts and SMS coordinates in Telugu, Urdu, and English to all residents within 1 km of the river.',
              deltas: { sustainability: 9, safety: 20, efficiency: 11, wellbeing: 17, innovation: 12 },
              narrative: 'Complete community awareness. 28,000 residents moved possessions to upper floors without panic.'
            }
          ]
        },
        {
          id: 'traffic',
          number: '02',
          title: 'Cyberabad & Hitec City Transit Flow Disruption',
          badge: 'TRANSIT OVERLOAD // HITEC CITY JUNCTION',
          situation: 'A synchronized shift change across Genome Valley and Cyberabad has produced severe bottlenecks at Gachibowli junction, causing 2-hour delays for 90,000 commuters.',
          question: 'Which mobility strategy clears the Deccan tech corridor?',
          options: [
            {
              key: 'A',
              title: 'Deploy Dynamic Overhead Express Corridors',
              desc: 'Reconfigure elevated flyover lanes dynamically for outbound high-occupancy vehicles and electric shuttle pods.',
              deltas: { sustainability: 13, safety: 14, efficiency: 19, wellbeing: 14, innovation: 17 },
              narrative: 'Average commute time slashed by 62%. Outbound flow cleared smoothly onto the Outer Ring Road.'
            },
            {
              key: 'B',
              title: 'Surge Metro Rail Cadence to 80 Seconds',
              desc: 'Deploy autonomous high-cadence trains on the Blue Line and provide last-mile electric scooters at tech park gates.',
              deltas: { sustainability: 19, safety: 16, efficiency: 15, wellbeing: 17, innovation: 16 },
              narrative: '68,000 commuters transitioned to rapid rail, removing thousands of private vehicles from surface roads.'
            },
            {
              key: 'C',
              title: 'Decentralized Micro-Hub Departure Scheduling',
              desc: 'Coordinate campus departure intervals across 60 multinational tech campuses using AI scheduling algorithms.',
              deltas: { sustainability: 14, safety: 12, efficiency: 16, wellbeing: 15, innovation: 15 },
              narrative: 'Crush hour dispersed over 2.5 hours, permanently leveling traffic peaks across Cyberabad.'
            },
            {
              key: 'D',
              title: 'Clear-Corridor Emergency Medical Drone Mesh',
              desc: 'Reserve emergency air channels for medical delivery drones and geofence right lanes for trauma ambulances.',
              deltas: { sustainability: 7, safety: 20, efficiency: 12, wellbeing: 16, innovation: 14 },
              narrative: 'Emergency response time held steady at 2.8 minutes despite crushing surface vehicle density.'
            }
          ]
        },
        {
          id: 'energy',
          number: '03',
          title: 'Summer Heatwave & Bio-Pharma Power Stress',
          badge: 'PEAK LOAD // 44.5°C SUMMER DEFICIT',
          situation: 'Temperatures have touched 44.5°C. High refrigeration demands from pharmaceutical storage and residential AC have created a 220 MW grid deficit.',
          question: 'How does NOVA balance life-saving bio-pharma cold chains with residential comfort?',
          options: [
            {
              key: 'A',
              title: 'Lock Priority Power to Bio-Pharma Cold Chains & Hospitals',
              desc: 'Isolate cold storage vaccine facilities and tertiary hospitals on dedicated microgrid circuits while dimming street lighting.',
              deltas: { sustainability: 14, safety: 20, efficiency: 12, wellbeing: 15, innovation: 13 },
              narrative: 'Critical medical and vaccine reserves preserved with zero spoilage. High public gratitude.'
            },
            {
              key: 'B',
              title: 'Discharge District Solid-State Substation Reserves',
              desc: 'Draw down municipal battery reserves by 45% to cover the afternoon peak without any citizen load shedding.',
              deltas: { sustainability: 12, safety: 16, efficiency: 14, wellbeing: 16, innovation: 14 },
              narrative: 'City powered through the heatwave seamlessly. Battery banks replenished overnight via wind power.'
            },
            {
              key: 'C',
              title: 'District Automated HVAC Temperature Modulation',
              desc: 'Raise commercial building thermostat setpoints by 1.8°C across 3,000 government and private office towers.',
              deltas: { sustainability: 16, safety: 14, efficiency: 18, wellbeing: 12, innovation: 17 },
              narrative: 'Saved 140 MW in 90 seconds with zero noticeable disruption to workplace productivity.'
            },
            {
              key: 'D',
              title: 'Peer-to-Peer Rooftop Solar Incentive Trading',
              desc: 'Allow suburban homeowners in Jubilee Hills and Gachibowli to sell solar power directly to commercial complexes.',
              deltas: { sustainability: 20, safety: 12, efficiency: 15, wellbeing: 17, innovation: 19 },
              narrative: 'Over 85 MWh generated locally, transforming suburban rooftops into clean virtual power plants.'
            }
          ]
        },
        {
          id: 'water',
          number: '04',
          title: 'Industrial Bio-Pharma Closed-Loop Water Stress',
          badge: 'WATER METABOLISM // ZERO LIQUID DISCHARGE',
          situation: 'A sudden technical breakdown in an industrial effluent treatment pipeline threatens untreated chemical runoff into downstream agricultural irrigation channels.',
          question: 'How does NOVA enforce zero liquid discharge and protect civic water supplies?',
          options: [
            {
              key: 'A',
              title: 'Automated Isolation Valve Lock & Siphon Diversion',
              desc: 'Engage automated shutoff valves within 40 ms and divert industrial discharge into sealed emergency holding tanks.',
              deltas: { sustainability: 19, safety: 19, efficiency: 12, wellbeing: 16, innovation: 16 },
              narrative: 'Zero toxic seepage into groundwater. Contaminated stream captured 100% in sealed treatment caverns.'
            },
            {
              key: 'B',
              title: 'Deploy Mobile Ultrasonic Bioremediation Units',
              desc: 'Inject specialized catalytic enzymes and ozone nano-bubbles into holding reservoirs to neutralize contaminants in hours.',
              deltas: { sustainability: 21, safety: 17, efficiency: 14, wellbeing: 15, innovation: 19 },
              narrative: 'Water purified to potable standards on-site and recirculated back into industrial cooling towers.'
            },
            {
              key: 'C',
              title: 'Activate Multi-Sensor Deep Aquifer Monitoring',
              desc: 'Continuous spectrophotometric testing of 350 perimeter wells to ensure absolute safety of drinking water.',
              deltas: { sustainability: 15, safety: 18, efficiency: 13, wellbeing: 17, innovation: 15 },
              narrative: 'Complete data transparency. Real-time test results streamed to citizen app, eliminating public anxiety.'
            },
            {
              key: 'D',
              title: 'Mandatory Industrial Production Throttling',
              desc: 'Temporarily pause high-effluent chemical batch synthesis until primary closed-loop filtration is certified.',
              deltas: { sustainability: 17, safety: 16, efficiency: -6, wellbeing: 14, innovation: 11 },
              narrative: 'Industrial compliance reinforced. Clear signal sent that public health takes precedence over quarterly output.'
            }
          ]
        }
      ]
    }
  },

  // Helper Methods for Active City Management
  getActiveCity: function() {
    return this.cityData[this.activeCityId] || this.cityData.dehradun;
  },

  setActiveCity: function(cityId) {
    if (this.cityData[cityId]) {
      this.activeCityId = cityId;
      const city = this.cityData[cityId];
      // Update baseline to reflect selected city metrics
      this.baseline = { ...city.metrics };
      // Update active scenarios
      this.simulationScenarios = city.scenarios;
      // Dispatch custom event for reactive subsystem updates
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('nova:city-changed', {
          detail: { cityId, city }
        }));
      }
      return city;
    }
    return null;
  },

  getAllCities: function() {
    return Object.values(this.cityData);
  },

  // Baseline Fallback (Defaults to Dehradun)
  baseline: {
    population: 840000,
    energyEfficiency: 86.4,
    airQualityIndex: 68,
    trafficCongestion: 42,
    healthcareResponse: 4.1,
    renewableMix: 74.0,
    sustainability: 84,
    safety: 82,
    efficiency: 78,
    wellbeing: 88,
    innovation: 80
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

  // Active Simulation Scenarios (Defaults to active city scenarios)
  simulationScenarios: [],

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

  // Credible Sources
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

// Initialize default city active scenarios
window.NOVA_CONFIG.simulationScenarios = window.NOVA_CONFIG.cityData.dehradun.scenarios;


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
    this.listenToCityChanges();
  }

  init() {
    this.bindTabButtons();
    this.updateTabLabels();
    this.renderScenario(0);
  }

  listenToCityChanges() {
    window.addEventListener('nova:city-changed', (e) => {
      const city = e.detail.city;
      if (!city) return;
      this.scenarios = city.scenarios;
      this.userChoices = {};
      this.metrics = { ...city.metrics };
      this.currentScenarioIndex = 0;
      this.updateTabLabels();
      this.renderScenario(0);
      this.notifySubsystems();
    });
  }

  updateTabLabels() {
    const tabButtons = document.querySelectorAll('.sim-tab-btn');
    tabButtons.forEach((btn, idx) => {
      if (this.scenarios && this.scenarios[idx]) {
        const textSpan = btn.querySelector('span:not(.sim-tab-num):not(.sim-tab-status)');
        if (textSpan) {
          const s = this.scenarios[idx];
          const words = (s.title || '').split('&')[0].split('—')[0].trim().toUpperCase();
          textSpan.textContent = words.length > 15 ? words.slice(0, 13) + '..' : words;
        }
      }
    });
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

    window.addEventListener('nova:city-changed', (e) => {
      const { city } = e.detail;
      if (!city) return;
      const elCity = document.getElementById('dash-city-name');
      if (elCity) elCity.textContent = city.name.toUpperCase();
      this.currentPopulation = city.metrics.population;
      const popEl = document.getElementById('dash-val-pop');
      if (popEl) popEl.textContent = this.currentPopulation.toLocaleString();
      this.updateMetrics(city.metrics);
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

    const activeCity = window.NOVA_CONFIG ? window.NOVA_CONFIG.getActiveCity() : null;
    const baseAqi = activeCity ? activeCity.metrics.airQualityIndex : 68;
    const sustRatio = 100 / Math.max(30, m.sustainability);

    if (elEnergy) elEnergy.textContent = `${m.efficiency.toFixed(1)}%`;
    if (elAqi) elAqi.textContent = Math.round(baseAqi * (sustRatio * 0.8 + 0.2));
    if (elTraffic) elTraffic.textContent = `${Math.max(4, Math.round(35 - (m.efficiency * 0.2)))}%`;
    if (elHealthcare) elHealthcare.textContent = `${(5.5 - (m.safety * 0.025)).toFixed(1)} min`;
    if (elRenewable) elRenewable.textContent = `${Math.min(99.9, m.sustainability * 0.96).toFixed(1)}%`;
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
    // Dynamic population live tick based on current active city
    const popEl = document.getElementById('dash-val-pop');
    const activeCity = window.NOVA_CONFIG ? window.NOVA_CONFIG.getActiveCity() : null;
    this.currentPopulation = activeCity ? activeCity.metrics.population : 840000;
    if (popEl) popEl.textContent = this.currentPopulation.toLocaleString();

    setInterval(() => {
      this.currentPopulation += Math.floor(Math.random() * 3) - 1;
      if (popEl) popEl.textContent = this.currentPopulation.toLocaleString();
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


/* --- city-selector.js --- */
/**
 * NOVA CITY-FIRST INTELLIGENCE CONTROLLER
 * Handles City Selection modal, autocomplete search, geolocation matching,
 * and dynamic synchronization across the localized profile, challenges,
 * simulation, and telemetry dashboard.
 */

class NovaCitySelector {
  constructor() {
    this.modalEl = document.getElementById('city-selector-modal');
    this.searchInput = document.getElementById('city-search-input');
    this.autocompleteList = document.getElementById('city-autocomplete-list');
    this.popularPills = document.querySelectorAll('.city-pill-btn');
    this.locationBtn = document.getElementById('city-detect-btn');
    this.locationStatus = document.getElementById('city-location-status');
    this.closeBtn = document.getElementById('city-modal-close-btn');

    this.cityCoords = {
      dehradun: { lat: 30.3165, lon: 78.0322 },
      delhi: { lat: 28.6139, lon: 77.2090 },
      mumbai: { lat: 19.0760, lon: 72.8777 },
      bengaluru: { lat: 12.9716, lon: 77.5946 },
      hyderabad: { lat: 17.3850, lon: 78.4867 }
    };

    this.init();
  }

  init() {
    this.bindEvents();
    this.checkInitialCity();
  }

  checkInitialCity() {
    let savedCity = null;
    try {
      savedCity = localStorage.getItem('nova_selected_city');
    } catch (e) {}

    if (savedCity && window.NOVA_CONFIG.cityData[savedCity]) {
      this.applyCity(savedCity, false);
    } else {
      // Default to Dehradun and open selection modal for city-first onboarding
      this.applyCity('dehradun', false);
      setTimeout(() => {
        this.openModal();
      }, 500);
    }
  }

  bindEvents() {
    // Open Modal Triggers
    const navBtn = document.getElementById('nav-city-btn');
    if (navBtn) {
      navBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openModal();
      });
    }

    const heroChangeBtn = document.getElementById('hero-change-city-btn');
    if (heroChangeBtn) {
      heroChangeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openModal();
      });
    }

    // Close Modal
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.closeModal());
    }

    if (this.modalEl) {
      this.modalEl.addEventListener('click', (e) => {
        if (e.target === this.modalEl) {
          this.closeModal();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalEl && this.modalEl.classList.contains('active')) {
        this.closeModal();
      }
    });

    // Popular City Pills
    this.popularPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const cityId = pill.getAttribute('data-city');
        if (cityId) {
          this.selectCity(cityId);
        }
      });
    });

    // Search Autocomplete
    if (this.searchInput) {
      this.searchInput.addEventListener('input', () => {
        this.handleSearchInput(this.searchInput.value.trim());
      });

      this.searchInput.addEventListener('focus', () => {
        this.handleSearchInput(this.searchInput.value.trim());
      });
    }

    // Geolocation "Use My Location"
    if (this.locationBtn) {
      this.locationBtn.addEventListener('click', () => {
        this.detectUserLocation();
      });
    }
  }

  openModal() {
    if (!this.modalEl) return;
    this.modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (this.searchInput) {
      this.searchInput.value = '';
      setTimeout(() => this.searchInput.focus(), 150);
    }
    if (this.autocompleteList) {
      this.autocompleteList.classList.remove('active');
    }
    if (this.locationStatus) {
      this.locationStatus.textContent = '';
      this.locationStatus.className = 'location-status-text';
    }
    this.updatePillsActiveState(window.NOVA_CONFIG.activeCityId);
    if (window.novaAudio) window.novaAudio.playClick();
  }

  closeModal() {
    if (!this.modalEl) return;
    this.modalEl.classList.remove('active');
    document.body.style.overflow = '';
    if (window.novaAudio) window.novaAudio.playClick();
  }

  updatePillsActiveState(activeId) {
    this.popularPills.forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-city') === activeId);
    });
  }

  handleSearchInput(query) {
    if (!this.autocompleteList) return;

    if (!query) {
      this.autocompleteList.classList.remove('active');
      this.autocompleteList.innerHTML = '';
      return;
    }

    const q = query.toLowerCase();
    const cities = Object.values(window.NOVA_CONFIG.cityData || {});
    const matches = cities.filter(city => {
      return (
        city.name.toLowerCase().includes(q) ||
        city.state.toLowerCase().includes(q) ||
        city.tagline.toLowerCase().includes(q) ||
        city.id.toLowerCase().includes(q)
      );
    });

    if (matches.length === 0) {
      this.autocompleteList.innerHTML = `
        <div class="city-autocomplete-item" style="cursor: default; opacity: 0.6;">
          <div class="city-item-main">
            <span class="city-item-name">No regional city found for "${query}"</span>
            <span class="city-item-sub">Supported launch hubs: Dehradun, Delhi, Mumbai, Bengaluru, Hyderabad</span>
          </div>
        </div>
      `;
      this.autocompleteList.classList.add('active');
      return;
    }

    this.autocompleteList.innerHTML = matches.map(city => `
      <div class="city-autocomplete-item" data-city="${city.id}">
        <div class="city-item-main">
          <span class="city-item-name">${city.name}, <span style="font-weight: 400; color: var(--text-muted);">${city.state}</span></span>
          <span class="city-item-sub">${city.tagline}</span>
        </div>
        <span class="city-item-badge">${city.id.toUpperCase()}</span>
      </div>
    `).join('');

    this.autocompleteList.classList.add('active');

    this.autocompleteList.querySelectorAll('.city-autocomplete-item[data-city]').forEach(item => {
      item.addEventListener('click', () => {
        const cityId = item.getAttribute('data-city');
        this.selectCity(cityId);
      });
    });
  }

  detectUserLocation() {
    if (!navigator.geolocation) {
      if (this.locationStatus) {
        this.locationStatus.textContent = 'Geolocation not supported in browser.';
        this.locationStatus.className = 'location-status-text warning';
      }
      return;
    }

    if (this.locationStatus) {
      this.locationStatus.textContent = 'Acquiring satellite coordinate lock...';
      this.locationStatus.className = 'location-status-text';
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLat = pos.coords.latitude;
        const userLon = pos.coords.longitude;

        let closestCityId = 'dehradun';
        let minDistance = Infinity;

        Object.keys(this.cityCoords).forEach(cityId => {
          const c = this.cityCoords[cityId];
          const dist = this.haversineDistance(userLat, userLon, c.lat, c.lon);
          if (dist < minDistance) {
            minDistance = dist;
            closestCityId = cityId;
          }
        });

        const closestCity = window.NOVA_CONFIG.cityData[closestCityId];
        if (this.locationStatus) {
          this.locationStatus.textContent = `Nearest regional hub: ${closestCity.name} (~${Math.round(minDistance)} km)`;
          this.locationStatus.className = 'location-status-text success';
        }

        if (window.novaAudio) window.novaAudio.playChime(659.25);
        setTimeout(() => {
          this.selectCity(closestCityId);
        }, 800);
      },
      (err) => {
        if (this.locationStatus) {
          this.locationStatus.textContent = 'Location access denied. Please choose a city below.';
          this.locationStatus.className = 'location-status-text warning';
        }
      },
      { timeout: 8000 }
    );
  }

  haversineDistance(lat1, lon1, lat2, lon2) {
    const toRad = (x) => (x * Math.PI) / 180;
    const R = 6371; // Earth radius in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  selectCity(cityId) {
    this.applyCity(cityId, true);
    this.closeModal();

    // Smoothly scroll down to view localized profile
    setTimeout(() => {
      const profileSec = document.getElementById('city-profile-section');
      if (profileSec) {
        profileSec.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  }

  applyCity(cityId, playSound = false) {
    if (!window.NOVA_CONFIG.cityData[cityId]) return;

    window.NOVA_CONFIG.setActiveCity(cityId);
    const city = window.NOVA_CONFIG.cityData[cityId];

    this.updatePillsActiveState(cityId);

    // 1. Update Navbar Badge
    const navCityName = document.getElementById('nav-city-name');
    if (navCityName) navCityName.textContent = city.name.toUpperCase();

    // 2. Update Hero HUD
    const heroHudCity = document.getElementById('hero-hud-city');
    const heroHudCoords = document.getElementById('hero-hud-coords');
    if (heroHudCity) heroHudCity.textContent = `CITY // ${city.name.toUpperCase()}`;
    if (heroHudCoords) heroHudCoords.textContent = city.coordinates;

    // 3. Update City Profile Section DOM
    const profName = document.getElementById('profile-city-name');
    const profTagline = document.getElementById('profile-city-tagline');
    const profCoords = document.getElementById('profile-city-coords');
    const profContext = document.getElementById('profile-city-context');

    if (profName) profName.textContent = city.name;
    if (profTagline) profTagline.textContent = city.tagline;
    if (profCoords) profCoords.textContent = city.coordinates;
    if (profContext) profContext.textContent = city.heroContext;

    // Profile Metric Tiles
    const setElemText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setElemText('prof-metric-env', city.profile.environment);
    setElemText('prof-metric-aqi', city.profile.airQuality);
    setElemText('prof-metric-mobility', city.profile.mobility);
    setElemText('prof-metric-growth', city.profile.urbanGrowth);
    setElemText('prof-metric-energy', city.profile.energy);
    setElemText('prof-metric-health', city.profile.healthcare);
    setElemText('prof-metric-risk', city.profile.environmentalRisk);
    setElemText('prof-metric-canopy', city.profile.greenCover);

    // 4. Update Analyzed Challenges
    const challengeCityName = document.getElementById('challenge-city-name');
    if (challengeCityName) challengeCityName.textContent = city.name;

    const challengesGrid = document.getElementById('city-challenges-grid');
    if (challengesGrid && city.challenges) {
      challengesGrid.innerHTML = city.challenges.map((c, idx) => `
        <div class="challenge-card">
          <div class="challenge-card-top">
            <span class="challenge-tag">${c.tag}</span>
            <div class="challenge-status-pulse">
              <span class="challenge-dot"></span>
              <span>ACTIVE FRICTION</span>
            </div>
          </div>
          <h4 class="challenge-title">${c.title}</h4>
          <p class="challenge-desc">${c.desc}</p>
          <div class="challenge-action-row">
            <button class="challenge-btn" data-scenario-idx="${idx}">
              RESOLVE IN SIMULATION →
            </button>
          </div>
        </div>
      `).join('');

      challengesGrid.querySelectorAll('.challenge-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const sIdx = parseInt(btn.getAttribute('data-scenario-idx'), 10) || 0;
          const simSec = document.getElementById('simulate');
          if (simSec) {
            simSec.scrollIntoView({ behavior: 'smooth' });
          }
          if (window.novaSimulation) {
            window.novaSimulation.currentScenarioIndex = sIdx;
            window.novaSimulation.renderScenario(sIdx);
          }
        });
      });
    }

    // 5. Update Section 05 Dashboard City Badge
    const dashCityName = document.getElementById('dash-city-name');
    if (dashCityName) dashCityName.textContent = city.name.toUpperCase();

    if (playSound && window.novaAudio) {
      window.novaAudio.playChime(523.25, 0.4);
    }
  }
}

// Instantiate on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.novaCitySelector = new NovaCitySelector();
});


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


