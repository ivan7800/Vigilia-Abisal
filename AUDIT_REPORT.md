# AUDIT REPORT · Vigilia Abisal Director's Cut v4.1.0

## Diagnóstico

Director's Cut no intenta hacer Vigilia Abisal más grande. Su objetivo es hacer la campaña más memorable: que decisiones anteriores reaparezcan horas después, que el archivo se comporte como una entidad narrativa y que la presentación tenga más textura sin sacrificar la PWA ligera.

## Cambios ejecutados

### Consecuencias a largo plazo
Se añadieron **15 enlaces retardados** entre expedientes. El sistema consulta el desenlace almacenado del caso de origen cuando se abre el caso destino y aplica una consecuencia única.

Características:
- diferencia Verdad, Supervivencia y cierre traumático;
- puede afectar pistas, Insight, Cordura o Presagio;
- se registra en diario;
- se marca con flag persistente para no repetirse;
- si dos ecos convergen en un mismo caso, los efectos se combinan con límites seguros;
- no modifica los destinos del grafo narrativo base.

### Momentos memorables
Se añadieron **7 documentos imposibles** que aparecen como expedientes anómalos en hitos concretos:
- Expediente 0.
- Primer desplazamiento del índice.
- Negativo 7-B.
- Expediente XXI · El investigador.
- Puerta sin dirección.
- Índice completo.
- Copia II en Nueva Vigilia+.

Estos acontecimientos usan el nombre/profesión del investigador cuando corresponde y quedan incorporados al diario y al estado de campaña.

### Dirección visual
- tira de identificación de evidencia por escena;
- código `VA-xx/xx`;
- sello de copia de Vigilia;
- textura documental muy ligera;
- tarjetas anómalas diferenciadas del listado normal;
- modal de archivo reservado;
- transición breve al cambiar de escena;
- `prefers-reduced-motion` respetado.

### Audio
La v4.1 añade señales cortas generadas con Web Audio según el tema del expediente. No existen descargas, pistas musicales, APIs ni recursos de audio externos. Si el usuario no activa Ambiente, la capa no genera sonido.

## Compatibilidad

Director's Cut conserva:
- 20 expedientes + Archivo Ω;
- 128 escenas y 289 decisiones base;
- motor de tiradas v4;
- talentos profesionales;
- cicatrices vivas;
- Mapa Ω;
- Nueva Vigilia+;
- ecos de memoria;
- alucinaciones;
- guardados existentes.

No cambia el esquema de guardado. Los estados v4.1 se almacenan en `player.flags`, que ya forma parte del saneado y la persistencia existente.

## Seguridad

- CSP restrictiva sin cambios permisivos.
- sin CDN.
- sin telemetría.
- sin backend.
- sin `eval`.
- sin HTML remoto.
- documentos renderizados mediante DOM/texto local.
- audio generado localmente mediante Web Audio.

## PWA

- caché nueva: `vigilia-abisal-v4.1.0-directors-cut`.
- `v4.1-directors-cut.js` y `v4.1-directors-cut.css` forman parte del App Shell.
- rutas relativas compatibles con GitHub Pages.
- se mantienen únicamente iconos realmente presentes en el repositorio.

## Validación realizada

- `node --check v4.1-directors-cut.js` → PASS.
- 15 consecuencias contabilizadas → PASS.
- 7 momentos especiales contabilizados → PASS.
- arnés Node de consecuencia Carter → Whisperer → PASS en flag, efecto, diario y modal.
- campaña base mantiene su validación previa.

## Riesgos restantes

La deuda técnica principal sigue siendo la arquitectura por capas v2/v3/v4/v4.1. Para esta release es una decisión conservadora: evita reescribir cientos de rutas ya probadas. A medio plazo puede consolidarse en módulos.

La validación física de Safari/iPhone, instalación PWA, modo offline, Lighthouse y campaña completa de larga duración sigue pendiente y debe considerarse QA de release, no funcionalidad faltante.

## Criterio

La v4.1 mejora la experiencia sin introducir cambios destructivos en el núcleo. La recomendación es publicar después de comprobar la rama en navegador real y, si no aparecen regresiones, mantener esta versión como cierre de contenido antes de cualquier refactor técnico mayor.
