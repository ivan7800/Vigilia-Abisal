function findCase(id) { return DATA.cases.find((item) => item.id === id) || null; }
function findStage(gameCase, id) { return gameCase?.stages?.find((stage) => stage.id === id) || null; }
function statLabel(stat) { return DATA.statNames[stat] || stat; }

function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

function createElement(tag, options = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(options).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    if (key === 'className') node.className = value;
    else if (key === 'text') node.textContent = value;
    else if (key === 'dataset') Object.entries(value).forEach(([dataKey, dataValue]) => { node.dataset[dataKey] = dataValue; });
    else if (key === 'ariaPressed') node.setAttribute('aria-pressed', String(value));
    else node.setAttribute(key, value);
  });
  const list = Array.isArray(children) ? children : [children];
  list.filter((child) => child !== undefined && child !== null).forEach((child) => {
    node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  });
  return node;
}

function createPill(text) {
  return createElement('span', { text });
}

function campaignStatus() {
  const completedIds = Object.keys(state.completedCases || {}).filter((id) => id !== 'abyss');
  const completedSet = new Set(completedIds);
  const sigils = (CAMPAIGN.arcs || []).map((arc) => {
    const count = arc.cases.filter((id) => completedSet.has(id)).length;
    return { ...arc, count, unlocked: count >= arc.need };
  });
  return {
    completed: completedIds.length,
    sigils,
    sigilCount: sigils.filter((item) => item.unlocked).length,
    insight: state.campaign?.insight || 0
  };
}

function getCasePressure(gameCase) {
  if (!gameCase) return 0;
  return clamp(Math.floor((Number(gameCase.difficulty || 12) - 12) / 2), -1, 2);
}

function getVeteranBonus() {
  return Math.min(2, Math.floor(((state.campaign?.level || 1) - 1) / 2));
}

function getPerkText() {
  const level = state.campaign?.level || 1;
  const perks = ['Novato/a: sin bonificación de veteranía.'];
  if (level >= 2) perks.push('Nervio curtido: +1 cuando tienes cicatrices y Presagio ≥ 6.');
  if (level >= 3) perks.push('Método de campo: +1 permanente a las tiradas.');
  if (level >= 5) perks.push('Vigilia experta: la bonificación permanente sube a +2.');
  return perks[perks.length - 1];
}

function isCaseUnlocked(gameCase) {
  if (!gameCase?.isMeta) return { ok: true, reason: '' };
  const status = campaignStatus();
  if (status.completed < 12) return { ok: false, reason: `Cierra ${12 - status.completed} expedientes más` };
  if (status.sigilCount < 4) return { ok: false, reason: `Desbloquea ${4 - status.sigilCount} convergencias más` };
  return { ok: true, reason: '' };
}

function requirementStatus(choice) {
  const req = choice?.requires;
  if (!req) return { ok: true, reason: '' };
  const p = state.player;
  const missing = [];
  if (req.item && !p?.inventory?.includes(req.item)) missing.push(`objeto: ${req.item}`);
  if (Array.isArray(req.itemsAny) && !req.itemsAny.some((item) => p?.inventory?.includes(item))) missing.push(`uno de estos objetos: ${req.itemsAny.join(', ')}`);
  if (req.flag && !p?.flags?.[req.flag]) missing.push('conocimiento de otro hallazgo');
  if (Array.isArray(req.flagsAny) && !req.flagsAny.some((flag) => p?.flags?.[flag])) missing.push('una pista de continuidad');
  if (req.completed && !state.completedCases?.[req.completed]) missing.push(`expediente previo: ${findCase(req.completed)?.title || req.completed}`);
  if (req.campaign) {
    const status = campaignStatus();
    if (req.campaign.completed && status.completed < req.campaign.completed) missing.push(`${req.campaign.completed} expedientes cerrados`);
    if (req.campaign.sigils && status.sigilCount < req.campaign.sigils) missing.push(`${req.campaign.sigils} convergencias`);
    if (req.campaign.insight && status.insight < req.campaign.insight) missing.push(`${req.campaign.insight} de Insight`);
  }
  return { ok: missing.length === 0, reason: missing.join(' · ') };
}

function rollDice(stat, dc, choice = null) {
  const d12 = Math.floor(Math.random() * 12) + 1;
  const d6 = Math.floor(Math.random() * 6) + 1;
  const statValue = state.player.stats[stat] || 0;
  const dreadPenalty = Math.floor((state.player.dread || 0) / 6);
  const veteranBonus = getVeteranBonus();
  const scarBonus = (state.campaign?.level || 1) >= 2 && (state.campaign?.scars?.length || 0) > 0 && (state.player.dread || 0) >= 6 ? 1 : 0;
  const choiceBonus = safeNumber(choice?.bonus, 0, 0, 5);
  const casePressure = getCasePressure(findCase(state.currentCaseId));
  const effectiveDc = Math.max(2, dc + casePressure);
  const total = d12 + d6 + statValue + veteranBonus + scarBonus + choiceBonus - dreadPenalty;
  const critical = d12 === 12 && d6 === 6;
  const fumble = d12 === 1 && d6 === 1;
  const success = critical || (!fumble && total >= effectiveDc);
  return { d12, d6, stat, statValue, dreadPenalty, veteranBonus, scarBonus, choiceBonus, casePressure, total, dc, effectiveDc, success, critical, fumble };
}

function applyEffects(effects = {}) {
  if (!state.player) return;
  state.player = sanitizePlayer(state.player);
  state.campaign = sanitizeCampaign(state.campaign, state.completedCases);
  const p = state.player;
  if (typeof effects.health === 'number') p.health = clamp(p.health + effects.health, 0, p.maxHealth);
  if (typeof effects.sanity === 'number') p.sanity = clamp(p.sanity + effects.sanity, 0, p.maxSanity);
  if (typeof effects.dread === 'number') p.dread = clamp((p.dread || 0) + effects.dread, 0, 16);
  if (typeof effects.clues === 'number') {
    p.clues = Math.max(0, (p.clues || 0) + effects.clues);
    state.caseClues = clamp((state.caseClues || 0) + effects.clues, 0, 99);
  }
  if (typeof effects.insight === 'number') state.campaign.insight = Math.max(0, (state.campaign.insight || 0) + effects.insight);
  if (typeof effects.xp === 'number') {
    state.campaign.xp = Math.max(0, (state.campaign.xp || 0) + effects.xp);
    state.campaign.level = getLevelForXp(state.campaign.xp);
  }
  if (effects.item && !p.inventory.includes(effects.item)) p.inventory.push(safeString(effects.item, '', 70));
  if (effects.removeItem) p.inventory = p.inventory.filter((item) => item !== effects.removeItem);
  if (effects.flag) p.flags[safeString(effects.flag, '', 40)] = true;
  if (effects.note) addJournal(effects.note);
}

function addJournal(text) {
  const entry = {
    date: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' }),
    text: safeString(text, '', 420)
  };
  state.journal.unshift(entry);
  state.journal = sanitizeJournal(state.journal);
}

function renderArchetypes() {
  const container = $('#archetypes');
  clearNode(container);
  DATA.archetypes.forEach((item) => {
    const pills = createElement('div', { className: 'stat-pills' },
      Object.entries(item.stats).map(([key, val]) => createPill(`${statLabel(key)} ${val}`))
    );
    const button = createElement('button', {
      type: 'button',
      className: 'archetype-card',
      dataset: { id: item.id },
      ariaPressed: item.id === selectedArchetype
    }, [
      createElement('h3', { text: item.name }),
      createElement('p', { text: item.desc }),
      pills
    ]);
    button.addEventListener('click', () => {
      selectedArchetype = button.dataset.id;
      renderArchetypes();
    });
    container.appendChild(button);
  });
}

function createCharacter(event) {
  event.preventDefault();
  const archetype = DATA.archetypes.find((item) => item.id === selectedArchetype) || DATA.archetypes[0];
  const name = sanitizeName($('#investigatorName').value);
  state = defaultState();
  state.player = {
    name,
    archetypeId: archetype.id,
    archetypeName: archetype.name,
    stats: { ...archetype.stats },
    health: archetype.health,
    maxHealth: archetype.health,
    sanity: archetype.sanity,
    maxSanity: archetype.sanity,
    dread: 0,
    clues: 0,
    inventory: [...archetype.items],
    flags: {}
  };
  addJournal(`${name} abre el archivo de Vigilia Abisal como ${archetype.name}.`);
  save();
  render();
}

function render() {
  renderArchetypes();
  state = sanitizeSave(state);
  const hasPlayer = Boolean(state.player);
  $('#creatorPanel').classList.toggle('hidden', hasPlayer);
  $('#welcomePanel').classList.toggle('hidden', hasPlayer);
  $('#gamePanel').classList.toggle('hidden', !hasPlayer);
  if (!hasPlayer) return;
  renderSheet();
  renderCases();
  renderJournal();
  if (state.currentCaseId && state.currentStageId) {
    $('#storyPanel').classList.remove('hidden');
    renderStage();
  } else {
    $('#storyPanel').classList.add('hidden');
  }
}
