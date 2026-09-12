'use strict';
window.VIGILIA_CAMPAIGN = window.VIGILIA_CAMPAIGN || {};
window.VIGILIA_CAMPAIGN.metaCase = {
  "id": "abyss",
  "title": "Archivo Ω · La vigilia detrás de la vigilia",
  "source": "Final original de metacampaña",
  "difficulty": 16,
  "badge": "CONVERGENCIA · ARCHIVO Ω · FINAL DE CAMPAÑA",
  "intro": "Cuando suficientes expedientes se cruzan, los márgenes de tus notas empiezan a citar casos que aún no habías comparado. Cinco patrones conducen a una puerta sin dirección.",
  "isMeta": true,
  "stages": [
    {
      "id": "start",
      "location": "Archivo privado · 03:12",
      "art": "Ω",
      "text": "Extiendes los expedientes sobre el suelo. Los símbolos de mar, sangre, sueño, cielo y culto forman una figura que solo aparece cuando dejas de mirar un caso cada vez.",
      "choices": [
        {
          "label": "Construir el mapa de las cinco convergencias",
          "stat": "razon",
          "dc": 17,
          "success": {
            "text": "El mapa revela un hueco deliberado entre los casos. No es falta de información: es una puerta documental.",
            "next": "threshold",
            "effects": {
              "clues": 3,
              "insight": 2,
              "flag": "omegaMap"
            }
          },
          "fail": {
            "text": "Las conexiones se multiplican hasta parecer paranoia. Solo una marca permanece estable: Ω.",
            "next": "threshold",
            "effects": {
              "sanity": -3,
              "dread": 2
            }
          }
        },
        {
          "label": "Dormir sobre el círculo de expedientes",
          "stat": "temple",
          "dc": 16,
          "success": {
            "text": "Sueñas el archivo desde fuera. Comprendes que alguien ha usado tus investigaciones para medir qué horrores puedes soportar.",
            "next": "dream_gate",
            "effects": {
              "insight": 2,
              "flag": "omegaDream"
            }
          },
          "fail": {
            "text": "Algo revisa tus recuerdos como fichas. Despiertas con una carpeta nueva bajo la cabeza.",
            "next": "threshold",
            "effects": {
              "sanity": -4,
              "dread": 2
            }
          }
        }
      ]
    },
    {
      "id": "dream_gate",
      "location": "Pasillo entre sueños · sin reloj",
      "art": "◐",
      "text": "Cada puerta lleva el título de un expediente. Detrás se oyen versiones de tus decisiones que nunca tomaste.",
      "choices": [
        {
          "label": "Abrir solo las puertas de los casos resueltos",
          "stat": "temple",
          "dc": 17,
          "success": {
            "text": "Las rutas descartadas se apagan. Conservas únicamente las decisiones que realmente te trajeron hasta aquí.",
            "next": "threshold",
            "effects": {
              "insight": 2,
              "dread": -1,
              "flag": "omegaIdentity"
            }
          },
          "fail": {
            "text": "Una versión de ti sale de una puerta y te pregunta cuál de los dos recuerda la partida verdadera.",
            "next": "threshold",
            "effects": {
              "sanity": -3
            }
          }
        },
        {
          "label": "Buscar una puerta sin título",
          "stat": "percepcion",
          "dc": 17,
          "success": {
            "text": "Encuentras Ω grabada en el canto, no en la cara. La puerta siempre estuvo abierta lateralmente.",
            "next": "core",
            "effects": {
              "clues": 3,
              "insight": 1
            }
          },
          "fail": {
            "text": "Las puertas cambian de posición. Vuelves al archivo con sangre seca en las manos y ninguna herida.",
            "next": "threshold",
            "effects": {
              "health": -1,
              "dread": 2
            }
          }
        }
      ]
    }
  ]
};
