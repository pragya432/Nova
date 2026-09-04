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
