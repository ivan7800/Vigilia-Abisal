const CAMPAIGN = window.VIGILIA_CAMPAIGN || { arcs: [], themes: {}, epilogues: {}, expansions: {}, crossLinks: [], metaCase: null };

function collectCaseRelic(gameCase) {
  for (const stage of gameCase.stages || []) {
    if (stage.id === 'final') continue;
    for (const choice of stage.choices || []) {
      for (const outcome of [choice.success, choice.fail]) {
        if (outcome?.effects?.item) return outcome.effects.item;
      }
    }
  }
  return null;
}

function rewriteLegacyCaseText(gameCase) {
  const m = CAMPAIGN.motifs?.[gameCase.id];
  if (!m) return;
  const set = (stageId, choiceIndex, side, text) => {
    const stage = gameCase.stages.find((item) => item.id === stageId);
    if (stage?.choices?.[choiceIndex]?.[side]) stage.choices[choiceIndex][side].text = text;
  };
  set('start', 0, 'success', `${m.evidence} deja un patrón verificable. La primera hipótesis útil no explica el horror, pero demuestra que alguien o algo lo ha puesto en marcha.`);
  set('start', 0, 'fail', `Interpretas mal ${m.evidence}. Cuando corriges la lectura, ${m.threat}; has perdido tiempo y Presagio ocupa el hueco.`);
  set('start', 1, 'success', `${m.witness} termina revelando un detalle que no quería pronunciar. Esa grieta en el relato te da una entrada concreta al expediente.`);
  set('start', 1, 'fail', `${m.witness} se cierra por completo. En el silencio posterior, ${m.threat}.`);
  set('trail', 0, 'success', `Siguiendo ${m.trace} separas la evidencia del miedo. La ruta conduce a ${m.threshold} y ya sabes qué detalle no debes perder de vista.`);
  set('trail', 0, 'fail', `${m.trace} parece fiable hasta que se bifurca de una forma imposible. Terminas más cerca de ${m.threshold}, pero sin saber qué te ha seguido.`);
  set('trail', 1, 'success', `${m.method} funciona como guía en lugar de explicación. No comprendes el mecanismo entero, pero consigues avanzar sin obedecer sus reglas.`);
  set('trail', 1, 'fail', `${m.method} te ofrece una certeza demasiado perfecta. La descartas tarde: ${m.threat}.`);
  set('threshold', 0, 'success', `Frente a ${m.threshold}, mantienes una regla humana y consigues cruzar sin entregar nada esencial de ti. La ruta hacia ${m.core} queda abierta.`);
  set('threshold', 0, 'fail', `${m.threshold} exige un precio íntimo. Sales al otro lado, pero una certeza sencilla ha desaparecido de tu memoria.`);
  set('threshold', 1, 'success', `${m.safeguard} deja una referencia segura en un lugar que no debería admitirlas. Esa precaución convierte el regreso en una posibilidad real.`);
  set('threshold', 1, 'fail', `${m.safeguard} se vuelve parte del ritual sin que lo pretendas. La escena responde a tu cautela como si fuera una invitación.`);
  set('core', 0, 'success', `Te enfrentas a ${m.core} sin intentar reducirlo a una escala cómoda. Robas tiempo, evidencia y una salida antes de que la escena termine de cerrarse.`);
  set('core', 0, 'fail', `${m.core} no acepta tu interpretación. Tu cuerpo logra apartarse, pero la explicación humana que traías deja de servir.`);
  set('core', 1, 'success', `Consigues ${m.proof}. La prueba es concreta, transportable y profundamente equivocada; justo por eso puede sostener el expediente.`);
  set('core', 1, 'fail', `${m.proof} se resiste a convertirse en evidencia. El intento te hiere y deja una parte del caso adherida a ti.`);
  set('final', 0, 'success', `${m.closing} encaja con las pruebas reunidas. El informe no hará el mundo más seguro, pero permitirá reconocer la señal cuando vuelva.`);
  set('final', 0, 'fail', `${m.closing} no basta para que otros acepten lo ocurrido. La verdad queda expuesta con forma de delirio y el expediente pierde autoridad pública.`);
  set('final', 1, 'success', `Eliges ${m.lie}. La versión es incompleta pero estable; sobrevives conservando en privado aquello que no debe circular todavía.`);
  set('final', 1, 'fail', `${m.lie} se agrieta en cuanto intentas sostenerla. ${m.threat}; el caso queda cerrado solo sobre el papel.`);
}

function applyCampaignContent() {
  Object.assign(DATA.endings, {
    END_ABYSS_TRUTH: {
      title: 'Final Ω · El índice roto',
      text: 'Has visto la arquitectura común de la Vigilia y has conseguido alterar su índice.',
      score: 4
    },
    END_ABYSS_SEAL: {
      title: 'Final Ω · Cinco sellos',
      text: 'No conoces toda la verdad, pero has separado las convergencias y ganado tiempo.',
      score: 3
    },
    END_ABYSS_LOOP: {
      title: 'Final Ω · El custodio',
      text: 'El archivo sobrevive y ahora conoce tu método. La campaña puede empezar de nuevo con cicatrices.',
      score: 1
    }
  });

  const expandedIds = Object.keys(CAMPAIGN.expansions || {});
  expandedIds.forEach((caseId, index) => {
    const gameCase = DATA.cases.find((item) => item.id === caseId);
    const expansion = CAMPAIGN.expansions[caseId];
    if (!gameCase || !expansion) return;
    gameCase.theme = CAMPAIGN.themes?.[caseId] || 'abyss';
    gameCase.epilogues = CAMPAIGN.epilogues?.[caseId] || {};
    const start = gameCase.stages.find((stage) => stage.id === 'start');
    const trail = gameCase.stages.find((stage) => stage.id === 'trail');
    const threshold = gameCase.stages.find((stage) => stage.id === 'threshold');
    const final = gameCase.stages.find((stage) => stage.id === 'final');
    if (!gameCase.stages.some((stage) => stage.id === expansion.detour.id)) gameCase.stages.splice(1, 0, expansion.detour);
    if (!gameCase.stages.some((stage) => stage.id === expansion.revelation.id)) {
      const coreIndex = gameCase.stages.findIndex((stage) => stage.id === 'core');
      gameCase.stages.splice(Math.max(1, coreIndex), 0, expansion.revelation);
    }

    // Doce expedientes, doce grafos distintos: alternamos qué éxitos y fallos abren las rutas secundarias.
    if (start?.choices?.length >= 2) {
      const primary = index % 2;
      const secondary = (index + 1) % 2;
      if (start.choices[primary]?.success) start.choices[primary].success.next = expansion.detour.id;
      if (start.choices[secondary]?.fail) start.choices[secondary].fail.next = expansion.detour.id;
    }
    if (trail?.choices?.length >= 2) {
      const branch = (index + 1) % 2;
      if (trail.choices[branch]?.success) trail.choices[branch].success.next = expansion.revelation.id;
      if (trail.choices[index % 2]?.fail) trail.choices[index % 2].fail.next = expansion.detour.id;
    }
    if (threshold?.choices?.length >= 2) {
      const branch = index % 2;
      if (threshold.choices[branch]?.success) threshold.choices[branch].success.next = expansion.revelation.id;
    }
    rewriteLegacyCaseText(gameCase);
    if (final) final.isFinalStage = true;
  });

  DATA.cases.forEach((gameCase) => {
    gameCase.theme = gameCase.theme || CAMPAIGN.themes?.[gameCase.id] || 'abyss';
    gameCase.epilogues = gameCase.epilogues || CAMPAIGN.epilogues?.[gameCase.id] || {};
    const relic = collectCaseRelic(gameCase);
    const final = gameCase.stages.find((stage) => stage.id === 'final');
    if (!relic || !final || final.choices.some((choice) => choice.relicResolution)) return;
    final.choices.push({
      label: `Cerrar el caso usando «${relic}»`,
      stat: gameCase.theme === 'dream' || gameCase.theme === 'ritual' || gameCase.theme === 'geometry' ? 'ocultismo' : 'razon',
      dc: Math.max(10, gameCase.difficulty),
      relicResolution: true,
      requires: { item: relic },
      bonus: 1,
      success: {
        text: `El objeto deja de ser un trofeo y se convierte en una herramienta. «${relic}» encaja con la evidencia y te permite cerrar el expediente sin fingir que lo entiendes todo.`,
        next: 'END_TRUTH',
        effects: { clues: 1, insight: 1, flag: `mastered_${gameCase.id}` }
      },
      fail: {
        text: `Intentas forzar «${relic}» para obtener una respuesta definitiva. El objeto responde, pero no de la forma que esperabas.`,
        next: 'END_SCAR',
        effects: { sanity: -2, dread: 1 }
      }
    });
  });

  (CAMPAIGN.crossLinks || []).forEach((link) => {
    const gameCase = DATA.cases.find((item) => item.id === link.caseId);
    const stage = gameCase?.stages?.find((item) => item.id === link.stageId);
    if (!stage || stage.choices.some((choice) => choice.crossLinkId === `${link.caseId}:${link.stageId}`)) return;
    stage.choices.push({
      crossLinkId: `${link.caseId}:${link.stageId}`,
      label: link.label,
      stat: link.stat,
      dc: link.dc,
      bonus: link.bonus || 0,
      requires: link.requires,
      success: { text: link.successText, next: link.next, effects: link.effects || {} },
      fail: {
        text: `${gameCase.title}: la conexión con otro expediente existe, pero la fuerzas antes de tiempo. ${CAMPAIGN.motifs?.[gameCase.id]?.threat || 'La escena responde de una forma imprevista.'}`,
        next: link.next,
        effects: { sanity: -1, dread: 1 }
      }
    });
  });

  if (CAMPAIGN.metaCase && !DATA.cases.some((item) => item.id === CAMPAIGN.metaCase.id)) {
    const meta = JSON.parse(JSON.stringify(CAMPAIGN.metaCase));
    meta.theme = CAMPAIGN.themes?.[meta.id] || 'abyss';
    meta.epilogues = CAMPAIGN.epilogues?.[meta.id] || {};
    DATA.cases.push(meta);
  }
}

applyCampaignContent();


// Runtime upgrade layer for Vigilia Abisal v3.0.0.
// Loaded after app.js v2 to preserve the validated base data while replacing the engine.
const V3_STORAGE_KEY = 'vigiliaAbisal.save.v2';
const V3_LEGACY_STORAGE_KEYS = ['vigiliaAbisal.save.v1', 'investigador404.save.v1'];
const V3_SAVE_SCHEMA_VERSION = 4;

