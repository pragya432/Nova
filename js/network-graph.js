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
