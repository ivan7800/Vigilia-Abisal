# CHANGELOG

## 4.1.0 · Director's Cut

### Añadido
- **15 consecuencias retardadas** entre expedientes: el desenlace de un caso anterior puede modificar pistas, Insight, Cordura o Presagio al abrir un caso posterior.
- Las consecuencias distinguen entre `Verdad peligrosa`, `Supervivencia` y cierres traumáticos; no son bonificaciones genéricas.
- **7 documentos imposibles** ligados al progreso de campaña: Expediente 0, primer cruce, negativo 7-B, Expediente XXI, puerta sin dirección, índice completo y copia de Nueva Vigilia.
- Códigos de evidencia por escena (`VA-xx/xx`) y tratamiento visual de expediente de trabajo.
- Señales sonoras procedurales distintas por tema al entrar en una escena o descubrir un documento; no se añaden dependencias ni archivos de audio.
- Nueva presentación documental para consecuencias y anomalías.

### Enlaces de consecuencias principales
- Carter → Whisperer.
- West → Ward.
- Cthulhu → Dagon.
- El Color → Montañas.
- Dunwich → La tumba.
- Innsmouth → Pickman.
- Montañas → Ciudad sin nombre.
- Kadath → Zann.
- Dagon → El Festival.
- La tumba → La sombra de otro tiempo.
- Nyarlathotep → Casa de la bruja.
- Ciudad sin nombre → El Festival.
- Zann → Whisperer.
- Pickman → La casa evitada.
- La casa evitada → Ward.

### Cambiado
- Hero, metadatos y versión pasan a **Director's Cut v4.1.0**.
- Service Worker usa caché `vigilia-abisal-v4.1.0-directors-cut` e incluye la capa JS/CSS nueva.
- La interfaz refuerza la estética de archivo físico sin sustituir el diseño v4.

### Compatibilidad
- No se modifica el esquema de guardado.
- Los estados nuevos se almacenan como flags saneados del investigador.
- Se mantienen los 20 expedientes, Archivo Ω, talentos, cicatrices, Mapa Ω, Nueva Vigilia+ y todas las rutas v4.

## 4.0.0 · Edición Definitiva

### Añadido
- Talento profesional contextual para los 8 arquetipos.
- 20 perfiles de cicatriz de doble filo.
- Panel de cicatrices vivas en la hoja del investigador.
- Mapa visual de las 5 convergencias.
- Nueva Vigilia+ tras completar Archivo Ω.
- Conservación de cicatrices y una reliquia al iniciar NG+.
- Ecos de memoria jugables en Nueva Vigilia+.
- Alucinaciones interactivas con Cordura muy baja en escenas seleccionadas.
- Indicador de número de Vigilia.
- Presentación mejorada de desenlaces.

### Cambiado
- La bonificación genérica de cicatrices se sustituye por modificadores contextuales.
- Hero y metadatos actualizados a Edición Definitiva.
- Service Worker actualizado a caché `v4.0.0-definitive`.
- Manifest actualizado.
- Documentación alineada con la estructura real del repositorio.
- El App Shell solo precarga recursos que existen realmente en el repositorio, evitando que la instalación del Service Worker falle por iconos inexistentes.

### PWA
- Icono PNG 192x192.
- Icono SVG escalable declarado como `any maskable`.
- `apple-touch-icon`.
- Rutas relativas compatibles con GitHub Pages.

### Conservado
- 20 expedientes + Archivo Ω.
- 128 escenas y 289 decisiones de la campaña base.
- Progresión XP/Insight.
- 5 convergencias.
- Reliquias y crosslinks.
- Compatibilidad con partidas antiguas.
- CSP restrictiva, funcionamiento offline y ausencia de backend/telemetría.
