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
