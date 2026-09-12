'use strict';
window.VIGILIA_CAMPAIGN = window.VIGILIA_CAMPAIGN || {};
window.VIGILIA_CAMPAIGN["version"] = "3.0.0";
window.VIGILIA_CAMPAIGN["arcs"] = [
  {
    "id": "marea",
    "name": "La marea que recuerda",
    "cases": [
      "cthulhu",
      "innsmouth",
      "dagon"
    ],
    "need": 2
  },
  {
    "id": "linaje",
    "name": "La sangre que insiste",
    "cases": [
      "west",
      "dunwich",
      "tomb",
      "ward"
    ],
    "need": 3
  },
  {
    "id": "sueno",
    "name": "Cartografía del sueño",
    "cases": [
      "kadath",
      "zann",
      "witch_house"
    ],
    "need": 2
  },
  {
    "id": "nohumano",
    "name": "Archivo no humano",
    "cases": [
      "colour",
      "mountains",
      "whisperer",
      "time_shadow"
    ],
    "need": 3
  },
  {
    "id": "culto",
    "name": "Los nombres bajo la ciudad",
    "cases": [
      "carter",
      "nyarlathotep",
      "nameless_city",
      "pickman",
      "shunned_house",
      "festival"
    ],
    "need": 4
  }
];
window.VIGILIA_CAMPAIGN["themes"] = {
  "carter": "grave",
  "west": "flesh",
  "cthulhu": "sea",
  "colour": "cosmic",
  "dunwich": "rural",
  "innsmouth": "sea",
  "mountains": "ice",
  "kadath": "dream",
  "dagon": "sea",
  "tomb": "grave",
  "nyarlathotep": "theatre",
  "nameless_city": "desert",
  "zann": "music",
  "pickman": "tunnel",
  "shunned_house": "flesh",
  "festival": "ritual",
  "ward": "alchemy",
  "whisperer": "signal",
  "witch_house": "geometry",
  "time_shadow": "time",
  "abyss": "abyss"
};
window.VIGILIA_CAMPAIGN["motifs"] = {
  "dagon": {
    "evidence": "la sal dibujada en la sábana",
    "witness": "el miedo del personal del puerto",
    "trace": "las marcas que bajan a la dársena",
    "method": "el boceto de la grieta",
    "threshold": "la lengua de lodo que no debería emerger",
    "safeguard": "la muestra de barro abisal",
    "core": "el monolito que palpita con la marea",
    "proof": "el signo copiado de la piedra",
    "closing": "el informe marítimo y el boceto",
    "lie": "la versión de una simple anomalía de marea",
    "threat": "algo golpea la madera desde abajo"
  },
  "tomb": {
    "evidence": "la cronología imposible de la familia",
    "witness": "la cortesía anacrónica del muchacho",
    "trace": "la tinta nueva sobre páginas centenarias",
    "method": "tu propio apellido en el margen",
    "threshold": "el mausoleo que abre al oír un nombre",
    "safeguard": "la tiza trazada en la puerta",
    "core": "la silla vacía de la cripta",
    "proof": "el retrato vuelto que conserva otra época",
    "closing": "el acta testamentaria",
    "lie": "un diagnóstico que convierta herencia en enfermedad",
    "threat": "los muertos ensayan voces de los vivos"
  },
  "nyarlathotep": {
    "evidence": "los carteles que cambian al apartar la mirada",
    "witness": "la multitud que ríe antes de tiempo",
    "trace": "los aparatos conectados a fotografías",
    "method": "la entrada que ya lleva tu firma",
    "threshold": "la cabina eléctrica y sus futuros impresos",
    "safeguard": "una bobina cortada a tiempo",
    "core": "la calle infinita detrás del telón",
    "proof": "la entrada con una fecha que aún no ha ocurrido",
    "closing": "la crónica de la función única",
    "lie": "una reseña censurada que borre los nombres",
    "threat": "el demostrador continúa hablando desde la luz"
  },
  "nameless_city": {
    "evidence": "las torres erosionadas antes de toda memoria",
    "witness": "la negativa de los guías a cruzar la avenida",
    "trace": "el aire frío que sale de puertas demasiado bajas",
    "method": "los dibujos de una arquitectura no humana",
    "threshold": "la escalera que baja sin cambiar de dirección",
    "safeguard": "las marcas dejadas cada trece peldaños",
    "core": "la procesión reptiliana de los bajorrelieves",
    "proof": "el calco tomado de la galería",
    "closing": "el cuaderno de campo y sus coordenadas",
    "lie": "un informe arqueológico sin ubicación exacta",
    "threat": "el viento del subsuelo aprende el camino de regreso"
  },
  "zann": {
    "evidence": "la ruta imposible de Rue d’Auseil",
    "witness": "el silencio aterrorizado del portero",
    "trace": "la escalera que deforma el recuerdo",
    "method": "el patrón escondido en el violín",
    "threshold": "la buhardilla con la ventana cubierta",
    "safeguard": "la cortina sostenida durante el último compás",
    "core": "el vacío que responde a la música",
    "proof": "los pentagramas que recuerdan el camino",
    "closing": "la partitura incompleta",
    "lie": "la promesa de no volver a tocar esas notas",
    "threat": "un silencio afinado espera detrás del cristal"
  },
  "pickman": {
    "evidence": "el lienzo mordido desde el reverso",
    "witness": "las evasivas del marchante",
    "trace": "los mapas que unen sótanos y cementerios",
    "method": "la cámara y sus negativos demasiado nítidos",
    "threshold": "los túneles arañados hacia abajo",
    "safeguard": "el último negativo de Pickman",
    "core": "el agujero negro frente a la silla infantil",
    "proof": "la fotografía de un modelo real",
    "closing": "el catálogo privado",
    "lie": "una exposición censurada que llame fantasía a lo documentado",
    "threat": "algo practica una pose al otro lado del muro"
  },
  "shunned_house": {
    "evidence": "la cadena de muertes repetidas en la misma dirección",
    "witness": "los vecinos que aún evitan mirar la fachada",
    "trace": "la humedad que dibuja perfiles humanos",
    "method": "el residuo que se mueve al respirar",
    "threshold": "el muro que oculta tierra amarilla",
    "safeguard": "el círculo de cal sobre el suelo",
    "core": "la raíz que absorbe nombres y fiebre",
    "proof": "el frasco de humedad amarilla",
    "closing": "la orden de demolición y las muestras",
    "lie": "una explicación de moho, herencia y mala ventilación",
    "threat": "la casa vuelve a formar un rostro con el yeso"
  },
  "festival": {
    "evidence": "la invitación que late dentro del abrigo",
    "witness": "los vecinos que procesionan sin dejar huellas",
    "trace": "el libro encuadernado en una materia sin nombre",
    "method": "el índice de un ceremonial heredado",
    "threshold": "la iglesia cuyo suelo se abre hacia túneles calientes",
    "safeguard": "la ceniza usada para recordar la salida",
    "core": "las monturas membranosas bajo Kingsport",
    "proof": "la máscara ceremonial sin ojos",
    "closing": "la carta familiar sellada hace un siglo",
    "lie": "una disputa de herencia que borre la procesión",
    "threat": "las máscaras siguen inclinándose aunque nadie las lleve"
  },
  "ward": {
    "evidence": "el polvo gris de una fuga imposible",
    "witness": "el relato del médico familiar",
    "trace": "las dos caligrafías separadas por siglos",
    "method": "las fórmulas ocultas tras los paneles",
    "threshold": "la biblioteca de sales etiquetadas con nombres",
    "safeguard": "la clasificación de los recipientes humanos",
    "core": "la figura que recuerda haber sido joven",
    "proof": "el frasco de sales innominadas",
    "closing": "el dictamen sobre Charles Dexter Ward",
    "lie": "una versión clínica que proteja a la familia",
    "threat": "algo bajo Pawtuxet insiste en ser restaurado"
  },
  "whisperer": {
    "evidence": "las cartas manchadas de barro",
    "witness": "la prudencia del sheriff ante la colina",
    "trace": "el fonógrafo que conversa con una voz no humana",
    "method": "las frecuencias escondidas en la grabación",
    "threshold": "el cuarto de radio orientado a las estrellas",
    "safeguard": "la antena cortada antes del contacto",
    "core": "el profesor cuya voz no coincide con su cuerpo",
    "proof": "el cilindro con coordenadas interestelares",
    "closing": "la transcripción de la última señal",
    "lie": "un expediente rural sobre fraude y aislamiento",
    "threat": "unas alas sin pájaro rozan los pinos"
  },
  "witch_house": {
    "evidence": "las ecuaciones mezcladas con folklore",
    "witness": "el miedo febril del estudiante",
    "trace": "las curvas ocultas bajo el yeso",
    "method": "la geometría que funciona como permiso",
    "threshold": "el ángulo que abre más de una Arkham",
    "safeguard": "la cuerda atada al marco de la cama",
    "core": "la bruja moviéndose entre coordenadas",
    "proof": "el cuaderno de geometría no euclidiana",
    "closing": "la ecuación final de sellado",
    "lie": "una explicación psiquiátrica de los cálculos",
    "threat": "la esquina de la habitación cambia cuando parpadeas"
  },
  "time_shadow": {
    "evidence": "los años perdidos del profesor",
    "witness": "su recuerdo de una vida prestada",
    "trace": "los mapas de una ciudad bajo arena roja",
    "method": "los dibujos comparados con estratos reales",
    "threshold": "los signos que se leen de pasado a futuro",
    "safeguard": "la tablilla con una fecha imposible",
    "core": "la biblioteca de mentes prestadas",
    "proof": "el registro donde aparece tu propio nombre",
    "closing": "la memoria sellada del viaje",
    "lie": "una versión médica de la amnesia",
    "threat": "un recuerdo futuro intenta ocupar el presente"
  }
};
