# Vigilia Abisal · Edición Completa Lovecraftiana

Juego de rol narrativo en solitario para navegador, offline-first y preparado para GitHub Pages.

## Qué es

**Vigilia Abisal** es una campaña de horror cósmico en solitario. El jugador crea un investigador, abre expedientes, toma decisiones, tira dados virtuales y gestiona salud, cordura, presagio, pistas, inventario y diario.

Esta edición amplía el proyecto a **20 expedientes jugables** como homenaje original a los relatos clave del universo lovecraftiano. Todo el texto jugable está escrito específicamente para esta app: no incluye traducciones, capítulos copiados ni fragmentos extensos de obras editadas.

## Expedientes incluidos

1. La voz bajo la losa
2. El suero del sexto cadáver
3. La arcilla que soñaba con el mar
4. El color que cayó fuera del espectro
5. La colina que tenía respiración
6. La ciudad que respiraba por branquias
7. Las montañas sin alba
8. Kadath no aparece en los mapas
9. La grieta de Dagón
10. La tumba que heredaba nombres
11. El teatro de Nyarlathotep
12. La ciudad sin nombre
13. La partitura de Erich Zann
14. El negativo de Pickman
15. La casa que evitaban los vivos
16. El ceremonial de Kingsport
17. El archivo de Charles Dexter Ward
18. Los susurros de la colina negra
19. La geometría de la casa de la bruja
20. La sombra de otro tiempo

## Funciones

- 20 expedientes jugables.
- 100 escenas narrativas.
- 8 arquetipos de investigador.
- Sistema de tiradas d12 + d6 + atributo.
- Salud, cordura, presagio, pistas e inventario.
- Objetos únicos por expediente.
- Diario automático ampliado.
- Exportar e importar partida en JSON.
- Validación y saneado de partidas importadas.
- Guardado automático en `localStorage`.
- Ambiente sonoro generado con Web Audio.
- Diseño responsive móvil.
- PWA offline con manifest y service worker.
- Sin backend y sin dependencias externas.

## Uso local

Opción rápida:

```text
Abre index.html en el navegador.
```

Opción recomendada para probar PWA/service worker:

```bash
python -m http.server 8080
```

Luego abre:

```text
http://localhost:8080
```

## Publicar en GitHub Pages

1. Crea un repositorio nuevo.
2. Sube todos los archivos de esta carpeta.
3. Entra en `Settings > Pages`.
4. Selecciona `Deploy from a branch`.
5. Elige `main` y `/root`.
6. Guarda y espera el despliegue.

## Seguridad y privacidad

- No hay login.
- No hay analíticas.
- No se envían datos a servidores externos.
- Las partidas quedan en el navegador del usuario.
- La importación de partidas valida y sanea el JSON antes de cargarlo.
- No usa `eval`, `document.write` ni dependencias de terceros.

## Nota legal

Este proyecto es un homenaje interactivo con textos originales. No redistribuye las traducciones de los tomos usados como referencia bibliográfica ni sus portadas/ilustraciones.

## Licencia

MIT.
