// ===== Quick Quiz Generation =====
(function() {
  const chapterH2s = [...document.querySelectorAll('#deep-notes h2')].filter(h =>
    /^\d+\./.test(h.textContent.trim())
  );
  if (chapterH2s.length === 0) return;

  const allH2s = [...document.querySelectorAll('#deep-notes h2')];
  const STOP_WORDS = new Set([
    'definition → explanation → examples → connections',
    'key takeaways','summary','learning objectives','concept map','core principle',
    'why this matters','clinical correlation','correct understanding','developmental note',
    'key point','terminology warning','common misconception'
  ]);

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

    var toggle = document.createElement('button');
    toggle.className = 'quick-quiz-toggle';
    toggle.textContent = 'Quick Quiz ▸';
    toggle.addEventListener('click', function() {
      var open = panel.classList.toggle('open');
      toggle.classList.toggle('active', open);
      toggle.textContent = open ? 'Quick Quiz ▾' : 'Quick Quiz ▸';
    });

    var panel = document.createElement('div');
    panel.className = 'quick-quiz-panel';
    panel.innerHTML = '<div class="quick-quiz-inner">' +
      cards.map(function(c) { return '<div class="quick-quiz-card">' +
        '<div class="qq-question">' + c.question + '</div>' +
        '<button class="qq-reveal" onclick="var a=this.nextElementSibling;a.classList.toggle(&quot;shown&quot;);this.textContent=a.classList.contains(&quot;shown&quot;)?&quot;Hide&quot;:&quot;Reveal&quot;;">Reveal</button>' +
        '<div class="qq-answer">' + c.term + '</div>' +
      '</div>'; }).join('') +
    '</div>';

    h2.appendChild(toggle);
    if (nextH2) {
      nextH2.parentNode.insertBefore(panel, nextH2);
    } else {
      h2.parentNode.appendChild(panel);
    }
  });
})();

