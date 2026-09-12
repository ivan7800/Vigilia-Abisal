function renderSheet() {
  const p = state.player;
  const status = campaignStatus();
  $('#sheetName').textContent = p.name;
  $('#sheetRole').textContent = p.archetypeName;
  $('#healthMeter').max = p.maxHealth;
  $('#healthMeter').value = p.health;
  $('#healthText').textContent = `${p.health}/${p.maxHealth}`;
  $('#sanityMeter').max = p.maxSanity;
  $('#sanityMeter').value = p.sanity;
  $('#sanityText').textContent = `${p.sanity}/${p.maxSanity}`;
  $('#dreadMeter').value = p.dread || 0;
  $('#dreadText').textContent = `${p.dread || 0}/16`;
  $('#clueText').textContent = p.clues || 0;
  $('#caseText').textContent = status.completed;

  const statsList = $('#statsList');
  clearNode(statsList);
  Object.entries(p.stats).forEach(([key, value]) => {
    statsList.appendChild(createElement('div', {}, [
      createElement('dt', { text: statLabel(key) }),
      createElement('dd', { text: String(value) })
    ]));
  });

  const inventoryList = $('#inventoryList');
  clearNode(inventoryList);
  const items = p.inventory.length ? p.inventory : ['Sin objetos.'];
  items.forEach((item) => inventoryList.appendChild(createElement('li', { text: item })));

  const levelText = $('#levelText');
  if (levelText) levelText.textContent = `Nivel ${state.campaign.level}`;
  const xpText = $('#xpText');
  if (xpText) xpText.textContent = `${state.campaign.xp} XP`;
  const insightText = $('#insightText');
  if (insightText) insightText.textContent = `${state.campaign.insight} Insight`;
  const scarText = $('#scarText');
  if (scarText) scarText.textContent = `${state.campaign.scars.length} cicatrices`;
  const perkText = $('#perkText');
  if (perkText) perkText.textContent = getPerkText();
  const campaignProgress = $('#campaignProgress');
  if (campaignProgress) campaignProgress.textContent = `${status.completed}/20 expedientes · ${status.sigilCount}/5 convergencias`;
  const sigilList = $('#sigilList');
  if (sigilList) {
    clearNode(sigilList);
    status.sigils.forEach((sigil) => sigilList.appendChild(createElement('li', {
      className: sigil.unlocked ? 'sigil unlocked' : 'sigil',
      text: `${sigil.unlocked ? '◆' : '◇'} ${sigil.name} · ${sigil.count}/${sigil.need}`
    })));
  }
}
function renderCases() {
  const caseList = $('#caseList');
  clearNode(caseList);
  DATA.cases.forEach((item) => {
    const done = state.completedCases[item.id];
    const unlock = isCaseUnlocked(item);
    const pressure = getCasePressure(item);
    const statusText = done ? 'Cerrado' : unlock.ok ? 'Abierto' : 'Bloqueado';
    const button = createElement('button', {
      className: `case-card ${done ? 'done' : ''} ${!unlock.ok ? 'locked' : ''} ${item.isMeta ? 'meta-case' : ''}`.trim(),
      type: 'button',
      dataset: { id: item.id, theme: item.theme || 'abyss' },
      disabled: unlock.ok ? null : true,
      title: unlock.ok ? item.title : unlock.reason
    }, [
      createElement('div', { className: 'case-meta' }, [
        createElement('span', { text: item.badge }),
        createElement('strong', { text: statusText })
      ]),
      createElement('h3', { text: item.title }),
      createElement('p', { text: unlock.ok ? item.intro : `${item.intro} · Requisito: ${unlock.reason}.` }),
      createElement('div', { className: 'stat-pills' }, [
        createPill(`Dificultad ${item.difficulty}`),
        createPill(`Presión ${pressure >= 0 ? '+' : ''}${pressure}`),
        createPill(`${item.stages.length} escenas`),
        createPill(item.source.replace('Inspirado en ', ''))
      ])
    ]);
    if (unlock.ok) button.addEventListener('click', () => startCase(button.dataset.id));
    caseList.appendChild(button);
  });
}

function startCase(id) {
  const gameCase = findCase(id);
  if (!gameCase || !state.player) return;
  const unlock = isCaseUnlocked(gameCase);
  if (!unlock.ok) {
    showModal('Archivo Ω bloqueado', unlock.reason);
    return;
  }
  state.currentCaseId = id;
  state.currentStageId = 'start';
  state.caseClues = 0;
  state.player.dread = Math.max(0, Math.floor((state.player.dread || 0) / 2));
  addJournal(`Expediente abierto: ${gameCase.title}. Presión ${getCasePressure(gameCase) >= 0 ? '+' : ''}${getCasePressure(gameCase)}.`);
  save();
  render();
  $('#storyPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function renderStage() {
  const gameCase = findCase(state.currentCaseId);
  const stage = findStage(gameCase, state.currentStageId);
  if (!gameCase || !stage) {
    state.currentCaseId = null;
    state.currentStageId = null;
    save();
    render();
    return;
  }
  const storyPanel = $('#storyPanel');
  storyPanel.dataset.theme = gameCase.theme || 'abyss';
  $('#caseBadge').textContent = gameCase.badge;
  $('#sceneArt').textContent = stage.art || '☾';
  $('#sceneLocation').textContent = stage.location;
  $('#sceneTitle').textContent = gameCase.title;
  $('#sceneText').textContent = stage.text;
  const progress = $('#sceneProgress');
  if (progress) {
    const index = Math.max(0, gameCase.stages.findIndex((item) => item.id === stage.id));
    progress.textContent = `Escena ${index + 1}/${gameCase.stages.length} · ${state.caseClues || 0} pistas de caso`;
  }

  const choiceList = $('#choiceList');
  clearNode(choiceList);
  stage.choices.forEach((choice, index) => {
    const requirement = requirementStatus(choice);
    const pressure = getCasePressure(gameCase);
    const effectiveDc = choice.stat ? Math.max(2, choice.dc + pressure) : null;
    const bonuses = [];
    if (choice.bonus) bonuses.push(`vínculo +${choice.bonus}`);
    const check = choice.stat
      ? `${statLabel(choice.stat)} · dificultad ${effectiveDc}${pressure ? ` (base ${choice.dc})` : ''}${bonuses.length ? ` · ${bonuses.join(' · ')}` : ''}`
      : 'Acción directa';
    const button = createElement('button', {
      className: `choice-button ${!requirement.ok ? 'locked-choice' : ''}`.trim(),
      type: 'button',
      dataset: { index: String(index) },
      disabled: requirement.ok ? null : true,
      title: requirement.ok ? choice.label : `Requiere ${requirement.reason}`
    }, [
      createElement('strong', { text: `${requirement.ok ? '' : '🔒 '}${choice.label}` }),
      createElement('span', { text: requirement.ok ? check : `Requiere ${requirement.reason}` })
    ]);
    if (requirement.ok) button.addEventListener('click', () => choose(Number(button.dataset.index)));
    choiceList.appendChild(button);
  });
}

function choose(index) {
  const gameCase = findCase(state.currentCaseId);
  const stage = findStage(gameCase, state.currentStageId);
  const choice = stage?.choices?.[index];
  if (!gameCase || !stage || !choice) return;
  const requirement = requirementStatus(choice);
  if (!requirement.ok) {
    showModal('Opción bloqueada', `Requiere ${requirement.reason}.`);
    return;
  }
  let outcome = choice.success || { next: choice.next };
  let roll = null;
  if (choice.stat) {
    roll = rollDice(choice.stat, choice.dc, choice);
    outcome = roll.success ? choice.success : choice.fail;
    state.lastRoll = roll;
  }
  if (!outcome) return;
  applyEffects(outcome.effects);
  addJournal(outcome.text);
  playPulse(roll?.success);

  const terminal = checkCriticalCondition();
  if (terminal) {
    finishCase(terminal, outcome.text, roll);
    return;
  }

  if (outcome.next && outcome.next.startsWith('END_')) {
    finishCase(outcome.next, outcome.text, roll);
    return;
  }
  if (!findStage(gameCase, outcome.next)) {
    console.error('Destino narrativo inexistente:', gameCase.id, stage.id, outcome.next);
    showModal('Ruta dañada', 'La decisión apunta a una escena inexistente. La partida se ha conservado para evitar pérdida de datos.');
    save();
    return;
  }
  state.currentStageId = outcome.next;
  save();
  render();
  renderRoll(outcome.text, roll);
}
function checkCriticalCondition() {
  if (!state.player) return null;
  if (state.player.health <= 0) return 'END_DEATH';
  if (state.player.sanity <= 0) return 'END_MADNESS';
  return null;
}

function awardCaseProgress(gameCase, endingId, firstCompletion, previousScore = -1) {
  state.campaign = sanitizeCampaign(state.campaign, state.completedCases);
  const endingScore = DATA.endings[endingId]?.score || 0;
  const oldLevel = state.campaign.level;
  let message = '';
  if (firstCompletion) {
    const xpGain = Math.max(2, (gameCase.difficulty || 11) - 9) + endingScore;
    const insightGain = Math.max(0, endingScore - 1);
    state.campaign.xp += xpGain;
    state.campaign.insight += insightGain;
    message = `+${xpGain} XP${insightGain ? ` · +${insightGain} Insight` : ''}`;
  } else if (endingScore > previousScore) {
    state.campaign.insight += 1;
    message = '+1 Insight por mejorar el desenlace';
  } else {
    message = 'Repetición registrada · sin farmeo de XP';
  }
  if ((endingId === 'END_SCAR' || endingId === 'END_MADNESS' || endingId === 'END_DEATH') && !state.campaign.scars.includes(gameCase.title)) {
    state.campaign.scars.push(gameCase.title);
  }
  state.campaign.level = getLevelForXp(state.campaign.xp);
  if (state.campaign.level > oldLevel) {
    const gains = state.campaign.level - oldLevel;
    state.player.maxHealth = clamp(state.player.maxHealth + gains, 1, 30);
    state.player.maxSanity = clamp(state.player.maxSanity + gains, 1, 50);
    state.player.health = clamp(state.player.health + gains, 0, state.player.maxHealth);
    state.player.sanity = clamp(state.player.sanity + gains, 0, state.player.maxSanity);
    message += ` · Nivel ${state.campaign.level}: +${gains} Salud/Cordura máximas`;
  }
  if (gameCase.isMeta) state.campaign.metaCompleted = true;
  return message;
}
