'use strict';
window.VIGILIA_CAMPAIGN = window.VIGILIA_CAMPAIGN || {};
window.VIGILIA_CAMPAIGN["crossLinks"] = [
  {
    "caseId": "dagon",
    "stageId": "chapel",
    "label": "Reconocer el patrón de mareas de Innsmouth",
    "requires": {
      "flag": "escapedInnsmouth"
    },
    "stat": "razon",
    "dc": 11,
    "bonus": 1,
    "successText": "Lo visto en Innsmouth encaja: el culto no espera una llegada, coordina un ascenso. Encuentras la hora exacta de la bajamar.",
    "next": "revelation_dagon",
    "effects": {
      "clues": 2,
      "insight": 1
    }
  },
  {
    "caseId": "tomb",
    "stageId": "album",
    "label": "Comparar la herencia con el archivo Whateley",
    "requires": {
      "flag": "banishedSpawn"
    },
    "stat": "ocultismo",
    "dc": 12,
    "bonus": 1,
    "successText": "Los dos linajes usan el mismo símbolo de sustitución. La tumba no conserva muertos: conserva posiciones.",
    "next": "revelation_tomb",
    "effects": {
      "clues": 2,
      "insight": 1
    }
  },
  {
    "caseId": "nyarlathotep",
    "stageId": "mirrors",
    "label": "Usar la experiencia onírica de Kadath para ignorar un reflejo",
    "requires": {
      "flag": "facedMessenger"
    },
    "stat": "temple",
    "dc": 13,
    "bonus": 2,
    "successText": "Reconoces una regla del sueño: no todo lo que te mira merece respuesta. El espejo se vuelve transparente.",
    "next": "revelation_nyarlathotep",
    "effects": {
      "clues": 2
    }
  },
  {
    "caseId": "nameless_city",
    "stageId": "lost_camp",
    "label": "Leer las marcas como en las montañas antárticas",
    "requires": {
      "flag": "tunnelCollapsed"
    },
    "stat": "percepcion",
    "dc": 12,
    "bonus": 1,
    "successText": "La experiencia del hielo te enseña a leer desgaste no humano. Las marcas indican una ruta de servicio, no un templo.",
    "next": "revelation_nameless",
    "effects": {
      "clues": 2
    }
  },
  {
    "caseId": "zann",
    "stageId": "porter_room",
    "label": "Anclarte con la disciplina aprendida en Kadath",
    "requires": {
      "item": "Ancla de plata"
    },
    "stat": "temple",
    "dc": 11,
    "bonus": 2,
    "successText": "El ancla vibra cuando la música intenta desplazar la calle. La usas para fijar una ruta de vuelta.",
    "next": "revelation_zann",
    "effects": {
      "clues": 1,
      "dread": -1
    }
  },
  {
    "caseId": "pickman",
    "stageId": "dealer_archive",
    "label": "Comparar las fotografías con las pruebas de Innsmouth",
    "requires": {
      "item": "Registro de pactos"
    },
    "stat": "razon",
    "dc": 12,
    "bonus": 1,
    "successText": "Los rasgos de varios modelos coinciden con familias costeras. Los túneles conectan historias que creías separadas.",
    "next": "revelation_pickman",
    "effects": {
      "clues": 2,
      "insight": 1
    }
  },
  {
    "caseId": "shunned_house",
    "stageId": "death_registry",
    "label": "Aplicar el protocolo de la granja del Color",
    "requires": {
      "flag": "fieldBurned"
    },
    "stat": "razon",
    "dc": 11,
    "bonus": 1,
    "successText": "Tratas la casa como un foco de contaminación, no como una posesión. El patrón de propagación aparece de inmediato.",
    "next": "revelation_shunned",
    "effects": {
      "clues": 2
    }
  },
  {
    "caseId": "festival",
    "stageId": "harbour_inn",
    "label": "Reconocer un sello visto en la ciudad sin nombre",
    "requires": {
      "flag": "namelessDescent"
    },
    "stat": "ocultismo",
    "dc": 12,
    "bonus": 1,
    "successText": "El sello no es de Kingsport. Es una adaptación humana de un emblema mucho más antiguo usado para señalar rutas subterráneas.",
    "next": "revelation_festival",
    "effects": {
      "clues": 2,
      "insight": 1
    }
  },
  {
    "caseId": "ward",
    "stageId": "sealed_ward",
    "label": "Contrastar las sales con la fórmula de West",
    "requires": {
      "item": "Fórmula incompleta"
    },
    "stat": "razon",
    "dc": 13,
    "bonus": 2,
    "successText": "La química de West y las sales de Ward comparten una premisa: la identidad puede tratarse como materia reversible.",
    "next": "revelation_ward",
    "effects": {
      "clues": 3
    }
  },
  {
    "caseId": "whisperer",
    "stageId": "antenna_wood",
    "label": "Comparar la señal con las frecuencias antárticas",
    "requires": {
      "item": "Mapa sonoro"
    },
    "stat": "percepcion",
    "dc": 13,
    "bonus": 1,
    "successText": "El patrón de pulsos coincide con ecos registrados bajo las montañas. No es la primera estación no humana que encuentras.",
    "next": "revelation_whisperer",
    "effects": {
      "clues": 2,
      "insight": 1
    }
  },
  {
    "caseId": "witch_house",
    "stageId": "math_archive",
    "label": "Usar la puerta falsa de Kadath como modelo topológico",
    "requires": {
      "item": "Puerta falsa"
    },
    "stat": "razon",
    "dc": 14,
    "bonus": 2,
    "successText": "La puerta onírica y la geometría de la bruja describen el mismo principio: lugares contiguos sin distancia intermedia.",
    "next": "revelation_witch",
    "effects": {
      "clues": 2,
      "insight": 1
    }
  },
  {
    "caseId": "time_shadow",
    "stageId": "mineral_museum",
    "label": "Comparar la cronología con el archivo de Ward",
    "requires": {
      "flag": "curwenArchive"
    },
    "stat": "razon",
    "dc": 14,
    "bonus": 1,
    "successText": "Ward manipulaba generaciones; aquí alguien manipula eras. La estructura documental es inquietantemente parecida.",
    "next": "revelation_time",
    "effects": {
      "clues": 2,
      "insight": 1
    }
  }
];
