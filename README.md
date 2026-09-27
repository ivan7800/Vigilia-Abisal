# Vigilia Abisal · Edición Definitiva v4.0.0

RPG narrativo de horror cósmico en solitario, **offline-first**, sin backend, sin CDN, sin telemetría y preparado para GitHub Pages.

## Qué incluye la Edición Definitiva

Vigilia Abisal conserva la campaña conectada de la v3 y añade una capa de sistemas orientada a rejugabilidad y consecuencias:

- **20 expedientes principales + Archivo Ω**.
- **128 escenas** y **289 decisiones** en la campaña base.
- **8 investigadores** con talento profesional contextual propio.
- **Cicatrices vivas**: cada trauma puede ayudar o perjudicar según el tipo de horror y la tirada.
- **5 convergencias** con un nuevo **Mapa Ω** de campaña.
- **Continuidad entre expedientes** mediante flags, reliquias y decisiones especiales.
- **Nueva Vigilia+** al completar Archivo Ω:
  - conserva cicatrices;
  - conserva una reliquia;
  - reinicia la investigación;
  - añade ecos de memoria exclusivos a los expedientes.
- **Alucinaciones de baja Cordura** en escenas concretas: la interfaz puede ofrecer acciones que no pertenecen del todo a la realidad.
- Presentación mejorada de desenlaces.
- PWA con iconos 192/512 y recurso maskable.
- Compatibilidad con partidas anteriores mediante el esquema de guardado existente.

## Sistema de tiradas

La base sigue siendo:

```text
d12 + d6 + atributo + veteranía + vínculo - Presagio
```

La Edición Definitiva añade modificadores contextuales:

```text
+ talento profesional
+/- cicatriz activa
```

La **Presión del expediente** modifica la dificultad efectiva.

Los éxitos críticos y las pifias siguen dependiendo de la combinación de d12 y d6.

## Talentos profesionales

Cada arquetipo tiene una identidad mecánica adicional:

- **Anticuario/a — Memoria de archivo**
- **Detective privado — Ojo entrenado**
- **Médico/a de Miskatonic — Frialdad clínica**
- **Periodista ocultista — Fuente confidencial**
- **Soñador/a lúcido — Ancla onírica**
- **Contrabandista de puerto — Instinto de fuga**
- **Lingüista de Aklo — Lenguas que no deberían existir**
- **Geólogo/a polar — Lectura del estrato**

Los talentos no son bonificaciones planas: solo aparecen cuando la escena y el atributo encajan.

## Cicatrices vivas

Las cicatrices ya no son únicamente un contador.

Cada expediente puede dejar una secuela con **doble filo**. Ejemplos:

- *Talasofobia lúcida*: mejora Percepción en horror marino y penaliza Temple.
- *Geometría residual*: mejora Razón ante geometría imposible y penaliza Movimiento.
- *Recuerdo futuro*: ayuda a comprender anomalías temporales, pero las hace más difíciles de soportar.

La hoja del investigador muestra el nombre y efecto narrativo de cada cicatriz.

## Mapa Ω

Desde el panel de Convergencias puede abrirse un mapa de campaña que muestra:

- estado de los cinco arcos;
- expedientes vinculados;
- progreso necesario;
- Insight;
- proximidad al Archivo Ω.

Las cinco convergencias son:

1. La marea que recuerda.
2. La sangre que insiste.
3. Cartografía del sueño.
4. Archivo no humano.
5. Los nombres bajo la ciudad.

## Archivo Ω

Archivo Ω se desbloquea cuando la campaña alcanza los requisitos de metaprogresión.

El desenlace verdadero exige haber completado:

- 20 expedientes;
- 5 convergencias;
- Insight suficiente.

La revelación central se mantiene: **el archivo no solo clasifica horrores; también ha estado estudiando al investigador**.

## Nueva Vigilia+

Tras cerrar Archivo Ω aparece la opción **Comenzar Nueva Vigilia**.

La nueva campaña:

- reinicia expedientes, XP e Insight;
- conserva las cicatrices;
- conserva una reliquia;
- incrementa el contador de Vigilia;
- introduce decisiones de memoria en los expedientes.

Esos recuerdos pueden ofrecer una ventaja, pero también pueden no coincidir exactamente con la nueva iteración.

## Cordura e interfaz

Con Cordura baja la presentación visual se vuelve menos estable.

En determinados expedientes pueden aparecer **alucinaciones interactivas**. Son deliberadas y forman parte del sistema de horror; se registran para no repetirse indefinidamente.

Se respeta `prefers-reduced-motion`.

## Privacidad y seguridad

- Sin login.
- Sin analíticas.
- Sin telemetría.
- Sin API remota.
- Sin CDN.
- Sin backend.
- `localStorage` para guardados.
- Importación/exportación JSON saneada.
- CSP restrictiva.
- Recursos servidos desde el propio origen.

## Guardados

La Edición Definitiva mantiene compatibilidad con la migración de la v3 y amplía el estado de campaña con:

```text
vigilia
memoryShards
legacyRelic
```

Las partidas anteriores reciben valores seguros por defecto.

## Uso local

Para pruebas completas de PWA y Service Worker:

```bash
python -m http.server 8080
```

Después:

```text
http://localhost:8080
```

## GitHub Pages

1. Publica el contenido de la raíz del repositorio.
2. `Settings > Pages`.
3. `Deploy from a branch`.
4. Rama `main`, carpeta `/root`.

Todas las rutas son relativas al repositorio.

## Estructura principal

```text
index.html
styles.css
v4.css

campaign-core.js
campaign-epilogues.js
campaign-exp-1.js
campaign-exp-2.js
campaign-exp-3.js
campaign-exp-4.js
campaign-crosslinks.js
campaign-meta-1.js
campaign-meta-2.js

app.js
v3-content.js
v3-engine-1.js
v3-engine-2.js
v3-engine-3.js
v3-engine-4.js
v4-definitive.js

service-worker.js
manifest.webmanifest

assets/
  icon.svg
  icon-192.png
  icon-512.png
  icon-maskable-512.png
  apple-touch-icon.png

README.md
CHANGELOG.md
AUDIT_REPORT.md
TEST_REPORT.md
VERSION.txt
LICENSE
```

## Arquitectura y compatibilidad

La v4 se ha diseñado como una capa compatible sobre el motor validado de Campaña Ω v3 para evitar una migración destructiva del contenido y de los guardados.

La consolidación futura del motor puede realizarse sin cambiar las reglas de campaña definidas por v4.

## Nota legal

Proyecto homenaje con textos originales escritos para el juego. No incluye traducciones extensas, páginas de libros ni ilustraciones protegidas de las obras de referencia.

## Licencia

MIT.
