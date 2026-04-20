# TAREA NOCTURNA — Cardumen · Refuerzo 001

> Fuente de verdad para la sesión actual de Code. Si el fundador la edita, Code ejecuta la versión actualizada.
> **Versión:** 1.0 · Fecha: abril 2026

---

## 🎯 ENFOQUE TÉCNICO ACTUALIZADO (LEER PRIMERO)

**El sistema visual actual está siendo reemplazado por Claude Design.**

- NO respetar el sistema visual actual como objetivo editorial.
- NO extender `css/landing.css`, `css/module.css`, `css/refuerzo.css`, `css/modulo2.css`, `css/pitch.css`, `css/login.css`, `css/stub.css`, `css/dashboard.css`, `css/cardumen.css`.
- Mantener el CSS existente **aislado** (no se modifica, no se construye encima).
- Foco exclusivo en:
  1. **HTML semántico y funcional** — estructura clara, clases genéricas, IDs para hooks.
  2. **JavaScript** — progreso del módulo (`progress.js`), quizzes, mark-complete, navegación, session guards, bottom-nav.
  3. **Links y rutas** — que toda la navegación interna funcione sin 404.
- Estilos solo inline mínimos cuando sean funcionales (ej: `display: none` para toggles). Sin invertir en estética.
- Classes genéricas reutilizables (`.module-intro`, `.module-section`, `.artefacto`, `.quiz`, etc.) para que Claude Design pueda restyle sin refactor de HTML.

---

## BLOQUE 1 — MÓDULO 1 DEL REFUERZO 001

El Módulo 1 del Refuerzo 001 (Anatomía Aplicada a la Estética) debe quedar estructurado a nivel premium funcional, con la misma arquitectura del Módulo 2.

### 1.1 Revisión previa
Revisar cómo quedó `modulo-1.html` actual. Identificar qué tiene y qué le falta.

### 1.2 Estructura pedagógica
- **Título:** "Por qué necesitas anatomía"
- **Kicker:** "MÓDULO 01 · INTRODUCCIÓN"
- **Lede itálica:** "Antes de tocar un cuerpo, tienes que saber qué hay dentro."
- Drop cap en primer párrafo (placeholder de clase, sin implementar el efecto visual)
- Navegación lateral con progreso del módulo (mismo TOC que M2)
- Sidebar derecho con tiempo estimado (15 min), TOC del módulo, notas personales
- Quiz final de 3 preguntas
- Navegación inferior: anterior (Portada) / siguiente (Módulo 2)

### 1.3 Estructura de contenido
Usar placeholders editoriales bien redactados (no lorem ipsum):

- **Sección:** "La esteticista que adivina vs la esteticista que sabe"  
  Texto editorial corto sobre por qué entender anatomía eleva el oficio.
- **Callout tipo dato clave:** "La diferencia entre profesional y amateur es el conocimiento del terreno"
- **Sección:** "Qué vas a aprender en este Refuerzo"  
  Resumen de los 9 módulos.
- **Pullquote editorial**
- **Sección:** "Cómo estudiar este Refuerzo"  
  Metodología: artefactos, quizzes, tutor IA.
- **Callout tip de aplicación**

### 1.4 Artefactos interactivos placeholder
Marcados con comentarios HTML indicando que el fundador los diseñará:

- Placeholder para artefacto **"Línea del tiempo de la esteticista"** (evolución del conocimiento anatómico del profesional)
- Placeholder para artefacto **"Mapa de los 9 módulos del Refuerzo"** (visión general clickeable)

### 1.5 Quiz
3 preguntas sobre introducción y metodología.

### 1.6 Desbloqueo progresivo
Asegurar que el desbloqueo M1→M2 funciona correctamente con la misma lógica que M2→M3.

### Commit
`feat: modulo 1 estructura editorial completa con placeholders`

---

## BLOQUE 2 — PORTADA DEL REFUERZO 001

La portada del Refuerzo debe verse como portada de disco editorial, no como tarjeta de curso.

### 2.1 Archivo
`refuerzos/estetica-anatomia/index.html`

### 2.2 Estructura del hero
- Hero grande con identidad visual del curso (coral + dorado sobre dark)
- Número editorial **R001** en tipografía grande
- **Título:** "Anatomía Aplicada a la Estética"
- **Subtítulo:** "El cuerpo que trabajas todos los días, por dentro"
- **Metadata:**
  - Experto curador (placeholder: "Por definir")
  - Duración total
  - Cantidad de módulos
  - Fecha de publicación
- **Ilustración SVG única del tema** (esquemática, estilo Monocle: silueta de cuerpo humano con líneas anatómicas sutiles)
- **Botón principal:** "Empezar" o "Continuar" según estado

### 2.3 Sección "Tabla de módulos"
- Lista de los 9 módulos con número, título, duración, estado (bloqueado / disponible / completado)
- Cada módulo con micro-preview (1 línea editorial)
- Visual tipo índice de libro editorial

### 2.4 Sección "Qué vas a resolver"
- 3 a 5 micro-previews de artefactos interactivos del curso
- Visual tipo galería

### 2.5 Sección "Cómo funciona este Refuerzo"
- Acceso vitalicio
- Tutor IA integrado
- Certificación al completar con quizzes aprobados
- Actualizaciones vivas
- Formato visual editorial, no bullet points corporativos

### 2.6 Footer
Footer del Refuerzo con navegación de regreso a biblioteca.

### Commit
`feat: portada R001 con identidad editorial completa`

---

## BLOQUE 3 — BIBLIOTECA DE REFUERZOS

### 3.1 Archivo
`refuerzos/index.html` (crear si no existe)

### 3.2 Propósito
Vista pública de la biblioteca de Refuerzos disponibles.

### 3.3 Estructura
- Hero editorial con kicker "BIBLIOTECA · CARDUMEN"
- **Título:** "Refuerzos disponibles"
- **Subtítulo editorial:** "Cada uno es un libro-web construido con cuidado"
- Grid de portadas de Refuerzos (por ahora solo R001, pero preparado para múltiples)
- Cada card con: número editorial, título, autor curador, duración, precio, acento de color propio
- **Al hover:** scale 1.02, borde dorado, revelación de micro-info
- **Sección "Próximamente"** con Refuerzos en producción:
  - R002 Aparatología
  - R003 Drenaje Oncoestético
  - R004 Postoperatorio
- **Sección CTA** "No encuentras lo que buscas" con link a `pedir-refuerzo.html`

### 3.4 Página `pedir-refuerzo.html` (crear)
- Formulario conversacional paso a paso
- **Campos:**
  - Tema
  - Nivel (básico / medio / especializado)
  - Audiencia (yo / clase / equipo / audiencia)
  - Recursos deseados (multi-select: videos, artefactos, tutor IA, certificación, ejercicios)
  - Cantidad estimada de estudiantes
- **Al final:** cotización estimada + botón enviar por WhatsApp/email
- Tono editorial, no burocrático

### Commit
`feat: biblioteca y pedir-refuerzo con flujo completo`

---

## BLOQUE 4 — AUDITORÍA Y PREPARACIÓN

### 4.1 Auditoría completa del sitio
- Navegar TODAS las páginas en mobile (375px) y desktop (1440px)
- Click en TODOS los links, verificar que ninguno lleva a 404
- Revisar que todos los logos usan la regla correcta (white en dark, horizontal en light, sin filtros CSS)
- Verificar que la navegación inferior móvil aparece en páginas protegidas
- Verificar que la nav desktop funciona consistente
- Revisar tipografía, jerarquías, espaciados, consistencia entre páginas
- Revisar performance: imágenes optimizadas, CSS no duplicado

### 4.2 AUDITORIA.md
Crear o actualizar con:
- Lista de bugs encontrados (críticos, medios, cosméticos)
- Inconsistencias visuales entre páginas
- Sugerencias de mejora
- Screenshots de problemas si es posible (referenciar con links)

### 4.3 Preparar arquitectura para handoff de Claude Design
- Crear carpeta `/design-v2/` en el repo (vacía, lista para recibir export)
- Crear `DESIGN_HANDOFF.md` con instrucciones de cómo integrar cuando llegue el export de Design
- No borrar nada del CSS actual todavía, solo dejar preparado

### 4.4 Actualizar `PENDIENTE.md`
- Qué quedó hecho esta sesión
- Qué sigue pendiente
- Qué está esperando contenido del fundador
- Qué está esperando Claude Design

### Commit
`chore: auditoria + arquitectura lista para design handoff`

---

## INSTRUCCIONES GENERALES

- Hacer commits separados por bloque, mensajes claros.
- Si atasco en algo, **no detenerse** — seguir con el siguiente bloque y anotar el problema en `PENDIENTE.md`.
- **No inventar** contenido médico/anatómico. Usar placeholders editoriales bien redactados cuando haga falta (ej: "Lorem editorial de anatomía por validar con experto curador").
- **No invertir** en CSS — el sistema visual va a ser reemplazado. Solo HTML semántico + JS funcional + clases genéricas.
- El CSS actual queda aislado (no se modifica, no se extiende).
- Al terminar todos los bloques, push a la rama, abrir PR, dejar mensaje final con resumen de commits.

**Estimado total:** 3-5 horas de trabajo continuo.
