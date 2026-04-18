# CARDUMEN — Documento Maestro
Versión: 1.0 · Fecha: 18 abril 2026

---

## 1. QUÉ ES CARDUMEN

Cardumen es una plataforma educativa que produce libros-web interactivos 
(Refuerzos) bajo demanda, co-autorados con quien los pide, mantenidos 
vivos por su comunidad, y potenciados con Claude como tutor integrado.

Un Refuerzo no es un ebook estático. Es:
- Un contenido editorial riguroso, ilustrado, con infografías propias
- Dividido en módulos con progresión bloqueada por quiz
- Con notas personales, certificación al completarlo
- Asistido por Claude dentro de cada módulo para ampliar lo que el 
  estudiante no entienda
- Actualizado constantemente por la comunidad
- Vendido por precio accesible al estudiante final
- Con revenue share perpetuo entre Cardumen + solicitante original + 
  expertos curadores

---

## 2. LOS TRES PÚBLICOS (TRES ENTRADAS A CARDUMEN)

### 2.1 EL APRENDIZ
Persona que quiere aprender/profundizar un tema profesional.

**Cómo entra:** navega biblioteca pública, compra Refuerzo existente, 
o pide uno nuevo si no lo encuentra.

**Qué paga:** $5.000 por semana de acceso a un Refuerzo, o 
$20.000 por mes completo. Conserva acceso vitalicio al Refuerzo 
que terminó.

**Qué puede hacer:**
- Armar ruta propia combinando Refuerzos
- Subrayar, comentar, sugerir mejoras
- Consultar a Claude dentro de cada módulo
- Compartir con link propio y ganar saldo si otros compran
- Certificarse al completar con quizzes aprobados

### 2.2 EL EXPERTO / DOCENTE CON NICHO
Profesional con audiencia propia: influencer de un oficio, profesor, 
consultor, creador de contenido.

**Cómo entra:** solicita un Refuerzo específico co-creado con él. 
Aporta conocimiento técnico, valida contenido, presta su rostro 
y reputación.

**Qué gana:**
- Comisión por cada venta del Refuerzo en su red y fuera
- Saldo acumulable para financiar próximos Refuerzos suyos
- Visibilidad como experto dentro de Cardumen
- Su nombre en el crédito del Refuerzo

**Caso especial — docente:** un profesor puede pedir Refuerzos 
como material obligatorio de su clase. Sus estudiantes pagan $20k/mes, 
el profe gana comisión por ser curador. El estudiante no sabe que el 
profe gana; solo sabe que es parte del curso.

### 2.3 LA INSTITUCIÓN
Colegios, universidades, academias, institutos técnicos, fundaciones, 
centros de capacitación, empresas que forman empleados.

**Cómo entra:** acuerdo formal con Cardumen. La institución define 
programa, intensidad, temas. Cardumen cotiza precio por estudiante.

**Qué paga la institución:** nada directo. Cardumen no cobra a la 
institución. Los estudiantes pagan individualmente al momento de la 
matrícula o inscripción.

**Qué gana la institución:**
- Material educativo de alta calidad sin costo de producción
- Comisión por cada estudiante inscrito
- Diferenciación frente a otras instituciones
- Certificaciones emitidas por Cardumen para sus estudiantes

**Compromiso de la institución:**
- Incluir Cardumen como material obligatorio en la matrícula
- Comprometer volumen mínimo de estudiantes
- Asignar un docente/coordinador como curador

---

## 3. MODELO ECONÓMICO

### 3.1 Precios al estudiante final
- $5.000 por semana de acceso a un Refuerzo
- $20.000 por mes completo (paquete)
- Acceso vitalicio al Refuerzo una vez completado
- Precios sujetos a ajuste según tipo de Refuerzo (básico vs premium 
  con infografías, vs especializado técnico)

### 3.2 Reparto de ingresos (por definir exacto, propuesta inicial)
- **Refuerzo B2C (aprendiz compra suelto):** Cardumen 100%
- **Refuerzo B2C con link compartido:** Cardumen 85% / 
  quien compartió 15%
- **Refuerzo co-creado con experto:** Cardumen 50-70% / 
  experto 30-50% según nivel de aporte
- **Refuerzo institucional (colegio/universidad):** Cardumen 60% / 
  institución 30% / docente curador 10%
- **Refuerzo revendido a otras instituciones:** sigue el reparto 
  original, la institución que lo pidió primero sigue ganando

### 3.3 Lógica del pricing
- Quien pide el Refuerzo NO lo paga por adelantado
- El costo de producción lo financia el volumen de estudiantes 
  comprometidos antes del lanzamiento
- Un Refuerzo solo se produce cuando hay volumen mínimo garantizado 
  (a definir según complejidad: 30, 50, 100 estudiantes)
- Precio por estudiante se calcula para que cubra producción + margen 
  en el primer ciclo
- A partir del segundo ciclo, el Refuerzo ya es rentable y cualquier 
  venta futura es margen casi puro

---

## 4. ARQUITECTURA DE PRODUCTO

### 4.1 Páginas del sitio (estado actual + pendiente)

**✅ HECHO**
- Landing pública (index.html) con mensaje base
- Dashboard de usuario (mi-cardumen.html)
- Vista de módulo del curso (modulo-4.html como plantilla)
- Login con email + código
- Bloqueo progresivo de módulos
- Paleta dark editorial coherente
- Deploy funcional en Vercel

**🔨 EN PROGRESO**
- Refuerzo 001 (Anatomía Aplicada a la Estética) — módulos 1,2,3 
  migrados; falta validación y contenido afinado
- Logos con pez dorado consistente
- Navegación móvil tipo app
- Auditoría de links rotos

**❌ PENDIENTE FASE 1**
- Página /docentes.html (pitch para docentes)
- Página /instituciones.html (pitch para colegios)
- Página /expertos.html (pitch para expertos)
- Página /venta.html por cada Refuerzo
- Sistema de perfil y referidos funcional
- Pitch deck descargable en PDF

**❌ PENDIENTE FASE 2**
- Integración de Claude como tutor dentro de cada módulo
- Sistema de curaduría colaborativa (subrayar, sugerir, comentar)
- Panel de experto/docente para proponer Refuerzos
- Sistema de certificados en PDF
- Panel admin para gestionar Refuerzos, usuarios, pagos
- Pagos reales (Nequi, Daviplata, tarjeta via Wompi/ePayco)
- Multi-idioma

---

## 5. PLAN DE 30 DÍAS

### SEMANA 1 (21-27 abril) — PRODUCTO MÍNIMO VENDIBLE
**Objetivo:** Refuerzo 001 terminado y demostrable

- Lunes: terminar migración de módulos 1-9 con contenido real
- Martes: validación del contenido por tu pareja esteticista
- Miércoles: pulir navegación, arreglar todos los 404, logos correctos
- Jueves: agregar certificado básico en PDF al completar
- Viernes: Refuerzo 001 publicado, probado end-to-end

### SEMANA 2 (28 abril - 4 mayo) — HERRAMIENTAS DE VENTA
**Objetivo:** armas listas para salir a vender

- Lunes: pitch deck en PDF para instituciones (2 páginas)
- Martes: pitch deck para docentes individuales (1 página)
- Miércoles: pitch deck para expertos con nicho (1 página)
- Jueves: landing nueva con 3 secciones por público
- Viernes: páginas /instituciones, /docentes, /expertos

### SEMANA 3 (5-11 mayo) — PROSPECCIÓN MASIVA
**Objetivo:** 50 conversaciones iniciadas, 10 reuniones agendadas

- Listado de 200 instituciones/docentes prospecto (todo Colombia)
- Mensajes personalizados por WhatsApp/email/LinkedIn
- Demos en vivo por Google Meet
- Seguimiento sistemático

### SEMANA 4 (12-18 mayo) — CIERRE Y LANZAMIENTO
**Objetivo:** 1-3 clientes firmados, primera facturación

- Negociación de contratos piloto
- Onboarding del primer cliente
- Inicio de producción del Refuerzo #2 (el que pida el cliente)
- Ajustes al modelo según feedback real

### MES 2 (19 mayo - 18 junio) — FASE 2
- Integración Claude como tutor
- Sistema de curaduría colaborativa
- Segundo y tercer cliente firmado
- Refuerzos 2, 3, 4 en producción

---

## 6. DIVISIÓN DE TRABAJO

### Lo que hacemos AQUÍ (Claude web conmigo)
- Pensamiento estratégico, decisiones de modelo
- Redacción de contenido: landing, pitches, emails, copy
- Estructura pedagógica de cada Refuerzo
- Redacción de módulos: prosa editorial, callouts, quizzes
- Revisión y mejora de copy existente
- Consultoría de producto: qué va dónde, qué falta, qué sobra

### Lo que hace CODE (Claude Code local)
- Implementación técnica de todo lo anterior en HTML/CSS/JS
- Resolución de bugs, rutas, deploys
- Migración de contenido del .docx a los archivos HTML
- Integración de APIs (Claude, pagos, emails) cuando llegue el momento
- Refactorización del código

### Lo que haces TÚ
- Validación de cada entrega con criterio de usuario
- Pruebas en móvil y desktop reales
- Contacto con tu pareja para validación de contenido
- Ventas: escribir, llamar, reunirse, cerrar
- Decisiones finales de negocio (precios, comisiones, contratos)

---

## 7. IDEAS GUARDADAS PARA NO PERDER

Cosas que surgieron en conversación y que se ejecutan en fase 2-3:

1. **Claude como tutor integrado** en cada módulo, con contexto del 
   contenido que el estudiante está leyendo. Responde dudas específicas, 
   amplía conceptos, explica desde otro ángulo.

2. **Curaduría colaborativa activa:** cada estudiante puede subrayar, 
   sugerir mejoras, señalar errores. Sistema de revisión por parte de 
   Cardumen + expertos. Notificación a todos los que estudiaron cuando 
   hay mejoras.

3. **Multi-idioma:** los Refuerzos con potencial global se traducen 
   (empezando por inglés y portugués). Mercado latinoamericano + 
   habla hispana en EEUU + Brasil.

4. **Marketplace de expertos:** los expertos que entran a Cardumen 
   pueden recibir solicitudes de otros aprendices/instituciones 
   directamente, filtradas por Cardumen, con su comisión.

5. **Certificaciones verificables:** PDF con firma digital, QR para 
   verificar autenticidad, posible integración blockchain a futuro 
   para certificaciones oficiales.

6. **Rutas personalizadas con IA:** onboarding donde el estudiante dice 
   qué quiere aprender, desde dónde parte, cuánto tiempo tiene, y 
   Claude arma una ruta de Refuerzos sugeridos.

7. **Temas infinitos:** historia, inglés, filosofía, marketing, 
   desarrollo personal, oficios técnicos, profesiones creativas. 
   Cualquier tema donde haya gente que quiera profundizar.

8. **Modelo para empresas:** no solo instituciones educativas. 
   Empresas que capacitan empleados también son cliente. Onboarding 
   de nuevos empleados, upskilling, certificaciones internas.

9. **Comunidad activa entre usuarios:** foros privados por Refuerzo, 
   donde los estudiantes se ayudan entre sí bajo curaduría de 
   Cardumen + expertos.

10. **Eventos en vivo:** masterclasses, Q&A con expertos, tutorías 
    grupales pagadas, conferencias. Todo integrado a la plataforma.

---

## 8. PRINCIPIOS NO NEGOCIABLES

1. **Calidad editorial primero.** Nada se publica a medias. 
   Investigación, estructura, ilustración, revisión interna.

2. **Precio accesible al estudiante final.** Nunca caro. La 
   rentabilidad viene del volumen y la recurrencia, no del precio alto.

3. **Todos ganan o nadie gana.** El modelo solo funciona si cada actor 
   del cardumen (aprendiz, experto, docente, institución) tiene 
   incentivo real de estar ahí.

4. **Contenido vivo.** Un Refuerzo no se congela al publicarse. Se 
   mejora siempre.

5. **Transparencia con el estudiante.** Cómo funciona Cardumen, qué 
   puede esperar, cómo mejora el contenido. Sin letra chica.

6. **La Dorada y el mundo.** Cardumen nace en La Dorada, Caldas, pero 
   apunta a habla hispana completa y eventualmente global.

---

FIN DEL DOCUMENTO MASTER
