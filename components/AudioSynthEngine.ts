// Web Audio API Synth Engine for NOIR BEAT Live Experience
// Synthesizes an authentic 128 BPM festival electronic beat without external audio files

class AudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timerId: number | null = null;
  public analyser: AnalyserNode | null = null;
  private currentStep = 0;
  private bpm = 128;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    this.init();
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private playKick(time: number) {
    if (!this.ctx || !this.analyser) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(32, time + 0.12);

    gain.gain.setValueAtTime(1, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);

    osc.connect(gain);
    gain.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + 0.35);
  }

  private playHiHat(time: number, accent: boolean) {
    if (!this.ctx || !this.analyser) return;
    const bufferSize = this.ctx.sampleRate * 0.05;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 7000;

    const gain = this.ctx.createGain();
    const volume = accent ? 0.3 : 0.12;
    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + (accent ? 0.08 : 0.04));

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);

    noise.start(time);
    noise.stop(time + 0.1);
  }

  private playBass(time: number, freq: number) {
    if (!this.ctx || !this.analyser) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(freq, time);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(450, time);
    filter.frequency.exponentialRampToValueAtTime(120, time + 0.2);

    gain.gain.setValueAtTime(0.4, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + 0.25);
  }

  private step() {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const stepDuration = 60 / this.bpm / 4; // 16th note

    // 4-on-the-floor kick
    if (this.currentStep % 4 === 0) {
      this.playKick(now);
    }

    // Offbeat hi-hat
    if (this.currentStep % 4 === 2) {
      this.playHiHat(now, true);
    } else if (this.currentStep % 2 === 1) {
      this.playHiHat(now, false);
    }

    // Rolling festival bass pattern (F -> G# -> D# -> C)
    const bassNotes = [55, 55, 65.4, 55, 55, 55, 73.4, 55, 55, 55, 49, 55, 55, 65.4, 73.4, 82.4];
    if (this.currentStep % 2 === 0) {
      this.playBass(now, bassNotes[this.currentStep % 16]);
    }

    this.currentStep = (this.currentStep + 1) % 16;
    this.timerId = window.setTimeout(() => this.step(), stepDuration * 1000);
  }

  public start() {
    this.isPlaying = true;
    this.currentStep = 0;
    this.step();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }
}

export const audioEngine = typeof window !== "undefined" ? new AudioEngine() : ({} as AudioEngine);
