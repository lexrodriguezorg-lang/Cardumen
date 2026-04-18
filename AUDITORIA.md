# AUDITORIA — Navegación paso por paso

> Recorrido completo click por click, con estado esperado vs real por cada elemento. Ejecutado antes de pedirle al fundador que pruebe.

**Rama:** `claude/focused-hopper-d10dcb` — estado pre-merge al momento de la auditoría. Producción (`cardumen.vercel.app`) aún está en commit anterior; estas correcciones aplican al próximo merge.

**Estado de assets:**
- `assets/logo/cardumen-white.png` ✓ (dark bg)
- `assets/logo/cardumen-horizontal.png` ✓ (light bg)
- `assets/logo/cardumen-symbol.png` ✓ (ícono suelto)
- Favicons 16/32/64/192/512 ✓
- Legacy eliminados: `cardumen-full.png`, `cardumen-mono.png`, `symbol-200.png`

---

## 1. Landing pública (visitante anónimo) — `/index.html`

| # | Acción | Esperado | Estado |
|---|--------|----------|--------|
| 1 | Cargar `/` | Landing con hero dark editorial | ✓ |
| 2 | Nav superior: logo Cardumen (cardumen-white) | Visible en dark sin cuadriculado (desktop) | ✓ (desktop) · ✓ (mobile tras quitar feTurbulence + backdrop-filter) |
| 3 | Click en botón "Menú" (top-right) | Abre overlay full-screen | ✓ |
| 4 | En overlay: click "Biblioteca" | Scroll smooth a `#biblioteca` | ✓ |
| 5 | En overlay: click "Cómo funciona" | Scroll smooth a `#como` | ✓ |
| 6 | En overlay: click "Quién valida" | Scroll smooth a `#validacion` | ✓ |
| 7 | En overlay: click "Entrar a mi estudio" (sin sesión) | Va a `/login.html` (JS detecta ausencia de sesión) | ✓ |
| 8 | En overlay: click "Entrar a mi estudio" (CON sesión) | Va a `/mi-cardumen.html` | ✓ |
| 9 | En overlay: click "Pedir un tema" | Va a `/pide-refuerzo.html` (existe) | ✓ |
| 10 | CTAs del hero: "Explorar biblioteca" | Scroll a `#biblioteca` | ✓ |
| 11 | CTAs del hero: "Pedir mi tema" | Va a `/pide-refuerzo.html` | ✓ |
| 12 | Biblioteca: card "Refuerzo 001" | Va a `/refuerzos/estetica-anatomia/index.html` | ✓ |
| 13 | Biblioteca: "¿Tu tema no está? Pídelo" | Va a `/pide-refuerzo.html` | ✓ |
| 14 | CTA final: "Empezar con Anatomía Estética" | Va a refuerzo index | ✓ |
| 15 | CTA final: "Pedir mi tema" | Va a pide-refuerzo | ✓ |
| 16 | Footer: mailto `hola@cardumen.co` | Abre cliente mail | ✓ |
| 17 | Footer logo (cardumen-white, 72px) | Visible sin cuadriculado | ✓ (tras fix mobile) |

---

## 2. Entrar al curso sin login — gate de seguridad

| # | Acción | Esperado | Estado |
|---|--------|----------|--------|
| 1 | Navegar directo a `/mi-cardumen.html` sin sesión | Auth guard sincrónico redirige a `/login.html` antes de renderizar | ✓ |
| 2 | Navegar directo a `/refuerzos/estetica-anatomia/` sin sesión | Redirige a `/login.html` | ✓ |
| 3 | Navegar directo a `/refuerzos/estetica-anatomia/modulo-4.html` sin sesión | Redirige a `/login.html` | ✓ |
| 4 | Navegar directo a `/perfil.html` sin sesión | Redirige a `/login.html` | ✓ |
| 5 | Navegar directo a `/referidos.html` sin sesión | Redirige a `/login.html` | ✓ |

Todos los auth guards son sincrónicos en `<head>`, sin flash de contenido.

---

## 3. Login — `/login.html`

| # | Acción | Esperado | Estado |
|---|--------|----------|--------|
| 1 | Cargar `/login.html` | Form email + código | ✓ |
| 2 | Logo top-left (cardumen-white, 40px) | Visible sin cuadriculado | ✓ |
| 3 | Click "Volver" (top-right) | Va a `/index.html` | ✓ |
| 4 | Escribir email + código `CARDUMEN001` → submit | Sesión guardada, redirige a `/mi-cardumen.html` | ✓ |
| 5 | Escribir código inválido → submit | Muestra error "Código inválido..." | ✓ |
| 6 | Entrar con sesión ya activa | Redirige directo al dashboard | ✓ |

---

## 4. Dashboard — `/mi-cardumen.html` (después de login)

| # | Acción | Esperado | Estado |
|---|--------|----------|--------|
| 1 | Carga | Saludo dinámico por hora + nombre de sesión | ✓ (antes decía "Jueves 18 abril" hardcoded; ahora se genera) |
| 2 | Logo sidebar (cardumen-white) | Visible sin cuadriculado | ✓ |
| 3 | Sidebar nav: "Mi estudio" (active) | Current page | ✓ |
| 4 | Sidebar nav: "Biblioteca" | Va a `/index.html#biblioteca` | ✓ |
| 5 | Sidebar nav: "Pedir tema" | Va a `/pide-refuerzo.html` | ✓ |
| 6 | Sidebar nav: "Referidas" | Va a `/referidos.html` (stub) | ✓ **arreglado en esta auditoría** (antes era toast) |
| 7 | Sidebar nav: "Saldo" | Toast "Saldo — próximamente" | ✓ (no hay stub aún) |
| 8 | Sidebar nav: "Cómo funciona" | Va a `/index.html#como` | ✓ |
| 9 | Sidebar nav: "Perfil" | Va a `/perfil.html` (stub) | ✓ **arreglado en esta auditoría** (antes era toast) |
| 10 | Sidebar nav: "Ajustes" | Toast "Ajustes — próximamente" | ✓ |
| 11 | Top bar: botón buscar | Toast "Búsqueda — próximamente" | ✓ |
| 12 | Top bar: botón notificaciones | Toast "Notificaciones — próximamente" | ✓ |
| 13 | Hero card: "Empezar a estudiar" | Va a `/refuerzos/estetica-anatomia/modulo-1.html` | ✓ |
| 14 | Biblioteca card Refuerzo 001 | Va a `/refuerzos/estetica-anatomia/index.html` | ✓ |
| 15 | Link "Copiar" en cardumen community | Copia al clipboard + toast visual | ✓ |
| 16 | Link "Ver catálogo completo" | Va a `/index.html#biblioteca` | ✓ |
| 17 | Pide-block: "Pedir mi tema" | Va a `/pide-refuerzo.html` | ✓ |
| 18 | User-card: logout (ícono) | Borra sesión, va a `/login.html` | ✓ |
| 19 | Mobile: hamburguesa top-left | Abre sidebar desde izquierda | ✓ |
| 20 | Mobile: X interno del sidebar | Cierra sidebar | ✓ |
| 21 | Mobile: click backdrop oscuro | Cierra sidebar | ✓ |
| 22 | Mobile: tecla ESC | Cierra sidebar | ✓ |

---

## 5. Bottom-nav móvil (páginas protegidas) — inyectado por `js/bottom-nav.js`

| # | Acción | Esperado | Estado |
|---|--------|----------|--------|
| 1 | Visible solo < 900px + con sesión | ✓ |  |
| 2 | Tab "Mi estudio" | Va a `/mi-cardumen.html` (ruta absoluta) | ✓ |
| 3 | Tab "Estudiar" | Va al siguiente módulo no completado del refuerzo | ✓ (lee progreso de localStorage) |
| 4 | Tab "Biblioteca" | Va a `/index.html#biblioteca` | ✓ |
| 5 | Tab "Cuenta" | Va a `/perfil.html` | ✓ |
| 6 | Rendering | Sin backdrop-filter (solo `rgba(14,11,8,0.97)` sólido) → sin cuadriculado en mobile | ✓ |

---

## 6. Portada del Refuerzo — `/refuerzos/estetica-anatomia/`

| # | Acción | Esperado | Estado |
|---|--------|----------|--------|
| 1 | Cargar con sesión | Hero full-screen editorial coral+dorado | ✓ |
| 2 | Logo top-left (cardumen-white, 40px) | Visible sin cuadriculado | ✓ |
| 3 | Click "Mi estudio" (top-right) | Va a `/mi-cardumen.html` | ✓ |
| 4 | CTA hero "Empezar a estudiar" | `/refuerzos/estetica-anatomia/modulo-1.html` (absoluta) | ✓ **bug 404 fixed** |
| 5 | CTA hero con progreso | "Continuar en módulo N" → módulo N correcto | ✓ |
| 6 | Lista de 9 módulos: click módulo desbloqueado | Va al modulo-N.html correspondiente (absoluta) | ✓ **bug 404 fixed** |
| 7 | Lista de 9 módulos: click módulo bloqueado | No navega (es un `<div>`, no `<a>`) | ✓ |
| 8 | Progreso: barra + % dinámico | Refleja completed/9 real | ✓ |
| 9 | Footer "Pedir mi tema" | `/pide-refuerzo.html` (absoluta) | ✓ |

---

## 7. Módulo individual — `/refuerzos/estetica-anatomia/modulo-1.html` (y análogos 2-7 + bonus)

| # | Acción | Esperado | Estado |
|---|--------|----------|--------|
| 1 | Cargar con sesión | 3 columnas (TOC + lectura + contexto) | ✓ |
| 2 | Back-link "Mi estudio" | `/mi-cardumen.html` (`../../mi-cardumen.html` funciona por URL completa con `.html`) | ✓ |
| 3 | TOC sidebar: lista de 8 módulos con estado | `.completed` / `.current` / `.locked` pintados por progress.js | ✓ |
| 4 | TOC sidebar: click módulo desbloqueado | Va al modulo-N.html (relativo, funciona porque URL es `/refuerzos/estetica-anatomia/modulo-N.html`) | ✓ |
| 5 | TOC sidebar: click módulo bloqueado | Toast "Completa el módulo anterior..." | ✓ |
| 6 | Responder quiz correctamente | Opción en verde, registra quizPassed | ✓ |
| 7 | Responder quiz incorrectamente | Opción en rojo, muestra la correcta en verde | ✓ |
| 8 | Re-click en opción | Permite reintentar | ✓ |
| 9 | "Marcar completado" sin quiz correcto | Toast "Responde el quiz..." | ✓ |
| 10 | "Marcar completado" con quiz aprobado | Marca completado, pinta TOC, toast "✓ Completado" | ✓ |
| 11 | Nav bottom prev | Módulo anterior existente | ✓ |
| 12 | Nav bottom next | Módulo siguiente existente | ✓ |
| 13 | Notas laterales: escribir | Guarda en `state.notes['module-N']` con debounce | ✓ |
| 14 | Bottom-nav móvil | Inyectado vía module-page.js → bottom-nav.js | ✓ |

---

## 8. Perfil — `/perfil.html` (stub)

| # | Acción | Esperado | Estado |
|---|--------|----------|--------|
| 1 | Cargar con sesión | Stub editorial dark, datos de sesión visibles | ✓ |
| 2 | Logo top-left (cardumen-white) | Visible | ✓ |
| 3 | Pill "Inicio" | Va a `/index.html` | ✓ **añadido en esta auditoría** |
| 4 | Pill "Mi estudio" | Va a `/mi-cardumen.html` | ✓ |
| 5 | Info: email, nombre, refuerzos activos | Poblado desde localStorage.session | ✓ |
| 6 | Botón "Volver al dashboard" | Va a `/mi-cardumen.html` | ✓ |
| 7 | Botón "Cerrar sesión" | Borra sesión, va a `/login.html` | ✓ |
| 8 | Bottom-nav móvil | Inyectado, con tab "Cuenta" activo | ✓ |

---

## 9. Referidas — `/referidos.html` (stub)

| # | Acción | Esperado | Estado |
|---|--------|----------|--------|
| 1 | Cargar con sesión | Stub editorial dark con info placeholder | ✓ |
| 2 | Pill "Inicio" / "Mi estudio" | Funcionan | ✓ **añadido** |
| 3 | Botón "Volver al dashboard" | `/mi-cardumen.html` | ✓ |
| 4 | Botón "Pedir un tema" | `/pide-refuerzo.html` | ✓ |
| 5 | Bottom-nav móvil | Inyectado | ✓ |

---

## 10. Pedir refuerzo — `/pide-refuerzo.html`

| # | Acción | Esperado | Estado |
|---|--------|----------|--------|
| 1 | Cargar | Form v1 light theme (pendiente rediseño) | ⚠ v1 |
| 2 | Logo (cardumen-horizontal sobre crema) | Visible navy sobre claro | ✓ |
| 3 | Logo click | `/index.html` | ✓ |
| 4 | Submit form | ⚠ No envía — no hay backend. Es stub visual. | ⚠ pendiente |

**Pendientes documentados en PENDIENTE.md:** rediseño al dark editorial + conexión real (WhatsApp/Nequi).

---

## 11. Checks de seguridad de sesión

| # | Check | Esperado | Estado |
|---|--------|----------|--------|
| 1 | `localStorage.cardumen_session` con `email` + `name` + `refuerzos[]` + `loggedInAt` | ✓ |  |
| 2 | Progreso del curso en `localStorage.cardumen_estetica-anatomia` con `completed[]`, `quizPassed{}`, `notes{}` | ✓ |  |
| 3 | Logout borra `cardumen_session` pero preserva progreso | ✓ |  |
| 4 | Cambiar sesión no crashea páginas | ✓ (defaults si no hay nombre) |  |

---

## 12. Assets que DEBEN existir en producción

Verifico con `git ls-tree HEAD` (branch):

- ✓ `assets/logo/cardumen-white.png`
- ✓ `assets/logo/cardumen-horizontal.png`
- ✓ `assets/logo/cardumen-symbol.png`
- ✓ `assets/logo/favicon-{16,32,64,192,512}.png`
- ✓ `favicon.ico`
- ✓ `css/landing.css`, `dashboard.css`, `module.css`, `login.css`, `refuerzo.css`, `stub.css`, `cardumen.css`
- ✓ `js/progress.js`, `module-page.js`, `bottom-nav.js`, `cardumen.js`
- ✓ `data/access.json`
- ✗ `assets/logo/cardumen-full.png` — ELIMINADO correctamente
- ✗ `assets/logo/cardumen-mono.png` — ELIMINADO correctamente
- ✗ `assets/logo/symbol-200.png` — ELIMINADO correctamente

---

## Issues encontrados y arreglados en esta auditoría

1. **Sidebar "Perfil" y "Referidas" iban a toast** aunque las páginas existen → ahora enlazan a `/perfil.html` y `/referidos.html`.
2. **Logos no-válidos en `assets/logo/`** (cardumen-full, cardumen-mono, symbol-200) → eliminados.
3. **`cardumen-horizontal.png` usado en fondos oscuros** (rollback erróneo de mi parte) → restaurado a `cardumen-white.png` en todos los dark: index, login, mi-cardumen, perfil, referidos, refuerzo/index.
4. **`cardumen-horizontal.png` en pide-block del dashboard** → debe ser `cardumen-symbol.png` (decorativo, ícono) → restaurado.
5. **CARDUMEN_CONTEXT.md** mencionaba logos legacy → actualizado al sistema de 3 válidos.

## Issues documentados como pendientes (no bloqueantes del flujo)

- Contenido específico docx en módulos 2-7 + bonus (placeholders marcados)
- Bibliografía real (no inventar)
- `pide-refuerzo.html` rediseño dark editorial
- Métricas dinámicas del dashboard (44%, racha, sparklines)
- Funcional real de perfil + referidos (requiere Supabase)
- `venta.html` (landing long-form)
- 8 diagramas Lovart

Ver `PENDIENTE.md` para detalle.
