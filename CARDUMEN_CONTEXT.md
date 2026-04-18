# CARDUMEN — Contexto del proyecto (v3)

> Este documento le da a cualquier instancia de Claude (Code, nueva sesión web) todo el contexto para continuar trabajando en Cardumen sin re-explicar nada.

## 1. QUÉ ES CARDUMEN

**Cardumen no es una tienda de ebooks. Es una red viva de refuerzo educativo bajo demanda.**

Promesa: "Lo que faltó en clase, te lo construimos." Los usuarios son profesionales (estudiantes de carreras técnicas, universitarias, SENA) que necesitan llenar vacíos formativos. Si el tema no está en el catálogo, lo piden y se construye en 3 días.

**Modelo circular:**
1. Usuario compra o pide un Refuerzo.
2. Cada Refuerzo termina con "Pide tu próximo tema" y un link de referidos único.
3. Cuando una compañera compra con ese link, el referente gana saldo.
4. La comunidad autofinancia su propio aprendizaje.

**Tagline:** *Estudiamos juntos, llegamos lejos.*

**Persona piloto:** Eli Ramírez, esteticista en Cali (pareja del fundador). Primera validadora del Refuerzo 001.

## 2. ESTADO ACTUAL (v3 — 18 abril 2026)

### Completado con nivel editorial premium
- ✅ Logo Cardumen con 5 variantes (full, horizontal, símbolo, mono, blanco) limpias, transparentes reales
- ✅ Paleta editorial cálida (ink + paper + navy + gold + coral, con moss y rust como estados)
- ✅ Tipografía distintiva: Fraunces + DM Sans + JetBrains Mono
- ✅ Landing pública `index.html` con hero+mockup, manifiesto, cómo funciona, preview "así se siente estudiar", biblioteca curada, validación, CTA final
- ✅ Dashboard del cliente `mi-cardumen.html` para Eli Ramírez
- ✅ Vista del módulo `refuerzos/estetica-anatomia/modulo-4.html` editorial (3 columnas, drop cap, callouts, quiz, notas persistentes)
- ✅ Favicons completos
- ✅ Responsive

### Pendiente
- ⏳ Migrar módulos 1, 2, 3, 5, 6, 7 y Bonus al formato `modulo-4.html` (tarea para Code)
- ⏳ 2 Refuerzos nuevos: Postoperatorio + Aparatología Invima, y Drenaje Oncoestético
- ⏳ `pide-refuerzo.html` sigue con estética v1, requiere rediseño
- ⏳ `refuerzos/estetica-anatomia/index.html` (home del refuerzo) sigue con estética v1, requiere rediseño
- ⏳ Páginas faltantes: referidos, perfil, cómo funciona, acceso/login
- ⏳ Sistema de login simple (email + código 6 dígitos post-pago Nequi)
- ⏳ Validación manual Nequi + WhatsApp Business
- ⏳ 8 diagramas anatómicos de Lovart
- ⏳ Bibliografía verificada real
- ⏳ Compra dominio cardumen.co en Hostinger
- ⏳ Deploy a Hostinger vía FTP

## 3. IDENTIDAD VISUAL

### Paleta v3 (editorial cálida)

```css
--ink: #1A1814;
--ink-soft: #4A4438;
--ink-mute: #8B8577;
--paper: #F4EFE6;
--paper-warm: #EDE5D5;
--cream: #FDF9F0;
--navy: #1C3B5E;
--navy-deep: #0F2339;
--gold: #C89B3F;
--gold-deep: #A17E2A;
--gold-soft: #E8D19C;
--gold-mist: #F3E8C9;
--coral: #D16E4E;
--moss: #5C7A4F;
--rust: #B04A3B;
```

### Tipografía
- Display: Fraunces (variable serif, 300-700, con itálica)
- Body: DM Sans (variable sans, 400-700)
- Mono: JetBrains Mono

### Principios
1. Texturas sutiles: grano SVG + radiales de luz en fondo
2. Sombras cálidas (rgba marrones), no grises
3. Itálicas con propósito (énfasis emocional, keywords)
4. Drop caps en primer párrafo de cada módulo
5. Highlights con gold-mist en strong
6. Bordes hairline `rgba(26,24,20,0.08)`

### Logos en `/assets/logo/`
- cardumen-full.png (con tagline)
- cardumen-horizontal.png (sin tagline)
- cardumen-symbol.png (solo cardumen)
- cardumen-mono.png (navy monocromo)
- cardumen-white.png (blanco)
- favicon-*.png (16/32/64/192/512)

**Metáfora del logo**: pez líder dorado + 6-8 peces navy detrás = usuaria líder + comunidad siguiendo = referido.

**Sub-marcas futuras**: el pez líder cambia color por vertical. Estética=dorado. Mecánica=naranja. Cocina=verde.

## 4. ARQUITECTURA TÉCNICA

### Stack MVP
- HTML/CSS/JS puro, sin frameworks
- Hostinger (el usuario tiene 50 sitios)
- Google Fonts
- LocalStorage para estado
- Sin backend — compras manuales Nequi + WhatsApp

### Estructura
```
cardumen/
├── index.html                          # Landing editorial v3
├── mi-cardumen.html                    # Dashboard Eli v3
├── pide-refuerzo.html                  # v1, pendiente rediseño
├── favicon.ico
├── CARDUMEN_CONTEXT.md                 # Este archivo
├── README.md
├── css/
│   ├── landing.css                     # v3 premium
│   ├── dashboard.css                   # v3 premium
│   ├── module.css                      # v3 premium
│   └── cardumen.css                    # v1 legacy (pide-refuerzo, refuerzo/index)
├── js/cardumen.js                      # Progreso, tema, quizzes
├── assets/logo/                        # Logos + favicons
├── data/
└── refuerzos/estetica-anatomia/
    ├── index.html                      # v1, pendiente rediseño
    └── modulo-4.html                   # v3 premium
```

### Convenciones
- CSS con variables para todo
- Una hoja CSS por "vista grande"
- LocalStorage keys: `cardumen_${refuerzoId}`, `cardumen_notes_${moduleId}`

### Contenido del Refuerzo 001
Escrito completo en `Anatomia_Aplicada_a_la_Estetica.docx`:
1. Por qué una esteticista necesita anatomía
2. Anatomía abdominal
3. Sistema muscular
4. **Sistema linfático ← YA MIGRADO v3**
5. Anatomía facial
6. La piel (capas, profundidad de técnicas)
7. Integración y protocolos
8. Bonus (referencias, contraindicaciones, glosario)

## 5. DIAGRAMAS PENDIENTES PARA LOVART

Paleta: navy + dorado + crema. Estilo infográfico editorial.

1. 4 cuadrantes abdominales con órganos
2. Recorrido del colon con flechas horarias
3. Mapa completo de ganglios linfáticos (vista anterior)
4. Direcciones de drenaje facial (vista frontal)
5. Capas de la piel en corte transversal
6. Músculos del glúteo con fibras
7. Músculos faciales con direcciones de lifting
8. Músculos abdominales con fibras

## 6. VERTICALES FUTUROS

- Cardumen Estética (actual, dorado/borgoña)
- Cardumen Mecánica (naranja)
- Cardumen Cocina (verde)
- Cardumen Derecho (morado)
- Cardumen Programación (cyan)
- Cardumen Contaduría

## 7. ESTRATEGIA DE LANZAMIENTO

**Fase 1 — Esta semana:**
1. Comprar cardumen.co
2. Subir ZIP a public_html/
3. Configurar hola@cardumen.co
4. Generar diagramas Lovart
5. Migrar módulos restantes
6. Validación profesional por esteticista
7. Rediseñar pide-refuerzo.html

**Fase 2 — 2 semanas:**
1. Wompi o Nequi manual + WhatsApp
2. Sistema login (email + código)
3. Meta Ads 20-30K/día x 2 semanas
4. Registro marca SIC clase 41, 16

**Fase 3 — Mes 2-3:**
1. Producción semi-automatizada
2. Bot validación Nequi
3. Dashboard afiliadas
4. Segundo vertical

## 8. PRECIOS

- Mini (~30 págs): $29.000 COP
- Completo (~60 págs): $49.000 COP ← default
- Pro (100+ págs): $89.000 COP
- Saldo referido: 10-20% del valor

Break-even: 13-19 ventas/mes.

## 9. DECISIONES YA TOMADAS (NO RE-DEBATIR)

- Nombre: **Cardumen**
- Modelo: ebook-web (PDF solo respaldo)
- Pago inicial: Nequi manual
- Hosting: Hostinger
- Tienda propia desde día 1 (no Hotmart principal)
- Validación profesional indispensable
- Primeros 30-50 pagos validados a mano
- Diagramas Lovart para MVP
- Paleta v3 cálida editorial definitiva (v1 fría rechazada)
- Tipografía Fraunces + DM Sans definitiva
- Eli Ramírez = usuaria piloto

## 10. TONO DEL FUNDADOR

- Trabaja 18h/día con proyectos simultáneos
- Honestidad brutal sobre palmaditas
- Odia ser tratado como principiante
- Odia mensajes largos — ir al grano
- Opinión con criterio, no neutralidad
- Valora advertencias de Claude sobre no-hacer
- "Confío en ti" = permiso para decidir

## 11. PRÓXIMAS TAREAS PARA CLAUDE CODE

1. **Migrar módulos 1, 2, 3, 5, 6, 7, Bonus** al formato `modulo-4.html` con `css/module.css`. Fuente: `Anatomia_Aplicada_a_la_Estetica.docx`.

2. **Rediseñar `pide-refuerzo.html`** al nivel editorial, usando patrones de `css/landing.css`.

3. **Rediseñar `refuerzos/estetica-anatomia/index.html`** (home del refuerzo) coherente con dashboard v3.

4. **Construir `acceso.html`**: login email + código 6 dígitos, sesión en localStorage.

5. **Página de referidos**: link único, referidas traídas, saldo acumulado, historial.

6. **Integrar diagramas Lovart** cuando estén listos.

7. **Actualizar este CONTEXT** al final de cada sesión grande.

## 12. ARCHIVOS DE REFERENCIA

- `Anatomia_Aplicada_a_la_Estetica.docx` — contenido fuente
- `/home/claude/cardumen/` o `./cardumen/` — proyecto
- Screenshots de referencia visual en `/tmp/shots-v3/` (solo en sesión web)

## 13. CHECKLIST PRE-LANZAMIENTO

- [ ] 9 módulos migrados al formato editorial
- [ ] Validación técnica por esteticista profesional
- [ ] 8 diagramas integrados
- [ ] Bibliografía verificada real (NO inventada)
- [ ] `pide-refuerzo.html` rediseñado v3
- [ ] Home del refuerzo rediseñado v3
- [ ] Sistema de acceso funcional
- [ ] Dominio cardumen.co activo
- [ ] Email hola@cardumen.co configurado
- [ ] Landing de venta long-form (separada del home del curso)
- [ ] Primera prueba compra end-to-end con Nequi
- [ ] Plan de pauta Meta listo
- [ ] Registro SIC iniciado
