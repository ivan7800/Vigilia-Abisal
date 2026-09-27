'use strict';

/**
 * Vigilia Abisal · Director's Cut v4.1.0
 * Capa no destructiva sobre la Edición Definitiva v4:
 * - 15 consecuencias retardadas ligadas al desenlace de expedientes anteriores
 * - 7 documentos/acontecimientos imposibles de campaña
 * - tratamiento visual de expediente y evidencia
 * - señales de audio procedurales por escena, sin recursos externos
 */

const DC_VERSION = '4.1.0';

const DC_DELAYED_CONSEQUENCES = [
  {
    id: 'carter-whisperer', source: 'carter', target: 'whisperer',
    title: 'La respiración vuelve por la radio',
    truth: 'El patrón recuperado bajo la losa coincide con las pausas de la señal. No es una voz: es el mismo método de imitación usando otro medio.',
    survive: 'La radio reproduce durante un segundo el ritmo que juraste olvidar en la necrópolis. No aporta una respuesta, pero confirma que algo te ha seguido.',
    scar: 'Antes de que el aparato se encienda, oyes tu propia respiración saliendo del altavoz. Esta vez sabes que no es la tuya.',
    truthEffects: { clues: 1 }, surviveEffects: { dread: 1 }, scarEffects: { sanity: -1, dread: 1 }
  },
  {
    id: 'west-ward', source: 'west', target: 'ward',
    title: 'Dos laboratorios, una misma blasfemia',
    truth: 'Una proporción de las notas de West encaja con las sales de Ward. Ambos trataban la identidad como una propiedad química reversible.',
    survive: 'El olor del laboratorio de Ward te devuelve al incendio de West. Reconoces la clase de error antes de entender la fórmula.',
    scar: 'Uno de los frascos pulsa seis veces cuando lo acercas. Tu mano empieza a contar antes que tú.',
    truthEffects: { insight: 1 }, surviveEffects: { clues: 1 }, scarEffects: { sanity: -1, dread: 1 }
  },
  {
    id: 'cthulhu-dagon', source: 'cthulhu', target: 'dagon',
    title: 'La coordenada bajo la marea',
    truth: 'Las mareas del puerto dibujan durante minutos la misma geometría que aparecía en las coordenadas oceánicas del expediente Cthulhu.',
    survive: 'El puerto parece ordinario hasta que todas las cuerdas de los barcos se tensan hacia el mismo punto de mar vacío.',
    scar: 'El agua no te da miedo por su profundidad, sino porque reconoces la dirección desde la que está mirando.',
    truthEffects: { clues: 1, dread: 1 }, surviveEffects: { dread: 1 }, scarEffects: { sanity: -1, dread: 1 }
  },
  {
    id: 'colour-mountains', source: 'colour', target: 'mountains',
    title: 'Un color enterrado en el hielo',
    truth: 'Un brillo atrapado bajo una capa de hielo reproduce el espectro imposible de la granja. La anomalía no cayó una sola vez.',
    survive: 'La nieve devuelve un tono que tus ojos recuerdan aunque tus notas no lo describan.',
    scar: 'Durante un instante el blanco deja de ser un color y se convierte en un sabor metálico.',
    truthEffects: { clues: 1, insight: 1 }, surviveEffects: { clues: 1 }, scarEffects: { sanity: -1 }
  },
  {
    id: 'dunwich-tomb', source: 'dunwich', target: 'tomb',
    title: 'El linaje que deja huecos',
    truth: 'El árbol familiar repite una omisión que ya viste entre los Whateley: generaciones enteras construidas alrededor de alguien que no debía figurar en el registro.',
    survive: 'Un apellido tachado aparece también en una copia del archivo de Dunwich. Nadie admite haber movido los documentos.',
    scar: 'Al leer la genealogía oyes un peso enorme pasando entre árboles que aquí no existen.',
    truthEffects: { clues: 1 }, surviveEffects: { dread: 1 }, scarEffects: { sanity: -1, dread: 1 }
  },
  {
    id: 'innsmouth-pickman', source: 'innsmouth', target: 'pickman',
    title: 'El modelo tiene familia',
    truth: 'Dos rostros de los negativos de Pickman coinciden con apellidos del registro de pactos de Innsmouth. El pintor no inventaba sus modelos.',
    survive: 'La mandíbula de una figura pintada te recuerda demasiado a alguien del autobús que abandonó Innsmouth.',
    scar: 'El reflejo del cristal que protege el cuadro parpadea una fracción después que tú.',
    truthEffects: { clues: 1 }, surviveEffects: { dread: 1 }, scarEffects: { sanity: -1 }
  },
  {
    id: 'mountains-nameless', source: 'mountains', target: 'nameless_city',
    title: 'Arquitectura anterior al clima',
    truth: 'El desgaste de la ciudad sin nombre coincide con las superficies antárticas: no es erosión natural, sino mantenimiento de una arquitectura no humana.',
    survive: 'Reconoces en la piedra una curva que el hielo ya te enseñó a no seguir con la mirada.',
    scar: 'El aire cálido del desierto te parece frío durante varios segundos. Algo en tu cuerpo cree que sigue bajo aquellas montañas.',
    truthEffects: { clues: 1 }, surviveEffects: { clues: 1 }, scarEffects: { dread: 1 }
  },
  {
    id: 'kadath-zann', source: 'kadath', target: 'zann',
    title: 'La calle existe cuando se escucha',
    truth: 'La música de Zann dibuja una ruta que aparece también en tu mapa onírico de Kadath. Algunas ciudades se alcanzan con pasos; otras, con intervalos.',
    survive: 'Un compás te devuelve durante un segundo la textura de una calle que solo recuerdas dormido.',
    scar: 'La primera nota abre en tu memoria una puerta que juraste haber cerrado al despertar.',
    truthEffects: { insight: 1, dread: -1 }, surviveEffects: { clues: 1 }, scarEffects: { sanity: -1 }
  },
  {
    id: 'dagon-festival', source: 'dagon', target: 'festival',
    title: 'La procesión conoce la marea',
    truth: 'El horario del Festival coincide con una bajamar imposible registrada en el puerto. La procesión no celebra el invierno: espera una apertura.',
    survive: 'Bajo la nieve encuentras sal húmeda. Kingsport está demasiado lejos del agua para que tenga sentido.',
    scar: 'Una máscara ceremonial huele exactamente como el monolito cuando la marea retrocedió.',
    truthEffects: { clues: 1 }, surviveEffects: { dread: 1 }, scarEffects: { sanity: -1, dread: 1 }
  },
  {
    id: 'tomb-time', source: 'tomb', target: 'time_shadow',
    title: 'Tu nombre vuelve a quedar en blanco',
    truth: 'La tablilla temporal reserva un espacio donde debería estar tu fecha. Es el mismo vacío que encontraste en las placas del mausoleo.',
    survive: 'La cronología del profesor contiene un apellido que ya viste entre los muertos. Esta vez aparece millones de años antes.',
    scar: 'Durante un instante recuerdas tu propia fecha de muerte. Al intentar escribirla, solo sale una línea en blanco.',
    truthEffects: { insight: 1 }, surviveEffects: { clues: 1 }, scarEffects: { sanity: -1 }
  },
  {
    id: 'nyarlathotep-witch', source: 'nyarlathotep', target: 'witch_house',
    title: 'La geometría también sabe actuar',
    truth: 'Una ecuación proyecta sobre la pared la misma ciudad sin cielo vista detrás del escenario. El espectáculo y la geometría son dos interfaces del mismo lugar.',
    survive: 'Una sombra aplaude desde el ángulo imposible antes de que cruces la habitación.',
    scar: 'Las líneas del cuaderno parecen reír medio segundo antes de que entiendas la fórmula.',
    truthEffects: { clues: 1, insight: 1 }, surviveEffects: { dread: 1 }, scarEffects: { sanity: -1 }
  },
  {
    id: 'nameless-festival', source: 'nameless_city', target: 'festival',
    title: 'El sello no nació en Kingsport',
    truth: 'El emblema de la procesión es una copia humanizada de una marca hallada en la ciudad sin nombre. No representa un dios: representa una ruta.',
    survive: 'La máscara más antigua tiene arena roja atrapada en una grieta interior.',
    scar: 'Una puerta demasiado baja bajo la iglesia despierta en tu cuerpo una postura que nunca aprendiste.',
    truthEffects: { clues: 1 }, surviveEffects: { clues: 1 }, scarEffects: { dread: 1 }
  },
  {
    id: 'zann-whisperer', source: 'zann', target: 'whisperer',
    title: 'Una frecuencia que puede tocarse',
    truth: 'La señal del fonógrafo contiene el mismo intervalo que abría el vacío tras la ventana de Zann. Música y transmisión comparten destino.',
    survive: 'Entre el ruido de radio aparece un compás que no debería caber en una voz.',
    scar: 'El altavoz emite una nota y, durante un instante, buscas una ventana antes de recordar dónde estás.',
    truthEffects: { clues: 1 }, surviveEffects: { dread: 1 }, scarEffects: { sanity: -1 }
  },
  {
    id: 'pickman-shunned', source: 'pickman', target: 'shunned_house',
    title: 'El sótano ya estaba en un cuadro',
    truth: 'Una fotografía de Pickman muestra la misma pared húmeda décadas antes. En el fondo se distingue una raíz que todavía no había atravesado la casa.',
    survive: 'La distribución del sótano te resulta familiar de una forma que ningún plano explica.',
    scar: 'La humedad forma por un segundo la pose exacta de uno de los modelos de Pickman.',
    truthEffects: { clues: 1 }, surviveEffects: { dread: 1 }, scarEffects: { sanity: -1 }
  },
  {
    id: 'shunned-ward', source: 'shunned_house', target: 'ward',
    title: 'La materia conserva nombres',
    truth: 'El residuo de la casa y las sales de Ward responden al mismo principio: la materia puede retener una identidad y esperar un cuerpo.',
    survive: 'Un recipiente de sales deja una mancha amarilla idéntica a la humedad de la casa demolida.',
    scar: 'El cristal se empaña desde dentro y dibuja un rostro que ya viste aparecer en una pared.',
    truthEffects: { clues: 1 }, surviveEffects: { dread: 1 }, scarEffects: { sanity: -1 }
  }
];

const DC_MOMENTS = [
  {
    id: 'second-copy',
    when: () => (state.campaign?.vigilia || 1) > 1 && dcCompletedCount() >= 1,
    badge: 'COPIA II · NO DESTRUIR',
    title: () => `Segunda copia · ${state.player?.name || 'Investigador'}`,
    intro: 'La carpeta tiene marcas de uso anteriores a esta campaña, pero reconoces tu propia letra en los márgenes.',
    documentTitle: 'DOCUMENTO DUPLICADO',
    text: () => `La primera página enumera decisiones que todavía no has tomado en esta Vigilia. Una está tachada con tu letra. Debajo alguien añadió: «esta vez no».`,
    effects: { insight: 1 }
  },
  {
    id: 'file-zero',
    when: () => dcCompletedCount() >= 3,
    badge: 'EXPEDIENTE 0 · NO INDEXADO',
    title: () => `Expediente 0 · ${state.player?.name || 'Sujeto'}`,
    intro: 'No recuerdas haber creado esta carpeta. El cartón está envejecido como si llevara décadas en el archivo.',
    documentTitle: 'FICHA DE SUJETO',
    text: () => `Nombre: ${state.player?.name || 'ilegible'}\nProfesión: ${state.player?.archetypeName || 'sin clasificar'}\nEstado: OBSERVACIÓN EN CURSO\n\nLa fecha de apertura ha sido raspada. Bajo el papel queda una palabra: «Vigilia».`,
    effects: { dread: 1 }
  },
  {
    id: 'first-convergence',
    when: () => campaignStatus().sigilCount >= 1,
    badge: 'ÍNDICE · DESPLAZAMIENTO DETECTADO',
    title: () => 'Documento sin carpeta · Primer cruce',
    intro: 'Dos expedientes que archivaste por separado aparecen unidos por un hilo que nadie ha colocado.',
    documentTitle: 'EL ÍNDICE SE HA MOVIDO',
    text: () => `Al separar las carpetas, el hilo cae al suelo formando un símbolo. No es una letra, pero el Archivo Ω lo reconocerá más adelante.`,
    effects: { insight: 1 }
  },
  {
    id: 'negative-seven',
    when: () => dcCompletedCount() >= 7,
    badge: 'FOTOGRAFÍA 7-B · REVERSO',
    title: () => 'Negativo sin procedencia',
    intro: 'La fotografía muestra el archivo desde el techo. Tú estás sentado ante una mesa que aún no poseías cuando fue tomada.',
    documentTitle: 'EN EL REVERSO HAY TU NOMBRE',
    text: () => `La tinta es reciente. La fotografía no.\n\nEn una esquina aparece una segunda figura mirando directamente hacia el objetivo. Al volver la foto para comprobarlo, la figura ha cambiado de silla.`,
    effects: { sanity: -1, insight: 1 }
  },
  {
    id: 'expediente-xxi',
    when: () => dcCompletedCount() >= 10,
    badge: 'EXPEDIENTE XXI · ACCESO DENEGADO',
    title: () => 'El investigador',
    intro: 'Durante unos segundos aparece un expediente posterior al XX. El título no describe un lugar ni una criatura.',
    documentTitle: 'EXPEDIENTE XXI',
    text: () => `Objeto de estudio: ${state.player?.name || 'SUJETO'}\nMétodo: exposición iterativa a anomalías correlacionadas.\nResultado: pendiente.\n\nCuando vuelves al listado, el expediente no existe.`,
    effects: { dread: 1 }
  },
  {
    id: 'door-no-address',
    when: () => {
      const status = campaignStatus();
      return status.completed >= 12 && status.sigilCount >= 4;
    },
    badge: 'DIRECCIÓN · [VACÍO]',
    title: () => 'Una puerta sin dirección',
    intro: 'El índice añade una localización que no pertenece a ninguna ciudad. Solo contiene un símbolo: Ω.',
    documentTitle: 'CUATRO CONVERGENCIAS SON UNA LLAVE',
    text: () => `Las carpetas no señalan un lugar: señalan una relación. Cuando superpones los cuatro patrones, queda un hueco con forma de puerta.\n\nNo estaba cerrada. Estaba esperando que supieras verla.`,
    effects: { insight: 1 }
  },
  {
    id: 'complete-index',
    when: () => dcCompletedCount() >= 20 && campaignStatus().sigilCount >= 5,
    badge: 'ÍNDICE COMPLETO · ERROR',
    title: () => 'Falta una persona',
    intro: 'Los veinte expedientes y las cinco convergencias encajan. El índice, sin embargo, insiste en que falta una entrada.',
    documentTitle: 'EL ARCHIVO NO ESTÁ INCOMPLETO',
    text: () => `Repasas veinte títulos. Están todos. Repasas cinco convergencias. También.\n\nEntonces comprendes el error: la entrada que falta no es un expediente. Es el nombre de quien los ha correlacionado.`,
    effects: { insight: 1 }
  }
];

const DC_THEME_FREQUENCIES = {
  sea: 73.42,
  dream: 146.83,
  flesh: 61.74,
  grave: 55,
  ice: 164.81,
  cosmic: 82.41,
  theatre: 123.47,
  desert: 92.5,
  music: 196,
  tunnel: 65.41,
  ritual: 110,
  alchemy: 98,
  signal: 155.56,
  geometry: 138.59,
  time: 130.81,
  abyss: 46.25,
  rural: 69.3
};

let DC_lastSceneKey = '';

function dcCompletedCount() {
  return Object.keys(state.completedCases || {}).filter((id) => id !== 'abyss').length;
}

function dcFlag(key) {
  return Boolean(state.player?.flags?.[`dc_${key}`]);
}

function dcSetFlag(key) {
  if (!state.player) return;
  state.player.flags = state.player.flags || {};
  state.player.flags[`dc_${key}`] = true;
}

function dcEndingClass(result) {
  const ending = result?.ending;
  if (ending === 'END_TRUTH' || ending === 'END_ABYSS_TRUTH') return 'truth';
  if (ending === 'END_SURVIVE' || ending === 'END_ABYSS_SEAL') return 'survive';
  return 'scar';
}

function dcMergeEffects(target, effects) {
  if (!effects) return target;
  for (const [key, value] of Object.entries(effects)) {
    if (typeof value !== 'number') continue;
    target[key] = (target[key] || 0) + value;
  }
  return target;
}

function dcCapCombinedEffects(effects) {
  const capped = { ...effects };
  if (typeof capped.clues === 'number') capped.clues = clamp(capped.clues, -2, 2);
  if (typeof capped.insight === 'number') capped.insight = clamp(capped.insight, -1, 1);
  if (typeof capped.sanity === 'number') capped.sanity = clamp(capped.sanity, -2, 2);
  if (typeof capped.health === 'number') capped.health = clamp(capped.health, -2, 2);
  if (typeof capped.dread === 'number') capped.dread = clamp(capped.dread, -2, 2);
  return capped;
}

function dcCue(kind = 'scene', theme = 'abyss') {
  if (!audioContext || audioContext.state === 'closed') return;
  try {
    const now = audioContext.currentTime;
    const base = DC_THEME_FREQUENCIES[theme] || 82.41;
    const frequencies = kind === 'document' ? [base, base * 1.5] : [base];
    frequencies.forEach((frequency, index) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = kind === 'document' && index === 1 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(frequency, now);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(kind === 'document' ? 0.028 : 0.014, now + 0.018 + index * 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + (kind === 'document' ? 0.42 : 0.18) + index * 0.05);
      osc.connect(gain).connect(audioContext.destination);
      osc.start(now + index * 0.035);
      osc.stop(now + (kind === 'document' ? 0.48 : 0.22) + index * 0.06);
    });
  } catch (error) {
    console.warn('Director cue no disponible:', error);
  }
}

function dcShowDocument(title, text, theme = 'abyss') {
  showModal(title, text);
  const modal = $('#modal');
  modal?.classList.add('dc-document-modal');
  dcCue('document', theme);
}

function dcRefreshSceneProgress() {
  const gameCase = findCase(state.currentCaseId);
  const stage = findStage(gameCase, state.currentStageId);
  const progress = $('#sceneProgress');
  if (!gameCase || !stage || !progress) return;
  const index = Math.max(0, gameCase.stages.findIndex((item) => item.id === stage.id));
  progress.textContent = `Escena ${index + 1}/${gameCase.stages.length} · ${state.caseClues || 0} pistas de caso`;
  if ((state.campaign?.vigilia || 1) > 1) progress.textContent += ` · Vigilia ${v4Roman(state.campaign.vigilia)}`;
}

function dcApplyDelayedConsequences() {
  if (!state.player || state.currentStageId !== 'start') return;
  const target = state.currentCaseId;
  const hits = DC_DELAYED_CONSEQUENCES.filter((spec) => {
    return spec.target === target && state.completedCases?.[spec.source] && !dcFlag(`consequence_${spec.id}`);
  });
  if (!hits.length) return;

  const combined = {};
  const paragraphs = [];
  hits.forEach((spec) => {
    const result = state.completedCases[spec.source];
    const tone = dcEndingClass(result);
    const text = spec[tone] || spec.survive;
    const effects = spec[`${tone}Effects`] || spec.surviveEffects || {};
    dcMergeEffects(combined, effects);
    dcSetFlag(`consequence_${spec.id}`);
    paragraphs.push(`◆ ${spec.title}\n${text}`);
    addJournal(`Consecuencia retardada: ${spec.title}. ${text}`);
  });

  const effects = dcCapCombinedEffects(combined);
  applyEffects(effects);
  save();
  renderSheet();
  dcRefreshSceneProgress();

  const sourceNames = hits.map((spec) => findCase(spec.source)?.title?.replace(/^Expediente\s+[IVXLCDM]+\s+·\s+/, '') || spec.source);
  dcShowDocument(
    hits.length > 1 ? 'El pasado llega en dos carpetas' : 'Una decisión anterior vuelve',
    `${paragraphs.join('\n\n')}\n\nOrigen: ${sourceNames.join(' · ')}.`,
    findCase(target)?.theme || 'abyss'
  );
}

function dcEvidenceCode(gameCase, stage) {
  const caseIndex = Math.max(0, DATA.cases.filter((item) => !item.isMeta).findIndex((item) => item.id === gameCase?.id));
  const stageIndex = Math.max(0, gameCase?.stages?.findIndex((item) => item.id === stage?.id));
  const caseCode = gameCase?.isMeta ? 'Ω' : String(caseIndex + 1).padStart(2, '0');
  return `VA-${caseCode}/${String(stageIndex + 1).padStart(2, '0')}`;
}

function dcRenderEvidenceStrip() {
  const gameCase = findCase(state.currentCaseId);
  const stage = findStage(gameCase, state.currentStageId);
  const card = document.querySelector('.story-card');
  if (!gameCase || !stage || !card) return;

  let strip = card.querySelector('.dc-evidence-strip');
  if (!strip) {
    strip = document.createElement('div');
    strip.className = 'dc-evidence-strip';
    card.prepend(strip);
  }
  clearNode(strip);

  const left = document.createElement('span');
  left.textContent = dcEvidenceCode(gameCase, stage);
  const center = document.createElement('span');
  center.textContent = `COPIA ${v4Roman(state.campaign?.vigilia || 1)}`;
  const right = document.createElement('span');
  right.textContent = state.player?.sanity <= state.player?.maxSanity * 0.28 ? 'LECTURA NO FIABLE' : 'EVIDENCIA ACTIVA';
  strip.append(left, center, right);
}

function dcSceneArrivalCue() {
  const gameCase = findCase(state.currentCaseId);
  const stage = findStage(gameCase, state.currentStageId);
  if (!gameCase || !stage) return;
  const key = `${gameCase.id}:${stage.id}`;
  if (key === DC_lastSceneKey) return;
  DC_lastSceneKey = key;

  const card = document.querySelector('.story-card');
  if (card) {
    card.classList.remove('dc-scene-arrival');
    void card.offsetWidth;
    card.classList.add('dc-scene-arrival');
    window.setTimeout(() => card.classList.remove('dc-scene-arrival'), 460);
  }
  dcCue('scene', gameCase.theme || 'abyss');
}

function dcNextMoment() {
  return DC_MOMENTS.find((moment) => !dcFlag(`moment_${moment.id}`) && moment.when());
}

function dcInsertImpossibleDocument() {
  if (!state.player) return;
  const list = $('#caseList');
  if (!list || list.querySelector('.dc-phantom-card')) return;
  const moment = dcNextMoment();
  if (!moment) return;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'case-card dc-phantom-card';
  const meta = document.createElement('div');
  meta.className = 'case-meta';
  const badge = document.createElement('span');
  badge.textContent = moment.badge;
  const status = document.createElement('strong');
  status.textContent = 'NO DEBERÍA ESTAR AQUÍ';
  meta.append(badge, status);
  const h3 = document.createElement('h3');
  h3.textContent = typeof moment.title === 'function' ? moment.title() : moment.title;
  const p = document.createElement('p');
  p.textContent = moment.intro;
  const pills = document.createElement('div');
  pills.className = 'stat-pills';
  const pill = document.createElement('span');
  pill.textContent = 'Documento imposible';
  pills.append(pill);
  button.append(meta, h3, p, pills);

  button.addEventListener('click', () => {
    dcSetFlag(`moment_${moment.id}`);
    if (moment.effects) applyEffects(moment.effects);
    const text = typeof moment.text === 'function' ? moment.text() : moment.text;
    addJournal(`Documento imposible: ${moment.documentTitle}. ${String(text).replace(/\n+/g, ' ')}`);
    save();
    dcShowDocument(moment.documentTitle, text, 'abyss');
    renderSheet();
    renderCases();
  });

  list.prepend(button);
}

/* Asegura que cualquier modal normal retire el tratamiento documental anterior. */
const DC_prevShowModal = showModal;
showModal = function showModalDirectorCut(title, text) {
  const modal = $('#modal');
  modal?.classList.remove('dc-document-modal');
  DC_prevShowModal(title, text);
};

const DC_prevRenderStage = renderStage;
renderStage = function renderStageDirectorCut() {
  DC_prevRenderStage();
  dcRenderEvidenceStrip();
  dcSceneArrivalCue();
  dcApplyDelayedConsequences();
};

const DC_prevRenderCases = renderCases;
renderCases = function renderCasesDirectorCut() {
  DC_prevRenderCases();
  dcInsertImpossibleDocument();
};

function dcBootPatch() {
  document.documentElement.dataset.directorsCutVersion = DC_VERSION;
  const eyebrow = document.querySelector('.brand .eyebrow');
  if (eyebrow) eyebrow.textContent = `RPG narrativo offline · Director's Cut v${DC_VERSION}`;
}

dcBootPatch();

window.addEventListener('DOMContentLoaded', () => {
  dcBootPatch();
  if (state.player) {
    dcInsertImpossibleDocument();
    if (state.currentCaseId && state.currentStageId) {
      dcRenderEvidenceStrip();
      dcSceneArrivalCue();
    }
  }
});
