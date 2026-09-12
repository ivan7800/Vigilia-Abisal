'use strict';
window.VIGILIA_CAMPAIGN = window.VIGILIA_CAMPAIGN || {};
window.VIGILIA_CAMPAIGN.expansions = window.VIGILIA_CAMPAIGN.expansions || {};
Object.assign(window.VIGILIA_CAMPAIGN.expansions, {
  "dagon": {
    "detour": {
      "id": "chapel",
      "location": "Capilla de mareantes · 04:02",
      "art": "⚓",
      "text": "Tras la lonja cerrada encuentras una capilla sin santo. Los exvotos son dientes de peces clavados alrededor de una campana cubierta de sal húmeda.",
      "choices": [
        {
          "label": "Hacer sonar la campana una sola vez",
          "stat": "temple",
          "dc": 13,
          "success": {
            "text": "La vibración vacía la dársena de gaviotas y revela, bajo el agua, una hilera de peldaños.",
            "next": "threshold",
            "effects": {
              "clues": 2,
              "flag": "dagonBell"
            }
          },
          "fail": {
            "text": "La campana responde desde debajo del agua. Algo se acerca siguiendo el eco.",
            "next": "trail",
            "effects": {
              "sanity": -2,
              "dread": 2
            }
          }
        },
        {
          "label": "Registrar los exvotos de los pescadores",
          "stat": "razon",
          "dc": 12,
          "success": {
            "text": "Los dientes forman fechas. Todas coinciden con mareas excepcionalmente bajas y con desapariciones en el puerto.",
            "next": "revelation_dagon",
            "effects": {
              "clues": 2,
              "item": "Rosario de dientes salinos"
            }
          },
          "fail": {
            "text": "El patrón parece aleatorio hasta que uno de los dientes gira solo para señalar el mar.",
            "next": "threshold",
            "effects": {
              "sanity": -1,
              "dread": 1
            }
          }
        }
      ]
    },
    "revelation": {
      "id": "revelation_dagon",
      "location": "Bajamar imposible · 04:37",
      "art": "≋",
      "text": "La marea cae varios metros en segundos. Sobre el barro quedan huellas enormes que empiezan lejos de la costa y terminan justo detrás de ti.",
      "choices": [
        {
          "label": "Seguir las huellas en sentido inverso",
          "stat": "percepcion",
          "dc": 14,
          "success": {
            "text": "Descubres que no son huellas de llegada sino de salida. La plataforma no emerge: algo la levanta.",
            "next": "core",
            "effects": {
              "clues": 3,
              "sanity": -1,
              "flag": "dagonLift"
            }
          },
          "fail": {
            "text": "Calculas mal la distancia. El agua vuelve con violencia y te obliga a correr hacia el monolito.",
            "next": "core",
            "effects": {
              "health": -2,
              "dread": 2
            }
          }
        },
        {
          "label": "Usar el rosario como plomada",
          "stat": "ocultismo",
          "dc": 13,
          "requires": {
            "item": "Rosario de dientes salinos"
          },
          "success": {
            "text": "Los dientes apuntan a un punto bajo el monolito donde la geometría del fondo marino se pliega.",
            "next": "core",
            "effects": {
              "clues": 2,
              "insight": 1
            }
          },
          "fail": {
            "text": "El rosario se tensa hacia abajo y desaparece entre tus dedos como si alguien tirase desde kilómetros de profundidad.",
            "next": "core",
            "effects": {
              "sanity": -2,
              "removeItem": "Rosario de dientes salinos"
            }
          }
        }
      ]
    }
  },
  "tomb": {
    "detour": {
      "id": "album",
      "location": "Salón clausurado · 22:31",
      "art": "▣",
      "text": "Tras una cortina encuentras un álbum familiar cosido con hilo funerario. Algunas fotografías muestran la misma persona con décadas de diferencia y el mismo rostro.",
      "choices": [
        {
          "label": "Ordenar las fotografías por fecha real",
          "stat": "razon",
          "dc": 12,
          "success": {
            "text": "Descubres que la cronología gira alrededor del mausoleo: cada generación entrega un nombre y recibe una vida prestada.",
            "next": "threshold",
            "effects": {
              "clues": 2,
              "flag": "tombCycle"
            }
          },
          "fail": {
            "text": "Las fechas empiezan a repetirse hasta que una fotografía reciente muestra tu llegada a la casa.",
            "next": "trail",
            "effects": {
              "sanity": -2
            }
          }
        },
        {
          "label": "Descoser la foto más antigua",
          "stat": "movimiento",
          "dc": 12,
          "success": {
            "text": "Detrás hay una llave plana de plata y una frase: «el invitado puede levantarse si otro ocupa su asiento».",
            "next": "revelation_tomb",
            "effects": {
              "item": "Llave plana de plata",
              "clues": 1
            }
          },
          "fail": {
            "text": "El hilo corta como alambre. Una gota de sangre cae sobre el retrato y el hombre fotografiado sonríe.",
            "next": "threshold",
            "effects": {
              "health": -1,
              "dread": 1
            }
          }
        }
      ]
    },
    "revelation": {
      "id": "revelation_tomb",
      "location": "Galería de nichos · 00:21",
      "art": "†",
      "text": "La llave abre un corredor lateral lleno de nichos sin cuerpos. Cada placa lleva un nombre de la familia y una fecha futura.",
      "choices": [
        {
          "label": "Buscar la placa con tu apellido",
          "stat": "temple",
          "dc": 14,
          "success": {
            "text": "La encuentras en blanco. Eso significa que el ritual aún no te ha asignado un lugar.",
            "next": "core",
            "effects": {
              "clues": 3,
              "insight": 1,
              "flag": "tombUnwritten"
            }
          },
          "fail": {
            "text": "La placa existe y lleva la fecha de esta noche. La arrancas, pero el hueco conserva tu nombre.",
            "next": "core",
            "effects": {
              "sanity": -3,
              "dread": 2
            }
          }
        },
        {
          "label": "Cambiar dos placas de sitio",
          "stat": "ocultismo",
          "dc": 13,
          "success": {
            "text": "El corredor se contrae como una garganta y el muchacho grita desde la cripta. Has alterado el orden de la herencia.",
            "next": "final",
            "effects": {
              "clues": 2,
              "flag": "tombInheritanceBroken"
            }
          },
          "fail": {
            "text": "Los nombres vuelven a su lugar cuando apartas la mano. Algo en la tumba ha aprendido tu intención.",
            "next": "core",
            "effects": {
              "sanity": -2
            }
          }
        }
      ]
    }
  },
  "nyarlathotep": {
    "detour": {
      "id": "mirrors",
      "location": "Vestíbulo de espejos · 20:17",
      "art": "◈",
      "text": "Un acomodador sin pupilas te guía a un vestíbulo que no figura en el plano. Cada espejo muestra un público distinto aplaudiendo tu entrada.",
      "choices": [
        {
          "label": "Romper solo el espejo que no te refleja",
          "stat": "percepcion",
          "dc": 14,
          "success": {
            "text": "Detrás hay una escalera de servicio y una lista de asistentes marcada con símbolos astronómicos.",
            "next": "threshold",
            "effects": {
              "clues": 2,
              "item": "Lista de asistentes imposibles"
            }
          },
          "fail": {
            "text": "Rompes el espejo equivocado. Tu reflejo continúa de pie cuando tú retrocedes.",
            "next": "trail",
            "effects": {
              "sanity": -2,
              "dread": 2
            }
          }
        },
        {
          "label": "Imitar el aplauso del espejo central",
          "stat": "presencia",
          "dc": 14,
          "success": {
            "text": "El vestíbulo acepta la impostura y te deja cruzar a la zona técnica sin entrada.",
            "next": "revelation_nyarlathotep",
            "effects": {
              "flag": "theatreBackstage",
              "clues": 1
            }
          },
          "fail": {
            "text": "Todos los reflejos dejan de aplaudir al mismo tiempo. Uno pronuncia tu nombre.",
            "next": "threshold",
            "effects": {
              "sanity": -1,
              "dread": 2
            }
          }
        }
      ]
    },
    "revelation": {
      "id": "revelation_nyarlathotep",
      "location": "Sala de proyección · 21:03",
      "art": "▤",
      "text": "No hay película en el proyector. La luz atraviesa una placa negra y proyecta ciudades bajo soles muertos. Una de ellas tiene el trazado de Arkham.",
      "choices": [
        {
          "label": "Fotografiar un solo fotograma",
          "stat": "razon",
          "dc": 15,
          "success": {
            "text": "Capturas la transición entre Arkham y la ciudad muerta. Es la primera prueba de que el espectáculo no es hipnosis.",
            "next": "core",
            "effects": {
              "clues": 3,
              "insight": 1,
              "flag": "blackFrame"
            }
          },
          "fail": {
            "text": "La cámara se atasca. En el visor aparece tu asiento vacío y una figura ocupándolo.",
            "next": "core",
            "effects": {
              "sanity": -3
            }
          }
        },
        {
          "label": "Apagar el arco eléctrico",
          "stat": "movimiento",
          "dc": 14,
          "success": {
            "text": "La proyección se corta y, por un instante, el escenario verdadero queda expuesto: una calle sin cielo detrás del telón.",
            "next": "final",
            "effects": {
              "clues": 2,
              "dread": -1
            }
          },
          "fail": {
            "text": "La descarga te lanza al suelo y el público aplaude desde una sala que ya no existe.",
            "next": "core",
            "effects": {
              "health": -2,
              "dread": 2
            }
          }
        }
      ]
    }
  }
});
