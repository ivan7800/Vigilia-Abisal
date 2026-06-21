'use strict';

const DATA = {
  "archetypes": [
    {
      "id": "antiquarian",
      "name": "Anticuario/a",
      "desc": "Domina archivos, genealogías y objetos imposibles.",
      "stats": {
        "razon": 4,
        "percepcion": 5,
        "temple": 3,
        "movimiento": 2,
        "presencia": 3,
        "ocultismo": 5
      },
      "sanity": 32,
      "health": 18,
      "items": [
        "Lupa de latón",
        "Cuaderno de catálogos"
      ]
    },
    {
      "id": "detective",
      "name": "Detective privado",
      "desc": "Útil cuando las pistas muerden y los testigos callan.",
      "stats": {
        "razon": 3,
        "percepcion": 5,
        "temple": 4,
        "movimiento": 4,
        "presencia": 4,
        "ocultismo": 2
      },
      "sanity": 34,
      "health": 20,
      "items": [
        "Revólver descargado",
        "Ganzúa sencilla"
      ]
    },
    {
      "id": "doctor",
      "name": "Médico/a de Miskatonic",
      "desc": "Frialdad clínica ante cuerpos que no aceptan su diagnóstico.",
      "stats": {
        "razon": 5,
        "percepcion": 3,
        "temple": 5,
        "movimiento": 2,
        "presencia": 3,
        "ocultismo": 3
      },
      "sanity": 35,
      "health": 19,
      "items": [
        "Maletín médico",
        "Sales de amoníaco"
      ]
    },
    {
      "id": "journalist",
      "name": "Periodista ocultista",
      "desc": "Convierte rumores en mapas y mentiras en expedientes.",
      "stats": {
        "razon": 3,
        "percepcion": 4,
        "temple": 3,
        "movimiento": 3,
        "presencia": 5,
        "ocultismo": 4
      },
      "sanity": 33,
      "health": 18,
      "items": [
        "Cámara compacta",
        "Credencial dudosa"
      ]
    },
    {
      "id": "dreamer",
      "name": "Soñador/a lúcido",
      "desc": "Viaja mejor donde la lógica empieza a perder autoridad.",
      "stats": {
        "razon": 2,
        "percepcion": 4,
        "temple": 5,
        "movimiento": 3,
        "presencia": 3,
        "ocultismo": 5
      },
      "sanity": 36,
      "health": 17,
      "items": [
        "Ancla de plata",
        "Diario de sueños"
      ]
    },
    {
      "id": "smuggler",
      "name": "Contrabandista de puerto",
      "desc": "Corre, negocia y sobrevive en sitios que no salen en los mapas.",
      "stats": {
        "razon": 2,
        "percepcion": 4,
        "temple": 4,
        "movimiento": 5,
        "presencia": 4,
        "ocultismo": 2
      },
      "sanity": 34,
      "health": 21,
      "items": [
        "Navaja oxidada",
        "Mapa costero"
      ]
    },
    {
      "id": "linguist",
      "name": "Lingüista de Aklo",
      "desc": "Lee alfabetos muertos, glosas prohibidas y mensajes que no deberían tener gramática.",
      "stats": {
        "razon": 5,
        "percepcion": 3,
        "temple": 3,
        "movimiento": 2,
        "presencia": 4,
        "ocultismo": 5
      },
      "sanity": 34,
      "health": 17,
      "items": [
        "Gramática de Aklo anotada",
        "Lápiz de carbón azul"
      ]
    },
    {
      "id": "geologist",
      "name": "Geólogo/a polar",
      "desc": "Reconoce estratos, meteoritos y ruinas que preceden a la humanidad.",
      "stats": {
        "razon": 4,
        "percepcion": 5,
        "temple": 4,
        "movimiento": 3,
        "presencia": 2,
        "ocultismo": 3
      },
      "sanity": 35,
      "health": 20,
      "items": [
        "Martillo geológico",
        "Brújula de campaña"
      ]
    }
  ],
  "statNames": {
    "razon": "Razón",
    "percepcion": "Percepción",
    "temple": "Temple",
    "movimiento": "Movimiento",
    "presencia": "Presencia",
    "ocultismo": "Ocultismo"
  },
  "cases": [
    {
      "id": "carter",
      "title": "Expediente I · La voz bajo la losa",
      "source": "Inspirado en El testimonio de Randolph Carter",
      "difficulty": 11,
      "badge": "PANTANO · CEMENTERIO · TELEFONÍA",
      "intro": "Un colega ha desaparecido tras una expedición nocturna a una necrópolis hundida. Solo queda un cable verde que baja por una abertura imposible.",
      "stages": [
        {
          "id": "start",
          "location": "Camino de Gainesville · 23:41",
          "art": "☾",
          "text": "La carretera termina en barro negro. Dos vecinos afirman haber visto luces eléctricas entre los cipreses. En tu bolsillo, una nota: «no desciendas si oyes una segunda voz». La luna parece mojada.",
          "choices": [
            {
              "label": "Seguir las huellas hasta la hondonada",
              "stat": "percepcion",
              "dc": 10,
              "success": {
                "text": "Encuentras marcas de botas, un trozo de cable aislado y una azada reciente. No estás solo, pero aún vas delante.",
                "next": "tomb",
                "effects": {
                  "clues": 1,
                  "dread": 1,
                  "note": "Rastro confirmado hasta el cementerio."
                }
              },
              "fail": {
                "text": "El pantano borra el camino. Pierdes tiempo y algo parece caminar dentro del agua sin romper la superficie.",
                "next": "tomb",
                "effects": {
                  "sanity": -2,
                  "dread": 2,
                  "note": "Llegas tarde a la hondonada."
                }
              }
            },
            {
              "label": "Interrogar al último testigo",
              "stat": "presencia",
              "dc": 11,
              "success": {
                "text": "El anciano habla tras ver tu placa improvisada. Vio a dos hombres, un libro envuelto y un rollo de cable. Repite una frase: «uno volvió con la mirada vacía». ",
                "next": "tomb",
                "effects": {
                  "clues": 2,
                  "note": "El testigo menciona un libro cubierto."
                }
              },
              "fail": {
                "text": "El testigo cierra la puerta. Desde dentro recita una oración al revés. Te marchas con la garganta seca.",
                "next": "tomb",
                "effects": {
                  "sanity": -1,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "tomb",
          "location": "Hondonada funeraria · 00:17",
          "art": "▨",
          "text": "La tumba está abierta. El cable baja por peldaños mojados de salitre. Un auricular militar cuelga de una lápida. Al tocarlo, una respiración lenta responde desde abajo.",
          "choices": [
            {
              "label": "Escuchar el auricular sin hablar",
              "stat": "temple",
              "dc": 12,
              "success": {
                "text": "Distingues dos sonidos: una persona llorando muy lejos y otra cosa imitando la respiración humana. Anotas el ritmo antes de que cambie.",
                "next": "signal",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "item": "Patrón de respiración imposible",
                  "note": "La voz imita señales humanas."
                }
              },
              "fail": {
                "text": "La respiración se sincroniza con la tuya. Durante un minuto olvidas cómo se parpadea.",
                "next": "signal",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Bajar tres tramos con cuerda",
              "stat": "movimiento",
              "dc": 12,
              "success": {
                "text": "Llegas a una repisa donde la piedra está grabada por uñas desde dentro. Recuperas una placa metálica con iniciales que no son de tu siglo.",
                "next": "crypt",
                "effects": {
                  "clues": 2,
                  "health": -1,
                  "item": "Placa anacrónica",
                  "note": "Hay señales físicas bajo la losa."
                }
              },
              "fail": {
                "text": "Un peldaño cede. Caes contra la pared y el hedor te llena la boca. Subes antes de oír tu nombre desde abajo.",
                "next": "signal",
                "effects": {
                  "health": -3,
                  "sanity": -1,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "signal",
          "location": "Borde de la abertura · 00:44",
          "art": "☎",
          "text": "El auricular chasquea. Una voz débil pide ayuda. Otra, más grave, repite tus últimas palabras con un segundo de retraso. La losa vibra como si algo empujara desde abajo.",
          "choices": [
            {
              "label": "Responder con preguntas técnicas",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "La imitación falla cuando preguntas por detalles imposibles de saber. La voz humana susurra una coordenada dentro de la cripta.",
                "next": "crypt",
                "effects": {
                  "clues": 2,
                  "note": "Coordenada interna obtenida."
                }
              },
              "fail": {
                "text": "La cosa aprende demasiado deprisa. Ahora usa tu voz para pedirte que bajes.",
                "next": "crypt",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Cortar el cable y sellar la tumba",
              "stat": "temple",
              "dc": 13,
              "success": {
                "text": "Cortas el cable. El grito que sube no es humano ni animal. La losa cae y algo golpea tres veces desde dentro.",
                "next": "final",
                "effects": {
                  "clues": 1,
                  "sanity": -2,
                  "flag": "sealed",
                  "note": "La tumba queda sellada."
                }
              },
              "fail": {
                "text": "Tus manos tiemblan. El cable se enreda en tu muñeca y tira de ti con fuerza húmeda.",
                "next": "crypt",
                "effects": {
                  "health": -2,
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        },
        {
          "id": "crypt",
          "location": "Cámara inferior · hora indeterminada",
          "art": "☍",
          "text": "Abajo, la cámara no cabe bajo el cementerio. Hay nichos abiertos hacia un cielo negro sin estrellas. En el centro, una silla vacía conserva calor humano.",
          "choices": [
            {
              "label": "Buscar al desaparecido antes de huir",
              "stat": "percepcion",
              "dc": 14,
              "success": {
                "text": "No encuentras su cuerpo, pero sí su diario. La última página no está escrita: está mordida desde dentro del papel.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -2,
                  "item": "Diario mordido",
                  "note": "Prueba recuperada de la cámara."
                }
              },
              "fail": {
                "text": "Algo te toca el hombro desde un nicho vacío. Cuando miras, solo hay sombra con forma de mano.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Marcar la cámara con sal y retirarse",
              "stat": "ocultismo",
              "dc": 13,
              "success": {
                "text": "La sal hierve sobre la piedra. Lo que observa desde los nichos retrocede, no por miedo, sino por cortesía antigua.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "flag": "warded",
                  "note": "Señal de contención temporal."
                }
              },
              "fail": {
                "text": "El círculo queda incompleto. Una voz agradece que le hayas enseñado una salida.",
                "next": "final",
                "effects": {
                  "sanity": -3,
                  "dread": 3
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Informe final · amanecer",
          "art": "✎",
          "text": "La necrópolis vuelve a parecer pequeña. Tus notas huelen a tierra recién abierta. Debes decidir qué versión entregar al mundo.",
          "choices": [
            {
              "label": "Publicar el expediente completo",
              "stat": "presencia",
              "dc": 14,
              "success": {
                "text": "Nadie te cree, pero varios investigadores te escriben en secreto. Has abierto una red de casos prohibidos.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "flag": "publicTruth"
                }
              },
              "fail": {
                "text": "Te ridiculizan. Esa misma noche, tres lectores sueñan con tu voz pidiendo ayuda desde una tumba.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Archivar el caso como accidente",
              "stat": "razon",
              "dc": 10,
              "success": {
                "text": "El expediente oficial queda limpio. En tu archivo privado guardas el auricular, todavía tibio.",
                "next": "END_SURVIVE",
                "effects": {
                  "flag": "silentArchive"
                }
              },
              "fail": {
                "text": "Olvidas un dato menor: tu firma aparece al pie de una declaración escrita mañana.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "west",
      "title": "Expediente II · El suero del sexto cadáver",
      "source": "Inspirado en Herbert West, reanimador",
      "difficulty": 12,
      "badge": "MISKATONIC · ANATOMÍA · REANIMACIÓN",
      "intro": "Un laboratorio clandestino ha desaparecido de los registros universitarios. En su lugar queda una granja vacía donde los animales se niegan a morir del todo.",
      "stages": [
        {
          "id": "start",
          "location": "Archivo médico de Arkham · 18:10",
          "art": "⚕",
          "text": "Una becaria te entrega seis informes tachados. Todos describen cadáveres recientes con signos de actividad posterior a la muerte. Al margen aparece una fórmula incompleta.",
          "choices": [
            {
              "label": "Reconstruir la fórmula por lógica química",
              "stat": "razon",
              "dc": 12,
              "success": {
                "text": "La fórmula no cura: reinicia. Entiendes por qué cada variante necesita un cuerpo más fresco que el anterior.",
                "next": "farm",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "item": "Fórmula incompleta",
                  "note": "La reanimación depende del deterioro celular."
                }
              },
              "fail": {
                "text": "Un error de lectura libera un olor dulzón. Durante segundos tu pulso no aparece en la muñeca.",
                "next": "farm",
                "effects": {
                  "health": -1,
                  "sanity": -2
                }
              }
            },
            {
              "label": "Buscar al proveedor de cadáveres",
              "stat": "presencia",
              "dc": 11,
              "success": {
                "text": "El enterrador niega todo hasta que le muestras una inicial. Te da la ubicación de una granja sin nombre.",
                "next": "farm",
                "effects": {
                  "clues": 1,
                  "note": "Ruta hacia la granja Chapman."
                }
              },
              "fail": {
                "text": "El enterrador sonríe demasiado. Al salir, notas tierra fresca bajo tus uñas.",
                "next": "farm",
                "effects": {
                  "sanity": -1,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "farm",
          "location": "Granja abandonada · 21:03",
          "art": "▤",
          "text": "Las ventanas están cubiertas con lona. Dentro hay camillas, vidrio roto y jaulas mordidas desde el interior. Algo araña bajo el suelo de madera.",
          "choices": [
            {
              "label": "Abrir el sótano con una palanca",
              "stat": "movimiento",
              "dc": 12,
              "success": {
                "text": "Bajas antes de que la trampilla se cierre. Hay seis nichos numerados y el sexto está vacío desde dentro.",
                "next": "basement",
                "effects": {
                  "clues": 2,
                  "health": -1,
                  "note": "El sexto espécimen escapó."
                }
              },
              "fail": {
                "text": "La madera se parte. Tu pierna queda atrapada y algo respira a centímetros de tus botas.",
                "next": "basement",
                "effects": {
                  "health": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Fotografiar el laboratorio antes de tocar nada",
              "stat": "percepcion",
              "dc": 12,
              "success": {
                "text": "El flash revela una silueta que no estaba visible a simple vista: una cosa de pie detrás de ti, mirando la fórmula.",
                "next": "specimen",
                "effects": {
                  "clues": 2,
                  "sanity": -2,
                  "item": "Placas fotográficas veladas"
                }
              },
              "fail": {
                "text": "Las fotos salen negras salvo por tus ojos, multiplicados en todas las superficies metálicas.",
                "next": "basement",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "basement",
          "location": "Sótano quirúrgico · 21:26",
          "art": "☤",
          "text": "Las paredes están acolchadas desde dentro. En una mesa hay correas rotas. Una voz joven, educada, pregunta si eres el doctor.",
          "choices": [
            {
              "label": "Hacerte pasar por ayudante médico",
              "stat": "presencia",
              "dc": 13,
              "success": {
                "text": "La voz obedece. Te guía hasta un armario con muestras y confiesa que «los otros» ya recuerdan dónde fueron enterrados.",
                "next": "specimen",
                "effects": {
                  "clues": 2,
                  "item": "Viales numerados",
                  "note": "Los reanimados conservan memoria parcial."
                }
              },
              "fail": {
                "text": "La voz ríe con una boca que aún no has visto. Las correas se tensan solas.",
                "next": "specimen",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Quemar las muestras",
              "stat": "temple",
              "dc": 13,
              "success": {
                "text": "El fuego se vuelve verde y algo chilla desde varias gargantas. Has destruido una rama del experimento.",
                "next": "final",
                "effects": {
                  "clues": 1,
                  "sanity": -2,
                  "flag": "burnedSerum"
                }
              },
              "fail": {
                "text": "El alcohol no prende. La fórmula se mueve en el vidrio como si tuviera voluntad.",
                "next": "specimen",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        },
        {
          "id": "specimen",
          "location": "Corredor trasero · 21:39",
          "art": "☠",
          "text": "El sexto cadáver te espera junto a la puerta. No camina como un vivo, sino como una memoria mal colocada dentro de carne ajena.",
          "choices": [
            {
              "label": "Contenerlo con instrucciones clínicas",
              "stat": "razon",
              "dc": 14,
              "success": {
                "text": "La criatura obedece a protocolos antiguos. Consigues encerrarla en la cámara fría antes de que recuerde tu nombre.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "flag": "containedSpecimen"
                }
              },
              "fail": {
                "text": "Usas una palabra equivocada. La cosa entiende que ya no está obligada a fingir ser paciente.",
                "next": "final",
                "effects": {
                  "health": -4,
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Huir con las pruebas",
              "stat": "movimiento",
              "dc": 13,
              "success": {
                "text": "Saltas por una ventana con los viales. Detrás de ti, alguien aprende a abrir pestillos.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "health": -1,
                  "item": "Suero sellado"
                }
              },
              "fail": {
                "text": "Llegas a la puerta y descubres que tiene suturas en vez de bisagras.",
                "next": "final",
                "effects": {
                  "health": -3,
                  "sanity": -2
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Comité universitario · día siguiente",
          "art": "§",
          "text": "Puedes denunciarlo todo o ocultar el suero para estudiarlo. La ciencia nunca ha parecido tan parecida al hambre.",
          "choices": [
            {
              "label": "Entregar viales y fotografías",
              "stat": "presencia",
              "dc": 12,
              "success": {
                "text": "El comité destruye el laboratorio y niega el escándalo. Tú conservas una copia del informe.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1
                }
              },
              "fail": {
                "text": "Te acusan de falsificar pruebas. Esa noche, un antiguo paciente llama a tu puerta para darte las gracias.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Guardar el suero como arma desesperada",
              "stat": "temple",
              "dc": 15,
              "success": {
                "text": "Lo guardas bajo llave. La llave envejece veinte años en una noche.",
                "next": "END_SURVIVE",
                "effects": {
                  "item": "Suero prohibido",
                  "sanity": -2
                }
              },
              "fail": {
                "text": "No puedes resistir mirar el vial. Dentro flota una miniatura de tu futuro cadáver.",
                "next": "END_MADNESS",
                "effects": {
                  "sanity": -6
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "cthulhu",
      "title": "Expediente III · La arcilla que soñaba con el mar",
      "source": "Inspirado en La llamada de Cthulhu",
      "difficulty": 13,
      "badge": "CULTO · SUEÑOS · PACÍFICO",
      "intro": "Un bajorrelieve de arcilla húmeda aparece en la mesa de un escultor sonámbulo. Cada noche cambia un detalle y el océano responde.",
      "stages": [
        {
          "id": "start",
          "location": "Estudio del escultor · 06:06",
          "art": "𓆗",
          "text": "La pieza de arcilla muestra una ciudad de ángulos incorrectos y una figura alada, cefalópoda, imposible de mirar del todo. El escultor jura que la hizo dormido.",
          "choices": [
            {
              "label": "Comparar el bajorrelieve con archivos arqueológicos",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "Encuentras coincidencias en informes dispersos: marineros, terremotos y cultos separados por continentes que dibujan lo mismo.",
                "next": "dreams",
                "effects": {
                  "clues": 2,
                  "note": "Patrón global detectado."
                }
              },
              "fail": {
                "text": "Los mapas no encajan. Durante una hora el Pacífico aparece en el centro de todos los continentes.",
                "next": "dreams",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            },
            {
              "label": "Entrevistar al escultor bajo hipnosis leve",
              "stat": "ocultismo",
              "dc": 12,
              "success": {
                "text": "Habla con voz submarina: «la piedra duerme pero no olvida». Al despertar, no reconoce su propia mano derecha.",
                "next": "dreams",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "note": "Los sueños son recepción, no imaginación."
                }
              },
              "fail": {
                "text": "La hipnosis se invierte. El escultor te interroga desde dentro de tu sueño de infancia.",
                "next": "dreams",
                "effects": {
                  "sanity": -3,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "dreams",
          "location": "Red mundial de testimonios · varias noches",
          "art": "◎",
          "text": "Poetas, marineros y enfermos febriles sueñan con torres verdes bajo una luna que gotea. Los periódicos hablan de disturbios y de mareas sin causa.",
          "choices": [
            {
              "label": "Construir una cronología de sueños",
              "stat": "percepcion",
              "dc": 13,
              "success": {
                "text": "Los sueños alcanzan un pico cada vez que el sismógrafo tiembla. Algo bajo el océano marca el ritmo.",
                "next": "cult",
                "effects": {
                  "clues": 2,
                  "item": "Cronología onírica"
                }
              },
              "fail": {
                "text": "La cronología forma una espiral. En el centro, tu fecha de nacimiento aparece escrita con tinta salada.",
                "next": "cult",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            },
            {
              "label": "Seguir el rastro de un inspector desaparecido",
              "stat": "movimiento",
              "dc": 12,
              "success": {
                "text": "Llegas a un almacén portuario con máscaras de barro y tambores forrados de piel desconocida.",
                "next": "cult",
                "effects": {
                  "clues": 1,
                  "health": -1
                }
              },
              "fail": {
                "text": "Tres hombres te siguen entre niebla de puerto. Los pierdes, pero alguien ha cosido un símbolo en tu abrigo.",
                "next": "cult",
                "effects": {
                  "health": -1,
                  "sanity": -1,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "cult",
          "location": "Muelle cerrado · 03:12",
          "art": "◌",
          "text": "El culto no parece adorar: parece esperar instrucciones. En el centro del almacén, la arcilla se humedece sin agua.",
          "choices": [
            {
              "label": "Infiltrarte en el rito",
              "stat": "presencia",
              "dc": 14,
              "success": {
                "text": "Repites una letanía inventada y nadie nota la diferencia. El líder revela una coordenada imposible al sur del Pacífico.",
                "next": "sea",
                "effects": {
                  "clues": 3,
                  "sanity": -2,
                  "item": "Coordenada oceánica"
                }
              },
              "fail": {
                "text": "Te piden que pronuncies un nombre que tu lengua no puede formar. Todos se giran al mismo tiempo.",
                "next": "sea",
                "effects": {
                  "health": -2,
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Sabotear los tambores y escapar",
              "stat": "movimiento",
              "dc": 13,
              "success": {
                "text": "Rompes el ritmo del rito. El mar, a kilómetros, se queda súbitamente quieto.",
                "next": "sea",
                "effects": {
                  "clues": 1,
                  "flag": "ritualBroken"
                }
              },
              "fail": {
                "text": "El tambor no se rompe: late. Tu mano queda marcada por una pulsación ajena.",
                "next": "sea",
                "effects": {
                  "health": -1,
                  "sanity": -3
                }
              }
            }
          ]
        },
        {
          "id": "sea",
          "location": "Buque mercante · latitud borrada",
          "art": "≋",
          "text": "La brújula gira hasta vomitar limaduras. A proa emerge una arquitectura que no estaba allí hace un minuto. No es isla. Es párpado.",
          "choices": [
            {
              "label": "Documentar la aparición desde cubierta",
              "stat": "temple",
              "dc": 15,
              "success": {
                "text": "Haces tres fotografías antes de que la geometría te sangre por la nariz. Son la prueba más clara y la más peligrosa.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -4,
                  "item": "Fotografías de R'lyeh"
                }
              },
              "fail": {
                "text": "Miras demasiado. Desde entonces sabes que las líneas rectas son una superstición humana.",
                "next": "final",
                "effects": {
                  "sanity": -6,
                  "dread": 2
                }
              }
            },
            {
              "label": "Ordenar media vuelta antes del canto",
              "stat": "presencia",
              "dc": 14,
              "success": {
                "text": "La tripulación obedece por puro terror. Detrás, la ciudad se hunde como un pensamiento rechazado.",
                "next": "final",
                "effects": {
                  "clues": 1,
                  "flag": "shipSaved"
                }
              },
              "fail": {
                "text": "Nadie te oye. Todos miran al horizonte con sonrisas de sueño profundo.",
                "next": "final",
                "effects": {
                  "sanity": -4,
                  "dread": 3
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Archivo sellado · semanas después",
          "art": "⌁",
          "text": "El mundo continúa porque ignora la escala real de lo visto. Tus pruebas bastan para convencer a unos pocos y condenarlos a dormir peor.",
          "choices": [
            {
              "label": "Fundar una red de vigilancia onírica",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "Cada sueño será un sismógrafo. No puedes detener lo que duerme, pero quizá puedas leer sus movimientos.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1,
                  "flag": "dreamWatch"
                }
              },
              "fail": {
                "text": "La red funciona al revés. Ahora todos sueñan a través de ti.",
                "next": "END_MADNESS",
                "effects": {
                  "sanity": -6
                }
              }
            },
            {
              "label": "Destruir las pruebas y no mirar el mar",
              "stat": "temple",
              "dc": 12,
              "success": {
                "text": "Sobrevives. El océano no te perdona, pero tampoco te reclama todavía.",
                "next": "END_SURVIVE",
                "effects": {
                  "sanity": 1
                }
              },
              "fail": {
                "text": "Quemar las fotos no basta. La ceniza dibuja una ciudad perfecta.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -4
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "colour",
      "title": "Expediente IV · El color que cayó fuera del espectro",
      "source": "Inspirado en El color del espacio exterior",
      "difficulty": 12,
      "badge": "GRANJA · METEORITO · CONTAMINACIÓN",
      "intro": "Una granja se pudre con una belleza imposible. Los pozos brillan de noche y los árboles se inclinan hacia algo que no emite luz, sino ausencia de color conocido.",
      "stages": [
        {
          "id": "start",
          "location": "Carretera del valle · 15:20",
          "art": "✧",
          "text": "El meteorito cayó hace meses, pero la tierra todavía suena hueca. Las manzanas tienen venas luminosas y los animales miran hacia el pozo seco.",
          "choices": [
            {
              "label": "Tomar muestras de agua y tierra",
              "stat": "razon",
              "dc": 12,
              "success": {
                "text": "Las muestras no reaccionan a los químicos habituales. El agua parece recordar la forma del recipiente anterior.",
                "next": "well",
                "effects": {
                  "clues": 2,
                  "item": "Muestras prismáticas"
                }
              },
              "fail": {
                "text": "El frasco se agrieta desde dentro. Un olor metálico te adormece los dientes.",
                "next": "well",
                "effects": {
                  "health": -2,
                  "sanity": -1
                }
              }
            },
            {
              "label": "Hablar con la familia afectada",
              "stat": "presencia",
              "dc": 11,
              "success": {
                "text": "La hija menor dibuja estrellas que no existen y te advierte que el color bebe primero de las cosas pequeñas.",
                "next": "house",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "note": "La contaminación avanza por tamaños y memoria."
                }
              },
              "fail": {
                "text": "La familia sonríe sin pestañear. Nadie recuerda cuándo fue la última lluvia.",
                "next": "house",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "well",
          "location": "Pozo norte · crepúsculo",
          "art": "◈",
          "text": "El pozo no refleja el cielo. Refleja una noche futura en la que el valle está vacío y hermoso. Las piedras del brocal están blandas.",
          "choices": [
            {
              "label": "Bajar una lámpara y medir la profundidad",
              "stat": "percepcion",
              "dc": 13,
              "success": {
                "text": "La cuerda baja veinte metros y vuelve con treinta. Algo del fondo ha añadido distancia.",
                "next": "house",
                "effects": {
                  "clues": 2,
                  "sanity": -2,
                  "item": "Cuerda alargada"
                }
              },
              "fail": {
                "text": "La lámpara vuelve apagada, cubierta por una escarcha tibia. Tu sombra tarda en regresar.",
                "next": "house",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Sellar el pozo provisionalmente",
              "stat": "movimiento",
              "dc": 12,
              "success": {
                "text": "Clavas tablones y sal. Durante unos minutos los árboles dejan de inclinarse.",
                "next": "house",
                "effects": {
                  "clues": 1,
                  "flag": "wellSealed"
                }
              },
              "fail": {
                "text": "Un tablón se hunde como si el pozo respirara. Algo invisible te quema la palma.",
                "next": "house",
                "effects": {
                  "health": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "house",
          "location": "Casa Gardner · noche",
          "art": "⌂",
          "text": "Dentro, los relojes atrasan a ritmos diferentes. En la habitación principal, una figura familiar se descompone sin dejar de estar viva.",
          "choices": [
            {
              "label": "Evacuar a los supervivientes",
              "stat": "presencia",
              "dc": 13,
              "success": {
                "text": "Convences a dos personas de salir antes de que olviden que tienen cuerpo. Una tercera decide quedarse mirando la pared.",
                "next": "flare",
                "effects": {
                  "clues": 1,
                  "sanity": -2,
                  "flag": "survivorsSaved"
                }
              },
              "fail": {
                "text": "Te oyen, pero no pueden recordar qué significa «salir». La casa parece más grande al intentar abandonarla.",
                "next": "flare",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Examinar la figura contaminada",
              "stat": "temple",
              "dc": 14,
              "success": {
                "text": "No es una enfermedad: es una traducción incompleta de la materia. Apuntas lo suficiente para reconocer el patrón.",
                "next": "flare",
                "effects": {
                  "clues": 3,
                  "sanity": -4,
                  "note": "La materia terrestre está siendo convertida."
                }
              },
              "fail": {
                "text": "Miras demasiado de cerca y parte de tu recuerdo de infancia adquiere ese color.",
                "next": "flare",
                "effects": {
                  "sanity": -5
                }
              }
            }
          ]
        },
        {
          "id": "flare",
          "location": "Campo central · 02:00",
          "art": "✺",
          "text": "El color asciende del pozo en silencio. No ilumina: decide qué puede seguir existiendo. El valle entero contiene la respiración.",
          "choices": [
            {
              "label": "Incendiar el campo para cortar la expansión",
              "stat": "temple",
              "dc": 14,
              "success": {
                "text": "El fuego no lo destruye, pero le roba alimento. El color se eleva más débil hacia las estrellas.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "health": -1,
                  "flag": "fieldBurned"
                }
              },
              "fail": {
                "text": "El fuego arde hacia abajo. La tierra abre grietas con brillo imposible.",
                "next": "final",
                "effects": {
                  "health": -3,
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Registrar la trayectoria celeste",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "Descubres que no llegó: fue una semilla lanzada de vuelta. Algo recoge cosechas en ciclos enormes.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -3,
                  "item": "Cálculo orbital inverso"
                }
              },
              "fail": {
                "text": "La matemática produce un resultado que huele a fruta podrida. Tu lápiz escribe solo una palabra: vuelve.",
                "next": "final",
                "effects": {
                  "sanity": -4
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Límite del valle · amanecer",
          "art": "▱",
          "text": "El valle queda gris, agotado. En tu maleta, las muestras brillan cuando nadie las mira directamente.",
          "choices": [
            {
              "label": "Entregar el terreno a cuarentena permanente",
              "stat": "presencia",
              "dc": 12,
              "success": {
                "text": "La zona se declara inhabitable. Oficialmente, por contaminación química. Extraoficialmente, por hambre estelar.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1
                }
              },
              "fail": {
                "text": "Un promotor compra la finca. Años después, anuncian viviendas con vistas al pozo.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Destruir tus muestras",
              "stat": "temple",
              "dc": 13,
              "success": {
                "text": "Rompes los frascos en ácido y metal. Aun así, durante un segundo ves un color que nadie verá dos veces.",
                "next": "END_SURVIVE",
                "effects": {
                  "sanity": -1
                }
              },
              "fail": {
                "text": "Guardas una muestra. No recuerdas haber tomado esa decisión.",
                "next": "END_MADNESS",
                "effects": {
                  "sanity": -6,
                  "item": "Muestra viva"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "dunwich",
      "title": "Expediente V · La colina que tenía respiración",
      "source": "Inspirado en El horror de Dunwich",
      "difficulty": 14,
      "badge": "DUNWICH · NACIMIENTO · INVOCACIÓN",
      "intro": "En una aldea aislada, los perros aúllan a una colina invisible para los mapas. Una familia degenerada guarda un establo sin animales y un libro demasiado pesado.",
      "stages": [
        {
          "id": "start",
          "location": "Estación rural · mediodía",
          "art": "♄",
          "text": "Los habitantes no miran hacia la vieja granja Whateley. Los perros sí. Todos aúllan hacia una habitación cerrada donde algo creció demasiado rápido.",
          "choices": [
            {
              "label": "Revisar partidas de nacimiento y defunción",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "Las fechas no cuadran. Un niño aprendió a hablar antes de tener edad para respirar por sí mismo.",
                "next": "library",
                "effects": {
                  "clues": 2,
                  "note": "Crecimiento anormal registrado."
                }
              },
              "fail": {
                "text": "Los archivos están roídos en los nombres importantes. Las mordidas parecen humanas solo por cortesía.",
                "next": "farm",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            },
            {
              "label": "Ganarte la confianza de los aldeanos",
              "stat": "presencia",
              "dc": 13,
              "success": {
                "text": "Una mujer te entrega una llave oxidada y susurra que la colina no está detrás de la granja, sino encima de todos.",
                "next": "farm",
                "effects": {
                  "clues": 1,
                  "item": "Llave oxidada"
                }
              },
              "fail": {
                "text": "Las ventanas se cierran al verte. Alguien deja en tu habitación una cuerda con nudos rituales.",
                "next": "farm",
                "effects": {
                  "sanity": -1,
                  "dread": 2
                }
              }
            }
          ]
        },
        {
          "id": "library",
          "location": "Biblioteca Miskatonic · sala restringida",
          "art": "☷",
          "text": "El volumen solicitado pesa más de lo que debería. En sus páginas se habla de abrir puertas no hacia lugares, sino hacia parentescos.",
          "choices": [
            {
              "label": "Copiar el contra-ritual",
              "stat": "ocultismo",
              "dc": 14,
              "success": {
                "text": "Copias signos suficientes para cerrar una invocación parcial. Cada símbolo te mira antes de secarse la tinta.",
                "next": "farm",
                "effects": {
                  "clues": 3,
                  "sanity": -3,
                  "item": "Contra-ritual incompleto"
                }
              },
              "fail": {
                "text": "Pronuncias mentalmente una sílaba y algo enorme se gira hacia tu biblioteca desde fuera del cielo.",
                "next": "farm",
                "effects": {
                  "sanity": -5,
                  "dread": 2
                }
              }
            },
            {
              "label": "Localizar robos de ganado asociados",
              "stat": "percepcion",
              "dc": 12,
              "success": {
                "text": "La ruta del ganado desaparecido forma un círculo alrededor de Sentinel Hill. La cosa ha estado alimentándose.",
                "next": "hill",
                "effects": {
                  "clues": 2,
                  "note": "El círculo de alimentación apunta a la colina."
                }
              },
              "fail": {
                "text": "Los mapas rurales cambian de orientación. La colina aparece dibujada sobre la página, no en ella.",
                "next": "farm",
                "effects": {
                  "sanity": -2
                }
              }
            }
          ]
        },
        {
          "id": "farm",
          "location": "Granja Whateley · 19:55",
          "art": "⌘",
          "text": "El establo cerrado ocupa más espacio por dentro que por fuera. En las vigas hay arañazos a tres metros del suelo y una sustancia invisible aplasta el polvo.",
          "choices": [
            {
              "label": "Abrir el establo con la llave",
              "stat": "temple",
              "dc": 14,
              "success": {
                "text": "No ves a la criatura, pero ves dónde no está el aire. La forma invisible respira sobre tu pelo y se marcha hacia la colina.",
                "next": "hill",
                "effects": {
                  "clues": 2,
                  "sanity": -4,
                  "flag": "sawVoid"
                }
              },
              "fail": {
                "text": "El pestillo se abre solo. Algo invisible empuja desde dentro, feliz de que por fin alguien entienda la puerta.",
                "next": "hill",
                "effects": {
                  "health": -3,
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Rastrear huellas imposibles alrededor",
              "stat": "percepcion",
              "dc": 13,
              "success": {
                "text": "Las huellas no son pisadas: son zonas donde el suelo renunció a sostener algo. Van hacia Sentinel Hill.",
                "next": "hill",
                "effects": {
                  "clues": 2
                }
              },
              "fail": {
                "text": "Sigues una huella hasta que descubres que estás caminando dentro de otra más grande.",
                "next": "hill",
                "effects": {
                  "sanity": -3
                }
              }
            }
          ]
        },
        {
          "id": "hill",
          "location": "Sentinel Hill · tormenta",
          "art": "△",
          "text": "La colina late. Tres piedras verticales rodean un espacio donde la lluvia se curva. El contra-ritual tiembla en tus manos.",
          "choices": [
            {
              "label": "Recitar el contra-ritual incompleto",
              "stat": "ocultismo",
              "dc": 15,
              "success": {
                "text": "Los signos abren una cicatriz de luz. La criatura invisible se vuelve visible solo como error de la lluvia.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -5,
                  "flag": "banishedSpawn"
                }
              },
              "fail": {
                "text": "Olvidas una sílaba. La colina responde con una voz demasiado paternal.",
                "next": "final",
                "effects": {
                  "health": -3,
                  "sanity": -5,
                  "dread": 3
                }
              }
            },
            {
              "label": "Usar dinamita contra las piedras",
              "stat": "movimiento",
              "dc": 14,
              "success": {
                "text": "La explosión rompe el círculo. No mata lo invisible, pero lo deja sin orientación humana.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "health": -2,
                  "flag": "stonesBroken"
                }
              },
              "fail": {
                "text": "La mecha arde hacia tu mano. La colina inhala el fuego y lo devuelve frío.",
                "next": "final",
                "effects": {
                  "health": -4,
                  "sanity": -3
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Dunwich · después de la tormenta",
          "art": "☇",
          "text": "El pueblo finge normalidad con la disciplina de quien ha sobrevivido a su propio linaje. Pero una piedra sigue tibia.",
          "choices": [
            {
              "label": "Sellar el conocimiento en Miskatonic",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "El volumen vuelve a la sala restringida con tres candados nuevos. Tú sabes que los candados son para los lectores, no para el libro.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1
                }
              },
              "fail": {
                "text": "El catálogo universitario cambia solo. Ahora el libro aparece prestado a tu nombre desde hace once años.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -4
                }
              }
            },
            {
              "label": "Quedarte a vigilar la colina una noche más",
              "stat": "temple",
              "dc": 15,
              "success": {
                "text": "Nada sube. Eso es lo peor: por fin sabes distinguir una derrota de una espera.",
                "next": "END_SURVIVE",
                "effects": {
                  "sanity": -2
                }
              },
              "fail": {
                "text": "Sueñas que la colina se abre como un ojo. Despiertas en tu cama, cubierto de barro de Dunwich.",
                "next": "END_MADNESS",
                "effects": {
                  "sanity": -6
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "innsmouth",
      "title": "Expediente VI · La ciudad que respiraba por branquias",
      "source": "Inspirado en La sombra sobre Innsmouth",
      "difficulty": 13,
      "badge": "INNSMOUTH · GENEALOGÍA · MAR PROFUNDO",
      "intro": "Un pueblo costero desaparece de las rutas ferroviarias. Sus habitantes envejecen hacia el océano y cierran las ventanas al atardecer.",
      "stages": [
        {
          "id": "start",
          "location": "Autobús a Innsmouth · 16:45",
          "art": "⚓",
          "text": "El conductor no acepta preguntas. Desde la ventanilla ves tejados hundidos, iglesias vacías y canales donde el agua sube aunque la marea baja.",
          "choices": [
            {
              "label": "Memorizar rutas de salida",
              "stat": "percepcion",
              "dc": 12,
              "success": {
                "text": "Detectas tres salidas: puente viejo, estación cerrada y playa norte. La ciudad parece molesta por que lo sepas.",
                "next": "hotel",
                "effects": {
                  "clues": 2,
                  "note": "Rutas de escape localizadas."
                }
              },
              "fail": {
                "text": "Las calles se repiten. Al anotar un nombre, la tinta se convierte en sal.",
                "next": "hotel",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            },
            {
              "label": "Hablar con el dependiente de la tienda",
              "stat": "presencia",
              "dc": 12,
              "success": {
                "text": "El joven baja la voz y te entrega un plano con zonas marcadas: «no vayas donde canten debajo del suelo». ",
                "next": "hotel",
                "effects": {
                  "clues": 2,
                  "item": "Plano manchado de sal"
                }
              },
              "fail": {
                "text": "El dependiente palidece y niega conocerte, aunque lleva tu apellido escrito en un recibo antiguo.",
                "next": "hotel",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "hotel",
          "location": "Hotel Gilman · medianoche",
          "art": "▥",
          "text": "Tu habitación huele a algas secas. En el pasillo, pasos húmedos se detienen ante tu puerta. La cerradura gira sin llave.",
          "choices": [
            {
              "label": "Bloquear la puerta y escapar por la ventana",
              "stat": "movimiento",
              "dc": 13,
              "success": {
                "text": "Caes al tejado inferior y corres por callejones. Detrás, muchas gargantas producen una sola palabra.",
                "next": "archive",
                "effects": {
                  "clues": 1,
                  "health": -1,
                  "flag": "hotelEscape"
                }
              },
              "fail": {
                "text": "La ventana no da a la calle sino a un muelle nocturno que no estaba allí. Algo llama desde el agua.",
                "next": "archive",
                "effects": {
                  "health": -2,
                  "sanity": -3
                }
              }
            },
            {
              "label": "Esperar con la pistola descargada como señuelo",
              "stat": "temple",
              "dc": 14,
              "success": {
                "text": "Cuando entran, finges estar dormido. Sus ojos no reflejan la lámpara. Oyes que hablan de tu sangre como si fuera una deuda.",
                "next": "archive",
                "effects": {
                  "clues": 3,
                  "sanity": -3,
                  "note": "Tienen interés genealógico en ti."
                }
              },
              "fail": {
                "text": "Tu respiración te delata. La puerta se abre con la paciencia de una marea.",
                "next": "archive",
                "effects": {
                  "health": -3,
                  "sanity": -3,
                  "dread": 2
                }
              }
            }
          ]
        },
        {
          "id": "archive",
          "location": "Sociedad Histórica · 01:21",
          "art": "◫",
          "text": "Los árboles genealógicos terminan en nombres tachados y símbolos de coral. Tu apellido aparece en una rama lateral que alguien quiso quemar.",
          "choices": [
            {
              "label": "Seguir tu linaje hasta el puerto",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "La conclusión es limpia y monstruosa: algunas familias no descienden del pasado, sino de abajo.",
                "next": "reef",
                "effects": {
                  "clues": 3,
                  "sanity": -4,
                  "item": "Genealogía incompleta"
                }
              },
              "fail": {
                "text": "Los nombres se mezclan hasta formar el tuyo. Te sangran ligeramente las encías.",
                "next": "reef",
                "effects": {
                  "sanity": -4
                }
              }
            },
            {
              "label": "Robar el registro principal",
              "stat": "movimiento",
              "dc": 12,
              "success": {
                "text": "Sales con el libro bajo el abrigo. Las campanas empiezan a sonar aunque no queda iglesia con campana.",
                "next": "reef",
                "effects": {
                  "clues": 2,
                  "item": "Registro de pactos"
                }
              },
              "fail": {
                "text": "El libro pesa como un cadáver mojado. Al caer, se abre por una página escrita mañana.",
                "next": "reef",
                "effects": {
                  "health": -1,
                  "sanity": -3
                }
              }
            }
          ]
        },
        {
          "id": "reef",
          "location": "Arrecife del Diablo · pre-amanecer",
          "art": "≋",
          "text": "El mar se retira demasiado. En el arrecife brillan hogueras verdes bajo el agua. Formas anfibias suben cantando nombres familiares.",
          "choices": [
            {
              "label": "Cruzar la playa norte antes de que suba la marea",
              "stat": "movimiento",
              "dc": 14,
              "success": {
                "text": "Corres sobre piedras cubiertas de baba y alcanzas la carretera. El canto se queda atrás, pero una parte de ti entiende la melodía.",
                "next": "final",
                "effects": {
                  "clues": 1,
                  "health": -2,
                  "sanity": -3,
                  "flag": "escapedInnsmouth"
                }
              },
              "fail": {
                "text": "La marea sube de golpe. Manos frías te sujetan los tobillos con una ternura familiar.",
                "next": "final",
                "effects": {
                  "health": -4,
                  "sanity": -5,
                  "dread": 3
                }
              }
            },
            {
              "label": "Quedarte a escuchar la verdad del linaje",
              "stat": "temple",
              "dc": 15,
              "success": {
                "text": "La revelación no te rompe: te cambia el centro de gravedad. Entiendes qué prometieron tus antepasados y qué esperan cobrar.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -5,
                  "flag": "knowsBlood"
                }
              },
              "fail": {
                "text": "La verdad entra por tus oídos como agua. Cuando respiras, algo responde en tu cuello.",
                "next": "final",
                "effects": {
                  "sanity": -7,
                  "dread": 2
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Tren de salida · mañana gris",
          "art": "▭",
          "text": "El pueblo queda atrás. En el cristal, por un segundo, tu reflejo parpadea de lado.",
          "choices": [
            {
              "label": "Enviar el registro a una autoridad federal",
              "stat": "presencia",
              "dc": 13,
              "success": {
                "text": "Semanas después se anuncia una operación militar discreta. Tú sabes que eso no basta contra el mar.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1
                }
              },
              "fail": {
                "text": "Tu paquete llega vacío. Solo contiene arena húmeda y una nota: «familia». ",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Investigar tu sangre en secreto",
              "stat": "razon",
              "dc": 14,
              "success": {
                "text": "El análisis confirma lo imposible con la frialdad de la ciencia. Aún eres tú. De momento.",
                "next": "END_SURVIVE",
                "effects": {
                  "sanity": -3,
                  "item": "Análisis imposible"
                }
              },
              "fail": {
                "text": "La muestra se mueve bajo el microscopio como si buscara el océano.",
                "next": "END_MADNESS",
                "effects": {
                  "sanity": -6
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "mountains",
      "title": "Expediente VII · Las montañas sin alba",
      "source": "Inspirado en En las montañas de la locura",
      "difficulty": 14,
      "badge": "ANTÁRTIDA · FÓSILES · CIUDAD PREHUMANA",
      "intro": "Una expedición antártica envía fotografías de fósiles imposibles y luego silencio. El hielo conserva ruinas de una civilización que no debería haber tenido manos.",
      "stages": [
        {
          "id": "start",
          "location": "Campamento Lake · Antártida",
          "art": "❄",
          "text": "Las tiendas están cortadas desde dentro. Los cuerpos no están donde deberían. En una mesa de disección queda una estrella orgánica con alas plegadas.",
          "choices": [
            {
              "label": "Reconstruir los últimos movimientos del equipo",
              "stat": "percepcion",
              "dc": 13,
              "success": {
                "text": "Las huellas indican pánico humano y precisión no humana. Alguien aprendió a usar herramientas mirando cadáveres.",
                "next": "specimen",
                "effects": {
                  "clues": 2,
                  "sanity": -2
                }
              },
              "fail": {
                "text": "La nieve borra las huellas mientras las miras. Una pisada nueva aparece detrás de ti.",
                "next": "specimen",
                "effects": {
                  "sanity": -3,
                  "dread": 1
                }
              }
            },
            {
              "label": "Examinar el espécimen sin tocarlo",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "No es animal ni planta. Es arquitectura blanda, biología con intención de ingeniería.",
                "next": "city",
                "effects": {
                  "clues": 2,
                  "sanity": -2,
                  "note": "El organismo parece constructor."
                }
              },
              "fail": {
                "text": "Una membrana se contrae aunque lleva horas muerta. Tu regla metálica se curva hacia ella.",
                "next": "city",
                "effects": {
                  "sanity": -3
                }
              }
            }
          ]
        },
        {
          "id": "specimen",
          "location": "Laboratorio de campaña · viento blanco",
          "art": "✶",
          "text": "El registro de audio contiene voces humanas imitando calma y otra frecuencia por debajo, como si una montaña roncara dentro del micrófono.",
          "choices": [
            {
              "label": "Filtrar la frecuencia subterránea",
              "stat": "razon",
              "dc": 14,
              "success": {
                "text": "El sonido es un mapa. Marca una entrada a través de una pared de hielo azul.",
                "next": "city",
                "effects": {
                  "clues": 3,
                  "item": "Mapa sonoro"
                }
              },
              "fail": {
                "text": "El audio reproduce tu propia voz pidiendo que no abras la puerta. Aún no has dicho esa frase.",
                "next": "city",
                "effects": {
                  "sanity": -4,
                  "dread": 1
                }
              }
            },
            {
              "label": "Buscar supervivientes antes de explorar",
              "stat": "temple",
              "dc": 12,
              "success": {
                "text": "Encuentras una nota congelada: «no son los peores; huían de algo peor». ",
                "next": "city",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "item": "Nota congelada"
                }
              },
              "fail": {
                "text": "Confundes una sombra con un compañero. La sombra levanta una extremidad de más.",
                "next": "city",
                "effects": {
                  "sanity": -3,
                  "health": -1
                }
              }
            }
          ]
        },
        {
          "id": "city",
          "location": "Ciudad ciclópea · bajo el hielo",
          "art": "▧",
          "text": "Los bloques no fueron tallados: crecieron obedeciendo a una geometría musical. Murales relatan eras anteriores al primer mamífero.",
          "choices": [
            {
              "label": "Traducir los murales principales",
              "stat": "razon",
              "dc": 15,
              "success": {
                "text": "Comprendes una historia del planeta sin humanos en el centro. Los constructores crearon servidores que terminaron odiando la forma.",
                "next": "tunnel",
                "effects": {
                  "clues": 4,
                  "sanity": -5,
                  "note": "Los servidores se rebelaron contra sus creadores."
                }
              },
              "fail": {
                "text": "El mural no se traduce: te traduce. Durante segundos recuerdas tener alas membranosas.",
                "next": "tunnel",
                "effects": {
                  "sanity": -6
                }
              }
            },
            {
              "label": "Seguir las marcas de arrastre recientes",
              "stat": "percepcion",
              "dc": 13,
              "success": {
                "text": "Las marcas conducen a un túnel negro lleno de nieve removida desde abajo.",
                "next": "tunnel",
                "effects": {
                  "clues": 2
                }
              },
              "fail": {
                "text": "Las marcas se bifurcan y luego forman un círculo alrededor de tu grupo.",
                "next": "tunnel",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        },
        {
          "id": "tunnel",
          "location": "Túnel inferior · sin brújula",
          "art": "⬡",
          "text": "El olor cambia: algas, amoníaco, carne antigua. Al fondo, algo enorme se mueve como una avalancha con voluntad.",
          "choices": [
            {
              "label": "Retirarse sin encender bengalas",
              "stat": "temple",
              "dc": 15,
              "success": {
                "text": "Ordenas silencio absoluto. El horror pasa cerca, cantando con miles de bocas primitivas. No os detecta.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "sanity": -5,
                  "flag": "escapedShoggoth"
                }
              },
              "fail": {
                "text": "Un compañero grita. La oscuridad responde con una imitación perfecta y hambrienta.",
                "next": "final",
                "effects": {
                  "health": -4,
                  "sanity": -6,
                  "dread": 2
                }
              }
            },
            {
              "label": "Derrumbar la entrada con explosivos",
              "stat": "movimiento",
              "dc": 14,
              "success": {
                "text": "El túnel colapsa justo cuando una masa negra ocupa todo el horizonte de la linterna.",
                "next": "final",
                "effects": {
                  "clues": 1,
                  "health": -2,
                  "flag": "tunnelCollapsed"
                }
              },
              "fail": {
                "text": "La detonación revela la escala real de la cosa. No era un pasillo; era su garganta.",
                "next": "final",
                "effects": {
                  "health": -5,
                  "sanity": -5
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Avión de regreso · sobre blanco infinito",
          "art": "✈",
          "text": "Desde el aire, las montañas parecen dientes. El copiloto pregunta qué hay detrás de ellas. Nadie contesta.",
          "choices": [
            {
              "label": "Advertir al mundo que no vuelva",
              "stat": "presencia",
              "dc": 14,
              "success": {
                "text": "Tu informe no se publica entero, pero basta para retrasar nuevas expediciones. Has comprado tiempo al hielo.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1
                }
              },
              "fail": {
                "text": "Te llaman histérico. Tres universidades preparan una expedición más grande.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -4
                }
              }
            },
            {
              "label": "Ocultar coordenadas y destruir negativos",
              "stat": "temple",
              "dc": 13,
              "success": {
                "text": "El secreto queda sepultado. Tú no. Soñarás con murales cada invierno.",
                "next": "END_SURVIVE",
                "effects": {
                  "sanity": -2
                }
              },
              "fail": {
                "text": "Una fotografía queda sin quemar. En ella, las montañas han cambiado de posición.",
                "next": "END_MADNESS",
                "effects": {
                  "sanity": -6
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "kadath",
      "title": "Expediente VIII · Kadath no aparece en los mapas",
      "source": "Inspirado en La búsqueda en sueños de la ignota Kadath",
      "difficulty": 13,
      "badge": "SUEÑOS · DIOSES OTROS · NYARLATHOTEP",
      "intro": "Un soñador no despierta. Sus diarios describen una ciudad de ónice, sacerdotes sin edad y una ruta más allá de los límites seguros del sueño.",
      "stages": [
        {
          "id": "start",
          "location": "Dormitorio del soñador · 04:04",
          "art": "☽",
          "text": "El cuerpo respira, pero la sombra no coincide con él. En la mesilla hay un mapa dibujado sobre varias capas de papel cebolla: todas conducen a una montaña sin ubicación.",
          "choices": [
            {
              "label": "Dormir junto al paciente con ancla física",
              "stat": "temple",
              "dc": 13,
              "success": {
                "text": "Desciendes por setenta peldaños hacia una caverna cálida. Recuerdas la cuerda atada a tu muñeca y conservas tu nombre.",
                "next": "priests",
                "effects": {
                  "clues": 2,
                  "sanity": -2,
                  "item": "Ancla de plata"
                }
              },
              "fail": {
                "text": "Entras en el sueño sin peso. Alguien al otro lado aprende tu nombre antes que tú.",
                "next": "priests",
                "effects": {
                  "sanity": -4,
                  "dread": 1
                }
              }
            },
            {
              "label": "Analizar el mapa onírico despierto",
              "stat": "razon",
              "dc": 12,
              "success": {
                "text": "El mapa funciona como un contrato de navegación. No marca lugares: marca permisos.",
                "next": "priests",
                "effects": {
                  "clues": 2,
                  "note": "El viaje requiere permisos simbólicos."
                }
              },
              "fail": {
                "text": "Las líneas del mapa continúan sobre tu mesa y luego bajo tu piel.",
                "next": "priests",
                "effects": {
                  "sanity": -3
                }
              }
            }
          ]
        },
        {
          "id": "priests",
          "location": "Caverna de la llama · sueño profundo",
          "art": "♆",
          "text": "Dos sacerdotes antiguos advierten que Kadath no rechaza viajeros; los conserva. Un gato negro te mira como si fuese más competente que tú.",
          "choices": [
            {
              "label": "Pedir una ruta segura a través de Ulthar",
              "stat": "presencia",
              "dc": 12,
              "success": {
                "text": "El gato acepta guiarte a cambio de no mentirle nunca. En sueños, esa promesa pesa como hierro.",
                "next": "voyage",
                "effects": {
                  "clues": 2,
                  "item": "Guía felino",
                  "flag": "catGuide"
                }
              },
              "fail": {
                "text": "Los sacerdotes callan. El gato bosteza y te roba un recuerdo pequeño pero querido.",
                "next": "voyage",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            },
            {
              "label": "Ignorar advertencias y avanzar directo",
              "stat": "movimiento",
              "dc": 14,
              "success": {
                "text": "Cruzas un desierto de huesos lunares antes de que los mercaderes de la noche te huelan.",
                "next": "voyage",
                "effects": {
                  "clues": 1,
                  "health": -1
                }
              },
              "fail": {
                "text": "Algo alado te sigue sin mover alas. En tus sueños futuros siempre habrá cielo.",
                "next": "voyage",
                "effects": {
                  "sanity": -4,
                  "dread": 2
                }
              }
            }
          ]
        },
        {
          "id": "voyage",
          "location": "Mar de sueños · frontera exterior",
          "art": "☄",
          "text": "Navegas por aguas que reflejan constelaciones equivocadas. Un mercader sonriente ofrece llevarte a Kadath por un precio que no nombra.",
          "choices": [
            {
              "label": "Negociar sin revelar tu deseo real",
              "stat": "presencia",
              "dc": 14,
              "success": {
                "text": "El mercader admite ser mensajero de algo mayor. Te da una puerta falsa para que sobrevivas al primer engaño.",
                "next": "onyx",
                "effects": {
                  "clues": 3,
                  "sanity": -2,
                  "item": "Puerta falsa"
                }
              },
              "fail": {
                "text": "Pronuncias tu deseo. El mercader sonríe con demasiados rostros.",
                "next": "onyx",
                "effects": {
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Buscar señales de los Dioses Otros",
              "stat": "ocultismo",
              "dc": 13,
              "success": {
                "text": "Encuentras signos para no seguir. Eso, en este lugar, es la información más valiosa.",
                "next": "onyx",
                "effects": {
                  "clues": 2,
                  "note": "Las señales correctas prohíben el avance."
                }
              },
              "fail": {
                "text": "Confundes una advertencia con invitación. Alguien ríe en todos los idiomas que aún no existen.",
                "next": "onyx",
                "effects": {
                  "sanity": -5
                }
              }
            }
          ]
        },
        {
          "id": "onyx",
          "location": "Castillo de ónice · borde del cosmos",
          "art": "◆",
          "text": "La ciudad es hermosa porque no fue hecha para aliviar ojos humanos. En el trono no hay dios dormido: hay una máscara esperando anfitrión.",
          "choices": [
            {
              "label": "Usar la puerta falsa y rescatar al soñador",
              "stat": "razon",
              "dc": 14,
              "success": {
                "text": "La puerta no te lleva a casa: te lleva a la idea correcta de casa. Arrastras al soñador antes de que acepte la máscara.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -4,
                  "flag": "dreamerSaved"
                }
              },
              "fail": {
                "text": "La puerta abre hacia tu dormitorio, pero desde el lado equivocado del espejo.",
                "next": "final",
                "effects": {
                  "sanity": -6,
                  "dread": 2
                }
              }
            },
            {
              "label": "Hablar con el mensajero de las mil caras",
              "stat": "temple",
              "dc": 16,
              "success": {
                "text": "No ganas. Nadie gana. Pero logras hacerle reír el tiempo suficiente para despertar con algo menos roto.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "sanity": -5,
                  "flag": "facedMessenger"
                }
              },
              "fail": {
                "text": "El mensajero te ofrece una cara nueva y durante un segundo te parece una mejora.",
                "next": "final",
                "effects": {
                  "sanity": -8
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Despertar · 04:05",
          "art": "◐",
          "text": "Solo ha pasado un minuto. El paciente abre los ojos y pregunta si también has visto la montaña. Tu ancla de plata está cubierta de polvo estelar.",
          "choices": [
            {
              "label": "Cerrar el caso y prohibir nuevos sueños inducidos",
              "stat": "presencia",
              "dc": 13,
              "success": {
                "text": "Los pacientes despiertan, aunque algunos lloran por ciudades que nunca visitaron. El protocolo queda sellado.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1
                }
              },
              "fail": {
                "text": "Tu advertencia se vuelve moda. Una sociedad secreta empieza a buscar Kadath por diversión.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -4
                }
              }
            },
            {
              "label": "Conservar el mapa para futuras travesías",
              "stat": "ocultismo",
              "dc": 15,
              "success": {
                "text": "Guardas el mapa sabiendo que es mala idea. A veces una mala idea es lo único que separa rescate y abandono.",
                "next": "END_SURVIVE",
                "effects": {
                  "sanity": -3,
                  "item": "Mapa de permisos oníricos"
                }
              },
              "fail": {
                "text": "El mapa ya no está en papel. Ahora sueñas con él cada vez que cierras los ojos.",
                "next": "END_MADNESS",
                "effects": {
                  "sanity": -6
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "dagon",
      "title": "Expediente IX · La grieta de Dagón",
      "source": "Inspirado en Dagón",
      "difficulty": 12,
      "badge": "OCÉANO · BARRO · ÍDOLO",
      "intro": "Un marinero aparece en un hospital portuario con algas secas bajo las uñas y un boceto de un monolito que no existe en ninguna carta náutica.",
      "stages": [
        {
          "id": "start",
          "location": "Hospital del puerto · 03:12",
          "art": "≈",
          "text": "La cama del paciente está vacía. En la sábana queda una silueta salina y, junto a la ventana, un olor a profundidad abierta. El boceto muestra una grieta vertical rodeada de criaturas talladas.",
          "choices": [
            {
              "label": "Examinar la silueta salina",
              "stat": "percepcion",
              "dc": 11,
              "success": {
                "text": "La primera lectura encaja: el caso no es superstición, sino una mecánica oculta que alguien activó con precisión. Obtienes una pista limpia y un camino de entrada.",
                "next": "trail",
                "effects": {
                  "clues": 2,
                  "note": "Entrada sólida en La grieta de Dagón."
                }
              },
              "fail": {
                "text": "La escena te devuelve una explicación demasiado cómoda. Cuando corriges tu error, ya has perdido tiempo y la atmósfera parece más densa.",
                "next": "trail",
                "effects": {
                  "sanity": -1,
                  "dread": 1
                }
              }
            },
            {
              "label": "Interrogar al enfermero nocturno",
              "stat": "presencia",
              "dc": 12,
              "success": {
                "text": "Consigues una versión que nadie quería decir en voz alta. No aclara el horror, pero delimita su forma y te permite avanzar sin pisar a ciegas.",
                "next": "trail",
                "effects": {
                  "clues": 1,
                  "item": "Muestra de barro abisal",
                  "note": "Prueba inicial: Muestra de barro abisal."
                }
              },
              "fail": {
                "text": "La conversación se cierra de golpe. En el silencio posterior oyes una repetición de tu propia pregunta desde un lugar equivocado.",
                "next": "trail",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "trail",
          "location": "Dársena abandonada · marea baja",
          "art": "≈",
          "text": "La dársena cruje con golpes bajo la madera. Los viejos pescadores no miran al agua; miran al cielo, como si esperasen que el mar suba desde arriba.",
          "choices": [
            {
              "label": "Seguir las marcas de barro",
              "stat": "movimiento",
              "dc": 12,
              "success": {
                "text": "Separas el rastro real de la escenografía del miedo. La pista principal conduce a un umbral que nadie debería haber abierto.",
                "next": "threshold",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "note": "Rastro principal confirmado."
                }
              },
              "fail": {
                "text": "Confundes señal y ruido. El lugar parece reorganizarse para que toda salida sea una entrada.",
                "next": "threshold",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            },
            {
              "label": "Descifrar los relieves del boceto",
              "stat": "ocultismo",
              "dc": 11,
              "success": {
                "text": "El método funciona. No entiendes todo lo que ves, pero sí lo suficiente para no obedecerlo.",
                "next": "threshold",
                "effects": {
                  "clues": 1,
                  "dread": 1
                }
              },
              "fail": {
                "text": "Tu método llega tarde. Algo ya ha aprendido a parecer una pista fiable.",
                "next": "threshold",
                "effects": {
                  "health": -1,
                  "sanity": -2
                }
              }
            }
          ]
        },
        {
          "id": "threshold",
          "location": "Lodo negro · plataforma emergida",
          "art": "≈",
          "text": "La marea se retira demasiado y deja una lengua de barro hacia una masa de piedra. Cada paso hunde recuerdos que no son tuyos: branquias, hambre, culto.",
          "choices": [
            {
              "label": "Caminar por la lengua de lodo",
              "stat": "temple",
              "dc": 13,
              "success": {
                "text": "Cruzas el límite sin concederle tu nombre. El horror reacciona, pero no consigue cerrarse sobre ti.",
                "next": "core",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "flag": "dagonMonolith"
                }
              },
              "fail": {
                "text": "El umbral cobra un precio pequeño y exacto: una certeza íntima desaparece de tu mente.",
                "next": "core",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Tomar muestras del barro",
              "stat": "razon",
              "dc": 12,
              "success": {
                "text": "La precaución te salva de lo evidente. Dejas una salida, una marca o una prueba que aún pertenece al mundo humano.",
                "next": "core",
                "effects": {
                  "clues": 1,
                  "item": "Muestra de barro abisal"
                }
              },
              "fail": {
                "text": "La precaución se vuelve ritual sin quererlo. Has llamado la atención de algo que aprecia las formalidades.",
                "next": "core",
                "effects": {
                  "dread": 3,
                  "sanity": -1
                }
              }
            }
          ]
        },
        {
          "id": "core",
          "location": "Monolito húmedo · sin horizonte",
          "art": "≈",
          "text": "El monolito palpita con líquenes fosforescentes. Algo enorme roza el otro lado de la niebla, no caminando, sino recordando cómo se camina.",
          "choices": [
            {
              "label": "Copiar el signo central",
              "stat": "ocultismo",
              "dc": 14,
              "success": {
                "text": "La confrontación no vence al horror, pero le impide completarse. Robas segundos, pruebas y una grieta para escapar.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -2
                }
              },
              "fail": {
                "text": "Intentas imponer escala humana a algo que no la necesita. Tu cuerpo sale entero; tu interpretación no.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Retroceder sin mirar el agua",
              "stat": "temple",
              "dc": 13,
              "success": {
                "text": "El gesto arriesgado funciona. Obtienes una prueba irrefutable, aunque parece mirarte cada vez que cierras la mano.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "item": "Muestra de barro abisal",
                  "sanity": -1
                }
              },
              "fail": {
                "text": "La prueba se resiste a pertenecer a este mundo. Te hiere de una forma difícil de explicar en un informe.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Informe marítimo · amanecer",
          "art": "✎",
          "text": "El puerto despierta sin saber que el océano ha respirado. Tus notas están mojadas por dentro y debes decidir qué hacer con el boceto.",
          "choices": [
            {
              "label": "Entregar el boceto a Miskatonic",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "El expediente queda completo y peligroso. Quien lo lea no dormirá mejor, pero podrá reconocer la próxima señal.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "flag": "dagonMonolith"
                }
              },
              "fail": {
                "text": "La verdad se presenta mal y parece delirio. El mundo se protege burlándose de ti.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Quemar el boceto y hundir las cenizas",
              "stat": "temple",
              "dc": 10,
              "success": {
                "text": "Cierras el caso con una mentira útil. Sobrevives, aunque el archivo privado queda más pesado que antes.",
                "next": "END_SURVIVE",
                "effects": {
                  "dread": -1
                }
              },
              "fail": {
                "text": "La mentira no tapa la grieta; solo le enseña a hablar con tu letra.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "tomb",
      "title": "Expediente X · La tumba que heredaba nombres",
      "source": "Inspirado en La tumba",
      "difficulty": 11,
      "badge": "CRIPTA · HERENCIA · OBSESIÓN",
      "intro": "Un joven noble duerme cada noche ante un mausoleo familiar sellado desde hace generaciones. Al despertar usa nombres de muertos que nadie le enseñó.",
      "stages": [
        {
          "id": "start",
          "location": "Jardín familiar · crepúsculo",
          "art": "▦",
          "text": "La familia te recibe con vergüenza. El muchacho sonríe con una cortesía de otro siglo y te pregunta si también has venido a reclamar tu lugar bajo la piedra.",
          "choices": [
            {
              "label": "Comprobar la cronología familiar",
              "stat": "razon",
              "dc": 10,
              "success": {
                "text": "La primera lectura encaja: el caso no es superstición, sino una mecánica oculta que alguien activó con precisión. Obtienes una pista limpia y un camino de entrada.",
                "next": "trail",
                "effects": {
                  "clues": 2,
                  "note": "Entrada sólida en La tumba que heredaba nombres."
                }
              },
              "fail": {
                "text": "La escena te devuelve una explicación demasiado cómoda. Cuando corriges tu error, ya has perdido tiempo y la atmósfera parece más densa.",
                "next": "trail",
                "effects": {
                  "sanity": -1,
                  "dread": 1
                }
              }
            },
            {
              "label": "Hablar con el muchacho a solas",
              "stat": "presencia",
              "dc": 11,
              "success": {
                "text": "Consigues una versión que nadie quería decir en voz alta. No aclara el horror, pero delimita su forma y te permite avanzar sin pisar a ciegas.",
                "next": "trail",
                "effects": {
                  "clues": 1,
                  "item": "Retrato vuelto",
                  "note": "Prueba inicial: Retrato vuelto."
                }
              },
              "fail": {
                "text": "La conversación se cierra de golpe. En el silencio posterior oyes una repetición de tu propia pregunta desde un lugar equivocado.",
                "next": "trail",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "trail",
          "location": "Biblioteca genealógica · 22:00",
          "art": "▦",
          "text": "Los libros de linajes no encajan: hay una rama escrita con tinta reciente en una página de hace cien años. Tu apellido aparece en una nota al pie.",
          "choices": [
            {
              "label": "Raspar la tinta reciente",
              "stat": "percepcion",
              "dc": 11,
              "success": {
                "text": "Separas el rastro real de la escenografía del miedo. La pista principal conduce a un umbral que nadie debería haber abierto.",
                "next": "threshold",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "note": "Rastro principal confirmado."
                }
              },
              "fail": {
                "text": "Confundes señal y ruido. El lugar parece reorganizarse para que toda salida sea una entrada.",
                "next": "threshold",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            },
            {
              "label": "Buscar tu apellido en el margen",
              "stat": "temple",
              "dc": 11,
              "success": {
                "text": "El método funciona. No entiendes todo lo que ves, pero sí lo suficiente para no obedecerlo.",
                "next": "threshold",
                "effects": {
                  "clues": 1,
                  "dread": 1
                }
              },
              "fail": {
                "text": "Tu método llega tarde. Algo ya ha aprendido a parecer una pista fiable.",
                "next": "threshold",
                "effects": {
                  "health": -1,
                  "sanity": -2
                }
              }
            }
          ]
        },
        {
          "id": "threshold",
          "location": "Mausoleo cerrado · medianoche",
          "art": "▦",
          "text": "El mausoleo no tiene cerradura, pero se abre cuando el muchacho pronuncia un nombre que no debería saber. Dentro huele a banquete apagado.",
          "choices": [
            {
              "label": "Entrar tras él en el mausoleo",
              "stat": "temple",
              "dc": 12,
              "success": {
                "text": "Cruzas el límite sin concederle tu nombre. El horror reacciona, pero no consigue cerrarse sobre ti.",
                "next": "core",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "flag": "inheritedTomb"
                }
              },
              "fail": {
                "text": "El umbral cobra un precio pequeño y exacto: una certeza íntima desaparece de tu mente.",
                "next": "core",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Marcar la puerta con tiza consagrada",
              "stat": "ocultismo",
              "dc": 11,
              "success": {
                "text": "La precaución te salva de lo evidente. Dejas una salida, una marca o una prueba que aún pertenece al mundo humano.",
                "next": "core",
                "effects": {
                  "clues": 1,
                  "item": "Retrato vuelto"
                }
              },
              "fail": {
                "text": "La precaución se vuelve ritual sin quererlo. Has llamado la atención de algo que aprecia las formalidades.",
                "next": "core",
                "effects": {
                  "dread": 3,
                  "sanity": -1
                }
              }
            }
          ]
        },
        {
          "id": "core",
          "location": "Interior prestado · hora antigua",
          "art": "▦",
          "text": "La cripta parece una habitación preparada para invitados. Hay copas secas, retratos vueltos y una silla vacía con polvo removido hace minutos.",
          "choices": [
            {
              "label": "Sentarte en la silla vacía",
              "stat": "presencia",
              "dc": 13,
              "success": {
                "text": "La confrontación no vence al horror, pero le impide completarse. Robas segundos, pruebas y una grieta para escapar.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -2
                }
              },
              "fail": {
                "text": "Intentas imponer escala humana a algo que no la necesita. Tu cuerpo sale entero; tu interpretación no.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Robar el retrato vuelto",
              "stat": "movimiento",
              "dc": 12,
              "success": {
                "text": "El gesto arriesgado funciona. Obtienes una prueba irrefutable, aunque parece mirarte cada vez que cierras la mano.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "item": "Retrato vuelto",
                  "sanity": -1
                }
              },
              "fail": {
                "text": "La prueba se resiste a pertenecer a este mundo. Te hiere de una forma difícil de explicar en un informe.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Acta testamentaria · alba",
          "art": "✎",
          "text": "El amanecer devuelve cordura a los vivos, pero los muertos han aprendido tu voz. La familia exige una explicación aceptable.",
          "choices": [
            {
              "label": "Redactar un informe médico",
              "stat": "razon",
              "dc": 12,
              "success": {
                "text": "El expediente queda completo y peligroso. Quien lo lea no dormirá mejor, pero podrá reconocer la próxima señal.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "flag": "inheritedTomb"
                }
              },
              "fail": {
                "text": "La verdad se presenta mal y parece delirio. El mundo se protege burlándose de ti.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Sellar el mausoleo sin explicar nada",
              "stat": "ocultismo",
              "dc": 10,
              "success": {
                "text": "Cierras el caso con una mentira útil. Sobrevives, aunque el archivo privado queda más pesado que antes.",
                "next": "END_SURVIVE",
                "effects": {
                  "dread": -1
                }
              },
              "fail": {
                "text": "La mentira no tapa la grieta; solo le enseña a hablar con tu letra.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "nyarlathotep",
      "title": "Expediente XI · El teatro de Nyarlathotep",
      "source": "Inspirado en Nyarlathotep",
      "difficulty": 14,
      "badge": "MULTITUD · ELECTRICIDAD · PROFECÍA",
      "intro": "Un demostrador ambulante llena teatros con aparatos eléctricos, imágenes imposibles y anuncios de un futuro que llega deformado.",
      "stages": [
        {
          "id": "start",
          "location": "Cartelera de Arkham · 19:30",
          "art": "☇",
          "text": "La ciudad entera hace cola. Los carteles prometen maravillas científicas, pero las letras cambian cuando nadie las mira. Tu entrada ya lleva tu firma.",
          "choices": [
            {
              "label": "Comparar los carteles cambiantes",
              "stat": "percepcion",
              "dc": 13,
              "success": {
                "text": "La primera lectura encaja: el caso no es superstición, sino una mecánica oculta que alguien activó con precisión. Obtienes una pista limpia y un camino de entrada.",
                "next": "trail",
                "effects": {
                  "clues": 2,
                  "note": "Entrada sólida en El teatro de Nyarlathotep."
                }
              },
              "fail": {
                "text": "La escena te devuelve una explicación demasiado cómoda. Cuando corriges tu error, ya has perdido tiempo y la atmósfera parece más densa.",
                "next": "trail",
                "effects": {
                  "sanity": -1,
                  "dread": 1
                }
              }
            },
            {
              "label": "Comprar dos entradas falsas",
              "stat": "presencia",
              "dc": 14,
              "success": {
                "text": "Consigues una versión que nadie quería decir en voz alta. No aclara el horror, pero delimita su forma y te permite avanzar sin pisar a ciegas.",
                "next": "trail",
                "effects": {
                  "clues": 1,
                  "item": "Entrada con firma futura",
                  "note": "Prueba inicial: Entrada con firma futura."
                }
              },
              "fail": {
                "text": "La conversación se cierra de golpe. En el silencio posterior oyes una repetición de tu propia pregunta desde un lugar equivocado.",
                "next": "trail",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "trail",
          "location": "Teatro Faraónico · función única",
          "art": "☇",
          "text": "En la sala, la multitud ríe antes de que ocurra nada. El demostrador habla poco; cada palabra parece traducida por la luz de los proyectores.",
          "choices": [
            {
              "label": "Observar al público, no al escenario",
              "stat": "temple",
              "dc": 14,
              "success": {
                "text": "Separas el rastro real de la escenografía del miedo. La pista principal conduce a un umbral que nadie debería haber abierto.",
                "next": "threshold",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "note": "Rastro principal confirmado."
                }
              },
              "fail": {
                "text": "Confundes señal y ruido. El lugar parece reorganizarse para que toda salida sea una entrada.",
                "next": "threshold",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            },
            {
              "label": "Analizar los aparatos de demostración",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "El método funciona. No entiendes todo lo que ves, pero sí lo suficiente para no obedecerlo.",
                "next": "threshold",
                "effects": {
                  "clues": 1,
                  "dread": 1
                }
              },
              "fail": {
                "text": "Tu método llega tarde. Algo ya ha aprendido a parecer una pista fiable.",
                "next": "threshold",
                "effects": {
                  "health": -1,
                  "sanity": -2
                }
              }
            }
          ]
        },
        {
          "id": "threshold",
          "location": "Cabina eléctrica · entreacto",
          "art": "☇",
          "text": "La cabina eléctrica contiene bobinas conectadas a fotografías de los asistentes. En la tuya aparece un lugar que visitarás mañana si sobrevives.",
          "choices": [
            {
              "label": "Cortar una bobina de la cabina",
              "stat": "movimiento",
              "dc": 15,
              "success": {
                "text": "Cruzas el límite sin concederle tu nombre. El horror reacciona, pero no consigue cerrarse sobre ti.",
                "next": "core",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "flag": "blackTheatre"
                }
              },
              "fail": {
                "text": "El umbral cobra un precio pequeño y exacto: una certeza íntima desaparece de tu mente.",
                "next": "core",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Leer la fotografía de tu futuro",
              "stat": "ocultismo",
              "dc": 14,
              "success": {
                "text": "La precaución te salva de lo evidente. Dejas una salida, una marca o una prueba que aún pertenece al mundo humano.",
                "next": "core",
                "effects": {
                  "clues": 1,
                  "item": "Entrada con firma futura"
                }
              },
              "fail": {
                "text": "La precaución se vuelve ritual sin quererlo. Has llamado la atención de algo que aprecia las formalidades.",
                "next": "core",
                "effects": {
                  "dread": 3,
                  "sanity": -1
                }
              }
            }
          ]
        },
        {
          "id": "core",
          "location": "Escenario negro · sin público",
          "art": "☇",
          "text": "El telón cae hacia arriba. El público desaparece y queda una calle infinita, llena de figuras que marchan bajo soles apagados.",
          "choices": [
            {
              "label": "Seguir al demostrador al escenario",
              "stat": "temple",
              "dc": 16,
              "success": {
                "text": "La confrontación no vence al horror, pero le impide completarse. Robas segundos, pruebas y una grieta para escapar.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -2
                }
              },
              "fail": {
                "text": "Intentas imponer escala humana a algo que no la necesita. Tu cuerpo sale entero; tu interpretación no.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Guiar a un espectador perdido",
              "stat": "presencia",
              "dc": 15,
              "success": {
                "text": "El gesto arriesgado funciona. Obtienes una prueba irrefutable, aunque parece mirarte cada vez que cierras la mano.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "item": "Entrada con firma futura",
                  "sanity": -1
                }
              },
              "fail": {
                "text": "La prueba se resiste a pertenecer a este mundo. Te hiere de una forma difícil de explicar en un informe.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Crónica censurada · madrugada",
          "art": "✎",
          "text": "La prensa quiere una reseña. La policía quiere nombres. Algo en tu sombra quiere volver al teatro.",
          "choices": [
            {
              "label": "Publicar la crónica completa",
              "stat": "presencia",
              "dc": 15,
              "success": {
                "text": "El expediente queda completo y peligroso. Quien lo lea no dormirá mejor, pero podrá reconocer la próxima señal.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "flag": "blackTheatre"
                }
              },
              "fail": {
                "text": "La verdad se presenta mal y parece delirio. El mundo se protege burlándose de ti.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Censurar los nombres y guardar la entrada",
              "stat": "razon",
              "dc": 12,
              "success": {
                "text": "Cierras el caso con una mentira útil. Sobrevives, aunque el archivo privado queda más pesado que antes.",
                "next": "END_SURVIVE",
                "effects": {
                  "dread": -1
                }
              },
              "fail": {
                "text": "La mentira no tapa la grieta; solo le enseña a hablar con tu letra.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "nameless_city",
      "title": "Expediente XII · La ciudad sin nombre",
      "source": "Inspirado en La ciudad sin nombre",
      "difficulty": 13,
      "badge": "DESIERTO · RUINA · PROFUNDIDAD",
      "intro": "Una expedición arqueológica halla torres erosionadas en un desierto donde las brújulas giran hacia abajo.",
      "stages": [
        {
          "id": "start",
          "location": "Campamento del desierto · 16:00",
          "art": "𓂀",
          "text": "El sol cae sobre muros tan viejos que parecen anteriores a la idea de muro. Los camelleros se niegan a cruzar la primera avenida.",
          "choices": [
            {
              "label": "Medir las torres erosionadas",
              "stat": "razon",
              "dc": 12,
              "success": {
                "text": "La primera lectura encaja: el caso no es superstición, sino una mecánica oculta que alguien activó con precisión. Obtienes una pista limpia y un camino de entrada.",
                "next": "trail",
                "effects": {
                  "clues": 2,
                  "note": "Entrada sólida en La ciudad sin nombre."
                }
              },
              "fail": {
                "text": "La escena te devuelve una explicación demasiado cómoda. Cuando corriges tu error, ya has perdido tiempo y la atmósfera parece más densa.",
                "next": "trail",
                "effects": {
                  "sanity": -1,
                  "dread": 1
                }
              }
            },
            {
              "label": "Convencer a un guía para hablar",
              "stat": "presencia",
              "dc": 13,
              "success": {
                "text": "Consigues una versión que nadie quería decir en voz alta. No aclara el horror, pero delimita su forma y te permite avanzar sin pisar a ciegas.",
                "next": "trail",
                "effects": {
                  "clues": 1,
                  "item": "Calco de bajorrelieve reptiliano",
                  "note": "Prueba inicial: Calco de bajorrelieve reptiliano."
                }
              },
              "fail": {
                "text": "La conversación se cierra de golpe. En el silencio posterior oyes una repetición de tu propia pregunta desde un lugar equivocado.",
                "next": "trail",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "trail",
          "location": "Avenida hundida · ocaso",
          "art": "𓂀",
          "text": "Las piedras muestran puertas demasiado bajas para un hombre y demasiado altas para un animal. Una corriente fría sale de la arena.",
          "choices": [
            {
              "label": "Seguir la corriente fría",
              "stat": "percepcion",
              "dc": 13,
              "success": {
                "text": "Separas el rastro real de la escenografía del miedo. La pista principal conduce a un umbral que nadie debería haber abierto.",
                "next": "threshold",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "note": "Rastro principal confirmado."
                }
              },
              "fail": {
                "text": "Confundes señal y ruido. El lugar parece reorganizarse para que toda salida sea una entrada.",
                "next": "threshold",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            },
            {
              "label": "Dibujar las puertas imposibles",
              "stat": "razon",
              "dc": 12,
              "success": {
                "text": "El método funciona. No entiendes todo lo que ves, pero sí lo suficiente para no obedecerlo.",
                "next": "threshold",
                "effects": {
                  "clues": 1,
                  "dread": 1
                }
              },
              "fail": {
                "text": "Tu método llega tarde. Algo ya ha aprendido a parecer una pista fiable.",
                "next": "threshold",
                "effects": {
                  "health": -1,
                  "sanity": -2
                }
              }
            }
          ]
        },
        {
          "id": "threshold",
          "location": "Escalera bajo la arena · noche",
          "art": "𓂀",
          "text": "La escalera desciende durante horas sin cambiar de dirección. En cada descanso hay relieves de seres que veneran su propia extinción.",
          "choices": [
            {
              "label": "Descender sin cuerda para no alertar nada",
              "stat": "temple",
              "dc": 14,
              "success": {
                "text": "Cruzas el límite sin concederle tu nombre. El horror reacciona, pero no consigue cerrarse sobre ti.",
                "next": "core",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "flag": "namelessDescent"
                }
              },
              "fail": {
                "text": "El umbral cobra un precio pequeño y exacto: una certeza íntima desaparece de tu mente.",
                "next": "core",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Dejar marcas cada trece escalones",
              "stat": "movimiento",
              "dc": 13,
              "success": {
                "text": "La precaución te salva de lo evidente. Dejas una salida, una marca o una prueba que aún pertenece al mundo humano.",
                "next": "core",
                "effects": {
                  "clues": 1,
                  "item": "Calco de bajorrelieve reptiliano"
                }
              },
              "fail": {
                "text": "La precaución se vuelve ritual sin quererlo. Has llamado la atención de algo que aprecia las formalidades.",
                "next": "core",
                "effects": {
                  "dread": 3,
                  "sanity": -1
                }
              }
            }
          ]
        },
        {
          "id": "core",
          "location": "Galería de bajorrelieves · sin aire",
          "art": "𓂀",
          "text": "La galería final contiene una procesión tallada hacia una puerta abierta. El aire que sale por ella trae olor a reptiles, sal y bibliotecas quemadas.",
          "choices": [
            {
              "label": "Interpretar la procesión tallada",
              "stat": "ocultismo",
              "dc": 15,
              "success": {
                "text": "La confrontación no vence al horror, pero le impide completarse. Robas segundos, pruebas y una grieta para escapar.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -2
                }
              },
              "fail": {
                "text": "Intentas imponer escala humana a algo que no la necesita. Tu cuerpo sale entero; tu interpretación no.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Cerrar la puerta con una losa caída",
              "stat": "movimiento",
              "dc": 14,
              "success": {
                "text": "El gesto arriesgado funciona. Obtienes una prueba irrefutable, aunque parece mirarte cada vez que cierras la mano.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "item": "Calco de bajorrelieve reptiliano",
                  "sanity": -1
                }
              },
              "fail": {
                "text": "La prueba se resiste a pertenecer a este mundo. Te hiere de una forma difícil de explicar en un informe.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Cuaderno de campo · amanecer",
          "art": "✎",
          "text": "Al volver, el campamento está en silencio. Las huellas de los camellos conducen hacia la ciudad, no hacia el desierto.",
          "choices": [
            {
              "label": "Entregar el cuaderno a la universidad",
              "stat": "razon",
              "dc": 14,
              "success": {
                "text": "El expediente queda completo y peligroso. Quien lo lea no dormirá mejor, pero podrá reconocer la próxima señal.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "flag": "namelessDescent"
                }
              },
              "fail": {
                "text": "La verdad se presenta mal y parece delirio. El mundo se protege burlándose de ti.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Borrar las coordenadas del mapa",
              "stat": "temple",
              "dc": 11,
              "success": {
                "text": "Cierras el caso con una mentira útil. Sobrevives, aunque el archivo privado queda más pesado que antes.",
                "next": "END_SURVIVE",
                "effects": {
                  "dread": -1
                }
              },
              "fail": {
                "text": "La mentira no tapa la grieta; solo le enseña a hablar con tu letra.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "zann",
      "title": "Expediente XIII · La partitura de Erich Zann",
      "source": "Inspirado en La música de Erich Zann",
      "difficulty": 12,
      "badge": "MÚSICA · BUHARDILLA · VACÍO",
      "intro": "En una calle que no aparece dos veces en el mismo plano, un violinista anciano toca cada noche para mantener cerrada una ventana.",
      "stages": [
        {
          "id": "start",
          "location": "Rue d’Auseil · niebla baja",
          "art": "♬",
          "text": "Encuentras la calle por error y sabes que no podrás explicarla. Cada farola está más alta que la anterior y todas las puertas escuchan.",
          "choices": [
            {
              "label": "Memorizar la ruta de la calle",
              "stat": "percepcion",
              "dc": 11,
              "success": {
                "text": "La primera lectura encaja: el caso no es superstición, sino una mecánica oculta que alguien activó con precisión. Obtienes una pista limpia y un camino de entrada.",
                "next": "trail",
                "effects": {
                  "clues": 2,
                  "note": "Entrada sólida en La partitura de Erich Zann."
                }
              },
              "fail": {
                "text": "La escena te devuelve una explicación demasiado cómoda. Cuando corriges tu error, ya has perdido tiempo y la atmósfera parece más densa.",
                "next": "trail",
                "effects": {
                  "sanity": -1,
                  "dread": 1
                }
              }
            },
            {
              "label": "Preguntar por el violinista al portero",
              "stat": "presencia",
              "dc": 12,
              "success": {
                "text": "Consigues una versión que nadie quería decir en voz alta. No aclara el horror, pero delimita su forma y te permite avanzar sin pisar a ciegas.",
                "next": "trail",
                "effects": {
                  "clues": 1,
                  "item": "Pentagrama de la calle perdida",
                  "note": "Prueba inicial: Pentagrama de la calle perdida."
                }
              },
              "fail": {
                "text": "La conversación se cierra de golpe. En el silencio posterior oyes una repetición de tu propia pregunta desde un lugar equivocado.",
                "next": "trail",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "trail",
          "location": "Escalera inclinada · 23:06",
          "art": "♬",
          "text": "La escalera sube en ángulos que cansan la memoria. Desde arriba llega un violín furioso, como si discutiera con algo sin pulmones.",
          "choices": [
            {
              "label": "Subir contando cada rellano",
              "stat": "temple",
              "dc": 12,
              "success": {
                "text": "Separas el rastro real de la escenografía del miedo. La pista principal conduce a un umbral que nadie debería haber abierto.",
                "next": "threshold",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "note": "Rastro principal confirmado."
                }
              },
              "fail": {
                "text": "Confundes señal y ruido. El lugar parece reorganizarse para que toda salida sea una entrada.",
                "next": "threshold",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            },
            {
              "label": "Analizar el patrón musical desde abajo",
              "stat": "razon",
              "dc": 11,
              "success": {
                "text": "El método funciona. No entiendes todo lo que ves, pero sí lo suficiente para no obedecerlo.",
                "next": "threshold",
                "effects": {
                  "clues": 1,
                  "dread": 1
                }
              },
              "fail": {
                "text": "Tu método llega tarde. Algo ya ha aprendido a parecer una pista fiable.",
                "next": "threshold",
                "effects": {
                  "health": -1,
                  "sanity": -2
                }
              }
            }
          ]
        },
        {
          "id": "threshold",
          "location": "Buhardilla del músico · medianoche",
          "art": "♬",
          "text": "Zann no quiere hablar. Sus manos tiemblan al cubrir la ventana con una cortina pesada. En su mesa hay una partitura escrita con notas tachadas por miedo.",
          "choices": [
            {
              "label": "Leer la partitura prohibida",
              "stat": "ocultismo",
              "dc": 13,
              "success": {
                "text": "Cruzas el límite sin concederle tu nombre. El horror reacciona, pero no consigue cerrarse sobre ti.",
                "next": "core",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "flag": "zannWindow"
                }
              },
              "fail": {
                "text": "El umbral cobra un precio pequeño y exacto: una certeza íntima desaparece de tu mente.",
                "next": "core",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Sujetar la cortina antes del último compás",
              "stat": "movimiento",
              "dc": 12,
              "success": {
                "text": "La precaución te salva de lo evidente. Dejas una salida, una marca o una prueba que aún pertenece al mundo humano.",
                "next": "core",
                "effects": {
                  "clues": 1,
                  "item": "Pentagrama de la calle perdida"
                }
              },
              "fail": {
                "text": "La precaución se vuelve ritual sin quererlo. Has llamado la atención de algo que aprecia las formalidades.",
                "next": "core",
                "effects": {
                  "dread": 3,
                  "sanity": -1
                }
              }
            }
          ]
        },
        {
          "id": "core",
          "location": "Ventana sin mundo · compás final",
          "art": "♬",
          "text": "La cortina se rasga. Detrás no hay ciudad, ni cielo: solo una profundidad donde la música cae y algo responde desde abajo con silencio afinado.",
          "choices": [
            {
              "label": "Tocar una nota para distraer al vacío",
              "stat": "presencia",
              "dc": 14,
              "success": {
                "text": "La confrontación no vence al horror, pero le impide completarse. Robas segundos, pruebas y una grieta para escapar.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -2
                }
              },
              "fail": {
                "text": "Intentas imponer escala humana a algo que no la necesita. Tu cuerpo sale entero; tu interpretación no.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Romper el arco del violín",
              "stat": "movimiento",
              "dc": 13,
              "success": {
                "text": "El gesto arriesgado funciona. Obtienes una prueba irrefutable, aunque parece mirarte cada vez que cierras la mano.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "item": "Pentagrama de la calle perdida",
                  "sanity": -1
                }
              },
              "fail": {
                "text": "La prueba se resiste a pertenecer a este mundo. Te hiere de una forma difícil de explicar en un informe.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Partitura incompleta · alba",
          "art": "✎",
          "text": "Despiertas en una calle ordinaria con tres pentagramas en el bolsillo. Si los tocas, quizá recuerdes el camino. Si no, quizá alguien más lo encuentre.",
          "choices": [
            {
              "label": "Guardar los pentagramas en tu archivo",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "El expediente queda completo y peligroso. Quien lo lea no dormirá mejor, pero podrá reconocer la próxima señal.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "flag": "zannWindow"
                }
              },
              "fail": {
                "text": "La verdad se presenta mal y parece delirio. El mundo se protege burlándose de ti.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Quemar la partitura sin leerla de nuevo",
              "stat": "temple",
              "dc": 10,
              "success": {
                "text": "Cierras el caso con una mentira útil. Sobrevives, aunque el archivo privado queda más pesado que antes.",
                "next": "END_SURVIVE",
                "effects": {
                  "dread": -1
                }
              },
              "fail": {
                "text": "La mentira no tapa la grieta; solo le enseña a hablar con tu letra.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "pickman",
      "title": "Expediente XIV · El negativo de Pickman",
      "source": "Inspirado en El modelo de Pickman",
      "difficulty": 13,
      "badge": "ARTE · SUBSUELO · MODELO",
      "intro": "Un pintor expulsado de todos los círculos artísticos deja una carpeta de negativos donde sus monstruos salen demasiado enfocados.",
      "stages": [
        {
          "id": "start",
          "location": "Galería cerrada · 20:45",
          "art": "◉",
          "text": "El marchante insiste en que eran fantasías. Luego te muestra un lienzo mordido desde el reverso y una fotografía que no debería tener profundidad.",
          "choices": [
            {
              "label": "Examinar el lienzo mordido",
              "stat": "percepcion",
              "dc": 12,
              "success": {
                "text": "La primera lectura encaja: el caso no es superstición, sino una mecánica oculta que alguien activó con precisión. Obtienes una pista limpia y un camino de entrada.",
                "next": "trail",
                "effects": {
                  "clues": 2,
                  "note": "Entrada sólida en El negativo de Pickman."
                }
              },
              "fail": {
                "text": "La escena te devuelve una explicación demasiado cómoda. Cuando corriges tu error, ya has perdido tiempo y la atmósfera parece más densa.",
                "next": "trail",
                "effects": {
                  "sanity": -1,
                  "dread": 1
                }
              }
            },
            {
              "label": "Presionar al marchante",
              "stat": "presencia",
              "dc": 13,
              "success": {
                "text": "Consigues una versión que nadie quería decir en voz alta. No aclara el horror, pero delimita su forma y te permite avanzar sin pisar a ciegas.",
                "next": "trail",
                "effects": {
                  "clues": 1,
                  "item": "Negativo del modelo real",
                  "note": "Prueba inicial: Negativo del modelo real."
                }
              },
              "fail": {
                "text": "La conversación se cierra de golpe. En el silencio posterior oyes una repetición de tu propia pregunta desde un lugar equivocado.",
                "next": "trail",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "trail",
          "location": "Estudio subterráneo · 22:20",
          "art": "◉",
          "text": "El estudio está bajo una casa vieja. Hay pigmentos, huesos pequeños y mapas de túneles que conectan sótanos con cementerios.",
          "choices": [
            {
              "label": "Comparar mapas con cementerios",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "Separas el rastro real de la escenografía del miedo. La pista principal conduce a un umbral que nadie debería haber abierto.",
                "next": "threshold",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "note": "Rastro principal confirmado."
                }
              },
              "fail": {
                "text": "Confundes señal y ruido. El lugar parece reorganizarse para que toda salida sea una entrada.",
                "next": "threshold",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            },
            {
              "label": "Bajar al estudio sin lámpara fuerte",
              "stat": "temple",
              "dc": 12,
              "success": {
                "text": "El método funciona. No entiendes todo lo que ves, pero sí lo suficiente para no obedecerlo.",
                "next": "threshold",
                "effects": {
                  "clues": 1,
                  "dread": 1
                }
              },
              "fail": {
                "text": "Tu método llega tarde. Algo ya ha aprendido a parecer una pista fiable.",
                "next": "threshold",
                "effects": {
                  "health": -1,
                  "sanity": -2
                }
              }
            }
          ]
        },
        {
          "id": "threshold",
          "location": "Túneles de North End · 00:09",
          "art": "◉",
          "text": "Las paredes del túnel están arañadas por uñas humanas que iban hacia abajo. La cámara de Pickman cuelga de un clavo, cargada con un último negativo.",
          "choices": [
            {
              "label": "Revelar el último negativo",
              "stat": "razon",
              "dc": 14,
              "success": {
                "text": "Cruzas el límite sin concederle tu nombre. El horror reacciona, pero no consigue cerrarse sobre ti.",
                "next": "core",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "flag": "pickmanProof"
                }
              },
              "fail": {
                "text": "El umbral cobra un precio pequeño y exacto: una certeza íntima desaparece de tu mente.",
                "next": "core",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Seguir las uñas hacia abajo",
              "stat": "movimiento",
              "dc": 13,
              "success": {
                "text": "La precaución te salva de lo evidente. Dejas una salida, una marca o una prueba que aún pertenece al mundo humano.",
                "next": "core",
                "effects": {
                  "clues": 1,
                  "item": "Negativo del modelo real"
                }
              },
              "fail": {
                "text": "La precaución se vuelve ritual sin quererlo. Has llamado la atención de algo que aprecia las formalidades.",
                "next": "core",
                "effects": {
                  "dread": 3,
                  "sanity": -1
                }
              }
            }
          ]
        },
        {
          "id": "core",
          "location": "Sala del modelo · sin luz",
          "art": "◉",
          "text": "La sala del modelo no contiene estatua ni cadáver. Contiene una silla infantil frente a un agujero negro en la pared. Desde dentro llega olor a cena familiar.",
          "choices": [
            {
              "label": "Fotografiar el agujero de la pared",
              "stat": "temple",
              "dc": 15,
              "success": {
                "text": "La confrontación no vence al horror, pero le impide completarse. Robas segundos, pruebas y una grieta para escapar.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -2
                }
              },
              "fail": {
                "text": "Intentas imponer escala humana a algo que no la necesita. Tu cuerpo sale entero; tu interpretación no.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Tapar el agujero con lienzos húmedos",
              "stat": "movimiento",
              "dc": 14,
              "success": {
                "text": "El gesto arriesgado funciona. Obtienes una prueba irrefutable, aunque parece mirarte cada vez que cierras la mano.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "item": "Negativo del modelo real",
                  "sanity": -1
                }
              },
              "fail": {
                "text": "La prueba se resiste a pertenecer a este mundo. Te hiere de una forma difícil de explicar en un informe.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Catálogo privado · mañana",
          "art": "✎",
          "text": "El negativo revelado demuestra que Pickman no inventaba. El problema es que algo aparece detrás de ti, aprendiendo a posar.",
          "choices": [
            {
              "label": "Ocultar el negativo en una caja sellada",
              "stat": "ocultismo",
              "dc": 14,
              "success": {
                "text": "El expediente queda completo y peligroso. Quien lo lea no dormirá mejor, pero podrá reconocer la próxima señal.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "flag": "pickmanProof"
                }
              },
              "fail": {
                "text": "La verdad se presenta mal y parece delirio. El mundo se protege burlándose de ti.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Publicar solo el catálogo censurado",
              "stat": "presencia",
              "dc": 11,
              "success": {
                "text": "Cierras el caso con una mentira útil. Sobrevives, aunque el archivo privado queda más pesado que antes.",
                "next": "END_SURVIVE",
                "effects": {
                  "dread": -1
                }
              },
              "fail": {
                "text": "La mentira no tapa la grieta; solo le enseña a hablar con tu letra.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "shunned_house",
      "title": "Expediente XV · La casa que evitaban los vivos",
      "source": "Inspirado en La casa evitada",
      "difficulty": 12,
      "badge": "CASA · HUMEDAD · RAÍZ",
      "intro": "Una vivienda colonial permanece vacía desde hace décadas. Nadie muere dentro de inmediato; primero empieza a parecerse a quien vivió allí antes.",
      "stages": [
        {
          "id": "start",
          "location": "Calle Benefit · lluvia fina",
          "art": "⌂",
          "text": "Los vecinos bajan la voz al señalar la fachada. Las ventanas están limpias por dentro, aunque nadie tiene llave desde hace años.",
          "choices": [
            {
              "label": "Revisar la cadena de propietarios",
              "stat": "razon",
              "dc": 11,
              "success": {
                "text": "La primera lectura encaja: el caso no es superstición, sino una mecánica oculta que alguien activó con precisión. Obtienes una pista limpia y un camino de entrada.",
                "next": "trail",
                "effects": {
                  "clues": 2,
                  "note": "Entrada sólida en La casa que evitaban los vivos."
                }
              },
              "fail": {
                "text": "La escena te devuelve una explicación demasiado cómoda. Cuando corriges tu error, ya has perdido tiempo y la atmósfera parece más densa.",
                "next": "trail",
                "effects": {
                  "sanity": -1,
                  "dread": 1
                }
              }
            },
            {
              "label": "Hablar con los vecinos mayores",
              "stat": "presencia",
              "dc": 12,
              "success": {
                "text": "Consigues una versión que nadie quería decir en voz alta. No aclara el horror, pero delimita su forma y te permite avanzar sin pisar a ciegas.",
                "next": "trail",
                "effects": {
                  "clues": 1,
                  "item": "Frasco de humedad amarilla",
                  "note": "Prueba inicial: Frasco de humedad amarilla."
                }
              },
              "fail": {
                "text": "La conversación se cierra de golpe. En el silencio posterior oyes una repetición de tu propia pregunta desde un lugar equivocado.",
                "next": "trail",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "trail",
          "location": "Sótano de la casa · 21:00",
          "art": "⌂",
          "text": "En el sótano, la humedad dibuja perfiles humanos. Una mesa vieja conserva vasos con un residuo que se mueve cuando respiras.",
          "choices": [
            {
              "label": "Tomar muestra de la humedad",
              "stat": "percepcion",
              "dc": 12,
              "success": {
                "text": "Separas el rastro real de la escenografía del miedo. La pista principal conduce a un umbral que nadie debería haber abierto.",
                "next": "threshold",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "note": "Rastro principal confirmado."
                }
              },
              "fail": {
                "text": "Confundes señal y ruido. El lugar parece reorganizarse para que toda salida sea una entrada.",
                "next": "threshold",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            },
            {
              "label": "Dormir una hora en la planta baja",
              "stat": "temple",
              "dc": 11,
              "success": {
                "text": "El método funciona. No entiendes todo lo que ves, pero sí lo suficiente para no obedecerlo.",
                "next": "threshold",
                "effects": {
                  "clues": 1,
                  "dread": 1
                }
              },
              "fail": {
                "text": "Tu método llega tarde. Algo ya ha aprendido a parecer una pista fiable.",
                "next": "threshold",
                "effects": {
                  "health": -1,
                  "sanity": -2
                }
              }
            }
          ]
        },
        {
          "id": "threshold",
          "location": "Muro húmedo · medianoche",
          "art": "⌂",
          "text": "Tras picar el muro aparece una cavidad con tierra amarilla. No es una raíz exactamente; es una memoria vegetal que ha aprendido anatomía.",
          "choices": [
            {
              "label": "Abrir el muro enfermo",
              "stat": "movimiento",
              "dc": 13,
              "success": {
                "text": "Cruzas el límite sin concederle tu nombre. El horror reacciona, pero no consigue cerrarse sobre ti.",
                "next": "core",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "flag": "shunnedRoot"
                }
              },
              "fail": {
                "text": "El umbral cobra un precio pequeño y exacto: una certeza íntima desaparece de tu mente.",
                "next": "core",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Trazar un círculo de cal",
              "stat": "ocultismo",
              "dc": 12,
              "success": {
                "text": "La precaución te salva de lo evidente. Dejas una salida, una marca o una prueba que aún pertenece al mundo humano.",
                "next": "core",
                "effects": {
                  "clues": 1,
                  "item": "Frasco de humedad amarilla"
                }
              },
              "fail": {
                "text": "La precaución se vuelve ritual sin quererlo. Has llamado la atención de algo que aprecia las formalidades.",
                "next": "core",
                "effects": {
                  "dread": 3,
                  "sanity": -1
                }
              }
            }
          ]
        },
        {
          "id": "core",
          "location": "Raíz amarilla · hora enferma",
          "art": "⌂",
          "text": "La cosa bajo la casa absorbe nombres, fiebre y linajes. En la pared se forma tu rostro con una expresión de alguien que ya ha cedido.",
          "choices": [
            {
              "label": "Arrancar la raíz amarilla",
              "stat": "movimiento",
              "dc": 14,
              "success": {
                "text": "La confrontación no vence al horror, pero le impide completarse. Robas segundos, pruebas y una grieta para escapar.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -2
                }
              },
              "fail": {
                "text": "Intentas imponer escala humana a algo que no la necesita. Tu cuerpo sale entero; tu interpretación no.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Nombrar a los muertos para distraerla",
              "stat": "ocultismo",
              "dc": 13,
              "success": {
                "text": "El gesto arriesgado funciona. Obtienes una prueba irrefutable, aunque parece mirarte cada vez que cierras la mano.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "item": "Frasco de humedad amarilla",
                  "sanity": -1
                }
              },
              "fail": {
                "text": "La prueba se resiste a pertenecer a este mundo. Te hiere de una forma difícil de explicar en un informe.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Demolición parcial · alba",
          "art": "✎",
          "text": "La casa tiembla como si despertara. Puedes convertir el hallazgo en ciencia o enterrarlo bajo escombros y cal.",
          "choices": [
            {
              "label": "Enviar muestras al laboratorio",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "El expediente queda completo y peligroso. Quien lo lea no dormirá mejor, pero podrá reconocer la próxima señal.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "flag": "shunnedRoot"
                }
              },
              "fail": {
                "text": "La verdad se presenta mal y parece delirio. El mundo se protege burlándose de ti.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Ordenar la demolición inmediata",
              "stat": "presencia",
              "dc": 10,
              "success": {
                "text": "Cierras el caso con una mentira útil. Sobrevives, aunque el archivo privado queda más pesado que antes.",
                "next": "END_SURVIVE",
                "effects": {
                  "dread": -1
                }
              },
              "fail": {
                "text": "La mentira no tapa la grieta; solo le enseña a hablar con tu letra.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "festival",
      "title": "Expediente XVI · El ceremonial de Kingsport",
      "source": "Inspirado en El ceremonial",
      "difficulty": 13,
      "badge": "SOLSTICIO · MÁSCARAS · SUBTERRÁNEO",
      "intro": "Una invitación familiar te convoca a Kingsport durante una festividad de invierno. Nadie reconoce tu apellido, pero todos esperaban tu llegada.",
      "stages": [
        {
          "id": "start",
          "location": "Kingsport · noche de hielo",
          "art": "✶",
          "text": "La ciudad parece tallada en escarcha. Una procesión de vecinos encapuchados avanza sin dejar huellas y tu invitación late dentro del abrigo.",
          "choices": [
            {
              "label": "Seguir la procesión a distancia",
              "stat": "percepcion",
              "dc": 12,
              "success": {
                "text": "La primera lectura encaja: el caso no es superstición, sino una mecánica oculta que alguien activó con precisión. Obtienes una pista limpia y un camino de entrada.",
                "next": "trail",
                "effects": {
                  "clues": 2,
                  "note": "Entrada sólida en El ceremonial de Kingsport."
                }
              },
              "fail": {
                "text": "La escena te devuelve una explicación demasiado cómoda. Cuando corriges tu error, ya has perdido tiempo y la atmósfera parece más densa.",
                "next": "trail",
                "effects": {
                  "sanity": -1,
                  "dread": 1
                }
              }
            },
            {
              "label": "Preguntar por tu apellido",
              "stat": "presencia",
              "dc": 13,
              "success": {
                "text": "Consigues una versión que nadie quería decir en voz alta. No aclara el horror, pero delimita su forma y te permite avanzar sin pisar a ciegas.",
                "next": "trail",
                "effects": {
                  "clues": 1,
                  "item": "Máscara ceremonial sin ojos",
                  "note": "Prueba inicial: Máscara ceremonial sin ojos."
                }
              },
              "fail": {
                "text": "La conversación se cierra de golpe. En el silencio posterior oyes una repetición de tu propia pregunta desde un lugar equivocado.",
                "next": "trail",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "trail",
          "location": "Casa de los antepasados · 23:00",
          "art": "✶",
          "text": "La casa familiar está ocupada por una figura demasiado quieta. Te ofrece pan negro y un libro encuadernado con material que prefieres no identificar.",
          "choices": [
            {
              "label": "Rechazar el pan negro con cortesía",
              "stat": "temple",
              "dc": 13,
              "success": {
                "text": "Separas el rastro real de la escenografía del miedo. La pista principal conduce a un umbral que nadie debería haber abierto.",
                "next": "threshold",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "note": "Rastro principal confirmado."
                }
              },
              "fail": {
                "text": "Confundes señal y ruido. El lugar parece reorganizarse para que toda salida sea una entrada.",
                "next": "threshold",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            },
            {
              "label": "Leer el índice del libro",
              "stat": "ocultismo",
              "dc": 12,
              "success": {
                "text": "El método funciona. No entiendes todo lo que ves, pero sí lo suficiente para no obedecerlo.",
                "next": "threshold",
                "effects": {
                  "clues": 1,
                  "dread": 1
                }
              },
              "fail": {
                "text": "Tu método llega tarde. Algo ya ha aprendido a parecer una pista fiable.",
                "next": "threshold",
                "effects": {
                  "health": -1,
                  "sanity": -2
                }
              }
            }
          ]
        },
        {
          "id": "threshold",
          "location": "Iglesia sin campanas · medianoche",
          "art": "✶",
          "text": "En la iglesia, las máscaras se inclinan ante un altar vacío. El suelo se abre y una corriente cálida sube desde túneles anteriores a la ciudad.",
          "choices": [
            {
              "label": "Bajar fingiendo pertenecer al culto",
              "stat": "presencia",
              "dc": 14,
              "success": {
                "text": "Cruzas el límite sin concederle tu nombre. El horror reacciona, pero no consigue cerrarse sobre ti.",
                "next": "core",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "flag": "kingsportRite"
                }
              },
              "fail": {
                "text": "El umbral cobra un precio pequeño y exacto: una certeza íntima desaparece de tu mente.",
                "next": "core",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Marcar la salida con ceniza",
              "stat": "movimiento",
              "dc": 13,
              "success": {
                "text": "La precaución te salva de lo evidente. Dejas una salida, una marca o una prueba que aún pertenece al mundo humano.",
                "next": "core",
                "effects": {
                  "clues": 1,
                  "item": "Máscara ceremonial sin ojos"
                }
              },
              "fail": {
                "text": "La precaución se vuelve ritual sin quererlo. Has llamado la atención de algo que aprecia las formalidades.",
                "next": "core",
                "effects": {
                  "dread": 3,
                  "sanity": -1
                }
              }
            }
          ]
        },
        {
          "id": "core",
          "location": "Escalera bajo la iglesia · después",
          "art": "✶",
          "text": "Abajo esperan monturas membranosas, ancianos sin rostro y una ruta hacia regiones donde las estrellas se negocian como reliquias.",
          "choices": [
            {
              "label": "Robar una máscara ceremonial",
              "stat": "movimiento",
              "dc": 15,
              "success": {
                "text": "La confrontación no vence al horror, pero le impide completarse. Robas segundos, pruebas y una grieta para escapar.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -2
                }
              },
              "fail": {
                "text": "Intentas imponer escala humana a algo que no la necesita. Tu cuerpo sale entero; tu interpretación no.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Recitar una contraoración incompleta",
              "stat": "ocultismo",
              "dc": 14,
              "success": {
                "text": "El gesto arriesgado funciona. Obtienes una prueba irrefutable, aunque parece mirarte cada vez que cierras la mano.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "item": "Máscara ceremonial sin ojos",
                  "sanity": -1
                }
              },
              "fail": {
                "text": "La prueba se resiste a pertenecer a este mundo. Te hiere de una forma difícil de explicar en un informe.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Carta familiar · amanecer",
          "art": "✎",
          "text": "Escapas con la carta original. El matasellos es de hace un siglo y el remitente comparte tu letra.",
          "choices": [
            {
              "label": "Entregar la carta a un juez",
              "stat": "razon",
              "dc": 14,
              "success": {
                "text": "El expediente queda completo y peligroso. Quien lo lea no dormirá mejor, pero podrá reconocer la próxima señal.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "flag": "kingsportRite"
                }
              },
              "fail": {
                "text": "La verdad se presenta mal y parece delirio. El mundo se protege burlándose de ti.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Romper el sello familiar",
              "stat": "temple",
              "dc": 11,
              "success": {
                "text": "Cierras el caso con una mentira útil. Sobrevives, aunque el archivo privado queda más pesado que antes.",
                "next": "END_SURVIVE",
                "effects": {
                  "dread": -1
                }
              },
              "fail": {
                "text": "La mentira no tapa la grieta; solo le enseña a hablar con tu letra.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "ward",
      "title": "Expediente XVII · El archivo de Charles Dexter Ward",
      "source": "Inspirado en El caso de Charles Dexter Ward",
      "difficulty": 14,
      "badge": "PROVIDENCE · GENEALOGÍA · INVOCACIÓN",
      "intro": "Un joven erudito desaparece de una clínica dejando polvo gris, una voz debilitada y una genealogía que conduce a un antepasado demasiado persistente.",
      "stages": [
        {
          "id": "start",
          "location": "Clínica privada · 09:00",
          "art": "☉",
          "text": "Los médicos hablan de fuga imposible. En la habitación solo hay una ventana abierta, polvo gris y una calma que asusta más que el grito de los enfermeros.",
          "choices": [
            {
              "label": "Analizar el polvo gris",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "La primera lectura encaja: el caso no es superstición, sino una mecánica oculta que alguien activó con precisión. Obtienes una pista limpia y un camino de entrada.",
                "next": "trail",
                "effects": {
                  "clues": 2,
                  "note": "Entrada sólida en El archivo de Charles Dexter Ward."
                }
              },
              "fail": {
                "text": "La escena te devuelve una explicación demasiado cómoda. Cuando corriges tu error, ya has perdido tiempo y la atmósfera parece más densa.",
                "next": "trail",
                "effects": {
                  "sanity": -1,
                  "dread": 1
                }
              }
            },
            {
              "label": "Interrogar al médico familiar",
              "stat": "presencia",
              "dc": 14,
              "success": {
                "text": "Consigues una versión que nadie quería decir en voz alta. No aclara el horror, pero delimita su forma y te permite avanzar sin pisar a ciegas.",
                "next": "trail",
                "effects": {
                  "clues": 1,
                  "item": "Frasco de sales innominadas",
                  "note": "Prueba inicial: Frasco de sales innominadas."
                }
              },
              "fail": {
                "text": "La conversación se cierra de golpe. En el silencio posterior oyes una repetición de tu propia pregunta desde un lugar equivocado.",
                "next": "trail",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "trail",
          "location": "Casa de Prospect Street · tarde",
          "art": "☉",
          "text": "La mansión conserva documentos detrás de paneles antiguos. La caligrafía de dos siglos distintos parece escrita por la misma mano cansada.",
          "choices": [
            {
              "label": "Comparar las caligrafías",
              "stat": "percepcion",
              "dc": 14,
              "success": {
                "text": "Separas el rastro real de la escenografía del miedo. La pista principal conduce a un umbral que nadie debería haber abierto.",
                "next": "threshold",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "note": "Rastro principal confirmado."
                }
              },
              "fail": {
                "text": "Confundes señal y ruido. El lugar parece reorganizarse para que toda salida sea una entrada.",
                "next": "threshold",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            },
            {
              "label": "Abrir el panel de la biblioteca",
              "stat": "movimiento",
              "dc": 13,
              "success": {
                "text": "El método funciona. No entiendes todo lo que ves, pero sí lo suficiente para no obedecerlo.",
                "next": "threshold",
                "effects": {
                  "clues": 1,
                  "dread": 1
                }
              },
              "fail": {
                "text": "Tu método llega tarde. Algo ya ha aprendido a parecer una pista fiable.",
                "next": "threshold",
                "effects": {
                  "health": -1,
                  "sanity": -2
                }
              }
            }
          ]
        },
        {
          "id": "threshold",
          "location": "Biblioteca secreta · 23:30",
          "art": "☉",
          "text": "La biblioteca oculta contiene fórmulas, cartas cruzadas y sales etiquetadas con nombres humanos. Una voz desde el suelo pide ser restaurada.",
          "choices": [
            {
              "label": "Leer las fórmulas sin pronunciarlas",
              "stat": "ocultismo",
              "dc": 15,
              "success": {
                "text": "Cruzas el límite sin concederle tu nombre. El horror reacciona, pero no consigue cerrarse sobre ti.",
                "next": "core",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "flag": "curwenArchive"
                }
              },
              "fail": {
                "text": "El umbral cobra un precio pequeño y exacto: una certeza íntima desaparece de tu mente.",
                "next": "core",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Etiquetar las sales humanas",
              "stat": "temple",
              "dc": 14,
              "success": {
                "text": "La precaución te salva de lo evidente. Dejas una salida, una marca o una prueba que aún pertenece al mundo humano.",
                "next": "core",
                "effects": {
                  "clues": 1,
                  "item": "Frasco de sales innominadas"
                }
              },
              "fail": {
                "text": "La precaución se vuelve ritual sin quererlo. Has llamado la atención de algo que aprecia las formalidades.",
                "next": "core",
                "effects": {
                  "dread": 3,
                  "sanity": -1
                }
              }
            }
          ]
        },
        {
          "id": "core",
          "location": "Laboratorio de Pawtuxet · madrugada",
          "art": "☉",
          "text": "El laboratorio subterráneo no está abandonado. Los recipientes respiran con lentitud y una figura te observa como si recordara haber sido joven.",
          "choices": [
            {
              "label": "Confrontar a la figura del laboratorio",
              "stat": "presencia",
              "dc": 16,
              "success": {
                "text": "La confrontación no vence al horror, pero le impide completarse. Robas segundos, pruebas y una grieta para escapar.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -2
                }
              },
              "fail": {
                "text": "Intentas imponer escala humana a algo que no la necesita. Tu cuerpo sale entero; tu interpretación no.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Destruir los recipientes activos",
              "stat": "movimiento",
              "dc": 15,
              "success": {
                "text": "El gesto arriesgado funciona. Obtienes una prueba irrefutable, aunque parece mirarte cada vez que cierras la mano.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "item": "Frasco de sales innominadas",
                  "sanity": -1
                }
              },
              "fail": {
                "text": "La prueba se resiste a pertenecer a este mundo. Te hiere de una forma difícil de explicar en un informe.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Dictamen médico · amanecer",
          "art": "✎",
          "text": "La verdad puede destruir a una familia y quizá salvar una ciudad. El dictamen debe decidir si Ward fue víctima, impostor o puerta.",
          "choices": [
            {
              "label": "Redactar la verdad para Miskatonic",
              "stat": "razon",
              "dc": 15,
              "success": {
                "text": "El expediente queda completo y peligroso. Quien lo lea no dormirá mejor, pero podrá reconocer la próxima señal.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "flag": "curwenArchive"
                }
              },
              "fail": {
                "text": "La verdad se presenta mal y parece delirio. El mundo se protege burlándose de ti.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Proteger a la familia con una mentira útil",
              "stat": "temple",
              "dc": 12,
              "success": {
                "text": "Cierras el caso con una mentira útil. Sobrevives, aunque el archivo privado queda más pesado que antes.",
                "next": "END_SURVIVE",
                "effects": {
                  "dread": -1
                }
              },
              "fail": {
                "text": "La mentira no tapa la grieta; solo le enseña a hablar con tu letra.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "whisperer",
      "title": "Expediente XVIII · Los susurros de la colina negra",
      "source": "Inspirado en El que susurra en la oscuridad",
      "difficulty": 14,
      "badge": "VERMONT · RADIO · MI-GO",
      "intro": "Tras unas inundaciones en Vermont aparecen cuerpos quitinosos en el río. Un profesor rural envía cilindros fonográficos con voces que no son de este planeta.",
      "stages": [
        {
          "id": "start",
          "location": "Estación rural · lluvia",
          "art": "⌁",
          "text": "El tren te deja entre pinos mojados. El correo local guarda cartas manchadas de barro y una advertencia: no aceptes ayuda de quien hable desde otra habitación.",
          "choices": [
            {
              "label": "Revisar las cartas del correo",
              "stat": "percepcion",
              "dc": 13,
              "success": {
                "text": "La primera lectura encaja: el caso no es superstición, sino una mecánica oculta que alguien activó con precisión. Obtienes una pista limpia y un camino de entrada.",
                "next": "trail",
                "effects": {
                  "clues": 2,
                  "note": "Entrada sólida en Los susurros de la colina negra."
                }
              },
              "fail": {
                "text": "La escena te devuelve una explicación demasiado cómoda. Cuando corriges tu error, ya has perdido tiempo y la atmósfera parece más densa.",
                "next": "trail",
                "effects": {
                  "sanity": -1,
                  "dread": 1
                }
              }
            },
            {
              "label": "Ganar la confianza del sheriff",
              "stat": "presencia",
              "dc": 14,
              "success": {
                "text": "Consigues una versión que nadie quería decir en voz alta. No aclara el horror, pero delimita su forma y te permite avanzar sin pisar a ciegas.",
                "next": "trail",
                "effects": {
                  "clues": 1,
                  "item": "Cilindro de voz interestelar",
                  "note": "Prueba inicial: Cilindro de voz interestelar."
                }
              },
              "fail": {
                "text": "La conversación se cierra de golpe. En el silencio posterior oyes una repetición de tu propia pregunta desde un lugar equivocado.",
                "next": "trail",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "trail",
          "location": "Granja aislada · 20:10",
          "art": "⌁",
          "text": "La granja tiene ventanas clavadas desde dentro. En la mesa, un fonógrafo reproduce una conversación educada entre humanos y algo que pronuncia las consonantes con pinzas.",
          "choices": [
            {
              "label": "Escuchar el fonógrafo completo",
              "stat": "temple",
              "dc": 14,
              "success": {
                "text": "Separas el rastro real de la escenografía del miedo. La pista principal conduce a un umbral que nadie debería haber abierto.",
                "next": "threshold",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "note": "Rastro principal confirmado."
                }
              },
              "fail": {
                "text": "Confundes señal y ruido. El lugar parece reorganizarse para que toda salida sea una entrada.",
                "next": "threshold",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            },
            {
              "label": "Desmontar el aparato para buscar trucos",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "El método funciona. No entiendes todo lo que ves, pero sí lo suficiente para no obedecerlo.",
                "next": "threshold",
                "effects": {
                  "clues": 1,
                  "dread": 1
                }
              },
              "fail": {
                "text": "Tu método llega tarde. Algo ya ha aprendido a parecer una pista fiable.",
                "next": "threshold",
                "effects": {
                  "health": -1,
                  "sanity": -2
                }
              }
            }
          ]
        },
        {
          "id": "threshold",
          "location": "Cuarto de radio · medianoche",
          "art": "⌁",
          "text": "El cuarto de radio capta señales entre estrellas. Una voz ofrece conocimiento a cambio de un transporte ligero, quirúrgico y permanente.",
          "choices": [
            {
              "label": "Responder a la señal de radio",
              "stat": "ocultismo",
              "dc": 15,
              "success": {
                "text": "Cruzas el límite sin concederle tu nombre. El horror reacciona, pero no consigue cerrarse sobre ti.",
                "next": "core",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "flag": "miGoSignal"
                }
              },
              "fail": {
                "text": "El umbral cobra un precio pequeño y exacto: una certeza íntima desaparece de tu mente.",
                "next": "core",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Cortar la antena antes del contacto",
              "stat": "movimiento",
              "dc": 14,
              "success": {
                "text": "La precaución te salva de lo evidente. Dejas una salida, una marca o una prueba que aún pertenece al mundo humano.",
                "next": "core",
                "effects": {
                  "clues": 1,
                  "item": "Cilindro de voz interestelar"
                }
              },
              "fail": {
                "text": "La precaución se vuelve ritual sin quererlo. Has llamado la atención de algo que aprecia las formalidades.",
                "next": "core",
                "effects": {
                  "dread": 3,
                  "sanity": -1
                }
              }
            }
          ]
        },
        {
          "id": "core",
          "location": "Colina negra · 02:00",
          "art": "⌁",
          "text": "En la colina, las sombras tienen alas membranosas y máquinas portátiles. El profesor sonríe desde una silla, pero su cuerpo no coincide con su voz.",
          "choices": [
            {
              "label": "Examinar al profesor sentado",
              "stat": "razon",
              "dc": 16,
              "success": {
                "text": "La confrontación no vence al horror, pero le impide completarse. Robas segundos, pruebas y una grieta para escapar.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -2
                }
              },
              "fail": {
                "text": "Intentas imponer escala humana a algo que no la necesita. Tu cuerpo sale entero; tu interpretación no.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Escapar entre los pinos sin linterna",
              "stat": "movimiento",
              "dc": 15,
              "success": {
                "text": "El gesto arriesgado funciona. Obtienes una prueba irrefutable, aunque parece mirarte cada vez que cierras la mano.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "item": "Cilindro de voz interestelar",
                  "sanity": -1
                }
              },
              "fail": {
                "text": "La prueba se resiste a pertenecer a este mundo. Te hiere de una forma difícil de explicar en un informe.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Cilindro final · mañana",
          "art": "✎",
          "text": "El cilindro final contiene coordenadas, pactos y una invitación. Escucharlo entero puede convertirte en testigo o en equipaje.",
          "choices": [
            {
              "label": "Depositar el cilindro en caja fuerte",
              "stat": "temple",
              "dc": 15,
              "success": {
                "text": "El expediente queda completo y peligroso. Quien lo lea no dormirá mejor, pero podrá reconocer la próxima señal.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "flag": "miGoSignal"
                }
              },
              "fail": {
                "text": "La verdad se presenta mal y parece delirio. El mundo se protege burlándose de ti.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Transcribirlo para un archivo secreto",
              "stat": "razon",
              "dc": 12,
              "success": {
                "text": "Cierras el caso con una mentira útil. Sobrevives, aunque el archivo privado queda más pesado que antes.",
                "next": "END_SURVIVE",
                "effects": {
                  "dread": -1
                }
              },
              "fail": {
                "text": "La mentira no tapa la grieta; solo le enseña a hablar con tu letra.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "witch_house",
      "title": "Expediente XIX · La geometría de la casa de la bruja",
      "source": "Inspirado en Los sueños de la casa de la bruja",
      "difficulty": 15,
      "badge": "ARKHAM · GEOMETRÍA · SUEÑO",
      "intro": "Una habitación universitaria produce fiebre, sueños angulares y desplazamientos imposibles. La pared norte no obedece a la geometría euclidiana.",
      "stages": [
        {
          "id": "start",
          "location": "Residencia de Arkham · 18:40",
          "art": "◇",
          "text": "El estudiante insiste en que no duerme: calcula. Sus cuadernos mezclan álgebra, folklore y dibujos de una mujer vieja con un familiar de dientes humanos.",
          "choices": [
            {
              "label": "Resolver una página del cuaderno",
              "stat": "razon",
              "dc": 14,
              "success": {
                "text": "La primera lectura encaja: el caso no es superstición, sino una mecánica oculta que alguien activó con precisión. Obtienes una pista limpia y un camino de entrada.",
                "next": "trail",
                "effects": {
                  "clues": 2,
                  "note": "Entrada sólida en La geometría de la casa de la bruja."
                }
              },
              "fail": {
                "text": "La escena te devuelve una explicación demasiado cómoda. Cuando corriges tu error, ya has perdido tiempo y la atmósfera parece más densa.",
                "next": "trail",
                "effects": {
                  "sanity": -1,
                  "dread": 1
                }
              }
            },
            {
              "label": "Calmar al estudiante febril",
              "stat": "presencia",
              "dc": 15,
              "success": {
                "text": "Consigues una versión que nadie quería decir en voz alta. No aclara el horror, pero delimita su forma y te permite avanzar sin pisar a ciegas.",
                "next": "trail",
                "effects": {
                  "clues": 1,
                  "item": "Cuaderno de geometría no euclidiana",
                  "note": "Prueba inicial: Cuaderno de geometría no euclidiana."
                }
              },
              "fail": {
                "text": "La conversación se cierra de golpe. En el silencio posterior oyes una repetición de tu propia pregunta desde un lugar equivocado.",
                "next": "trail",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "trail",
          "location": "Habitación del estudiante · 23:00",
          "art": "◇",
          "text": "La habitación estrecha parece más grande cuando cierras un ojo. Bajo el yeso descubres curvas que no representan espacio, sino permisos.",
          "choices": [
            {
              "label": "Medir la pared norte",
              "stat": "percepcion",
              "dc": 15,
              "success": {
                "text": "Separas el rastro real de la escenografía del miedo. La pista principal conduce a un umbral que nadie debería haber abierto.",
                "next": "threshold",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "note": "Rastro principal confirmado."
                }
              },
              "fail": {
                "text": "Confundes señal y ruido. El lugar parece reorganizarse para que toda salida sea una entrada.",
                "next": "threshold",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            },
            {
              "label": "Dormir en la habitación vigilando tus manos",
              "stat": "temple",
              "dc": 14,
              "success": {
                "text": "El método funciona. No entiendes todo lo que ves, pero sí lo suficiente para no obedecerlo.",
                "next": "threshold",
                "effects": {
                  "clues": 1,
                  "dread": 1
                }
              },
              "fail": {
                "text": "Tu método llega tarde. Algo ya ha aprendido a parecer una pista fiable.",
                "next": "threshold",
                "effects": {
                  "health": -1,
                  "sanity": -2
                }
              }
            }
          ]
        },
        {
          "id": "threshold",
          "location": "Ángulo imposible · 03:33",
          "art": "◇",
          "text": "El ángulo de la pared se abre como una decisión. Durante un segundo ves Arkham desde arriba, desde abajo y desde un lugar donde Arkham aún no ha sido construida.",
          "choices": [
            {
              "label": "Cruzar el ángulo imposible",
              "stat": "ocultismo",
              "dc": 16,
              "success": {
                "text": "Cruzas el límite sin concederle tu nombre. El horror reacciona, pero no consigue cerrarse sobre ti.",
                "next": "core",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "flag": "witchGeometry"
                }
              },
              "fail": {
                "text": "El umbral cobra un precio pequeño y exacto: una certeza íntima desaparece de tu mente.",
                "next": "core",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Atar una cuerda al marco de la cama",
              "stat": "movimiento",
              "dc": 15,
              "success": {
                "text": "La precaución te salva de lo evidente. Dejas una salida, una marca o una prueba que aún pertenece al mundo humano.",
                "next": "core",
                "effects": {
                  "clues": 1,
                  "item": "Cuaderno de geometría no euclidiana"
                }
              },
              "fail": {
                "text": "La precaución se vuelve ritual sin quererlo. Has llamado la atención de algo que aprecia las formalidades.",
                "next": "core",
                "effects": {
                  "dread": 3,
                  "sanity": -1
                }
              }
            }
          ]
        },
        {
          "id": "core",
          "location": "Espacio entre planos · sin fecha",
          "art": "◇",
          "text": "Entre planos, la bruja no camina: elige coordenadas. Su familiar huele tu miedo y mastica una cuerda que quizá sea tu línea de regreso.",
          "choices": [
            {
              "label": "Negociar con la bruja desde la lógica",
              "stat": "razon",
              "dc": 17,
              "success": {
                "text": "La confrontación no vence al horror, pero le impide completarse. Robas segundos, pruebas y una grieta para escapar.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -2
                }
              },
              "fail": {
                "text": "Intentas imponer escala humana a algo que no la necesita. Tu cuerpo sale entero; tu interpretación no.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Ahuyentar al familiar con luz directa",
              "stat": "temple",
              "dc": 16,
              "success": {
                "text": "El gesto arriesgado funciona. Obtienes una prueba irrefutable, aunque parece mirarte cada vez que cierras la mano.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "item": "Cuaderno de geometría no euclidiana",
                  "sanity": -1
                }
              },
              "fail": {
                "text": "La prueba se resiste a pertenecer a este mundo. Te hiere de una forma difícil de explicar en un informe.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Informe geométrico · mañana",
          "art": "✎",
          "text": "La habitación vuelve a medir lo correcto. El cuaderno final contiene una ecuación que permitiría sellarla o repetir el viaje.",
          "choices": [
            {
              "label": "Sellar la ecuación con tinta roja",
              "stat": "ocultismo",
              "dc": 16,
              "success": {
                "text": "El expediente queda completo y peligroso. Quien lo lea no dormirá mejor, pero podrá reconocer la próxima señal.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "flag": "witchGeometry"
                }
              },
              "fail": {
                "text": "La verdad se presenta mal y parece delirio. El mundo se protege burlándose de ti.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Conservar el cuaderno para estudio",
              "stat": "razon",
              "dc": 13,
              "success": {
                "text": "Cierras el caso con una mentira útil. Sobrevives, aunque el archivo privado queda más pesado que antes.",
                "next": "END_SURVIVE",
                "effects": {
                  "dread": -1
                }
              },
              "fail": {
                "text": "La mentira no tapa la grieta; solo le enseña a hablar con tu letra.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "time_shadow",
      "title": "Expediente XX · La sombra de otro tiempo",
      "source": "Inspirado en La sombra de otro tiempo",
      "difficulty": 15,
      "badge": "MEMORIA · AUSTRALIA · TIEMPO",
      "intro": "Un profesor recupera la memoria tras años de amnesia y describe bibliotecas ciclópeas, cuerpos ajenos y una civilización que archivaba mentes a través del tiempo.",
      "stages": [
        {
          "id": "start",
          "location": "Despacho universitario · 10:00",
          "art": "⌛",
          "text": "El profesor no teme haber perdido años de vida; teme lo que aprendió durante ellos. Sus dibujos muestran salas imposibles con estanterías para épocas enteras.",
          "choices": [
            {
              "label": "Ordenar los testimonios de amnesia",
              "stat": "razon",
              "dc": 14,
              "success": {
                "text": "La primera lectura encaja: el caso no es superstición, sino una mecánica oculta que alguien activó con precisión. Obtienes una pista limpia y un camino de entrada.",
                "next": "trail",
                "effects": {
                  "clues": 2,
                  "note": "Entrada sólida en La sombra de otro tiempo."
                }
              },
              "fail": {
                "text": "La escena te devuelve una explicación demasiado cómoda. Cuando corriges tu error, ya has perdido tiempo y la atmósfera parece más densa.",
                "next": "trail",
                "effects": {
                  "sanity": -1,
                  "dread": 1
                }
              }
            },
            {
              "label": "Escuchar al profesor sin corregirlo",
              "stat": "presencia",
              "dc": 15,
              "success": {
                "text": "Consigues una versión que nadie quería decir en voz alta. No aclara el horror, pero delimita su forma y te permite avanzar sin pisar a ciegas.",
                "next": "trail",
                "effects": {
                  "clues": 1,
                  "item": "Tablilla con fecha imposible",
                  "note": "Prueba inicial: Tablilla con fecha imposible."
                }
              },
              "fail": {
                "text": "La conversación se cierra de golpe. En el silencio posterior oyes una repetición de tu propia pregunta desde un lugar equivocado.",
                "next": "trail",
                "effects": {
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "trail",
          "location": "Archivo de sueños · tarde",
          "art": "⌛",
          "text": "En sus sueños repetidos aparece una ciudad bajo arena roja. Los mapas geológicos sugieren que algo enorme fue enterrado antes de la historia humana.",
          "choices": [
            {
              "label": "Cruzar sus dibujos con mapas reales",
              "stat": "percepcion",
              "dc": 15,
              "success": {
                "text": "Separas el rastro real de la escenografía del miedo. La pista principal conduce a un umbral que nadie debería haber abierto.",
                "next": "threshold",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "note": "Rastro principal confirmado."
                }
              },
              "fail": {
                "text": "Confundes señal y ruido. El lugar parece reorganizarse para que toda salida sea una entrada.",
                "next": "threshold",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            },
            {
              "label": "Preparar una expedición mínima",
              "stat": "temple",
              "dc": 14,
              "success": {
                "text": "El método funciona. No entiendes todo lo que ves, pero sí lo suficiente para no obedecerlo.",
                "next": "threshold",
                "effects": {
                  "clues": 1,
                  "dread": 1
                }
              },
              "fail": {
                "text": "Tu método llega tarde. Algo ya ha aprendido a parecer una pista fiable.",
                "next": "threshold",
                "effects": {
                  "health": -1,
                  "sanity": -2
                }
              }
            }
          ]
        },
        {
          "id": "threshold",
          "location": "Desierto australiano · noche",
          "art": "⌛",
          "text": "El desierto responde a los dibujos. Bajo la arena hay bloques tallados con signos que no se leen de izquierda a derecha, sino de pasado a futuro.",
          "choices": [
            {
              "label": "Leer los signos temporales",
              "stat": "ocultismo",
              "dc": 16,
              "success": {
                "text": "Cruzas el límite sin concederle tu nombre. El horror reacciona, pero no consigue cerrarse sobre ti.",
                "next": "core",
                "effects": {
                  "clues": 2,
                  "sanity": -1,
                  "flag": "timeArchive"
                }
              },
              "fail": {
                "text": "El umbral cobra un precio pequeño y exacto: una certeza íntima desaparece de tu mente.",
                "next": "core",
                "effects": {
                  "sanity": -3,
                  "dread": 2
                }
              }
            },
            {
              "label": "Bajar por la grieta de arena",
              "stat": "movimiento",
              "dc": 15,
              "success": {
                "text": "La precaución te salva de lo evidente. Dejas una salida, una marca o una prueba que aún pertenece al mundo humano.",
                "next": "core",
                "effects": {
                  "clues": 1,
                  "item": "Tablilla con fecha imposible"
                }
              },
              "fail": {
                "text": "La precaución se vuelve ritual sin quererlo. Has llamado la atención de algo que aprecia las formalidades.",
                "next": "core",
                "effects": {
                  "dread": 3,
                  "sanity": -1
                }
              }
            }
          ]
        },
        {
          "id": "core",
          "location": "Ruina ciclópea · hora remota",
          "art": "⌛",
          "text": "La ruina conserva una biblioteca sin libros: cada nicho guarda una mente prestada. Encuentras un registro con tu nombre, fechado millones de años después de tu muerte.",
          "choices": [
            {
              "label": "Buscar tu propio registro",
              "stat": "temple",
              "dc": 17,
              "success": {
                "text": "La confrontación no vence al horror, pero le impide completarse. Robas segundos, pruebas y una grieta para escapar.",
                "next": "final",
                "effects": {
                  "clues": 3,
                  "sanity": -2
                }
              },
              "fail": {
                "text": "Intentas imponer escala humana a algo que no la necesita. Tu cuerpo sale entero; tu interpretación no.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -4,
                  "dread": 2
                }
              }
            },
            {
              "label": "Copiar un índice de la biblioteca",
              "stat": "razon",
              "dc": 16,
              "success": {
                "text": "El gesto arriesgado funciona. Obtienes una prueba irrefutable, aunque parece mirarte cada vez que cierras la mano.",
                "next": "final",
                "effects": {
                  "clues": 2,
                  "item": "Tablilla con fecha imposible",
                  "sanity": -1
                }
              },
              "fail": {
                "text": "La prueba se resiste a pertenecer a este mundo. Te hiere de una forma difícil de explicar en un informe.",
                "next": "final",
                "effects": {
                  "health": -2,
                  "sanity": -2,
                  "dread": 1
                }
              }
            }
          ]
        },
        {
          "id": "final",
          "location": "Memoria sellada · amanecer",
          "art": "✎",
          "text": "Al salir, recuerdas demasiado y demasiado poco. Puedes destruir el registro o aceptar que tu vida quizá sea una nota al margen en un archivo temporal.",
          "choices": [
            {
              "label": "Destruir la tablilla con tu nombre",
              "stat": "movimiento",
              "dc": 16,
              "success": {
                "text": "El expediente queda completo y peligroso. Quien lo lea no dormirá mejor, pero podrá reconocer la próxima señal.",
                "next": "END_TRUTH",
                "effects": {
                  "clues": 1,
                  "sanity": -1,
                  "flag": "timeArchive"
                }
              },
              "fail": {
                "text": "La verdad se presenta mal y parece delirio. El mundo se protege burlándose de ti.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -3
                }
              }
            },
            {
              "label": "Guardar la memoria y no contársela a nadie",
              "stat": "temple",
              "dc": 13,
              "success": {
                "text": "Cierras el caso con una mentira útil. Sobrevives, aunque el archivo privado queda más pesado que antes.",
                "next": "END_SURVIVE",
                "effects": {
                  "dread": -1
                }
              },
              "fail": {
                "text": "La mentira no tapa la grieta; solo le enseña a hablar con tu letra.",
                "next": "END_SCAR",
                "effects": {
                  "sanity": -2,
                  "dread": 2
                }
              }
            }
          ]
        }
      ]
    }
  ],
  "endings": {
    "END_TRUTH": {
      "title": "Final · Verdad peligrosa",
      "text": "Has reunido pruebas suficientes para ver el contorno del horror. No has vencido al cosmos; solo has aprendido a leer una de sus grietas.",
      "score": 3
    },
    "END_SURVIVE": {
      "title": "Final · Supervivencia sobria",
      "text": "Sales con vida y con una explicación incompleta. Quizá sea la forma más sana de terminar un expediente.",
      "score": 2
    },
    "END_SCAR": {
      "title": "Final · Cicatriz permanente",
      "text": "El caso queda abierto dentro de ti. Algo se perdió: una noche de sueño, un recuerdo, la comodidad de creer que el mundo es pequeño.",
      "score": 1
    },
    "END_MADNESS": {
      "title": "Final · Fractura",
      "text": "La mente no se rompe con ruido. Se abre en silencio y deja pasar una certeza demasiado grande.",
      "score": 0
    },
    "END_DEATH": {
      "title": "Final · Expediente cerrado por defunción",
      "text": "El investigador no regresa. El archivo conserva manchas, páginas arrancadas y una nota escrita por otra mano.",
      "score": 0
    }
  }
};

const STORAGE_KEY = 'vigiliaAbisal.save.v1';
const LEGACY_STORAGE_KEYS = ['investigador404.save.v1'];
const SETTINGS_KEY = 'vigiliaAbisal.settings.v1';
const LEGACY_SETTINGS_KEYS = ['investigador404.settings.v1'];
const SAVE_SCHEMA_VERSION = 3;
const MAX_IMPORT_BYTES = 1024 * 1024;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

let state = loadSave();
let selectedArchetype = DATA.archetypes[0].id;
let audioContext = null;
let audioNodes = [];

function defaultState() {
  return {
    schemaVersion: SAVE_SCHEMA_VERSION,
    player: null,
    currentCaseId: null,
    currentStageId: null,
    completedCases: {},
    journal: [],
    lastRoll: null,
    createdAt: new Date().toISOString()
  };
}

function safeString(value, fallback = '', max = 140) {
  return String(value ?? fallback).replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, max);
}

function sanitizeName(name) {
  return safeString(name, '', 32) || 'Investigador/a sin nombre';
}

function safeNumber(value, fallback = 0, min = 0, max = 999) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return clamp(Math.trunc(number), min, max);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function sanitizePlayer(player) {
  if (!isPlainObject(player)) return null;
  const archetype = DATA.archetypes.find((item) => item.id === player.archetypeId)
    || DATA.archetypes.find((item) => item.name === player.archetypeName)
    || DATA.archetypes[0];
  const stats = {};
  Object.keys(DATA.statNames).forEach((key) => {
    const base = archetype.stats[key] ?? 2;
    stats[key] = safeNumber(player.stats?.[key], base, 0, 10);
  });
  const maxHealth = safeNumber(player.maxHealth, archetype.health, 1, 30);
  const maxSanity = safeNumber(player.maxSanity, archetype.sanity, 1, 50);
  const inventorySource = Array.isArray(player.inventory) ? player.inventory : archetype.items;
  const inventory = [...new Set(inventorySource.map((item) => safeString(item, '', 70)).filter(Boolean))].slice(0, 80);
  return {
    name: sanitizeName(player.name),
    archetypeId: archetype.id,
    archetypeName: archetype.name,
    stats,
    health: safeNumber(player.health, maxHealth, 0, maxHealth),
    maxHealth,
    sanity: safeNumber(player.sanity, maxSanity, 0, maxSanity),
    maxSanity,
    dread: safeNumber(player.dread, 0, 0, 16),
    clues: safeNumber(player.clues, 0, 0, 999),
    inventory,
    flags: isPlainObject(player.flags) ? { ...player.flags } : {}
  };
}

function sanitizeJournal(journal) {
  if (!Array.isArray(journal)) return [];
  return journal.slice(0, 160).map((entry) => ({
    date: safeString(entry?.date, '', 40),
    text: safeString(entry?.text, '', 420)
  })).filter((entry) => entry.text);
}

function sanitizeCompletedCases(completedCases) {
  if (!isPlainObject(completedCases)) return {};
  const validIds = new Set(DATA.cases.map((item) => item.id));
  const clean = {};
  Object.entries(completedCases).forEach(([id, value]) => {
    if (!validIds.has(id) || !isPlainObject(value)) return;
    clean[id] = {
      ending: DATA.endings[value.ending] ? value.ending : 'END_SCAR',
      quality: safeString(value.quality, 'Caso cerrado', 60),
      date: safeString(value.date, new Date().toISOString(), 40),
      clues: safeNumber(value.clues, 0, 0, 999)
    };
  });
  return clean;
}

function sanitizeSave(rawSave) {
  const base = defaultState();
  if (!isPlainObject(rawSave)) return base;
  const clean = {
    ...base,
    schemaVersion: SAVE_SCHEMA_VERSION,
    player: sanitizePlayer(rawSave.player),
    completedCases: sanitizeCompletedCases(rawSave.completedCases),
    journal: sanitizeJournal(rawSave.journal),
    createdAt: safeString(rawSave.createdAt, base.createdAt, 40)
  };

  const gameCase = findCase(rawSave.currentCaseId);
  const stage = findStage(gameCase, rawSave.currentStageId);
  if (clean.player && gameCase && stage) {
    clean.currentCaseId = gameCase.id;
    clean.currentStageId = stage.id;
  }
  if (isPlainObject(rawSave.lastRoll)) {
    clean.lastRoll = {
      d12: safeNumber(rawSave.lastRoll.d12, 1, 1, 12),
      d6: safeNumber(rawSave.lastRoll.d6, 1, 1, 6),
      stat: DATA.statNames[rawSave.lastRoll.stat] ? rawSave.lastRoll.stat : 'razon',
      statValue: safeNumber(rawSave.lastRoll.statValue, 0, 0, 10),
      dreadPenalty: safeNumber(rawSave.lastRoll.dreadPenalty, 0, 0, 3),
      total: safeNumber(rawSave.lastRoll.total, 0, -10, 40),
      dc: safeNumber(rawSave.lastRoll.dc, 10, 0, 30),
      success: Boolean(rawSave.lastRoll.success),
      critical: Boolean(rawSave.lastRoll.critical),
      fumble: Boolean(rawSave.lastRoll.fumble)
    };
  }
  return clean;
}

function getStoredJson(primaryKey, legacyKeys = []) {
  const keys = [primaryKey, ...legacyKeys];
  for (const key of keys) {
    try {
      const raw = localStorage.getItem(key);
      if (raw) return { key, value: JSON.parse(raw) };
    } catch (error) {
      console.warn(`No se pudo leer ${key}:`, error);
    }
  }
  return null;
}

function loadSave() {
  const stored = getStoredJson(STORAGE_KEY, LEGACY_STORAGE_KEYS);
  if (!stored) return defaultState();
  const clean = sanitizeSave(stored.value);
  if (stored.key !== STORAGE_KEY) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clean));
      localStorage.removeItem(stored.key);
    } catch (error) {
      console.warn('No se pudo migrar la partida:', error);
    }
  }
  return clean;
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitizeSave(state)));
  } catch (error) {
    console.warn('No se pudo guardar la partida:', error);
  }
}

function settings() {
  const stored = getStoredJson(SETTINGS_KEY, LEGACY_SETTINGS_KEYS);
  return isPlainObject(stored?.value) ? stored.value : {};
}

function saveSettings(next) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...settings(), ...next }));
  } catch (error) {
    console.warn('No se pudo guardar la configuración:', error);
  }
}

function findCase(id) { return DATA.cases.find((item) => item.id === id) || null; }
function findStage(gameCase, id) { return gameCase?.stages?.find((stage) => stage.id === id) || null; }
function statLabel(stat) { return DATA.statNames[stat] || stat; }

function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

function createElement(tag, options = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(options).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    if (key === 'className') node.className = value;
    else if (key === 'text') node.textContent = value;
    else if (key === 'dataset') Object.entries(value).forEach(([dataKey, dataValue]) => { node.dataset[dataKey] = dataValue; });
    else if (key === 'ariaPressed') node.setAttribute('aria-pressed', String(value));
    else node.setAttribute(key, value);
  });
  const list = Array.isArray(children) ? children : [children];
  list.filter((child) => child !== undefined && child !== null).forEach((child) => {
    node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  });
  return node;
}

function createPill(text) {
  return createElement('span', { text });
}

function rollDice(stat, dc) {
  const d12 = Math.floor(Math.random() * 12) + 1;
  const d6 = Math.floor(Math.random() * 6) + 1;
  const statValue = state.player.stats[stat] || 0;
  const dreadPenalty = Math.floor((state.player.dread || 0) / 6);
  const total = d12 + d6 + statValue - dreadPenalty;
  const critical = d12 === 12 && d6 === 6;
  const fumble = d12 === 1 && d6 === 1;
  const success = critical || (!fumble && total >= dc);
  return { d12, d6, stat, statValue, dreadPenalty, total, dc, success, critical, fumble };
}

function applyEffects(effects = {}) {
  if (!state.player) return;
  state.player = sanitizePlayer(state.player);
  const p = state.player;
  if (typeof effects.health === 'number') p.health = clamp(p.health + effects.health, 0, p.maxHealth);
  if (typeof effects.sanity === 'number') p.sanity = clamp(p.sanity + effects.sanity, 0, p.maxSanity);
  if (typeof effects.dread === 'number') p.dread = clamp((p.dread || 0) + effects.dread, 0, 16);
  if (typeof effects.clues === 'number') p.clues = Math.max(0, (p.clues || 0) + effects.clues);
  if (effects.item && !p.inventory.includes(effects.item)) p.inventory.push(safeString(effects.item, '', 70));
  if (effects.flag) p.flags[safeString(effects.flag, '', 40)] = true;
  if (effects.note) addJournal(effects.note);
}

function addJournal(text) {
  const entry = {
    date: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' }),
    text: safeString(text, '', 420)
  };
  state.journal.unshift(entry);
  state.journal = sanitizeJournal(state.journal);
}

function renderArchetypes() {
  const container = $('#archetypes');
  clearNode(container);
  DATA.archetypes.forEach((item) => {
    const pills = createElement('div', { className: 'stat-pills' },
      Object.entries(item.stats).map(([key, val]) => createPill(`${statLabel(key)} ${val}`))
    );
    const button = createElement('button', {
      type: 'button',
      className: 'archetype-card',
      dataset: { id: item.id },
      ariaPressed: item.id === selectedArchetype
    }, [
      createElement('h3', { text: item.name }),
      createElement('p', { text: item.desc }),
      pills
    ]);
    button.addEventListener('click', () => {
      selectedArchetype = button.dataset.id;
      renderArchetypes();
    });
    container.appendChild(button);
  });
}

function createCharacter(event) {
  event.preventDefault();
  const archetype = DATA.archetypes.find((item) => item.id === selectedArchetype) || DATA.archetypes[0];
  const name = sanitizeName($('#investigatorName').value);
  state = defaultState();
  state.player = {
    name,
    archetypeId: archetype.id,
    archetypeName: archetype.name,
    stats: { ...archetype.stats },
    health: archetype.health,
    maxHealth: archetype.health,
    sanity: archetype.sanity,
    maxSanity: archetype.sanity,
    dread: 0,
    clues: 0,
    inventory: [...archetype.items],
    flags: {}
  };
  addJournal(`${name} abre el archivo de Vigilia Abisal como ${archetype.name}.`);
  save();
  render();
}

function render() {
  renderArchetypes();
  state = sanitizeSave(state);
  const hasPlayer = Boolean(state.player);
  $('#creatorPanel').classList.toggle('hidden', hasPlayer);
  $('#welcomePanel').classList.toggle('hidden', hasPlayer);
  $('#gamePanel').classList.toggle('hidden', !hasPlayer);
  if (!hasPlayer) return;
  renderSheet();
  renderCases();
  renderJournal();
  if (state.currentCaseId && state.currentStageId) {
    $('#storyPanel').classList.remove('hidden');
    renderStage();
  } else {
    $('#storyPanel').classList.add('hidden');
  }
}

function renderSheet() {
  const p = state.player;
  $('#sheetName').textContent = p.name;
  $('#sheetRole').textContent = p.archetypeName;
  $('#healthMeter').max = p.maxHealth;
  $('#healthMeter').value = p.health;
  $('#healthText').textContent = `${p.health}/${p.maxHealth}`;
  $('#sanityMeter').max = p.maxSanity;
  $('#sanityMeter').value = p.sanity;
  $('#sanityText').textContent = `${p.sanity}/${p.maxSanity}`;
  $('#dreadMeter').value = p.dread || 0;
  $('#dreadText').textContent = `${p.dread || 0}/16`;
  $('#clueText').textContent = p.clues || 0;
  $('#caseText').textContent = Object.keys(state.completedCases || {}).length;

  const statsList = $('#statsList');
  clearNode(statsList);
  Object.entries(p.stats).forEach(([key, value]) => {
    statsList.appendChild(createElement('div', {}, [
      createElement('dt', { text: statLabel(key) }),
      createElement('dd', { text: String(value) })
    ]));
  });

  const inventoryList = $('#inventoryList');
  clearNode(inventoryList);
  const items = p.inventory.length ? p.inventory : ['Sin objetos.'];
  items.forEach((item) => inventoryList.appendChild(createElement('li', { text: item })));
}

function renderCases() {
  const caseList = $('#caseList');
  clearNode(caseList);
  DATA.cases.forEach((item) => {
    const done = state.completedCases[item.id];
    const button = createElement('button', {
      className: `case-card ${done ? 'done' : ''}`.trim(),
      type: 'button',
      dataset: { id: item.id }
    }, [
      createElement('div', { className: 'case-meta' }, [
        createElement('span', { text: item.badge }),
        createElement('strong', { text: done ? 'Cerrado' : 'Abierto' })
      ]),
      createElement('h3', { text: item.title }),
      createElement('p', { text: item.intro }),
      createElement('div', { className: 'stat-pills' }, [
        createPill(`Dificultad ${item.difficulty}`),
        createPill(item.source.replace('Inspirado en ', ''))
      ])
    ]);
    button.addEventListener('click', () => startCase(button.dataset.id));
    caseList.appendChild(button);
  });
}

function startCase(id) {
  const gameCase = findCase(id);
  if (!gameCase || !state.player) return;
  state.currentCaseId = id;
  state.currentStageId = 'start';
  state.player.dread = Math.max(0, Math.floor((state.player.dread || 0) / 2));
  addJournal(`Expediente abierto: ${gameCase.title}.`);
  save();
  render();
  $('#storyPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderStage() {
  const gameCase = findCase(state.currentCaseId);
  const stage = findStage(gameCase, state.currentStageId);
  if (!gameCase || !stage) {
    state.currentCaseId = null;
    state.currentStageId = null;
    save();
    render();
    return;
  }
  $('#caseBadge').textContent = gameCase.badge;
  $('#sceneArt').textContent = stage.art || '☾';
  $('#sceneLocation').textContent = stage.location;
  $('#sceneTitle').textContent = gameCase.title;
  $('#sceneText').textContent = stage.text;

  const choiceList = $('#choiceList');
  clearNode(choiceList);
  stage.choices.forEach((choice, index) => {
    const check = choice.stat ? `${statLabel(choice.stat)} · dificultad ${choice.dc}` : 'Acción directa';
    const button = createElement('button', {
      className: 'choice-button',
      type: 'button',
      dataset: { index: String(index) }
    }, [
      createElement('strong', { text: choice.label }),
      createElement('span', { text: check })
    ]);
    button.addEventListener('click', () => choose(Number(button.dataset.index)));
    choiceList.appendChild(button);
  });
}

function choose(index) {
  const gameCase = findCase(state.currentCaseId);
  const stage = findStage(gameCase, state.currentStageId);
  const choice = stage?.choices?.[index];
  if (!gameCase || !stage || !choice) return;
  let outcome = choice.success || { next: choice.next };
  let roll = null;
  if (choice.stat) {
    roll = rollDice(choice.stat, choice.dc);
    outcome = roll.success ? choice.success : choice.fail;
    state.lastRoll = roll;
  }
  if (!outcome) return;
  applyEffects(outcome.effects);
  addJournal(outcome.text);
  playPulse(roll?.success);

  const terminal = checkCriticalCondition();
  if (terminal) {
    finishCase(terminal, outcome.text, roll);
    return;
  }

  if (outcome.next && outcome.next.startsWith('END_')) {
    finishCase(outcome.next, outcome.text, roll);
    return;
  }
  state.currentStageId = outcome.next;
  save();
  render();
  renderRoll(outcome.text, roll);
}

function checkCriticalCondition() {
  if (!state.player) return null;
  if (state.player.health <= 0) return 'END_DEATH';
  if (state.player.sanity <= 0) return 'END_MADNESS';
  return null;
}

function finishCase(endingId, outcomeText, roll) {
  const gameCase = findCase(state.currentCaseId);
  if (!gameCase) return;
  const ending = DATA.endings[endingId] || DATA.endings.END_SCAR;
  const quality = calculateOutcomeQuality(endingId);
  state.completedCases[gameCase.id] = { ending: endingId, quality, date: new Date().toISOString(), clues: state.player.clues };
  state.currentCaseId = null;
  state.currentStageId = null;
  state.player.dread = Math.max(0, (state.player.dread || 0) - 3);
  addJournal(`${gameCase.title} cerrado: ${ending.title}.`);
  save();
  render();
  renderRoll(outcomeText, roll);
  showModal(ending.title, `${outcomeText}\n\n${ending.text}\n\nResultado: ${quality}`);
}

function calculateOutcomeQuality(endingId) {
  const p = state.player;
  const clues = p.clues || 0;
  const base = DATA.endings[endingId]?.score || 0;
  if (base >= 3 && clues >= 12) return 'Victoria amarga';
  if (base >= 2 && p.sanity > p.maxSanity * 0.45) return 'Supervivencia sólida';
  if (base >= 1) return 'Caso dañado';
  return 'Fracaso traumático';
}

function renderRoll(text, roll) {
  const box = $('#rollBox');
  box.classList.remove('success', 'fail');
  if (!roll) { box.textContent = text || ''; return; }
  box.classList.add(roll.success ? 'success' : 'fail');
  const critical = roll.critical ? ' · éxito crítico' : roll.fumble ? ' · pifia' : '';
  const penalty = roll.dreadPenalty ? ` · penalizador por Presagio -${roll.dreadPenalty}` : '';
  box.textContent = `${roll.success ? 'ÉXITO' : 'FALLO'}${critical}: d12 ${roll.d12} + d6 ${roll.d6} + ${statLabel(roll.stat)} ${roll.statValue}${penalty} = ${roll.total} contra ${roll.dc}. ${text}`;
}

function renderJournal() {
  const journalList = $('#journalList');
  clearNode(journalList);
  if (!state.journal.length) {
    journalList.appendChild(createElement('li', { text: 'Sin entradas.' }));
    return;
  }
  state.journal.forEach((entry) => {
    const li = createElement('li');
    li.appendChild(createElement('strong', { text: entry.date }));
    li.appendChild(document.createTextNode(` · ${entry.text}`));
    journalList.appendChild(li);
  });
}

function showModal(title, text) {
  $('#modalTitle').textContent = title;
  $('#modalText').textContent = text;
  const modal = $('#modal');
  if (typeof modal.showModal === 'function') modal.showModal();
  else alert(`${title}\n\n${text}`);
}

function exportSave() {
  const blob = new Blob([JSON.stringify(sanitizeSave(state), null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `vigilia-abisal-partida-${Date.now()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importSave(file) {
  if (!file) return;
  if (file.size > MAX_IMPORT_BYTES) {
    showModal('Archivo demasiado grande', 'La partida supera el tamaño máximo permitido. Exporta una partida limpia e inténtalo de nuevo.');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result));
      const clean = sanitizeSave(imported);
      if (!clean.player) throw new Error('Partida no válida');
      state = clean;
      save();
      render();
      showModal('Partida importada', 'La partida se ha cargado correctamente.');
    } catch (error) {
      showModal('Error al importar', 'El archivo no parece una partida válida de Vigilia Abisal.');
    } finally {
      $('#importFile').value = '';
    }
  };
  reader.readAsText(file);
}

function resetGame() {
  const ok = confirm('¿Seguro que quieres borrar la partida local?');
  if (!ok) return;
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
  state = defaultState();
  render();
}

function setupAudio() {
  const saved = settings();
  $('#soundToggle').setAttribute('aria-pressed', 'false');
  $('#soundToggle').textContent = saved.sound === true ? 'Ambiente listo' : 'Ambiente';
}

function startAudio() {
  try {
    if (audioContext) {
      if (audioContext.state === 'suspended') audioContext.resume();
      return;
    }
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const master = audioContext.createGain();
    master.gain.value = 0.045;
    master.connect(audioContext.destination);
    [55, 82.41, 110].forEach((freq, index) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = index === 0 ? 'sine' : 'triangle';
      osc.frequency.value = freq;
      gain.gain.value = index === 0 ? 0.35 : 0.12;
      osc.connect(gain).connect(master);
      osc.start();
      audioNodes.push(osc, gain);
    });
  } catch (error) { console.warn('Audio no disponible:', error); }
}

function stopAudio() {
  audioNodes.forEach((node) => { try { if (node.stop) node.stop(); } catch {} });
  audioNodes = [];
  if (audioContext) { audioContext.close(); audioContext = null; }
}

function toggleAudio() {
  const pressed = $('#soundToggle').getAttribute('aria-pressed') === 'true';
  if (pressed) {
    stopAudio();
    saveSettings({ sound: false });
    $('#soundToggle').setAttribute('aria-pressed', 'false');
    $('#soundToggle').textContent = 'Ambiente';
  } else {
    startAudio();
    saveSettings({ sound: true });
    $('#soundToggle').setAttribute('aria-pressed', 'true');
    $('#soundToggle').textContent = 'Silenciar';
  }
}

function playPulse(success) {
  if (!audioContext) return;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.frequency.value = success ? 220 : 73.42;
  osc.type = success ? 'sine' : 'sawtooth';
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.06, audioContext.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.22);
  osc.connect(gain).connect(audioContext.destination);
  osc.start();
  osc.stop(audioContext.currentTime + 0.25);
}

function setupImportKeyboard() {
  const label = $('#importLabel');
  label.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      $('#importFile').click();
    }
  });
}

function boot() {
  renderArchetypes();
  $('#characterForm').addEventListener('submit', createCharacter);
  $('#resetBtn').addEventListener('click', resetGame);
  $('#exportBtn').addEventListener('click', exportSave);
  $('#importFile').addEventListener('change', (event) => importSave(event.target.files?.[0]));
  setupImportKeyboard();
  $('#backToCases').addEventListener('click', () => {
    state.currentCaseId = null;
    state.currentStageId = null;
    save();
    render();
  });
  $('#modalClose').addEventListener('click', () => $('#modal').close());
  $('#soundToggle').addEventListener('click', toggleAudio);
  setupAudio();
  render();
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('service-worker.js').catch((error) => console.warn('SW error:', error));
  }
}

document.addEventListener('DOMContentLoaded', boot);
