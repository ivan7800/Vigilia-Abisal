'use strict';
window.VIGILIA_CAMPAIGN = window.VIGILIA_CAMPAIGN || {};
window.VIGILIA_CAMPAIGN.expansions = window.VIGILIA_CAMPAIGN.expansions || {};
Object.assign(window.VIGILIA_CAMPAIGN.expansions, {
  "nameless_city": {
    "detour": {
      "id": "lost_camp",
      "location": "Campamento de la expedición anterior · 18:26",
      "art": "△",
      "text": "A dos kilómetros de las ruinas encuentras tiendas enterradas hasta la mitad. Los diarios terminan todos con la misma frase: «el viento viene de abajo».",
      "choices": [
        {
          "label": "Reconstruir la última ruta del equipo",
          "stat": "razon",
          "dc": 13,
          "success": {
            "text": "Las notas forman una espiral hacia una abertura que el mapa original omitía deliberadamente.",
            "next": "threshold",
            "effects": {
              "clues": 2,
              "item": "Brújula invertida del campamento"
            }
          },
          "fail": {
            "text": "Las rutas se contradicen. Terminas de nuevo frente a la misma tienda sin recordar haber dado la vuelta.",
            "next": "trail",
            "effects": {
              "sanity": -2
            }
          }
        },
        {
          "label": "Seguir el aire frío bajo una lona",
          "stat": "percepcion",
          "dc": 13,
          "success": {
            "text": "Descubres un respiradero de piedra y una inscripción humana mucho más reciente que la ciudad.",
            "next": "revelation_nameless",
            "effects": {
              "clues": 2,
              "flag": "namelessRecentVisitors"
            }
          },
          "fail": {
            "text": "La lona se hunde bajo tu peso. Debajo no hay arena, sino una escalera.",
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
      "id": "revelation_nameless",
      "location": "Pozo de aire frío · 21:12",
      "art": "▽",
      "text": "El respiradero conduce a una cámara lateral. Hay lámparas modernas, cajas vacías y huellas que se mezclan con rastros reptilianos.",
      "choices": [
        {
          "label": "Comparar las huellas modernas y antiguas",
          "stat": "percepcion",
          "dc": 15,
          "success": {
            "text": "Alguien ha estado alimentando a los habitantes inferiores. La ciudad no está abandonada: está administrada.",
            "next": "core",
            "effects": {
              "clues": 3,
              "insight": 1
            }
          },
          "fail": {
            "text": "Te concentras demasiado en el suelo y no ves la silueta baja que cruza detrás de las columnas.",
            "next": "core",
            "effects": {
              "sanity": -2,
              "dread": 2
            }
          }
        },
        {
          "label": "Bloquear el pozo con equipo del campamento",
          "stat": "movimiento",
          "dc": 14,
          "success": {
            "text": "El cierre obliga a la corriente a buscar otra salida. Oyes un rugido profundo y encuentras una ruta de vuelta más corta.",
            "next": "final",
            "effects": {
              "dread": -1,
              "flag": "namelessVentSealed"
            }
          },
          "fail": {
            "text": "Las piedras ceden hacia dentro. Algo tira de la cuerda con paciencia.",
            "next": "core",
            "effects": {
              "health": -2
            }
          }
        }
      ]
    }
  },
  "zann": {
    "detour": {
      "id": "porter_room",
      "location": "Cuarto del portero · 23:19",
      "art": "♩",
      "text": "El portero guarda recibos de inquilinos que oficialmente nunca vivieron en la calle. Todos pagaban extra por habitaciones sin ventanas.",
      "choices": [
        {
          "label": "Revisar los recibos por intervalos musicales",
          "stat": "razon",
          "dc": 12,
          "success": {
            "text": "Las fechas siguen una progresión: cada desaparición coincide con el mismo compás que Zann toca esta noche.",
            "next": "threshold",
            "effects": {
              "clues": 2,
              "flag": "zannPattern"
            }
          },
          "fail": {
            "text": "Las cifras se convierten en notas mientras las lees. Tarareas una sin darte cuenta y arriba el violín responde.",
            "next": "trail",
            "effects": {
              "sanity": -2
            }
          }
        },
        {
          "label": "Registrar el armario del portero",
          "stat": "percepcion",
          "dc": 12,
          "success": {
            "text": "Encuentras tapones de cera negra y un diapasón partido. El portero no era sordo: se estaba protegiendo.",
            "next": "revelation_zann",
            "effects": {
              "item": "Diapasón partido",
              "clues": 1
            }
          },
          "fail": {
            "text": "El armario se cierra con un golpe. Desde dentro alguien marca cuatro tiempos.",
            "next": "threshold",
            "effects": {
              "dread": 2
            }
          }
        }
      ]
    },
    "revelation": {
      "id": "revelation_zann",
      "location": "Cornisa de Rue d’Auseil · 00:02",
      "art": "𝄞",
      "text": "Una puerta lateral da a una cornisa que rodea la buhardilla. La calle termina varios pisos más abajo en una niebla que no refleja las farolas.",
      "choices": [
        {
          "label": "Afinar el diapasón contra el muro",
          "stat": "ocultismo",
          "dc": 14,
          "requires": {
            "item": "Diapasón partido"
          },
          "success": {
            "text": "El muro vibra en una frecuencia opuesta a la música de Zann. Por primera vez distingues una frontera entre la habitación y el vacío.",
            "next": "core",
            "effects": {
              "clues": 3,
              "insight": 1,
              "flag": "zannCountertone"
            }
          },
          "fail": {
            "text": "La nota se prolonga demasiado. La niebla debajo de ti empieza a subir por la pared.",
            "next": "core",
            "effects": {
              "sanity": -3
            }
          }
        },
        {
          "label": "Entrar por la ventana lateral",
          "stat": "movimiento",
          "dc": 13,
          "success": {
            "text": "Llegas junto a Zann antes del último compás y puedes actuar sin cruzar la puerta principal.",
            "next": "final",
            "effects": {
              "clues": 1,
              "dread": -1
            }
          },
          "fail": {
            "text": "El cristal cede y el vacío queda demasiado cerca. Logras entrar, pero algo te ha visto.",
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
  "pickman": {
    "detour": {
      "id": "dealer_archive",
      "location": "Archivo del marchante · 21:18",
      "art": "▧",
      "text": "Las facturas de Pickman incluyen entregas a direcciones demolidas décadas atrás. En cada recibo hay una pequeña mancha de tierra fresca.",
      "choices": [
        {
          "label": "Trazar las direcciones en un plano antiguo",
          "stat": "razon",
          "dc": 13,
          "success": {
            "text": "Las casas forman una red sobre antiguos túneles de enterramiento. El estudio ocupa solo una entrada.",
            "next": "threshold",
            "effects": {
              "clues": 2,
              "item": "Plano de túneles funerarios"
            }
          },
          "fail": {
            "text": "El plano se vuelve ilegible cuando intentas unir los puntos. Una línea nueva aparece hacia tu propia dirección.",
            "next": "trail",
            "effects": {
              "sanity": -2
            }
          }
        },
        {
          "label": "Examinar la tierra de los recibos",
          "stat": "percepcion",
          "dc": 13,
          "success": {
            "text": "No es pigmento. Contiene cal, pelo y fragmentos de tela infantil.",
            "next": "revelation_pickman",
            "effects": {
              "clues": 2,
              "flag": "pickmanSoil"
            }
          },
          "fail": {
            "text": "La tierra se adhiere a tu piel y huele a sótano húmedo. Tardas demasiado en quitártela.",
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
      "id": "revelation_pickman",
      "location": "Cámara oscura · 23:47",
      "art": "◫",
      "text": "Junto al túnel hay una cámara oscura improvisada. Decenas de placas muestran al mismo modelo creciendo desde cachorro hasta una edad imposible.",
      "choices": [
        {
          "label": "Ordenar las placas por tamaño del modelo",
          "stat": "percepcion",
          "dc": 15,
          "success": {
            "text": "La serie demuestra que Pickman no documentaba una criatura: documentaba una colonia y sus generaciones.",
            "next": "core",
            "effects": {
              "clues": 3,
              "insight": 1
            }
          },
          "fail": {
            "text": "Una placa parece reciente. En ella, la cámara oscura está ocupada por alguien con tu abrigo.",
            "next": "core",
            "effects": {
              "sanity": -3
            }
          }
        },
        {
          "label": "Velar todas las placas con luz blanca",
          "stat": "movimiento",
          "dc": 14,
          "success": {
            "text": "Las imágenes se queman y algo gruñe desde el túnel. Has destruido un registro que también servía de guía.",
            "next": "final",
            "effects": {
              "flag": "pickmanArchiveBurned",
              "dread": -1
            }
          },
          "fail": {
            "text": "La lámpara falla. Las figuras de las placas parecen cambiar de postura en la oscuridad.",
            "next": "core",
            "effects": {
              "dread": 2
            }
          }
        }
      ]
    }
  }
});
