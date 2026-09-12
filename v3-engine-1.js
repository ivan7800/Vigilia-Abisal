function defaultCampaignState() {
  return {
    xp: 0,
    level: 1,
    insight: 0,
    scars: [],
    metaCompleted: false
  };
}

function defaultState() {
  return {
    schemaVersion: V3_SAVE_SCHEMA_VERSION,
    player: null,
    currentCaseId: null,
    currentStageId: null,
    caseClues: 0,
    completedCases: {},
    campaign: defaultCampaignState(),
    journal: [],
    lastRoll: null,
    createdAt: new Date().toISOString()
  };
}

function safeString(value, fallback = '', max = 140) {
  return String(value ?? fallback).replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, max);
}

function sanitizeName(name) {
  return safeString(name, '', 32) || 'Investigador/a sin nombre';
}

function safeNumber(value, fallback = 0, min = 0, max = 999) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return clamp(Math.trunc(number), min, max);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function sanitizePlayer(player) {
  if (!isPlainObject(player)) return null;
  const archetype = DATA.archetypes.find((item) => item.id === player.archetypeId)
    || DATA.archetypes.find((item) => item.name === player.archetypeName)
    || DATA.archetypes[0];
  const stats = {};
  Object.keys(DATA.statNames).forEach((key) => {
    const base = archetype.stats[key] ?? 2;
    stats[key] = safeNumber(player.stats?.[key], base, 0, 10);
  });
  const maxHealth = safeNumber(player.maxHealth, archetype.health, 1, 30);
  const maxSanity = safeNumber(player.maxSanity, archetype.sanity, 1, 50);
  const inventorySource = Array.isArray(player.inventory) ? player.inventory : archetype.items;
  const inventory = [...new Set(inventorySource.map((item) => safeString(item, '', 70)).filter(Boolean))].slice(0, 80);
  return {
    name: sanitizeName(player.name),
    archetypeId: archetype.id,
    archetypeName: archetype.name,
    stats,
    health: safeNumber(player.health, maxHealth, 0, maxHealth),
    maxHealth,
    sanity: safeNumber(player.sanity, maxSanity, 0, maxSanity),
    maxSanity,
    dread: safeNumber(player.dread, 0, 0, 16),
    clues: safeNumber(player.clues, 0, 0, 999),
    inventory,
    flags: isPlainObject(player.flags) ? { ...player.flags } : {}
  };
}

function sanitizeJournal(journal) {
  if (!Array.isArray(journal)) return [];
  return journal.slice(0, 160).map((entry) => ({
    date: safeString(entry?.date, '', 40),
    text: safeString(entry?.text, '', 420)
  })).filter((entry) => entry.text);
}

function sanitizeCompletedCases(completedCases) {
  if (!isPlainObject(completedCases)) return {};
  const validIds = new Set(DATA.cases.map((item) => item.id));
  const clean = {};
  Object.entries(completedCases).forEach(([id, value]) => {
    if (!validIds.has(id) || !isPlainObject(value)) return;
    const ending = DATA.endings[value.ending] ? value.ending : 'END_SCAR';
    clean[id] = {
      ending,
      quality: safeString(value.quality, 'Caso cerrado', 60),
      date: safeString(value.date, new Date().toISOString(), 40),
      clues: safeNumber(value.clues, 0, 0, 99),
      score: safeNumber(value.score, DATA.endings[ending]?.score || 0, 0, 5),
      plays: safeNumber(value.plays, 1, 1, 999)
    };
  });
  return clean;
}

function getLevelForXp(xp) {
  const thresholds = [0, 10, 24, 42, 64, 90];
  let level = 1;
  thresholds.forEach((threshold, index) => { if (xp >= threshold) level = index + 1; });
  return clamp(level, 1, 6);
}

function sanitizeCampaign(campaign, completedCases) {
  const fallback = defaultCampaignState();
  const values = Object.entries(completedCases || {}).filter(([id]) => id !== 'abyss');
  const retroXp = values.reduce((sum, [id, result]) => {
    const gameCase = findCase(id);
    return sum + Math.max(2, (gameCase?.difficulty || 11) - 9) + (result.score || 0);
  }, 0);
  const retroInsight = values.reduce((sum, [, result]) => sum + Math.max(0, result.score || 0), 0);
  const xp = safeNumber(campaign?.xp, retroXp, 0, 9999);
  const insight = safeNumber(campaign?.insight, retroInsight, 0, 9999);
  const scars = Array.isArray(campaign?.scars)
    ? [...new Set(campaign.scars.map((item) => safeString(item, '', 90)).filter(Boolean))].slice(0, 40)
    : values.filter(([, result]) => (result.score || 0) <= 1).map(([id]) => findCase(id)?.title || id).slice(0, 40);
  return {
    ...fallback,
    xp,
    level: getLevelForXp(xp),
    insight,
    scars,
    metaCompleted: Boolean(campaign?.metaCompleted || completedCases?.abyss)
  };
}

function sanitizeSave(rawSave) {
  const base = defaultState();
  if (!isPlainObject(rawSave)) return base;
  const completedCases = sanitizeCompletedCases(rawSave.completedCases);
  const clean = {
    ...base,
    schemaVersion: V3_SAVE_SCHEMA_VERSION,
    player: sanitizePlayer(rawSave.player),
    completedCases,
    campaign: sanitizeCampaign(rawSave.campaign, completedCases),
    caseClues: safeNumber(rawSave.caseClues, 0, 0, 99),
    journal: sanitizeJournal(rawSave.journal),
    createdAt: safeString(rawSave.createdAt, base.createdAt, 40)
  };

  const gameCase = findCase(rawSave.currentCaseId);
  const stage = findStage(gameCase, rawSave.currentStageId);
  if (clean.player && gameCase && stage) {
    clean.currentCaseId = gameCase.id;
    clean.currentStageId = stage.id;
  }
  if (isPlainObject(rawSave.lastRoll)) {
    clean.lastRoll = {
      d12: safeNumber(rawSave.lastRoll.d12, 1, 1, 12),
      d6: safeNumber(rawSave.lastRoll.d6, 1, 1, 6),
      stat: DATA.statNames[rawSave.lastRoll.stat] ? rawSave.lastRoll.stat : 'razon',
      statValue: safeNumber(rawSave.lastRoll.statValue, 0, 0, 10),
      dreadPenalty: safeNumber(rawSave.lastRoll.dreadPenalty, 0, 0, 3),
      veteranBonus: safeNumber(rawSave.lastRoll.veteranBonus, 0, 0, 3),
      scarBonus: safeNumber(rawSave.lastRoll.scarBonus, 0, 0, 2),
      choiceBonus: safeNumber(rawSave.lastRoll.choiceBonus, 0, 0, 5),
      casePressure: safeNumber(rawSave.lastRoll.casePressure, 0, -1, 3),
      total: safeNumber(rawSave.lastRoll.total, 0, -10, 50),
      dc: safeNumber(rawSave.lastRoll.dc, 10, 0, 30),
      effectiveDc: safeNumber(rawSave.lastRoll.effectiveDc, rawSave.lastRoll.dc || 10, 0, 35),
      success: Boolean(rawSave.lastRoll.success),
      critical: Boolean(rawSave.lastRoll.critical),
      fumble: Boolean(rawSave.lastRoll.fumble)
    };
  }
  return clean;
}

function getStoredJson(primaryKey, legacyKeys = []) {
  const keys = [primaryKey, ...legacyKeys];
  for (const key of keys) {
    try {
      const raw = localStorage.getItem(key);
      if (raw) return { key, value: JSON.parse(raw) };
    } catch (error) {
      console.warn(`No se pudo leer ${key}:`, error);
    }
  }
  return null;
}

function loadSave() {
  const stored = getStoredJson(V3_STORAGE_KEY, V3_LEGACY_STORAGE_KEYS);
  if (!stored) return defaultState();
  const clean = sanitizeSave(stored.value);
  if (stored.key !== V3_STORAGE_KEY) {
    try {
      localStorage.setItem(V3_STORAGE_KEY, JSON.stringify(clean));
      localStorage.removeItem(stored.key);
    } catch (error) {
      console.warn('No se pudo migrar la partida:', error);
    }
  }
  return clean;
}

function save() {
  try {
    localStorage.setItem(V3_STORAGE_KEY, JSON.stringify(sanitizeSave(state)));
  } catch (error) {
    console.warn('No se pudo guardar la partida:', error);
  }
}

function settings() {
  const stored = getStoredJson(SETTINGS_KEY, LEGACY_SETTINGS_KEYS);
  return isPlainObject(stored?.value) ? stored.value : {};
}

function saveSettings(next) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...settings(), ...next }));
  } catch (error) {
    console.warn('No se pudo guardar la configuración:', error);
  }
}
