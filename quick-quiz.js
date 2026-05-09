// ===== Quick Quiz - Slide Panel =====
(function() {
  var chapterH2s = [...document.querySelectorAll('#deep-notes h2')].filter(function(h) {
    return /^\d+\./.test(h.textContent.trim());
  });
  if (chapterH2s.length === 0) return;

  var allH2s = [...document.querySelectorAll('#deep-notes h2')];
  var STOP_WORDS = new Set([
    'definition → explanation → examples → connections',
    'key takeaways','summary','learning objectives','concept map','core principle',
    'why this matters','clinical correlation','correct understanding','developmental note',
    'key point','terminology warning','common misconception'
  ]);

  // === Build quiz data for each chapter ===
  var chapterQuizzes = [];

  chapterH2s.forEach(function(h2) {
    var idx = allH2s.indexOf(h2);
    var nextH2 = allH2s[idx + 1] || null;
    var candidates = [];
    var el = h2.nextElementSibling;
    while (el && el !== nextH2) {
      if (el.tagName === 'P' || el.tagName === 'LI' || el.tagName === 'TD') {
        el.querySelectorAll('strong').forEach(function(s) {
          var t = s.textContent.trim();
          if (t.length < 5 || t.length > 80) return;
          if (/[→—]/.test(t)) return;
          if (STOP_WORDS.has(t.toLowerCase())) return;
          if (/^[\d\s,.\-:;()\/]+$/.test(t)) return;
          var fullText = el.textContent.trim();
          if (fullText.length < 25 || fullText.length > 500) return;
          candidates.push({ term: t, text: fullText });
        });
      }
      el = el.nextElementSibling;
    }

    var sorted = candidates
      .filter(function(c) { return c.term.length >= 5 && !/^[A-Z\s]+$/.test(c.term); })
      .sort(function(a, b) { return (b.term.length + b.text.length * 0.1) - (a.term.length + a.text.length * 0.1); });

    var seen = new Set();
    var picked = [];
    for (var i = 0; i < sorted.length && picked.length < 3; i++) {
      var key = sorted[i].term.toLowerCase();
      if (!seen.has(key)) { seen.add(key); picked.push(sorted[i]); }
    }
    if (picked.length < 2) return;

    var cards = picked.map(function(p) {
      var sentence = p.text;
      if (sentence.length > 300) {
        var termIdx = sentence.toLowerCase().indexOf(p.term.toLowerCase());
        var start = Math.max(0, termIdx - 60);
        var end = Math.min(sentence.length, termIdx + p.term.length + 120);
        sentence = (start > 0 ? '...' : '') + sentence.slice(start, end) + (end < sentence.length ? '...' : '');
      }
      var escapedTerm = p.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      var blanked = sentence.replace(new RegExp(escapedTerm, 'gi'),
        '<span class="qq-blank">?</span>');
      return { term: p.term, question: blanked };
    });

    // Add toggle button to H2
    var toggle = document.createElement('button');
    toggle.className = 'quick-quiz-toggle';
    toggle.textContent = 'Quick Quiz';
    h2.appendChild(toggle);

    chapterQuizzes.push({
      title: h2.textContent.replace(/^\d+\.\s*/, '').replace(/Quick Quiz$/, '').trim(),
      cards: cards,
      toggle: toggle
    });
  });

  if (chapterQuizzes.length === 0) return;

  // === Build single slide panel ===
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
        '<div class="qq-question">' + c.question + '</div>' +
        '<button class="qq-reveal" onclick="var a=this.nextElementSibling;a.classList.toggle(\'shown\');this.textContent=a.classList.contains(\'shown\')?\'Hide\':\'Reveal\';">Reveal</button>' +
        '<div class="qq-answer">' + c.term + '</div>' +
      '</div>';
    }).join('');
    overlay.classList.add('open');
    currentChapter = quiz;
    // Deactivate all toggles, activate current
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

  // Wire toggle buttons
  chapterQuizzes.forEach(function(quiz) {
    quiz.toggle.addEventListener('click', function() {
      if (currentChapter === quiz) {
        hidePanel();
      } else {
        showPanel(quiz);
      }
    });
  });

  // Close button
  panel.querySelector('.qq-close').addEventListener('click', hidePanel);

  // Click overlay background to close
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) hidePanel();
  });

  // ESC key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') hidePanel();
  });
})();
