# AUDIT REPORT · Vigilia Abisal v4.0.0

## Diagnóstico

La Edición Definitiva se construye sobre la campaña validada de v3 y prioriza profundidad sistémica y rejugabilidad sin sustituir el grafo narrativo probado.

## Cambios ejecutados

### Juego
- Talentos por profesión implementados como modificadores situacionales.
- Cicatrices transformadas en efectos de doble filo.
- Nueva Vigilia+ integrada con Archivo Ω.
- Decisiones de memoria añadidas en NG+.
- Alucinaciones de baja Cordura añadidas en cinco expedientes.
- Mapa Ω añadido a la interfaz.

### UX
- Resultado final conserva saltos de línea mediante `white-space: pre-line`.
- Cicatrices y talento visibles en la hoja.
- Número de Vigilia visible.
- Mapa responsive y cerrable por acción explícita o clic en backdrop.
- Estados de Cordura usan efectos discretos y respetan `prefers-reduced-motion`.

### PWA
- Caché actualizada.
- Iconos 512x512 añadidos.
- Recurso maskable añadido.
- Manifest actualizado.

### Seguridad
Se mantiene la CSP restrictiva de la aplicación.
La capa v4 no introduce red, `eval`, HTML remoto, telemetría ni dependencias externas.

## Deuda técnica conocida

Para minimizar riesgo sobre un motor con cientos de rutas ya probadas, v4 mantiene la arquitectura de capas v2/v3 y añade `v4-definitive.js`.

Esto es deliberado para esta release. Una futura consolidación puede unificar los motores en módulos sin cambiar la semántica de campaña.

## QA requerido en navegador real

Antes de etiquetar la experiencia como validada en todos los dispositivos:
- Safari real en iPhone.
- Chrome/Edge real.
- Interacción táctil.
- Instalación PWA.
- Modo offline tras instalación.
- Lighthouse.
- 320 px, 390 px, tablet y escritorio.

## Criterio de release

La v4 está preparada para publicación como actualización compatible si:
1. todos los scripts pasan sintaxis;
2. todos los recursos del App Shell existen;
3. manifest parsea;
4. la campaña base sigue conservando sus rutas;
5. las pruebas manuales de navegador no descubren regresiones.
