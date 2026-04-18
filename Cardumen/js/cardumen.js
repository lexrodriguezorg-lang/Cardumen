/* ============================================================
   CARDUMEN — Lógica de la app
   ============================================================ */

const Cardumen = {
  refuerzoId: null,    // se setea en cada refuerzo
  totalModules: 0,
  state: {},

  init(config) {
    this.refuerzoId = config.refuerzoId;
    this.totalModules = config.totalModules;
    this.loadState();
    this.applyTheme();
    this.renderProgress();
    this.markCurrentModule();
    this.bindEvents();
  },

  // --- Estado persistente por refuerzo ---
  loadState() {
    const key = `cardumen_${this.refuerzoId}`;
    const saved = localStorage.getItem(key);
    this.state = saved ? JSON.parse(saved) : {
      completed: [],
      currentModule: 0,
      notes: {},
      lastVisit: Date.now()
    };
  },

  saveState() {
    const key = `cardumen_${this.refuerzoId}`;
    this.state.lastVisit = Date.now();
    localStorage.setItem(key, JSON.stringify(this.state));
  },

  // --- Marcar módulo como completado ---
  markCompleted(moduleNum) {
    if (!this.state.completed.includes(moduleNum)) {
      this.state.completed.push(moduleNum);
      this.saveState();
      this.renderProgress();
      this.celebrateCompletion();
    }
  },

  toggleCompleted(moduleNum) {
    const idx = this.state.completed.indexOf(moduleNum);
    if (idx >= 0) this.state.completed.splice(idx, 1);
    else this.state.completed.push(moduleNum);
    this.saveState();
    this.renderProgress();
    location.reload();
  },

  // --- Render barra global ---
  renderProgress() {
    const pct = Math.round((this.state.completed.length / this.totalModules) * 100);
    const pctEl = document.querySelector('.progress-global .pct');
    const barEl = document.querySelector('.progress-bar .fill');
    const labelEl = document.querySelector('.progress-global .label');
    if (pctEl) pctEl.textContent = pct + '%';
    if (barEl) barEl.style.width = pct + '%';
    if (labelEl) labelEl.textContent = `${this.state.completed.length} de ${this.totalModules} módulos`;

    // Marcar cada uno completado en la nav
    document.querySelectorAll('.module-nav a[data-module]').forEach(a => {
      const num = parseInt(a.dataset.module);
      if (this.state.completed.includes(num)) a.classList.add('completed');
      else a.classList.remove('completed');
    });
  },

  markCurrentModule() {
    const current = document.body.dataset.moduleNum;
    if (!current) return;
    document.querySelectorAll('.module-nav a').forEach(a => a.classList.remove('active'));
    const link = document.querySelector(`.module-nav a[data-module="${current}"]`);
    if (link) link.classList.add('active');
  },

  // --- Modo oscuro ---
  toggleTheme() {
    const current = document.documentElement.dataset.theme || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('cardumen_theme', next);
    this.updateThemeIcon();
  },

  applyTheme() {
    const saved = localStorage.getItem('cardumen_theme') || 'light';
    document.documentElement.dataset.theme = saved;
    this.updateThemeIcon();
  },

  updateThemeIcon() {
    const btn = document.querySelector('#theme-toggle');
    if (!btn) return;
    const isDark = document.documentElement.dataset.theme === 'dark';
    btn.innerHTML = isDark ? '☀️' : '🌙';
  },

  // --- Quizzes ---
  checkQuiz(optionEl, isCorrect) {
    const quiz = optionEl.closest('.quiz');
    quiz.querySelectorAll('.quiz-option').forEach(o => {
      o.classList.remove('correct', 'wrong');
      o.style.pointerEvents = 'none';
    });
    optionEl.classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect) {
      quiz.querySelector('.quiz-option[data-correct="true"]')?.classList.add('correct');
    }
  },

  // --- Móvil: abrir/cerrar sidebar ---
  toggleSidebar() {
    document.querySelector('.sidebar')?.classList.toggle('open');
  },

  bindEvents() {
    document.addEventListener('click', e => {
      if (e.target.matches('.quiz-option')) {
        const correct = e.target.dataset.correct === 'true';
        this.checkQuiz(e.target, correct);
      }
      if (e.target.closest('#theme-toggle')) this.toggleTheme();
      if (e.target.closest('#menu-toggle-mobile')) this.toggleSidebar();
      if (e.target.closest('.mark-complete-btn')) {
        const num = parseInt(document.body.dataset.moduleNum);
        this.toggleCompleted(num);
      }
    });
  },

  celebrateCompletion() {
    // micro-feedback simple, sin librerías
    const pct = Math.round((this.state.completed.length / this.totalModules) * 100);
    const msg = pct === 100
      ? '🎉 ¡Completaste todo el Refuerzo! Pide tu próximo tema abajo.'
      : `✓ Módulo marcado. Vas en ${pct}%`;
    this.toast(msg);
  },

  toast(msg) {
    let el = document.querySelector('#cardumen-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'cardumen-toast';
      el.style.cssText = `
        position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
        background: var(--c-primary); color: white; padding: 14px 24px;
        border-radius: 8px; font-weight: 500; z-index: 1000;
        box-shadow: var(--shadow-lg); opacity: 0; transition: opacity 0.3s;
      `;
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity = '1';
    setTimeout(() => { el.style.opacity = '0'; }, 3000);
  }
};
