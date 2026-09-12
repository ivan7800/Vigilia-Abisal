'use strict';
window.VIGILIA_CAMPAIGN = window.VIGILIA_CAMPAIGN || {};
window.VIGILIA_CAMPAIGN.metaCase.stages.push(...[
  {
    "id": "threshold",
    "location": "Depósito sin dirección · 03:33",
    "art": "⌘",
    "text": "La puerta conduce a un depósito imposible: miles de cajas con nombres de investigadores de épocas distintas. Algunas contienen objetos que reconoces de tus propios casos.",
    "choices": [
      {
        "label": "Seguir los objetos que pertenecen a tu inventario",
        "stat": "percepcion",
        "dc": 18,
        "success": {
          "text": "Los objetos forman una cadena de pruebas. Cada horror era distinto, pero alguien los estaba catalogando como respuestas al mismo experimento.",
          "next": "core",
          "effects": {
            "clues": 4,
            "insight": 2,
            "flag": "omegaChain"
          }
        },
        "fail": {
          "text": "Los objetos te reconocen antes de que tú los reconozcas. Varias cajas se abren a la vez.",
          "next": "core",
          "effects": {
            "sanity": -4,
            "dread": 2
          }
        }
      },
      {
        "label": "Quemar una de las cinco convergencias",
        "stat": "ocultismo",
        "dc": 17,
        "success": {
          "text": "El depósito se contrae. Has demostrado que el archivo depende de que sus categorías permanezcan intactas.",
          "next": "core",
          "effects": {
            "insight": 1,
            "flag": "omegaWeakness"
          }
        },
        "fail": {
          "text": "El fuego arde con la forma de una letra que no conoces y luego se apaga dentro de tu recuerdo.",
          "next": "core",
          "effects": {
            "sanity": -3
          }
        }
      }
    ]
  },
  {
    "id": "core",
    "location": "Sala Ω · fuera del índice",
    "art": "◉",
    "text": "En el centro espera una mesa con un único volumen. La portada lleva tu nombre y debajo una frase: «sujeto capaz de correlacionar». El archivo te ha estado estudiando a ti.",
    "choices": [
      {
        "label": "Leer hasta la última página y reescribir el índice",
        "stat": "razon",
        "dc": 19,
        "requires": {
          "campaign": {
            "completed": 20,
            "sigils": 5,
            "insight": 20
          }
        },
        "success": {
          "text": "Aceptas toda la verdad sin entregarle tu identidad. Reescribes el índice para que el archivo ya no pueda correlacionar a los vivos como objetos.",
          "next": "END_ABYSS_TRUTH",
          "effects": {
            "insight": 3
          }
        },
        "fail": {
          "text": "La verdad es demasiado grande para poseerla sin pagar. Logras cerrar el volumen, pero una parte de ti queda indexada.",
          "next": "END_ABYSS_LOOP",
          "effects": {
            "sanity": -5
          }
        }
      },
      {
        "label": "Separar las convergencias y sellar el volumen",
        "stat": "temple",
        "dc": 17,
        "requires": {
          "campaign": {
            "completed": 12,
            "sigils": 4
          }
        },
        "success": {
          "text": "No necesitas comprenderlo todo para impedir que siga creciendo. Rompes la relación entre los cinco patrones y el depósito empieza a plegarse.",
          "next": "END_ABYSS_SEAL",
          "effects": {
            "dread": -3
          }
        },
        "fail": {
          "text": "Una convergencia se resiste. El archivo conserva una copia de tu método y te devuelve al mundo con una deuda.",
          "next": "END_ABYSS_LOOP",
          "effects": {
            "sanity": -3,
            "dread": 3
          }
        }
      },
      {
        "label": "Aceptar el puesto de custodio del Archivo Ω",
        "stat": "ocultismo",
        "dc": 16,
        "success": {
          "text": "Comprendes demasiado tarde que el puesto siempre estuvo vacante porque cada custodio termina convirtiéndose en otra sección.",
          "next": "END_ABYSS_LOOP",
          "effects": {
            "insight": 1
          }
        },
        "fail": {
          "text": "El archivo rechaza incluso tu rendición. Te devuelve a la primera noche con recuerdos que no deberían sobrevivir al reinicio.",
          "next": "END_ABYSS_LOOP",
          "effects": {
            "sanity": -2
          }
        }
      }
    ]
  }
]);
