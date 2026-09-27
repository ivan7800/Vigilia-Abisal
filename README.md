# Vigilia Abisal · Director's Cut v4.1.0

RPG narrativo de horror cósmico en solitario, **offline-first**, sin backend, sin CDN, sin telemetría y preparado para GitHub Pages.

## Qué aporta Director's Cut

La v4.1 mantiene intacta la campaña de la Edición Definitiva y añade profundidad donde más se notaba: consecuencias a largo plazo, acontecimientos memorables y una puesta en escena más física.

- **20 expedientes principales + Archivo Ω**.
- **128 escenas** y **289 decisiones** en la campaña base.
- **8 investigadores** con talento profesional contextual propio.
- **20 perfiles de cicatriz de doble filo**.
- **15 consecuencias retardadas**: el desenlace de un expediente anterior puede volver horas después y cambiar el estado de otro caso.
- **7 documentos imposibles** ligados al progreso de campaña y a Nueva Vigilia+.
- **5 convergencias** con Mapa Ω.
- Continuidad entre expedientes mediante flags, reliquias, crosslinks y ahora también efectos retardados.
- **Nueva Vigilia+** con cicatrices, reliquia heredada y ecos de memoria.
- Alucinaciones de baja Cordura.
- Capa visual de expediente: códigos de evidencia, sellos, copias de trabajo y documentos no indexados.
- Señales sonoras procedurales por tema usando Web Audio, sin archivos externos.
- PWA y funcionamiento offline conservados.

## Consecuencias retardadas

Director's Cut añade quince enlaces de largo alcance. Se activan solo si el expediente de origen se cerró antes que el expediente destino y el efecto depende del tipo de desenlace conseguido.

Ejemplos:

- Carter puede alterar la lectura de las señales de *El que susurra en la oscuridad*.
- West puede convertir una parte de Ward en una continuación química de su investigación.
- Innsmouth puede reaparecer entre los modelos de Pickman.
- Kadath puede cambiar la forma de interpretar la música de Zann.
- Pickman puede anticipar la arquitectura orgánica de *La casa evitada*.

Una consecuencia puede conceder pistas o Insight, aumentar Presagio o erosionar Cordura. Los efectos combinados están limitados para no romper el equilibrio del motor.

## Documentos imposibles

El listado de expedientes puede mostrar, en momentos concretos, elementos que no pertenecen a la campaña normal. Son acontecimientos únicos y persistentes:

1. **Expediente 0 · el investigador** tras los primeros casos.
2. **El índice se ha movido** al detectar la primera convergencia.
3. **Negativo 7-B** después de siete expedientes.
4. **Expediente XXI · El investigador** a mitad de campaña.
5. **Una puerta sin dirección** cuando Archivo Ω empieza a ser accesible.
6. **El índice completo** al reunir los veinte expedientes y cinco convergencias.
7. **Copia II** en Nueva Vigilia+.

No son simples mensajes: quedan registrados, pueden afectar Cordura/Insight/Presagio y forman parte de la ficción del Archivo Ω.

## Sistema de tiradas

La base sigue siendo:

```text
d12 + d6 + atributo + veteranía + vínculo - Presagio
```

La Edición Definitiva añade:

```text
+ talento profesional
+/- cicatriz activa
```

Director's Cut no cambia la fórmula central. Las consecuencias retardadas modifican el estado antes de una investigación, no la matemática base de cada tirada.

## Talentos profesionales

- **Anticuario/a — Memoria de archivo**
- **Detective privado — Ojo entrenado**
- **Médico/a de Miskatonic — Frialdad clínica**
- **Periodista ocultista — Fuente confidencial**
- **Soñador/a lúcido — Ancla onírica**
- **Contrabandista de puerto — Instinto de fuga**
- **Lingüista de Aklo — Lenguas que no deberían existir**
- **Geólogo/a polar — Lectura del estrato**

## Cicatrices vivas

Cada trauma tiene doble filo. Puede conceder una ventaja contextual y una penalización en otro atributo del mismo tipo de horror. La hoja muestra su nombre y efecto narrativo.

## Mapa Ω y Archivo Ω

Las cinco convergencias siguen siendo:

1. La marea que recuerda.
2. La sangre que insiste.
3. Cartografía del sueño.
4. Archivo no humano.
5. Los nombres bajo la ciudad.

Archivo Ω se desbloquea mediante la metaprogresión de la campaña. El desenlace verdadero exige los 20 expedientes, las 5 convergencias e Insight suficiente.

La revelación central permanece: **el archivo no solo clasifica horrores; también ha estado estudiando al investigador**.

## Nueva Vigilia+

Tras cerrar Archivo Ω puede iniciarse una nueva iteración. Se reinician expedientes, XP e Insight; se conservan cicatrices y una reliquia, aumenta el número de Vigilia y aparecen ecos de memoria. Director's Cut añade además una **Copia II** imposible del archivo después del primer caso de una nueva Vigilia.

## Dirección audiovisual

La v4.1 usa una capa ligera y completamente local:

- código de evidencia por escena;
- textura documental y sellos de archivo;
- documentos no indexados integrados en el listado de casos;
- transiciones muy breves de escena;
- señal sonora procedural distinta según mar, sueño, carne, hielo, señal, geometría, tiempo, etc.;
- compatibilidad con `prefers-reduced-motion`.

No se descargan imágenes, fuentes, audio ni scripts externos.

## Privacidad y seguridad

- Sin login.
- Sin analíticas ni telemetría.
- Sin API remota, CDN ni backend.
- `localStorage` para guardados.
- Importación/exportación JSON saneada.
- CSP restrictiva.
- Recursos servidos desde el propio origen.

## Guardados

Director's Cut **no cambia el esquema de guardado**. Los nuevos acontecimientos y consecuencias usan flags saneados dentro del estado existente, por lo que las partidas de v4 siguen siendo compatibles.

## Uso local

Para probar PWA y Service Worker:

```bash
python -m http.server 8080
```

Después abre `http://localhost:8080`.

## GitHub Pages

1. Publica el contenido de la raíz del repositorio.
2. `Settings > Pages`.
3. `Deploy from a branch`.
4. Rama `main`, carpeta `/root`.

## Estructura principal

```text
index.html
styles.css
v4.css
v4.1-directors-cut.css
campaign-core.js
campaign-epilogues.js
campaign-exp-1.js ... campaign-exp-4.js
campaign-crosslinks.js
campaign-meta-1.js
campaign-meta-2.js
app.js
v3-content.js
v3-engine-1.js ... v3-engine-4.js
v4-definitive.js
v4.1-directors-cut.js
service-worker.js
manifest.webmanifest
assets/
  icon.svg
  icon-192.png
  apple-touch-icon.png
README.md
CHANGELOG.md
AUDIT_REPORT.md
TEST_REPORT.md
VERSION.txt
LICENSE
```

## Arquitectura y compatibilidad

La v4.1 sigue el enfoque no destructivo de la v4: se carga después del motor validado y envuelve únicamente puntos de extensión concretos (`renderStage`, `renderCases` y `showModal`). Esto mantiene la semántica de los 20 expedientes y facilita retirar la capa sin alterar el contenido base.

## Nota legal

Proyecto homenaje con textos originales escritos para el juego. No incluye traducciones extensas, páginas de libros ni ilustraciones protegidas de las obras de referencia.

## Licencia

MIT.
