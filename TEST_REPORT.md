# TEST REPORT · Vigilia Abisal Director's Cut v4.1.0

## Resultado

**Campaña base: PASS heredado de v3/v4**  
**Director's Cut: PASS en sintaxis, arnés de integración e inspección estática**  
**QA de navegador/dispositivo real: pendiente**

La v4.1 se implementa como una capa posterior a `v4-definitive.js`; no sustituye el grafo de los 20 expedientes ni el motor de tiradas validado.

## Pruebas ejecutadas para v4.1

### Sintaxis
- `node --check v4.1-directors-cut.js` → **PASS**.

### Conteo de contenido Director's Cut
- consecuencias retardadas definidas → **15**.
- documentos/acontecimientos imposibles definidos → **7**.

### Arnés Node de integración
Se ejecutó la capa v4.1 con un estado simulado y las dependencias mínimas del motor:

- Carter cerrado con `END_TRUTH` → abrir Whisperer → consecuencia retardada detectada.
- flag persistente de consecuencia → **PASS**.
- +1 pista aplicada al caso de destino → **PASS**.
- entrada de diario creada → **PASS**.
- documento/modal de consecuencia creado → **PASS**.
- arrays esperados de 15 consecuencias y 7 momentos → **PASS**.

Resultado del arnés: **PASS sin excepción**.

## Base validada previamente

- 21 casos: 20 expedientes + Archivo Ω.
- 128 escenas.
- 289 decisiones base.
- 578 ejecuciones de decisiones en el arnés previo, forzando éxito y fallo/pifia.
- 5 convergencias.
- Archivo Ω y metaprogresión.
- XP/Insight, reliquias, crosslinks y guardados.
- talentos profesionales, cicatrices vivas, Mapa Ω, Nueva Vigilia+ y alucinaciones de v4.

## Comprobaciones de diseño v4.1

### Consecuencias retardadas
- se activan solo si el expediente fuente ya está cerrado.
- se disparan una sola vez mediante flags persistentes.
- distinguen `END_TRUTH`, `END_SURVIVE` y cierres traumáticos.
- los efectos combinados se limitan a un máximo seguro para no desbalancear un caso con dos ecos simultáneos.
- no alteran destinos de escena ni reemplazan decisiones de la campaña base.

### Documentos imposibles
- se muestran uno a uno en el listado de expedientes.
- quedan registrados mediante flags del estado existente.
- no requieren cambio de esquema de guardado.
- pueden modificar Insight, Cordura o Presagio de forma limitada.

### UI / accesibilidad
- los documentos usan `textContent` a través del modal existente.
- la capa visual respeta `prefers-reduced-motion`.
- el audio procedural solo se ejecuta si el usuario ya ha activado el contexto de audio.
- no se añaden fuentes, scripts, imágenes ni audio externos.

### PWA
- `service-worker.js` usa caché `vigilia-abisal-v4.1.0-directors-cut`.
- el App Shell incluye `v4.1-directors-cut.js` y `v4.1-directors-cut.css`.
- las rutas siguen siendo relativas para GitHub Pages.

## Pendiente manual antes de declarar validación total

- Safari real en iPhone.
- Chrome/Edge reales con ratón y táctil.
- instalación PWA desde GitHub Pages.
- modo offline después de instalación.
- Lighthouse.
- visual a 320 px, 390 px, tablet y escritorio.
- campaña larga para valorar frecuencia emocional de las 15 consecuencias.
- Nueva Vigilia+ completa con la nueva `Copia II`.

## Nota

No se afirma haber ejecutado pruebas físicas de navegador que no se han realizado. La validación actual cubre sintaxis, integración lógica, persistencia prevista e integridad de la capa Director's Cut.
