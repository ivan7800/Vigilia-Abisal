'use strict';

// Vigilia Abisal · Edición Definitiva v4
// Capa compatible con las partidas v3: añade identidad de profesión,
// cicatrices narrativas, mapa de convergencias y Nueva Vigilia+.

const V4_VERSION = '4.0.0-beta.1';

const V4_PROFESSIONS = {
  antiquarian: {
    name: 'Memoria de catálogo',
    text: '+1 Ocultismo cuando llevas 4 o más objetos.',
    applies(stat) { return stat === 'ocultismo' && (state.player?.inventory?.length || 0) >= 4; }
  },
  detective: {
    name: 'Ojo entrenado',
    text: '+1 Percepción en todas las investigaciones.',
    applies(stat) { return stat === 'percepcion'; }
  },
  doctor: {
    name: 'Frialdad clínica',
    text: '+1 Razón mientras estás herido.',
    applies(stat) { return stat === 'razon' && (state.player?.health || 0) < (state.player?.maxHealth || 0); }
  },
  journalist: {
    name: 'Fuente confidencial',
    text: '+1 Presencia al tratar con testigos y cultos.',
    applies(stat) { return stat === 'presencia'; }
  },
  dreamer: {
    name: 'Ancla onírica',
    text: '+1 Temple con Presagio 4 o superior.',
    applies(stat) { return stat === 'temple' && (state.player?.dread || 0) >= 4; }
  },
  smuggler: {
    name: 'Instinto de fuga',
    text: '+1 Movimiento cuando el expediente ejerce Presión.',
    applies(stat) { return stat === 'movimiento' && getCasePressure(findCase(state.currentCaseId)) > 0; }
  },
  linguist: {
    name: 'Gramática imposible',
    text: '+1 Ocultismo ante signos, rituales y geometrías.',
    applies(stat) {
      const theme = findCase(state.currentCaseId)?.theme;
      return stat === 'ocultismo' && ['ritual', 'geometry', 'dream', 'time'].includes(theme);
    }
  },
  geologist: {
    name: 'Lectura del estrato',
    text: '+1 Razón en hielo, desierto y anomalías cósmicas.',
    applies(stat) {
      const theme = findCase(state.currentCaseId)?.theme;
      return stat === 'razon' && ['ice', 'desert', 'cosmic'].includes(theme);
    }
  }
};

const V4_SCARS = {
  carter: { name: 'Voces prestadas', boonStat: 'razon', baneStat: 'presencia', themes: ['grave', 'signal'], text: 'Reconoces imitaciones de voz, pero hablar con ellas te cuesta.' },
  west: { name: 'Pulso ajeno', boonStat: 'razon', baneStat: 'temple', themes: ['flesh', 'alchemy'], text: 'La anatomía imposible ya no te sorprende; la quietud sí.' },
  cthulhu: { name: 'Talasofobia lúcida', boonStat: 'percepcion', baneStat: 'temple', themes: ['sea'], text: 'Ves antes lo que se mueve bajo el agua, aunque desearías no verlo.' },
  colour: { name: 'Cromatismo residual', boonStat: 'percepcion', baneStat: 'razon', themes: ['cosmic'], text: 'Detectas anomalías de luz a costa de confiar menos en tus sentidos.' },
  dunwich: { name: 'Tormenta interior', boonStat: 'ocultismo', baneStat: 'temple', themes: ['rural', 'ritual'], text: 'Los rituales dejan patrones audibles incluso cuando nadie habla.' },
  innsmouth: { name: 'Segundo reflejo', boonStat: 'percepcion', baneStat: 'presencia', themes: ['sea'], text: 'Notas rasgos que otros pasan por alto; los rostros humanos ya no tranquilizan.' },
  mountains: { name: 'Frío que observa', boonStat: 'razon', baneStat: 'temple', themes: ['ice'], text: 'El hielo te ayuda a pensar porque ya sabes que también puede esperar.' },
  kadath: { name: 'Despertar incompleto', boonStat: 'ocultismo', baneStat: 'razon', themes: ['dream'], text: 'Los sueños tienen puertas reconocibles, pero la vigilia parece menos fiable.' },
  dagon: { name: 'Marea negra', boonStat: 'percepcion', baneStat: 'movimiento', themes: ['sea'], text: 'Lees el ritmo del agua mientras tu cuerpo duda antes de acercarse.' },
  tomb: { name: 'Nombre heredado', boonStat: 'ocultismo', baneStat: 'presencia', themes: ['grave'], text: 'Los linajes hablan claro; decir tu propio nombre se ha vuelto extraño.' },
  nyarlathotep: { name: 'Risa anticipada', boonStat: 'percepcion', baneStat: 'presencia', themes: ['theatre'], text: 'Percibes la reacción antes del estímulo y desconfías de toda multitud.' },
  nameless_city: { name: 'Postura ancestral', boonStat: 'movimiento', baneStat: 'razon', themes: ['desert', 'tunnel'], text: 'Tu cuerpo recuerda espacios que tu mente insiste en negar.' },
  zann: { name: 'Silencio afinado', boonStat: 'temple', baneStat: 'percepcion', themes: ['music'], text: 'Sabes cuándo una nota abre algo; a veces oyes esa nota donde no existe.' },
  pickman: { name: 'Ojo del modelo', boonStat: 'percepcion', baneStat: 'temple', themes: ['tunnel'], text: 'Distingues monstruo de pintura demasiado deprisa.' },
  shunned_house: { name: 'Humedad con rostro', boonStat: 'razon', baneStat: 'temple', themes: ['flesh'], text: 'Reconoces focos de contaminación antes que nadie, y también caras donde no las hay.' },
  festival: { name: 'Huella ausente', boonStat: 'ocultismo', baneStat: 'presencia', themes: ['ritual'], text: 'Los ritos invisibles dejan una ausencia reconocible.' },
  ward: { name: 'Retratos presentes', boonStat: 'razon', baneStat: 'presencia', themes: ['alchemy'], text: 'Las identidades falsas muestran costuras, aunque las verdaderas tampoco parecen seguras.' },
  whisperer: { name: 'Voces sin cuerpo', boonStat: 'temple', baneStat: 'percepcion', themes: ['signal'], text: 'Una voz desencarnada ya no te paraliza; ahora la buscas incluso en el ruido.' },
  witch_house: { name: 'Geometría residual', boonStat: 'razon', baneStat: 'movimiento', themes: ['geometry'], text: 'Detectas ángulos imposibles, pero tu cuerpo duda al cruzar puertas normales.' },
  time_shadow: { name: 'Recuerdo futuro', boonStat: 'razon', baneStat: 'temple', themes: ['time'], text: 'Las cronologías rotas te resultan legibles y emocionalmente insoportables.' }
};

function v4CaseIdFromScar(scarText) {
  const normalized = String(scarText || '').toLowerCase();
  return DATA.cases.find((c) => c.id !== 'abyss' && normalized.includes(c.title.toLowerCase()))?.id || null;
}

function v4ActiveScar() {
  const theme = findCase(state.currentCaseId)?.theme;
  const ids = (state.campaign?.scars || []).map(v4CaseIdFromScar).filter(Boolean);
  const id = ids.find((caseId) => V4_SCARS[caseId]?.themes?.includes(theme)) || ids[ids.length - 1];
  return id ? { id, ...V4_SCARS[id] } : null;
}

const v3DefaultCampaignState = defaultCampaignState;
defaultCampaignState = function defaultCampaignStateV4() {
  return { ...v3DefaultCampaignState(), vigils: 1, omegaMemory: false, legacyRelic: '' };
};

const v3SanitizeCampaign = sanitizeCampaign;
sanitizeCampaign = function sanitizeCampaignV4(campaign, completedCases) {
  const clean = v3SanitizeCampaign(campaign, completedCases);
  clean.vigils = safeNumber(campaign?.vigils, 1, 1, 99);
  clean.omegaMemory = Boolean(campaign?.omegaMemory);
  clean.legacyRelic = safeString(campaign?.legacyRelic, '', 70);
  return clean;
};

const v3RollDice = rollDice;
rollDice = function rollDiceV4(stat, dc, choice = null) {
  const roll = v3RollDice(stat, dc, choice);
  const profession = V4_PROFESSIONS[state.player?.archetypeId];
  const professionBonus = profession?.applies(stat) ? 1 : 0;
  const scar = v4ActiveScar();
  const scarBoon = scar?.boonStat === stat ? 1 : 0;
  const scarBane = scar?.baneStat === stat ? 1 : 0;
  roll.professionBonus = professionBonus;
  roll.scarBoon = scarBoon;
  roll.scarBane = scarBane;
  roll.total += professionBonus + scarBoon - scarBane;
  roll.success = roll.critical || (!roll.fumble && roll.total >= roll.effectiveDc);
  return roll;
};

const v3RenderRoll = renderRoll;
renderRoll = function renderRollV4(text, roll) {
  if (!roll) return v3RenderRoll(text, roll);
  const box = $('#rollBox');
  box.classList.remove('success', 'fail');
  box.classList.add(roll.success ? 'success' : 'fail');
  const critical = roll.critical ? ' · éxito crítico' : roll.fumble ? ' · pifia' : '';
  const parts = [];
  if (roll.veteranBonus) parts.push(`veteranía +${roll.veteranBonus}`);
  if (roll.scarBonus) parts.push(`nervio +${roll.scarBonus}`);
  if (roll.choiceBonus) parts.push(`vínculo +${roll.choiceBonus}`);
  if (roll.professionBonus) parts.push(`profesión +${roll.professionBonus}`);
  if (roll.scarBoon) parts.push(`cicatriz +${roll.scarBoon}`);
  if (roll.scarBane) parts.push(`cicatriz -${roll.scarBane}`);
  if (roll.dreadPenalty) parts.push(`Presagio -${roll.dreadPenalty}`);
  const pressure = roll.casePressure ? ` · presión ${roll.casePressure > 0 ? '+' : ''}${roll.casePressure}` : '';
  const modifiers = parts.length ? ` · ${parts.join(' · ')}` : '';
  box.textContent = `${roll.success ? 'ÉXITO' : 'FALLO'}${critical}: d12 ${roll.d12} + d6 ${roll.d6} + ${statLabel(roll.stat)} ${roll.statValue}${modifiers} = ${roll.total} contra ${roll.effectiveDc}${pressure}. ${text}`;
};

function v4EnsureUi() {
  if (!$('#v4CampaignTools')) {
    const host = $('#campaignProgress')?.closest('.mini-block');
    if (host) {
      const tools = createElement('div', { id: 'v4CampaignTools', className: 'v4-tools' }, [
        createElement('button', { id: 'convergenceMapBtn', type: 'button', className: 'ghost', text: 'Mapa de convergencias' }),
        createElement('button', { id: 'newVigilBtn', type: 'button', className: 'ghost hidden', text: 'Nueva Vigilia +' })
      ]);
      host.appendChild(tools);
      $('#convergenceMapBtn').addEventListener('click', v4ShowConvergenceMap);
      $('#newVigilBtn').addEventListener('click', v4StartNewVigil);
    }
  }
  if (!$('#v4DetailBlock')) {
    const progression = $('#perkText')?.closest('.mini-block');
    if (progression) {
      const detail = createElement('div', { id: 'v4DetailBlock', className: 'v4-detail' });
      progression.appendChild(detail);
    }
  }
}

function v4RenderIdentity() {
  v4EnsureUi();
  if (!state.player) return;
  const profession = V4_PROFESSIONS[state.player.archetypeId];
  const scar = v4ActiveScar();
  const detail = $('#v4DetailBlock');
  if (detail) {
    clearNode(detail);
    if (profession) {
      detail.appendChild(createElement('p', { className: 'v4-passive', text: `◆ ${profession.name} — ${profession.text}` }));
    }
    if (scar) {
      detail.appendChild(createElement('p', { className: 'v4-scar', text: `◇ Cicatriz: ${scar.name} — ${scar.text}` }));
    }
    if ((state.campaign?.vigils || 1) > 1) {
      detail.appendChild(createElement('p', { className: 'v4-memory', text: `Ω Nueva Vigilia ${state.campaign.vigils}: el Archivo recuerda la campaña anterior.` }));
    }
  }
  const ng = $('#newVigilBtn');
  if (ng) ng.classList.toggle('hidden', !state.campaign?.metaCompleted);
}

const v3RenderSheet = renderSheet;
renderSheet = function renderSheetV4() {
  v3RenderSheet();
  v4RenderIdentity();
};

function v4ShowConvergenceMap() {
  const status = campaignStatus();
  const completed = new Set(Object.keys(state.completedCases || {}));
  const lines = [];
  (CAMPAIGN.arcs || []).forEach((arc) => {
    const cases = arc.cases.map((id) => {
      const c = findCase(id);
      return `${completed.has(id) ? '◆' : '◇'} ${c ? c.title.replace(/^Expediente [IVXLCDM]+ · /, '') : id}`;
    });
    const current = arc.cases.filter((id) => completed.has(id)).length;
    lines.push(`${current >= arc.need ? '◆' : '◇'} ${arc.name.toUpperCase()}  ${current}/${arc.need}\n${cases.join(' · ')}`);
  });
  lines.push(`Ω ARCHIVO Ω\n${status.completed}/20 expedientes · ${status.sigilCount}/5 convergencias · ${status.insight} Insight`);
  showModal('Mapa de convergencias', lines.join('\n\n'));
}

function v4ChooseLegacyRelic() {
  const inventory = (state.player?.inventory || []).filter((item) => !DATA.archetypes.some((a) => a.items.includes(item)));
  return inventory[0] || '';
}

function v4StartNewVigil() {
  if (!state.player || !state.campaign?.metaCompleted) return;
  const ok = confirm('¿Iniciar Nueva Vigilia +? Conservarás tus cicatrices, un legado del inventario y la memoria de Ω. Los expedientes y la progresión se reiniciarán.');
  if (!ok) return;
  const old = sanitizeSave(state);
  const archetype = DATA.archetypes.find((a) => a.id === old.player.archetypeId) || DATA.archetypes[0];
  const legacyRelic = v4ChooseLegacyRelic();
  const scars = [...(old.campaign.scars || [])];
  const vigils = (old.campaign.vigils || 1) + 1;
  state = defaultState();
  state.player = {
    name: old.player.name,
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
    flags: { omegaEcho: true }
  };
  state.campaign = { ...defaultCampaignState(), scars, vigils, omegaMemory: true, legacyRelic };
  addJournal(`Ω Comienza la Nueva Vigilia ${vigils}. El Archivo conserva ${scars.length} cicatrices${legacyRelic ? ` y el legado «${legacyRelic}»` : ''}.`);
  save();
  render();
  showModal('Nueva Vigilia +', `El mundo ha vuelto al principio, pero tú no.\n\nCicatrices conservadas: ${scars.length}.\n${legacyRelic ? `Legado: ${legacyRelic}.\n` : ''}Memoria Ω: activa.`);
}

// Añade pequeñas intrusiones de Ω en partidas posteriores sin alterar rutas ni guardados.
const v3RenderStage = renderStage;
renderStage = function renderStageV4() {
  v3RenderStage();
  if (!state.campaign?.omegaMemory || !state.currentCaseId) return;
  const stage = findStage(findCase(state.currentCaseId), state.currentStageId);
  if (!stage) return;
  const progress = $('#sceneProgress');
  if (progress && ['start', 'core', 'final'].includes(stage.id)) {
    progress.textContent += ' · Ω esto ya ocurrió de otra manera';
  }
};

// El modal final respeta saltos de línea y obtiene clase de desenlace desde CSS v4.
const v3ShowModal = showModal;
showModal = function showModalV4(title, text) {
  v3ShowModal(title, text);
  const modal = $('#modal');
  if (modal) modal.classList.toggle('omega-modal', /Ω|Vigilia/.test(title));
};

// Rehidrata una vez con el esquema v4 extendido antes de que boot() renderice.
state = loadSave();
window.VIGILIA_V4 = { version: V4_VERSION, professions: V4_PROFESSIONS, scars: V4_SCARS };
