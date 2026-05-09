// ===== Quick Quiz — Hand-crafted chapter review questions =====
(function() {
  var chapterH2s = [...document.querySelectorAll('h2')].filter(function(h) {
    return /^\d+\./.test(h.textContent.trim());
  });
  if (chapterH2s.length === 0) return;

  // Questions are tied to chapter H2 IDs for reliable matching
  var quizBank = {
    'neurohistology-cells-and-tissue-organization': {
      title: 'Neurohistology: Cells and Tissue Organization',
      cards: [
        {
          q: 'In the CNS, a single <span class="qq-blank">?</span> can myelinate <strong>multiple</strong> axons, whereas in the PNS, each <span class="qq-blank">?</span> myelinates only <strong>one</strong> axon segment.',
          a: 'oligodendrocyte / Schwann cell'
        },
        {
          q: 'Glial cells outnumber neurons by approximately <span class="qq-blank">?</span> to 1, and are <strong>not</strong> merely passive support cells — they actively recycle neurotransmitters, modulate synapses, and maintain the ionic environment.',
          a: '10'
        },
        {
          q: 'The gaps in the myelin sheath where action potentials are regenerated are called <span class="qq-blank">?</span>, and they enable <span class="qq-blank">?</span> conduction, dramatically increasing propagation speed.',
          a: 'Nodes of Ranvier / saltatory'
        }
      ]
    },
    'development-of-the-nervous-system': {
      title: 'Development of the Nervous System',
      cards: [
        {
          q: 'The nervous system originates from the <span class="qq-blank">?</span> (ectoderm), which folds to form the <span class="qq-blank">?</span> (future CNS). Cells that break away from the dorsal side form the <span class="qq-blank">?</span>, which gives rise to the PNS.',
          a: 'neural plate / neural tube / neural crest'
        },
        {
          q: 'In the developing neural tube, the notochord secretes <span class="qq-blank">?</span>, which directs <strong>ventral</strong> patterning (basal plate / motor). <strong>Dorsal</strong> patterning (alar plate / sensory) is controlled by <span class="qq-blank">?</span> genes.',
          a: 'Sonic hedgehog (Shh) / BMP and Wnt'
        },
        {
          q: 'About <span class="qq-blank">?</span> genes control brain development in mammals, and the <span class="qq-blank">?</span> contains approximately 80% of all neurons in the brain — mostly tiny granule cells.',
          a: '14,000 / cerebellum'
        }
      ]
    },
    'neuroanatomy-cns-structure': {
      title: 'Neuroanatomy: CNS Structure',
      cards: [
        {
          q: 'In the spinal cord grey matter, the <span class="qq-blank">?</span> horn is sensory, while the <span class="qq-blank">?</span> horn is motor. Motor neurons innervating limb and trunk muscles are found in <span class="qq-blank">?</span>.',
          a: 'dorsal / ventral / lamina 9'
        },
        {
          q: 'The cerebellum has an <span class="qq-blank">?</span> connection with the body because of a <strong>double decussation</strong>: the superior cerebellar peduncle crosses in the midbrain, and the corticospinal tract crosses again at the pyramidal decussation.',
          a: 'ipsilateral'
        },
        {
          q: 'The brainstem consists of two parts: the <span class="qq-blank">?</span> (mesencephalon) and the <span class="qq-blank">?</span> (rhombencephalon). The outdated schema of midbrain-pons-medulla is misleading.',
          a: 'midbrain / hindbrain'
        }
      ]
    },
    'functional-systems': {
      title: 'Functional Systems',
      cards: [
        {
          q: 'The <span class="qq-blank">?</span> tract is the primary voluntary motor pathway. It arises from the primary motor cortex, travels through the internal capsule, and crosses to the opposite side at the <span class="qq-blank">?</span>.',
          a: 'corticospinal / pyramidal decussation'
        },
        {
          q: 'The dorsal column-medial lemniscus pathway (touch/proprioception) crosses in the <span class="qq-blank">?</span>, while the spinothalamic tract (pain/temperature) crosses in the <span class="qq-blank">?</span> within a few segments of entry.',
          a: 'hindbrain / spinal cord'
        },
        {
          q: 'In the autonomic nervous system, sympathetic preganglionic neurons originate from <span class="qq-blank">?</span> and release noradrenaline at the target; parasympathetic preganglionic neurons originate from <span class="qq-blank">?</span> and release acetylcholine.',
          a: 'T1–L2 / brainstem and S2–S4'
        }
      ]
    },
    'clinical-neurology': {
      title: 'Clinical Neurology',
      cards: [
        {
          q: '<span class="qq-blank">?</span> paralysis results from corticospinal tract damage and presents with <strong>increased</strong> tone, hyperreflexia, and Babinski sign. In contrast, <span class="qq-blank">?</span> paralysis results from motor neuron damage and presents with <strong>decreased</strong> tone, lost reflexes, and muscle atrophy.',
          a: 'Spastic / flaccid'
        },
        {
          q: 'Parkinson\'s disease is caused by degeneration of <span class="qq-blank">?</span> neurons in the <span class="qq-blank">?</span>, producing a characteristic <span class="qq-blank">?</span> tremor that disappears with voluntary movement.',
          a: 'dopaminergic / substantia nigra / resting'
        },
        {
          q: 'Alzheimer\'s disease begins in the <span class="qq-blank">?</span>, causing early memory loss. Histologically, it is characterized by extracellular <span class="qq-blank">?</span> plaques and intracellular <span class="qq-blank">?</span> tangles (hyperphosphorylated tau).',
          a: 'hippocampus / amyloid-beta / neurofibrillary'
        }
      ]
    }
  };

  // === Build slide panel UI ===
  var chapterQuizzes = [];

  chapterH2s.forEach(function(h2) {
    var quizData = quizBank[h2.id];
    if (!quizData) return;

    var toggle = document.createElement('button');
    toggle.className = 'quick-quiz-toggle';
    toggle.textContent = 'Quick Quiz';
    h2.appendChild(toggle);

    chapterQuizzes.push({
      toggle: toggle,
      title: quizData.title,
      cards: quizData.cards
    });
  });

  if (chapterQuizzes.length === 0) return;

  var overlay = document.createElement('div');
  overlay.className = 'qq-overlay';

  var panel = document.createElement('div');
  panel.className = 'qq-slide-panel';
  panel.innerHTML =
    '<button class="qq-close">✕</button>' +
    '<div class="qq-panel-header"></div>' +
    '<div class="qq-panel-body"></div>';

  overlay.appendChild(panel);
  document.body.appendChild(overlay);

  var panelHeader = panel.querySelector('.qq-panel-header');
  var panelBody = panel.querySelector('.qq-panel-body');
  var currentChapter = null;

  function showPanel(quiz) {
    panelHeader.textContent = 'Quick Quiz: ' + quiz.title;
    panelBody.innerHTML = quiz.cards.map(function(c) {
      return '<div class="qq-slide-card">' +
        '<div class="qq-question">' + c.q + '</div>' +
        '<button class="qq-reveal" onclick="var a=this.nextElementSibling;a.classList.toggle(\'shown\');this.textContent=a.classList.contains(\'shown\')?\'Hide\':\'Reveal\';">Reveal</button>' +
        '<div class="qq-answer">' + c.a + '</div>' +
      '</div>';
    }).join('');
    overlay.classList.add('open');
    currentChapter = quiz;
    chapterQuizzes.forEach(function(q) { q.toggle.classList.remove('active'); });
    quiz.toggle.classList.add('active');
  }

  function hidePanel() {
    overlay.classList.remove('open');
    if (currentChapter) {
      currentChapter.toggle.classList.remove('active');
      currentChapter = null;
    }
  }

  chapterQuizzes.forEach(function(quiz) {
    quiz.toggle.addEventListener('click', function() {
      if (currentChapter === quiz) { hidePanel(); }
      else { showPanel(quiz); }
    });
  });

  panel.querySelector('.qq-close').addEventListener('click', hidePanel);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) hidePanel(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') hidePanel(); });
})();
