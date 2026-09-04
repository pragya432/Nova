/**
 * NOVA 3D DIGITAL TWIN CITY ENGINE
 * Real-time procedural urban digital twin rendered with Three.js.
 * Features architectural volumetric skyscrapers, edge wireframes,
 * moving transit vehicle particles, energy flow pulses, and mouse parallax.
 */

class Nova3DCity {
  constructor() {
    this.canvas = document.getElementById('hero-city-canvas');
    if (!this.canvas) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.buildingsGroup = null;
    this.trafficParticles = null;
    this.energyLinesGroup = null;

    // Mouse Parallax & Orbit
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetRotationX = 0.35;
    this.targetRotationY = -0.45;
    this.currentRotationX = 0.35;
    this.currentRotationY = -0.45;
    this.isDragging = false;
    this.previousMouseX = 0;
    this.previousMouseY = 0;

    this.init();
  }

  init() {
    if (typeof THREE === 'undefined') {
      console.warn('Three.js not loaded. Retrying in 200ms...');
      setTimeout(() => this.init(), 200);
      return;
    }

    const width = this.canvas.parentElement.clientWidth;
    const height = this.canvas.parentElement.clientHeight;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x07090e, 0.014);

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    this.camera.position.set(0, 48, 82);
    this.camera.lookAt(0, 4, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0x1a233a, 2.2);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 1.8);
    dirLight1.position.set(50, 80, 40);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x8b5cf6, 1.2);
    dirLight2.position.set(-50, 40, -40);
    this.scene.add(dirLight2);

    // Build the Living City
    this.createGroundGrid();
    this.createProceduralBuildings();
    this.createTrafficSystem();
    this.createEnergyBeacons();

    // Event Listeners
    this.bindEvents();

    // Start Render Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  createGroundGrid() {
    // Coordinate Grid Helper
    const gridHelper = new THREE.GridHelper(160, 40, 0x00f0ff, 0x151f33);
    gridHelper.position.y = -0.05;
    this.scene.add(gridHelper);

    // Subtle Ground Disc
    const groundGeo = new THREE.PlaneGeometry(240, 240);
    const groundMat = new THREE.MeshBasicMaterial({
      color: 0x07090e,
      depthWrite: false
    });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = -0.1;
    this.scene.add(groundMesh);
  }

  createProceduralBuildings() {
    this.buildingsGroup = new THREE.Group();

    const gridSize = 7;
    const spacing = 11;
    const buildingMat = new THREE.MeshPhongMaterial({
      color: 0x0d121c,
      specular: 0x00f0ff,
      shininess: 30,
      flatShading: true
    });

    const edgeMatCyan = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.55
    });

    const edgeMatViolet = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.45
    });

    for (let x = -gridSize; x <= gridSize; x++) {
      for (let z = -gridSize; z <= gridSize; z++) {
        // Leave broad arterial boulevard intersections open
        if (Math.abs(x) === 1 || Math.abs(z) === 1) continue;
        if (Math.random() > 0.72) continue; // Organic density variation

        const distFromCenter = Math.sqrt(x * x + z * z);
        const maxH = Math.max(4, 28 - distFromCenter * 2.5);
        const height = 4 + Math.random() * maxH;
        const width = 4 + Math.random() * 3.5;
        const depth = 4 + Math.random() * 3.5;

        const boxGeo = new THREE.BoxGeometry(width, height, depth);
        const boxMesh = new THREE.Mesh(boxGeo, buildingMat);
        boxMesh.position.set(x * spacing + (Math.random() - 0.5) * 2, height / 2, z * spacing + (Math.random() - 0.5) * 2);

        // Architectural Edge Wireframe
        const edges = new THREE.EdgesGeometry(boxGeo);
        const line = new THREE.LineSegments(edges, Math.random() > 0.35 ? edgeMatCyan : edgeMatViolet);
        boxMesh.add(line);

        // Rooftop Communication Beacon
        if (height > 18) {
          const antennaGeo = new THREE.CylinderGeometry(0.08, 0.08, 3, 6);
          const antennaMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
          const antenna = new THREE.Mesh(antennaGeo, antennaMat);
          antenna.position.set(0, height / 2 + 1.5, 0);
          boxMesh.add(antenna);

          // Pulsing Beacon Light Sphere
          const beaconGeo = new THREE.SphereGeometry(0.3, 8, 8);
          const beaconMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
          const beacon = new THREE.Mesh(beaconGeo, beaconMat);
          beacon.position.set(0, height / 2 + 3.1, 0);
          boxMesh.add(beacon);
        }

        this.buildingsGroup.add(boxMesh);
      }
    }

    this.scene.add(this.buildingsGroup);
  }

  createTrafficSystem() {
    // Thousands of light points flowing through the grid
    const particleCount = 1400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    this.particleSpeeds = [];

    const colorCyan = new THREE.Color(0x00f0ff);
    const colorViolet = new THREE.Color(0x8b5cf6);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const isEastWest = Math.random() > 0.5;
      const roadCoord = (Math.floor(Math.random() * 12) - 6) * 11 + 5.5;

      let x, y, z;
      if (isEastWest) {
        x = (Math.random() - 0.5) * 160;
        z = roadCoord;
      } else {
        x = roadCoord;
        z = (Math.random() - 0.5) * 160;
      }
      y = 0.4 + Math.random() * 0.8;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color assignment
      const c = Math.random() > 0.4 ? colorCyan : (Math.random() > 0.3 ? colorViolet : colorWhite);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      // Speed & direction
      this.particleSpeeds.push({
        isEastWest,
        speed: (0.15 + Math.random() * 0.3) * (Math.random() > 0.5 ? 1 : -1)
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    this.trafficParticles = new THREE.Points(geometry, material);
    this.scene.add(this.trafficParticles);
  }

  createEnergyBeacons() {
    // Overhead energy conduits connecting main towers
    this.energyLinesGroup = new THREE.Group();
    const curvePoints = [
      new THREE.Vector3(-35, 24, -20),
      new THREE.Vector3(0, 32, 5),
      new THREE.Vector3(35, 20, 25)
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 40, 0.15, 6, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.6,
      wireframe: true
    });
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    this.energyLinesGroup.add(tube);

    this.scene.add(this.energyLinesGroup);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      if (!this.canvas || !this.renderer || !this.camera) return;
      const width = this.canvas.parentElement.clientWidth;
      const height = this.canvas.parentElement.clientHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    });

    // Mouse movement for subtle tilt/parallax
    window.addEventListener('mousemove', (e) => {
      this.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      this.mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      this.targetRotationY = -0.45 + this.mouseX * 0.25;
      this.targetRotationX = 0.35 + this.mouseY * 0.15;
    });

    // Canvas Mouse Drag Orbit
    const container = this.canvas.parentElement;
    container.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.previousMouseX = e.clientX;
      this.previousMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const deltaX = e.clientX - this.previousMouseX;
      const deltaY = e.clientY - this.previousMouseY;
      this.targetRotationY += deltaX * 0.005;
      this.targetRotationX = Math.max(0.1, Math.min(0.8, this.targetRotationX + deltaY * 0.005));
      this.previousMouseX = e.clientX;
      this.previousMouseY = e.clientY;
    });

    // Touch Support for mobile
    container.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMouseX = e.touches[0].clientX;
        this.previousMouseY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - this.previousMouseX;
      const deltaY = e.touches[0].clientY - this.previousMouseY;
      this.targetRotationY += deltaX * 0.005;
      this.targetRotationX = Math.max(0.1, Math.min(0.8, this.targetRotationX + deltaY * 0.005));
      this.previousMouseX = e.touches[0].clientX;
      this.previousMouseY = e.touches[0].clientY;
    }, { passive: true });
  }

  // Camera dive transition when "ENTER NOVA" is clicked
  diveIntoCity(callback) {
    if (!this.camera) {
      if (callback) callback();
      return;
    }

    const startY = this.camera.position.y;
    const startZ = this.camera.position.z;
    const targetY = 18;
    const targetZ = 35;
    let progress = 0;

    const diveInterval = setInterval(() => {
      progress += 0.04;
      if (progress >= 1) {
        clearInterval(diveInterval);
        if (callback) callback();
        // Gently drift back up for ambient background
        setTimeout(() => {
          this.camera.position.set(0, 48, 82);
        }, 1500);
      } else {
        const ease = 1 - Math.pow(1 - progress, 3);
        this.camera.position.y = startY + (targetY - startY) * ease;
        this.camera.position.z = startZ + (targetZ - startZ) * ease;
      }
    }, 16);
  }

  animate() {
    requestAnimationFrame(this.animate);

    // Smooth Orbit & Parallax interpolation
    this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.05;
    this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.05;

    if (this.buildingsGroup) {
      this.buildingsGroup.rotation.y = this.currentRotationY;
      this.buildingsGroup.rotation.x = this.currentRotationX - 0.35;
    }

    // Auto-drift slow revolution
    if (!this.isDragging) {
      this.targetRotationY += 0.0006;
    }

    // Update Traffic Particles Movement
    if (this.trafficParticles) {
      const positions = this.trafficParticles.geometry.attributes.position.array;
      const count = this.particleSpeeds.length;

      for (let i = 0; i < count; i++) {
        const info = this.particleSpeeds[i];
        if (info.isEastWest) {
          positions[i * 3] += info.speed;
          if (positions[i * 3] > 80) positions[i * 3] = -80;
          if (positions[i * 3] < -80) positions[i * 3] = 80;
        } else {
          positions[i * 3 + 2] += info.speed;
          if (positions[i * 3 + 2] > 80) positions[i * 3 + 2] = -80;
          if (positions[i * 3 + 2] < -80) positions[i * 3 + 2] = 80;
        }
      }

      this.trafficParticles.geometry.attributes.position.needsUpdate = true;
      this.trafficParticles.rotation.y = this.currentRotationY;
      this.trafficParticles.rotation.x = this.currentRotationX - 0.35;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}

window.nova3DCity = new Nova3DCity();
