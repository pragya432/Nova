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
