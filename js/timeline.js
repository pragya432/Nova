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
