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
