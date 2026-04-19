/* ============================================================
   CARDUMEN — Progreso por Refuerzo
   API pequena y compartida entre refuerzo/index.html y cada modulo.
   Estado en localStorage['cardumen_<refuerzoId>'].
   ============================================================ */

window.CardumenProgress = {
  refuerzoId: null,
  storageKey: null,
  state: null,

  init(refuerzoId) {
    this.refuerzoId = refuerzoId;
    this.storageKey = 'cardumen_' + refuerzoId;
    this.load();
    return this;
  },

  load() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem(this.storageKey) || 'null'); } catch (_) {}
    if (!s || typeof s !== 'object') s = {};
    if (!Array.isArray(s.completed)) s.completed = [];
    if (!s.quizPassed || typeof s.quizPassed !== 'object') s.quizPassed = {};
    if (!s.notes || typeof s.notes !== 'object') s.notes = {};
    this.state = s;
  },

  save() {
    this.state.lastVisit = Date.now();
    localStorage.setItem(this.storageKey, JSON.stringify(this.state));
  },

  isCompleted(num) {
    return this.state.completed.includes(Number(num));
  },

  isQuizPassed(num) {
    return this.state.quizPassed[String(num)] === true;
  },

  /**
   * Modulo desbloqueado si:
   * - num <= 1  (Inicio y Modulo 1 siempre abiertos)
   * - o el previo esta completado
   * markCompleted ya exige quiz aprobado cuando aplica, asi que "previo completado"
   * garantiza tambien "quiz del previo aprobado" sin duplicar la regla.
   */
  isUnlocked(num) {
    const n = Number(num);
    if (n <= 1) return true;
    return this.isCompleted(n - 1);
  },

  /**
   * Intenta marcar completado. Devuelve:
   *   { ok: true }                     si se marco
   *   { ok: false, reason: 'quiz' }    si hay quiz pendiente
   *   { ok: false, reason: 'locked' }  si el modulo aun no esta desbloqueado
   */
  tryMarkCompleted(num, { hasQuiz = false } = {}) {
    const n = Number(num);
    if (!this.isUnlocked(n)) return { ok: false, reason: 'locked' };
    if (hasQuiz && !this.isQuizPassed(n)) return { ok: false, reason: 'quiz' };
    if (!this.state.completed.includes(n)) {
      this.state.completed.push(n);
      this.save();
    }
    return { ok: true };
  },

  unmarkCompleted(num) {
    const n = Number(num);
    const idx = this.state.completed.indexOf(n);
    if (idx >= 0) {
      this.state.completed.splice(idx, 1);
      this.save();
    }
  },

  setQuizPassed(num) {
    this.state.quizPassed[String(num)] = true;
    this.save();
  },

  getNote(key) {
    return this.state.notes[key] || '';
  },

  setNote(key, value) {
    this.state.notes[key] = value;
    this.save();
  },

  /**
   * Artefactos independientes (simuladores, exploradores) que viven fuera
   * del state principal para no inflarlo. Cada artefacto guarda su propio
   * flag en localStorage['cardumen_<id>'] con { completed, date, ...extra }.
   * Util para condicionar mark-completed de un modulo a que los
   * artefactos clave fueron completados.
   */
  hasArtefactoCompleted(id) {
    try {
      const data = JSON.parse(localStorage.getItem('cardumen_' + id) || 'null');
      return !!(data && data.completed);
    } catch (_) { return false; }
  },

  setArtefactoCompleted(id, extra) {
    try {
      const data = Object.assign({ completed: true, date: new Date().toISOString() }, extra || {});
      localStorage.setItem('cardumen_' + id, JSON.stringify(data));
    } catch (_) {}
  }
};
