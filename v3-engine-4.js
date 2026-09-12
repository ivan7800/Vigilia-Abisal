function finishCase(endingId, outcomeText, roll) {
  const gameCase = findCase(state.currentCaseId);
  if (!gameCase) return;
  const ending = DATA.endings[endingId] || DATA.endings.END_SCAR;
  const quality = calculateOutcomeQuality(endingId, gameCase);
  const previous = state.completedCases[gameCase.id];
  const firstCompletion = !previous;
  const previousScore = previous?.score ?? -1;
  const score = ending.score || 0;
  const result = {
    ending: endingId,
    quality,
    date: new Date().toISOString(),
    clues: state.caseClues || 0,
    score,
    plays: (previous?.plays || 0) + 1
  };
  if (!previous || score >= previousScore) state.completedCases[gameCase.id] = result;
  else state.completedCases[gameCase.id] = { ...previous, plays: result.plays };

  const progressMessage = awardCaseProgress(gameCase, endingId, firstCompletion, previousScore);
  state.currentCaseId = null;
  state.currentStageId = null;
  state.caseClues = 0;
  state.player.dread = Math.max(0, (state.player.dread || 0) - 3);
  if (state.player.health > 0) state.player.health = Math.min(state.player.maxHealth, state.player.health + 2);
  if (state.player.sanity > 0) state.player.sanity = Math.min(state.player.maxSanity, state.player.sanity + 2);
  addJournal(`${gameCase.title} cerrado: ${ending.title}. ${progressMessage}`);
  save();
  render();
  renderRoll(outcomeText, roll);
  const epilogue = gameCase.epilogues?.[endingId] || ending.text;
  const status = campaignStatus();
  const convergenceText = gameCase.isMeta ? '' : `\n\nCampaña: ${status.completed}/20 expedientes · ${status.sigilCount}/5 convergencias · ${state.campaign.insight} Insight.`;
  showModal(ending.title, `${outcomeText}\n\n${epilogue}\n\nResultado: ${quality}\nProgresión: ${progressMessage}${convergenceText}`);
}

function calculateOutcomeQuality(endingId, gameCase = findCase(state.currentCaseId)) {
  const p = state.player;
  const clues = state.caseClues || 0;
  const base = DATA.endings[endingId]?.score || 0;
  const evidenceTarget = gameCase?.isMeta ? 7 : Math.max(4, Math.floor((gameCase?.difficulty || 12) / 3));
  if (base >= 4 && clues >= evidenceTarget) return 'Convergencia dominada';
  if (base >= 3 && clues >= evidenceTarget) return 'Verdad documentada';
  if (base >= 2 && clues >= Math.max(2, evidenceTarget - 2) && p.sanity > p.maxSanity * 0.35) return 'Supervivencia sólida';
  if (base >= 1) return 'Cierre con cicatriz';
  return 'Fracaso traumático';
}

function renderRoll(text, roll) {
  const box = $('#rollBox');
  box.classList.remove('success', 'fail');
  if (!roll) { box.textContent = text || ''; return; }
  box.classList.add(roll.success ? 'success' : 'fail');
  const critical = roll.critical ? ' · éxito crítico' : roll.fumble ? ' · pifia' : '';
  const parts = [];
  if (roll.veteranBonus) parts.push(`veteranía +${roll.veteranBonus}`);
  if (roll.scarBonus) parts.push(`nervio +${roll.scarBonus}`);
  if (roll.choiceBonus) parts.push(`vínculo +${roll.choiceBonus}`);
  if (roll.dreadPenalty) parts.push(`Presagio -${roll.dreadPenalty}`);
  const pressure = roll.casePressure ? ` · presión del expediente ${roll.casePressure > 0 ? '+' : ''}${roll.casePressure}` : '';
  const modifiers = parts.length ? ` · ${parts.join(' · ')}` : '';
  box.textContent = `${roll.success ? 'ÉXITO' : 'FALLO'}${critical}: d12 ${roll.d12} + d6 ${roll.d6} + ${statLabel(roll.stat)} ${roll.statValue}${modifiers} = ${roll.total} contra ${roll.effectiveDc}${pressure}. ${text}`;
}
function renderJournal() {
  const journalList = $('#journalList');
  clearNode(journalList);
  if (!state.journal.length) {
    journalList.appendChild(createElement('li', { text: 'Sin entradas.' }));
    return;
  }
  state.journal.forEach((entry) => {
    const li = createElement('li');
    li.appendChild(createElement('strong', { text: entry.date }));
    li.appendChild(document.createTextNode(` · ${entry.text}`));
    journalList.appendChild(li);
  });
}

function showModal(title, text) {
  $('#modalTitle').textContent = title;
  $('#modalText').textContent = text;
  const modal = $('#modal');
  if (typeof modal.showModal === 'function') modal.showModal();
  else alert(`${title}\n\n${text}`);
}

function exportSave() {
  const blob = new Blob([JSON.stringify(sanitizeSave(state), null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `vigilia-abisal-partida-${Date.now()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importSave(file) {
  if (!file) return;
  if (file.size > MAX_IMPORT_BYTES) {
    showModal('Archivo demasiado grande', 'La partida supera el tamaño máximo permitido. Exporta una partida limpia e inténtalo de nuevo.');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result));
      const clean = sanitizeSave(imported);
      if (!clean.player) throw new Error('Partida no válida');
      state = clean;
      save();
      render();
      showModal('Partida importada', 'La partida se ha cargado correctamente.');
    } catch (error) {
      showModal('Error al importar', 'El archivo no parece una partida válida de Vigilia Abisal.');
    } finally {
      $('#importFile').value = '';
    }
  };
  reader.readAsText(file);
}

function resetGame() {
  const ok = confirm('¿Seguro que quieres borrar la partida local?');
  if (!ok) return;
  try { localStorage.removeItem(V3_STORAGE_KEY); } catch {}
  state = defaultState();
  render();
}

function setupAudio() {
  const saved = settings();
  $('#soundToggle').setAttribute('aria-pressed', 'false');
  $('#soundToggle').textContent = saved.sound === true ? 'Ambiente listo' : 'Ambiente';
}

function startAudio() {
  try {
    if (audioContext) {
      if (audioContext.state === 'suspended') audioContext.resume();
      return;
    }
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const master = audioContext.createGain();
    master.gain.value = 0.045;
    master.connect(audioContext.destination);
    [55, 82.41, 110].forEach((freq, index) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = index === 0 ? 'sine' : 'triangle';
      osc.frequency.value = freq;
      gain.gain.value = index === 0 ? 0.35 : 0.12;
      osc.connect(gain).connect(master);
      osc.start();
      audioNodes.push(osc, gain);
    });
  } catch (error) { console.warn('Audio no disponible:', error); }
}

function stopAudio() {
  audioNodes.forEach((node) => { try { if (node.stop) node.stop(); } catch {} });
  audioNodes = [];
  if (audioContext) { audioContext.close(); audioContext = null; }
}

function toggleAudio() {
  const pressed = $('#soundToggle').getAttribute('aria-pressed') === 'true';
  if (pressed) {
    stopAudio();
    saveSettings({ sound: false });
    $('#soundToggle').setAttribute('aria-pressed', 'false');
    $('#soundToggle').textContent = 'Ambiente';
  } else {
    startAudio();
    saveSettings({ sound: true });
    $('#soundToggle').setAttribute('aria-pressed', 'true');
    $('#soundToggle').textContent = 'Silenciar';
  }
}

function playPulse(success) {
  if (!audioContext) return;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.frequency.value = success ? 220 : 73.42;
  osc.type = success ? 'sine' : 'sawtooth';
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.06, audioContext.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.22);
  osc.connect(gain).connect(audioContext.destination);
  osc.start();
  osc.stop(audioContext.currentTime + 0.25);
}

function setupImportKeyboard() {
  const label = $('#importLabel');
  label.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      $('#importFile').click();
    }
  });
}

function boot() {
  renderArchetypes();
  $('#characterForm').addEventListener('submit', createCharacter);
  $('#resetBtn').addEventListener('click', resetGame);
  $('#exportBtn').addEventListener('click', exportSave);
  $('#importFile').addEventListener('change', (event) => importSave(event.target.files?.[0]));
  setupImportKeyboard();
  $('#backToCases').addEventListener('click', () => {
    state.currentCaseId = null;
    state.currentStageId = null;
    save();
    render();
  });
  $('#modalClose').addEventListener('click', () => $('#modal').close());
  $('#soundToggle').addEventListener('click', toggleAudio);
  setupAudio();
  render();
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('service-worker.js')
      .then((registration) => registration.update())
      .catch((error) => console.warn('SW error:', error));
  }
}


// Reload persisted state through the v3 migrator before DOMContentLoaded fires.
state = loadSave();
