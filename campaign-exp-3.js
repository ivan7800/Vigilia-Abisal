'use strict';
window.VIGILIA_CAMPAIGN = window.VIGILIA_CAMPAIGN || {};
window.VIGILIA_CAMPAIGN.expansions = window.VIGILIA_CAMPAIGN.expansions || {};
Object.assign(window.VIGILIA_CAMPAIGN.expansions, {
  "shunned_house": {
    "detour": {
      "id": "death_registry",
      "location": "Archivo municipal · 18:54",
      "art": "⌂",
      "text": "Los certificados de defunción de la casa repiten fiebres, agotamiento y “debilidad familiar”. Las firmas médicas cambian; la caligrafía de los síntomas no.",
      "choices": [
        {
          "label": "Superponer las fechas de las muertes",
          "stat": "razon",
          "dc": 12,
          "success": {
            "text": "Las muertes siguen ciclos de humedad extrema. Esta noche comienza uno nuevo.",
            "next": "threshold",
            "effects": {
              "clues": 2,
              "flag": "houseCycle"
            }
          },
          "fail": {
            "text": "El patrón se rompe justo en los años en que la casa estuvo vacía. Alguien ha añadido muertes que no ocurrieron allí.",
            "next": "trail",
            "effects": {
              "sanity": -1
            }
          }
        },
        {
          "label": "Buscar planos del alcantarillado antiguo",
          "stat": "percepcion",
          "dc": 12,
          "success": {
            "text": "Un conducto sellado conecta el sótano con un pozo cegado en el patio trasero.",
            "next": "revelation_shunned",
            "effects": {
              "item": "Plano sanitario de Benefit Street",
              "clues": 1
            }
          },
          "fail": {
            "text": "Los planos han sido recortados exactamente alrededor de la parcela.",
            "next": "threshold",
            "effects": {
              "dread": 1
            }
          }
        }
      ]
    },
    "revelation": {
      "id": "revelation_shunned",
      "location": "Pozo cegado · 00:17",
      "art": "◉",
      "text": "Bajo las tablas del patio queda un pozo relleno de cal. El aire que sale de una grieta huele igual que el muro enfermo del sótano.",
      "choices": [
        {
          "label": "Verter cal fresca y observar la reacción",
          "stat": "razon",
          "dc": 14,
          "success": {
            "text": "La cal ennegrece formando raíces. Confirmas que la casa es solo la parte visible de algo extendido bajo la calle.",
            "next": "core",
            "effects": {
              "clues": 3,
              "insight": 1,
              "flag": "houseNetwork"
            }
          },
          "fail": {
            "text": "La reacción libera un vapor dulce. Te cuesta recordar por qué habías salido al patio.",
            "next": "core",
            "effects": {
              "sanity": -3
            }
          }
        },
        {
          "label": "Sellar el conducto según el plano",
          "stat": "movimiento",
          "dc": 13,
          "requires": {
            "item": "Plano sanitario de Benefit Street"
          },
          "success": {
            "text": "Cortas una de las rutas de alimentación de la raíz. La casa tiembla y parte del yeso cae como piel seca.",
            "next": "final",
            "effects": {
              "dread": -1,
              "flag": "houseStarved"
            }
          },
          "fail": {
            "text": "El conducto cede y la humedad te salpica la cara. Durante un segundo recuerdas una infancia que no fue tuya.",
            "next": "core",
            "effects": {
              "sanity": -2
            }
          }
        }
      ]
    }
  },
  "festival": {
    "detour": {
      "id": "harbour_inn",
      "location": "Posada del puerto · 21:42",
      "art": "❄",
      "text": "En la posada nadie pregunta por la procesión. El libro de huéspedes, en cambio, contiene tu firma repetida cada veintisiete años desde 1813.",
      "choices": [
        {
          "label": "Comparar las firmas antiguas",
          "stat": "percepcion",
          "dc": 13,
          "success": {
            "text": "No son imitaciones: cada firma registra pequeñas variaciones propias de tu pulso actual.",
            "next": "threshold",
            "effects": {
              "clues": 2,
              "flag": "festivalSignatures"
            }
          },
          "fail": {
            "text": "Las firmas parecen cambiar cuando apartas la vista. Una de ellas añade la habitación donde duermes esta noche.",
            "next": "trail",
            "effects": {
              "sanity": -2
            }
          }
        },
        {
          "label": "Preguntar por el huésped de 1813",
          "stat": "presencia",
          "dc": 13,
          "success": {
            "text": "La posadera te entrega una llave que nadie ha reclamado. “Siempre vuelve la familia”, dice.",
            "next": "revelation_festival",
            "effects": {
              "item": "Llave de huésped 1813",
              "clues": 1
            }
          },
          "fail": {
            "text": "La posadera deja de sonreír. Afuera, la procesión reduce el paso como si te estuviera esperando.",
            "next": "threshold",
            "effects": {
              "dread": 2
            }
          }
        }
      ]
    },
    "revelation": {
      "id": "revelation_festival",
      "location": "Cripta de las máscaras · 00:41",
      "art": "☷",
      "text": "La llave abre una cámara bajo la posada. Cientos de máscaras cuelgan con etiquetas de apellidos locales; una lleva tu nombre escrito con tinta fresca.",
      "choices": [
        {
          "label": "Ponerte una máscara sin nombre",
          "stat": "temple",
          "dc": 15,
          "success": {
            "text": "La cripta deja de reconocerte como invitado y escuchas a los encapuchados hablar sin cuidar sus secretos.",
            "next": "core",
            "effects": {
              "clues": 3,
              "insight": 1,
              "flag": "festivalAnonymous"
            }
          },
          "fail": {
            "text": "La máscara se ajusta demasiado. Durante unos segundos recuerdas una ceremonia celebrada antes de tu nacimiento.",
            "next": "core",
            "effects": {
              "sanity": -3
            }
          }
        },
        {
          "label": "Romper la máscara con tu nombre",
          "stat": "movimiento",
          "dc": 14,
          "success": {
            "text": "El golpe resuena bajo toda Kingsport. Varias figuras de la procesión se detienen como si hubieran olvidado a quién esperaban.",
            "next": "final",
            "effects": {
              "dread": -1,
              "flag": "festivalNameBroken"
            }
          },
          "fail": {
            "text": "La máscara no se rompe. La grieta aparece en tu propia piel durante un instante.",
            "next": "core",
            "effects": {
              "health": -1,
              "sanity": -1
            }
          }
        }
      ]
    }
  },
  "ward": {
    "detour": {
      "id": "sealed_ward",
      "location": "Sanatorio · ala clausurada",
      "art": "⚗",
      "text": "Una antigua sala de aislamiento contiene historiales de pacientes que afirmaban ser antepasados de sí mismos. Ward visitó a todos antes de desaparecer.",
      "choices": [
        {
          "label": "Cruzar diagnósticos y genealogías",
          "stat": "razon",
          "dc": 14,
          "success": {
            "text": "Los pacientes comparten nombres con recipientes descritos en las cartas de Pawtuxet.",
            "next": "threshold",
            "effects": {
              "clues": 2,
              "flag": "wardPatients"
            }
          },
          "fail": {
            "text": "Las historias clínicas empiezan a parecer notas tomadas sobre ti. Cierras la carpeta demasiado tarde.",
            "next": "trail",
            "effects": {
              "sanity": -2
            }
          }
        },
        {
          "label": "Registrar la celda que ocupó Ward",
          "stat": "percepcion",
          "dc": 14,
          "success": {
            "text": "Encuentras sales grises ocultas en el marco y un número de lote grabado a mano.",
            "next": "revelation_ward",
            "effects": {
              "item": "Etiqueta de lote humano",
              "clues": 1
            }
          },
          "fail": {
            "text": "La celda parece vacía hasta que una voz detrás de la pared pronuncia el nombre de un muerto.",
            "next": "threshold",
            "effects": {
              "dread": 2
            }
          }
        }
      ]
    },
    "revelation": {
      "id": "revelation_ward",
      "location": "Pozo de sales · 01:11",
      "art": "⌬",
      "text": "Bajo el laboratorio encuentras un depósito donde las sales no están almacenadas: están organizadas por familias y fechas de nacimiento.",
      "choices": [
        {
          "label": "Buscar el lote de Charles Dexter Ward",
          "stat": "percepcion",
          "dc": 16,
          "success": {
            "text": "El recipiente de Ward está vacío. Otro, mucho más antiguo, tiene su misma caligrafía en la etiqueta.",
            "next": "core",
            "effects": {
              "clues": 3,
              "insight": 1,
              "flag": "wardIdentityProof"
            }
          },
          "fail": {
            "text": "Varias etiquetas cambian de nombre mientras las lees. Una adopta el tuyo.",
            "next": "core",
            "effects": {
              "sanity": -3
            }
          }
        },
        {
          "label": "Contaminar el sistema de clasificación",
          "stat": "ocultismo",
          "dc": 15,
          "success": {
            "text": "Mezclas símbolos y números de lote. Los recipientes empiezan a responder a nombres equivocados y el laboratorio entra en caos.",
            "next": "final",
            "effects": {
              "flag": "wardArchiveBroken",
              "dread": -1
            }
          },
          "fail": {
            "text": "Una fórmula incompleta activa un recipiente cercano. Algo golpea el cristal desde dentro.",
            "next": "core",
            "effects": {
              "health": -1,
              "dread": 2
            }
          }
        }
      ]
    }
  }
});
