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
