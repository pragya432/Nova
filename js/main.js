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
