# TEST REPORT · Vigilia Abisal v2.0.0

## Resultado general

Estado: APTO PARA GITHUB.

## Verificaciones automáticas realizadas

- Total de expedientes: 20.
- Total de escenas: 100.
- Total de decisiones: 200.
- Todas las rutas internas apuntan a una escena válida o a un final válido.
- `manifest.webmanifest` validado como JSON.
- `service-worker.js` con caché versionada `vigilia-abisal-v2.0.0-completa`.
- Sin dependencias externas.
- Sin llamadas de red externas.
- Sin `eval`.
- Sin `document.write`.
- Contenido narrativo original: no se copian relatos completos ni traducciones de terceros.

## Validación de rutas

Sin errores detectados.

## Pruebas manuales recomendadas

- Abrir `index.html` en Chrome/Edge/Firefox.
- Probar una partida nueva con cada arquetipo.
- Completar al menos 3 expedientes en móvil.
- Probar exportación/importación de partida.
- Publicar en GitHub Pages y comprobar instalación PWA.

## Riesgos pendientes

- Falta prueba física en iPhone/Safari real.
- Falta prueba física en Android/Chrome real.
- `localStorage` es suficiente para esta edición; si se añaden campañas masivas, migrar a IndexedDB.
