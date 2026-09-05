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
