'use strict';
window.VIGILIA_CAMPAIGN = window.VIGILIA_CAMPAIGN || {};
window.VIGILIA_CAMPAIGN.expansions = window.VIGILIA_CAMPAIGN.expansions || {};
Object.assign(window.VIGILIA_CAMPAIGN.expansions, {
  "whisperer": {
    "detour": {
      "id": "antenna_wood",
      "location": "Bosque de antenas · 21:04",
      "art": "⌁",
      "text": "Entre los pinos descubres varillas metálicas disfrazadas de ramas. Todas apuntan a regiones distintas del cielo y vibran con voces demasiado lejanas.",
      "choices": [
        {
          "label": "Triangular la señal más cercana",
          "stat": "razon",
          "dc": 14,
          "success": {
            "text": "La señal no viene del cielo, sino de la colina. El sistema está retransmitiendo algo que ya está aquí.",
            "next": "threshold",
            "effects": {
              "clues": 2,
              "flag": "miGoRelay"
            }
          },
          "fail": {
            "text": "Las señales se superponen hasta formar tu nombre con acentos que no pertenecen a ninguna lengua terrestre.",
            "next": "trail",
            "effects": {
              "sanity": -2
            }
          }
        },
        {
          "label": "Cortar una antena y conservarla",
          "stat": "movimiento",
          "dc": 14,
          "success": {
            "text": "La varilla sigue vibrando en tu mano, orientándose hacia la granja como una brújula nerviosa.",
            "next": "revelation_whisperer",
            "effects": {
              "item": "Varilla resonante",
              "clues": 1
            }
          },
          "fail": {
            "text": "La antena descarga una corriente fría que te deja un olor a ozono bajo la piel.",
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
      "id": "revelation_whisperer",
      "location": "Granero del profesor · 01:26",
      "art": "⌗",
      "text": "El granero contiene cajas de transporte acolchadas con medidas demasiado pequeñas para un cuerpo y demasiado precisas para equipaje corriente.",
      "choices": [
        {
          "label": "Examinar el interior de una caja",
          "stat": "temple",
          "dc": 16,
          "success": {
            "text": "Las correas sujetarían algo del tamaño de un cerebro humano. Comprendes qué significa “transporte ligero”.",
            "next": "core",
            "effects": {
              "clues": 3,
              "insight": 1,
              "flag": "miGoCargo"
            }
          },
          "fail": {
            "text": "Una caja reproduce un murmullo con la voz exacta del profesor. Está vacía.",
            "next": "core",
            "effects": {
              "sanity": -3
            }
          }
        },
        {
          "label": "Usar la varilla para localizar al transmisor",
          "stat": "percepcion",
          "dc": 15,
          "requires": {
            "item": "Varilla resonante"
          },
          "success": {
            "text": "La varilla apunta a una trampilla lateral. Llegas a la colina por una ruta que evita a los vigilantes alados.",
            "next": "final",
            "effects": {
              "clues": 2,
              "dread": -1
            }
          },
          "fail": {
            "text": "La varilla gira hacia tu cráneo y vibra con una conversación que parece ocurrir dentro.",
            "next": "core",
            "effects": {
              "sanity": -2
            }
          }
        }
      ]
    }
  },
  "witch_house": {
    "detour": {
      "id": "math_archive",
      "location": "Archivo matemático · 20:22",
      "art": "∷",
      "text": "Los profesores han guardado ejercicios del estudiante por su brillantez. Algunos márgenes contienen soluciones escritas décadas antes de que naciera.",
      "choices": [
        {
          "label": "Comparar las soluciones con textos antiguos",
          "stat": "razon",
          "dc": 15,
          "success": {
            "text": "La misma geometría aparece en procesos de brujería del siglo XVII. No era superstición: era notación.",
            "next": "threshold",
            "effects": {
              "clues": 2,
              "flag": "witchNotation"
            }
          },
          "fail": {
            "text": "La fórmula parece resolverte a ti. Durante un instante puedes expresar tu cuerpo como cuatro números.",
            "next": "trail",
            "effects": {
              "sanity": -2
            }
          }
        },
        {
          "label": "Calcar el diagrama más incompleto",
          "stat": "ocultismo",
          "dc": 14,
          "success": {
            "text": "El hueco del diagrama coincide con la forma de la habitación contigua a la del estudiante.",
            "next": "revelation_witch",
            "effects": {
              "item": "Calco de ángulo incompleto",
              "clues": 1
            }
          },
          "fail": {
            "text": "El lápiz completa solo una línea que no habías trazado. Apunta al techo.",
            "next": "threshold",
            "effects": {
              "dread": 2
            }
          }
        }
      ]
    },
    "revelation": {
      "id": "revelation_witch",
      "location": "Habitación contigua · 02:51",
      "art": "⌑",
      "text": "El cuarto vacío comparte una pared imposible con el dormitorio del estudiante. Al medirla desde aquí faltan exactamente treinta y siete centímetros.",
      "choices": [
        {
          "label": "Insertar el calco en la pared faltante",
          "stat": "ocultismo",
          "dc": 17,
          "requires": {
            "item": "Calco de ángulo incompleto"
          },
          "success": {
            "text": "La geometría se completa y revela un corredor entre ambos cuartos que no ocupa espacio físico.",
            "next": "core",
            "effects": {
              "clues": 3,
              "insight": 1,
              "flag": "witchInterspace"
            }
          },
          "fail": {
            "text": "El papel atraviesa el yeso y una mano vieja intenta recuperarlo desde el otro lado.",
            "next": "core",
            "effects": {
              "sanity": -3
            }
          }
        },
        {
          "label": "Clavar listones para forzar un ángulo recto",
          "stat": "movimiento",
          "dc": 15,
          "success": {
            "text": "La habitación protesta con crujidos, pero el acceso se estrecha. Has reducido las rutas posibles de la bruja.",
            "next": "final",
            "effects": {
              "dread": -1,
              "flag": "witchAnglePinned"
            }
          },
          "fail": {
            "text": "El listón entra por una pared y sale por otra perpendicular. Lo sueltas antes de perder la mano.",
            "next": "core",
            "effects": {
              "health": -1,
              "dread": 2
            }
          }
        }
      ]
    }
  },
  "time_shadow": {
    "detour": {
      "id": "mineral_museum",
      "location": "Museo de geología · 16:43",
      "art": "⌛",
      "text": "Una vitrina contiene minerales australianos donados por el profesor durante los años que no recuerda. Uno lleva una etiqueta escrita con tu letra.",
      "choices": [
        {
          "label": "Analizar la etiqueta y el mineral",
          "stat": "razon",
          "dc": 15,
          "success": {
            "text": "La datación es absurda: la muestra fue extraída millones de años antes de que existiera la cantera indicada.",
            "next": "threshold",
            "effects": {
              "clues": 2,
              "item": "Muestra con fecha imposible"
            }
          },
          "fail": {
            "text": "La etiqueta contiene una nota para ti: «no copies el índice». No recuerdas haberla escrito.",
            "next": "trail",
            "effects": {
              "sanity": -2
            }
          }
        },
        {
          "label": "Preguntar por el donante registrado",
          "stat": "presencia",
          "dc": 15,
          "success": {
            "text": "El conservador recuerda al profesor hablando con un acento que ningún lingüista pudo identificar.",
            "next": "revelation_time",
            "effects": {
              "clues": 2,
              "flag": "timeDonor"
            }
          },
          "fail": {
            "text": "El conservador insiste en que fuiste tú quien entregó la caja. Te muestra una firma idéntica a la tuya.",
            "next": "threshold",
            "effects": {
              "dread": 2
            }
          }
        }
      ]
    },
    "revelation": {
      "id": "revelation_time",
      "location": "Cámara de intercambio · hora no lineal",
      "art": "◌",
      "text": "En la ruina lateral descubres asientos, diademas y nichos alineados. No era una biblioteca solamente: era una estación de intercambio de mentes.",
      "choices": [
        {
          "label": "Comparar la muestra con la piedra de los nichos",
          "stat": "percepcion",
          "dc": 17,
          "requires": {
            "item": "Muestra con fecha imposible"
          },
          "success": {
            "text": "Son idénticas. La muestra del museo salió de esta cámara y viajó al pasado contigo o a través de ti.",
            "next": "core",
            "effects": {
              "clues": 3,
              "insight": 1,
              "flag": "timeClosedLoop"
            }
          },
          "fail": {
            "text": "La piedra se calienta y recuerdas manos no humanas etiquetando tu cuerpo.",
            "next": "core",
            "effects": {
              "sanity": -3
            }
          }
        },
        {
          "label": "Desactivar una de las diademas",
          "stat": "movimiento",
          "dc": 16,
          "success": {
            "text": "Rompes un circuito de intercambio. Una presencia abandona tu memoria con un grito que solo tú puedes oír.",
            "next": "final",
            "effects": {
              "dread": -1,
              "flag": "timeExchangeBroken"
            }
          },
          "fail": {
            "text": "La diadema se activa un segundo. Cuando vuelves a abrir los ojos no sabes cuánto tiempo ha pasado.",
            "next": "core",
            "effects": {
              "sanity": -2,
              "dread": 2
            }
          }
        }
      ]
    }
  }
});
