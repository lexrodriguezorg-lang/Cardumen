/* ============================================================
   CARDUMEN — Bottom nav m\u00f3vil tipo app (Instagram/Spotify).
   Se inyecta solo en paginas protegidas y en viewport < 900px.
   ============================================================ */

(function() {
  // Evitar inyectar dos veces
  if (document.getElementById('cardumenBottomNav')) return;

  // Verificar sesion activa — sin sesion no mostramos
  let session = null;
  try { session = JSON.parse(localStorage.getItem('cardumen_session') || 'null'); } catch (_) {}
  if (!session || !session.email) return;

  const pageKind = (document.body.dataset.page || '').toLowerCase();
  const path = window.location.pathname;

  // Decidir que item esta activo segun la pagina actual
  function isActive(key) {
    if (pageKind === key) return true;
    if (key === 'estudiar' && /\/refuerzos\//.test(path)) return true;
    if (key === 'dashboard' && /mi-cardumen/.test(path)) return true;
    if (key === 'biblioteca' && /(index\.html)?$/.test(path) && pageKind !== 'perfil' && pageKind !== 'referidos') return false;
    return false;
  }

  // Todas las rutas son absolutas — funcionan desde cualquier path,
  // sin importar cleanUrls/trailingSlash de Vercel.
  const REFUERZO = '/refuerzos/estetica-anatomia/';

  // Resolver URL al modulo en curso (si hay) o al primer modulo del refuerzo
  function resolveEstudiarHref() {
    try {
      const s = JSON.parse(localStorage.getItem('cardumen_estetica-anatomia') || 'null');
      const done = (s && Array.isArray(s.completed)) ? s.completed : [];
      for (let n = 1; n <= 8; n++) {
        if (!done.includes(n)) {
          const file = n === 8 ? 'bonus.html' : 'modulo-' + n + '.html';
          return REFUERZO + file;
        }
      }
      return REFUERZO + 'bonus.html';
    } catch (_) {
      return REFUERZO + 'modulo-1.html';
    }
  }

  const items = [
    { key: 'dashboard',  label: 'Mi estudio', href: '/mi-cardumen.html',
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9M5 10v10h14V10"/></svg>' },
    { key: 'estudiar',   label: 'Estudiar',   href: resolveEstudiarHref(),
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h11a3 3 0 013 3v14H7a3 3 0 01-3-3V4z"/><path d="M4 16h14"/></svg>' },
    { key: 'biblioteca', label: 'Biblioteca', href: '/index.html#biblioteca',
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="4" height="16" rx="1"/><rect x="9" y="4" width="4" height="16" rx="1"/><path d="M15 5l4 1 3 13-4 1z"/></svg>' },
    { key: 'perfil',     label: 'Cuenta',     href: '/perfil.html',
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>' }
  ];

  const nav = document.createElement('nav');
  nav.id = 'cardumenBottomNav';
  nav.className = 'cardumen-bottom-nav';
  nav.setAttribute('aria-label', 'Navegacion principal');

  nav.innerHTML = items.map(i => {
    const active = isActive(i.key) ? ' is-active' : '';
    return '<a href="' + i.href + '" class="cbn-item' + active + '" data-key="' + i.key + '">'
      + '<span class="cbn-icon">' + i.svg + '</span>'
      + '<span class="cbn-label">' + i.label + '</span>'
      + '</a>';
  }).join('');

  document.body.appendChild(nav);

  // Estilos inline — autocontenido
  if (!document.getElementById('cardumenBottomNavStyle')) {
    const style = document.createElement('style');
    style.id = 'cardumenBottomNavStyle';
    style.textContent = `
      .cardumen-bottom-nav {
        display: none;
        position: fixed; bottom: 0; left: 0; right: 0;
        z-index: 150;
        background: rgba(14, 11, 8, 0.92);
        border-top: 1px solid rgba(250, 245, 233, 0.1);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        padding: 0.5rem 0 calc(0.5rem + env(safe-area-inset-bottom));
      }
      .cardumen-bottom-nav .cbn-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        padding: 0.4rem 0.2rem;
        color: rgba(250, 245, 233, 0.55);
        font-family: 'DM Sans', -apple-system, sans-serif;
        font-size: 0.65rem;
        font-weight: 500;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        text-decoration: none;
        transition: color 200ms cubic-bezier(0.16, 1, 0.3, 1);
      }
      .cardumen-bottom-nav .cbn-icon {
        width: 22px; height: 22px;
        display: flex; align-items: center; justify-content: center;
      }
      .cardumen-bottom-nav .cbn-icon svg { width: 100%; height: 100%; }
      .cardumen-bottom-nav .cbn-item.is-active {
        color: #D4A94A;
      }
      .cardumen-bottom-nav .cbn-item:active {
        transform: scale(0.95);
      }
      @media (max-width: 900px) {
        .cardumen-bottom-nav { display: flex; }
        body { padding-bottom: 4.5rem !important; }
      }
    `;
    document.head.appendChild(style);
  }
})();
