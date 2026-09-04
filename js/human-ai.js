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
