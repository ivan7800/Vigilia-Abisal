# Vigilia Abisal · Campaña Ω v3.0.0

RPG narrativo de horror cósmico en solitario, **offline-first**, sin backend ni dependencias externas y preparado para GitHub Pages.

## Qué cambia en v3

La v3 deja atrás la estructura lineal de la edición anterior y convierte los expedientes en una campaña conectada:

- **20 expedientes principales + Archivo Ω** como final de metacampaña.
- **128 escenas** y **289 decisiones**.
- Expedientes IX–XX ampliados de 5 a 7 escenas, con rutas secundarias y revelaciones propias.
- Los textos de resolución repetidos de IX–XX se han sustituido por respuestas específicas de cada caso.
- **Objetos útiles**: las reliquias obtenidas pueden desbloquear una tercera forma de resolver cada expediente.
- **Continuidad entre expedientes**: flags y objetos de casos anteriores desbloquean decisiones especiales en casos posteriores.
- **Dificultad real**: la dificultad del expediente aplica Presión a la DC efectiva de las tiradas.
- **Progresión**: XP, nivel, Insight, cicatrices y bonificaciones de veteranía.
- **5 convergencias de campaña** que conectan mar, linaje, sueño, archivo no humano y culto.
- **Archivo Ω** se desbloquea tras 12 expedientes y 4 convergencias; el final verdadero exige completar los 20, las 5 convergencias y suficiente Insight.
- Epílogos específicos para los desenlaces principales de cada expediente.
- Capa visual temática por tipo de horror y panel de progreso de campaña.
- PWA mejorada con iconos PNG 192/512, `apple-touch-icon`, actualización de caché y shell offline.

## Mecánica

Cada tirada usa:

```text
d12 + d6 + atributo + veteranía + bonificaciones - Presagio
```

La DC efectiva añade la **Presión del expediente** según su dificultad.

El nivel de veteranía se obtiene con XP al cerrar casos por primera vez. Las repeticiones no permiten farmear XP; mejorar un desenlace puede conceder Insight adicional.

## Convergencias

La campaña detecta relaciones entre expedientes y desbloquea cinco sellos:

1. La marea que recuerda.
2. La sangre que insiste.
3. Cartografía del sueño.
4. Archivo no humano.
5. Los nombres bajo la ciudad.

Estas convergencias no son solo decorativas: determinan el acceso y las opciones del Archivo Ω.

## Privacidad

- Sin login.
- Sin analíticas ni telemetría.
- Sin API remota.
- Sin CDN.
- Sin backend.
- Partidas guardadas en `localStorage`.
- Exportación/importación JSON saneada.
- CSP restrictiva.

## Guardados

La v3 usa el esquema de guardado **v4** y la clave `vigiliaAbisal.save.v2`.

Se migran automáticamente partidas antiguas desde:

- `vigiliaAbisal.save.v1`
- `investigador404.save.v1`

Los casos cerrados de versiones anteriores reciben XP e Insight retroactivos al migrar.

## Uso local

La app puede abrirse directamente con `index.html` para jugar. Para probar PWA y Service Worker usa un servidor HTTP local:

```bash
python -m http.server 8080
```

Después abre:

```text
http://localhost:8080
```

## GitHub Pages

1. Crea o usa un repositorio.
2. Sube **el contenido de esta carpeta a la raíz**.
3. En `Settings > Pages`, selecciona `Deploy from a branch`.
4. Elige `main` y `/root`.
5. Publica.

Todas las rutas de recursos son relativas y el Service Worker trabaja dentro del scope del repositorio.

## Estructura

```text
index.html
styles.css
campaign.js      # contenido, epílogos, expansiones y metacampaña
app.js           # motor, estado, UI, tiradas, guardado y progresión
service-worker.js
manifest.webmanifest
assets/
README.md
CHANGELOG.md
AUDIT_REPORT.md
TEST_REPORT.md
VERSION.txt
LICENSE
```

## Nota legal

Proyecto homenaje con textos originales escritos para el juego. No incluye traducciones extensas, páginas de libros ni ilustraciones protegidas de las obras de referencia.

## Licencia

MIT.
