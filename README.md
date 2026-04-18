# Cardumen — MVP v3

> Lo que faltó en clase, te lo construimos.

## Qué hay en este paquete

Sitio completo de Cardumen con identidad editorial premium, listo para subir a Hostinger.

### Páginas listas (nivel premium v3)
- **`index.html`** — Landing pública con hero editorial, mockup del dashboard, manifiesto, cómo funciona, preview "así se siente estudiar aquí", biblioteca curada con portadas diferenciadas, validación por profesionales, CTA final
- **`mi-cardumen.html`** — Dashboard de la clienta (Eli Ramírez) con saludo personalizado, hero del refuerzo activo con anillo de progreso, racha de estudio, 3 métricas con sparklines, bloque comunidad con link de referido, biblioteca personal
- **`refuerzos/estetica-anatomia/modulo-4.html`** — Vista del módulo con 3 columnas (TOC + lectura + contexto), drop cap, callouts con gradientes, pull quotes, tabla, quiz interactivo, notas personales persistentes

### Páginas pendientes de rediseño (quedaron en v1)
- `pide-refuerzo.html` — formulario brief
- `refuerzos/estetica-anatomia/index.html` — home del refuerzo

## Cómo subirlo a Hostinger

1. Entra al File Manager de Hostinger en tu dominio `cardumen.co`
2. Sube TODO el contenido de `cardumen/` a `public_html/` (los archivos sueltos, no la carpeta padre)
3. Mantén la estructura de subcarpetas (`css/`, `js/`, `assets/`, `refuerzos/`)
4. Abre `https://cardumen.co` en el navegador

### Alternativa por FTP
- Host: `ftp.cardumen.co`
- Usuario + contraseña: los que te dio Hostinger
- Destino: `/public_html/`

## Cómo probarlo localmente

**Más simple**: doble click en `index.html`. Se abre en tu navegador.

**Con servidor local** (recomendado para que los links funcionen perfecto):
```bash
cd cardumen
python3 -m http.server 8000
```
Luego abre `http://localhost:8000`

## Qué probar cuando esté vivo

- [ ] `index.html` se ve bien en desktop y móvil
- [ ] Click en "Explorar biblioteca" hace scroll suave a la sección
- [ ] Click en la card del Refuerzo 001 lleva al home del refuerzo
- [ ] Click en "Comenzar" del refuerzo lleva al módulo 4
- [ ] El módulo 4 se ve con sus 3 columnas, drop cap, callouts, quizzes
- [ ] Los quizzes marcan respuesta correcta (verde) o incorrecta (roja)
- [ ] El campo de notas del módulo guarda al escribir (recarga la página y sigue ahí)
- [ ] El link "Entrar" del nav lleva al dashboard de Eli
- [ ] El dashboard muestra "Buenas tardes, Eli" y todas las métricas
- [ ] El botón "Copiar" del link de referido funciona
- [ ] En móvil, el menú hamburguesa abre el sidebar

## Arquitectura

```
cardumen/
├── index.html                  # Landing pública v3
├── mi-cardumen.html            # Dashboard cliente v3
├── pide-refuerzo.html          # Formulario brief v1
├── favicon.ico
├── CARDUMEN_CONTEXT.md         # Briefing completo para Claude Code
├── README.md                   # Este archivo
├── css/
│   ├── landing.css             # Estilos de index.html
│   ├── dashboard.css           # Estilos de mi-cardumen.html
│   ├── module.css              # Estilos del módulo v3
│   └── cardumen.css            # Legacy (para páginas v1)
├── js/
│   └── cardumen.js             # Lógica original (progreso, tema, quizzes)
├── assets/
│   └── logo/                   # Logos Cardumen + favicons
├── data/                       # Reservado para JSON futuro
└── refuerzos/
    └── estetica-anatomia/
        ├── index.html          # Home del refuerzo (v1)
        └── modulo-4.html       # Módulo linfático (v3)
```

## Siguiente paso

Abre Claude Code en esta carpeta. El archivo `CARDUMEN_CONTEXT.md` tiene todo el briefing del proyecto. Las tareas pendientes están listadas ahí.
