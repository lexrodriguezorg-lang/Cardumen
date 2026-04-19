# Cardumen — Pendientes ejecutables

> Cosas concretas para la próxima sesión de Code, ordenadas por prioridad. Cada punto es acción, no discusión.

## Alta prioridad

### 1. Migrar contenido del docx a los módulos restantes
Los módulos 3, 5, 6, 7 y Bonus tienen estructura editorial completa pero sus secciones específicas de anatomía/protocolos están marcadas con `<div class="placeholder-block">...</div>`. Esos bloques se identifican con un label dorado "📘 Contenido extendido" / "📘 Protocolos específicos" / etc.

El **módulo 2** ya fue completado con contenido real + 4 artefactos interactivos + quiz de 3 preguntas. Usarlo como referencia de profundidad editorial esperada para los demás.

Fuente: `Anatomia_Aplicada_a_la_Estetica.docx` (no está en el repo — lo tiene el fundador).

**Cómo hacerlo:** abrir cada `.placeholder-block`, reemplazar con párrafos + callouts del docx. Mantener los selectores `.callout`, `.callout-key`, `.callout-warning`, `.callout-tip`, `.data-table-wrap`, `.pullquote` ya estilizados. No crear nuevos componentes — usar los existentes.

**No inventar bibliografía** bajo ninguna circunstancia (regla del fundador).

### 1.b Artefactos interactivos pendientes (módulo 2)
El fundador mencionó 3 artefactos adicionales del módulo 2 para una próxima iteración (chat "Cardumen · Refuerzo 001 contenido"): los 4 músculos abdominales + glosario flotante + quiz gamificado. Esperan código desde esa conversación.

### 2. Afinar quizzes por módulo
Cada módulo tiene un quiz pedagógico conceptual que escribí yo (Claude). Probablemente el fundador quiera cambiarlos por preguntas específicas del docx. El formato del quiz:

```html
<div class="quiz">
  <div class="quiz-label">COMPRUEBA TU COMPRENSIÓN</div>
  <div class="quiz-question">...</div>
  <ul class="quiz-options">
    <li class="quiz-option" data-correct="true">...</li>
    <li class="quiz-option">...</li>
  </ul>
</div>
```

Solo una opción con `data-correct="true"`. El JS compartido (`js/module-page.js`) registra quizPassed solo cuando TODOS los quizzes del módulo están correctos.

### 3. Bibliografía verificada en bonus.html
La sección "Referencias y fuentes" de `bonus.html` tiene placeholder explícito. Pegar referencias reales del fundador con autor + edición + página. No inventar.

### 4. Rediseñar pide-refuerzo.html al dark editorial
`pide-refuerzo.html` sigue en v1 light con `css/cardumen.css`. Usar como guía:
- Layout: form centrado como `login.html`
- Colores: paleta dark (ink + cream + gold)
- Tipografía: Fraunces para título grande, DM Sans para campos
- Estructura: mantener los campos actuales (nombre de quien pide, email, WhatsApp, tema propuesto, por qué, urgencia) pero con estilo dark
- Crear `css/pide-refuerzo.css` nuevo similar a `css/login.css`

## Media prioridad

### 5. Métricas reales en dashboard
Hoy `mi-cardumen.html` muestra valores hardcoded:
- Ring de progreso: 44%
- "4 de 9 módulos"
- Racha: 5 días
- Tiempo total: 1h 12min
- Quizzes acertados: 87%
- Sparklines

Deberían leerse de `localStorage.cardumen_estetica-anatomia`. El progress.js ya expone el state. Solo falta:
- Calcular `pct = completed.length / 9`
- Calcular tiempo acumulado (requiere trackear inicio de sesión por módulo — nuevo)
- Racha: requiere registrar fechas de estudio — nuevo en progress.js
- Quizzes acertados: quizPassed / totalQuizzesIntentados — nuevo tracking

Puede hacerse incremental: primero el ring + "X de 9 módulos" (fácil, solo leer state). Racha y tiempo pueden quedar mockup.

### 6. Página /venta (landing long-form)
El fundador mencionó en su brief: "Landing de venta long-form (separada del home del curso)". Página para conversión tipo sales page: headline emocional, problema, solución, qué incluye, bibliografía de validadores, FAQ, botón de compra → WhatsApp/Nequi.

URL: `/venta` o `/venta-anatomia` (un slug por Refuerzo).

### 7. Flujo de compra visible
Actualmente no hay "Comprar por $49.000 Nequi". Para alguien que llega a landing sin código, no hay camino claro a adquirir. Idea:
- Card del Refuerzo en la biblioteca → botón "Comprar" → modal con instrucciones Nequi + link WhatsApp pre-rellenado
- O botón "Comprar" → página `/venta` → CTA a WhatsApp

Decisión del fundador.

### 8. perfil.html funcional
Hoy es stub. Agregar:
- Editar nombre + apellidos (guardar en session.name; no persiste en backend todavía)
- Editar avatar (subir imagen en localStorage o solo iniciales)
- Mostrar código usado para acceder
- Cambiar código (requiere backend, por ahora solo pedir otro por WhatsApp)
- Historial de Refuerzos comprados

### 9. referidos.html funcional
Hoy es stub. Requiere:
- Generar link único por usuario (hash del email o uid)
- Trackear quién llega por ese link (requiere backend)
- Mostrar saldo calculado (requiere backend)
- Historial de pagos (requiere backend)

Esto es más trabajo de Supabase que frontend. Dejar stub hasta tener backend.

## Baja prioridad / nice-to-have

### 10. TOC del módulo accesible en móvil
Trade-off hecho en T2: en móvil el hamburguesa que abría el TOC del curso se eliminó. Si el fundador quiere reactivarlo, remover `display: none !important` de `.menu-mobile-btn` en `css/module.css` y ajustar el z-index para que conviva con el bottom-nav.

### 11. Consolidar módulos con template
Los 8 módulos tienen ~150 líneas de boilerplate HTML idénticas (head, auth guard, top button, backdrop, TOC sidebar, context sidebar, scripts). Un build-time template engine eliminaría 1000+ líneas de duplicación. Opciones: Eleventy, Vite + Pug, script Node pre-commit. Solo tiene sentido si se van a crear muchos más Refuerzos.

### 12. Imágenes/diagramas Lovart
8 diagramas anatómicos pendientes del fundador:
1. 4 cuadrantes abdominales con órganos
2. Recorrido del colon con flechas horarias
3. Mapa ganglios linfáticos (vista anterior)
4. Direcciones drenaje facial
5. Capas de piel corte transversal
6. Músculos del glúteo con fibras
7. Músculos faciales con direcciones de lifting
8. Músculos abdominales con fibras

Cuando lleguen, integrar en los módulos correspondientes. Paleta: navy + dorado + crema sobre dark.

### 13. Migrar login a Supabase
Hoy los códigos viven en `data/access.json` (cliente-side, inseguro para escala). Para post-MVP:
- Tabla `codes` en Supabase con `code`, `redeemed_by`, `redeemed_at`, `refuerzo_id`
- Tabla `sessions` con tokens
- Edge function para redimir código
- El `login.html` hace fetch a la edge function en vez de al JSON

### 14. Dominio + Hostinger
- Comprar `cardumen.co` en Hostinger
- Apuntar DNS a Vercel (CNAME/A record)
- Configurar email `hola@cardumen.co`

### 15. Analytics
Sin tracking hoy. Plausible o Umami (ambos sin cookies) en `<head>` de landing + dashboard.

## Reglas del fundador que no se deben olvidar

- **Nunca inventar bibliografía** ni datos médicos que requieran validación.
- **Nunca aplicar filtros CSS al logo** que oculten el pez dorado líder.
- **Usar el logo correcto por fondo**: `cardumen-white.png` en dark, `cardumen-horizontal.png` en light.
- **Paleta dark permanente** — no reintroducir toggle de tema.
- **La portada del Refuerzo 001 tiene identidad coral + dorado** (no solo dorado como el resto). Cada Refuerzo futuro tendrá su paleta de acento sobre la base dark.
- **El pilot es Eli** (solo nombre, no apellidos hasta tener perfil funcional).
