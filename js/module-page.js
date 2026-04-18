/* ============================================================
   CARDUMEN — L\u00f3gica compartida de cada m\u00f3dulo (pagina de lectura).
   Requiere: progress.js cargado antes y <body data-module-num="N">.
   ============================================================ */

(function() {
  const MODULE_NUM = parseInt(document.body.dataset.moduleNum, 10);
  const TOTAL_MODULES = 9;
  const progress = CardumenProgress.init('estetica-anatomia');

  // ---- Sidebar mobile: abrir / cerrar / ESC / backdrop ----
  const tocSidebar = document.getElementById('tocSidebar');
  const tocBackdrop = document.getElementById('tocBackdrop');
  const tocOpenBtn = document.getElementById('menuOpen');
  const tocCloseBtn = document.getElementById('tocClose');

  function openToc()  { tocSidebar?.classList.add('open'); tocBackdrop?.classList.add('visible'); document.body.classList.add('toc-open'); }
  function closeToc() { tocSidebar?.classList.remove('open'); tocBackdrop?.classList.remove('visible'); document.body.classList.remove('toc-open'); }

  tocOpenBtn?.addEventListener('click', openToc);
  tocCloseBtn?.addEventListener('click', closeToc);
  tocBackdrop?.addEventListener('click', closeToc);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeToc(); });
  tocSidebar?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeToc));

  // ---- Toast ligero ----
  function toast(msg) {
    let el = document.getElementById('cardumen-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'cardumen-toast';
      el.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:#1F1A13;color:#FAF5E9;border:1px solid rgba(212,169,74,0.3);padding:0.9rem 1.4rem;border-radius:10px;font-size:0.9rem;font-family:inherit;z-index:9999;opacity:0;transition:opacity 250ms;box-shadow:0 20px 60px rgba(0,0,0,0.4);max-width:90%;text-align:center;';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity = '1';
    clearTimeout(el._t);
    el._t = setTimeout(() => { el.style.opacity = '0'; }, 2800);
  }

  // ---- TOC render: completed + locked + progreso global ----
  function renderTOC() {
    document.querySelectorAll('.toc-link[data-module]').forEach(link => {
      const n = parseInt(link.dataset.module, 10);
      link.classList.remove('completed', 'locked');
      if (progress.isCompleted(n)) link.classList.add('completed');
      if (!progress.isUnlocked(n)) link.classList.add('locked');
    });
    const pctEl = document.getElementById('tocPct');
    const fillEl = document.getElementById('tocFill');
    const doneCount = [1,2,3,4,5,6,7,8].filter(n => progress.isCompleted(n)).length;
    const pct = Math.round((doneCount / TOTAL_MODULES) * 100);
    if (pctEl) pctEl.textContent = pct + '%';
    if (fillEl) fillEl.style.width = pct + '%';
  }
  renderTOC();

  document.querySelector('.toc-list')?.addEventListener('click', (e) => {
    const link = e.target.closest('.toc-link.locked');
    if (!link) return;
    e.preventDefault();
    toast('Completa el modulo anterior y su quiz para desbloquear este.');
  });

  // ---- Quizzes: registrar quizPassed cuando TODOS correctos ----
  const quizzes = Array.from(document.querySelectorAll('.quiz'));
  const quizState = quizzes.map(() => false);
  function refreshQuizAggregate() {
    if (quizzes.length && quizState.every(Boolean)) progress.setQuizPassed(MODULE_NUM);
  }
  quizzes.forEach((quiz, i) => {
    quiz.querySelectorAll('.quiz-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const correct = opt.dataset.correct === 'true';
        quiz.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('correct', 'wrong'));
        opt.classList.add(correct ? 'correct' : 'wrong');
        if (!correct) quiz.querySelector('[data-correct="true"]')?.classList.add('correct');
        quizState[i] = correct;
        refreshQuizAggregate();
      });
    });
  });

  const hasQuiz = quizzes.length > 0;

  // ---- Bot\u00f3n marcar completado ----
  const completeBtn = document.querySelector('.btn-complete');
  function paintCompleteBtn() {
    if (!completeBtn) return;
    if (progress.isCompleted(MODULE_NUM)) {
      completeBtn.innerHTML = '\u2713 Completado \u2014 marcar como pendiente';
      completeBtn.classList.add('is-done');
    } else {
      completeBtn.innerHTML = 'Marcar completado <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
      completeBtn.classList.remove('is-done');
    }
  }
  paintCompleteBtn();
  completeBtn?.addEventListener('click', () => {
    if (progress.isCompleted(MODULE_NUM)) {
      progress.unmarkCompleted(MODULE_NUM);
      paintCompleteBtn(); renderTOC();
      toast('Modulo marcado como pendiente.');
      return;
    }
    const result = progress.tryMarkCompleted(MODULE_NUM, { hasQuiz });
    if (result.ok) {
      paintCompleteBtn(); renderTOC();
      toast('\u2713 Modulo completado. Siguiente desbloqueado.');
    } else if (result.reason === 'quiz') {
      toast('Responde el quiz correctamente antes de marcar completado.');
    } else if (result.reason === 'locked') {
      toast('Este modulo aun no esta desbloqueado.');
    }
  });

  // ---- Notas autosave ----
  const notesEl  = document.querySelector('.notes-widget textarea');
  const savedMsg = document.querySelector('.notes-saved');
  if (notesEl) {
    const noteKey = 'module-' + MODULE_NUM;
    notesEl.value = progress.getNote(noteKey);
    let t;
    notesEl.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        progress.setNote(noteKey, notesEl.value);
        if (savedMsg) {
          savedMsg.style.display = 'block';
          setTimeout(() => { savedMsg.style.display = 'none'; }, 2000);
        }
      }, 600);
    });
  }

  // ---- Right sidebar TOC (indicador simple) ----
  const items = document.querySelectorAll('.section-toc-item');
  items.forEach(i => i.addEventListener('click', () => {
    items.forEach(x => x.classList.remove('active'));
    i.classList.add('active');
  }));
})();
