/**
 * NOVA AUDIO ENGINE — SYNTHETIC SOUNDSCAPE & FEEDBACK
 * Built with Web Audio API. Zero external audio file dependencies.
 * Calibrated for a subtle, high-tech, cinematic atmosphere.
 * Muted by default.
 */

class NovaAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.isMuted = true;
    this.ambientGain = null;
    this.ambientOsc1 = null;
    this.ambientOsc2 = null;
    this.ambientFilter = null;
    this.initElements();
  }

  initElements() {
    this.toggleBtn = document.getElementById('audio-toggle-btn');
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggleAudio());
    }
  }

  initAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
        this.startAmbient();
      }
    } else if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleAudio() {
    this.initAudioContext();
    this.isMuted = !this.isMuted;

    if (this.toggleBtn) {
      if (this.isMuted) {
        this.toggleBtn.classList.remove('active');
        this.toggleBtn.querySelector('.audio-text').textContent = 'AUDIO: OFF';
        if (this.ambientGain) {
          this.ambientGain.gain.setTargetAtTime(0, this.audioCtx.currentTime, 0.2);
        }
      } else {
        this.toggleBtn.classList.add('active');
        this.toggleBtn.querySelector('.audio-text').textContent = 'AUDIO: ON';
        if (this.ambientGain) {
          this.ambientGain.gain.setTargetAtTime(0.04, this.audioCtx.currentTime, 0.5);
        }
        this.playChime(523.25, 0.2); // Welcome C5 ping
      }
    }
  }

  startAmbient() {
    if (!this.audioCtx) return;

    try {
      // Sub-bass warm drone (55Hz / 110Hz)
      this.ambientGain = this.audioCtx.createGain();
      this.ambientGain.gain.setValueAtTime(0, this.audioCtx.currentTime);

      this.ambientFilter = this.audioCtx.createBiquadFilter();
      this.ambientFilter.type = 'lowpass';
      this.ambientFilter.frequency.setValueAtTime(240, this.audioCtx.currentTime);

      this.ambientOsc1 = this.audioCtx.createOscillator();
      this.ambientOsc1.type = 'sine';
      this.ambientOsc1.frequency.setValueAtTime(55, this.audioCtx.currentTime); // A1

      this.ambientOsc2 = this.audioCtx.createOscillator();
      this.ambientOsc2.type = 'sine';
      this.ambientOsc2.frequency.setValueAtTime(110.2, this.audioCtx.currentTime); // Slight detune for subtle binaural beat

      this.ambientOsc1.connect(this.ambientFilter);
      this.ambientOsc2.connect(this.ambientFilter);
      this.ambientFilter.connect(this.ambientGain);
      this.ambientGain.connect(this.audioCtx.destination);

      this.ambientOsc1.start();
      this.ambientOsc2.start();
    } catch (e) {
      console.warn('Ambient audio init failed:', e);
    }
  }

  // Micro-interaction UI Sound (Soft click/blip)
  playClick() {
    if (this.isMuted || !this.audioCtx) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, this.audioCtx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.03, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.05);
    } catch (e) {}
  }

  // Soft Chime for selections and confirmations
  playChime(freq = 659.25, duration = 0.25) {
    if (this.isMuted || !this.audioCtx) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.05, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration + 0.02);
    } catch (e) {}
  }

  // Consequence Calculation Chord
  playSuccessChord() {
    if (this.isMuted || !this.audioCtx) return;
    setTimeout(() => this.playChime(523.25, 0.3), 0);
    setTimeout(() => this.playChime(659.25, 0.3), 80);
    setTimeout(() => this.playChime(783.99, 0.4), 160);
  }
}

window.novaAudio = new NovaAudioEngine();
