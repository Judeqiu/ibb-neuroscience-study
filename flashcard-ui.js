// === Flashcards UI ===
(function() {
  var deck = FLASHCARD_DECK;
  if (!deck || deck.length === 0) return;
  var index = 0;
  var card = document.getElementById("flashcard");
  var qEl = document.getElementById("fcQuestion");
  var aEl = document.getElementById("fcAnswer");
  var counter = document.getElementById("fcCounter");
  var chapter = document.getElementById("fcChapter");
  var hint = document.getElementById("fcHint");

  function show(i) {
    index = ((i % deck.length) + deck.length) % deck.length;
    var c = deck[index];
    qEl.textContent = c.front;
    aEl.innerHTML = (c.image ? '<img src="' + c.image + '" alt="mnemonic" style="max-width:100%;max-height:180px;border-radius:8px;margin-bottom:12px;display:block;" />' : '') + c.back;
    counter.textContent = (index + 1) + " / " + deck.length;
    chapter.textContent = c.chapter;
    hint.textContent = "🃏 Click to reveal";
    card.classList.remove("flipped");
  }

  document.getElementById("fcPrev").addEventListener("click", function() { show(index - 1); });
  document.getElementById("fcNext").addEventListener("click", function() { show(index + 1); });
  card.addEventListener("click", function() {
    var flipped = card.classList.contains("flipped");
    hint.textContent = flipped ? "🃏 Click to reveal" : "💡 Answer shown";
  });
  document.addEventListener("keydown", function(e) {
    if (document.querySelector(".qq-overlay.open")) return;
    if (e.key === "ArrowLeft") { show(index - 1); e.preventDefault(); }
    if (e.key === "ArrowRight") { show(index + 1); e.preventDefault(); }
    if (e.key === " " || e.key === "Spacebar") { card.classList.toggle("flipped"); e.preventDefault(); }
  });

  show(0);
})();
