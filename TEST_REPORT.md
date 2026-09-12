# TEST REPORT · Vigilia Abisal v3.0.0

## Resultado

**Motor/estructura: PASS**

La prueba visual automatizada con Chromium no pudo ejecutarse porque el entorno de trabajo bloquea por política administrativa la navegación headless tanto a `localhost` como a `file://`. Esta limitación se documenta y no se sustituye por una afirmación falsa de validación visual.

## Pruebas ejecutadas

### Sintaxis
- `node --check app.js` → PASS
- `node --check campaign.js` → PASS
- `node --check service-worker.js` → PASS
- `manifest.webmanifest` parseado como JSON → PASS

### Integridad narrativa
- 21 casos en datos: 20 expedientes + Archivo Ω → PASS
- 128 escenas → PASS
- 289 decisiones → PASS
- Destinos `success/fail` inexistentes → 0
- Endings inexistentes referenciados → 0
- Textos de outcome duplicados entre expedientes IX–XX → 0

### Ejecución del motor
Arnés Node con DOM/localStorage simulado:

- 289 decisiones ejecutadas forzando éxito → PASS
- 289 decisiones ejecutadas forzando fallo/pifia → PASS
- Total: **578 ejecuciones**, 0 excepciones, 0 estados narrativos inválidos.

### Campaña
- Completar los 20 expedientes → PASS
- Desbloquear 5/5 convergencias → PASS
- Archivo Ω bloqueado al inicio → PASS
- Archivo Ω desbloqueado con requisitos → PASS
- Final de metacampaña almacenado → PASS
- Progresión hasta nivel 6 → PASS
- XP/Insight acumulados → PASS

### Sistemas
- Dificultad 15 modifica DC base 14 a DC efectiva 15 → PASS
- Opción de continuidad bloqueada sin flag → PASS
- La misma opción se desbloquea con flag previo → PASS
- Resolución por reliquia bloqueada sin objeto → PASS
- Resolución por reliquia desbloqueada con objeto → PASS
- Save → JSON → sanitizeSave → estado v4 → PASS
- 21 resultados conservados tras round-trip → PASS

### DOM estático
- IDs referenciados desde `app.js`: 46
- IDs inexistentes en `index.html`: 0

## Pendiente manual antes de declarar 9,5+

- Safari real en iPhone.
- Chrome/Edge reales con interacción táctil/ratón.
- Instalación PWA real desde GitHub Pages.
- Verificación offline física tras instalación.
- Lighthouse en la URL publicada.
- Revisión visual a 320, 390, tablet y escritorio en navegadores reales.
