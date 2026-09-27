'use strict';

/**
 * Vigilia Abisal · Edición Definitiva v4
 * Capa compatible con Campaña Ω v3:
 * - talentos profesionales contextuales
 * - cicatrices con doble filo
 * - Nueva Vigilia+
 * - ecos de memoria en NG+
 * - mapa visual de convergencias
 * - alucinaciones de baja cordura
 * - presentación de finales mejorada
 */

const V4_VERSION = '4.0.0';

const V4_PROFESSIONS = {
  antiquarian: {
    name: 'Memoria de archivo',
    desc: '+1 a Razón u Ocultismo en horror funerario, ritual o alquímico.',
    test(stat, gameCase) {
      return ['razon', 'ocultismo'].includes(stat) && ['grave', 'ritual', 'alchemy'].includes(gameCase?.theme);
    }
  },
  detective: {
    name: 'Ojo entrenado',
    desc: '+1 a Percepción mientras el expediente tenga 2 pistas o menos.',
    test(stat) {
      return stat === 'percepcion' && (state.caseClues || 0) <= 2;
    }
  },
  doctor: {
    name: 'Frialdad clínica',
    desc: '+1 a Razón o Temple cuando has perdido Salud.',
    test(stat) {
      return ['razon', 'temple'].includes(stat) && state.player?.health < state.player?.maxHealth;
    }
  },
  journalist: {
    name: 'Fuente confidencial',
    desc: '+1 a Presencia cuando ya has reunido al menos una pista del caso.',
    test(stat) {
      return stat === 'presencia' && (state.caseClues || 0) >= 1;
    }
  },
  dreamer: {
    name: 'Ancla onírica',
    desc: '+1 a Temple u Ocultismo en Sueño y Geometría.',
    test(stat, gameCase) {
      return ['temple', 'ocultismo'].includes(stat) && ['dream', 'geometry'].includes(gameCase?.theme);
    }
  },
  smuggler: {
    name: 'Instinto de fuga',
    desc: '+1 a Movimiento con Presagio 4+ o en expedientes marinos.',
    test(stat, gameCase) {
      return stat === 'movimiento' && ((state.player?.dread || 0) >= 4 || gameCase?.theme === 'sea');
    }
  },
  linguist: {
    name: 'Lenguas que no deberían existir',
    desc: '+1 a Ocultismo en Ritual, Tiempo, Geometría o Señal.',
    test(stat, gameCase) {
      return stat === 'ocultismo' && ['ritual', 'time', 'geometry', 'signal'].includes(gameCase?.theme);
    }
  },
  geologist: {
    name: 'Lectura del estrato',
    desc: '+1 a Percepción o Razón en Hielo, Desierto y horror Cósmico.',
    test(stat, gameCase) {
      return ['percepcion', 'razon'].includes(stat) && ['ice', 'desert', 'cosmic'].includes(gameCase?.theme);
    }
  }
};

const V4_SCAR_TRAITS = {
  carter: {
    name: 'Voces prestadas',
    desc: 'Las señales falsas ya no te engañan con facilidad, pero los lugares funerarios te devuelven la voz.',
    plus: { theme: 'signal', stat: 'razon' },
    minus: { theme: 'grave', stat: 'temple' }
  },
  west: {
    name: 'Pulso ajeno',
    desc: 'Reconoces cuándo un cuerpo no debería moverse, aunque verlo hacerlo aún te descompone.',
    plus: { theme: 'flesh', stat: 'razon' },
    minus: { theme: 'flesh', stat: 'temple' }
  },
  cthulhu: {
    name: 'Talasofobia lúcida',
    desc: 'Ves mejor lo que ocurre bajo el agua, pero mantener la calma frente al mar cuesta más.',
    plus: { theme: 'sea', stat: 'percepcion' },
    minus: { theme: 'sea', stat: 'temple' }
  },
  colour: {
    name: 'Sinestesia prismática',
    desc: 'Detectas anomalías de luz antes que otros; comprenderlas, en cambio, erosiona tu lógica.',
    plus: { theme: 'cosmic', stat: 'percepcion' },
    minus: { theme: 'cosmic', stat: 'razon' }
  },
  dunwich: {
    name: 'Peso entre árboles',
    desc: 'El campo te avisa cuando algo enorme se mueve, pero los bosques cerrados te exigen demasiado Temple.',
    plus: { theme: 'rural', stat: 'percepcion' },
    minus: { theme: 'rural', stat: 'temple' }
  },
  innsmouth: {
    name: 'Segundo reflejo',
    desc: 'Detectas rasgos imposibles en otros, aunque tu propia presencia se vuelve menos convincente junto al mar.',
    plus: { theme: 'sea', stat: 'percepcion' },
    minus: { theme: 'sea', stat: 'presencia' }
  },
  mountains: {
    name: 'Frío que espera',
    desc: 'Lees estructuras ocultas en hielo y roca, pero el frío extremo reabre el miedo.',
    plus: { theme: 'ice', stat: 'razon' },
    minus: { theme: 'ice', stat: 'temple' }
  },
  kadath: {
    name: 'Desfase onírico',
    desc: 'El sueño te resulta navegable, aunque la lógica diurna pierde autoridad dentro de él.',
    plus: { theme: 'dream', stat: 'ocultismo' },
    minus: { theme: 'dream', stat: 'razon' }
  },
  dagon: {
    name: 'Profundidad inversa',
    desc: 'Comprendes mejor los ritos del mar; huir de ellos es otra cuestión.',
    plus: { theme: 'sea', stat: 'ocultismo' },
    minus: { theme: 'sea', stat: 'movimiento' }
  },
  tomb: {
    name: 'Nombre heredado',
    desc: 'Las genealogías rotas te hablan con claridad, pero presentarte ante ellas tiene un precio.',
    plus: { theme: 'grave', stat: 'razon' },
    minus: { theme: 'grave', stat: 'presencia' }
  },
  nyarlathotep: {
    name: 'Risa adelantada',
    desc: 'Las multitudes delatan su patrón antes de tiempo, aunque mezclarse con ellas resulta más difícil.',
    plus: { theme: 'theatre', stat: 'percepcion' },
    minus: { theme: 'theatre', stat: 'presencia' }
  },
  nameless_city: {
    name: 'Postura antigua',
    desc: 'Tu cuerpo aprende a moverse por arquitectura no humana; tu mente se resiste a aceptarlo.',
    plus: { theme: 'desert', stat: 'movimiento' },
    minus: { theme: 'desert', stat: 'temple' }
  },
  zann: {
    name: 'Oído del vacío',
    desc: 'Escuchas patrones ocultos en la música, incluso cuando preferirías no hacerlo.',
    plus: { theme: 'music', stat: 'percepcion' },
    minus: { theme: 'music', stat: 'temple' }
  },
  pickman: {
    name: 'Modelo real',
    desc: 'Reconoces cuándo el arte documenta algo vivo; convencer a otros se vuelve más difícil.',
    plus: { theme: 'tunnel', stat: 'percepcion' },
    minus: { theme: 'tunnel', stat: 'presencia' }
  },
  shunned_house: {
    name: 'Rostros de humedad',
    desc: 'Lees contaminación y patrones orgánicos con rapidez, pero las casas enfermas te desgastan.',
    plus: { theme: 'flesh', stat: 'razon' },
    minus: { theme: 'flesh', stat: 'temple' }
  },
  festival: {
    name: 'Procesión sin huellas',
    desc: 'Los rituales colectivos revelan su gramática; formar parte de ellos te resulta insoportable.',
    plus: { theme: 'ritual', stat: 'ocultismo' },
    minus: { theme: 'ritual', stat: 'presencia' }
  },
  ward: {
    name: 'Retratos que recuerdan',
    desc: 'Las identidades alteradas dejan huella para ti, pero los rostros antiguos te reconocen demasiado.',
    plus: { theme: 'alchemy', stat: 'razon' },
    minus: { theme: 'alchemy', stat: 'presencia' }
  },
  whisperer: {
    name: 'Voces sin cuerpo',
    desc: 'Distingues mejor señal y emisor, pero escuchar lo invisible sigue cobrándose su precio.',
    plus: { theme: 'signal', stat: 'percepcion' },
    minus: { theme: 'signal', stat: 'temple' }
  },
  witch_house: {
    name: 'Geometría residual',
    desc: 'Detectas ángulos imposibles antes de cruzarlos; tu cuerpo duda al atravesarlos.',
    plus: { theme: 'geometry', stat: 'razon' },
    minus: { theme: 'geometry', stat: 'movimiento' }
  },
  time_shadow: {
    name: 'Recuerdo futuro',
    desc: 'Las cronologías rotas te resultan familiares, pero sostenerlas emocionalmente cuesta más.',
    plus: { theme: 'time', stat: 'razon' },
    minus: { theme: 'time', stat: 'temple' }
  }
};

const V4_MEMORY_ECHOES = {
  carter: ['Recordar la voz que aún no ha llamado', 'Sabes dónde crujirá el cable antes de tocarlo.'],
  west: ['Contar seis pulsos antes de entrar', 'Tu memoria insiste en que uno de esos pulsos no pertenece a ningún vivo.'],
  cthulhu: ['Evitar la coordenada que ya soñaste', 'La carta náutica no la muestra, pero tú recuerdas exactamente dónde no mirar.'],
  colour: ['Buscar la sombra que faltará dentro de un minuto', 'La luz todavía parece normal; tu recuerdo no.'],
  dunwich: ['Escuchar la colina antes de que respire', 'El silencio contiene una cadencia que reconoces de otra Vigilia.'],
  innsmouth: ['No mirar el segundo reflejo', 'El espejo tarda en equivocarse, y esta vez tú te adelantas.'],
  mountains: ['Seguir el eco que el viento aún no ha producido', 'La montaña responde con una nota que ya habías oído en otra vida.'],
  kadath: ['Elegir la calle que no existía la primera vez', 'Tus pies recuerdan un sueño que tu mente había perdido.'],
  dagon: ['Esperar una bajamar que todavía no ha empezado', 'El puerto parece inmóvil; tú sabes qué peldaños aparecerán.'],
  tomb: ['Buscar primero la fecha que quedó en blanco', 'La piedra aún no lleva tu nombre y eso, por ahora, es una ventaja.'],
  nyarlathotep: ['Aplaudir medio segundo demasiado pronto', 'La multitud se detiene: por primera vez eres tú quien rompe el ritmo.'],
  nameless_city: ['Dejar una marca cada trece pasos', 'No recuerdas haber aprendido la regla, pero tu mano sí.'],
  zann: ['Taparte un oído antes del primer compás', 'La melodía aún no ha empezado y ya sabes qué nota no debes escuchar entera.'],
  pickman: ['Mirar primero debajo del suelo', 'El estudio parece vacío hasta que compruebas dónde terminaban las huellas la otra vez.'],
  shunned_house: ['Secar la pared antes de que forme un rostro', 'La humedad retrocede como si también te recordara.'],
  festival: ['Seguir las huellas que no están en la nieve', 'La procesión aún no ha pasado, pero el camino ya está ocupado.'],
  ward: ['Separar las sales antes de leer las etiquetas', 'Tu memoria no conserva los nombres, solo el orden correcto.'],
  whisperer: ['Desconectar la radio antes del saludo', 'La voz llega igualmente, sorprendida de encontrarte preparado.'],
  witch_house: ['Medir el ángulo con los ojos cerrados', 'La habitación cambia cuando dejas de concederle una geometría.'],
  time_shadow: ['Recordar la conversación futura que aún no has tenido', 'Una frase de dentro de décadas encaja con la inscripción presente.']
};

const V4_HALLUCINATIONS = {
  carter: ['Abrir la puerta detrás de la lápida', 'No había ninguna puerta. Solo la marca rectangular que tu mente necesitó inventar.'],
  innsmouth: ['Seguir a la mujer que te hace señas desde el agua', 'Cuando llegas al muelle no hay nadie. Tus zapatos, sin embargo, están mojados por dentro.'],
  nyarlathotep: ['Salir por la puerta iluminada de emergencia', 'La luz era parte de la proyección. Has recorrido seis metros hacia una pared.'],
  witch_house: ['Cruzar el ángulo que parece conducir al pasillo', 'No era un pasillo. Era la misma habitación vista desde un lugar que tu cuerpo no ocupa.'],
  time_shadow: ['Responder a la nota escrita con tu letra', 'La nota desaparece al tocarla. Conservas la respuesta en la mano aunque nunca llegaste a escribirla.']
};

function v4Roman(value) {
  const map = [['X',10],['IX',9],['V',5],['IV',4],['I',1]];
  let n = Math.max(1, Math.min(39, Number(value) || 1));
  let out = '';
  for (const [symbol, amount] of map) {
    while (n >= amount) { out += symbol; n -= amount; }
  }
  return out;
}

function v4CurrentCase() {
  return findCase(state.currentCaseId);
}

function v4ScarEntries() {
  const scars = state.campaign?.scars || [];
  return DATA.cases
    .filter((gameCase) => scars.includes(gameCase.title) && V4_SCAR_TRAITS[gameCase.id])
    .map((gameCase) => ({ caseId: gameCase.id, caseTitle: gameCase.title, ...V4_SCAR_TRAITS[gameCase.id] }));
}

function v4ProfessionModifier(stat, gameCase) {
  const talent = V4_PROFESSIONS[state.player?.archetypeId];
  if (!talent || !talent.test(stat, gameCase)) return { value: 0, label: '' };
  return { value: 1, label: talent.name };
}

function v4ScarModifier(stat, gameCase) {
  let total = 0;
  const labels = [];
  for (const scar of v4ScarEntries()) {
    if (scar.plus?.theme === gameCase?.theme && scar.plus?.stat === stat) {
      total += 1;
      labels.push(`${scar.name} +1`);
    }
    if (scar.minus?.theme === gameCase?.theme && scar.minus?.stat === stat) {
      total -= 1;
      labels.push(`${scar.name} -1`);
    }
  }
  return { value: clamp(total, -2, 2), label: labels.join(', ') };
}

/* ---------- Persistencia V4 compatible ---------- */

const V4_prevDefaultCampaignState = defaultCampaignState;
defaultCampaignState = function defaultCampaignStateV4() {
  return {
    ...V4_prevDefaultCampaignState(),
    vigilia: 1,
    memoryShards: 0,
    legacyRelic: null
  };
};

const V4_prevSanitizeCampaign = sanitizeCampaign;
sanitizeCampaign = function sanitizeCampaignV4(campaign, completedCases) {
  const clean = V4_prevSanitizeCampaign(campaign, completedCases);
  clean.vigilia = safeNumber(campaign?.vigilia, 1, 1, 39);
  clean.memoryShards = safeNumber(campaign?.memoryShards, 0, 0, 9);
  clean.legacyRelic = safeString(campaign?.legacyRelic, '', 70) || null;
  return clean;
};

const V4_prevRequirementStatus = requirementStatus;
requirementStatus = function requirementStatusV4(choice) {
  const base = V4_prevRequirementStatus(choice);
  if (!base.ok) return base;
  const requiredVigilia = choice?.requires?.campaign?.vigilia;
  if (requiredVigilia && (state.campaign?.vigilia || 1) < requiredVigilia) {
    return { ok: false, reason: `Nueva Vigilia ${v4Roman(requiredVigilia)}` };
  }
  return base;
};

/* ---------- Tiradas: profesión + cicatriz contextual ---------- */

const V4_prevRollDice = rollDice;
rollDice = function rollDiceV4(stat, dc, choice = null) {
  const roll = V4_prevRollDice(stat, dc, choice);
  const gameCase = v4CurrentCase();

  // Sustituye el antiguo bonus genérico por cicatrices de doble filo.
  if (roll.scarBonus) {
    roll.total -= roll.scarBonus;
    roll.scarBonus = 0;
  }

  const profession = v4ProfessionModifier(stat, gameCase);
  const scar = v4ScarModifier(stat, gameCase);

  roll.professionBonus = profession.value;
  roll.professionLabel = profession.label;
  roll.scarTraitModifier = scar.value;
  roll.scarTraitLabel = scar.label;

  roll.total += profession.value + scar.value;
  roll.success = roll.critical || (!roll.fumble && roll.total >= roll.effectiveDc);
  return roll;
};

const V4_prevGetPerkText = getPerkText;
getPerkText = function getPerkTextV4() {
  const level = state.campaign?.level || 1;
  if (level < 2) return V4_prevGetPerkText();
  if (level < 3) return 'Cicatrices vivas: cada trauma puede ayudarte o perjudicarte según la escena.';
  if (level < 5) return 'Método de campo: +1 permanente y cicatrices contextuales de doble filo.';
  return 'Vigilia experta: +2 permanente y cicatrices contextuales de doble filo.';
};

const V4_prevRenderRoll = renderRoll;
renderRoll = function renderRollV4(text, roll) {
  if (!roll) {
    V4_prevRenderRoll(text, roll);
    return;
  }
  const box = $('#rollBox');
  box.classList.remove('success', 'fail');
  box.classList.add(roll.success ? 'success' : 'fail');
  const critical = roll.critical ? ' · éxito crítico' : roll.fumble ? ' · pifia' : '';
  const parts = [];
  if (roll.veteranBonus) parts.push(`veteranía +${roll.veteranBonus}`);
  if (roll.professionBonus) parts.push(`${roll.professionLabel} +${roll.professionBonus}`);
  if (roll.scarTraitModifier) parts.push(`${roll.scarTraitLabel}`);
  if (roll.choiceBonus) parts.push(`vínculo +${roll.choiceBonus}`);
  if (roll.dreadPenalty) parts.push(`Presagio -${roll.dreadPenalty}`);
  const pressure = roll.casePressure ? ` · presión ${roll.casePressure > 0 ? '+' : ''}${roll.casePressure}` : '';
  const modifiers = parts.length ? ` · ${parts.join(' · ')}` : '';
  box.textContent = `${roll.success ? 'ÉXITO' : 'FALLO'}${critical}: d12 ${roll.d12} + d6 ${roll.d6} + ${statLabel(roll.stat)} ${roll.statValue}${modifiers} = ${roll.total} contra ${roll.effectiveDc}${pressure}. ${text}`;
};

/* ---------- Nueva Vigilia+ ---------- */

function v4InstallMemoryChoices() {
  if ((state.campaign?.vigilia || 1) < 2) return;
  DATA.cases.filter((gameCase) => !gameCase.isMeta).forEach((gameCase) => {
    const start = gameCase.stages?.find((stage) => stage.id === 'start');
    if (!start || start.choices.some((choice) => choice.v4MemoryEcho)) return;
    const echo = V4_MEMORY_ECHOES[gameCase.id];
    if (!echo) return;
    const successNext = start.choices?.[0]?.success?.next || start.choices?.[0]?.fail?.next || 'trail';
    const failNext = start.choices?.[0]?.fail?.next || successNext;
    start.choices.push({
      v4MemoryEcho: true,
      label: echo[0],
      stat: 'temple',
      dc: Math.max(10, Number(gameCase.difficulty || 12)),
      bonus: 1,
      requires: { campaign: { vigilia: 2 } },
      success: {
        text: `${echo[1]} No es una pista nueva: es una memoria que ha sobrevivido donde no debía.`,
        next: successNext,
        effects: { clues: 1, insight: 1, dread: -1, flag: `memory_${gameCase.id}` }
      },
      fail: {
        text: `Intentas usar un recuerdo de otra Vigilia y descubres que no coincide del todo con este mundo. La diferencia te observa de vuelta.`,
        next: failNext,
        effects: { sanity: -1, dread: 1 }
      }
    });
  });
}

function v4StartNewVigilia() {
  if (!state.player) return;
  const modal = $('#modal');
  if (modal?.open) modal.close();

  const previousPlayer = state.player;
  const previousCampaign = sanitizeCampaign(state.campaign, state.completedCases);
  const archetype = DATA.archetypes.find((item) => item.id === previousPlayer.archetypeId) || DATA.archetypes[0];
  const baseItems = new Set(archetype.items);
  const relicCandidates = previousPlayer.inventory.filter((item) => !baseItems.has(item));
  const legacyRelic = relicCandidates.at(-1) || previousCampaign.legacyRelic || null;

  state = defaultState();
  state.player = {
    name: previousPlayer.name,
    archetypeId: archetype.id,
    archetypeName: archetype.name,
    stats: { ...archetype.stats },
    health: archetype.health,
    maxHealth: archetype.health,
    sanity: archetype.sanity,
    maxSanity: archetype.sanity,
    dread: 0,
    clues: 0,
    inventory: [...archetype.items, ...(legacyRelic ? [legacyRelic] : [])],
    flags: {}
  };
  state.campaign = {
    ...defaultCampaignState(),
    vigilia: Math.min(39, (previousCampaign.vigilia || 1) + 1),
    memoryShards: Math.min(9, (previousCampaign.memoryShards || 0) + 1),
    legacyRelic,
    scars: [...previousCampaign.scars]
  };

  addJournal(`Nueva Vigilia ${v4Roman(state.campaign.vigilia)}. Conservas ${state.campaign.scars.length} cicatrices${legacyRelic ? ` y la reliquia «${legacyRelic}»` : ''}.`);
  v4InstallMemoryChoices();
  save();
  render();
  showModal(
    `Nueva Vigilia ${v4Roman(state.campaign.vigilia)}`,
    `El archivo vuelve a estar incompleto, pero tú no.\n\nConservas tus cicatrices${legacyRelic ? ` y «${legacyRelic}»` : ''}. Los expedientes pueden contener recuerdos de decisiones que ya no han ocurrido.`
  );
}

/* ---------- Mapa de convergencias ---------- */

function v4EnsureMapDialog() {
  let dialog = document.querySelector('#v4MapModal');
  if (dialog) return dialog;

  dialog = document.createElement('dialog');
  dialog.id = 'v4MapModal';
  dialog.className = 'v4-map-modal';
  dialog.setAttribute('aria-labelledby', 'v4MapTitle');

  const card = document.createElement('div');
  card.className = 'v4-map-card';

  const head = document.createElement('div');
  head.className = 'v4-map-head';
  const titleWrap = document.createElement('div');
  const eyebrow = document.createElement('p');
  eyebrow.className = 'eyebrow';
  eyebrow.textContent = 'Cartografía de campaña';
  const title = document.createElement('h2');
  title.id = 'v4MapTitle';
  title.textContent = 'Mapa de convergencias';
  titleWrap.append(eyebrow, title);

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'ghost';
  close.textContent = 'Cerrar';
  close.addEventListener('click', () => dialog.close());

  head.append(titleWrap, close);
  const body = document.createElement('div');
  body.id = 'v4MapBody';
  body.className = 'v4-map-body';
  card.append(head, body);
  dialog.append(card);
  document.body.append(dialog);

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  return dialog;
}

function v4ShowConvergenceMap() {
  const dialog = v4EnsureMapDialog();
  const body = dialog.querySelector('#v4MapBody');
  clearNode(body);

  const status = campaignStatus();
  const omega = document.createElement('section');
  omega.className = `v4-omega-node ${status.sigilCount >= 4 ? 'awake' : ''}`;
  const omegaSymbol = document.createElement('strong');
  omegaSymbol.textContent = 'Ω';
  const omegaText = document.createElement('span');
  omegaText.textContent = `${status.completed}/20 expedientes · ${status.sigilCount}/5 convergencias · ${status.insight} Insight`;
  omega.append(omegaSymbol, omegaText);
  body.append(omega);

  const grid = document.createElement('div');
  grid.className = 'v4-arc-grid';

  (CAMPAIGN.arcs || []).forEach((arc) => {
    const completed = arc.cases.filter((id) => state.completedCases?.[id]).length;
    const section = document.createElement('section');
    section.className = `v4-arc ${completed >= arc.need ? 'unlocked' : ''}`;

    const h3 = document.createElement('h3');
    h3.textContent = `${completed >= arc.need ? '◆' : '◇'} ${arc.name}`;
    const progress = document.createElement('p');
    progress.textContent = `${completed}/${arc.need} necesarios`;

    const list = document.createElement('ul');
    arc.cases.forEach((id) => {
      const gameCase = findCase(id);
      const li = document.createElement('li');
      const done = Boolean(state.completedCases?.[id]);
      li.className = done ? 'done' : '';
      li.textContent = `${done ? '●' : '○'} ${gameCase?.title?.replace(/^Expediente\s+[IVXLCDM]+\s+·\s+/, '') || id}`;
      list.append(li);
    });

    section.append(h3, progress, list);
    grid.append(section);
  });

  body.append(grid);
  if (typeof dialog.showModal === 'function') dialog.showModal();
}

/* ---------- UI de investigador ---------- */

function v4RenderTraitBlocks() {
  const progression = document.querySelector('.progression-block');
  if (!progression || !state.player) return;

  let traitBlock = document.querySelector('#v4TraitBlock');
  if (!traitBlock) {
    traitBlock = document.createElement('div');
    traitBlock.id = 'v4TraitBlock';
    traitBlock.className = 'mini-block v4-trait-block';
    progression.insertAdjacentElement('afterend', traitBlock);
  }
  clearNode(traitBlock);

  const talent = V4_PROFESSIONS[state.player.archetypeId];
  const h3 = document.createElement('h3');
  h3.textContent = 'Talento profesional';
  const strong = document.createElement('strong');
  strong.textContent = talent?.name || 'Experiencia de campo';
  const p = document.createElement('p');
  p.className = 'microcopy';
  p.textContent = talent?.desc || 'Sin modificador contextual.';
  traitBlock.append(h3, strong, p);

  let scarBlock = document.querySelector('#v4ScarsBlock');
  if (!scarBlock) {
    scarBlock = document.createElement('div');
    scarBlock.id = 'v4ScarsBlock';
    scarBlock.className = 'mini-block v4-scars-block';
    traitBlock.insertAdjacentElement('afterend', scarBlock);
  }
  clearNode(scarBlock);
  const sh3 = document.createElement('h3');
  sh3.textContent = 'Cicatrices vivas';
  scarBlock.append(sh3);
  const scars = v4ScarEntries();
  if (!scars.length) {
    const empty = document.createElement('p');
    empty.className = 'microcopy';
    empty.textContent = 'Aún ninguna. Sobrevivir también deja espacio para perder algo más tarde.';
    scarBlock.append(empty);
  } else {
    const ul = document.createElement('ul');
    ul.className = 'v4-scar-list';
    scars.forEach((scar) => {
      const li = document.createElement('li');
      const title = document.createElement('strong');
      title.textContent = scar.name;
      const desc = document.createElement('span');
      desc.textContent = scar.desc;
      li.append(title, desc);
      ul.append(li);
    });
    scarBlock.append(ul);
  }

  const sigilList = document.querySelector('#sigilList');
  if (sigilList && !document.querySelector('#v4MapBtn')) {
    const button = document.createElement('button');
    button.id = 'v4MapBtn';
    button.type = 'button';
    button.className = 'ghost v4-map-button';
    button.textContent = 'Abrir mapa Ω';
    button.addEventListener('click', v4ShowConvergenceMap);
    sigilList.insertAdjacentElement('afterend', button);
  }

  let vigilia = document.querySelector('#v4VigiliaText');
  if (!vigilia) {
    vigilia = document.createElement('p');
    vigilia.id = 'v4VigiliaText';
    vigilia.className = 'microcopy v4-vigilia-text';
    progression.append(vigilia);
  }
  vigilia.textContent = `Vigilia ${v4Roman(state.campaign?.vigilia || 1)}${state.campaign?.memoryShards ? ` · ${state.campaign.memoryShards} eco${state.campaign.memoryShards === 1 ? '' : 's'} de memoria` : ''}`;
}

function v4ApplySanityAtmosphere() {
  if (!state.player) {
    delete document.body.dataset.sanity;
    return;
  }
  const ratio = state.player.sanity / Math.max(1, state.player.maxSanity);
  document.body.dataset.sanity = ratio <= 0.18 ? 'fractured' : ratio <= 0.35 ? 'unstable' : 'stable';
}

const V4_prevRenderSheet = renderSheet;
renderSheet = function renderSheetV4() {
  V4_prevRenderSheet();
  v4RenderTraitBlocks();
  v4ApplySanityAtmosphere();
};

/* ---------- Alucinaciones de baja cordura ---------- */

function v4MaybeAddHallucination() {
  if (!state.player || !state.currentCaseId) return;
  const ratio = state.player.sanity / Math.max(1, state.player.maxSanity);
  if (ratio > 0.28) return;
  const spec = V4_HALLUCINATIONS[state.currentCaseId];
  if (!spec || state.player.flags?.[`illusion_${state.currentCaseId}`]) return;

  const list = $('#choiceList');
  if (!list || list.querySelector('.v4-hallucination')) return;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'choice-button v4-hallucination';
  const strong = document.createElement('strong');
  strong.textContent = spec[0];
  const span = document.createElement('span');
  span.textContent = 'La opción parece completamente razonable.';
  button.append(strong, span);
  button.addEventListener('click', () => {
    state.player.flags[`illusion_${state.currentCaseId}`] = true;
    applyEffects({ sanity: -1, dread: 1 });
    addJournal(spec[1]);
    save();
    showModal('La escena se corrige', spec[1]);
    render();
  });
  list.append(button);
}

const V4_prevRenderStage = renderStage;
renderStage = function renderStageV4() {
  V4_prevRenderStage();
  if ((state.campaign?.vigilia || 1) > 1) {
    const progress = $('#sceneProgress');
    if (progress && !progress.textContent.includes('Vigilia')) {
      progress.textContent += ` · Vigilia ${v4Roman(state.campaign.vigilia)}`;
    }
  }
  v4MaybeAddHallucination();
};

/* ---------- Presentación de modal y final Ω ---------- */

const V4_prevShowModal = showModal;
showModal = function showModalV4(title, text) {
  V4_prevShowModal(title, text);
  const modal = $('#modal');
  modal?.classList.toggle('v4-result-modal', /Resultado:|Progresión:|Campaña:/.test(String(text)));
};

function v4AttachNewVigiliaButton() {
  const modal = $('#modal');
  const card = modal?.querySelector('.modal-card');
  if (!card || card.querySelector('#v4NewVigiliaBtn')) return;
  const button = document.createElement('button');
  button.id = 'v4NewVigiliaBtn';
  button.type = 'button';
  button.className = 'primary v4-new-vigilia';
  button.textContent = `Comenzar Nueva Vigilia ${v4Roman((state.campaign?.vigilia || 1) + 1)}`;
  button.addEventListener('click', v4StartNewVigilia);
  card.append(button);
}

const V4_prevFinishCase = finishCase;
finishCase = function finishCaseV4(endingId, outcomeText, roll) {
  const gameCase = v4CurrentCase();
  const wasMeta = Boolean(gameCase?.isMeta);
  V4_prevFinishCase(endingId, outcomeText, roll);
  if (wasMeta) v4AttachNewVigiliaButton();
};

/* ---------- Inicialización ---------- */

function v4BootPatch() {
  if (typeof state !== 'undefined') {
    state.campaign = sanitizeCampaign(state.campaign, state.completedCases);
    if ((state.campaign?.vigilia || 1) > 1) v4InstallMemoryChoices();
  }
  document.documentElement.dataset.vigiliaVersion = V4_VERSION;
}

v4BootPatch();

window.addEventListener('DOMContentLoaded', () => {
  const eyebrow = document.querySelector('.brand .eyebrow');
  if (eyebrow) eyebrow.textContent = `RPG narrativo offline · Edición Definitiva v${V4_VERSION}`;
  v4RenderTraitBlocks();
  v4ApplySanityAtmosphere();
});
