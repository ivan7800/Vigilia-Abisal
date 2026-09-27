# TEST REPORT · Vigilia Abisal v4.0.0

## Resultado

**Campaña base: PASS heredado de v3**  
**Auditoría estática v4: PASS con QA manual pendiente**

La v4 conserva el motor y el grafo narrativo que ya habían superado las pruebas estructurales de v3 y añade una capa compatible (`v4-definitive.js` + `v4.css`). En esta revisión se ha comprobado el empaquetado de release y se ha corregido un fallo real del App Shell: se referenciaban dos iconos 512 inexistentes, lo que podía provocar que `cache.addAll()` rechazara la instalación del Service Worker.

## Base validada previamente

### Sintaxis y estructura v3
- `app.js` → PASS en la validación previa.
- motores v3 → PASS en la validación previa.
- `service-worker.js` → PASS en la validación previa.
- manifest JSON → PASS en la validación previa.

### Integridad narrativa
- 21 casos: 20 expedientes + Archivo Ω → PASS.
- 128 escenas → PASS.
- 289 decisiones → PASS.
- destinos narrativos inexistentes → 0.
- endings inexistentes referenciados → 0.

### Ejecución del motor base
- 289 decisiones forzando éxito → PASS.
- 289 decisiones forzando fallo/pifia → PASS.
- total: **578 ejecuciones**, 0 excepciones y 0 estados narrativos inválidos en el arnés previo.

### Campaña
- completar 20 expedientes → PASS.
- desbloquear 5/5 convergencias → PASS.
- Archivo Ω bloqueado al inicio → PASS.
- Archivo Ω desbloqueado con requisitos → PASS.
- final de metacampaña almacenado → PASS.
- progresión hasta nivel 6 → PASS.
- XP/Insight → PASS.

## Auditoría específica v4

### Sistemas añadidos
- 8 talentos profesionales contextuales definidos → PASS por inspección de código.
- 20 perfiles de cicatriz de doble filo definidos → PASS por inspección de código.
- Nueva Vigilia+ implementada → PASS por inspección de código.
- ecos de memoria por expediente → PASS por inspección de código.
- alucinaciones de baja Cordura en expedientes seleccionados → PASS por inspección de código.
- Mapa Ω y estilos responsive → PASS por inspección de código.
- `white-space: pre-line` en modal de resultados → PASS.

### PWA / App Shell
- recursos presentes comprobados en `assets/`: `icon.svg`, `icon-192.png`, `apple-touch-icon.png`.
- manifest actualizado para no declarar archivos inexistentes → PASS.
- Service Worker actualizado para no precargar archivos inexistentes → PASS.
- riesgo de fallo de `cache.addAll(APP_SHELL)` por iconos ausentes → CORREGIDO.

### Seguridad
- CSP restrictiva se mantiene.
- sin CDN, API remota, telemetría o backend.
- la capa v4 no introduce `eval` ni contenido HTML remoto.

## Pendiente manual antes de declarar validación 9,5+

- Safari real en iPhone.
- Chrome/Edge reales con interacción táctil/ratón.
- instalación PWA real desde GitHub Pages.
- verificación offline física tras instalación.
- Lighthouse en la URL publicada.
- revisión visual a 320, 390, tablet y escritorio.
- partida NG+ completa para verificar ecos de memoria y cicatrices acumuladas en sesión real.

## Nota

No se presenta como ejecutada ninguna prueba de navegador que no haya podido realizarse. La rama queda preparada para revisión/merge y el punto crítico encontrado en el empaquetado PWA ha sido corregido.
